// See the 'COPYING' file in the project root for licensing information.
/*
 * React Component definition for EditableLabel
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

import {memo} from "react";
import {propTypes, defaultProps} from "./EditableLabel.propTypes";
import fallback from "./EditableLabel.fallback";

import {AdaptiveComponent} from "@afw/react";
import {ctx} from "@afw/react";


/**
 * Implementation Id : EditableLabel
 * Category          : editors
 * 
 * A component that renders an label, which can be edited when clicked.
 * 
 * This component provides a very quick way for a label to become 'editable'
 * simply by clicking on the text label. After clicking on the label, the
 * component changes from a static label to an editable TextField component.
 * 
 */
export const EditableLabel = (props) => {

    return (
        <AdaptiveComponent 
            {...props} 
            data-component-type={ctx(props, "EditableLabel")}
            fallback={fallback}
            layoutComponent={{
                componentType: "EditableLabel",
                parameters: props
            }}
        />
    );
};


EditableLabel.propTypes = propTypes;
EditableLabel.defaultProps = defaultProps;
EditableLabel.displayName = "EditableLabel";

export default memo(EditableLabel);
