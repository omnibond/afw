#!/usr/bin/env python3

##
# @file integer.py
# @ingroup afw_bindings_python
# @brief This file contains the Python bindings for the integer category.
#

# Generated by afwdev generate afw

import requests
import json

def abs_integer(session, value):
    """
    Absolute value

    Compute the absolute value of the integer value and return the integer
    result.

    Args:
        value (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "abs<integer>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def add_integer(session, values):
    """
    Add

    Add 2 or more integer values and return the integer result.

    Args:
        values (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "add<integer>",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def at_least_one_member_of_integer(session, array1, array2):
    """
    Checks for at least one value in common

    Returns boolean true if at least one value in integer array1 is in integer
    array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "at_least_one_member_of<integer>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_integer(session, values=None):
    """
    Makes an array from values

    Takes any number of integer values and returns an array of array.

    Args:
        values (list):

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "bag<integer>"
    }

    if values != None:
        action['values'] = values

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_size_integer(session, value):
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
        "function": "bag_size<integer>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def divide_integer(session, dividend, divisor):
    """
    Divide numbers

    Divide integer dividend by integer divisor and return the integer
    quotient.

    Args:
        dividend (int):

        divisor (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "divide<integer>",
        "dividend": dividend,
        "divisor": divisor
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eq_integer(session, arg1, arg2):
    """
    Checks for equal

    Determine if integer arg1 is equal to the value of arg2 converted to the
    data type of arg1 then return the boolean result. Use 'eqx' ('===')
    instead if you want false to be returned if arg1 and arg2's data type
    don't match.

    Args:
        arg1 (int):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eq<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eqx_integer(session, arg1, arg2):
    """
    Checks for equal and type

    Determine if for integer arg1 is equal to the value and data type of arg2
    then return the boolean result. Use 'eq' ('==') instead if you want arg2
    to be converted to the data type of arg1 before comparison.

    Args:
        arg1 (int):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eqx<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ge_integer(session, arg1, arg2):
    """
    Checks for greater than or equal

    Checks for integer arg1 is greater than or equal to integer arg2 and
    return the boolean result.

    Args:
        arg1 (int):

        arg2 (int):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ge<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def gt_integer(session, arg1, arg2):
    """
    Checks for greater than

    Checks for integer arg1 is greater than integer arg2 and return the
    boolean result.

    Args:
        arg1 (int):

        arg2 (int):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "gt<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def integer(session, value):
    """
    Convert to data type integer

    Converts value to data type integer returning integer result.

    Args:
        value (object): Value to convert

    Returns:
        int: Converted value
    """

    request = session.Request()

    action = {
        "function": "integer",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def intersection_integer(session, array1, array2):
    """
    Returns intersection of two arrays

    Returns an array of integer with the values that are common to both array
    of integer array1 and array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "intersection<integer>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_in_integer(session, value, array):
    """
    Checks whether a value is in an array

    Checks whether integer value is in array of integer array and returns the
    boolean result.

    Args:
        value (int):

        array (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is_in<integer>",
        "value": value,
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_integer(session, value):
    """
    Checks whether value is dataType integer

    Checks whether value is dataType integer and return the boolean result.

    Args:
        value (object): Value to check

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is<integer>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def le_integer(session, arg1, arg2):
    """
    Checks for less than or equal

    Checks for integer arg1 is less than or equal to integer arg2 and return
    the boolean result.

    Args:
        arg1 (int):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "le<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def lt_integer(session, arg1, arg2):
    """
    Checks for less than

    Checks for integer arg1 is less that integer arg2 and return the boolean
    result.

    Args:
        arg1 (int):

        arg2 (int):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "lt<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def max_integer(session, values):
    """
    Maximum value

    Return the integer value that is greater than or equal to the others.

    Args:
        values (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "max<integer>",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def min_integer(session, values):
    """
    Minimum value

    Return the integer value that is less than or equal to the others.

    Args:
        values (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "min<integer>",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def mod_integer(session, dividend, divisor):
    """
    Remainder of dividing numbers

    Divide integer dividend by integer divisor and return the integer
    remainder.

    Args:
        dividend (int):

        divisor (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "mod<integer>",
        "dividend": dividend,
        "divisor": divisor
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def multiply_integer(session, values):
    """
    Multiply numbers

    Multiply 2 or more integer values and return the integer result.

    Args:
        values (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "multiply<integer>",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ne_integer(session, arg1, arg2):
    """
    Checks for not equal

    Determine if integer arg1 is not equal to the value of arg2 converted to
    the data type of arg1 then return the boolean result. Use 'nex' ('!==')
    instead if you want true to be returned if arg1 and arg2's data type don't
    match.

    Args:
        arg1 (int):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ne<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def negative_integer(session, value):
    """
    Negative of a number

    Return negative of integer value.

    Args:
        value (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "negative<integer>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def nex_integer(session, arg1, arg2):
    """
    Checks for not equal value or type

    Determine if for integer arg1 is not equal to the value or data type of
    arg2 then return the boolean result. Use 'ne' ('!=') instead if you want
    arg2 to be converted to the data type of arg1 before comparison.

    Args:
        arg1 (int):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "nex<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def one_and_only_integer(session, array):
    """
    Converts a one value array to a integer value

    This converts an array of integer values that contains one value to a
    single integer value.

    Args:
        array (list):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "one_and_only<integer>",
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def set_equals_integer(session, array1, array2):
    """
    Checks whether two arrays are subsets of each other

    Returns boolean true if integer array1 and integer array2 are subsets of
    each other and return the boolean result.

    Args:
        array1 (list):

        array2 (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "set_equals<integer>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def subset_integer(session, array1, array2):
    """
    Determines if the first array is a subset of second array

    Returns boolean true if the unique values in integer array1 are all in
    integer array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "subset<integer>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def subtract_integer(session, arg1, arg2):
    """
    Subtract numbers

    Subtract integer arg2 from integer arg1 and return the integer result.

    Args:
        arg1 (int):

        arg2 (int):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "subtract<integer>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_double_integer(session, value):
    """
    Converts to double

    Converts integer value to double and returns double result.

    Args:
        value (int):

    Returns:
        float:
    """

    request = session.Request()

    action = {
        "function": "to_double<integer>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_string_integer(session, value):
    """
    Converts value to string

    Converts integer value to string. For array values, the to_string() value
    for each entry is returned separated with commas.

    Args:
        value (int): A integer value.

    Returns:
        str: The string representation of the value.
    """

    request = session.Request()

    action = {
        "function": "to_string<integer>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def union_integer(session, arrays):
    """
    Returns union of two or more string arrays

    Returns an array of integer contains all of the unique values in two or
    more array of integer values.

    Args:
        arrays (list): Two or more arrays.

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "union<integer>",
        "arrays": arrays
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

