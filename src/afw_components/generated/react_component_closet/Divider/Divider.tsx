// See the 'COPYING' file in the project root for licensing information.
/*
 * React Component definition for Divider
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

import React from "react";
import {propTypes, defaultProps} from "./Divider.propTypes";
import {IDividerProps} from "./Divider.types";
import fallback from "./Divider.fallback";

import {AdaptiveComponent} from "@afw/react";
import {ctx} from "@afw/react";


/**
 * Implementation Id : Divider
 * Category          : content
 * 
 * A component that displays a Divider line to separate content.
 * 
 * A very simple way to divide content from the remaining content with the
 * user of an dividing line.
 * 
 */
export const Divider : React.FunctionComponent<IDividerProps> = (props) => {

    return (
        <AdaptiveComponent 
            {...props} 
            data-component-type={ctx(props, "Divider")}
            fallback={fallback}
            layoutComponent={{
                componentType: "Divider",
                parameters: props
            }}
        />
    );
};


Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider.displayName = "Divider";

export default React.memo(Divider);
