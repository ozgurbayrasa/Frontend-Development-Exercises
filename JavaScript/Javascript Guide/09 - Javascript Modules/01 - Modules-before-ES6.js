// Until recently, JavaScript had no built-in support for modules, and programmers
// working on large code bases did their best to use the weak modularity available
// through classes, objects, and closures.

// -------- MODULES WITH CLASSES --------

// We can use immediately invoked function
// expressions to achieve a kind of modularity by leaving the implementation details
// and utility functions hidden within the enclosing function but making the public API
// of the module the return value of the function.

const BitSet = (function() { 
    // Set BitSet to the return value of this function
    
    // Private implementation details here
    function isValid(set, n) { ... }
    function has(set, byte, bit) { ... }
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
    
    // The public API of the module is just the BitSet class, which we define
    // and return here. The class can use the private functions and constants
    // defined above, but they will be hidden from users of the class
    return class BitSet extends AbstractWritableSet {
        // ... implementation omitted ...
        };
}());


// This is how we could define a stats module
const stats = (function() {

    // Utility functions private to the module
    const sum = (x, y) => x + y;
    const square = x => x * x;
    // A public function that will be exported
    function mean(data) {
        return data.reduce(sum)/data.length;
    }
    // A public function that we will exported
    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
        data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
    );
    }
    // We export the public function as properties of an object
    return { mean, stddev };
}());

// And here is how we might use the module
stats.mean([1, 3, 5, 7, 9]) // => 5
stats.stddev([1, 3, 5, 7, 9]) // => Math.sqrt(10)
   

// Modules bundled up into a single file
const modules = {};
function require(moduleName) { return modules[moduleName]; }

modules["sets.js"] = (function() {
    const exports = {};
    // The contents of the sets.js file go here:
    exports.BitSet = class BitSet { ... };
    return exports;
}());

modules["stats.js"] = (function() {
    const exports = {};
    // The contents of the stats.js file go here:
    const sum = (x, y) => x + y;
    const square = x = > x * x;
    exports.mean = function(data) { ... };
    exports.stddev = function(data) { ... };
    return exports;
}());
   