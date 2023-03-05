import { __awaiter, __generator, __read } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Amplify, ConsoleLogger as Logger } from '@aws-amplify/core';
import { SumerianProvider } from './Providers/SumerianProvider';
import { XRProviderNotConfigured } from './Errors';
var logger = new Logger('XR');
var DEFAULT_PROVIDER_NAME = 'SumerianProvider';
/**
 * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
 * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
 * and as a result, will no longer be available.
 */
var XRClass = /** @class */ (function () {
    /**
     * Initialize XR with AWS configurations
     *
     * @param {XROptions} options - Configuration object for XR
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    function XRClass(options) {
        this._options = options;
        logger.debug('XR Options', this._options);
        this._defaultProvider = DEFAULT_PROVIDER_NAME;
        this._pluggables = {};
        // Add default provider
        this.addPluggable(new SumerianProvider());
    }
    /**
     * Configure XR part with configurations
     *
     * @param {XROptions} config - Configuration for XR
     * @return {Object} - The current configuration
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.configure = function (options) {
        var _this = this;
        var opt = options ? options.XR || options : {};
        logger.debug('configure XR', { opt: opt });
        this._options = Object.assign({}, this._options, opt);
        Object.entries(this._pluggables).map(function (_a) {
            var _b = __read(_a, 2), name = _b[0], provider = _b[1];
            if (name === _this._defaultProvider && !opt[_this._defaultProvider]) {
                provider.configure(_this._options);
            }
            else {
                provider.configure(_this._options[name]);
            }
        });
        return this._options;
    };
    /**
     * add plugin into XR category
     * @param {Object} pluggable - an instance of the plugin
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.addPluggable = function (pluggable) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                if (pluggable && pluggable.getCategory() === 'XR') {
                    this._pluggables[pluggable.getProviderName()] = pluggable;
                    config = pluggable.configure(this._options);
                    return [2 /*return*/, config];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.loadScene = function (sceneName, domElementId, sceneOptions, provider) {
        if (sceneOptions === void 0) { sceneOptions = {}; }
        if (provider === void 0) { provider = this._defaultProvider; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._pluggables[provider])
                            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
                        return [4 /*yield*/, this._pluggables[provider].loadScene(sceneName, domElementId, sceneOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.isSceneLoaded = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].isSceneLoaded(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.getSceneController = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].getSceneController(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.isVRCapable = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].isVRCapable(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.isVRPresentationActive = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].isVRPresentationActive(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.start = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].start(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.enterVR = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].enterVR(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.exitVR = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].exitVR(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.isMuted = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].isMuted(sceneName);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.setMuted = function (sceneName, muted, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].setMuted(sceneName, muted);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.onSceneEvent = function (sceneName, eventName, eventHandler, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].onSceneEvent(sceneName, eventName, eventHandler);
    };
    /**
     * @deprecated The Amazon Sumerian service is no longer accepting new customers. Existing customer scenes will not be
     * available after February 21, 2023. The AWS Amplify XR features depend on the Amazon Sumerian service to function
     * and as a result, will no longer be available.
     */
    XRClass.prototype.enableAudio = function (sceneName, provider) {
        if (provider === void 0) { provider = this._defaultProvider; }
        if (!this._pluggables[provider])
            throw new XRProviderNotConfigured("Provider '" + provider + "' not configured");
        return this._pluggables[provider].enableAudio(sceneName);
    };
    return XRClass;
}());
export { XRClass };
export var XR = new XRClass(null);
Amplify.register(XR);
//# sourceMappingURL=XR.js.map