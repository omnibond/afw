<afwdev {license_c}>

/**
 * @file <afwdev {prefixed_interface_name}>.c
 * @brief <afwdev {brief}>
 * @todo Search this file and its header for @todo and make appropriate changes.
 *
 * This is the implementation of afw_variable_handler for <afwdev {implementation_id}>.
 */

#include "afw.h"
#include "<afwdev {prefixed_interface_name}>.h"

/* Declares and rti/inf defines for interface afw_variable_handler */
#define AFW_IMPLEMENTATION_ID "<afwdev {implementation_id}>"
/* Change this to the name of the self typedef for this implementation */
#define AFW_VARIABLE_HANDLER_SELF_T <afwdev {prefixed_interface_name}>_self_t
#include "afw_variable_handler_impl_declares.h"

/*
 * Implementation of method get_variable for interface afw_variable_handler.
 */
const afw_value_t *
impl_afw_variable_handler_get_variable(
    AFW_VARIABLE_HANDLER_SELF_T *self,
    const afw_utf8_t * qualifier,
    const afw_utf8_t * name,
    afw_xctx_t * xctx)
{
    /** @todo Add code to implement method. */
    AFW_THROW_ERROR_Z(general, "Method not implemented.", xctx);
}

/*
 * Implementation of method set_variable for interface afw_variable_handler.
 */
afw_boolean_t
impl_afw_variable_handler_set_variable(
    AFW_VARIABLE_HANDLER_SELF_T *self,
    const afw_utf8_t * qualifier,
    const afw_utf8_t * name,
    const afw_value_t * value,
    afw_xctx_t * xctx)
{
    /** @todo Add code to implement method. */
    AFW_THROW_ERROR_Z(general, "Method not implemented.", xctx);
}
