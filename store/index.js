const config = require("../functions/config-reader");

const compilationCache = {}

const processedFiles = {};

const targetExtensions = [".jsx", ".tsx", ".html", ".cx"]
const outputCSSFile = (config.output || '') + 'index.css';

const targetAttributes = new Set(['className=']);

module.exports = {
    compilationCache,
    processedFiles,
    targetExtensions,
    outputCSSFile,
    targetAttributes
}
