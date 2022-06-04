function Interval([min, max]) {
    return {
      areOverlapping: (interval) => {
        if (interval.min == null) {
          interval.min = -1;
        }
        if (interval.max == null) {
          interval.max = Infinity;
        }
        if (interval.min <= min) {
          return interval.max >= min;
        } else {
          return interval.min <= max;
        }
      },
      min,
      max,
    };
  }
  module.exports = Interval;