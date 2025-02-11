#!/usr/bin/env python3

##
# @file hexBinary.py
# @ingroup afw_bindings_python
# @brief This file contains the Python bindings for the hexBinary category.
#

# Generated by afwdev generate afw

import requests
import json

def at_least_one_member_of_hexBinary(session, array1, array2):
    """
    Checks for at least one value in common

    Returns boolean true if at least one value in hexBinary array1 is in
    hexBinary array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "at_least_one_member_of<hexBinary>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_hexBinary(session, values=None):
    """
    Makes an array from values

    Takes any number of hexBinary values and returns an array of array.

    Args:
        values (list):

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "bag<hexBinary>"
    }

    if values != None:
        action['values'] = values

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_size_hexBinary(session, value):
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
        "function": "bag_size<hexBinary>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def decode_to_string_hexBinary(session, value):
    """
    Decode hexBinary to string

    Decode hexBinary value to string. An error is thrown if decoded value is
    not valid UTF-8.

    Args:
        value (object): The hexBinary value to decode.

    Returns:
        str: The decoded string.
    """

    request = session.Request()

    action = {
        "function": "decode_to_string<hexBinary>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eq_hexBinary(session, arg1, arg2):
    """
    Checks for equal

    Determine if hexBinary arg1 is equal to the value of arg2 converted to the
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
        "function": "eq<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eqx_hexBinary(session, arg1, arg2):
    """
    Checks for equal and type

    Determine if for hexBinary arg1 is equal to the value and data type of
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
        "function": "eqx<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ge_hexBinary(session, arg1, arg2):
    """
    Checks for greater than or equal

    Checks for hexBinary arg1 is greater than or equal to hexBinary arg2 and
    return the boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ge<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def gt_hexBinary(session, arg1, arg2):
    """
    Checks for greater than

    Checks for hexBinary arg1 is greater than hexBinary arg2 and return the
    boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "gt<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def hexBinary(session, value):
    """
    Convert to data type hexBinary

    Converts value to data type hexBinary returning hexBinary result.

    Args:
        value (object): Value to convert

    Returns:
        object: Converted value
    """

    request = session.Request()

    action = {
        "function": "hexBinary",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def intersection_hexBinary(session, array1, array2):
    """
    Returns intersection of two arrays

    Returns an array of hexBinary with the values that are common to both
    array of hexBinary array1 and array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "intersection<hexBinary>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_hexBinary(session, value):
    """
    Checks whether value is dataType hexBinary

    Checks whether value is dataType hexBinary and return the boolean result.

    Args:
        value (object): Value to check

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is<hexBinary>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_in_hexBinary(session, value, array):
    """
    Checks whether a value is in an array

    Checks whether hexBinary value is in array of hexBinary array and returns
    the boolean result.

    Args:
        value (object):

        array (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is_in<hexBinary>",
        "value": value,
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def le_hexBinary(session, arg1, arg2):
    """
    Checks for less than or equal

    Checks for hexBinary arg1 is less than or equal to hexBinary arg2 and
    return the boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "le<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def lt_hexBinary(session, arg1, arg2):
    """
    Checks for less than

    Checks for hexBinary arg1 is less that hexBinary arg2 and return the
    boolean result.

    Args:
        arg1 (object):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "lt<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ne_hexBinary(session, arg1, arg2):
    """
    Checks for not equal

    Determine if hexBinary arg1 is not equal to the value of arg2 converted to
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
        "function": "ne<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def nex_hexBinary(session, arg1, arg2):
    """
    Checks for not equal value or type

    Determine if for hexBinary arg1 is not equal to the value or data type of
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
        "function": "nex<hexBinary>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def one_and_only_hexBinary(session, array):
    """
    Converts a one value array to a hexBinary value

    This converts an array of hexBinary values that contains one value to a
    single hexBinary value.

    Args:
        array (list):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "one_and_only<hexBinary>",
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def set_equals_hexBinary(session, array1, array2):
    """
    Checks whether two arrays are subsets of each other

    Returns boolean true if hexBinary array1 and hexBinary array2 are subsets
    of each other and return the boolean result.

    Args:
        array1 (list):

        array2 (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "set_equals<hexBinary>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def subset_hexBinary(session, array1, array2):
    """
    Determines if the first array is a subset of second array

    Returns boolean true if the unique values in hexBinary array1 are all in
    hexBinary array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "subset<hexBinary>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_string_hexBinary(session, value):
    """
    Converts value to string

    Converts hexBinary value to string. For array values, the to_string()
    value for each entry is returned separated with commas.

    Args:
        value (object): A hexBinary value.

    Returns:
        str: The string representation of the value.
    """

    request = session.Request()

    action = {
        "function": "to_string<hexBinary>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def union_hexBinary(session, arrays):
    """
    Returns union of two or more string arrays

    Returns an array of hexBinary contains all of the unique values in two or
    more array of hexBinary values.

    Args:
        arrays (list): Two or more arrays.

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "union<hexBinary>",
        "arrays": arrays
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

