const filterCourses = require('./FilterFunc');

test('Filter from 200 to infinity', () => {
    const courses = [
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ];
      const result = filterCourses(courses, [200, null]);

  expect(result).toStrictEqual([
  { name: 'Courses in Italy', prices: [100, 200] }, 
  { name: 'Courses in Russia', prices: [null, 400] }, 
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] }, 
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] } 
]);
  
});

test('Filter from 100 to 350', () => {
    const courses = [
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ];
      const result = filterCourses(courses, [100, 350]);

  expect(result).toStrictEqual([
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Italy', prices: [100, 200] }, 
  { name: 'Courses in Russia', prices: [null, 400] }, 
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] }, 
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] } 
]);
  
});

test('Filter from infinity to 200', () => {
    const courses = [
        { name: 'Courses in England', prices: [0, 100] },
        { name: 'Courses in Germany', prices: [500, null] },
        { name: 'Courses in Italy', prices: [100, 200] },
        { name: 'Courses in Russia', prices: [null, 400] },
        { name: 'Courses in China', prices: [50, 250] },
        { name: 'Courses in USA', prices: [200, null] },
        { name: 'Courses in Kazakhstan', prices: [56, 324] },
        { name: 'Courses in France', prices: [null, null] },
      ];
      const result = filterCourses(courses, [null, 200]);

  expect(result).toStrictEqual([
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Italy', prices: [100, 200] }, 
  { name: 'Courses in Russia', prices: [null, 400] }, 
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] }, 
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] }, 
]);
  
});