// See the 'COPYING' file in the project root for licensing information.
/*
 * Javascript Bindings for adapter
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */


/**
 * @file adapter.ts
 * @ingroup afw_bindings_javascript
 * @brief This file contains the Javascript bindings for the adapter category.
 */

interface IAnyObject {
    [prop : string] : any;
}

/**
 * This is the function signature for the objectCallback parameter in adapter
 * functions. Calling this directly will throw a 'Do not call directly' error.
 * 
 * @param {object} object - This is the object from adapter or undefined if
 *     there are no more objects to return.
 * 
 * @param {any} userData - This is the value of the userData parameter when
 *     objectCallback was called.
 * 
 * @returns {boolean} Return true if this callback should not be called again
 *     for any reason such a limit exceeded or the desired object being found.
 */
export function afwAdapterObjectCallbackSignature(client : any, object : object, userData? : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "adapter_objectCallback_signature";
    _action["object"] = object;

    if (userData !== undefined)
        _action["userData"] = userData;

    return client.perform(_action);
}

/**
 * Add an adaptive object to an adapter, specified by the adapterId, with a
 * specified objectType. You may supply an optional objectId, if the
 * underlying adapterId allows it.
 * 
 * @param {string} adapterId - Id of adapter.
 * 
 * @param {string} objectType - Id of adaptive object type of object being
 *     added.
 * 
 * @param {object} object - Object to add.
 * 
 * @param {string} objectId - Optional preferred objectId of object to add.
 *     The adapter may ignore this.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_add_object
 * 
 *     where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry. Property 'objectId' is the
 *     objectId assigned by the adapter.
 */
export function afwAddObject(client : any, objectType : string, object : object, adapterId? : string, objectId? : string, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "add_object";
    _action["objectType"] = objectType;
    _action["object"] = object;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (objectId !== undefined)
        _action["objectId"] = objectId;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Add an adaptive object with a given URI.
 * 
 * @param {anyURI} uri - URI of object to add. If a URI begins with a single
 *     slash ('/'), it is the local object path. In the case of a local path,
 *     an optional preferred objectId of object can be including in URI which
 *     the adapter may ignore.
 * 
 * @param {object} object - Object to add.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_add_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry. Property 'objectId' is the
 *     objectId assigned by the adapter.
 */
export function afwAddObjectWithUri(client : any, uri : any, object : object, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "add_object_with_uri";
    _action["uri"] = uri;
    _action["object"] = object;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function converts an _AdaptiveQueryCriteria_ object to a query string.
 * 
 * @param {object} queryCriteria - An object type _AdaptiveQueryCriteria_
 *     object.
 * 
 * @param {string} adapterId - This is the adapterId of adapter containing the
 *     objectType for validating and mapping this query. If not specified, no
 *     validation or mapping will occur.
 * 
 * @param {string} objectType - This is the objectType used in conjunction
 *     with the adapterId parameter. This parameter is only allowed and is
 *     required if the adapterId parameter is specified.
 * 
 * @param {integer} style - The style of the query string produced. All of the
 *     styles are appropriately url encoded.
 * 
 *     0 - 'name=op=value' where '=op=' will be '==', '!=', '=ge=', etc. with
 *     conjunctions '&' (and) and '|' (or). Parentheses are placed around each
 *     group of like conjunctions except for outer '&'. (default)
 * 
 *     1 - the same as 1 with '=gte=' instead of '=ge=', '=lte=' instead of
 *     '=le=', '=eq=' instead of '=', and '=ne=' instead of '!='.
 * 
 *     2 - similar to 1 with ';' for '&' and ',' for '|'.
 * 
 *     3 - comparisons 'op(name,value)' where 'op' will be 'eq', 'ne', 'ge',
 *     ..., plus conjunctions 'and(list)' and 'or(list)' where 'array' is a
 *     comma separated list of any comparison or conjunction.
 * 
 * @returns {string} Query string representation of the query criteria.
 */
export function afwConvertAdaptiveQueryCriteriaToQueryString(client : any, queryCriteria : object, adapterId? : string, objectType? : string, style? : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "convert_AdaptiveQueryCriteria_to_query_string";
    _action["queryCriteria"] = queryCriteria;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (objectType !== undefined)
        _action["objectType"] = objectType;

    if (style !== undefined)
        _action["style"] = style;

    return client.perform(_action);
}

/**
 * This function converts a query string to an _AdaptiveQueryCriteria_ object.
 * 
 * @param {string} queryString - The query string to convert.
 * 
 * @param {string} adapterId - This is the adapterId of adapter containing the
 *     objectType for validating and mapping this query. If not specified, no
 *     validation or mapping will occur.
 * 
 * @param {string} objectType - This is the objectType used in conjunction
 *     with the adapterId parameter. This parameter is only allowed and is
 *     required if the adapterId parameter is specified.
 * 
 * @returns {object} An object type _AdaptiveQueryCriteria_ object
 *     representing query string.
 */
export function afwConvertQueryStringToAdaptiveQueryCriteria(client : any, queryString : string, adapterId? : string, objectType? : string) : any {

    let _action : IAnyObject = {};

    _action["function"] = "convert_query_string_to_AdaptiveQueryCriteria";
    _action["queryString"] = queryString;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (objectType !== undefined)
        _action["objectType"] = objectType;

    return client.perform(_action);
}

/**
 * Delete an adaptive object.
 * 
 * @param {string} adapterId - Id of adapter containing object to delete.
 * 
 * @param {string} objectType - Id of adaptive object type of object to
 *     delete.
 * 
 * @param {string} objectId - Id of object to delete.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_delete_object
 * 
 *     where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwDeleteObject(client : any, objectType : string, objectId : string, adapterId? : string, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "delete_object";
    _action["objectType"] = objectType;
    _action["objectId"] = objectId;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Delete an adaptive object with a given URI.
 * 
 * @param {anyURI} uri - URI of object to delete. If a URI begins with a
 *     single slash ('/'), it is the local object path.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_delete_object
 * 
 *     where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwDeleteObjectWithUri(client : any, uri : any, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "delete_object_with_uri";
    _action["uri"] = uri;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Get an adaptive object from the adapter, specified by adapterId, objectType
 * and objectId. Optional view options and adapter-specific options may be
 * supplied to influence how the object is returned.
 * 
 * @param {string} adapterId - Id of adapter containing object to retrieve.
 * 
 * @param {string} objectType - Id of adaptive object type of object to
 *     retrieve.
 * 
 * @param {string} objectId - Id of object to retrieve.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_get_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Object retrieved or NULL if not found.
 */
export function afwGetObject(client : any, objectType : string, objectId : string, adapterId? : string, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "get_object";
    _action["objectType"] = objectType;
    _action["objectId"] = objectId;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Get an object with a given URI.
 * 
 * @param {anyURI} uri - URI of object to retrieve. If a URI begins with a
 *     single slash ('/'), it is the local object path.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_get_object
 * 
 *     where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Object retrieved or NULL if not found.
 */
export function afwGetObjectWithUri(client : any, uri : any, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "get_object_with_uri";
    _action["uri"] = uri;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Modify an adaptive object.
 * 
 * @param {string} adapterId - Id of adapter containing object to modify.
 * 
 * @param {string} objectType - Id of adaptive object type of object to
 *     modify.
 * 
 * @param {string} objectId - Id of object to modify.
 * 
 * @param {array} entries - List of modifications. Entries are of the form:
 * 
 *         [         'add_value',         'property name' or ['property name',
 *     ... ],         value     ]
 * 
 *         [         'remove_property',         'property name' or ['property
 *     name', ... ]     ]
 * 
 *         [         'remove_value',         'property name' or ['property
 *     name', ... ],         value     ]
 * 
 *         [         'set_property',         'property name' or ['property
 *     name', ... ],         value     ]
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwModifyObject(client : any, objectType : string, objectId : string, entries : any[], adapterId? : string, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "modify_object";
    _action["objectType"] = objectType;
    _action["objectId"] = objectId;
    _action["entries"] = entries;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Modify an adaptive object with a given URI.
 * 
 * @param {anyURI} uri - URI of object to modify. If a URI begins with a
 *     single slash ('/'), it is the local object path.
 * 
 * @param {array} entries - List of asserts and modifications. Entries are of
 *     the form:
 * 
 *         [         'add_value',         'property name' or ['property name',
 *     ... ],         value     ]
 * 
 *         [         'remove_property',         'property name' or ['property
 *     name', ... ]     ]
 * 
 *         [         'remove_value',         'property name' or ['property
 *     name', ... ],         value     ]
 * 
 *         [         'set_property',         'property name' or ['property
 *     name', ... ],         value     ]
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwModifyObjectWithUri(client : any, uri : any, entries : any[], journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "modify_object_with_uri";
    _action["uri"] = uri;
    _action["entries"] = entries;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Reconcile an adaptive object.
 * 
 * @param {object} object - An object that has been retrieved with object
 *     options reconcilable, and whose properties have been modified. A
 *     modify_object request will be produced reflecting the difference
 *     between the original object and this unmodified object.
 * 
 * @param {boolean} checkOnly - Produce the modify_object request but don't
 *     execute it. The returned journal enter will contain the modify_object
 *     request.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwReconcileObject(client : any, object : object, checkOnly? : boolean) : any {

    let _action : IAnyObject = {};

    _action["function"] = "reconcile_object";
    _action["object"] = object;

    if (checkOnly !== undefined)
        _action["checkOnly"] = checkOnly;

    return client.perform(_action);
}

/**
 * Replace an adaptive object.
 * 
 * @param {string} adapterId - Id of adapter containing object to replace.
 * 
 * @param {string} objectType - Id of adaptive object type of object to
 *     replace.
 * 
 * @param {string} objectId - Id of object to replace.
 * 
 * @param {object} object - Replacement object.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_replace_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwReplaceObject(client : any, objectType : string, objectId : string, object : object, adapterId? : string, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "replace_object";
    _action["objectType"] = objectType;
    _action["objectId"] = objectId;
    _action["object"] = object;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Replace an adaptive object with a given URI.
 * 
 * @param {anyURI} uri - URI of object to replace. If a URI begins with a
 *     single slash ('/'), it is the local object path.
 * 
 * @param {object} object - Replacement object.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_replace_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwReplaceObjectWithUri(client : any, uri : any, object : object, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "replace_object_with_uri";
    _action["uri"] = uri;
    _action["object"] = object;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function retrieves adaptive objects from an adapter, specified by
 * adapterId, which match the type specified by objectType.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {string} adapterId - Id of adapter containing objects to retrieve.
 * 
 * @param {string} objectType - Id of adaptive object type of objects to
 *     retrieve.
 * 
 * @param {object} queryCriteria - This is the query criteria for objects to
 *     be retrieved. If not specified, all objects will be retrieved.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {array} This is the array of objects retrieved.
 */
export function afwRetrieveObjects(client : any, objectType : string, adapterId? : string, queryCriteria? : object, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects";
    _action["objectType"] = objectType;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (queryCriteria !== undefined)
        _action["queryCriteria"] = queryCriteria;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function retrieves adaptive objects from an adapter, specified by
 * adapterId, which match the type specified by objectType.
 * 
 * Each object is passed to the callback as it's retrieved.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {function} objectCallback - If this is specified, this function is
 *     called once for each object retrieved instead of adding the object to
 *     the return array. Parameter object will be an object retrieved or
 *     undefined if there are no more objects. This function should return
 *     true if it wants to abort the retrieve request.
 * 
 * @param {} userData - This value is passed to the objectCallback function in
 *     the userData parameter.
 * 
 * @param {string} adapterId - Id of adapter containing objects to retrieve.
 * 
 * @param {string} objectType - Id of adaptive object type of objects to
 *     retrieve.
 * 
 * @param {object} queryCriteria - This is the query criteria for objects to
 *     be retrieved. If not specified, all objects will be retrieved.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects_to_callback
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {void}
 */
export function afwRetrieveObjectsToCallback(client : any, objectCallback : any, userData : any, objectType : string, adapterId? : string, queryCriteria? : object, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_to_callback";
    _action["objectCallback"] = objectCallback;
    _action["userData"] = userData;
    _action["objectType"] = objectType;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (queryCriteria !== undefined)
        _action["queryCriteria"] = queryCriteria;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function retrieves adaptive objects from an adapter, specified by
 * adapterId, which match the type specified by objectType.
 * 
 * This function is only allowed when called during a request with content
 * type 'application/x-afw'. An '_AdaptiveResponse_' object is written to the
 * request's response as each object is retrieved. This '_AdaptiveResponse_'
 * object has a 'result' property containing the retrieved object and a
 * 'intermediate' property set to true.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {string} adapterId - Id of adapter containing objects to retrieve.
 * 
 * @param {string} objectType - Id of adaptive object type of objects to
 *     retrieve.
 * 
 * @param {object} queryCriteria - This is the query criteria for objects to
 *     be retrieved. If not specified, all objects will be retrieved.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {void}
 */
export function afwRetrieveObjectsToResponse(client : any, objectType : string, adapterId? : string, queryCriteria? : object, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_to_response";
    _action["objectType"] = objectType;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (queryCriteria !== undefined)
        _action["queryCriteria"] = queryCriteria;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function retrieves adaptive objects from an adapter, specified by
 * adapterId, which match the type specified by objectType.
 * 
 * Each object is written to the 'streamId' stream as it's retrieved.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {integer} streamNumber - Stream number objects will be written to as
 *     they are retrieved.
 * 
 * @param {string} adapterId - Id of adapter containing objects to retrieve.
 * 
 * @param {string} objectType - Id of adaptive object type of objects to
 *     retrieve.
 * 
 * @param {object} queryCriteria - This is the query criteria for objects to
 *     be retrieved. If not specified, all objects will be retrieved.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {void}
 */
export function afwRetrieveObjectsToStream(client : any, streamNumber : number, objectType : string, adapterId? : string, queryCriteria? : object, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_to_stream";
    _action["streamNumber"] = streamNumber;
    _action["objectType"] = objectType;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (queryCriteria !== undefined)
        _action["queryCriteria"] = queryCriteria;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Retrieve adaptive objects with a given URI.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {anyURI} uri - URI of objects to retrieve. If a URI begins with a
 *     single slash ('/'), it is the local object path. A query string can be
 *     specified.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {array} This is the array of objects retrieved.
 */
export function afwRetrieveObjectsWithUri(client : any, uri : any, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_with_uri";
    _action["uri"] = uri;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Retrieve adaptive objects with a given URI.
 * 
 * Each object is passed to the callback as it's retrieved.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {function} objectCallback - If this is specified, this function is
 *     called once for each object retrieved instead of adding the object to
 *     the return array. Parameter object will be an object retrieved or
 *     undefined if there are no more objects. This function should return
 *     true if it wants to abort the retrieve request.
 * 
 * @param {any} userData - This is the value passed to the objectCallback
 *     function in the userData parameter.
 * 
 * @param {anyURI} uri - URI of objects to retrieve. If a URI begins with a
 *     single slash ('/'), it is the local object path. A query string can be
 *     specified.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {void}
 */
export function afwRetrieveObjectsWithUriToCallback(client : any, objectCallback : any, userData : any, uri : any, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_with_uri_to_callback";
    _action["objectCallback"] = objectCallback;
    _action["userData"] = userData;
    _action["uri"] = uri;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function retrieves adaptive objects with a given URI.
 * 
 * This function is only allowed when called during a request with content
 * type 'application/x-afw'. An '_AdaptiveResponse_' object is written to the
 * request's response as each object is retrieved. This '_AdaptiveResponse_'
 * object has a 'result' property containing the retrieved object and a
 * 'partial' property set to true.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {anyURI} uri - URI of objects to retrieve. If a URI begins with a
 *     single slash ('/'), it is the local object path. A query string can be
 *     specified.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {void}
 */
export function afwRetrieveObjectsWithUriToResponse(client : any, uri : any, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_with_uri_to_response";
    _action["uri"] = uri;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * This function retrieves adaptive objects with a given URI.
 * 
 * Each object is written to the 'streamId' stream as it's retrieved.
 * 
 * The optional queryCriteria is used to filter the adaptive objects returned.
 * Use the objectOptions parameter to influence how the objects are viewed.
 * 
 * Options, specific to the adapterId, can be optionally supplied.
 * 
 * @param {integer} streamNumber - Stream number objects will be written to as
 *     they are retrieved.
 * 
 * @param {anyURI} uri - URI of objects to retrieve. If a URI begins with a
 *     single slash ('/'), it is the local object path. A query string can be
 *     specified.
 * 
 * @param {object} options - Object view options. See
 *     /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_ for more information.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {void}
 */
export function afwRetrieveObjectsWithUriToStream(client : any, streamNumber : number, uri : any, options? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "retrieve_objects_with_uri_to_stream";
    _action["streamNumber"] = streamNumber;
    _action["uri"] = uri;

    if (options !== undefined)
        _action["options"] = options;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Update an adaptive object.
 * 
 * @param {string} adapterId - Id of adapter containing object to update.
 * 
 * @param {string} objectType - Id of adaptive object type of object to
 *     update.
 * 
 * @param {string} objectId - Id of object to update.
 * 
 * @param {object} object - Object containing properties to replace in
 *     existing object. You can use object_modify instead to update properties
 *     of embedded objects and arrays, as well as to modify individual values
 *     of the object.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwUpdateObject(client : any, objectType : string, objectId : string, object : object, adapterId? : string, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "update_object";
    _action["objectType"] = objectType;
    _action["objectId"] = objectId;
    _action["object"] = object;

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

/**
 * Update an adaptive object with a given URI.
 * 
 * @param {anyURI} uri - URI of object to update. If a URI begins with a
 *     single slash ('/'), it is the local object path.
 * 
 * @param {object} object - Object containing properties to replace in
 *     existing object. You can use object_modify instead to update properties
 *     of embedded objects and arrays, as well as to modify individual values
 *     of the object.
 * 
 * @param {object} journal - The properties of this object will be added to
 *     the associated journal entry. Refer to
 *     /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_ for property names to
 *     avoid and for ones that have specific semantics.
 * 
 * @param {object} adapterTypeSpecific - This is an optional object parameter
 *     with an objectType determined by the adapterType associated with the
 *     adapterId parameter. If the adapterType supports this parameter,
 *     adapter afw will have an adaptive object type with an id of:
 * 
 *     _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
 * 
 *     Where ${adapterType} is the adapter type id.
 * 
 * @returns {object} Resulting journal entry.
 */
export function afwUpdateObjectWithUri(client : any, uri : any, object : object, journal? : object, adapterTypeSpecific? : object) : any {

    let _action : IAnyObject = {};

    _action["function"] = "update_object_with_uri";
    _action["uri"] = uri;
    _action["object"] = object;

    if (journal !== undefined)
        _action["journal"] = journal;

    if (adapterTypeSpecific !== undefined)
        _action["adapterTypeSpecific"] = adapterTypeSpecific;

    return client.perform(_action);
}

