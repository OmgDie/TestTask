const Interval = require('./Interval');

test('[0, 7] intersected [5, 10]', () => {
    const interval = new Interval ([5, 10]);
    const interval2 = new Interval ([0, 7]);
    expect(interval.areOverlapping(interval2)).toBe(true);
    });

test('[0, null] intersected [5, 10]', () => {
    const interval = new Interval ([5, 10]);
    const interval2 = new Interval ([0, null]);
   expect(interval.areOverlapping(interval2)).toBe(true);
   });

test('[null, 7] intersected [5, 10]', () => {
    const interval = new Interval ([5, 10]);
    const interval2 = new Interval ([null, 7]);
   expect(interval.areOverlapping(interval2)).toBe(true);
   });

test('[null, null] intersected [5, 10]', () => {
    const interval = new Interval ([5, 10]);
    const interval2 = new Interval ([null, null]);
   expect(interval.areOverlapping(interval2)).toBe(true);
   });

test('[null, null] intersected [null, null]', () => {
    const interval = new Interval ([null, null]);
    const interval2 = new Interval ([null, null]);
   expect(interval.areOverlapping(interval2)).toBe(true);
   });

test('[100, 250] intersected [100, 250]', () => {
    const interval = new Interval ([100, 250]);
    const interval2 = new Interval ([100, 250]);
   expect(interval.areOverlapping(interval2)).toBe(true);
   });