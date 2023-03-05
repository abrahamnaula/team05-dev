/// <reference types="react" />
interface Components {
    Footer?: () => JSX.Element;
    FormFields?: () => JSX.Element;
    Header?: () => JSX.Element;
}
export interface DefaultComponents extends Omit<Components, 'FormFields'> {
    ConfirmSignIn?: Omit<Components, 'FormFields'>;
    ConfirmSignUp?: Omit<Components, 'FormFields'>;
    ConfirmResetPassword?: Omit<Components, 'FormFields'>;
    ConfirmVerifyUser?: Omit<Components, 'FormFields'>;
    ForceNewPassword?: Pick<Components, 'FormFields'>;
    ResetPassword?: Omit<Components, 'FormFields'>;
    SetupTOTP?: Omit<Components, 'FormFields'>;
    SignIn?: Omit<Components, 'FormFields'>;
    SignUp?: Components;
    VerifyUser?: Omit<Components, 'FormFields'>;
}
export declare const defaultComponents: DefaultComponents;
export {};
