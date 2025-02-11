#!/usr/bin/env -S afw --syntax test_script
//?
//? testScript: array.as
//? customPurpose: Part of test262
//? description: Tests array expressions
//? sourceType: script
//?
//? test: 11.1.4_A1.1
//? description: checking length property of the empty array
//? expect: 0
//? source: ...

let a: array = [];

assert(length(a) == 0, "length(a) != 0");

return 0;

//? test: 11.1.4_A1.3
//? description: checking length property and elements of an array
//? expect: 0
//? source: ...

let a: array = [1,2,3,4,5];

assert(length(a) == 5, "length(a) != 5");
assert(a[0] == 1, "a[0] != 1");
assert(a[1] == 2, "a[1] != 2");
assert(a[2] == 3, "a[2] != 3");
assert(a[3] == 4, "a[3] != 4");
assert(a[4] == 5, "a[4] != 5");

return 0;

//? test: 11.1.4_A2
//? description: create multi dimensional array
//? expect: 0
//? source: ...

let array: array = [[1,2], [3], []];
assert(length(array) === 3, "length(array) != 3");

let subarray: array = array[0];
assert(length(subarray) === 2, "length(subarray) != 2");

subarray = array[1];
assert(length(subarray) === 1, "length(subarray) != 1");

subarray = array[2];
assert(length(subarray) === 0, "length(subarray) != 0");

assert(array[0][0] === 1, "array[0][0] != 1");
assert(array[0][1] === 2, "array[0][1] != 2");
assert(array[1][0] === 3, "array[1][0] != 3");

return 0;

//? test: spread-err-mult-err-obj-unresolvable
//? description: object spread operator results in error when using an unresolvable reference (array initializer)
//? expect: error
//? source: ...

let a: array = [{a: 0, ...unresolvableReference}];

return 0;

//? test: spread-err-mult-err-unresolvable
//? description: spread operator following other arguments when reference is unresolvable (array initializer)
//? expect: error
//? source: ...

let a: array = [0, ...unresolvableReference];

return 0;


//? test: spread-err-sngl-err-unresolvable
//? description: spread operator applied to the only argument when reference is unresolvable (array initializer)
//? expect: error
//? source: ...

let a: array = [...unresolvableReference];

return 0;

//? test: spread-err-sngl-err-obj-unresolvable
//? description: object spread operator results in error when using an unresolvable reference (array initializer)
//? expect: error
//? source: ...

let a: array = [{...unresolvableReference}];

return 0;

//? test: spread-mult-empty
//? description: spread operator following other arguments when no iteration occurs (array initializer)
//? expect: 0
//? source: ...

let a: array = [1, 2, 3, ...[]];

assert(length(a) === 3, "length(a) != 3");
assert(a[0] === 1, "a[0] != 1");
assert(a[1] === 2, "a[1] != 2");
assert(a[2] === 3, "a[2] != 3");

return 0;

//? test: spread-mult-literal
//? description: spread operator applied to assignment expression following other elements (array initializer)
//? expect: 0
//? source: ...

let a: array = [5, ...[6, 7, 8], 9];
assert(length(a) === 5, "length(a) != 5");
assert(a[0] === 5, "a[0] != 5");
assert(a[1] === 6, "a[1] != 6");
assert(a[2] === 7, "a[2] != 7");
assert(a[3] === 8, "a[3] != 8");
assert(a[4] === 9, "a[4] != 9");

return 0;

//? test: spread-obj-mult-spread
//? description: multiple object spread operation (array initializer)
//? expect: 0
//? source: ...

let o: object = {a: 2, b: 3};
let o2: object = {c: 4, d: 5};
let a: array = [{...o, ...o2}];

assert(length(a) === 1, "length(a) != 1");
assert(a[0].a === 2, "a[0].a != 2");
assert(a[0].b === 3, "a[0].b != 3");
assert(a[0].c === 4, "a[0].c != 4");
assert(a[0].d === 5, "a[0].d != 5");

return 0;

//? test: spread-sngl-empty
//? description: Spread operator applied to the only argument when no iteration occurs (array initializer)
//? expect: 0
//? source: ...

let a: array = [...[]];
assert(length(a) === 0, "length(a) != 0");

return 0;

//? test: spread-sngl-literal
//? description: spread operator applied to array literal as only element (array initializer)
//? expect: 0
//? source: ...

let a: array = [...[3, 4, 5]];
assert(length(a) === 3, "length(a) != 3");

return 0;