<?php

// See the 'COPYING' file in the project root for licensing information.
/*
 * PHP Bindings for journal
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/**
 * @file journal.php
 * @ingroup afw_bindings_php
 * @brief Class definition for function category journal
 */
class journal
{
    private $session;

    /**
     * Constructs the journal class, using a session.
     */
    public function __construct($session = null)
    {
        $this->session = $session;
    }

    /**
     * journal_advance_cursor_for_consumer()
     *
     * Update the advance cursor for a consumer referenced by the consumerId
     * parameter. The limit parameter specifies the maximum number of entries
     * to scan for an applicable entry for consumer before returning. NULL is
     * always returned.
     * 
     * There are no response properties set by this function.
     * 
     * The properties of the _AdaptiveProvisioningPeer_ object associated with
     * the consumer_id are used in the following way:
     * 
     * The consumerFilter expression is used to determine if an entry is
     * applicable.
     * 
     * Journal entries are scanned beginning at the entry at the cursor in the
     * advanceCursor property. If the advanceCursor property is not present,
     * the scan begins after the cursor in currentCursor. If neither are
     * present, the scan begins at the start of the journal.
     * 
     * If an new applicable entry is found or if the limit is met, the
     * advanceCursor property is set to the currently scanned entry's cursor.
     *
     * @param string $adapterId Id of adapter.
     * @param string $consumerId The consumerId property value of the
     *                           associated _AdaptiveProvisioningPeer_ object.
     * @param integer $limit The maximum number of entries that will be
     *                       scanned for an entry where the consumerFilter
     *                       expression in the associated
     *                       _AdaptiveProvisioningPeer_ object evaluates to
     *                       true.
     *
     * @return object Response object.
     */
    public function journal_advance_cursor_for_consumer(, $consumerId, $adapterId = null, $limit = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_advance_cursor_for_consumer");

        /* pass along required parameters to the request payload */
        $request->set("consumerId", $consumerId);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($limit != null)
            $request->set('limit', $limit);

        return $request->get_result();
    }

    /**
     * journal_get_by_cursor()
     *
     * Get journal entry specified by entry_cursor parameter.
     * 
     * This option will set response properties 'entry' and 'cursor' if there
     * is an entry to retrieve. If an entry with the supplied cursor does not
     * exist, a not_found error is thrown.
     *
     * @param string $adapterId Id of adapter.
     * @param string $cursor Journal entry cursor.
     *
     * @return object Response object.
     */
    public function journal_get_by_cursor(, $cursor, $adapterId = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_get_by_cursor");

        /* pass along required parameters to the request payload */
        $request->set("cursor", $cursor);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        return $request->get_result();
    }

    /**
     * journal_get_first()
     *
     * Get first journal entry.
     * 
     * This option will set response properties 'entry' and 'cursor' if there
     * is a first entry to return.
     *
     * @param string $adapterId Id of adapter.
     *
     * @return object Response object.
     */
    public function journal_get_first(, $adapterId = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_get_first");

        /* pass along required parameters to the request payload */

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        return $request->get_result();
    }

    /**
     * journal_get_next_after_cursor()
     *
     * Get the next journal entry after the one specified by the entry_cursor
     * parameter.
     * 
     * This option will set response properties 'entry' and 'cursor' if there
     * is a next entry to retrieve.
     *
     * @param string $adapterId Id of adapter.
     * @param string $cursor Journal entry cursor.
     *
     * @return object Response object.
     */
    public function journal_get_next_after_cursor(, $cursor, $adapterId = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_get_next_after_cursor");

        /* pass along required parameters to the request payload */
        $request->set("cursor", $cursor);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        return $request->get_result();
    }

    /**
     * journal_get_next_for_consumer()
     *
     * Get the next journal entry for a consumer referenced by the consumer_id
     * parameter. The entry_cursor parameter is ignored. The limit parameter
     * specifies the maximum number of entries to scan for an applicable entry
     * for consumer before returning.
     * 
     *  This option will set response properties 'entry' and 'entryCursor' if
     * an applicable entry is retrieved. Property 'reissue' will be set as
     * described below.
     * 
     * The properties of the _AdaptiveProvisioningPeer_ object associated with
     * the consumer_id are used in the following way:
     * 
     * The consumerFilter expression is used to determine if an entry is
     * applicable.
     * 
     * If consumeCursor property exists, return that entry at that cursor
     * again immediately with a 'reissue' property added and set to true.
     * 
     * Journal entries are scanned beginning at the entry at the cursor in the
     * advanceCursor property. If the advanceCursor property is not present,
     * the scan begins after the cursor in currentCursor. If neither are
     * present, the scan begins at the start of the journal.
     * 
     * If an applicable entry is found, properties consumeStart and
     * consumeCursor are set, advanceCursor is removed, and the entry is
     * returned. Method mark_entry_consumed() will remove these properties.
     * 
     * If no applicable entry is found, advanceCursor is set to the last entry
     * scanned.
     *
     * @param string $adapterId Id of adapter.
     * @param string $consumerId The consumerId property value of the
     *                           associated _AdaptiveProvisioningPeer_ object.
     * @param integer $limit The maximum number of entries that will be
     *                       scanned for an entry where the consumerFilter
     *                       expression in the associated
     *                       _AdaptiveProvisioningPeer_ object evaluates to
     *                       true.
     *
     * @return object Response object.
     */
    public function journal_get_next_for_consumer(, $consumerId, $adapterId = null, $limit = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_get_next_for_consumer");

        /* pass along required parameters to the request payload */
        $request->set("consumerId", $consumerId);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($limit != null)
            $request->set('limit', $limit);

        return $request->get_result();
    }

    /**
     * journal_get_next_for_consumer_after_cursor()
     *
     * Get the next journal entry for a consumer referenced by the consumer_id
     * after the one specified by the entry_cursor parameter. The limit
     * parameter specifies the maximum number of entries to scan for an
     * applicable entry for consumer before returning.
     * 
     * This option will set response properties 'entry' and 'cursor' if an
     * applicable entry is retrieved.
     * 
     * The properties of the _AdaptiveProvisioningPeer_ object associated with
     * the consumer_id are used in the following way:
     * 
     * The consumerFilter expression is used to determine if an entry is
     * applicable.
     * 
     * Unlike option get_next_for_consumer, no other properties are referenced
     * or modified.
     *
     * @param string $adapterId Id of adapter.
     * @param string $consumerId The consumerId property value of the
     *                           associated _AdaptiveProvisioningPeer_ object.
     * @param string $cursor Journal entry cursor.
     * @param integer $limit The maximum number of entries that will be
     *                       scanned for an entry where the consumerFilter
     *                       expression in the associated
     *                       _AdaptiveProvisioningPeer_ object evaluates to
     *                       true.
     *
     * @return object Response object.
     */
    public function journal_get_next_for_consumer_after_cursor(, $consumerId, $cursor, $adapterId = null, $limit = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_get_next_for_consumer_after_cursor");

        /* pass along required parameters to the request payload */
        $request->set("consumerId", $consumerId);
        $request->set("cursor", $cursor);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        if ($limit != null)
            $request->set('limit', $limit);

        return $request->get_result();
    }

    /**
     * journal_mark_consumed()
     *
     * Mark a journal entry returned by get_next_for_consumer() as consumed.
     *
     * @param string $adapterId Id of adapter.
     * @param string $consumerId The consumerId property value of the
     *                           associated _AdaptiveProvisioningPeer_ object.
     * @param string $cursor Journal entry cursor.
     *
     * @return void
     */
    public function journal_mark_consumed(, $consumerId, $cursor, $adapterId = null)
    {
        $request = $this->$session->request();

        $request->set("function", "journal_mark_consumed");

        /* pass along required parameters to the request payload */
        $request->set("consumerId", $consumerId);
        $request->set("cursor", $cursor);

        /* pass along any optional parameters to the request payload */
        if ($adapterId != null)
            $request->set('adapterId', $adapterId);

        return $request->get_result();
    }

}

?>
