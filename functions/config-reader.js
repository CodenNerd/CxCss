const fs = require('fs');
const configFile = 'generic.config.json';

let config = {
    watchDirectory: './'
}
try {
    const configData = fs.readFileSync(configFile, 'utf8');
    config = { ...config, ...JSON.parse(configData) } ;
} catch(error) {
    console.log('Warning: Error parsing generic.config.json', error);
}


module.exports = config;
