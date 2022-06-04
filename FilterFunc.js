const Interval = require('./Interval');
function filterCourses(courses, [min, max]) {
    const findInterval = new Interval([min, max]);
    return courses.filter((course) => {
      const priceInterval = new Interval(course.prices);
      return findInterval.areOverlapping(priceInterval);
    });
  }
  module.exports = filterCourses;
