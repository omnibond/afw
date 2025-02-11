// See the 'COPYING' file in the project root for licensing information.
/*
 * Javascript Bindings for unevaluated
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */


/**
 * @file unevaluated.ts
 * @ingroup afw_bindings_javascript
 * @brief This file contains the Javascript bindings for the unevaluated category.
 */

interface IAnyObject {
    [prop : string] : any;
}

/**
 * Checks whether value is dataType unevaluated and return the boolean result.
 * 
 * @param {} value - Value to check
 * 
 * @returns {boolean}
 */
export function afwIsUnevaluated(client : any, value : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is<unevaluated>";
    _action["value"] = value;

    return client.perform(_action);
}

