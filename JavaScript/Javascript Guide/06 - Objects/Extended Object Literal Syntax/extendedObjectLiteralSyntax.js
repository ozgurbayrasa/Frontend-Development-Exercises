/* SHORTHAND PROPERTIES */

let x = 1, y = 2;
let o1 = {x: x, y: y}; // Long Code
let o2 = {x, y};       // Simple Code - ES6
o1.x + o2.y // => 3

/* COMPUTED PROPERTY NAMES */

// => Property name is a variable or a function that returns a value.
// => These properties are called "Computed properties".
const PROPERTY_NAME = "p1"; // Variable (computed property)
function computePropertyName() { return "p" + 2; } // Function (computed property)
let o3 = {};
o3[PROPERTY_NAME] = 1;
o3[computePropertyName()] = 2;
// *** In Es6 you can do it by object literal.
let p = {
 [PROPERTY_NAME]: 1,
 [computePropertyName()]: 2
};
p.p1 + p.p2 // => 3
