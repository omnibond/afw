// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework Authorization
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

#ifndef __AFW_AUTHORIZATION_H__
#define __AFW_AUTHORIZATION_H__

#include "afw_interface.h"

/**
 * @defgroup afw_authorization Authorization
 * @ingroup afw_c_api_public
 *
 * Adaptive Framework authorization support.
 * @{
 */

/**
 * @file afw_authorization.h
 * @brief Adaptive Framework authorization.
 */

AFW_BEGIN_DECLARES

/** @brief actionId value control. */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_action_id_control;

/** @brief actionId value create. */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_action_id_create;

/** @brief actionId value delete. */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_action_id_delete;

/** @brief actionId value modify. */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_action_id_modify;

/** @brief actionId value retrieve. */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_action_id_query;

/** @brief actionId value read. */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_action_id_read;



/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value deny.
 *
 * /afw/_AdaptiveAuthorizationDecision_/deny for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_deny_value;

/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value indeterminate.
 *
 * /afw/_AdaptiveAuthorizationDecision_/indeterminate for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_indeterminate_value;

/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value indeterminateD.
 *
 * /afw/_AdaptiveAuthorizationDecision_/indeterminateD for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_indeterminateD_value;

/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value indeterminateDP.
 *
 * /afw/_AdaptiveAuthorizationDecision_/indeterminateDP for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_indeterminateDP_value;

/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value indeterminateP.
 *
 * /afw/_AdaptiveAuthorizationDecision_/indeterminateP for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_indeterminateP_value;

/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value notApplicable.
 *
 * /afw/_AdaptiveAuthorizationDecision_/notApplicable for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_notApplicable_value;

/**
 * @brief _AdaptiveAuthorizationResult_ decisionId value permit.
 *
 * /afw/_AdaptiveAuthorizationDecision_/permit for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_decision_id_permit_value;


/**
 * @brief _AdaptiveAuthorizationMode_ core.
 *
 * /afw/_AdaptiveAuthorizationMode_/core for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_mode_id_core_value;

/**
 * @brief _AdaptiveAuthorizationMode_ intermediate.
 *
 * /afw/_AdaptiveAuthorizationMode_/intermediate for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_mode_id_intermediate_value;

/**
 * @brief _AdaptiveAuthorizationMode_ user.
 *
 * /afw/_AdaptiveAuthorizationMode_/user for more information.
 */
AFW_DECLARE_CONST_DATA(afw_value_t *)
afw_authorization_mode_id_user_value;



/**
 * @brief Perform authorization check.
 * @param enforce true causes an error to be thrown if result is not permit.
 * @param request_id_value or NULL to automatically create one.
 * @param resource_id_value string value is uri of the resource being checked.
 * @param object_value object value is the resource's object or NULL if not
 *    appropriate.
 * @param action_id_value string value of action.
 * @param p used for result.
 * @param xctx of caller.
 * @return Authorization result.
 *
 * The xctx qualifiers used by authorization checking should be set before
 * this call.  The context qualifiers should be prepared before this call.
 * For example, see afw_adapter_context_prepare() and
 * afw_service_context_prepare().
 *
 * This function also handles obligations.
 *
 * Application authorization parameters are use to make the decision.  The
 * authorization result will only have a decision of permit or deny since
 * indeterminate and not_applicable are resolved based on these parameters.
 */
AFW_DECLARE(const afw_value_t *)
afw_authorization_check(
    afw_boolean_t enforce,
    const afw_value_t *request_id_value,
    const afw_value_t *resource_id_value,
    const afw_value_t *object_value,
    const afw_value_t *action_id_value,
    const afw_pool_t *p,
    afw_xctx_t *xctx);



/**
 * @brief Get reference to authorization handler
 * @param authorization_handler_id of handler to get.
 * @param xctx of caller.
 * @return authorization handler or NULL if not one with the specified id.
 *
 * If necessary, this will start the authorization handler.
 *
 * afw_authorization_handler_release() should be called when finished with the
 * authorization handler.
 */
AFW_DECLARE(const afw_authorization_handler_t *)
afw_authorization_handler_get_reference(
    const afw_utf8_t *authorization_handler_id,
    afw_xctx_t *xctx);


/**
 * @brief Release reference to authorization handler
 * @param instance of authorization handler.
 * @param xctx of caller.
 */
AFW_DECLARE(void)
afw_authorization_handler_release(
    const afw_authorization_handler_t *instance,
    afw_xctx_t *xctx);


/**
 * @brief Begin intermediate access block.
 *
 * This macro is used to temporarily change the authorization mode to
 * 'intermediate' if the current mode is not 'core'. This is useful when core or
 * extention code needs to access resources that a user would not normally have
 * access to. For example, the 'mapping' adapter may need to access objects that
 * are not normally accessible by the user to produce the objects returned to
 * the user.
 *
 * This macro should be used in conjunction with
 * AFW_AUTHORIZATION_INTERMEDIATE_ACCESS_END.
 *
 * Usage:
 *
 * AFW_AUTHORIZATION_INTERMEDIATE_ACCESS_BEGIN {
 *    ... code that will run in specified mode
 * }
 * AFW_AUTHORIZATION_INTERMEDIATE_ACCESS_END;
 */
#define AFW_AUTHORIZATION_INTERMEDIATE_ACCESS_BEGIN \
{ \
    const afw_value_t *_previous_mode; \
    _previous_mode = xctx->mode; \
    AFW_TRY { \
         if (xctx->mode != afw_authorization_mode_id_core_value) { \
            ((afw_xctx_t *)xctx)->mode = \
                afw_authorization_mode_id_intermediate_value; \
        }


/**
 * @brief End intermediate access block.
 *
 * See AFW_AUTHORIZATION_INTERMEDIATE_ACCESS_BEGIN for usage.
 */
#define AFW_AUTHORIZATION_INTERMEDIATE_ACCESS_END \
    } AFW_FINALLY { \
        ((afw_xctx_t *)xctx)->mode = _previous_mode; \
    } \
    AFW_ENDTRY; \
}


AFW_END_DECLARES

/** @} */

#endif /* __AFW_AUTHORIZATION_H__ */
