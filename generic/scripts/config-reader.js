const fs = require('fs');
const configFile = 'generic.config.json';
const configData = fs.readFileSync(configFile, 'utf8');
const config = JSON.parse(configData);

module.exports = config;
