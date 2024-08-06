const { schedulePattern } = require('../regex/index');

const containsSchedule = (str) => {
  if (schedulePattern.test(str)) {
    return true;
  }
};

module.exports = {
  containsSchedule,
};
