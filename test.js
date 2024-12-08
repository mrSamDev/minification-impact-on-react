import puppeteer from "puppeteer";

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const calculateStats = (numbers) => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return {
    avg: numbers.reduce((a, b) => a + b, 0) / numbers.length,
    median: sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid],
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    p95: sorted[Math.floor(sorted.length * 0.95)],
  };
};

async function makeRequest(url, page, index) {
  try {
    const resources = {
      document: { size: 0, count: 0 },
      script: { size: 0, count: 0 },
      stylesheet: { size: 0, count: 0 },
      other: { size: 0, count: 0 },
    };

    // Create a promise that resolves when the page is considered fully loaded
    const loadPromise = new Promise(async (resolve) => {
      const responses = new Set();

      const handleResponse = async (response) => {
        try {
          const request = response.request();
          const type = request.resourceType();
          const buffer = await response.buffer();
          const size = buffer.length;

          switch (type) {
            case "document":
              resources.document.size += size;
              resources.document.count++;
              break;
            case "script":
              resources.script.size += size;
              resources.script.count++;
              break;
            case "stylesheet":
              resources.stylesheet.size += size;
              resources.stylesheet.count++;
              break;
            default:
              resources.other.size += size;
              resources.other.count++;
          }
          responses.add(response.url());
        } catch (e) {
          // Ignore failed responses
        }
      };

      page.on("response", handleResponse);

      const startTime = Date.now();

      await page.goto(url, {
        waitUntil: ["networkidle0", "domcontentloaded", "load"],
        timeout: 30000,
      });

      // Wait for React hydration
      await page.waitForFunction(() => {
        const element = document.querySelector(".p-6");
        return element && window.getComputedStyle(element).display !== "none";
      });

      await delay(100);

      // Clean up the event listener
      page.off("response", handleResponse);

      const loadTime = Date.now() - startTime;

      resolve({ loadTime, resources });
    });

    const result = await loadPromise;
    const totalSize = Object.values(result.resources).reduce((sum, { size }) => sum + size, 0);

    console.log(`[${url.includes("minified") ? "Minified" : "Unminified"}] Request ${index} completed - Size: ${formatBytes(totalSize)}`);

    return {
      loadTime: result.loadTime,
      resources: result.resources,
      totalSize,
    };
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
    return null;
  }
}

async function runTest(iterations = 10, concurrency = 3) {
  console.log(`Starting ${iterations} requests for each endpoint with ${concurrency} concurrent requests...`);

  const results = {
    minified: [],
    unminified: [],
    minifiedResources: {
      document: [],
      script: [],
      stylesheet: [],
      other: [],
    },
    unminifiedResources: {
      document: [],
      script: [],
      stylesheet: [],
      other: [],
    },
  };

  const browser = await puppeteer.launch({
    headless: false,
  });

  const pages = await Promise.all(
    Array(concurrency)
      .fill()
      .map(() => browser.newPage())
  );

  try {
    // Run tests
    for (let i = 0; i < iterations; i += concurrency) {
      const batchSize = Math.min(concurrency, iterations - i);

      // Run minified batch
      const minifiedResults = await Promise.all(pages.slice(0, batchSize).map((page, j) => makeRequest("http://localhost:3000/minified/", page, i + j)));

      minifiedResults
        .filter((r) => r !== null)
        .forEach((r) => {
          results.minified.push(r.loadTime);
          Object.entries(r.resources).forEach(([type, data]) => {
            results.minifiedResources[type].push(data.size);
          });
        });

      // Run unminified batch
      const unminifiedResults = await Promise.all(pages.slice(0, batchSize).map((page, j) => makeRequest("http://localhost:3000/unminified/", page, i + j)));

      unminifiedResults
        .filter((r) => r !== null)
        .forEach((r) => {
          results.unminified.push(r.loadTime);
          Object.entries(r.resources).forEach(([type, data]) => {
            results.unminifiedResources[type].push(data.size);
          });
        });

      console.log(`Completed batch ${Math.floor(i / concurrency) + 1}/${Math.ceil(iterations / concurrency)}`);
    }

    console.log("\n=== Test Results ===\n");

    console.log("Timing Statistics (ms):");
    ["Minified", "Unminified"].forEach((version) => {
      const stats = calculateStats(results[version.toLowerCase()]);
      console.log(`\n${version}:`);
      console.log(`Avg: ${stats.avg.toFixed(2)}ms`);
      console.log(`Median: ${stats.median.toFixed(2)}ms`);
      console.log(`Min: ${stats.min.toFixed(2)}ms`);
      console.log(`Max: ${stats.max.toFixed(2)}ms`);
      console.log(`95th percentile: ${stats.p95.toFixed(2)}ms`);
    });

    console.log("\nResource Size Statistics:");
    ["Minified", "Unminified"].forEach((version) => {
      console.log(`\n${version}:`);
      Object.entries(results[`${version.toLowerCase()}Resources`]).forEach(([type, sizes]) => {
        if (sizes.length > 0) {
          const stats = calculateStats(sizes);
          console.log(`\n  ${type.charAt(0).toUpperCase() + type.slice(1)}:`);
          console.log(`  Avg: ${formatBytes(stats.avg)}`);
          console.log(`  Median: ${formatBytes(stats.median)}`);
          console.log(`  Min: ${formatBytes(stats.min)}`);
          console.log(`  Max: ${formatBytes(stats.max)}`);
        }
      });
    });
  } finally {
    await Promise.all(pages.map((page) => page.close()));
    await browser.close();
  }
}

// Run with fewer iterations by default for testing
runTest(100, 10).catch(console.error);
