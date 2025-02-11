#!/usr/bin/env python3

##
# @file journal.py
# @ingroup afw_bindings_python
# @brief This file contains the Python bindings for the journal category.
#

# Generated by afwdev generate afw

import requests
import json

def journal_advance_cursor_for_consumer(session, consumerId, adapterId=None, limit=None):
    """
    Advance journal cursor for consumer

    Update the advance cursor for a consumer referenced by the consumerId
    parameter. The limit parameter specifies the maximum number of entries to
    scan for an applicable entry for consumer before returning. NULL is always
    returned.
    
    There are no response properties set by this function.
    
    The properties of the _AdaptiveProvisioningPeer_ object associated with
    the consumer_id are used in the following way:
    
    The consumerFilter expression is used to determine if an entry is
    applicable.
    
    Journal entries are scanned beginning at the entry at the cursor in the
    advanceCursor property. If the advanceCursor property is not present, the
    scan begins after the cursor in currentCursor. If neither are present, the
    scan begins at the start of the journal.
    
    If an new applicable entry is found or if the limit is met, the
    advanceCursor property is set to the currently scanned entry's cursor.

    Args:
        adapterId (str): Id of adapter.

        consumerId (str): The consumerId property value of the associated
        _AdaptiveProvisioningPeer_ object.

        limit (int): The maximum number of entries that will be scanned for an
        entry where the consumerFilter expression in the associated
        _AdaptiveProvisioningPeer_ object evaluates to true.

    Returns:
        dict: Response object.
    """

    request = session.Request()

    action = {
        "function": "journal_advance_cursor_for_consumer",
        "consumerId": consumerId
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    if limit != None:
        action['limit'] = limit

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def journal_get_by_cursor(session, cursor, adapterId=None):
    """
    Get journal entry at cursor

    Get journal entry specified by entry_cursor parameter.
    
    This option will set response properties 'entry' and 'cursor' if there is
    an entry to retrieve. If an entry with the supplied cursor does not exist,
    a not_found error is thrown.

    Args:
        adapterId (str): Id of adapter.

        cursor (str): Journal entry cursor.

    Returns:
        dict: Response object.
    """

    request = session.Request()

    action = {
        "function": "journal_get_by_cursor",
        "cursor": cursor
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def journal_get_first(session, adapterId=None):
    """
    Get first journal entry

    Get first journal entry.
    
    This option will set response properties 'entry' and 'cursor' if there is
    a first entry to return.

    Args:
        adapterId (str): Id of adapter.

    Returns:
        dict: Response object.
    """

    request = session.Request()

    action = {
        "function": "journal_get_first"
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def journal_get_next_after_cursor(session, cursor, adapterId=None):
    """
    Get next journal entry after cursor

    Get the next journal entry after the one specified by the entry_cursor
    parameter.
    
    This option will set response properties 'entry' and 'cursor' if there is
    a next entry to retrieve.

    Args:
        adapterId (str): Id of adapter.

        cursor (str): Journal entry cursor.

    Returns:
        dict: Response object.
    """

    request = session.Request()

    action = {
        "function": "journal_get_next_after_cursor",
        "cursor": cursor
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def journal_get_next_for_consumer(session, consumerId, adapterId=None, limit=None):
    """
    Get next journal entry for consumer

    Get the next journal entry for a consumer referenced by the consumer_id
    parameter. The entry_cursor parameter is ignored. The limit parameter
    specifies the maximum number of entries to scan for an applicable entry
    for consumer before returning.
    
     This option will set response properties 'entry' and 'entryCursor' if an
    applicable entry is retrieved. Property 'reissue' will be set as described
    below.
    
    The properties of the _AdaptiveProvisioningPeer_ object associated with
    the consumer_id are used in the following way:
    
    The consumerFilter expression is used to determine if an entry is
    applicable.
    
    If consumeCursor property exists, return that entry at that cursor again
    immediately with a 'reissue' property added and set to true.
    
    Journal entries are scanned beginning at the entry at the cursor in the
    advanceCursor property. If the advanceCursor property is not present, the
    scan begins after the cursor in currentCursor. If neither are present, the
    scan begins at the start of the journal.
    
    If an applicable entry is found, properties consumeStart and consumeCursor
    are set, advanceCursor is removed, and the entry is returned. Method
    mark_entry_consumed() will remove these properties.
    
    If no applicable entry is found, advanceCursor is set to the last entry
    scanned.

    Args:
        adapterId (str): Id of adapter.

        consumerId (str): The consumerId property value of the associated
        _AdaptiveProvisioningPeer_ object.

        limit (int): The maximum number of entries that will be scanned for an
        entry where the consumerFilter expression in the associated
        _AdaptiveProvisioningPeer_ object evaluates to true.

    Returns:
        dict: Response object.
    """

    request = session.Request()

    action = {
        "function": "journal_get_next_for_consumer",
        "consumerId": consumerId
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    if limit != None:
        action['limit'] = limit

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def journal_get_next_for_consumer_after_cursor(session, consumerId, cursor, adapterId=None, limit=None):
    """
    Get next journal entry for consumer after cursor

    Get the next journal entry for a consumer referenced by the consumer_id
    after the one specified by the entry_cursor parameter. The limit parameter
    specifies the maximum number of entries to scan for an applicable entry
    for consumer before returning.
    
    This option will set response properties 'entry' and 'cursor' if an
    applicable entry is retrieved.
    
    The properties of the _AdaptiveProvisioningPeer_ object associated with
    the consumer_id are used in the following way:
    
    The consumerFilter expression is used to determine if an entry is
    applicable.
    
    Unlike option get_next_for_consumer, no other properties are referenced or
    modified.

    Args:
        adapterId (str): Id of adapter.

        consumerId (str): The consumerId property value of the associated
        _AdaptiveProvisioningPeer_ object.

        cursor (str): Journal entry cursor.

        limit (int): The maximum number of entries that will be scanned for an
        entry where the consumerFilter expression in the associated
        _AdaptiveProvisioningPeer_ object evaluates to true.

    Returns:
        dict: Response object.
    """

    request = session.Request()

    action = {
        "function": "journal_get_next_for_consumer_after_cursor",
        "consumerId": consumerId,
        "cursor": cursor
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    if limit != None:
        action['limit'] = limit

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

def journal_mark_consumed(session, consumerId, cursor, adapterId=None):
    """
    Mark journal entry consumed

    Mark a journal entry returned by get_next_for_consumer() as consumed.

    Args:
        adapterId (str): Id of adapter.

        consumerId (str): The consumerId property value of the associated
        _AdaptiveProvisioningPeer_ object.

        cursor (str): Journal entry cursor.

    Returns:
        object:
    """

    request = session.Request()

    action = {
        "function": "journal_mark_consumed",
        "consumerId": consumerId,
        "cursor": cursor
    }

    if adapterId != None:
        action['adapterId'] = adapterId

    request.add_action(action)

    response = request.perform()
    if response.get('status') == 'error':
        raise Exception(response.get('error'))

    return response['actions'][0]['result']

