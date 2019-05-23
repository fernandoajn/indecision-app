console.log('utils.js is running');

// Two ways of named exports
export const subtract = (x,y) => x-y;

const square = x => x*x;
const add = (x,y) => x+y; 

const divide = (x,y) => x/y;
// export default divide;

export { square, add, divide as default };