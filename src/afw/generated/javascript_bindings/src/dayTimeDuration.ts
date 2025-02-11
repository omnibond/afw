// See the 'COPYING' file in the project root for licensing information.
/*
 * Javascript Bindings for dayTimeDuration
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */


/**
 * @file dayTimeDuration.ts
 * @ingroup afw_bindings_javascript
 * @brief This file contains the Javascript bindings for the dayTimeDuration category.
 */

interface IAnyObject {
    [prop : string] : any;
}

/**
 * Returns boolean true if at least one value in dayTimeDuration array1 is in
 * dayTimeDuration array2.
 * 
 * @param {array} array1 - The first array.
 * 
 * @param {array} array2 - The second array.
 * 
 * @returns {boolean}
 */
export function afwAtLeastOneMemberOfDayTimeDuration(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "at_least_one_member_of<dayTimeDuration>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Takes any number of dayTimeDuration values and returns an array of array.
 * 
 * @param {array} values -
 * 
 * @returns {array}
 */
export function afwBagDayTimeDuration(client : any, values? : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "bag<dayTimeDuration>";

    if (values !== undefined)
        _action["values"] = values;

    return client.perform(_action);
}

/**
 * This returns the integer number of values in array.
 * 
 * @param {array} value -
 * 
 * @returns {integer}
 */
export function afwBagSizeDayTimeDuration(client : any, value : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "bag_size<dayTimeDuration>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Converts value to data type dayTimeDuration returning dayTimeDuration
 * result.
 * 
 * @param {} value - Value to convert
 * 
 * @returns {dayTimeDuration} Converted value
 */
export function afwDayTimeDuration(client : any, value : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "dayTimeDuration";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Determine if dayTimeDuration arg1 is equal to the value of arg2 converted
 * to the data type of arg1 then return the boolean result. Use 'eqx' ('===')
 * instead if you want false to be returned if arg1 and arg2's data type don't
 * match.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwEqDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "eq<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Determine if for dayTimeDuration arg1 is equal to the value and data type
 * of arg2 then return the boolean result. Use 'eq' ('==') instead if you want
 * arg2 to be converted to the data type of arg1 before comparison.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwEqxDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "eqx<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Checks for dayTimeDuration arg1 is greater than or equal to dayTimeDuration
 * arg2 and return the boolean result.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {dayTimeDuration} arg2 -
 * 
 * @returns {boolean}
 */
export function afwGeDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "ge<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Checks for dayTimeDuration arg1 is greater than dayTimeDuration arg2 and
 * return the boolean result.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {dayTimeDuration} arg2 -
 * 
 * @returns {boolean}
 */
export function afwGtDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "gt<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Returns an array of dayTimeDuration with the values that are common to both
 * array of dayTimeDuration array1 and array2.
 * 
 * @param {array} array1 - The first array.
 * 
 * @param {array} array2 - The second array.
 * 
 * @returns {array}
 */
export function afwIntersectionDayTimeDuration(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "intersection<dayTimeDuration>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Checks whether value is dataType dayTimeDuration and return the boolean
 * result.
 * 
 * @param {} value - Value to check
 * 
 * @returns {boolean}
 */
export function afwIsDayTimeDuration(client : any, value : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is<dayTimeDuration>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Checks whether dayTimeDuration value is in array of dayTimeDuration array
 * and returns the boolean result.
 * 
 * @param {dayTimeDuration} value -
 * 
 * @param {array} array -
 * 
 * @returns {boolean}
 */
export function afwIsInDayTimeDuration(client : any, value : any, array : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is_in<dayTimeDuration>";
    _action["value"] = value;
    _action["array"] = array;

    return client.perform(_action);
}

/**
 * Checks for dayTimeDuration arg1 is less than or equal to dayTimeDuration
 * arg2 and return the boolean result.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwLeDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "le<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Checks for dayTimeDuration arg1 is less that dayTimeDuration arg2 and
 * return the boolean result.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {dayTimeDuration} arg2 -
 * 
 * @returns {boolean}
 */
export function afwLtDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "lt<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Determine if dayTimeDuration arg1 is not equal to the value of arg2
 * converted to the data type of arg1 then return the boolean result. Use
 * 'nex' ('!==') instead if you want true to be returned if arg1 and arg2's
 * data type don't match.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwNeDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "ne<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Determine if for dayTimeDuration arg1 is not equal to the value or data
 * type of arg2 then return the boolean result. Use 'ne' ('!=') instead if you
 * want arg2 to be converted to the data type of arg1 before comparison.
 * 
 * @param {dayTimeDuration} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwNexDayTimeDuration(client : any, arg1 : any, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "nex<dayTimeDuration>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * This converts an array of dayTimeDuration values that contains one value to
 * a single dayTimeDuration value.
 * 
 * @param {array} array -
 * 
 * @returns {dayTimeDuration}
 */
export function afwOneAndOnlyDayTimeDuration(client : any, array : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "one_and_only<dayTimeDuration>";
    _action["array"] = array;

    return client.perform(_action);
}

/**
 * Returns boolean true if dayTimeDuration array1 and dayTimeDuration array2
 * are subsets of each other and return the boolean result.
 * 
 * @param {array} array1 -
 * 
 * @param {array} array2 -
 * 
 * @returns {boolean}
 */
export function afwSetEqualsDayTimeDuration(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "set_equals<dayTimeDuration>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Returns boolean true if the unique values in dayTimeDuration array1 are all
 * in dayTimeDuration array2.
 * 
 * @param {array} array1 - The first array.
 * 
 * @param {array} array2 - The second array.
 * 
 * @returns {boolean}
 */
export function afwSubsetDayTimeDuration(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "subset<dayTimeDuration>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Converts dayTimeDuration value to string. For array values, the to_string()
 * value for each entry is returned separated with commas.
 * 
 * @param {dayTimeDuration} value - A dayTimeDuration value.
 * 
 * @returns {string} The string representation of the value.
 */
export function afwToStringDayTimeDuration(client : any, value : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "to_string<dayTimeDuration>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Returns an array of dayTimeDuration contains all of the unique values in
 * two or more array of dayTimeDuration values.
 * 
 * @param {array} arrays - Two or more arrays.
 * 
 * @returns {array}
 */
export function afwUnionDayTimeDuration(client : any, arrays : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "union<dayTimeDuration>";
    _action["arrays"] = arrays;

    return client.perform(_action);
}

