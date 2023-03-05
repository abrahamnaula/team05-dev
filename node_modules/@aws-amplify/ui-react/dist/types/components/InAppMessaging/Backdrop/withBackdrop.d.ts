/// <reference types="react" />
import { BackdropProps } from './types';
export declare function withBackdrop<Props>(Content: (props: Props) => JSX.Element, options?: BackdropProps): (props: Props) => JSX.Element;
