# See the 'COPYING' file in the project root for licensing information.
#
# Basic install for subdir afw_curl
#
#----------------------------- N O T E -------------------------------------
#
# This file is generated by "afwdev generate".
#
# Do not change this file directly or the changes will be lost the next time
# this file is regenerated.
#
#----------------------------------------------------------------------------
#
# The basic afw install for a subdir is to install the library or executable
# built by the subdir's project. Do not include this file if you need a
# different type of install.
#

install(TARGETS ${PROJECT_NAME}
    LIBRARY DESTINATION ${AFW_PACKAGE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${AFW_PACKAGE_INSTALL_BINDIR}
)
