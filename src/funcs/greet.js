const { greetPattern } = require('../regex/index');

const containsGreet = (str) => {
  if (greetPattern.test(str)) {
    return true;
  }
};

module.exports = {
  containsGreet,
};
