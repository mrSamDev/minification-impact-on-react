import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../dist");
const minifiedPath = path.join(distPath, "minified");
const unminifiedPath = path.join(distPath, "unminified");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const transferStats = {
  minified: { sent: 0, received: 0 },
  unminified: { sent: 0, received: 0 },
};

// Add request logging
app.use((req, res, next) => {
  console.log("Request:", req.url);
  next();
});

const trackTransfer = (buildType) => (req, res, next) => {
  transferStats[buildType].received += parseInt(req.get("content-length") || 0);

  const originalSend = res.send;
  const originalSendFile = res.sendFile;

  res.send = function (data) {
    const dataLength = Buffer.byteLength(data);
    transferStats[buildType].sent += dataLength;
    originalSend.apply(res, arguments);
  };

  res.sendFile = function (path, options, callback) {
    try {
      const stats = fs.statSync(path);
      transferStats[buildType].sent += stats.size;
    } catch (err) {
      console.error("Error reading file stats:", err);
    }
    originalSendFile.apply(res, arguments);
  };

  res.on("finish", () => {
    const contentLength = parseInt(res.get("content-length") || 0);
    if (contentLength > 0) {
      transferStats[buildType].sent += contentLength;
    }
  });

  next();
};

// Log stats updates
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log("Current transfer stats:", JSON.stringify(transferStats, null, 2));
  });
  next();
});

// Serve minified build
app.use("/minified", trackTransfer("minified"), (req, res, next) => {
  // Handle root path
  if (req.url === "/") {
    return res.sendFile(path.join(minifiedPath, "index.html"));
  }

  // Check if the request is for an asset
  const assetPath = path.join(minifiedPath, req.url);
  if (fs.existsSync(assetPath)) {
    // Set correct content type
    if (assetPath.endsWith(".js")) {
      res.set("Content-Type", "application/javascript");
    } else if (assetPath.endsWith(".css")) {
      res.set("Content-Type", "text/css");
    }
    return res.sendFile(assetPath);
  }

  // If no matching file found, send index.html for client-side routing
  res.sendFile(path.join(minifiedPath, "index.html"));
});

// Serve unminified build
app.use("/unminified", trackTransfer("unminified"), (req, res, next) => {
  // Handle root path
  if (req.url === "/") {
    return res.sendFile(path.join(unminifiedPath, "index.html"));
  }

  // Check if the request is for an asset
  const assetPath = path.join(unminifiedPath, req.url);
  if (fs.existsSync(assetPath)) {
    // Set correct content type
    if (assetPath.endsWith(".js")) {
      res.set("Content-Type", "application/javascript");
    } else if (assetPath.endsWith(".css")) {
      res.set("Content-Type", "text/css");
    }
    return res.sendFile(assetPath);
  }

  // If no matching file found, send index.html for client-side routing
  res.sendFile(path.join(unminifiedPath, "index.html"));
});

// Test endpoint to verify stats are working
app.get("/test-transfer/:type", (req, res) => {
  const type = req.params.type;
  const testData = "Test data to verify transfer tracking";
  res.type("text/plain").send(testData);
});

// Stats endpoints
app.get("/api/stats", (req, res) => {
  res.json(transferStats);
});

app.get("/api/stats/reset", (req, res) => {
  transferStats.minified = { sent: 0, received: 0 };
  transferStats.unminified = { sent: 0, received: 0 };
  res.json({ message: "Stats reset", transferStats });
});

// Error handling
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
