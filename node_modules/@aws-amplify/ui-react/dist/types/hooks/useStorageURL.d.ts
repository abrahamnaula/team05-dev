import { S3ProviderGetConfig } from '@aws-amplify/storage';
export interface UseStorageURLResult {
    url?: string;
    error?: Error;
    isLoading: boolean;
}
/**
 * Computes a public URL for an Amplify Storage file
 * @internal
 */
export declare const useStorageURL: (key: string, options?: S3ProviderGetConfig) => UseStorageURLResult & {
    fetch: () => () => void;
};
