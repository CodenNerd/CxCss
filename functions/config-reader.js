const fs = require('fs');
const deepMerge = require('../utils/deep-merge');
const log = require('../utils/log');
const configFile = 'cx.config.json';

let config = {
    watchDirectory: './',
    layers: [ "base" ],
    colors: {
        info: '#88bef5',
        warning: '#feb062',
        danger: '#ff304f',
        success: '#2cb978'
    },
    breakpoints: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px" 
    },
    "aliases" : {
    },
    "aliasesFile": "./aliases.cx"
}
try {
    const configData = fs.readFileSync(configFile, 'utf8');
    config = Object.assign({}, config)
    config.layers = [...config.layers, ...(JSON.parse(configData).layers || [])]
    deepMerge(config, JSON.parse(configData));
} catch(error) {
    log('Warning: Error parsing cx.config.json', 'warning');
}

module.exports = config;
