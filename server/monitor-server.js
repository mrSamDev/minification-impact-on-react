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

  next();
};

// Handle assets for both minified and unminified builds
app.get("/assets/*", (req, res) => {
  const assetPath = req.path.replace("/assets/", "");

  // Try minified path first
  let fullPath = path.join(minifiedPath, "assets", assetPath);

  if (!fs.existsSync(fullPath)) {
    // Try unminified path if minified doesn't exist
    fullPath = path.join(unminifiedPath, "assets", assetPath);
  }

  if (!fs.existsSync(fullPath)) {
    return res.status(404).send("Asset not found");
  }

  // Set correct MIME type
  if (fullPath.endsWith(".js")) {
    res.set("Content-Type", "application/javascript");
  } else if (fullPath.endsWith(".css")) {
    res.set("Content-Type", "text/css");
  }

  res.sendFile(fullPath);
});

// Serve minified build
app.use("/minified", trackTransfer("minified"), (req, res) => {
  res.sendFile(path.join(minifiedPath, "index.html"));
});

// Serve unminified build
app.use("/unminified", trackTransfer("unminified"), (req, res) => {
  res.sendFile(path.join(unminifiedPath, "index.html"));
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
