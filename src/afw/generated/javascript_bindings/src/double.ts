// See the 'COPYING' file in the project root for licensing information.
/*
 * Javascript Bindings for double
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */


/**
 * @file double.ts
 * @ingroup afw_bindings_javascript
 * @brief This file contains the Javascript bindings for the double category.
 */

interface IAnyObject {
    [prop : string] : any;
}

/**
 * Compute the absolute value of the double value and return the double
 * result.
 * 
 * @param {double} value -
 * 
 * @returns {double}
 */
export function afwAbsDouble(client : any, value : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "abs<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Add 2 or more double values and return the double result.
 * 
 * @param {double} values -
 * 
 * @returns {double}
 */
export function afwAddDouble(client : any, values : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "add<double>";
    _action["values"] = values;

    return client.perform(_action);
}

/**
 * Returns boolean true if at least one value in double array1 is in double
 * array2.
 * 
 * @param {array} array1 - The first array.
 * 
 * @param {array} array2 - The second array.
 * 
 * @returns {boolean}
 */
export function afwAtLeastOneMemberOfDouble(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "at_least_one_member_of<double>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Takes any number of double values and returns an array of array.
 * 
 * @param {array} values -
 * 
 * @returns {array}
 */
export function afwBagDouble(client : any, values? : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "bag<double>";

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
export function afwBagSizeDouble(client : any, value : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "bag_size<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Determine the smallest integer that is greater then or equal to the double
 * value and return the double result.
 * 
 * @param {double} value -
 * 
 * @returns {double}
 */
export function afwCeilDouble(client : any, value : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "ceil<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Divide double dividend by double divisor and return the double quotient.
 * 
 * @param {double} dividend -
 * 
 * @param {double} divisor -
 * 
 * @returns {double}
 */
export function afwDivideDouble(client : any, dividend : number, divisor : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "divide<double>";
    _action["dividend"] = dividend;
    _action["divisor"] = divisor;

    return client.perform(_action);
}

/**
 * Converts value to data type double returning double result.
 * 
 * @param {} value - Value to convert
 * 
 * @returns {double} Converted value
 */
export function afwDouble(client : any, value : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "double";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Determine if double arg1 is equal to the value of arg2 converted to the
 * data type of arg1 then return the boolean result. Use 'eqx' ('===') instead
 * if you want false to be returned if arg1 and arg2's data type don't match.
 * 
 * @param {double} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwEqDouble(client : any, arg1 : number, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "eq<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Determine if for double arg1 is equal to the value and data type of arg2
 * then return the boolean result. Use 'eq' ('==') instead if you want arg2 to
 * be converted to the data type of arg1 before comparison.
 * 
 * @param {double} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwEqxDouble(client : any, arg1 : number, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "eqx<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Determine the largest integer that is smaller then or equal to the double
 * value and return the double result.
 * 
 * @param {double} number -
 * 
 * @returns {double}
 */
export function afwFloorDouble(client : any, number : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "floor<double>";
    _action["number"] = number;

    return client.perform(_action);
}

/**
 * Checks for double arg1 is greater than or equal to double arg2 and return
 * the boolean result.
 * 
 * @param {double} arg1 -
 * 
 * @param {double} arg2 -
 * 
 * @returns {boolean}
 */
export function afwGeDouble(client : any, arg1 : number, arg2 : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "ge<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Checks for double arg1 is greater than double arg2 and return the boolean
 * result.
 * 
 * @param {double} arg1 -
 * 
 * @param {double} arg2 -
 * 
 * @returns {boolean}
 */
export function afwGtDouble(client : any, arg1 : number, arg2 : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "gt<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Returns an array of double with the values that are common to both array of
 * double array1 and array2.
 * 
 * @param {array} array1 - The first array.
 * 
 * @param {array} array2 - The second array.
 * 
 * @returns {array}
 */
export function afwIntersectionDouble(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "intersection<double>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Checks if the argument 'number' is not a number(NaN) and returns the
 * boolean result.
 * 
 * @param {double} number - Number to check
 * 
 * @returns {boolean} True if the argument 'number' is not a number.
 */
export function afwIsNaN(client : any, number : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is_NaN";
    _action["number"] = number;

    return client.perform(_action);
}

/**
 * Checks whether value is dataType double and return the boolean result.
 * 
 * @param {} value - Value to check
 * 
 * @returns {boolean}
 */
export function afwIsDouble(client : any, value : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Checks if the argument 'number' is finite and returns the boolean result.
 * 
 * @param {double} number - Number to check
 * 
 * @returns {boolean} True if the argument 'number' is finite.
 */
export function afwIsFinite(client : any, number : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is_finite";
    _action["number"] = number;

    return client.perform(_action);
}

/**
 * Checks whether double value is in array of double array and returns the
 * boolean result.
 * 
 * @param {double} value -
 * 
 * @param {array} array -
 * 
 * @returns {boolean}
 */
export function afwIsInDouble(client : any, value : number, array : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "is_in<double>";
    _action["value"] = value;
    _action["array"] = array;

    return client.perform(_action);
}

/**
 * Checks for double arg1 is less than or equal to double arg2 and return the
 * boolean result.
 * 
 * @param {double} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwLeDouble(client : any, arg1 : number, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "le<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Checks for double arg1 is less that double arg2 and return the boolean
 * result.
 * 
 * @param {double} arg1 -
 * 
 * @param {double} arg2 -
 * 
 * @returns {boolean}
 */
export function afwLtDouble(client : any, arg1 : number, arg2 : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "lt<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Return the double value that is greater than or equal to the others.
 * 
 * @param {double} values -
 * 
 * @returns {double}
 */
export function afwMaxDouble(client : any, values : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "max<double>";
    _action["values"] = values;

    return client.perform(_action);
}

/**
 * Return the double value that is less than or equal to the others.
 * 
 * @param {double} values -
 * 
 * @returns {double}
 */
export function afwMinDouble(client : any, values : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "min<double>";
    _action["values"] = values;

    return client.perform(_action);
}

/**
 * Multiply 2 or more double values and return the double result.
 * 
 * @param {double} values -
 * 
 * @returns {double}
 */
export function afwMultiplyDouble(client : any, values : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "multiply<double>";
    _action["values"] = values;

    return client.perform(_action);
}

/**
 * Determine if double arg1 is not equal to the value of arg2 converted to the
 * data type of arg1 then return the boolean result. Use 'nex' ('!==') instead
 * if you want true to be returned if arg1 and arg2's data type don't match.
 * 
 * @param {double} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwNeDouble(client : any, arg1 : number, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "ne<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Return negative of double value.
 * 
 * @param {double} value -
 * 
 * @returns {double}
 */
export function afwNegativeDouble(client : any, value : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "negative<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Determine if for double arg1 is not equal to the value or data type of arg2
 * then return the boolean result. Use 'ne' ('!=') instead if you want arg2 to
 * be converted to the data type of arg1 before comparison.
 * 
 * @param {double} arg1 -
 * 
 * @param {} arg2 -
 * 
 * @returns {boolean}
 */
export function afwNexDouble(client : any, arg1 : number, arg2 : any) : any {

    let _action : IAnyObject = {};

    _action["function"] = "nex<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * This converts an array of double values that contains one value to a single
 * double value.
 * 
 * @param {array} array -
 * 
 * @returns {double}
 */
export function afwOneAndOnlyDouble(client : any, array : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "one_and_only<double>";
    _action["array"] = array;

    return client.perform(_action);
}

/**
 * This returns the value of base raised to a power. Multiple exponents can be
 * specified to raise the previous exponent to the power of the latter
 * exponent.
 * 
 * @param {double} base - Base value.
 * 
 * @param {double} exponent - Exponent value.
 * 
 * @returns {double} Base raised to the power.
 */
export function afwPowDouble(client : any, base : number, exponent : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "pow<double>";
    _action["base"] = base;
    _action["exponent"] = exponent;

    return client.perform(_action);
}

/**
 * Determine the integer closest to double value and return the double result.
 * 
 * @param {double} number -
 * 
 * @returns {double}
 */
export function afwRoundDouble(client : any, number : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "round<double>";
    _action["number"] = number;

    return client.perform(_action);
}

/**
 * Returns boolean true if double array1 and double array2 are subsets of each
 * other and return the boolean result.
 * 
 * @param {array} array1 -
 * 
 * @param {array} array2 -
 * 
 * @returns {boolean}
 */
export function afwSetEqualsDouble(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "set_equals<double>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Returns boolean true if the unique values in double array1 are all in
 * double array2.
 * 
 * @param {array} array1 - The first array.
 * 
 * @param {array} array2 - The second array.
 * 
 * @returns {boolean}
 */
export function afwSubsetDouble(client : any, array1 : any[], array2 : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "subset<double>";
    _action["array1"] = array1;
    _action["array2"] = array2;

    return client.perform(_action);
}

/**
 * Subtract double arg2 from double arg1 and return the double result.
 * 
 * @param {double} arg1 -
 * 
 * @param {double} arg2 -
 * 
 * @returns {double}
 */
export function afwSubtractDouble(client : any, arg1 : number, arg2 : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "subtract<double>";
    _action["arg1"] = arg1;
    _action["arg2"] = arg2;

    return client.perform(_action);
}

/**
 * Truncate double value to a whole number and returns integer result.
 * 
 * @param {double} value -
 * 
 * @returns {integer}
 */
export function afwToIntegerDouble(client : any, value : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "to_integer<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Converts double value to string. For array values, the to_string() value
 * for each entry is returned separated with commas.
 * 
 * @param {double} value - A double value.
 * 
 * @returns {string} The string representation of the value.
 */
export function afwToStringDouble(client : any, value : number) : any {

    let _action : IAnyObject = {};

    _action["function"] = "to_string<double>";
    _action["value"] = value;

    return client.perform(_action);
}

/**
 * Returns an array of double contains all of the unique values in two or more
 * array of double values.
 * 
 * @param {array} arrays - Two or more arrays.
 * 
 * @returns {array}
 */
export function afwUnionDouble(client : any, arrays : any[]) : any {

    let _action : IAnyObject = {};

    _action["function"] = "union<double>";
    _action["arrays"] = arrays;

    return client.perform(_action);
}

