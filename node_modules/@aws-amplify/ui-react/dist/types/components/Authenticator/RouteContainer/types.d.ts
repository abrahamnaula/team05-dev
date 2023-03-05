/// <reference types="react" />
export declare type RouteProps = {
    className: string;
    variation: 'default' | 'modal';
};
export declare type RouteContainerProps = {
    children: React.ReactNode;
} & RouteProps;
