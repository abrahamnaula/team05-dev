import { XRProvider, XROptions, SceneOptions } from './types';
/**
 * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
 * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
 * and as a result, will no longer be available.
 */
export declare class XRClass {
    private _options;
    private _pluggables;
    private _defaultProvider;
    /**
     * Initialize XR with AWS configurations
     *
     * @param {XROptions} options - Configuration object for XR
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    constructor(options: XROptions);
    /**
     * Configure XR part with configurations
     *
     * @param {XROptions} config - Configuration for XR
     * @return {Object} - The current configuration
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    configure(options: XROptions): XROptions;
    /**
     * add plugin into XR category
     * @param {Object} pluggable - an instance of the plugin
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    addPluggable(pluggable: XRProvider): Promise<object>;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    loadScene(sceneName: string, domElementId: string, sceneOptions?: SceneOptions, provider?: string): Promise<any>;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isSceneLoaded(sceneName: string, provider?: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    getSceneController(sceneName: string, provider?: string): any;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isVRCapable(sceneName: string, provider?: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isVRPresentationActive(sceneName: string, provider?: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    start(sceneName: string, provider?: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    enterVR(sceneName: string, provider?: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    exitVR(sceneName: string, provider?: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    isMuted(sceneName: string, provider?: string): boolean;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    setMuted(sceneName: string, muted: boolean, provider?: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    onSceneEvent(sceneName: string, eventName: string, eventHandler: Function, provider?: string): void;
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    enableAudio(sceneName: string, provider?: string): void;
}
export declare const XR: XRClass;
