const combineUsers = require('./combineUsers');

test('merges multiple user arrays and adds a merge date', () => {
  const result = combineUsers(
    ['alice', 'bob'],
    ['charlie'],
    ['diana', 'eric']
  );

  expect(result.users).toEqual(['alice', 'bob', 'charlie', 'diana', 'eric']);
  expect(result).toHaveProperty('merge_date');
});
