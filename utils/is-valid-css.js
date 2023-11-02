const { validate } = require('csstree-validator');
const log = require('./log');

function isValidCSS(cssString) {
    try {
      const errors = validate(cssString)

      if (errors.length) {
        console.log('cxcss: Invalid css string - ' + cssString)
        errors.forEach(error => {
            log(error.message, 'danger')
        })
        return false
      }
      return true;
    } catch (error) {
      console.log('Invalid css string: ' + cssString)
      return false;
    }
}

module.exports = isValidCSS
