import PropTypes from "prop-types";

/**
 * PropTypes generated by _AdaptiveLayoutComponentType_ToggleButtons
 */
export const propTypes = {
    /**
     * exclusive
     * Data Type: (boolean)
     * 
     * Specifies whether the choices are mutually exclusive.
     */
    exclusive:                          PropTypes.bool,
    /**
     * label
     * Data Type: (string)
     * 
     * The label for the ToggleButtons component.
     */
    label:                              PropTypes.string,
    /**
     * options
     * Data Type: (array, object)
     * 
     * The available options for the ToggleButtons component.
     */
    options:                            PropTypes.array.isRequired,
    /**
     * required
     * Data Type: (boolean)
     * 
     * Specifies whether this ToggleButtons component is required.
     */
    required:                           PropTypes.bool,
};

export const defaultProps = {
    exclusive:                          true,
};

export default propTypes;
