const { targetExtensions, processedFiles } = require("../store");
const fs = require("fs");
const path = require("path");
const chokidar = require('chokidar');


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

function recursivelyWatch(dirPath, callback) {
  try {
    fs.watch(dirPath, { recursive: true }, callback())
  } catch (error) {
    fs.readdir(directoryPath, { withFileTypes: true }, (error, files) => {
      if (error) {
        console.error(`Error reading directory ${directoryPath}:`, error);
        return;
      }
  
      files.forEach((file) => {
        const filePath = path.join(directoryPath, file.name);
  
        if (file.isDirectory()) {
          recursivelyWatch(filePath); // Recursively watch subdirectories
        } else {
          console.log('File changed:', filePath);
          callback()
        }
      });
    });
  }
}


function watchDirectory(dirPath, callback) {

  const watcher = chokidar.watch(dirPath, {
    ignored: /[\/\\]\./, // ignore dotfiles
    persistent: true,
    // ignoreInitial: true, // optional, skips the initial scan
    // depth: 99, // maximum depth of recursive directory watching
  });


  watcher.on('all', (event, filename) => {
    // console.log("Watching...", event);
    const fileExtension = path.extname(filename);
    if (targetExtensions.includes(fileExtension)) {
      // const filePath = path.join(dirPath, filename);
      const filePath = path.join(filename);
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
