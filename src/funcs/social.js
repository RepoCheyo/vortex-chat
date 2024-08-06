const { socialPattern } = require('../regex/index');

const containsSocial = (str) => {
  if (socialPattern.test(str)) {
    return true;
  }
};

module.exports = {
  containsSocial,
};
