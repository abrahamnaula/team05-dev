export declare type PrimitiveCatalogComponentPropertyType = 'boolean' | 'string' | 'number';
export declare type PrimitiveCatalogComponentProperty = {
    type: PrimitiveCatalogComponentPropertyType;
    priority?: boolean;
};
export declare type PrimitiveCatalogComponentProperties = Record<string, PrimitiveCatalogComponentProperty>;
export declare type PrimitiveCatalogComponent = {
    properties: PrimitiveCatalogComponentProperties;
};
export declare type PrimitiveCatalogType = Record<string, PrimitiveCatalogComponent>;
