// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework Data Type Bindings
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/*  ----------------------------- N O T E -------------------------------------
 *
 * This file is generated by "afwdev generate afw".
 *
 * Do not change this file directly or the changes will be lost the next time
 * this file is regenerated.
 *
 * -------------------------------------------------------------------------*/



/**
 * @file afw_data_type_bindings.c
 * @brief Adaptive Framework data type bindings.
 */

#include "afw.h"
#include "afw_data_type_bindings.h"

static const afw_data_type_t * impl_data_type_bindings[] = {
#define XX(id) &afw_data_type_ ##id##_direct,
AFW_DATA_TYPES_MAP(XX)
    NULL
};

AFW_DEFINE(void)
afw_register_data_types(
    afw_xctx_t *xctx)
{
    /* Register data types */
    afw_environment_register_data_types(
        &impl_data_type_bindings[0], xctx);

}

AFW_DEFINE(void)
afw_register_data_type_infs(
    afw_xctx_t *xctx)
{

    /* Register value inf id evaluated_any */
    afw_environment_register_value_inf(
        &afw_value_permanent_any_inf.rti.implementation_id,
        NULL,
        xctx);

    /* Register value inf id evaluated_anyURI */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_anyURI_inf.rti.implementation_id,
        &afw_value_unmanaged_anyURI_inf,
        xctx);

    /* Register value inf id evaluated_array */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_array_inf.rti.implementation_id,
        &afw_value_unmanaged_array_inf,
        xctx);

    /* Register value inf id evaluated_base64Binary */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_base64Binary_inf.rti.implementation_id,
        &afw_value_unmanaged_base64Binary_inf,
        xctx);

    /* Register value inf id evaluated_boolean */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_boolean_inf.rti.implementation_id,
        &afw_value_unmanaged_boolean_inf,
        xctx);

    /* Register value inf id evaluated_date */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_date_inf.rti.implementation_id,
        &afw_value_unmanaged_date_inf,
        xctx);

    /* Register value inf id evaluated_dateTime */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_dateTime_inf.rti.implementation_id,
        &afw_value_unmanaged_dateTime_inf,
        xctx);

    /* Register value inf id evaluated_dayTimeDuration */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_dayTimeDuration_inf.rti.implementation_id,
        &afw_value_unmanaged_dayTimeDuration_inf,
        xctx);

    /* Register value inf id evaluated_dnsName */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_dnsName_inf.rti.implementation_id,
        &afw_value_unmanaged_dnsName_inf,
        xctx);

    /* Register value inf id evaluated_double */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_double_inf.rti.implementation_id,
        &afw_value_unmanaged_double_inf,
        xctx);

    /* Register value inf id evaluated_function */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_function_inf.rti.implementation_id,
        &afw_value_unmanaged_function_inf,
        xctx);

    /* Register value inf id evaluated_hexBinary */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_hexBinary_inf.rti.implementation_id,
        &afw_value_unmanaged_hexBinary_inf,
        xctx);

    /* Register value inf id evaluated_ia5String */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_ia5String_inf.rti.implementation_id,
        &afw_value_unmanaged_ia5String_inf,
        xctx);

    /* Register value inf id evaluated_integer */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_integer_inf.rti.implementation_id,
        &afw_value_unmanaged_integer_inf,
        xctx);

    /* Register value inf id evaluated_ipAddress */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_ipAddress_inf.rti.implementation_id,
        &afw_value_unmanaged_ipAddress_inf,
        xctx);

    /* Register value inf id evaluated_json */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_json_inf.rti.implementation_id,
        &afw_value_unmanaged_json_inf,
        xctx);

    /* Register value inf id evaluated_null */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_null_inf.rti.implementation_id,
        &afw_value_unmanaged_null_inf,
        xctx);

    /* Register value inf id evaluated_object */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_object_inf.rti.implementation_id,
        &afw_value_unmanaged_object_inf,
        xctx);

    /* Register value inf id evaluated_objectId */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_objectId_inf.rti.implementation_id,
        &afw_value_unmanaged_objectId_inf,
        xctx);

    /* Register value inf id evaluated_objectPath */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_objectPath_inf.rti.implementation_id,
        &afw_value_unmanaged_objectPath_inf,
        xctx);

    /* Register value inf id evaluated_password */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_password_inf.rti.implementation_id,
        &afw_value_unmanaged_password_inf,
        xctx);

    /* Register value inf id evaluated_regexp */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_regexp_inf.rti.implementation_id,
        &afw_value_unmanaged_regexp_inf,
        xctx);

    /* Register value inf id evaluated_relaxed_json */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_relaxed_json_inf.rti.implementation_id,
        &afw_value_unmanaged_relaxed_json_inf,
        xctx);

    /* Register value inf id evaluated_rfc822Name */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_rfc822Name_inf.rti.implementation_id,
        &afw_value_unmanaged_rfc822Name_inf,
        xctx);

    /* Register value inf id evaluated_script */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_script_inf.rti.implementation_id,
        &afw_value_unmanaged_script_inf,
        xctx);

    /* Register value inf id evaluated_string */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_string_inf.rti.implementation_id,
        &afw_value_unmanaged_string_inf,
        xctx);

    /* Register value inf id evaluated_template */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_template_inf.rti.implementation_id,
        &afw_value_unmanaged_template_inf,
        xctx);

    /* Register value inf id evaluated_time */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_time_inf.rti.implementation_id,
        &afw_value_unmanaged_time_inf,
        xctx);

    /* Register value inf id evaluated_undefined */
    afw_environment_register_value_inf(
        &afw_value_permanent_undefined_inf.rti.implementation_id,
        NULL,
        xctx);

    /* Register value inf id evaluated_unevaluated */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_unevaluated_inf.rti.implementation_id,
        &afw_value_unmanaged_unevaluated_inf,
        xctx);

    /* Register value inf id evaluated_unknown */
    afw_environment_register_value_inf(
        &afw_value_permanent_unknown_inf.rti.implementation_id,
        NULL,
        xctx);

    /* Register value inf id evaluated_void */
    afw_environment_register_value_inf(
        &afw_value_permanent_void_inf.rti.implementation_id,
        NULL,
        xctx);

    /* Register value inf id evaluated_x500Name */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_x500Name_inf.rti.implementation_id,
        &afw_value_unmanaged_x500Name_inf,
        xctx);

    /* Register value inf id evaluated_xpathExpression */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_xpathExpression_inf.rti.implementation_id,
        &afw_value_unmanaged_xpathExpression_inf,
        xctx);

    /* Register value inf id evaluated_yearMonthDuration */
    afw_environment_register_value_inf(
        &afw_value_unmanaged_yearMonthDuration_inf.rti.implementation_id,
        &afw_value_unmanaged_yearMonthDuration_inf,
        xctx);

}
