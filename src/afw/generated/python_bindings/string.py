#!/usr/bin/env python3

##
# @file string.py
# @ingroup afw_bindings_python
# @brief This file contains the Python bindings for the string category.
#

# Generated by afwdev generate afw

import requests
import json

def add_string(session, string, values):
    """
    Add (concatenate) strings

    Add (concatenate) a string with 1 or more values of any data type
    converted to their string value and return the string result.

    Args:
        string (str):

        values (object):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "add<string>",
        "string": string,
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def at_least_one_member_of_string(session, array1, array2):
    """
    Checks for at least one value in common

    Returns boolean true if at least one value in string array1 is in string
    array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "at_least_one_member_of<string>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_size_string(session, value):
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
        "function": "bag_size<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def bag_string(session, values=None):
    """
    Makes an array from values

    Takes any number of string values and returns an array of array.

    Args:
        values (list):

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "bag<string>"
    }

    if values != None:
        action['values'] = values

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def concat(session, values):
    """
    Convert two or more values to string and concatenate

    Convert two or more values of any data type to string and return the
    concatenated result. A value with an undefined value is represented by
    'undefined'.

    Args:
        values (object): Value to convert

    Returns:
        str: The concatenated string values.
    """

    request = session.Request()

    action = {
        "function": "concat",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def encode_as_base64Binary_string(session, value):
    """
    Encode to a base64Binary value

    Encode a value as a base64Binary. The effect is to create a base64Binary
    value with an internal value of the value passed.

    Args:
        value (str): The string value to encode.

    Returns:
        object: A base64Binary value.
    """

    request = session.Request()

    action = {
        "function": "encode_as_base64Binary<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def encode_as_hexBinary_string(session, value):
    """
    Encode to a hexBinary value

    Encode a value as a hexBinary. The effect is to create a hexBinary value
    with an internal value of the value passed.

    Args:
        value (str): The string value to encode.

    Returns:
        object: A hexBinary value.
    """

    request = session.Request()

    action = {
        "function": "encode_as_hexBinary<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ends_with_string(session, value, subString):
    """
    Checks whether value ends with a string

    Checks whether string value ends with a string and return the boolean
    result.

    Args:
        value (str):

        subString (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ends_with<string>",
        "value": value,
        "subString": subString
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eq_ignore_case_string(session, arg1, arg2):
    """
    Checks for equal ignoring case

    Checks for string arg1 is equal to string arg2 ignoring case and return
    the boolean result.

    Args:
        arg1 (str):

        arg2 (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eq_ignore_case<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eq_string(session, arg1, arg2):
    """
    Checks for equal

    Determine if string arg1 is equal to the value of arg2 converted to the
    data type of arg1 then return the boolean result. Use 'eqx' ('===')
    instead if you want false to be returned if arg1 and arg2's data type
    don't match.

    Args:
        arg1 (str):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eq<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def eqx_string(session, arg1, arg2):
    """
    Checks for equal and type

    Determine if for string arg1 is equal to the value and data type of arg2
    then return the boolean result. Use 'eq' ('==') instead if you want arg2
    to be converted to the data type of arg1 before comparison.

    Args:
        arg1 (str):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "eqx<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ge_string(session, arg1, arg2):
    """
    Checks for greater than or equal

    Checks for string arg1 is greater than or equal to string arg2 and return
    the boolean result.

    Args:
        arg1 (str):

        arg2 (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ge<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def gt_string(session, arg1, arg2):
    """
    Checks for greater than

    Checks for string arg1 is greater than string arg2 and return the boolean
    result.

    Args:
        arg1 (str):

        arg2 (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "gt<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def includes_string(session, searchString, subString, position=None):
    """
    Checks whether the string value includes a string

    Checks whether the string value includes a string and return the boolean
    result.

    Args:
        searchString (str): The string to search.

        subString (str): Substring to find.

        position (int): Zero-based position in the search string to start
        search.

    Returns:
        bool: Indicates if the substring is contained in the search string.
    """

    request = session.Request()

    action = {
        "function": "includes<string>",
        "searchString": searchString,
        "subString": subString
    }

    if position != None:
        action['position'] = position

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def index_of_string(session, value, subString, startIndex=None):
    """
    Returns index of first occurrence

    Returns the zero-based index into string value of subString. If subString
    is not found, -1 is returned.

    Args:
        value (str): The string value to search.

        subString (str): Substring to search for.

        startIndex (int): Optional start index for search if different than
        start of string.

    Returns:
        int: Zero-based index of subString or -1 if not found.
    """

    request = session.Request()

    action = {
        "function": "index_of<string>",
        "value": value,
        "subString": subString
    }

    if startIndex != None:
        action['startIndex'] = startIndex

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def intersection_string(session, array1, array2):
    """
    Returns intersection of two arrays

    Returns an array of string with the values that are common to both array
    of string array1 and array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "intersection<string>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_in_string(session, value, array):
    """
    Checks whether a value is in an array

    Checks whether string value is in array of string array and returns the
    boolean result.

    Args:
        value (str):

        array (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is_in<string>",
        "value": value,
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def is_string(session, value):
    """
    Checks whether value is dataType string

    Checks whether value is dataType string and return the boolean result.

    Args:
        value (object): Value to check

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "is<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def last_index_of_string(session, value, subString, startIndex=None):
    """
    Returns index of last occurrence

    Returns the zero-based index into string value of the last occurrence of a
    subString. If subString is not found, -1 is returned.

    Args:
        value (str): The string value to search.

        subString (str): Substring to search for.

        startIndex (int): Optional start index for search if different than
        start of string.

    Returns:
        int: Zero-based index of subString or -1 if not found.
    """

    request = session.Request()

    action = {
        "function": "last_index_of<string>",
        "value": value,
        "subString": subString
    }

    if startIndex != None:
        action['startIndex'] = startIndex

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def le_string(session, arg1, arg2):
    """
    Checks for less than or equal

    Checks for string arg1 is less than or equal to string arg2 and return the
    boolean result.

    Args:
        arg1 (str):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "le<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def length_string(session, value):
    """
    Returns number of codepoints or entries in value

    This is a polymorphic function where string can be any of the supported
    data types. Return the integer number of entries in datatype array or
    codepoints in others.

    Args:
        value (str): Returns the number of entries in an array or code points
        in others.

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "length<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def lt_string(session, arg1, arg2):
    """
    Checks for less than

    Checks for string arg1 is less that string arg2 and return the boolean
    result.

    Args:
        arg1 (str):

        arg2 (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "lt<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def max_string(session, values):
    """
    Maximum value

    Return the string value that is greater than or equal to the others.

    Args:
        values (str):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "max<string>",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def min_string(session, values):
    """
    Minimum value

    Return the string value that is less than or equal to the others.

    Args:
        values (str):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "min<string>",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def ne_string(session, arg1, arg2):
    """
    Checks for not equal

    Determine if string arg1 is not equal to the value of arg2 converted to
    the data type of arg1 then return the boolean result. Use 'nex' ('!==')
    instead if you want true to be returned if arg1 and arg2's data type don't
    match.

    Args:
        arg1 (str):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "ne<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def nex_string(session, arg1, arg2):
    """
    Checks for not equal value or type

    Determine if for string arg1 is not equal to the value or data type of
    arg2 then return the boolean result. Use 'ne' ('!=') instead if you want
    arg2 to be converted to the data type of arg1 before comparison.

    Args:
        arg1 (str):

        arg2 (object):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "nex<string>",
        "arg1": arg1,
        "arg2": arg2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def normalize_space_string(session, string):
    """
    Trims whitespace from beginning and end

    Remove whitespace from the beginning and end of a string value.

    Args:
        string (str):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "normalize_space<string>",
        "string": string
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def normalize_to_lower_case_string(session, string):
    """
    Converts to lower case

    Normalize string value to lower case and returns string result.

    Args:
        string (str):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "normalize_to_lower_case<string>",
        "string": string
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def one_and_only_string(session, array):
    """
    Converts a one value array to a string value

    This converts an array of string values that contains one value to a
    single string value.

    Args:
        array (list):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "one_and_only<string>",
        "array": array
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def regexp_index_of_string(session, value, regexp):
    """
    Returns index of first match of regular expression

    Search string value for a regular expression and return index. If not
    found, -1 is returned.

    Args:
        value (str): The string value to search.

        regexp (str): A regular expression to use for search.

    Returns:
        int: Zero-based index of subString or -1 if not found.
    """

    request = session.Request()

    action = {
        "function": "regexp_index_of<string>",
        "value": value,
        "regexp": regexp
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def regexp_match_string(session, value, regexp):
    """
    Search for a match using a regular expression

    Checks whether string value matches the regular expression regexp and
    return the boolean result.

    Args:
        value (str):

        regexp (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "regexp_match<string>",
        "value": value,
        "regexp": regexp
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def regexp_replace_string(session, value, regexp, replacement, limit=None):
    """
    Replace strings matching a regular expression

    Replace matched values for a regular expression in a string value.

    Args:
        value (str): The original string value.

        regexp (str): A regular expression to use for search.

        replacement (str): The replacement string.

        limit (int): This is the maximum times to replace. The default is 1.
        Specify -1 to replace all occurrences.

    Returns:
        str: A string value with the matched string(s) replaced.
    """

    request = session.Request()

    action = {
        "function": "regexp_replace<string>",
        "value": value,
        "regexp": regexp,
        "replacement": replacement
    }

    if limit != None:
        action['limit'] = limit

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def repeat_string(session, value, times):
    """
    Returns a repeated value

    Repeat a string value a specified number of times.

    Args:
        value (str): The string value to repeat.

        times (int): The number of times to repeat the value.

    Returns:
        str: The repeated string value.
    """

    request = session.Request()

    action = {
        "function": "repeat<string>",
        "value": value,
        "times": times
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def replace_string(session, value, match, replacement, limit=None):
    """
    Replace strings

    Replace string(s) in a string value.

    Args:
        value (str): The original string value.

        match (str): The string to replace.

        replacement (str): The replacement string.

        limit (int): This is the maximum times to replace. The default is 1.
        Specify -1 to replace all occurrences.

    Returns:
        str: A string value with the matched string(s) replaced.
    """

    request = session.Request()

    action = {
        "function": "replace<string>",
        "value": value,
        "match": match,
        "replacement": replacement
    }

    if limit != None:
        action['limit'] = limit

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def set_equals_string(session, array1, array2):
    """
    Checks whether two arrays are subsets of each other

    Returns boolean true if string array1 and string array2 are subsets of
    each other and return the boolean result.

    Args:
        array1 (list):

        array2 (list):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "set_equals<string>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def split_string(session, value, separator=None, limit=None):
    """
    Split at a separator

    Split string value into an array of strings using a separator.

    Args:
        value (str): The string value to split.

        separator (str): The separator to use. If this is an empty string or
        separator is not specified, the value is split between characters.

        limit (int): This is the maximum number of splits. Any remaining part
        of value is ignored.

    Returns:
        list: An array of strings.
    """

    request = session.Request()

    action = {
        "function": "split<string>",
        "value": value
    }

    if separator != None:
        action['separator'] = separator

    if limit != None:
        action['limit'] = limit

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def starts_with_string(session, value, subString):
    """
    Checks whether value starts with a string

    Checks whether string value starts with a subString and return the boolean
    result.

    Args:
        value (str):

        subString (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "starts_with<string>",
        "value": value,
        "subString": subString
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def string(session, values):
    """
    Convert one or more values to string and concatenate

    Convert one or more values of any data type to string and return the
    concatenated result. A value with an undefined value is represented by
    'undefined'.

    Args:
        values (object): Value to convert

    Returns:
        str: The concatenated string values.
    """

    request = session.Request()

    action = {
        "function": "string",
        "values": values
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def subset_string(session, array1, array2):
    """
    Determines if the first array is a subset of second array

    Returns boolean true if the unique values in string array1 are all in
    string array2.

    Args:
        array1 (list): The first array.

        array2 (list): The second array.

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "subset<string>",
        "array1": array1,
        "array2": array2
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def substring_string(session, string, startIndex, endIndex=None):
    """
    Extract a substring

    Returns the string substring of value beginning at zero-based position
    integer startIndex and ending at the position before integer endIndex.
    Specify -1 or omitting endIndex to return up to end of string.

    Args:
        string (str):

        startIndex (int):

        endIndex (int):

    Returns:
        str:
    """

    request = session.Request()

    action = {
        "function": "substring<string>",
        "string": string,
        "startIndex": startIndex
    }

    if endIndex != None:
        action['endIndex'] = endIndex

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_anyURI_string(session, value):
    """
    Converts string to anyURI

    Converts string value to anyURI.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_anyURI<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_boolean_string(session, value):
    """
    Converts string to boolean

    Converts string value to boolean.

    Args:
        value (str):

    Returns:
        bool:
    """

    request = session.Request()

    action = {
        "function": "to_boolean<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_dateTime_string(session, value):
    """
    Converts string to dateTime

    Converts string value to dateTime.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_dateTime<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_date_string(session, value):
    """
    Converts string to date

    Converts string value to date.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_date<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_dayTimeDuration_string(session, value):
    """
    Converts string to dayTimeDuration

    Converts string value to dayTimeDuration.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_dayTimeDuration<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_dnsName_string(session, value):
    """
    Converts string to dnsName

    Converts string value to dnsName.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_dnsName<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_double_string(session, value):
    """
    Converts to double

    Converts string value to double and returns double result.

    Args:
        value (str):

    Returns:
        float:
    """

    request = session.Request()

    action = {
        "function": "to_double<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_integer_string(session, value):
    """
    Converts to integer

    Truncate string value to a whole number and returns integer result.

    Args:
        value (str):

    Returns:
        int:
    """

    request = session.Request()

    action = {
        "function": "to_integer<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_ipAddress_string(session, value):
    """
    Converts string to ipAddress

    Converts string value to ipAddress.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_ipAddress<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_rfc822Name_string(session, value):
    """
    Converts string to rfc822Name

    Converts string value to rfc822Name.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_rfc822Name<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_string_string(session, value):
    """
    Converts value to string

    Converts string value to string. For array values, the to_string() value
    for each entry is returned separated with commas.

    Args:
        value (str): A string value.

    Returns:
        str: The string representation of the value.
    """

    request = session.Request()

    action = {
        "function": "to_string<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_time_string(session, value):
    """
    Converts string to time

    Converts string value to time.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_time<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_x500Name_string(session, value):
    """
    Converts string to x500Name

    Converts string value to x500Name.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_x500Name<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def to_yearMonthDuration_string(session, value):
    """
    Converts string to yearMonthDuration

    Converts string value to yearMonthDuration.

    Args:
        value (str):

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "to_yearMonthDuration<string>",
        "value": value
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def union_string(session, arrays):
    """
    Returns union of two or more string arrays

    Returns an array of string contains all of the unique values in two or
    more array of string values.

    Args:
        arrays (list): Two or more arrays.

    Returns:
        list:
    """

    request = session.Request()

    action = {
        "function": "union<string>",
        "arrays": arrays
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def url_decode(session, encoded):
    """
    URL decode

    URL decode a value or bag of values.

    Args:
        encoded (str): URL decode a single string or a bag of string.

    Returns:
        str: A string or bag of strings.
    """

    request = session.Request()

    action = {
        "function": "url_decode",
        "encoded": encoded
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def url_encode_string(session, unencoded):
    """
    URI encode

    URL encode a value or bag of values.

    Args:
        unencoded (str): URL encode a single value. See the url_encode method
        for the data type of more details.

    Returns:
        str: URI encoded string.
    """

    request = session.Request()

    action = {
        "function": "url_encode<string>",
        "unencoded": unencoded
    }

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

