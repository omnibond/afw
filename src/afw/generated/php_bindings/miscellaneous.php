<?php

// See the 'COPYING' file in the project root for licensing information.
/*
 * PHP Bindings for miscellaneous
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

/**
 * @file miscellaneous.php
 * @ingroup afw_bindings_php
 * @brief Class definition for function category miscellaneous
 */
class miscellaneous
{
    private $session;

    /**
     * Constructs the miscellaneous class, using a session.
     */
    public function __construct($session = null)
    {
        $this->session = $session;
    }

    /**
     * compare_uri()
     *
     * Compare two URIs.
     *
     * @param string $uri1 First URI for compare. This URI can not contain an
     *                     asterisk ('*')
     * @param string $uri2 Second URI for compare. This URI can contain
     *                     asterisk ('*') for substitution if isValuePath is
     *                     true and currentPath2 is specified.
     * @param boolean $isValuePath The URIs are adaptive value paths. If one
     *                             of the URIs begins with a single slash '/',
     *                             both must, and each URI will be parsed as
     *                             an adaptive value path (example:
     *                             /adapterId/objectType/objectId.propertyNames).
     * @param string $currentPath If isValuePath is true, this is the current
     *                            path that is used to resolve a relative path
     *                            in the URIs. If isValuePath is not true,
     *                            this parameter is ignored.
     *
     * @return boolean Result of comparison.
     */
    public function compare_uri(, $uri1, $uri2, $isValuePath = null, $currentPath = null)
    {
        $request = $this->$session->request();

        $request->set("function", "compare_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri1", $uri1);
        $request->set("uri2", $uri2);

        /* pass along any optional parameters to the request payload */
        if ($isValuePath != null)
            $request->set('isValuePath', $isValuePath);

        if ($currentPath != null)
            $request->set('currentPath', $currentPath);

        return $request->get_result();
    }

    /**
     * debug()
     *
     * Conditionally, based on the detail parameter, write a value as a string
     * to the debug file descriptor (usually stderr).
     *
     * @param  $value This is the value that will be converted to its string
     *                representation and written. An undefined value is
     *                represented by 'undefined'.
     * @param boolean $detail If true, the string will only written if the
     *                        debug:function_active:detail flag is on. If
     *                        false or not specified, the string will only
     *                        written if the debug:function_active flag is on.
     *
     * @return void
     */
    public function debug(, $value, $detail = null)
    {
        $request = $this->$session->request();

        $request->set("function", "debug");

        /* pass along required parameters to the request payload */
        $request->set("value", $value);

        /* pass along any optional parameters to the request payload */
        if ($detail != null)
            $request->set('detail', $detail);

        return $request->get_result();
    }

    /**
     * execution_start_time_local()
     *
     * Return local dateTime when the execution context was created. This will
     * usually be the start of request time.
     *
     *
     * @return dateTime
     */
    public function execution_start_time_local()
    {
        $request = $this->$session->request();

        $request->set("function", "execution_start_time_local");

        /* pass along required parameters to the request payload */

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * execution_start_time_utc()
     *
     * Return UTC dateTime when the execution context was created. This will
     * usually be the start of request time.
     *
     *
     * @return dateTime
     */
    public function execution_start_time_utc()
    {
        $request = $this->$session->request();

        $request->set("function", "execution_start_time_utc");

        /* pass along required parameters to the request payload */

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * generate_uuid()
     *
     * Generate a UUID.
     *
     *
     * @return string
     */
    public function generate_uuid()
    {
        $request = $this->$session->request();

        $request->set("function", "generate_uuid");

        /* pass along required parameters to the request payload */

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * is_defined()
     *
     * Test value returning boolean True if it is not undefined.
     *
     * @param  $value Value to check
     *
     * @return boolean True if value is not undefined.
     */
    public function is_defined(, $value)
    {
        $request = $this->$session->request();

        $request->set("function", "is_defined");

        /* pass along required parameters to the request payload */
        $request->set("value", $value);

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * is_nullish()
     *
     * Test value returning boolean True if it is null or undefined.
     *
     * @param  $value Value to check
     *
     * @return boolean True if value is null or undefined.
     */
    public function is_nullish(, $value)
    {
        $request = $this->$session->request();

        $request->set("function", "is_nullish");

        /* pass along required parameters to the request payload */
        $request->set("value", $value);

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * log()
     *
     * Evaluate and convert value to String and log it.
     *
     * @param  $value Value to log.
     *
     * @return void
     */
    public function log(, $value)
    {
        $request = $this->$session->request();

        $request->set("function", "log");

        /* pass along required parameters to the request payload */
        $request->set("value", $value);

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * now_local()
     *
     * Return current local dateTime.
     *
     *
     * @return dateTime
     */
    public function now_local()
    {
        $request = $this->$session->request();

        $request->set("function", "now_local");

        /* pass along required parameters to the request payload */

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * now_utc()
     *
     * Return current UTC dateTime.
     *
     *
     * @return dateTime
     */
    public function now_utc()
    {
        $request = $this->$session->request();

        $request->set("function", "now_utc");

        /* pass along required parameters to the request payload */

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * parse_uri()
     *
     * Parse a URI.
     *
     * @param string $uri URI to parse
     * @param boolean $isValuePath The URI is an adaptive value path. If the
     *                             path begins with a single slash '/', the
     *                             URI will be parsed as an adaptive value
     *                             path (example:
     *                             /adapterId/objectType/objectId.propertyNames)
     * @param string $currentPath If isValuePath is true, this is the current
     *                            path that is used to resolve relative paths.
     *                            If isValuePath is not true, this parameter
     *                            is ignored.
     *
     * @return object Object with results of parse.
     */
    public function parse_uri(, $uri, $isValuePath = null, $currentPath = null)
    {
        $request = $this->$session->request();

        $request->set("function", "parse_uri");

        /* pass along required parameters to the request payload */
        $request->set("uri", $uri);

        /* pass along any optional parameters to the request payload */
        if ($isValuePath != null)
            $request->set('isValuePath', $isValuePath);

        if ($currentPath != null)
            $request->set('currentPath', $currentPath);

        return $request->get_result();
    }

    /**
     * perform()
     *
     * Perform actions right away.
     *
     * @param object $request See /afw/_AdaptiveObjectType_/_AdaptiveActions_
     *                        for more information.
     *
     * @return object Response object.
     */
    public function perform(, $request)
    {
        $request = $this->$session->request();

        $request->set("function", "perform");

        /* pass along required parameters to the request payload */
        $request->set("request", $request);

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * trace()
     *
     * Write a value to a trace log.
     *
     * @param  $value This is the value that will be converted to its string
     *                representation and written the trace log. An undefined
     *                value is represented by 'undefined'.
     * @param boolean $filter If this optional filter is false, nothing will
     *                        be written to the trace log. The default is
     *                        true.
     * @param integer $number This is an optional number between 1 and 8 that
     *                        is appended to 'trace' to identify the trace
     *                        log. The default is 1.
     *
     * @return void
     */
    public function trace(, $value, $filter = null, $number = null)
    {
        $request = $this->$session->request();

        $request->set("function", "trace");

        /* pass along required parameters to the request payload */
        $request->set("value", $value);

        /* pass along any optional parameters to the request payload */
        if ($filter != null)
            $request->set('filter', $filter);

        if ($number != null)
            $request->set('number', $number);

        return $request->get_result();
    }

    /**
     * variable_exists()
     *
     * Return the true if the named variable exists.
     *
     * @param string $name Name of variable to check. The name can optionally
     *                     be preceded with a qualifier followed by '::'.
     *
     * @return boolean True if variable exists.
     */
    public function variable_exists(, $name)
    {
        $request = $this->$session->request();

        $request->set("function", "variable_exists");

        /* pass along required parameters to the request payload */
        $request->set("name", $name);

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

    /**
     * variable_get()
     *
     * Return the value of a variable. If variable is not available, return a
     * default or null value.
     *
     * @param string $name Name of variable to get. The name can optionally be
     *                     preceded with a qualifier followed by '::'.
     * @param  $defaultValue The default value of variable if it does not
     *                       exist in object. If not specified, null value is
     *                       the default.
     *
     * @return  Evaluated variable value or default.
     */
    public function variable_get(, $name, $defaultValue = null)
    {
        $request = $this->$session->request();

        $request->set("function", "variable_get");

        /* pass along required parameters to the request payload */
        $request->set("name", $name);

        /* pass along any optional parameters to the request payload */
        if ($defaultValue != null)
            $request->set('defaultValue', $defaultValue);

        return $request->get_result();
    }

    /**
     * variable_is_not_null()
     *
     * Return the true if the named variable exists and is not null.
     *
     * @param string $name Name of variable to check. The name can optionally
     *                     be preceded with a qualifier followed by '::'.
     *
     * @return boolean True if variable exists and is not null.
     */
    public function variable_is_not_null(, $name)
    {
        $request = $this->$session->request();

        $request->set("function", "variable_is_not_null");

        /* pass along required parameters to the request payload */
        $request->set("name", $name);

        /* pass along any optional parameters to the request payload */
        return $request->get_result();
    }

}

?>
