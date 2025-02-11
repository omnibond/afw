#!/usr/bin/env -S afw --syntax test_script
//?
//? testScript: adapters.as
//? customPurpose: Part of core function tests
//? description: Exercises errors that can occur with adapter functions
//? sourceType: script
//?
//? test: get_object_no_adapter
//? description: Runs a get_object against a non-existent adapter
//? expect: error
//? source: ...

get_object("blah", "xyz", "abc");


//? test: get_object_no_object_type
//? description: Runs a get_object against a afw adapter with invalid object type
//? expect: error:Not found
//? source: ...

get_object("afw", "xyz", "abc");


//? test: get_object_no_object_id
//? description: Runs a get_object against a afw adapter with invalid object id
//? expect: error:Not found
//? source: ...

get_object("afw", "_AdaptiveObjectType_", "abc");


//? test: get_object_required_parameters
//? description: get_object expects 3 required parameters
//? expect: error:'get_object' expects 3 required parameters
//? source: ...

get_object("afw", "_AdaptiveObjectType_");


//? test: get_object_invalid_path
//? description: Invalid path
//? expect: error:Invalid path
//? skip: true
//? source: ...

/* \fixme */