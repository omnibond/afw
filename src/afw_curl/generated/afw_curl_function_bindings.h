// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework Core Adaptive Function Bindings
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/*  ----------------------------- N O T E -------------------------------------
 *
 * This file is generated by "afwdev generate afw_curl".
 *
 * Do not change this file directly or the changes will be lost the next time
 * this file is regenerated.
 *
 * -------------------------------------------------------------------------*/


#ifndef __AFW_CURL_FUNCTION_BINDINGS_H__
#define __AFW_CURL_FUNCTION_BINDINGS_H__


/**
 * @file afw_curl_function_bindings.h
 * @brief Adaptive Framework core adaptive function bindings header.
 */

#include "afw_curl_declare_helpers.h"

/**
 * @addtogroup afw_c_api_public
 * @{
 *
 */

/**
 * @addtogroup afw_c_api_functions Adaptive functions
 *
 * @{
 */

/**
 * @brief Get array of pointers to afw_curl_function bindings.
 * @return pointer to array of function value pointers.
 */
AFW_CURL_DECLARE(const afw_value_function_definition_t **)
afw_curl_function_bindings_get();


/** @addtogroup afw_functions_curl curl functions
 *
 * curl adaptive functions.
 *
 * @{
 */

/**
 * @brief Adaptive Function `curl_version_info`
 * @param x function execute parameter.
 *
 * Returns run-time libcurl version info.
 *
 * This function is not pure, so it may return a different result
 * given exactly the same parameters.
 *
 * Declaration:
 *
 * ```
 *   function curl_version_info(
 *   
 *   ): (object _AdaptiveCurlVersionInfo_);
 * ```
 *
 * Parameters:
 *
 * Returns:
 *
 *   (object _AdaptiveCurlVersionInfo_) Returns an object describing the cURL
 *       version information.
 */
const afw_value_t *
afw_curl_function_execute_curl_version_info(
    afw_function_execute_t *x);

/** @} */


/** @addtogroup afw_functions_http http functions
 *
 * http adaptive functions.
 *
 * @{
 */

/**
 * @brief Adaptive Function `http_get`
 * @param x function execute parameter.
 *
 * Makes a HTTP GET Request.
 *
 * This function is not pure, so it may return a different result
 * given exactly the same parameters.
 *
 * Declaration:
 *
 * ```
 *   function http_get(
 *       url: string,
 *       headers?: array,
 *       options?: (object _AdaptiveCurlOptions_)
 *   ): (object _AdaptiveCurlHttpResponse_);
 * ```
 *
 * Parameters:
 *
 *   url - (string) HTTP Url.
 *
 *   headers - (optional array) HTTP Headers.
 *
 *   options - (optional object _AdaptiveCurlOptions_) CURL Options.
 *
 * Returns:
 *
 *   (object _AdaptiveCurlHttpResponse_) Returns an object describing the
 *       response from the HTTP GET request.
 */
const afw_value_t *
afw_curl_function_execute_http_get(
    afw_function_execute_t *x);

/**
 * @brief Adaptive Function `http_post`
 * @param x function execute parameter.
 *
 * Makes a HTTP Post Request.
 *
 * This function is not pure, so it may return a different result
 * given exactly the same parameters.
 *
 * Declaration:
 *
 * ```
 *   function http_post(
 *       url: string,
 *       payload?: string,
 *       headers?: array,
 *       options?: (object _AdaptiveCurlOptions_)
 *   ): (object _AdaptiveCurlHttpResponse_);
 * ```
 *
 * Parameters:
 *
 *   url - (string) HTTP Url.
 *
 *   payload - (optional string) Data payload to POST to the url.
 *
 *   headers - (optional array) HTTP Headers.
 *
 *   options - (optional object _AdaptiveCurlOptions_) CURL Options.
 *
 * Returns:
 *
 *   (object _AdaptiveCurlHttpResponse_) Returns an object describing the
 *       response from the HTTP POST request.
 */
const afw_value_t *
afw_curl_function_execute_http_post(
    afw_function_execute_t *x);

/** @} */


/** @addtogroup afw_functions_smtp smtp functions
 *
 * smtp adaptive functions.
 *
 * @{
 */

/**
 * @brief Adaptive Function `smtp_send`
 * @param x function execute parameter.
 *
 * Sends an eMail using SMTP protocol with cURL.
 *
 * This function is not pure, so it may return a different result
 * given exactly the same parameters.
 *
 * Declaration:
 *
 * ```
 *   function smtp_send(
 *       url: string,
 *       mail_from: string,
 *       mail_recipients: array,
 *       payload: string,
 *       options?: (object _AdaptiveCurlOptions_)
 *   ): void;
 * ```
 *
 * Parameters:
 *
 *   url - (string) SMTP Server Url.
 *
 *   mail_from - (string) From Address.
 *
 *   mail_recipients - (array) To Addresses.
 *
 *   payload - (string) Email Payload, or body of the message.
 *
 *   options - (optional object _AdaptiveCurlOptions_) CURL Options.
 *
 * Returns:
 *
 *   (void)
 */
const afw_value_t *
afw_curl_function_execute_smtp_send(
    afw_function_execute_t *x);

/** @} */

/** @} */
/** @} */


#endif /* __AFW_CURL_FUNCTION_BINDINGS_H__ */
