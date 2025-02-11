// See the 'COPYING' file in the project root for licensing information.
/*
 * React Component definition for Autocomplete
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

import {useState} from "react";
import PropTypes from "prop-types";

import MuiAutocomplete from "@mui/material/Autocomplete";
import MuiTextField from "@mui/material/TextField";

/**
 * Implementation Id : Autocomplete
 * Category          : inputs
 * 
 * Component to display a list of options that may be selected or can be
 * autocompleted by typing.
 * 
 * This component provides a dropdown picker with possible values to quickly
 * select from.  By typing, it will narrow down the selection to make the
 * list even shorter to choose a selection from.  Additionally, it will offer
 * the user the ability to enter a new value, if allowed.
 * 
 */
export const Autocomplete = (props) => {

    const [input, setInput] = useState();
    const { 
        id, "data-testid": dataTestId, 
        "data-component-type": dataComponentType, 
        "aria-label": ariaLabel,
        options, label, isLoading, value, description, 
        disabled, error, noOptionsText, onChanged, onCreateOption, placeholder
    } = props;

    const getOptionLabel = (option) => {
        if (typeof(option) === "string")
            return option;

        return option.text;
    };

    return (        
        <MuiAutocomplete 
            id={id}            
            data-testid={dataTestId}
            data-component-type={dataComponentType}                         
            autoComplete
            autoHighlight
            options={options}
            noOptionsText={noOptionsText}
            disabled={disabled}
            getOptionLabel={getOptionLabel}
            renderInput={params => 
                <MuiTextField 
                    {...params}
                    aria-label={ariaLabel}
                    label={label}
                    disabled={disabled}
                    placeholder={placeholder}
                    helperText={description}
                    error={Boolean(error)}
                    fullWidth
                    margin="normal"
                    variant="standard"    
                    onChange={ event => {
                        setInput(event.target.value);
                        event.preventDefault();
                        event.stopPropagation();
                    }}
                />
            }
            onBlur={() => {
                if (input) {
                    /* see if it's already one of our options */
                    for (let opt of options)
                        if (opt.text === input) {
                            onChanged(opt);
                            return;
                        }

                    /* must be a new one entered, not in the list */
                    if (onCreateOption)
                        onCreateOption(input);
                }
            }}
            loading={isLoading}
            onChange={(event, value) => {
                setInput();
                if (typeof(value) === "string") {
                    /* find the option */
                    for (const opt of options) {
                        if (opt.text === value)
                            onChanged(opt);
                    }
                } else
                    onChanged(value);
            }}
            value={value ? value : null}            
        />
    );
};


/* Generated objectType propType definition for property text */
const Autocomplete_Options = {
    /**
     * Property: key
     * Data Type: (string)
     * 
     * The unique key assigned to the selected Autocomplete option.
     */
    key:                                PropTypes.string,
    /**
     * Property: text
     * Data Type: (string)
     * 
     * Text to display in the Autocomplete List
     */
    text:                               PropTypes.string,
};

/**
 * PropTypes generated by _AdaptiveLayoutComponentType_Autocomplete
 */
Autocomplete.propTypes = {
    /**
     * allowWrite
     * Data Type: (boolean)
     * 
     * Specifies whether the Autocomplete component can be changed.
     */
    allowWrite:                         PropTypes.bool,
    /**
     * disabled
     * Data Type: (boolean)
     * 
     * Specifies whether the Autocomplete component is disabled.
     */
    disabled:                           PropTypes.bool,
    /**
     * isLoading
     * Data Type: (boolean)
     * 
     * Specifies whether the Autocomplete component is currently loading.
     */
    isLoading:                          PropTypes.bool,
    /**
     * label
     * Data Type: (string)
     * 
     * The label for the Autocomplete component.
     */
    label:                              PropTypes.string,
    /**
     * options
     * Data Type: (list, object _AdaptiveLayoutComponentType_Autocomplete_Options)
     * 
     * The available options for the Autocomplete component.
     */
    options:                            PropTypes.arrayOf(PropTypes.shape(Autocomplete_Options)),
    /**
     * placeholder
     * Data Type: (string)
     * 
     * Specifies the placeholder text displayed when no value is present.
     */
    placeholder:                        PropTypes.string,
    /**
     * required
     * Data Type: (boolean)
     * 
     * Specifies whether this Autocomplete component is required.
     */
    required:                           PropTypes.bool,
    /**
     * value
     * Data Type: (object, _AdaptiveLayoutComponentType_Autocomplete_Options)
     * 
     * The option value for the Autocomplete component.
     */
    value:                              PropTypes.shape(Autocomplete_Options),
};

Autocomplete.defaultProps = {
    isLoading:          false,
    disabled:           false,
};

export default Autocomplete;
