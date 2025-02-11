#!/usr/bin/env python3

##
# @file value.py
# @ingroup afw_bindings_python
# @brief This file contains the Python bindings for the value category.
#

# Generated by afwdev generate afw

import requests
import json

def meta(session, value):
    """
    Return the meta object about an adaptive value

    This function returns an object containing meta information for an
    adaptive value.

    Args:
        value (object): This is the adaptive value whose meta object is to be
        returned.

    Returns:
        dict: An object containing the meta information for the adaptive
        value. The objectType of this object is normally _AdaptiveValueMeta_
        or one of its descendants.
    """

    request = session.Request()

    action = {
        "function": "meta",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def metas(session, value):
    """
    Return an array of the result of calling meta() for each value in an array or object adaptive value

    This function returns an array of the result of calling meta() for each
    value in an array or object adaptive value.

    Args:
        value (object): This is an adaptive array or object.

    Returns:
        dict: An array containing the result of calling meta() of each value
        in array or object adaptive value.
    """

    request = session.Request()

    action = {
        "function": "metas",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

