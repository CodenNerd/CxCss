const { targetExtensions, processedFiles } = require("../store");
const fs = require("fs");
const path = require("path");

function traverseDirectory(dirPath, callback) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath, callback);
    } else if (stats.isFile()) {
      const fileExtension = path.extname(file);

      if (targetExtensions.includes(fileExtension)) {
        callback(filePath);
        processedFiles[filePath] = stats.mtimeMs;
      }
    }
  }
}

function watchDirectory(dirPath, callback) {
  fs.watch(dirPath, { recursive: true }, (event, filename) => {
    console.log("Watching...", event);
    const fileExtension = path.extname(filename);
    if (targetExtensions.includes(fileExtension)) {
      const filePath = path.join(dirPath, filename);
      console.log({ filePath });
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        const lastProcessedTime = processedFiles[filePath] || 0;

        if (stats.mtimeMs > lastProcessedTime) {
          callback(filePath);
          processedFiles[filePath] = stats.mtimeMs;
        }
      }
    }
  });
}

module.exports = {
  traverseDirectory,
  watchDirectory,
};
