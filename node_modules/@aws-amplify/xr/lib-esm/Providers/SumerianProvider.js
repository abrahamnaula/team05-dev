import { __assign, __awaiter, __extends, __generator, __values } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ConsoleLogger as Logger, Signer, Credentials, Constants, } from '@aws-amplify/core';
import { AbstractXRProvider } from './XRProvider';
import { XRNoSceneConfiguredError, XRSceneNotFoundError, XRSceneNotLoadedError, XRNoDomElement, XRSceneLoadFailure, } from '../Errors';
var SUMERIAN_SERVICE_NAME = 'sumerian';
var SUMERIAN_DEPRECATION_MESSAGE = 'The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function and as a result, will no longer be available.';
var logger = new Logger('SumerianProvider');
/**
 * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
 * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
 * and as a result, will no longer be available.
 */
var SumerianProvider = /** @class */ (function (_super) {
    __extends(SumerianProvider, _super);
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    function SumerianProvider(options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, options) || this;
    }
    SumerianProvider.prototype.getProviderName = function () {
        return 'SumerianProvider';
    };
    SumerianProvider.prototype.loadScript = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var scriptElement = document.createElement('script');
                        scriptElement.src = url;
                        scriptElement.addEventListener('load', function (event) {
                            resolve();
                        });
                        scriptElement.addEventListener('error', function (event) {
                            reject(new Error("Failed to load script: " + url));
                        });
                        document.head.appendChild(scriptElement);
                    })];
            });
        });
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.loadScene = function (sceneName, domElementId, sceneOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var errorMsg, errorMsg, element, errorMsg, scene, errorMsg, sceneUrl, sceneId, sceneRegion, errorMsg, awsSDKConfigOverride, fetchOptions, url, credentials, accessInfo, serviceInfo, request, e_1, apiResponse, e_2, apiResponseJson, sceneBundleData, sceneBundle, sceneBundleJson, error_1, progressCallback, publishParamOverrides, sceneLoadParams, sceneController, _a, _b, warning;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!sceneName) {
                            errorMsg = 'No scene name passed into loadScene';
                            logger.error(errorMsg);
                            throw new XRSceneLoadFailure(errorMsg);
                        }
                        if (!domElementId) {
                            errorMsg = 'No dom element id passed into loadScene';
                            logger.error(errorMsg);
                            throw new XRNoDomElement(errorMsg);
                        }
                        element = document.getElementById(domElementId);
                        if (!element) {
                            errorMsg = "DOM element id, " + domElementId + " not found";
                            logger.error(errorMsg);
                            throw new XRNoDomElement(errorMsg);
                        }
                        scene = this.getScene(sceneName);
                        if (!scene.sceneConfig) {
                            errorMsg = "No scene config configured for scene: " + sceneName;
                            logger.error(errorMsg);
                            throw new XRSceneLoadFailure(errorMsg);
                        }
                        sceneUrl = scene.sceneConfig.url;
                        sceneId = scene.sceneConfig.sceneId;
                        if (scene.sceneConfig.hasOwnProperty('region')) {
                            // Use the scene region on the Sumerian scene configuration
                            sceneRegion = scene.sceneConfig.region;
                        }
                        else if (this.options.hasOwnProperty('region')) {
                            // Use the scene region on the XR category configuration
                            sceneRegion = this.options.region;
                        }
                        else {
                            errorMsg = "No region configured for scene: " + sceneName;
                            logger.error(errorMsg);
                            throw new XRSceneLoadFailure(errorMsg);
                        }
                        awsSDKConfigOverride = {
                            region: sceneRegion,
                            // This is passed to the AWS clients created in
                            // Sumerian's AwsSystem
                            // This helps other services(like Lex and Polly) to track
                            // traffic coming from Sumerian scenes embedded with Amplify
                            customUserAgent: Constants.userAgent + "-SumerianScene",
                        };
                        fetchOptions = {
                            headers: {
                                // This sets the AWS user agent string
                                // So the Sumerian service knows this request is
                                // from Amplify
                                'X-Amz-User-Agent': Constants.userAgent,
                            },
                        };
                        url = sceneUrl;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Credentials.get()];
                    case 2:
                        credentials = _d.sent();
                        awsSDKConfigOverride['credentials'] = credentials;
                        accessInfo = {
                            secret_key: credentials.secretAccessKey,
                            access_key: credentials.accessKeyId,
                            session_token: credentials.sessionToken,
                        };
                        serviceInfo = {
                            region: sceneRegion,
                            service: SUMERIAN_SERVICE_NAME,
                        };
                        request = Signer.sign({ method: 'GET', url: sceneUrl }, accessInfo, serviceInfo);
                        fetchOptions.headers = __assign(__assign({}, fetchOptions.headers), request.headers);
                        url = request.url;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
                        logger.debug('No credentials available, the request will be unsigned');
                        return [3 /*break*/, 4];
                    case 4:
                        _d.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, fetch(url, fetchOptions)];
                    case 5:
                        apiResponse = _d.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _d.sent();
                        throw new XRSceneLoadFailure(SUMERIAN_DEPRECATION_MESSAGE);
                    case 7: return [4 /*yield*/, apiResponse.json()];
                    case 8:
                        apiResponseJson = _d.sent();
                        if (apiResponse.status === 404) {
                            throw new XRSceneLoadFailure(SUMERIAN_DEPRECATION_MESSAGE);
                        }
                        if (apiResponse.status === 403) {
                            if (apiResponseJson.message) {
                                logger.error("Failure to authenticate user: " + apiResponseJson.message);
                                throw new XRSceneLoadFailure("Failure to authenticate user: " + apiResponseJson.message);
                            }
                            else {
                                logger.error("Failure to authenticate user");
                                throw new XRSceneLoadFailure("Failure to authenticate user");
                            }
                        }
                        sceneBundleData = apiResponseJson.bundleData[sceneId];
                        return [4 /*yield*/, fetch(sceneBundleData.url, {
                                headers: sceneBundleData.headers,
                            })];
                    case 9:
                        sceneBundle = _d.sent();
                        return [4 /*yield*/, sceneBundle.json()];
                    case 10:
                        sceneBundleJson = _d.sent();
                        _d.label = 11;
                    case 11:
                        _d.trys.push([11, 13, , 14]);
                        // Load the Sumerian bootstrapper script into the DOM
                        return [4 /*yield*/, this.loadScript(sceneBundleJson[sceneId].bootstrapperUrl)];
                    case 12:
                        // Load the Sumerian bootstrapper script into the DOM
                        _d.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        error_1 = _d.sent();
                        logger.error(error_1);
                        throw new XRSceneLoadFailure(error_1);
                    case 14:
                        progressCallback = sceneOptions.progressCallback
                            ? sceneOptions.progressCallback
                            : undefined;
                        publishParamOverrides = scene.publishParamOverrides
                            ? scene.publishParamOverrides
                            : undefined;
                        sceneLoadParams = {
                            element: element,
                            sceneId: sceneId,
                            sceneBundle: sceneBundleJson,
                            apiResponse: apiResponseJson,
                            progressCallback: progressCallback,
                            publishParamOverrides: publishParamOverrides,
                            awsSDKConfigOverride: awsSDKConfigOverride,
                        };
                        return [4 /*yield*/, window.SumerianBootstrapper.loadScene(sceneLoadParams)];
                    case 15:
                        sceneController = _d.sent();
                        scene.sceneController = sceneController;
                        scene.isLoaded = true;
                        try {
                            // Log scene warnings
                            for (_a = __values(sceneController.sceneLoadWarnings), _b = _a.next(); !_b.done; _b = _a.next()) {
                                warning = _b.value;
                                logger.warn("loadScene warning: " + warning);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.isSceneLoaded = function (sceneName) {
        var scene = this.getScene(sceneName);
        return scene.isLoaded || false;
    };
    SumerianProvider.prototype.getScene = function (sceneName) {
        if (!this.options.scenes) {
            var errorMsg = 'No scenes were defined in the configuration';
            logger.error(errorMsg);
            throw new XRNoSceneConfiguredError(errorMsg);
        }
        if (!sceneName) {
            var errorMsg = 'No scene name was passed';
            logger.error(errorMsg);
            throw new XRSceneNotFoundError(errorMsg);
        }
        if (!this.options.scenes[sceneName]) {
            var errorMsg = "Scene '" + sceneName + "' is not configured";
            logger.error(errorMsg);
            throw new XRSceneNotFoundError(errorMsg);
        }
        return this.options.scenes[sceneName];
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.getSceneController = function (sceneName) {
        if (!this.options.scenes) {
            var errorMsg = 'No scenes were defined in the configuration';
            logger.error(errorMsg);
            throw new XRNoSceneConfiguredError(errorMsg);
        }
        var scene = this.options.scenes[sceneName];
        if (!scene) {
            var errorMsg = "Scene '" + sceneName + "' is not configured";
            logger.error(errorMsg);
            throw new XRSceneNotFoundError(errorMsg);
        }
        var sceneController = scene.sceneController;
        if (!sceneController) {
            var errorMsg = "Scene controller for '" + sceneName + "' has not been loaded";
            logger.error(errorMsg);
            throw new XRSceneNotLoadedError(errorMsg);
        }
        return sceneController;
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.isVRCapable = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        return sceneController.vrCapable;
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.isVRPresentationActive = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        return sceneController.vrPresentationActive;
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.start = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        sceneController.start();
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.enterVR = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        sceneController.enterVR();
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.exitVR = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        sceneController.exitVR();
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.isMuted = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        return sceneController.muted;
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.setMuted = function (sceneName, muted) {
        var sceneController = this.getSceneController(sceneName);
        sceneController.muted = muted;
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.onSceneEvent = function (sceneName, eventName, eventHandler) {
        var sceneController = this.getSceneController(sceneName);
        sceneController.on(eventName, eventHandler);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    SumerianProvider.prototype.enableAudio = function (sceneName) {
        var sceneController = this.getSceneController(sceneName);
        sceneController.enableAudio();
    };
    return SumerianProvider;
}(AbstractXRProvider));
export { SumerianProvider };
//# sourceMappingURL=SumerianProvider.js.map