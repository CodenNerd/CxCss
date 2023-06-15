const chokidar = require('chokidar');

require('./breakpoints.generator');
require('./colors.generator');

const config = require('./config-reader')

const location = config.location || 'src/styles/generic';

const SCSS_FILE = location + '/_generic.scss';


chokidar.watch(SCSS_FILE).on('change', () => {
    require('./generic-map.generator')
    require('./pseudoselectors.generator')
});
