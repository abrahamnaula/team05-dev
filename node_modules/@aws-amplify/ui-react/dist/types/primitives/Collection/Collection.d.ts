/// <reference types="react" />
import { CollectionProps } from '../types';
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/collection)
 */
export declare const Collection: {
    <Item>({ className, isSearchable, isPaginated, items, itemsPerPage, searchFilter, searchLabel, searchNoResultsFound, searchPlaceholder, type, testId, ...rest }: CollectionProps<Item>): JSX.Element;
    displayName: string;
};
