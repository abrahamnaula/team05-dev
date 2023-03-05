import { AbstractXRProvider } from './XRProvider';
import { ProviderOptions, SceneOptions } from '../types';
declare type SumerianSceneOptions = SceneOptions & {
    progressCallback: Function;
};
/**
 * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
 * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
 * and as a result, will no longer be available.
 */
export declare class SumerianProvider extends AbstractXRProvider {
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    constructor(options?: ProviderOptions);
    getProviderName(): string;
    private loadScript;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    loadScene(sceneName: string, domElementId: string, sceneOptions: SumerianSceneOptions): Promise<void>;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isSceneLoaded(sceneName: string): any;
    private getScene;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    getSceneController(sceneName: string): any;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isVRCapable(sceneName: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isVRPresentationActive(sceneName: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    start(sceneName: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    enterVR(sceneName: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    exitVR(sceneName: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isMuted(sceneName: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    setMuted(sceneName: string, muted: boolean): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    onSceneEvent(sceneName: string, eventName: string, eventHandler: Function): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    enableAudio(sceneName: string): void;
}
export {};
