const { compilationCache } = require("../store");
const fs = require('fs')

function addToCompilationCache(key, value) {
    compilationCache[key] = value;
}

function resetCompilationCache() {
    Object.keys(compilationCache).forEach((key) => {
        delete compilationCache[key];
    });
}

module.exports = {
    addToCompilationCache,
    resetCompilationCache
}