import { Sizes } from './base';
import { ViewProps } from './view';
export declare type DividerOrientations = 'horizontal' | 'vertical';
export declare type DividerSizes = Sizes;
export interface DividerOptions {
    /**
     * @description
     * Controls whether the divider is oriented horizontally or vertically.
     * @default
     * "horizontal"
     */
    orientation?: DividerOrientations;
    /**
     * @description
     * Size of the divider (height for a horizontal divider, width for vertical)
     * @default
     * "small"
     */
    size?: DividerSizes;
    /**
     * @description
     * Adds text to the divider, usually something like "or" to separate 2 things.
     */
    label?: string;
}
export interface DividerProps extends ViewProps, DividerOptions {
}
