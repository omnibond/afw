<?php

// See the 'COPYING' file in the project root for licensing information.
/*
 * PHP Bindings for adapter
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/**
 * @file adapter.php
 * @ingroup afw_bindings_php
 * @brief Class definition for function category adapter
 */
class adapter
{
    private $session;

    /**
     * Constructs the adapter class, using a session.
     */
    public function __construct($session = null)
    {
        $this->session = $session;
    }

    /**
     * adapter_objectCallback_signature()
     *
     * This is the function signature for the objectCallback parameter in
     * adapter functions. Calling this directly will throw a 'Do not call
     * directly' error.
     *
     * @param object $object This is the object from adapter or undefined if
     *                       there are no more objects to return.
     * @param any $userData This is the value of the userData parameter when
     *                      objectCallback was called.
     *
     * @return boolean Return true if this callback should not be called again
     *                 for any reason such a limit exceeded or the desired
     *                 object being found.
     */
    public function adapter_objectCallback_signature(, $object, $userData = null)
    {
        $request = $this->$session->request();

        $request->set("function", "adapter_objectCallback_signature");

        /* pass along required parameters to the request payload */
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($userData != null)
            $request->set('userData', $userData);

        return $request->get_result();
    }

    /**
     * add_object()
     *
     * Add an adaptive object to an adapter, specified by the adapterId, with
     * a specified objectType. You may supply an optional objectId, if the
     * underlying adapterId allows it.
     *
     * @param string $adapterId Id of adapter.
     * @param string $objectType Id of adaptive object type of object being
     *                           added.
     * @param object $object Object to add.
     * @param string $objectId Optional preferred objectId of object to add.
     *                         The adapter may ignore this.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_add_object
     * 
     *                                    where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry. Property 'objectId' is the
     *                objectId assigned by the adapter.
     */
    public function add_object(, $objectType, $object, $adapterId = null, $objectId = null, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "add_object");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($objectId != null)
            $request->set('objectId', $objectId);

        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * add_object_with_uri()
     *
     * Add an adaptive object with a given URI.
     *
     * @param anyURI $uri URI of object to add. If a URI begins with a single
     *                    slash ('/'), it is the local object path. In the
     *                    case of a local path, an optional preferred objectId
     *                    of object can be including in URI which the adapter
     *                    may ignore.
     * @param object $object Object to add.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_add_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry. Property 'objectId' is the
     *                objectId assigned by the adapter.
     */
    public function add_object_with_uri(, $uri, $object, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "add_object_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * convert_AdaptiveQueryCriteria_to_query_string()
     *
     * This function converts an _AdaptiveQueryCriteria_ object to a query
     * string.
     *
     * @param object $queryCriteria An object type _AdaptiveQueryCriteria_
     *                              object.
     * @param string $adapterId This is the adapterId of adapter containing
     *                          the objectType for validating and mapping this
     *                          query. If not specified, no validation or
     *                          mapping will occur.
     * @param string $objectType This is the objectType used in conjunction
     *                           with the adapterId parameter. This parameter
     *                           is only allowed and is required if the
     *                           adapterId parameter is specified.
     * @param integer $style The style of the query string produced. All of
     *                       the styles are appropriately url encoded.
     * 
     *                       0 - 'name=op=value' where '=op=' will be '==',
     *                       '!=', '=ge=', etc. with conjunctions '&' (and)
     *                       and '|' (or). Parentheses are placed around each
     *                       group of like conjunctions except for outer '&'.
     *                       (default)
     * 
     *                       1 - the same as 1 with '=gte=' instead of '=ge=',
     *                       '=lte=' instead of '=le=', '=eq=' instead of '=',
     *                       and '=ne=' instead of '!='.
     * 
     *                       2 - similar to 1 with ';' for '&' and ',' for
     *                       '|'.
     * 
     *                       3 - comparisons 'op(name,value)' where 'op' will
     *                       be 'eq', 'ne', 'ge', ..., plus conjunctions
     *                       'and(list)' and 'or(list)' where 'array' is a
     *                       comma separated list of any comparison or
     *                       conjunction.
     *
     * @return string Query string representation of the query criteria.
     */
    public function convert_AdaptiveQueryCriteria_to_query_string(, $queryCriteria, $adapterId = null, $objectType = null, $style = null)
    {
        $request = $this->$session->request();

        $request->set("function", "convert_AdaptiveQueryCriteria_to_query_string");

        /* pass along required parameters to the request payload */
        $request->set("queryCriteria", $queryCriteria);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($objectType != null)
            $request->set('objectType', $objectType);

        if ($style != null)
            $request->set('style', $style);

        return $request->get_result();
    }

    /**
     * convert_query_string_to_AdaptiveQueryCriteria()
     *
     * This function converts a query string to an _AdaptiveQueryCriteria_
     * object.
     *
     * @param string $queryString The query string to convert.
     * @param string $adapterId This is the adapterId of adapter containing
     *                          the objectType for validating and mapping this
     *                          query. If not specified, no validation or
     *                          mapping will occur.
     * @param string $objectType This is the objectType used in conjunction
     *                           with the adapterId parameter. This parameter
     *                           is only allowed and is required if the
     *                           adapterId parameter is specified.
     *
     * @return object An object type _AdaptiveQueryCriteria_ object
     *                representing query string.
     */
    public function convert_query_string_to_AdaptiveQueryCriteria(, $queryString, $adapterId = null, $objectType = null)
    {
        $request = $this->$session->request();

        $request->set("function", "convert_query_string_to_AdaptiveQueryCriteria");

        /* pass along required parameters to the request payload */
        $request->set("queryString", $queryString);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($objectType != null)
            $request->set('objectType', $objectType);

        return $request->get_result();
    }

    /**
     * delete_object()
     *
     * Delete an adaptive object.
     *
     * @param string $adapterId Id of adapter containing object to delete.
     * @param string $objectType Id of adaptive object type of object to
     *                           delete.
     * @param string $objectId Id of object to delete.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_delete_object
     * 
     *                                    where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function delete_object(, $objectType, $objectId, $adapterId = null, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "delete_object");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);
        $request->set("objectId", $objectId);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * delete_object_with_uri()
     *
     * Delete an adaptive object with a given URI.
     *
     * @param anyURI $uri URI of object to delete. If a URI begins with a
     *                    single slash ('/'), it is the local object path.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_delete_object
     * 
     *                                    where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function delete_object_with_uri(, $uri, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "delete_object_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * get_object()
     *
     * Get an adaptive object from the adapter, specified by adapterId,
     * objectType and objectId. Optional view options and adapter-specific
     * options may be supplied to influence how the object is returned.
     *
     * @param string $adapterId Id of adapter containing object to retrieve.
     * @param string $objectType Id of adaptive object type of object to
     *                           retrieve.
     * @param string $objectId Id of object to retrieve.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_get_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Object retrieved or NULL if not found.
     */
    public function get_object(, $objectType, $objectId, $adapterId = null, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "get_object");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);
        $request->set("objectId", $objectId);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * get_object_with_uri()
     *
     * Get an object with a given URI.
     *
     * @param anyURI $uri URI of object to retrieve. If a URI begins with a
     *                    single slash ('/'), it is the local object path.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_get_object
     * 
     *                                    where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Object retrieved or NULL if not found.
     */
    public function get_object_with_uri(, $uri, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "get_object_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * modify_object()
     *
     * Modify an adaptive object.
     *
     * @param string $adapterId Id of adapter containing object to modify.
     * @param string $objectType Id of adaptive object type of object to
     *                           modify.
     * @param string $objectId Id of object to modify.
     * @param array $entries List of modifications. Entries are of the form:
     * 
     *                           [         'add_value',         'property
     *                       name' or ['property name', ... ],         value  
     *                         ]
     * 
     *                           [         'remove_property',        
     *                       'property name' or ['property name', ... ]     ]
     * 
     *                           [         'remove_value',         'property
     *                       name' or ['property name', ... ],         value  
     *                         ]
     * 
     *                           [         'set_property',         'property
     *                       name' or ['property name', ... ],         value  
     *                         ]
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function modify_object(, $objectType, $objectId, $entries, $adapterId = null, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "modify_object");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);
        $request->set("objectId", $objectId);
        $request->set("entries", $entries);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * modify_object_with_uri()
     *
     * Modify an adaptive object with a given URI.
     *
     * @param anyURI $uri URI of object to modify. If a URI begins with a
     *                    single slash ('/'), it is the local object path.
     * @param array $entries List of asserts and modifications. Entries are of
     *                       the form:
     * 
     *                           [         'add_value',         'property
     *                       name' or ['property name', ... ],         value  
     *                         ]
     * 
     *                           [         'remove_property',        
     *                       'property name' or ['property name', ... ]     ]
     * 
     *                           [         'remove_value',         'property
     *                       name' or ['property name', ... ],         value  
     *                         ]
     * 
     *                           [         'set_property',         'property
     *                       name' or ['property name', ... ],         value  
     *                         ]
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function modify_object_with_uri(, $uri, $entries, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "modify_object_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);
        $request->set("entries", $entries);

        /* pass along any optional parameters to the request payload */
        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * reconcile_object()
     *
     * Reconcile an adaptive object.
     *
     * @param object $object An object that has been retrieved with object
     *                       options reconcilable, and whose properties have
     *                       been modified. A modify_object request will be
     *                       produced reflecting the difference between the
     *                       original object and this unmodified object.
     * @param boolean $checkOnly Produce the modify_object request but don't
     *                           execute it. The returned journal enter will
     *                           contain the modify_object request.
     *
     * @return object Resulting journal entry.
     */
    public function reconcile_object(, $object, $checkOnly = null)
    {
        $request = $this->$session->request();

        $request->set("function", "reconcile_object");

        /* pass along required parameters to the request payload */
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($checkOnly != null)
            $request->set('checkOnly', $checkOnly);

        return $request->get_result();
    }

    /**
     * replace_object()
     *
     * Replace an adaptive object.
     *
     * @param string $adapterId Id of adapter containing object to replace.
     * @param string $objectType Id of adaptive object type of object to
     *                           replace.
     * @param string $objectId Id of object to replace.
     * @param object $object Replacement object.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_replace_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function replace_object(, $objectType, $objectId, $object, $adapterId = null, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "replace_object");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);
        $request->set("objectId", $objectId);
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * replace_object_with_uri()
     *
     * Replace an adaptive object with a given URI.
     *
     * @param anyURI $uri URI of object to replace. If a URI begins with a
     *                    single slash ('/'), it is the local object path.
     * @param object $object Replacement object.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_replace_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function replace_object_with_uri(, $uri, $object, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "replace_object_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects()
     *
     * This function retrieves adaptive objects from an adapter, specified by
     * adapterId, which match the type specified by objectType.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param string $adapterId Id of adapter containing objects to retrieve.
     * @param string $objectType Id of adaptive object type of objects to
     *                           retrieve.
     * @param object $queryCriteria This is the query criteria for objects to
     *                              be retrieved. If not specified, all
     *                              objects will be retrieved.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return array This is the array of objects retrieved.
     */
    public function retrieve_objects(, $objectType, $adapterId = null, $queryCriteria = null, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($queryCriteria != null)
            $request->set('queryCriteria', $queryCriteria);

        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_to_callback()
     *
     * This function retrieves adaptive objects from an adapter, specified by
     * adapterId, which match the type specified by objectType.
     * 
     * Each object is passed to the callback as it's retrieved.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param function $objectCallback If this is specified, this function is
     *                                 called once for each object retrieved
     *                                 instead of adding the object to the
     *                                 return array. Parameter object will be
     *                                 an object retrieved or undefined if
     *                                 there are no more objects. This
     *                                 function should return true if it wants
     *                                 to abort the retrieve request.
     * @param  $userData This value is passed to the objectCallback function
     *                   in the userData parameter.
     * @param string $adapterId Id of adapter containing objects to retrieve.
     * @param string $objectType Id of adaptive object type of objects to
     *                           retrieve.
     * @param object $queryCriteria This is the query criteria for objects to
     *                              be retrieved. If not specified, all
     *                              objects will be retrieved.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects_to_callback
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return void
     */
    public function retrieve_objects_to_callback(, $objectCallback, $userData, $objectType, $adapterId = null, $queryCriteria = null, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_to_callback");

        /* pass along required parameters to the request payload */
        $request->set("objectCallback", $objectCallback);
        $request->set("userData", $userData);
        $request->set("objectType", $objectType);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($queryCriteria != null)
            $request->set('queryCriteria', $queryCriteria);

        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_to_response()
     *
     * This function retrieves adaptive objects from an adapter, specified by
     * adapterId, which match the type specified by objectType.
     * 
     * This function is only allowed when called during a request with content
     * type 'application/x-afw'. An '_AdaptiveResponse_' object is written to
     * the request's response as each object is retrieved. This
     * '_AdaptiveResponse_' object has a 'result' property containing the
     * retrieved object and a 'intermediate' property set to true.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param string $adapterId Id of adapter containing objects to retrieve.
     * @param string $objectType Id of adaptive object type of objects to
     *                           retrieve.
     * @param object $queryCriteria This is the query criteria for objects to
     *                              be retrieved. If not specified, all
     *                              objects will be retrieved.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return void
     */
    public function retrieve_objects_to_response(, $objectType, $adapterId = null, $queryCriteria = null, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_to_response");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($queryCriteria != null)
            $request->set('queryCriteria', $queryCriteria);

        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_to_stream()
     *
     * This function retrieves adaptive objects from an adapter, specified by
     * adapterId, which match the type specified by objectType.
     * 
     * Each object is written to the 'streamId' stream as it's retrieved.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param integer $streamNumber Stream number objects will be written to
     *                              as they are retrieved.
     * @param string $adapterId Id of adapter containing objects to retrieve.
     * @param string $objectType Id of adaptive object type of objects to
     *                           retrieve.
     * @param object $queryCriteria This is the query criteria for objects to
     *                              be retrieved. If not specified, all
     *                              objects will be retrieved.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return void
     */
    public function retrieve_objects_to_stream(, $streamNumber, $objectType, $adapterId = null, $queryCriteria = null, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_to_stream");

        /* pass along required parameters to the request payload */
        $request->set("streamNumber", $streamNumber);
        $request->set("objectType", $objectType);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($queryCriteria != null)
            $request->set('queryCriteria', $queryCriteria);

        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_with_uri()
     *
     * Retrieve adaptive objects with a given URI.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param anyURI $uri URI of objects to retrieve. If a URI begins with a
     *                    single slash ('/'), it is the local object path. A
     *                    query string can be specified.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return array This is the array of objects retrieved.
     */
    public function retrieve_objects_with_uri(, $uri, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_with_uri_to_callback()
     *
     * Retrieve adaptive objects with a given URI.
     * 
     * Each object is passed to the callback as it's retrieved.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param function $objectCallback If this is specified, this function is
     *                                 called once for each object retrieved
     *                                 instead of adding the object to the
     *                                 return array. Parameter object will be
     *                                 an object retrieved or undefined if
     *                                 there are no more objects. This
     *                                 function should return true if it wants
     *                                 to abort the retrieve request.
     * @param any $userData This is the value passed to the objectCallback
     *                      function in the userData parameter.
     * @param anyURI $uri URI of objects to retrieve. If a URI begins with a
     *                    single slash ('/'), it is the local object path. A
     *                    query string can be specified.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return void
     */
    public function retrieve_objects_with_uri_to_callback(, $objectCallback, $userData, $uri, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_with_uri_to_callback");

        /* pass along required parameters to the request payload */
        $request->set("objectCallback", $objectCallback);
        $request->set("userData", $userData);
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_with_uri_to_response()
     *
     * This function retrieves adaptive objects with a given URI.
     * 
     * This function is only allowed when called during a request with content
     * type 'application/x-afw'. An '_AdaptiveResponse_' object is written to
     * the request's response as each object is retrieved. This
     * '_AdaptiveResponse_' object has a 'result' property containing the
     * retrieved object and a 'partial' property set to true.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param anyURI $uri URI of objects to retrieve. If a URI begins with a
     *                    single slash ('/'), it is the local object path. A
     *                    query string can be specified.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return void
     */
    public function retrieve_objects_with_uri_to_response(, $uri, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_with_uri_to_response");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * retrieve_objects_with_uri_to_stream()
     *
     * This function retrieves adaptive objects with a given URI.
     * 
     * Each object is written to the 'streamId' stream as it's retrieved.
     * 
     * The optional queryCriteria is used to filter the adaptive objects
     * returned. Use the objectOptions parameter to influence how the objects
     * are viewed.
     * 
     * Options, specific to the adapterId, can be optionally supplied.
     *
     * @param integer $streamNumber Stream number objects will be written to
     *                              as they are retrieved.
     * @param anyURI $uri URI of objects to retrieve. If a URI begins with a
     *                    single slash ('/'), it is the local object path. A
     *                    query string can be specified.
     * @param object $options Object view options. See
     *                        /afw/_AdaptiveObjectType_/_AdaptiveObjectOptions_
     *                        for more information.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_retrieve_objects
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return void
     */
    public function retrieve_objects_with_uri_to_stream(, $streamNumber, $uri, $options = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "retrieve_objects_with_uri_to_stream");

        /* pass along required parameters to the request payload */
        $request->set("streamNumber", $streamNumber);
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($options != null)
            $request->set('options', $options);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * update_object()
     *
     * Update an adaptive object.
     *
     * @param string $adapterId Id of adapter containing object to update.
     * @param string $objectType Id of adaptive object type of object to
     *                           update.
     * @param string $objectId Id of object to update.
     * @param object $object Object containing properties to replace in
     *                       existing object. You can use object_modify
     *                       instead to update properties of embedded objects
     *                       and arrays, as well as to modify individual
     *                       values of the object.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function update_object(, $objectType, $objectId, $object, $adapterId = null, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "update_object");

        /* pass along required parameters to the request payload */
        $request->set("objectType", $objectType);
        $request->set("objectId", $objectId);
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

    /**
     * update_object_with_uri()
     *
     * Update an adaptive object with a given URI.
     *
     * @param anyURI $uri URI of object to update. If a URI begins with a
     *                    single slash ('/'), it is the local object path.
     * @param object $object Object containing properties to replace in
     *                       existing object. You can use object_modify
     *                       instead to update properties of embedded objects
     *                       and arrays, as well as to modify individual
     *                       values of the object.
     * @param object $journal The properties of this object will be added to
     *                        the associated journal entry. Refer to
     *                        /afw/_AdaptiveObjectType_/_AdaptiveJournalEntry_
     *                        for property names to avoid and for ones that
     *                        have specific semantics.
     * @param object $adapterTypeSpecific This is an optional object parameter
     *                                    with an objectType determined by the
     *                                    adapterType associated with the
     *                                    adapterId parameter. If the
     *                                    adapterType supports this parameter,
     *                                    adapter afw will have an adaptive
     *                                    object type with an id of:
     * 
     *                                    
     *                                    _AdaptiveAdapterTypeSpecific_${adapterType}_modify_object
     * 
     *                                    Where ${adapterType} is the adapter
     *                                    type id.
     *
     * @return object Resulting journal entry.
     */
    public function update_object_with_uri(, $uri, $object, $journal = null, $adapterTypeSpecific = null)
    {
        $request = $this->$session->request();

        $request->set("function", "update_object_with_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);
        $request->set("object", $object);

        /* pass along any optional parameters to the request payload */
        if ($journal != null)
            $request->set('journal', $journal);

        if ($adapterTypeSpecific != null)
            $request->set('adapterTypeSpecific', $adapterTypeSpecific);

        return $request->get_result();
    }

}

?>
