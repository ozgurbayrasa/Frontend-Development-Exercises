// Object property or an array element is evaluated to the value.

/*  SYNTAX: 
    1- expression.identifier Obj.nameProp
    2- expression[expression] Obj[]
*/


let obj = {x: 2, y: 8}; // Example of Object.

let arr = [1,2,3]; // Example of array.

obj.x // Property x of expression obj.
// . must be used in cases you know the property name of your object.  This properts must not include a whitespace or special character.

obj["x"] // Property x of expression obj.

/* [] Bracket Notation;
    - Properties with whitespaces or special characters. 
    - Dynamic variables. 
    
    Flexible than dot accessing.

*/

arr[1] // Element at index 1 of expression arr.
// arr.1 is not valid !!!


// '[]' or '.' is evaluated first, if the value is null or undefined, expression throws TypeError ==> undefined or null doesn't have a property.




