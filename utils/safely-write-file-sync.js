const path = require('path')
const fs = require('fs')

function safelyWriteFileSync(filePath, string) {
    const directory = path.dirname(filePath);
  
    // Create the directory if it doesn't exist
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  
    fs.writeFileSync(filePath, string);
}

module.exports = safelyWriteFileSync;
