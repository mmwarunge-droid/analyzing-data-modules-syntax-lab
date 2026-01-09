require('datejs');

//Creating a function that merges all usernames into one.

function combineUsers(...args) {
  // Initializing the return object
  const combinedObject = {
    users: []
  };

  // Looping through args to isolateeach array and merge into users  attribute of combinedObject
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  // Adding today's date in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Return the final object
  return combinedObject;
}
// Defining merged
const merged = combineUsers(
  ['alice', 'bob'],
  ['charlie'],
  ['diana', 'eric']
);

console.log(merged);
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};