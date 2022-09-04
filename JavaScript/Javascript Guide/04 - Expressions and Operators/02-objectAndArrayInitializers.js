// Object Literals and Array Literals

/* 
They are not primary expressions, because they include a number of subexpressions that specify property and element values
*/

// ARRAY LITERAL

let arr = []; // An empty array: no expressions inside brackets means no elements.

let arr2 = [[1,2,3],[4,5,6],[7,8,9]]; // An array with three elements.

let arr3 = [1,,,4]; // [1,undefined,undefined,4] Undefined elements can be included in an array literal by simply omitting a value between commas.

let arr4 = [1,2,3,] // It is still [1,2,3]. Last element is not undefined and arr4 length is 3, not 4.

// If you try to access the index that is out of bound in arrays, it returns 'undefined'. It doesn't raise an error.

let x = arr3[20] // Undefined
x = arr4[8]     // Undefined


// OBJECT LITERAL

// Similiar to arrays but curly brackets used instead of square brackets.

let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p
