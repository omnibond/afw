// See the 'COPYING' file in the project root for licensing information.
/*
 * React Component definition for Chart
 *
 * Copyright (c) 2010-2024 Clemson University
 *
 */

import {memo} from "react";
import {propTypes, defaultProps} from "./Chart.propTypes";
import fallback from "./Chart.fallback";

import {AdaptiveComponent} from "@afw/react";
import {ctx} from "@afw/react";


/**
 * Implementation Id : Chart
 * Category          : structured
 * 
 * Component to display data in a Chart.
 * 
 * This component can display a variety of simple or complex chart data in
 * forms such as Pie, Line or Bar to offer a visual representation of the
 * provided data.
 * 
 */
export const Chart = (props) => {

    return (
        <AdaptiveComponent 
            {...props} 
            data-component-type={ctx(props, "Chart")}
            fallback={fallback}
            layoutComponent={{
                componentType: "Chart",
                parameters: props
            }}
        />
    );
};


Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;
Chart.displayName = "Chart";

export default memo(Chart);
