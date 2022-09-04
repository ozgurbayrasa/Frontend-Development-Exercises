// Conditional Property Access

/*

expression ?.identifier
expression ?.[ expression ]

--> Used for avoiding TypeErrors 
--> obj.propDoesntExist => TYPEERROR
--> obj?.propDoesntExist => undefined 
--> obj?.["propDoesntExist"] => undefined

*/

let obj = {message: "Hello"};
obj.unknown.m // TypeError => undefined.m ???
obj?.unknown?.m // undefined, if ?. equals null or undefined all expression equals to undefined.
let i = 0;
obj?.unknown?.["m"]?.[++i] // This is also undefined but i remains at 0. Incrementing is not happening since short circuit ! 

// Short circuit => All of the expression is set to undefined immediately whenever ?. operator operate on null or undefined.



