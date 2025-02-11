// See the 'COPYING' file in the project root for licensing information.
/*
 * Javascript Bindings for lmdb
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */


/**
 * @file lmdb.ts
 * @ingroup afw_bindings_javascript
 * @brief This file contains the Javascript bindings for the lmdb category.
 */

interface IAnyObject {
    [prop : string] : any;
}

/**
 * Check for stale entries in the reader lock table.
 * 
 * @param {string} adapterId - Adapter Id.
 * 
 * @returns {integer} Number of stale slots that were cleared.
 */
export function afwReaderCheck(client : any, adapterId? : string) : any {

    let _action : IAnyObject = {};

    _action["function"] = "reader_check";

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    return client.perform(_action);
}

/**
 * Dump the entries in the reader lock table.
 * 
 * @param {string} adapterId - Adapter Id.
 * 
 * @returns {string} Reader entries.
 */
export function afwReaderList(client : any, adapterId? : string) : any {

    let _action : IAnyObject = {};

    _action["function"] = "reader_list";

    if (adapterId !== undefined)
        _action["adapterId"] = adapterId;

    return client.perform(_action);
}

