const config = require("../functions/config-reader");

const compilationCache = {}

const processedFiles = {};

const targetExtensions = [".jsx", ".tsx", ".html"]
const outputCSSFile = (config.output || '') + 'index.css';

module.exports = {
    compilationCache,
    processedFiles,
    targetExtensions,
    outputCSSFile
}
