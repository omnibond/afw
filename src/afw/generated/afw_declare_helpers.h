// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework Declare Helpers for afw_
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


#ifndef __AFW_DECLARE_HELPERS_H__
#define __AFW_DECLARE_HELPERS_H__


/**
 * @file afw_declare_helpers.h
 * @brief Adaptive Framework declare helpers for afw_
 */


#include <apr_general.h>


/**
 * AFW_BEGIN_DECLARES goes before declares and 
 * AFW_END_DECLARES at end in afw*.h files.
 */
#ifdef __cplusplus
#define AFW_BEGIN_DECLARES extern "C" {
#define AFW_END_DECLARES }
#else
#define AFW_BEGIN_DECLARES
#define AFW_END_DECLARES
#endif
#if defined(WIN32)
#error afw is not currently supported on Windows
#endif


/* #defines for declspec and calling convention. */
#if defined(DOXYGEN) || !defined(WIN32)
#define AFW_DECLSPEC_DECLARE extern
#define AFW_DECLSPEC_DEFINE
#define AFW_CALLING_CONVENTION
#define AFW_CALLING_CONVENTION_ELLIPSIS
#elif defined(AFW_DECLARE_STATIC)
#define AFW_DECLSPEC_DECLARE extern
#define AFW_DECLSPEC_DEFINE
#define AFW_CALLING_CONVENTION __stdcall
#define AFW_CALLING_CONVENTION_ELLIPSIS __cdecl
#elif defined(AFW_DECLARE_EXPORT)
#define AFW_DECLSPEC_DECLARE extern __declspec(dllexport)
#define AFW_DECLSPEC_DEFINE __declspec(dllexport)
#define AFW_CALLING_CONVENTION __stdcall
#define AFW_CALLING_CONVENTION_ELLIPSIS __cdecl
#else
#define AFW_DECLSPEC_DECLARE extern __declspec(dllimport)
#define AFW_DECLSPEC_DEFINE __declspec(dllimport)
#define AFW_CALLING_CONVENTION __stdcall
#define AFW_CALLING_CONVENTION_ELLIPSIS __cdecl
#endif


/**
 * @brief Declare an internal variable for /src/afw/ source*.h files.
 * @param type of variable
 *
 * Use this macro to supply the storage specifier of a variable in a .h file
 * that is only intended to be accessed internally to a linked object.  There
 * must be a corresponding AFW_DEFINE_INTERNAL_CONST_DATA()
 * in a /src/afw/ source*.h files.
 * 
 * Any data declared this way is not considered part of the external API.
 */
#define AFW_DECLARE_INTERNAL_CONST_DATA(type) extern const type


/**
 * @brief Define an internal variable for /src/afw/ source*.c files.
 * @param type of variable
 *
 * Use this macro to supply the storage specifier of a variable in a .c files
 * that is only intended to be accessed internally to a linked object.  There
 * must be a corresponding AFW_DECLARE_INTERNAL_CONST_DATA()
 * in a /src/afw/ source*.h files.
 * 
 * Any data defined this way is not considered part of the external API. 
 */
#define AFW_DEFINE_INTERNAL_CONST_DATA(type) const type


/**
 * @brief Declare an internal function for /src/afw/ source*.h files.
 * @param type of return value.
 *
 * Use this macro to supply the storage specifier of a function in a .h file
 * that is only intended to be accessed internally to a linked object.  There
 * must be a corresponding AFW_DEFINE_INTERNAL()
 * in a /src/afw/ source*.c files.
 * 
 * Any function declared this way is not considered part of the external API.
 */
#define AFW_DECLARE_INTERNAL(type) extern type


/**
 * @brief Define an internal function for /src/afw/ source*.c files.
 * @param type of return value.
 *
 * Use this macro to supply the storage specifier of a function in a .c files
 * that is only intended to be accessed internally to a linked object.  There
 * must be a corresponding AFW_DECLARE_INTERNAL()
 * in a /src/afw/ source*.h files.
 * 
 * Any function defined this way is not considered part of the external API. 
 */
#define AFW_DEFINE_INTERNAL(type) type


/**
 * @brief Declare a public afw function.
 * @param type of return value.
 *
 * There must be a corresponding AFW_DEFINE()
 * in a /src/afw/ source*.c files.
 *
 * Example:
 *
 * const afw_utf8_t * afw_some_function(int a);
 *
 * is decorated this way:
 *
 * AFW_DECLARE(const afw_utf8_t *)
 * afw_some_function(int a);
 */
#define AFW_DECLARE(type) \
AFW_DECLSPEC_DECLARE \
type \
AFW_CALLING_CONVENTION


/**
 * @brief Declare a public afw function with variable arguments.
 * @param type of return value.
 *
 * There must be a corresponding AFW_DEFINE_ELLIPSIS()
 * in a /src/afw/ source*.c files.
 *
 * Example:
 *
 * const afw_utf8_t *
 * afw_some_function(int a, ...);
 *
 * is decorated this way:
 *
 * AFW_DECLARE_ELLIPSIS(const afw_utf8_t *)
 * afw_some_function(int a, ...);
 */
#define AFW_DECLARE_ELLIPSIS(type) \
AFW_DECLSPEC_DECLARE \
type \
AFW_CALLING_CONVENTION_ELLIPSIS


/**
 * @brief Declare a public afw variable.
 * @param type of variable
 *
 * There must be a corresponding AFW_DEFINE_CONST_DATA
 * in a /src/afw/ source*.c files.
 *
 * Example:
 *
 * extern const afw_utf8_t *
 * afw_a_string;
 *
 * is decorated this way:
 *
 * AFW_DECLARE_CONST_DATA(afw_utf8_t *)
 * afw_a_string;
 */
#define AFW_DECLARE_CONST_DATA(type) \
AFW_DECLSPEC_DECLARE \
const type


/**
 * @brief Define a public afw function.
 * @param type of return value.
 *
 * There must be a corresponding AFW_DECLARE()
 * in a /src/afw/ source*.h files.
 *
 * Example:
 *
 * const afw_utf8_t *
 * afw_some_function(int a) {...}
 *
 * is decorated this way:
 *
 * AFW_DEFINE(const afw_utf8_t *)
 * afw_some_function(int a) {...}
 */
#define AFW_DEFINE(type) \
AFW_DECLSPEC_DEFINE \
type \
AFW_CALLING_CONVENTION


/**
 * @brief Define a public afw function with variable arguments.
 * @param type of return value.
 *
 * There must be a corresponding AFW_DECLARE_ELLIPSIS()
 * in a /src/afw/ source*.h files.
 *
 * Example:
 *
 * const afw_utf8_t * 
 * afw_some_function(int a, ...) {...}
 *
 * is decorated this way:
 *
 * AFW_DEFINE_ELLIPSIS(const afw_utf8_t *) 
 * afw_some_function(int a, ...) {...}
 */
#define AFW_DEFINE_ELLIPSIS(type) \
AFW_DECLSPEC_DEFINE \
type \
AFW_CALLING_CONVENTION_ELLIPSIS


/**
 * @brief Define a public afw variable.
 * @param type of variable
 *
 * There must be a corresponding AFW_DECLARE_CONST_DATA
 * in a /src/afw/ source*.h files.
 *
 * Example:
 *
 * const afw_utf8_t *
 * afw_a_string;
 *
 * is decorated this way:
 *
 * AFW_DEFINE_CONST_DATA(afw_utf8_t *)
 * afw_a_string;
 */
#define AFW_DEFINE_CONST_DATA(type) \
AFW_DECLSPEC_DEFINE \
const type


#define AFW_CALLBACK \
AFW_CALLING_CONVENTION


#define AFW_CALLBACK_ELLIPSIS \
AFW_CALLING_CONVENTION_ELLIPSIS


#ifdef WIN32
#define AFW_DEFINE_DSO(type) __declspec(dllexport) type
#else
#define AFW_DEFINE_DSO(type) type
#endif


#ifdef AFW_DISABLE_INLINE
#define AFW_HAS_INLINE 0
#define AFW_INLINE
#else
#define AFW_HAS_INLINE APR_HAS_INLINE
#define AFW_INLINE APR_INLINE
#endif


/** AFW Inline. */
#define AFW_STATIC_INLINE static AFW_INLINE

#define AFW_DECLARE_STATIC(type) static type

#if defined(DOXYGEN)
#define AFW_DEFINE_STATIC_INLINE(type) type
#else
#define AFW_DEFINE_STATIC_INLINE(type) AFW_STATIC_INLINE type
#endif



#endif /* __AFW_DECLARE_HELPERS_H__ */
