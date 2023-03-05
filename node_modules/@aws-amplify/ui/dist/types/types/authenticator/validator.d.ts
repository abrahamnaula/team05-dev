import { PasswordSettings } from '.';
import { AuthFormData } from './form';
/**
 * Maps each input to its validation error, if any
 */
export declare type ValidationError = Record<string, string | string[]>;
/**
 * Return type of validator. This is `null` if there are no error, and `ValidationError` otherwise.
 */
export declare type ValidatorResult = void | null | ValidationError;
export declare type SignInResult = string;
/**
 * Validates the given formData. This can be synchronous or asynchronous.
 */
export declare type Validator = (formData: AuthFormData, touchData?: AuthFormData, passwordSettings?: PasswordSettings) => ValidatorResult | Promise<ValidatorResult>;
