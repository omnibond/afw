// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework memory pool support header.
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

#ifndef __AFW_POOL_H__
#define __AFW_POOL_H__

#include "afw_interface.h"

/**
 * @defgroup afw_pool Pool
 * @ingroup afw_c_api_public
 *
 * Pool support
 *
 * @{
 */

/**
 * @file afw_pool.h
 * @brief Adaptive Framework memory pool support header.
 */

AFW_BEGIN_DECLARES

/** @brief Typedef for registered cleanup functions. */
typedef struct afw_pool_cleanup_s afw_pool_cleanup_t;


/** @brief Struct for registered cleanup functions. */
struct afw_pool_cleanup_s {

    /* *** next_cleanup MUST BE FIRST *** */
    /** @brief Next cleanup function. */
    afw_pool_cleanup_t *next_cleanup;

    /* @brief Cleanup function. */
    afw_pool_cleanup_function_p_t cleanup;

    /* @brief Parameter data passed to function. */
    void *data;

    /* @brief Parameter data2 passed to function. */
    void *data2;
};


/**
 * @brief Create a new pool.
 * @param parent of new pool.
 * @param xctx of caller.
 * @return new pool.
 *
 * A pool created with this function is either thread specific or a
 * multithreaded pool, depending on the parent.
 *
 * If the parent is a thread specific pool, the created pool will also be thread
 * specific. Thread specific pools are single threaded and are not thread safe.
 * If any of the pool functions are called from other than the specific thread,
 * an error is thrown.
 *
 * The only way to create a thread specific pool is by calling the
 * afw_thread_create() function and accessing the thread struct's p member.
 *
 * If the parent is a multithread pool, the created pool will also be a
 * multithreaded pool.
 *
 * The base pool (xctx->env->p) for the environment is created when the AFW
 * environment is created and is a multithreaded pool.
 */
AFW_DECLARE(const afw_pool_t *)
afw_pool_create(
    const afw_pool_t *parent,
    afw_xctx_t *xctx);


/**
 * @brief Create a subpool of a pool.
 * @param parent of new subpool.
 * @param xctx of caller.
 * @return new pool.
 *
 * This creates a subpool of a parent pool.
 *
 * When memory is allocated from the subpool, it is allocated from the parent
 * pool. The memory is tracked in the subpool and when the subpool is destroyed
 * or subpool memory is freed, the memory is returned to the parent.
 *
 * When a subpool is destroyed, all of it's children pools are released. If
 * there are any children that remain after being released, their parent is
 * changed to the subpool's parent. This makes subpools useful for scopes where
 * the children pools might still be needed because variables accessing them are
 * still in scope. To be clear, all the children pools will be destroyed when
 * the subpool is destroyed unless they have a reference count greater than 1.
 *
 * Subpool's have a small amount of overhead per allocation as well as overhead
 * when the subpool is destroyed but they can be useful in situations where the
 * subpool will most often hold a small number of allocations that will usually
 * total less than 4k. Externally, subpool are used the same as a pool.
 *
 * This function is used by afw_xctx_scope_create() to create a unique subpool
 * for each xctx scope with a parent pool of xctx->p.
 */
AFW_DECLARE(const afw_pool_t *)
afw_pool_create_subpool(
    const afw_pool_t *parent, 
    afw_xctx_t *xctx);


/**
 * @brief Create thread struct in new thread specific pool with p set.
 * @param size of thread struct or -1 if sizeof(afw_thread_t) should be used.
 * @param xctx of caller.
 * @return new thread struct with p set.
 *
 * This function may be enhanced at a future time, but at this point it should
 * be considered internal and only called from afw_thread_create().
 */
AFW_DECLARE(afw_thread_t *)
afw_pool_create_thread(
    afw_size_t size,
    afw_xctx_t *xctx);


/**
 * @brief Macro to allocate cleared memory to hold type in pool.
 * @param instance of pool.
 * @param type to allocate.
 * @param xctx of caller.
 * @return pointer to memory allocated cast to pointer of type.
 *
 * This is a helper macro to call afw_pool_calloc() to allocate
 * memory for a specified type and cast the return pointer to
 * a pointer to that type.
 */
#define afw_pool_calloc_type(instance, type, xctx) \
    (type *) afw_pool_calloc(instance, sizeof(type), xctx)


/**
 * @brief Macro to allocate uncleared memory to hold type in pool.
 * @param instance of pool.
 * @param type to allocate.
 * @param xctx of caller.
 * @return pointer to memory allocated cast to pointer of type.
 *
 * This is a helper macro to call afw_pool_malloc() to allocate
 * memory for a specified type and cast the return pointer to a pointer
 * to that type.
 */
#define afw_pool_malloc_type(instance, type, xctx) \
    (type *) afw_pool_malloc(instance, sizeof(type), xctx)


/**
 * @brief Free memory in it's associated pool.
 * @param address of memory to free.
 * @param xctx of caller.
 *
 * The memory address must be one returned by a afw_pool_calloc() or
 * afw_pool_malloc() call.
 */
AFW_DECLARE(void)
afw_pool_free_memory(
    void *address,
    afw_xctx_t *xctx);


AFW_END_DECLARES

/** @} */

#endif /* __AFW_POOL_H__ */
