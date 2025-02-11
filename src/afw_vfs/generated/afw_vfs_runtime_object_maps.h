// See the 'COPYING' file in the project root for licensing information.
/*
 * Adaptive Framework Runtime Object Mapping Header
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/*  ----------------------------- N O T E -------------------------------------
 *
 * This file is generated by "afwdev generate afw_vfs".
 *
 * Do not change this file directly or the changes will be lost the next time
 * this file is regenerated.
 *
 * -------------------------------------------------------------------------*/


#ifndef __AFW_VFS_RUNTIME_OBJECT_MAPS_H__
#define __AFW_VFS_RUNTIME_OBJECT_MAPS_H__


/**
 * @file afw_vfs_runtime_object_maps.h
 * @brief Adaptive Framework runtime object mapping header.
 */


/**
 * @brief Runtime object inf for object type _AdaptiveAdapterTypeSpecific_vfs_retrieve_objects
 */
AFW_DECLARE_CONST_DATA(afw_object_inf_t)
afw_runtime_inf__AdaptiveAdapterTypeSpecific_vfs_retrieve_objects;

/**
 * @brief Runtime object inf for object type _AdaptiveConf_adapter_vfs
 */
AFW_DECLARE_CONST_DATA(afw_object_inf_t)
afw_runtime_inf__AdaptiveConf_adapter_vfs;

/**
 * @brief Runtime object inf for object type _AdaptiveFile_vfs
 */
AFW_DECLARE_CONST_DATA(afw_object_inf_t)
afw_runtime_inf__AdaptiveFile_vfs;

/**
 * @brief Register (afw_vfs_) runtime object maps.
 * @param xctx of caller.  This should be base xctx.
 */
void afw_vfs_register_runtime_object_maps(
    afw_xctx_t *xctx);


#endif /* __AFW_VFS_RUNTIME_OBJECT_MAPS_H__ */
