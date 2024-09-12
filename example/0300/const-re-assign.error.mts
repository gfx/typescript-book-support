// constは再代入できません
// ERROR: Cannot assign to 'x' because it is a constant.
const x = "Hello, world!";
x = "Hi!";
console.log(x); // => Hi!
