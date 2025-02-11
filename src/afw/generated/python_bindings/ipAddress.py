#!/usr/bin/env python3

##
# @file ipAddress.py
# @ingroup afw_bindings_python
# @brief This file contains the Python bindings for the ipAddress category.
#

# Generated by afwdev generate afw

import requests
import json

def bag_ipAddress(session, values=None):
    """
    Makes an array from values

    Takes any number of ipAddress values and returns an array of array.

    Args:
        values (list):

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "bag<ipAddress>"
    }

    if values != None:
        action['values'] = values

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_size_ipAddress(session, value):
    """
    Returns the number of values in a bag

    This returns the integer number of values in array.

    Args:
        value (list):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "bag_size<ipAddress>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eq_ipAddress(session, arg1, arg2):
    """
    Checks for equal

    Determine if ipAddress arg1 is equal to the value of arg2 converted to the
    data type of arg1 then return the boolean result. Use 'eqx' ('===')
    instead if you want false to be returned if arg1 and arg2's data type
    don't match.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eq<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eqx_ipAddress(session, arg1, arg2):
    """
    Checks for equal and type

    Determine if for ipAddress arg1 is equal to the value and data type of
    arg2 then return the boolean result. Use 'eq' ('==') instead if you want
    arg2 to be converted to the data type of arg1 before comparison.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eqx<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ge_ipAddress(session, arg1, arg2):
    """
    Checks for greater than or equal

    Checks for ipAddress arg1 is greater than or equal to ipAddress arg2 and
    return the boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ge<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def gt_ipAddress(session, arg1, arg2):
    """
    Checks for greater than

    Checks for ipAddress arg1 is greater than ipAddress arg2 and return the
    boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "gt<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ipAddress(session, value):
    """
    Convert to data type ipAddress

    Converts value to data type ipAddress returning ipAddress result.

    Args:
        value (object): Value to convert

    Returns:
        object: Converted value
    """

    request = session.Request()

    action = {
        "function": "ipAddress",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_in_ipAddress(session, value, array):
    """
    Checks whether a value is in an array

    Checks whether ipAddress value is in array of ipAddress array and returns
    the boolean result.

    Args:
        value (object):

        array (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is_in<ipAddress>",
        "value": value,
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_ipAddress(session, value):
    """
    Checks whether value is dataType ipAddress

    Checks whether value is dataType ipAddress and return the boolean result.

    Args:
        value (object): Value to check

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is<ipAddress>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def le_ipAddress(session, arg1, arg2):
    """
    Checks for less than or equal

    Checks for ipAddress arg1 is less than or equal to ipAddress arg2 and
    return the boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "le<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def lt_ipAddress(session, arg1, arg2):
    """
    Checks for less than

    Checks for ipAddress arg1 is less that ipAddress arg2 and return the
    boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "lt<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ne_ipAddress(session, arg1, arg2):
    """
    Checks for not equal

    Determine if ipAddress arg1 is not equal to the value of arg2 converted to
    the data type of arg1 then return the boolean result. Use 'nex' ('!==')
    instead if you want true to be returned if arg1 and arg2's data type don't
    match.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ne<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def nex_ipAddress(session, arg1, arg2):
    """
    Checks for not equal value or type

    Determine if for ipAddress arg1 is not equal to the value or data type of
    arg2 then return the boolean result. Use 'ne' ('!=') instead if you want
    arg2 to be converted to the data type of arg1 before comparison.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "nex<ipAddress>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def one_and_only_ipAddress(session, array):
    """
    Converts a one value array to a ipAddress value

    This converts an array of ipAddress values that contains one value to a
    single ipAddress value.

    Args:
        array (list):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "one_and_only<ipAddress>",
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def regexp_match_ipAddress(session, value, regexp):
    """
    Search for a match using a regular expression

    Checks whether ipAddress value matches the regular expression regexp and
    return the boolean result.

    Args:
        value (object):

        regexp (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "regexp_match<ipAddress>",
        "value": value,
        "regexp": regexp
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_string_ipAddress(session, value):
    """
    Converts value to string

    Converts ipAddress value to string. For array values, the to_string()
    value for each entry is returned separated with commas.

    Args:
        value (object): A ipAddress value.

    Returns:
        str: The string representation of the value.
    """

    request = session.Request()

    action = {
        "function": "to_string<ipAddress>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

