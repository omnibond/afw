<afwdev {license_c}>

/**
 * @file <afwdev {prefixed_interface_name}>.c
 * @brief <afwdev {brief}>
 * @todo Search this file and its header for @todo and make appropriate changes.
 *
 * This is the implementation of afw_authorization_handler for <afwdev {implementation_id}>.
 */

#include "afw.h"
#include "<afwdev {prefixed_interface_name}>.h"

/* Declares and rti/inf defines for interface afw_authorization_handler */
#define AFW_IMPLEMENTATION_ID "<afwdev {implementation_id}>"
/* Change this to the name of the self typedef for this implementation */
#define AFW_AUTHORIZATION_HANDLER_SELF_T <afwdev {prefixed_interface_name}>_self_t
#include "afw_authorization_handler_impl_declares.h"

          
/* Create an instance of the authorization handler. */
AFW_DEFINE(const afw_authorization_handler_t *)
<afwdev {prefixed_interface_name}>_create_cede_p(
    const afw_object_t *properties,
    const afw_pool_t *p, afw_xctx_t *xctx)
{
    AFW_AUTHORIZATION_HANDLER_SELF_T *self;
    afw_authorization_handler_t *authorization_handler;
    
    /* Create adapter and process common properties. */
    authorization_handler = afw_authorization_handler_impl_create_cede_p(
            &impl_afw_authorization_handler_inf,
            sizeof(AFW_AUTHORIZATION_HANDLER_SELF_T),
            properties, p, xctx);
    self = (AFW_AUTHORIZATION_HANDLER_SELF_T *)authorization_handler;

    /** @todo Handle implementation specific configuration parameters, etc. */
       
    /* Return authorization handler. */
    return authorization_handler;
}
      
    
/*
 * Implementation of method destroy for interface afw_authorization_handler.
 */
void
impl_afw_authorization_handler_destroy(
    AFW_AUTHORIZATION_HANDLER_SELF_T *self,
    afw_xctx_t * xctx)
{
    /** @todo Add code to implement method. */
    AFW_THROW_ERROR_Z(general, "Method not implemented.", xctx);
}

/*
 * Implementation of method check for interface afw_authorization_handler.
 */
const afw_value_t *
impl_afw_authorization_handler_check(
    AFW_AUTHORIZATION_HANDLER_SELF_T *self,
    const afw_value_t * resource_id,
    const afw_value_t * object,
    const afw_value_t * action_id,
    const afw_pool_t * p,
    afw_xctx_t * xctx)
{
    /** @todo Add code to implement method. */
    AFW_THROW_ERROR_Z(general, "Method not implemented.", xctx);
}
