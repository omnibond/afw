// See the 'COPYING' file in the project root for licensing information.
/*
 * afw_function_execute_* functions for json
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/**
 * @file afw_function_json.c
 * @brief afw_function_execute_* functions for json.
 */

#include "afw.h"



/*
 * Adaptive function: compile<json>
 *
 * afw_function_execute_compile_json
 *
 * See afw_function_bindings.h for more information.
 *
 * Compile json value and return either an unevaluated adaptive value or a
 * string containing the compiler listing.
 *
 * This function is pure, so it will always return the same result
 * given exactly the same parameters and has no side effects.
 *
 * Declaration:
 *
 * ```
 *   function compile<json>(
 *       source: json,
 *       listing?: any
 *   ): unevaluated;
 * ```
 *
 * Parameters:
 *
 *   source - (json) json string to compile.
 *
 *   listing - (optional any dataType) If specified, a compiler listing is
 *       produced instead of an unevaluated compiled value.
 * 
 *       This parameter can be an integer between 0 and 10 of a string that is
 *       used for indentation. If 0 is specified, no whitespace is added to the
 *       resulting string. If 1 through 10 is specified, that number of spaces
 *       is used.
 *
 * Returns:
 *
 *   (unevaluated)
 */
const afw_value_t *
afw_function_execute_compile_json(
    afw_function_execute_t *x)
{
    /** @todo Add code. */
    AFW_THROW_ERROR_Z(general, "Not implemented", x->xctx);
}
