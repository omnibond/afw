// See the 'COPYING' file in the project root for licensing information.
/*
 * React Component definition for TimezonePicker
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

import React from "react";
import {propTypes, defaultProps} from "./TimezonePicker.propTypes";
import {ITimezonePickerProps} from "./TimezonePicker.types";
import fallback from "./TimezonePicker.fallback";

import {AdaptiveComponent} from "@afw/react";
import {ctx} from "@afw/react";


/**
 * Implementation Id : TimezonePicker
 * Category          : pickers
 * 
 * A component that allows a timezone to be chosen.
 * 
 * This component allows a timezone to be chosen, typically from a dropdown of
 * timezones, or from a world map.
 * 
 */
export const TimezonePicker : React.FunctionComponent<ITimezonePickerProps> = (props) => {

    return (
        <AdaptiveComponent 
            {...props} 
            data-component-type={ctx(props, "TimezonePicker")}
            fallback={fallback}
            layoutComponent={{
                componentType: "TimezonePicker",
                parameters: props
            }}
        />
    );
};


TimezonePicker.propTypes = propTypes;
TimezonePicker.defaultProps = defaultProps;
TimezonePicker.displayName = "TimezonePicker";

export default React.memo(TimezonePicker);
