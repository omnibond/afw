#!/usr/bin/env -S afw --syntax test_script
//?
//? testScript: type_prefix_foo_foobar.as
//? customPurpose: Part of lmdb tests
//? description: Foo / FooBar prefix types (eureka Node/NodeWork shape) with random uuids.
//? sourceType: script
//?
//? test: type_prefix_foo_foobar
//? description: Retrieve of Foo returns every Foo and no FooBar, with many random uuids.
//? skip: false
//? expect: 0
//? source: ...
#!/usr/bin/env afw

let n: integer = 0;
while (n < 50) {
    add_object('lmdb', 'Foo', { k: 'foo' });
    add_object('lmdb', 'FooBar', { k: 'foobar' });
    n = n + 1;
}

let foo: integer = 0;
for (const o: object of retrieve_objects('lmdb', 'Foo')) {
    assert(o.k == 'foo', "retrieve of Foo returned a FooBar");
    foo = foo + 1;
}
let foobar: integer = 0;
for (const o: object of retrieve_objects('lmdb', 'FooBar')) {
    assert(o.k == 'foobar', "retrieve of FooBar returned a Foo");
    foobar = foobar + 1;
}
assert(foo == 50, "retrieve of Foo returned " + to_string(foo) + " of 50");
assert(foobar == 50, "retrieve of FooBar returned " + to_string(foobar) + " of 50");
return 0;
