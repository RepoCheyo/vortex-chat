const { locationPattern } = require('../regex/index');

const containsLocation = (str) => {
  if (locationPattern.test(str)) {
    return true;
  }
};

module.exports = {
  containsLocation,
};
