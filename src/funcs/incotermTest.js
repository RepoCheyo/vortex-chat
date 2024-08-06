const { incotermPattern } = require('../regex/index');

const containsIncoterm = (str) => {
  if (incotermPattern.test(str)) {
    return true;
  }
};

module.exports = {
  containsIncoterm,
};
