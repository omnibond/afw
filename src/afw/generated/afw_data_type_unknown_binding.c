// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework Core Data Types 
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
 * @file afw_data_type_unknown_binding.c
 * @brief Adaptive Framework core data types.
 */

#include "afw.h"
#include "afw_runtime_object_maps.h"
#include "afw_value_internal.h"

/* Declaration for method get_reference for permanent value. */
AFW_DECLARE_STATIC(const afw_value_t *)
impl_afw_value_permanent_get_reference(
    const afw_value_t *instance,
    const afw_pool_t *p,
    afw_xctx_t *xctx);


#define impl_afw_value_get_evaluated_meta \
    afw_value_internal_get_evaluated_meta_default

#define impl_afw_value_get_evaluated_metas \
    afw_value_internal_get_evaluated_metas_default

/* This is fully evaluated so optional_evaluate method is NULL. */
#define impl_afw_value_optional_evaluate NULL

/* Inf specific is always data type. */
#define AFW_IMPLEMENTATION_SPECIFIC (const void *)&afw_data_type_unknown_direct

/* Define inf variables for data_type and is_evaluated_of_data_type. */
#define AFW_IMPLEMENTATION_INF_VARIABLES \
    (const void *)&afw_data_type_unknown_direct, \
    (const void *)&afw_data_type_unknown_direct

/* Declares and rti/inf defines for interface afw_value */
/* This is the inf for permanent unknown values. For this one */
/* optional_release is NULL and get_reference returns instance asis. */
#define AFW_IMPLEMENTATION_ID "permanent_unknown"
#define AFW_IMPLEMENTATION_INF_SPECIFIER AFW_DEFINE_CONST_DATA
#define AFW_IMPLEMENTATION_INF_LABEL afw_value_permanent_unknown_inf
#define impl_afw_value_optional_release NULL
#define impl_afw_value_clone_or_reference impl_afw_value_permanent_get_reference
#define impl_afw_value_create_iterator NULL
#include "afw_value_impl_declares.h"
#undef AFW_IMPLEMENTATION_ID
#undef AFW_IMPLEMENTATION_INF_LABEL
#undef impl_afw_value_optional_release
#undef impl_afw_value_clone_or_reference

static const afw_value_string_t
impl_data_type_unknown_id_value = {
    {&afw_value_permanent_string_inf},
    AFW_UTF8_LITERAL("unknown")
};

AFW_DEFINE_CONST_DATA(afw_value_t *)
afw_data_type_unknown_id_value =
{
    (const afw_value_t *)&impl_data_type_unknown_id_value
};

static const afw_utf8_t
impl_data_type_path_unknown =
    AFW_UTF8_LITERAL("/afw/_AdaptiveDataType_/unknown");

static const afw_value_object_t
impl_data_type_object_unknown__value;

/* Data type unknown object. */
static const afw_runtime_object_indirect_t
impl_data_type_object_unknown = {
    {
        &afw_runtime_inf__AdaptiveDataType_,
        NULL,
        (const afw_value_t *)&impl_data_type_object_unknown__value,
        {
            NULL,
            NULL,
            &afw_self_s_unknown,
            &afw_self_s__AdaptiveDataType_,
            &impl_data_type_path_unknown
        }
    },
    (void *)&afw_data_type_unknown_direct
};

static const afw_value_object_t
impl_data_type_object_unknown__value = {
    {&afw_value_permanent_object_inf},
    (const afw_object_t *)&impl_data_type_object_unknown
};

/* Value for empty array of unknown. */
AFW_DEFINE_INTERNAL_CONST_DATA(afw_array_wrapper_for_array_self_t)
impl_empty_array_of_unknown;

/* Value for empty array of unknown. */
AFW_DEFINE_INTERNAL_CONST_DATA(afw_value_array_t)
impl_value_empty_array_of_unknown;

/* Data type unknown instance. */
AFW_DEFINE_INTERNAL_CONST_DATA(afw_data_type_t)
afw_data_type_unknown_direct = {
    &afw_data_type_unknown_inf,
    (const afw_object_t *)&impl_data_type_object_unknown,
    AFW_UTF8_LITERAL("unknown"),
    AFW_UTF8_LITERAL("Type-safe unknown value"),
    AFW_UTF8_LITERAL("Any value can be assigned as the value of data type 'unknown'. The actual data type is the data type of the value. Most 'type check' errors can be detected during compile to reduce the number of errors detected during evaluation."),
    AFW_UTF8_LITERAL(""),
    afw_data_type_number_unknown,
    AFW_UTF8_LITERAL(""),
    AFW_UTF8_LITERAL(""),
    AFW_UTF8_LITERAL(""),
    AFW_UTF8_LITERAL("const afw_value_t *"),
    sizeof(const afw_value_t *),
    NULL,
    NULL,
    NULL,
    afw_compile_type_error,
    false,
    false,
    true,
    false,
    false,
    true
};

/* Data type struct for unknown. */
AFW_DEFINE_CONST_DATA(afw_data_type_t *)
afw_data_type_unknown =
    &afw_data_type_unknown_direct;

/* Implementation of method get_reference for permanent value. */
AFW_DECLARE_STATIC(const afw_value_t *)
impl_afw_value_permanent_get_reference(
    const afw_value_t *instance,
    const afw_pool_t *p,
    afw_xctx_t *xctx)
{
    /* For permanent value, just return the instance passed. */
    return instance;
}

/*
 * Implementation of method get_data_type for interface afw_value.
 */
const afw_data_type_t *
impl_afw_value_get_data_type(
    const afw_value_t *instance,
    afw_xctx_t *xctx)
{
    return afw_data_type_unknown;
}

/*
 * Implementation of method compiler_listing for interface afw_value.
 */
void
impl_afw_value_produce_compiler_listing(
    const afw_value_t *instance,
    const afw_writer_t *writer,
    afw_xctx_t *xctx)
{
    afw_data_type_value_compiler_listing(
        afw_data_type_unknown,
        writer, instance, xctx);
}

/*
 * Implementation of method decompile for interface afw_value.
 */
void
impl_afw_value_decompile(
    const afw_value_t *instance,
    const afw_writer_t *writer,
    afw_xctx_t *xctx)
{
    afw_data_type_write_as_expression(
        afw_data_type_unknown,
        writer,
        (const void *)&(((const afw_value_common_t *)instance)->internal),
        xctx);
}

/*
 * Implementation of method get_info for interface afw_value.
 */
void
impl_afw_value_get_info(
    const afw_value_t *instance,
    afw_value_info_t *info,
    const afw_pool_t *p,
    afw_xctx_t *xctx)
{
    afw_memory_clear(info);
    info->value_inf_id = &instance->inf->rti.implementation_id;
    info->evaluated_data_type = afw_data_type_unknown;
    info->optimized_value = instance;
}

