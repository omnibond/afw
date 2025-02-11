#!/usr/bin/env -S afw --syntax test_script --conf ./afw.conf
//?
//? testScript: deny.as
//? customPurpose: Part of authorization tests
//? description: Test deny decisions using application authorizationControl
//? sourceType: script
//?
//? test: get_object
//? description: Test get_object is denied
//? expect: error
//? source: ...

const o: object = get_object("afw", "_AdaptiveAdapter_", "afw");

return 0;