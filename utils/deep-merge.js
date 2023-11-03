function deepMerge(target, source, concatenateStrings = false) {
    // Iterate over all properties in the source object
    for (const key in source) {
      if (source.hasOwnProperty(key) && !Array.isArray(source)) {
        if (source[key] instanceof Object && target[key] instanceof Object) {
          // Recursively merge nested objects
          // console.log('target', target[key], source[key])
          deepMerge(target[key], source[key]);
        } else {
            // console.log({key}, {[key]: source[key] });
          if (concatenateStrings && typeof source[key] == 'string' && target[key]) {
            target[key] += source[key];
          } else {
            target[key] = source[key];
          }
        }
      }
    }
    return target
  }

  
  module.exports = deepMerge
  