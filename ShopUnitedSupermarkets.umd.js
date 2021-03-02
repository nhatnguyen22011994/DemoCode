(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/forms'), require('@angular/common'), require('@ionic/angular'), require('@ionic/storage'), require('rxjs'), require('rxjs/operators'), require('ionic-cache'), require('ionic-cache/dist/cache.service'), require('@ionic-native/network/ngx'), require('@angular/common/http'), require('@ionic-native/in-app-browser/ngx'), require('@ionic-native/geolocation/ngx'), require('lodash'), require('@ionic-native/device/ngx'), require('@ionic-native/in-app-browser/ngx/index'), require('@ionic-native/geolocation/ngx/index'), require('@ionic-native/device/ngx/index'), require('@pscoped/ngx-pub-sub'), require('@ionic-native/network/ngx/index'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ShopUnitedSupermarkets', ['exports', '@angular/core', '@angular/router', '@angular/forms', '@angular/common', '@ionic/angular', '@ionic/storage', 'rxjs', 'rxjs/operators', 'ionic-cache', 'ionic-cache/dist/cache.service', '@ionic-native/network/ngx', '@angular/common/http', '@ionic-native/in-app-browser/ngx', '@ionic-native/geolocation/ngx', 'lodash', '@ionic-native/device/ngx', '@ionic-native/in-app-browser/ngx/index', '@ionic-native/geolocation/ngx/index', '@ionic-native/device/ngx/index', '@pscoped/ngx-pub-sub', '@ionic-native/network/ngx/index', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ShopUnitedSupermarkets = {}, global.ng.core, global.ng.router, global.ng.forms, global.ng.common, global.i1$2, global.storage, global.rxjs, global.rxjs.operators, global.ionicCache, global.i1, global.ngx$3, global.ng.common.http, global.ngx, global.ngx$1, global._, global.ngx$2, global.i2, global.i4, global.i5, global.i6, global.i5$1, global.ng.platformBrowser));
}(this, (function (exports, i0, router, forms, common, i1$2, storage, rxjs, operators, ionicCache, i1, ngx$3, i1$1, ngx, ngx$1, _, ngx$2, i2, i4, i5, i6, i5$1, platformBrowser) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (!exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var Environment = /** @class */ (function () {
        function Environment() {
            // public abstract read mode?: "string";
            this.production = false;
            this.MatomoBannerIds = {
                united: 9,
                amigos: 13,
                albertsons: 14,
                marketStreet: 12,
            };
            // public abstract readonly SenderId : string;
            this.MapZoom = 5;
            this.AppVersion = '5.5.6';
            this.AppName = 'UnitedMarket';
            this.CompanyId = '';
            this.ApplicationId = '';
            this.AppBundle = "sysnify.com.dfwrelationshop";
            this.BuildNumber = '557000';
            this.TrackingCode = 'UnitedMobile';
            this.HeaderToken = 'X-MCMAccessToken';
            this.DefaultHeaders = { HeaderToken: "", 'Content-Type': 'application/json', "TrackingCode": this.TrackingCode };
            this.DefaultBanerId = 13;
            this.DefaultBanerName = 'united';
            this.DefaultImg = 'https://unitedcloud.relationshop.net/RSData/DefaultMissingImage.jpg';
            this.gMapAPI_KEY = 'AIzaSyALhned4TSsSmruz9x24WMYx_0-Q61cnhA';
            this.loadingImgUrl = 'assets/img/loader.gif';
            this.errorImgUrl = '';
            this.DeviceMode = 'Mobile';
            this.PharmacyAppUrl = 'unitedrx://'; //unitedrx   marketstreetrx  amigosrx  albertsonsmarketrx
            this.PharmacyPackageName = 'com.rxtouch.unitedrx';
            this.AppStorePharmacyAppUrl = 'https://itunes.apple.com/app/id1043208478';
            this.GooglePlayPharmacyAppUrl = 'https://play.google.com/store/apps/details?id=com.rxtouch.unitedrx';
            // public readonly PayGatewayUrl = 'https://testunitedm.relationshop.net/ecom';
            this.dateFormat = 'MM/DD/YY';
            this.URLSCHEME = 'rsunitedsupermarkets';
            //Links
            this.links = {
                terms: 'https://www.theunitedfamily.com/terms-conditions/',
                rewardTerms: 'https://www.theunitedfamily.com/rewards/terms-and-conditions/',
                privacy: 'https://www.theunitedfamily.com/privacy-policy/',
                fuel: 'https://www.unitedsupermarkets.com/page/fuel/home',
                contactUs: 'https://www.theunitedfamily.com/contact-us/faqs/',
                help: 'https://www.theunitedfamily.com/app-form/',
                teamMember: 'https://www.unitedfamilybenefits.com/',
                supportContact: 'https://www.unitedsupermarkets.com/page/contact',
                customCakes: '/online-order/home-service/collections/11',
                giftCards: '/online-order/home-service/list-products/19',
                catering: '/online-order/home-service/collections/20'
            };
            // Enable E-com system service
            this.ScanAndGoEnabled = true;
            this.OnlineOrderEnabled = true;
            this.DefaultPickingSlotDayRange = 7; // 1 week
            this.LimitPickingSlotTime = 1; // 1 month
            this.AppTimeZone = 'America/Chicago';
        }
        return Environment;
    }());

    // export class EnvironmentImpl extends Environment {
    // 	public production = false;
    // 	public readonly Mode = "Prod";
    // 	// public readonly APIUrl = 'https://unitedapi.relationshop.net/v5.5/api';
    // 	// public readonly EComHost = 'https://UnitedSmartConnectApi.relationshop.net//v5.5/api';
    // 	public readonly APIUrl = 'https://devunitedapi.relationshop.net/api';
    // 	public readonly EComHost = 'https://devUnitedSmartConnectApi.relationshop.net/api';
    // 	public readonly ApplicationId = ''; // isAndroid() ? '56dd18ee-abe1-4dae-8737-bdf0d64898a7' = 'f3315060-5099-41df-809a-9c11e6e36d59';
    // 	public readonly BlankImge = 'https://UnitedAdmin.relationshop.net/Images/1x1.gif';
    // 	public readonly DefaultImage = 'https://unitedadmin.relationshop.net/Admin/Images/CouponIcon/sr_coupon_icon.png';
    // 	public readonly DefaultCompanyId = '3B4656BB-58A5-FC7D-2F06-B088FA805206';
    // 	public readonly PayGatewayUrl = 'https://unitedm.relationshop.net/ecom';
    // 	public readonly SaveToAndroidPay = 'https://androidpay.google.com/a/save';
    // 	public readonly APIComsumerKey = '0E171208-DB50-4F00-AF4C-987A194DD612';
    // 	public readonly APIUserName = 'UnitedApiUser';
    // 	public readonly APIPassword = 'United2014';
    // }
    // export const ENV: Environment = new EnvironmentImpl();
    var EnvironmentImpl = /** @class */ (function (_super) {
        __extends(EnvironmentImpl, _super);
        function EnvironmentImpl() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.production = false;
            _this.Mode = "Prod";
            // public readonly APIUrl = 'https://unitedapi.relationshop.net/v5.5/api';
            // public readonly EComHost = 'https://UnitedSmartConnectApi.relationshop.net//v5.5/api';
            // public readonly APIUrl = 'https://qcunitedapi.relationshop.net/api';
            // public readonly EComHost = 'https://qcUnitedSmartConnectApi.relationshop.net/api';
            _this.APIUrl = 'https://qcunitedapi.relationshop.net/V5.6/DXP/api';
            // public readonly APIUrl = 'https://unitedapi.relationshop.net/v5.6/api';
            _this.EComHost = 'https://qcUnitedSmartConnectApi.relationshop.net/v5.6/api';
            _this.PayGatewayUrl = 'https://qcunitedm.relationshop.net/ecom';
            // public readonly APIUrl = 'https://qcunitedapi.relationshop.net/api';
            // public readonly EComHost = 'https://qcUnitedSmartConnectApi.relationshop.net/api';
            // public readonly PayGatewayUrl = 'https://unitedm.relationshop.net/ecom';
            _this.ApplicationId = ''; // isAndroid() ? '56dd18ee-abe1-4dae-8737-bdf0d64898a7' = 'f3315060-5099-41df-809a-9c11e6e36d59';
            _this.BlankImge = 'https://UnitedAdmin.relationshop.net/Images/1x1.gif';
            _this.DefaultImage = 'https://unitedadmin.relationshop.net/Admin/Images/CouponIcon/sr_coupon_icon.png';
            _this.DefaultCompanyId = '3B4656BB-58A5-FC7D-2F06-B088FA805206';
            _this.SaveToAndroidPay = 'https://androidpay.google.com/a/save';
            _this.APIComsumerKey = '0E171208-DB50-4F00-AF4C-987A194DD612';
            _this.APIUserName = 'UnitedApiUser';
            _this.APIPassword = 'United2014';
            _this.EnableMatomo = true;
            _this.MatomoCfg = {
                mUrl: 'https://dev-matomo.relationshop.net/mtm/',
                mId: 9,
                installedGoal: 1
            };
            // dxp-ecom: online ordering: catering, giftcard, cake
            _this.EComCoreHost = 'https://uatunitedapi.relationshop.net/V6';
            _this.EComBagAPIURL = _this.EComCoreHost + '/cart/api';
            _this.EComOrderAPIURL = _this.EComCoreHost + '/order/api';
            _this.EComProductAPIURL = _this.EComCoreHost + '/product/api';
            _this.EComStoreAPIURL = _this.EComCoreHost + '/store/api';
            _this.ScanAndGoSvcId = 3;
            _this.OnlineOrderSvcId = 4;
            _this.CateringSvcId = 20;
            _this.PartyTraysSvcId = 21;
            _this.GiftCardsSvcId = 19;
            _this.CustomCakesSvcId = 11;
            return _this;
        }
        return EnvironmentImpl;
    }(Environment));
    var ENV = new EnvironmentImpl();
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    exports.ɵd = /** @class */ (function () {
        function Credential(cache) {
            this.cache = cache;
            // public rsApiToken:string = 'd23cc01090054f13bd56aa18a7b61cc1'; 
            this.rsApiToken = null;
            this.currentUser = null;
            this.cacheTime = 60 * 60 * 24 * 7 * 4; // TTL in seconds for 4 weeks
        }
        Credential.prototype.getCurrentUser = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.currentUser) {
                                return [2 /*return*/, this.currentUser];
                            }
                            _a = this;
                            return [4 /*yield*/, this.cache.getItem('cache-user')
                                    .catch(function () {
                                    return null;
                                })];
                        case 1:
                            _a.currentUser = _b.sent();
                            return [2 /*return*/, this.currentUser];
                    }
                });
            });
        };
        Credential.prototype.setCurrentUser = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.currentUser = user;
                            if (!!user) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.cache.removeItem('cache-user')];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.cache.saveItem('cache-user', user, null, this.cacheTime)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/, null];
                    }
                });
            });
        };
        Credential.prototype.getRsApiToken = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.rsApiToken) {
                                return [2 /*return*/, this.rsApiToken];
                            }
                            _a = this;
                            return [4 /*yield*/, this.cache.getItem('cache-rs-token')
                                    .catch(function () {
                                    return null;
                                })];
                        case 1:
                            _a.rsApiToken = _b.sent();
                            return [2 /*return*/, this.rsApiToken];
                    }
                });
            });
        };
        Credential.prototype.setRsApiToken = function (token) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.rsApiToken = token;
                            if (!token) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.cache.saveItem('cache-rs-token', token, null, this.cacheTime)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.cache.removeItem('cache-rs-token')];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/, null];
                    }
                });
            });
        };
        return Credential;
    }());
    exports.ɵd.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Credential_Factory() { return new exports.ɵd(i0.ɵɵinject(i1.CacheService)); }, token: exports.ɵd, providedIn: "root" });
    exports.ɵd = __decorate([
        i0.Injectable({
            providedIn: 'root'
        })
    ], exports.ɵd);

    /** reference
        https://medium.com/@admin_87321/extending-angular-httpclient-episode-2-144b58494db4
        https://github.com/bbogdanov/ExtendAngularHttpClient/blob/master/extendHttpClient/src/app/http-client.ts
        https://github.com/angular/angular/issues/20203
    **/
    exports.ɵc = /** @class */ (function (_super) {
        __extends(RelationshopHttpClient, _super);
        function RelationshopHttpClient(handler, cre) {
            var _this = _super.call(this, handler) || this;
            _this.cre = cre;
            _this.api = ENV.APIUrl;
            return _this;
        }
        RelationshopHttpClient.prototype.request = function (first, url, options) {
            if (options === void 0) { options = {}; }
            var override = {};
            if (!options) {
                options = {};
            }
            // end point url
            // url =  ENV.APIUrl+ url;
            url = this.api + url;
            // token
            var headers = undefined;
            if (options.headers instanceof i1$1.HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new i1$1.HttpHeaders(options.headers);
            }
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('X-MCMAccessToken', this.cre.rsApiToken || '');
            headers = headers.set('TrackingCode', ENV.TrackingCode || '');
            options.headers = headers;
            // cache params
            // let params: HttpParams|undefined = undefined;
            // if (!!options.params) {
            //     if (options.params instanceof HttpParams) {
            //       params = options.params;
            //     } else {
            //       params = new HttpParams({ fromObject: options.params } as HttpParamsOptions);
            //     }
            // }
            var req = _super.prototype.request.call(this, first, url, options);
            return req;
        };
        return RelationshopHttpClient;
    }(i1$1.HttpClient));
    exports.ɵc.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RelationshopHttpClient_Factory() { return new exports.ɵc(i0.ɵɵinject(i1$1.HttpHandler), i0.ɵɵinject(exports.ɵd)); }, token: exports.ɵc, providedIn: "root" });
    exports.ɵc = __decorate([
        i0.Injectable({
            providedIn: 'root'
        }),
        __param(0, i0.Inject(i1$1.HttpHandler)),
        __param(1, i0.Inject(exports.ɵd))
    ], exports.ɵc);

    exports.ɵp = /** @class */ (function () {
        function IframeModal(modalCtrl, router) {
            this.modalCtrl = modalCtrl;
            this.router = router;
            this.deviceMode = '';
            this.deviceMode = ENV.DeviceMode;
            if (this.deviceMode == 'Web') {
                window.parent.postMessage('scroll-top', '*');
            }
        }
        return IframeModal;
    }());
    __decorate([
        i0.Input()
    ], exports.ɵp.prototype, "url", void 0);
    __decorate([
        i0.Input()
    ], exports.ɵp.prototype, "title", void 0);
    exports.ɵp = __decorate([
        i0.Component({
            selector: "iframe-modal",
            template: "<ion-header class=\"\">\n    <ion-toolbar>\n        <ion-title>{{title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"modalCtrl.dismiss()\">\n                <ion-icon color=\"dark\" name=\"md-close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"online-order-content\">\n    <ng-container *ngIf=\"url\">\n        <iframe [src]=\"url | safeResourceUrl\"></iframe>\n    </ng-container>\n</ion-content>",
            styles: ["ion-title{padding:0 70px}h3{color:var(--online-order-primary-color);text-align:center;font-weight:700;margin:0}.txt-confirm{color:var(--online-order-blue)}.txt-confirm ion-label{font-weight:700}.link{color:var(--online-order-link-color);display:flex;align-items:center;justify-content:center}ion-label{font-size:14px}.online-order-content iframe{display:block;width:100%;height:100%;border:none}"]
        }),
        __param(0, i0.Inject(i1$2.ModalController)),
        __param(1, i0.Inject(router.Router))
    ], exports.ɵp);

    var Utils = /** @class */ (function () {
        function Utils(loadingCtrl, toastCtrl, iab, alertCtrl, cache, geolocation, 
        // public events: Events,
        navCtrl, 
        // @Inject(RelationshopHttpClient)public api: RelationshopHttpClient,
        device, modalController
        /*public shoppingList: ShoppingList*/ ) {
            this.loadingCtrl = loadingCtrl;
            this.toastCtrl = toastCtrl;
            this.iab = iab;
            this.alertCtrl = alertCtrl;
            this.cache = cache;
            this.geolocation = geolocation;
            this.navCtrl = navCtrl;
            this.device = device;
            this.modalController = modalController;
            this.defaultImg = ENV.DefaultImg;
            this._showWellCome = true;
            this.swipeBackEnabled = true;
            this.statelist = [
                { StateName: 'Alabama', StateId: 'AL' },
                { StateName: 'Alaska', StateId: 'AK' },
                { StateName: 'Arizona', StateId: 'AZ' },
                { StateName: 'Arkansas', StateId: 'AR' },
                { StateName: 'California', StateId: 'CA' },
                { StateName: 'Colorado', StateId: 'CO' },
                { StateName: 'Connecticut', StateId: 'CT' },
                { StateName: 'Delaware', StateId: 'DE' },
                { StateName: 'District Of Columbia', StateId: 'DC' },
                { StateName: 'Florida', StateId: 'FL' },
                { StateName: 'Georgia', StateId: 'GA' },
                { StateName: 'Hawaii', StateId: 'HI' },
                { StateName: 'Idaho', StateId: 'ID' },
                { StateName: 'Illinois', StateId: 'IL' },
                { StateName: 'Indiana', StateId: 'IN' },
                { StateName: 'Iowa', StateId: 'IA' },
                { StateName: 'Kansas', StateId: 'KS' },
                { StateName: 'Kentucky', StateId: 'KY' },
                { StateName: 'Louisiana', StateId: 'LA' },
                { StateName: 'Maine', StateId: 'ME' },
                { StateName: 'Maryland', StateId: 'MD' },
                { StateName: 'Massachusetts', StateId: 'MA' },
                { StateName: 'Michigan', StateId: 'MI' },
                { StateName: 'Minnesota', StateId: 'MN' },
                { StateName: 'Mississippi', StateId: 'MS' },
                { StateName: 'Missouri', StateId: 'MO' },
                { StateName: 'Montana', StateId: 'MT' },
                { StateName: 'Nebraska', StateId: 'NE' },
                { StateName: 'Nevada', StateId: 'NV' },
                { StateName: 'New Hampshire', StateId: 'NH' },
                { StateName: 'New Jersey', StateId: 'NJ' },
                { StateName: 'New Mexico', StateId: 'NM' },
                { StateName: 'New York', StateId: 'NY' },
                { StateName: 'North Carolina', StateId: 'NC' },
                { StateName: 'North Dakota', StateId: 'ND' },
                { StateName: 'Ohio', StateId: 'OH' },
                { StateName: 'Oklahoma', StateId: 'OK' },
                { StateName: 'Oregon', StateId: 'OR' },
                { StateName: 'Pennsylvania', StateId: 'PA' },
                { StateName: 'Rhode Island', StateId: 'RI' },
                { StateName: 'South Carolina', StateId: 'SC' },
                { StateName: 'South Dakota', StateId: 'SD' },
                { StateName: 'Tennessee', StateId: 'TN' },
                { StateName: 'Texas', StateId: 'TX' },
                { StateName: 'Utah', StateId: 'UT' },
                { StateName: 'Vermont', StateId: 'VT' },
                { StateName: 'Virginia', StateId: 'VA' },
                { StateName: 'Washington', StateId: 'WA' },
                { StateName: 'West Virginia', StateId: 'WV' },
                { StateName: 'Wisconsin', StateId: 'WI' },
                { StateName: 'Wyoming', StateId: 'WY' }
            ];
            this.cityList = [
                { City: "Abilene", State: "TX" },
                { City: "Alamogordo", State: "NM" },
                { City: "Albuquerque", State: "NM" },
                { City: "Allen", State: "TX" },
                { City: "Amarillo", State: "TX" },
                { City: "Borger", State: "TX" },
                { City: "Breckenridge", State: "TX" },
                { City: "Brownfield", State: "TX" },
                { City: "Brownwood", State: "TX" },
                { City: "Burkburnett", State: "TX" },
                { City: "Canyon", State: "TX" },
            ];
            this.featureList = [
                { text: 'Coffee Shop', value: 'CS' },
                { text: 'Pharmacy', value: 'P' },
                { text: 'Fuel', value: 'F' },
                { text: 'In-store Dining', value: 'ID' },
                { text: 'Floral', value: 'Fl' },
                { text: 'Bakery', value: 'B' },
                { text: 'In-store Bar', value: 'IB' },
                { text: 'Clear Talk', value: 'CT' },
                { text: 'Deli', value: 'D' },
                { text: 'Meat', value: 'M' },
                { text: 'Red Box', value: 'RB' },
                { text: 'Bill Pay', value: 'BP' },
                { text: 'Lottert', value: 'L' }
            ];
            this.offlineMsg = "This page is temporarily unavailable. Please refresh and try again.";
            this.urlParsingNode = document.createElement("a");
            this.lowercase = function (string) { return typeof (string) === 'string' ? string.toLowerCase() : string; };
            this.msie = parseInt((/msie (\d+)/.exec(this.lowercase(navigator.userAgent)) || [])[1], 10);
            if (isNaN(this.msie)) {
                this.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(this.lowercase(navigator.userAgent)) || [])[1], 10);
            }
        }
        Utils.prototype.navigateRoot = function (backRoute, isBack) {
            if (isBack === void 0) { isBack = false; }
            var options = {
                animated: isBack || false,
                animationDirection: 'back'
            };
            this.navCtrl.navigateRoot(decodeURIComponent(backRoute), options);
        };
        Utils.prototype.getCities = function () {
            return rxjs.of(null);
            // // let seq = this.restangular.all('cities').customGET().share();
            // let seq = this.api.get('/cities', { params: { rCache: 'd', rCacheKey: 'cities' } }).pipe(
            // 	map((res: any) => {
            // 		if (res.length == 0) {
            // 			res = this.cityList;
            // 		}
            // 		this.setCache('cities', res);
            // 		return res;
            // 	}, err => {
            // 		console.error('ERROR', err);
            // 	})
            // );
            // return seq;
        };
        Utils.prototype.getOSName = function () {
            return this.device.platform;
        };
        Utils.prototype.validateEmail = function (elementValue) {
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(elementValue);
        };
        Utils.prototype.getCityArea = function () {
            return rxjs.of(null);
            // let seq = this.api.get('/cityarea/items', { params: { rCache: 'd', rCacheKey: 'city-area' } }).pipe(
            // 	map((res: any) => {
            // 		if (res.length == 0) {
            // 			res = this.cityList;
            // 		}
            // 		return res;
            // 	}, err => {
            // 	})
            // );
            // return seq;
        };
        Utils.prototype.getStates = function () {
            return rxjs.of(null);
            // let seq = this.api.get('/states', { params: { rCache: 'd', rCacheKey: 'states' } }).pipe(
            // 	map((res: any) => {
            // 		if (res.length == 0) {
            // 			res = this.statelist;
            // 		}
            // 		return res;
            // 	}, err => {
            // 		console.error('ERROR', err);
            // 	})
            // );
            // return seq;
        };
        Utils.prototype.getStore = function () {
            return this._store;
        };
        Utils.prototype.setStore = function (store) {
            this._store = store;
        };
        Utils.prototype.showLoading = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, e_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            if (!!this.loading) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, this.loadingCtrl.create({
                                    spinner: null,
                                    message: "<div class=\"cssload-container\">\n\t\t\t\t  \t<img class=\"tab-img\" src=\"assets/img/loadding-img.gif\"/>\n\t\t\t\t  \t</div>",
                                    // cssClass: 'loader',
                                    duration: 10000,
                                })];
                        case 1:
                            _a.loading = _b.sent();
                            this.loading.present();
                            this.loading.onDidDismiss().then(function () {
                                _this.loading = null;
                            });
                            _b.label = 2;
                        case 2: return [3 /*break*/, 4];
                        case 3:
                            e_1 = _b.sent();
                            console.log(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.hideLoading = function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            if (!this.loading) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.loading.dismiss()];
                        case 1:
                            _a.sent();
                            this.loading = null;
                            _a.label = 2;
                        case 2: return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            console.log('DDDDDHIDE LOADING error', e_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.getCache = function (name) {
            return Promise.resolve();
            // var key = 'cache-' + name;
            // return this.cache.getItem(key)
            // 	.catch(() => {
            // 		console.log("Cache expired or doesn't exist!");
            // 	});
        };
        Utils.prototype.setCache = function (name, data) {
            // this.cache.saveItem('cache-' + name, data);
        };
        Utils.prototype.getCurrentPosition = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, resp, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = {};
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.geolocation.getCurrentPosition({ timeout: 2000 })];
                        case 2:
                            resp = _a.sent();
                            if (resp) {
                                data = {
                                    isLocationOn: true,
                                    lat: resp.coords.latitude,
                                    lng: resp.coords.longitude
                                };
                            }
                            return [2 /*return*/, data];
                        case 3:
                            error_1 = _a.sent();
                            data = {
                                isLocationOn: false,
                                error: error_1
                            };
                            return [2 /*return*/, data];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.groupBy = function (data, property) {
            var result = data.reduce(function (previous, current) {
                if (!previous[current[property]]) {
                    previous[current[property]] = [current];
                }
                else {
                    previous[current[property]].push(current);
                }
                return previous;
            }, {});
            return Object.keys(result).map(function (key) { return ({ key: key, value: result[key] }); });
        };
        Utils.prototype.str2date = function (str) {
            if (typeof (str) !== 'string') {
                return str;
            }
            str = str ? str.substr(0, 10) : str;
            if (!str) {
                return str;
            }
            var strs = str.split('-');
            return new Date(strs[0], parseInt(strs[1], 10) - 1, strs[2]);
        };
        Utils.prototype.toast = function (message) {
            return __awaiter(this, void 0, void 0, function () {
                var toast;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.toastCtrl.create({
                                message: message,
                                duration: 4000,
                                position: 'bottom',
                                // showCloseButton: true,
                                // closeButtonText: " X",
                                // dismissOnPageChange: true
                                buttons: []
                            })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.confirmYesNo = function (title, message, callBack) {
            return __awaiter(this, void 0, void 0, function () {
                var selected, confirm;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            selected = false;
                            return [4 /*yield*/, this.alertCtrl.create({
                                    header: title,
                                    message: message,
                                    buttons: [
                                        {
                                            text: 'YES',
                                            handler: function () {
                                                selected = true;
                                                callBack(true);
                                            },
                                            cssClass: 'btn-yes'
                                        },
                                        {
                                            text: '',
                                            cssClass: 'btn-empty'
                                        },
                                        {
                                            text: 'NO',
                                            handler: function () {
                                                selected = true;
                                                callBack(false);
                                            },
                                            cssClass: 'btn-no'
                                        }
                                    ],
                                    cssClass: "cus-alert-modal"
                                })];
                        case 1:
                            confirm = _a.sent();
                            confirm.onDidDismiss().then(function () {
                                if (!selected) { //In case click outside popup
                                    callBack(false);
                                }
                            });
                            confirm.present();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.alert = function (title, message, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var alert;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                header: title,
                                message: message,
                                buttons: [
                                    {
                                        text: 'Yes',
                                        handler: function () {
                                            return callback;
                                        },
                                        cssClass: 'btn-ok'
                                    },
                                    {
                                        text: 'No',
                                        role: 'cancel',
                                        cssClass: 'btn-no',
                                    }
                                ],
                                cssClass: "rs-alert-yes-no"
                            })];
                        case 1:
                            alert = _a.sent();
                            alert.present();
                            return [2 /*return*/, alert];
                    }
                });
            });
        };
        Utils.prototype.alertError = function (message, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var alert;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                header: "Oh No!",
                                message: message,
                                // backdropDismiss: false,
                                // buttons: [
                                // ],
                                cssClass: "cus-alert-message cus-btns",
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function () {
                                            if (callback) {
                                                callback();
                                            }
                                        }
                                    }
                                ]
                            })];
                        case 1:
                            alert = _a.sent();
                            alert.present();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.alertSuccess = function (message, title) {
            return __awaiter(this, void 0, void 0, function () {
                var alert;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Success!',
                                message: message,
                            })];
                        case 1:
                            alert = _a.sent();
                            alert.present();
                            // auto dismiss
                            setTimeout(function () {
                                alert.dismiss();
                            }, 5000);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Utils.prototype.formatDate = function (date) {
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sept", "Oct",
                "Nov", "Dec"
            ];
            return [weekday[date.getDay()], monthNames[date.getMonth()] + '. ' + date.getDate()];
        };
        /** copy form https://github.com/amarkes/br-mask/blob/master/src/directives/br-mask.ts **/
        /**
        * Responsible for removing special characters
        * @author Antonio Marques <tmowna@gmail.com>
        * @example <caption>this.formatField(string)</caption>
        * @param {string} field
        * @param {string} mask
        * @param {number} size
        * @returns {string} value
        */
        Utils.prototype.formatField = function (field, mask, size) {
            if (!size) {
                size = 99999999999;
            }
            var boleanoMascara;
            var exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
            var campoSoNumeros = field.toString().replace(exp, '');
            var posicaoCampo = 0;
            var NovoValorCampo = '';
            var TamanhoMascara = campoSoNumeros.length;
            for (var i = 0; i < TamanhoMascara; i++) {
                if (i < size) {
                    boleanoMascara = (mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === '/');
                    boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
                    boleanoMascara = boleanoMascara || ((mask.charAt(i) === '(') || (mask.charAt(i) === ')') || (mask.charAt(i) === ' '));
                    boleanoMascara = boleanoMascara || ((mask.charAt(i) === ',') || (mask.charAt(i) === '*') || (mask.charAt(i) === '+'));
                    boleanoMascara = boleanoMascara || ((mask.charAt(i) === '@') || (mask.charAt(i) === '#') || (mask.charAt(i) === ':'));
                    boleanoMascara = boleanoMascara || ((mask.charAt(i) === '$') || (mask.charAt(i) === '&') || (mask.charAt(i) === '%'));
                    if (boleanoMascara) {
                        NovoValorCampo += mask.charAt(i);
                        TamanhoMascara++;
                    }
                    else {
                        NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                        posicaoCampo++;
                    }
                }
            }
            return NovoValorCampo;
        };
        /*
        openInApp(url) {
            if (!url) {
                return null;
            }
            return this.iab.create(url, '_blank', 'location=no,enableViewportScale=yes,closebuttoncaption=Close,toolbarposition=bottom,footer=yes,clearsessioncache=yes,clearcache=yes');
        }
        */
        Utils.prototype.openInSystem = function (url) {
            if (!url) {
                return;
            }
            return this.iab.create(url, '_system');
        };
        Utils.prototype.openInaAppBrowser = function (url, opts) {
            // var option = "location=no,closebuttoncaption=Done,footer=yes,closebuttoncolor=#FFFFFF,enableViewportScale=yes, clearsessioncache=yes,clearcache=yes";
            var option = {
                location: 'no',
                closebuttoncaption: 'Done',
                footer: 'yes',
                closebuttoncolor: '#FFFFFF',
                enableViewportScale: 'yes'
            };
            var ref = this.iab.create(url, '_blank', option);
            if (opts && opts['margin-bottom']) {
                ref.on('loadstop').subscribe(function (event) {
                    ref.insertCSS({ code: "body{margin-bottom: 200px;}" });
                });
            }
            return ref;
        };
        Utils.prototype.openPopupWindow = function (_a) {
            var url = _a.url, title = _a.title, w = _a.w, h = _a.h, checkBlocker = _a.checkBlocker;
            // Fixes dual-screen position                             Most browsers      Firefox
            var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
            var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
            var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            var systemZoom = width / window.screen.availWidth;
            var left = (width - w) / 2 / systemZoom + dualScreenLeft;
            var top = (height - h) / 2 / systemZoom + dualScreenTop;
            var newWindow = window.open(url, title, "\n\t\t\tscrollbars=yes,\n\t\t\twidth=" + w / systemZoom + ", \n\t\t\theight=" + h / systemZoom + ", \n\t\t\ttop=" + top + ", \n\t\t\tleft=" + left + "\n  \t\t\t");
            if (newWindow.focus)
                newWindow.focus();
            if (checkBlocker && (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined')) {
                this.alertError("Pop-up Blocker is enabled! Please add this site to your exception list.");
            }
            return newWindow;
        };
        Utils.prototype.openPopupIframe = function (_a) {
            var url = _a.url, title = _a.title, w = _a.w, h = _a.h, checkBlocker = _a.checkBlocker, callback = _a.callback;
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalController.create({
                                component: exports.ɵp,
                                cssClass: 'online-order-modal rs-medium-modal',
                                componentProps: {
                                    url: url,
                                    title: title,
                                },
                            })];
                        case 1:
                            modal = _a.sent();
                            modal.onDidDismiss().then(function () {
                                callback && callback();
                            });
                            return [4 /*yield*/, modal.present()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Utils.prototype.encodeUriQuery = function (val, pctEncodeSpaces) {
            return encodeURIComponent(val).
                replace(/%40/gi, '@').
                replace(/%3A/gi, ':').
                replace(/%24/g, '$').
                replace(/%2C/gi, ',').
                replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
        };
        Utils.prototype.urlResolve = function (url, base) {
            var href = url;
            if (this.msie) {
                // Normalize before parse.  Refer Implementation Notes on why this is
                // done in two steps on IE.
                this.urlParsingNode.setAttribute("href", href);
                href = this.urlParsingNode.href;
            }
            this.urlParsingNode.setAttribute('href', href);
            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href: this.urlParsingNode.href,
                protocol: this.urlParsingNode.protocol ? this.urlParsingNode.protocol.replace(/:$/, '') : '',
                host: this.urlParsingNode.host,
                search: this.urlParsingNode.search ? this.urlParsingNode.search.replace(/^\?/, '') : '',
                hash: this.urlParsingNode.hash ? this.urlParsingNode.hash.replace(/^#/, '') : '',
                hostname: this.urlParsingNode.hostname,
                port: this.urlParsingNode.port,
                pathname: (this.urlParsingNode.pathname.charAt(0) === '/') ? this.urlParsingNode.pathname : '/' + this.urlParsingNode.pathname
            };
        };
        Utils.prototype.isDateCorrect = function (day, month, year) {
            if (month > 11 || day > 31) {
                return false;
            }
            var d = new Date();
            d.setFullYear(year);
            d.setMonth(month);
            d.setDate(day);
            return d.getDate() == day;
        };
        Utils.prototype.setCountDownClock = function (data) {
            if (data === 0 && this._countDownObs) {
                this._countDownObs.unsubscribe();
            }
            console.log('setCountDownClock', data);
            // this.cache.saveItem('cache-CountDownClock', data);
            return Promise.resolve();
        };
        Utils.prototype.getCountDownClock = function () {
            var key = 'cache-CountDownClock';
            // return this.cache.getItem(key)
            // 	.catch(() => {
            // 		console.log("getCountDownClock expired or doesn't exist!");
            // 	});
            return Promise.resolve(null);
        };
        Utils.prototype.countDownfunc = function () {
            var _this = this;
            var getCountDownClock = new Promise(function (resolve, reject) {
                _this.getCountDownClock().then(function (res) {
                    if (res) {
                        _this._countDownClock = res;
                    }
                    resolve(1);
                });
            });
            Promise.all([getCountDownClock]).then(function (values) {
                console.log("_countDownClock", _this._countDownClock);
                if (_this._countDownClock && _this._countDownClock > 0) {
                    _this._countDownObs = rxjs.interval(_this._countDownClock).pipe(operators.map(function (x) {
                        _this._countDownClock = _this._countDownClock - 1;
                    })).subscribe(function (x) {
                        console.log("_countDownClock subscribe", _this._countDownClock);
                        _this.setCountDownClock(_this._countDownClock);
                        var date = new Date(_this._countDownClock * 1000);
                        _this._hours = date.getHours() - 7;
                        _this._minutes = date.getMinutes();
                        _this._seconds = date.getSeconds();
                    });
                }
            });
        };
        Utils.prototype.openTCLink = function () {
            console.log("ENV.links", ENV.links);
            this.openInaAppBrowser(ENV.links.rewardTerms);
        };
        Utils.prototype.openPPLink = function () {
            this.openInaAppBrowser(ENV.links.privacy);
        };
        Utils.prototype.convertToPhone = function (phone) {
            if (!phone) {
                return "";
            }
            var regxFormat1 = new RegExp(/[()](\d{3})[)] (\d{3})-(\d{4})/);
            var regxFormat2 = new RegExp(/(\d{3})-(\d{3})-(\d{4})/);
            if (regxFormat1.test(phone) || regxFormat2.test(phone)) {
                return phone;
            }
            else {
                if (phone.length == 10) {
                    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
                }
            }
        };
        Utils.prototype.titleCase = function (str) {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(' ');
        };
        Utils.prototype.openAppSettings = function () {
            // this.openNativeSettings.open('application_details').then(rs => {
            // 	console.log('rs openNativeSettings', rs);
            // }).catch(err => {
            // 	console.log('err openNativeSettings', err);
            // });
        };
        // mapCouponV5(couponMap, cats, couponsHistory, couponType) {
        // 	cats = cats != null ? cats : couponMap.Categories;
        // 	// couponMap.primaryCategory = couponMap.primaryCategory == 'Canned and Packaged' ? 'Canned & Packaged' : couponMap.primaryCategory;
        // 	var cat = _.find(cats, function (o) { return o.CategoryName == couponMap.primaryCategory; });
        // 	var couponHistory = _.find(couponsHistory, function (e) {
        // 		return (e.CpnCode == couponMap.loyaltyAccountId && e.RefID == couponMap.loyaltyPromoId)
        // 	});
        // 	var isAdded = couponHistory != null ? true : false;
        // 	var coupon: any = {
        // 		Id: null,
        // 		Categories: null,
        // 		CouponCode: null,
        // 		ExpirationDate: null,
        // 		StartDate: null,
        // 		EndDate: null,
        // 		ReferenceID: null,
        // 		ExternalOfferId: null,
        // 		CouponType: null,
        // 		Disclaimer: null,
        // 		Brand: null,
        // 		Description: null,
        // 		TextSaving: null,
        // 		NumSaving: null,
        // 		ImageFile: null,
        // 		Title: null,
        // 		IsAdded: false,
        // 	};
        // 	coupon.Id = parseInt(couponMap.loyaltyAccountId);
        // 	coupon.Categories = [cat];
        // 	coupon.CouponCode = couponMap.loyaltyAccountId;
        // 	coupon.ExpirationDate = couponMap.endDate;
        // 	coupon.StartDate = couponMap.displayEffDate;
        // 	coupon.EndDate = couponMap.displayEndDate;
        // 	coupon.ReferenceID = couponMap.loyaltyPromoId;
        // 	coupon.ExternalOfferId = couponMap.externalOfferId;
        // 	coupon.CouponType = couponType;
        // 	coupon.Disclaimer = couponMap.verbiageDisclaimer;
        // 	coupon.Brand = couponMap.verbiageBrand;
        // 	coupon.Description = couponMap.discountTypeDesc;
        // 	coupon.TextSaving = couponMap.verbiageTitle;
        // 	coupon.NumSaving = couponMap.discountAmount;
        // 	coupon.ImageFile = couponMap.imageFileName;
        // 	coupon.Title = couponMap.verbiageTitle;
        // 	coupon.IsAdded = isAdded;
        // 	coupon.VerbiageDetails = couponMap.verbiageDetails;
        // 	coupon.OfferTypeDesc = couponMap.offerTypeDesc;
        // 	coupon.Department = cat.CategoryName;
        // 	return coupon;
        // }
        Utils.prototype.mapCouponV5 = function (couponMap, cats, couponType) {
            cats = cats != null ? cats : couponMap.Categories || couponMap.Cats;
            var cat = ___default['default'].find(cats, function (o) { return o.CategoryName == couponMap.primaryCategory || (couponMap.Cats != null && o.CategoryName == couponMap.Cats[0].CategoryName); });
            var coupon = {
                Id: null,
                Categories: null,
                CouponCode: null,
                ExpirationDate: null,
                StartDate: null,
                EndDate: null,
                ReferenceID: null,
                ExternalOfferId: null,
                CouponType: null,
                Disclaimer: null,
                Brand: null,
                Description: null,
                TextSaving: null,
                NumSaving: null,
                ImageFile: null,
                Title: null,
                IsAdded: false,
            };
            coupon.Id = couponMap.Id || parseInt(couponMap.loyaltyAccountId);
            coupon.Categories = [cat];
            coupon.CouponCode = couponMap.CpnCode || couponMap.loyaltyAccountId;
            coupon.ExpirationDate = couponMap.ExpDate || couponMap.endDate;
            coupon.StartDate = couponMap.StrtDate || couponMap.displayEffDate;
            coupon.EndDate = couponMap.EndDate || couponMap.displayEndDate;
            coupon.ReferenceID = couponMap.RefID || couponMap.loyaltyPromoId;
            coupon.ExternalOfferId = couponMap.ExternalOfferId || couponMap.externalOfferId;
            coupon.CouponType = couponMap.CpnType || couponType;
            coupon.Disclaimer = coupon.CouponType == "DigitalCoupon" ? couponMap.Description : couponMap.Disclaimer || couponMap.verbiageDisclaimer;
            coupon.Brand = couponMap.Brand || couponMap.verbiageBrand;
            coupon.Description = couponMap.Description || couponMap.verbiageDetails;
            coupon.TextSaving = couponMap.Title || couponMap.verbiageTitle;
            coupon.NumSaving = couponMap.NumSaving || couponMap.discountAmount;
            coupon.ImageFile = couponMap.ImgFile || couponMap.imageFileName;
            coupon.Title = couponMap.TextSaving || couponMap.verbiageTitle;
            coupon.IsAdded = couponMap.IsAdded || false;
            coupon.VerbiageDetails = couponMap.Title || couponMap.verbiageDetails;
            coupon.OfferTypeDesc = couponMap.OfferTypeDesc || couponMap.offerTypeDesc;
            coupon.Department = !!cat ? cat.CategoryName || cat : "";
            return coupon;
        };
        Utils.prototype.mapCouponAddToAccountV5 = function (couponsMap) {
            var coupon = {
                Brand: null,
                CouponCode: null,
                CouponType: null,
                Categories: null,
                Description: null,
                ExpirationDate: null,
                Id: null,
                ImageFile: null,
                NumSaving: null,
                RedeemText: null,
                RedeemCost: null,
                ReferenceID: null,
                TextSaving: null,
                Title: null,
                ItemQuantity: null,
                StartDate: null,
                EndDate: null,
                Segment: null,
                Disclaimer: null,
                ExternalOfferId: null,
                ShoppingListId: null,
                MultiShoppingList: null,
                LoadedDate: null,
                IsAdded: false,
            };
            coupon.Brand = couponsMap.Brand;
            coupon.CouponCode = couponsMap.CpnCode;
            coupon.CouponType = couponsMap.CpnType;
            coupon.Categories = couponsMap.Cats;
            coupon.Description = couponsMap.Description;
            coupon.ExpirationDate = couponsMap.ExpDate;
            coupon.Id = couponsMap.Id;
            coupon.ImageFile = couponsMap.ImgFile;
            coupon.NumSaving = couponsMap.NumSaving;
            coupon.RedeemText = couponsMap.RedeemText;
            coupon.RedeemCost = couponsMap.RdmCost;
            coupon.ReferenceID = couponsMap.RefID;
            coupon.TextSaving = couponsMap.TextSaving;
            coupon.Title = couponsMap.Title;
            coupon.ItemQuantity = couponsMap.ItmQty;
            coupon.StartDate = couponsMap.StrtDate;
            coupon.EndDate = couponsMap.EndDate;
            coupon.Segment = couponsMap.Segment;
            coupon.Disclaimer = couponsMap.Disclaimer;
            coupon.ExternalOfferId = couponsMap.ExternalOfferId;
            coupon.ShoppingListId = couponsMap.ShoppingListId ? couponsMap.ShoppingListId : 0;
            coupon.MultiShoppingList = couponsMap.MultiShoppingList;
            coupon.LoadedDate = couponsMap.LoaddedData;
            coupon.IsAdded = couponsMap.IsAdded;
            return coupon;
        };
        Utils.prototype.sendSupportEmail = function (obj) {
            return rxjs.of(null);
            // Object.assign(obj, { BannerID: ENV.DefaultBanerId });
            // return this.api.post('/feedbacks', obj)
        };
        Utils.prototype.rsAddress2ecomAddress = function (rsAddress) {
            // console.log('rsAddress', rsAddress);
            var address = {
                Id: rsAddress.CS_ContactID,
                AddressLine1: rsAddress.Address,
                AddressLine2: '',
                AddressLine3: '',
                City: rsAddress.City,
                Region: rsAddress.State,
                CountryCode: rsAddress.Country || 'US',
                PostalCode: rsAddress.ZipCode,
                FirstName: rsAddress.FirstName,
                LastName: rsAddress.LastName,
                DeliveryPointId: '',
                NeighborhoodId: '',
                WasAddressValidated: false,
                IsDefaultBilling: rsAddress.IsBilling,
                IsDefaultShipping: rsAddress.IsDelivery,
                PhoneNumbers: []
            };
            if (rsAddress.Phone) {
                address.PhoneNumbers.push({
                    IsMobile: false,
                    FullNumber: rsAddress.Phone,
                    PhoneNumberType: 'Primary',
                    FullNumberFormatted: '',
                    Description: 'Primary Phone'
                });
            }
            if (rsAddress.MobilePhone) {
                address.PhoneNumbers.push({
                    IsMobile: true,
                    FullNumber: rsAddress.MobilePhone,
                    PhoneNumberType: 'Mobile',
                    FullNumberFormatted: '',
                    Description: 'Mobile'
                });
            }
            if (rsAddress.SecondaryPhone) {
                address.PhoneNumbers.push({
                    IsMobile: false,
                    FullNumber: rsAddress.SecondaryPhone,
                    PhoneNumberType: 'Secondary',
                    FullNumberFormatted: '',
                    Description: 'Secondary Phone'
                });
            }
            return address;
        };
        Utils.prototype.validURL = function (str) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            return !!pattern.test(str);
        };
        return Utils;
    }());
    Utils.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Utils_Factory() { return new Utils(i0.ɵɵinject(i1$2.LoadingController), i0.ɵɵinject(i1$2.ToastController), i0.ɵɵinject(i2.InAppBrowser), i0.ɵɵinject(i1$2.AlertController), i0.ɵɵinject(i1.CacheService), i0.ɵɵinject(i4.Geolocation), i0.ɵɵinject(i1$2.NavController), i0.ɵɵinject(i5.Device), i0.ɵɵinject(i1$2.ModalController)); }, token: Utils, providedIn: "root" });
    Utils = __decorate([
        i0.Injectable({
            providedIn: 'root'
        }),
        __param(0, i0.Inject(i1$2.LoadingController)),
        __param(1, i0.Inject(i1$2.ToastController)),
        __param(2, i0.Inject(ngx.InAppBrowser)),
        __param(3, i0.Inject(i1$2.AlertController)),
        __param(4, i0.Inject(ionicCache.CacheService)),
        __param(5, i0.Inject(ngx$1.Geolocation)),
        __param(6, i0.Inject(i1$2.NavController)),
        __param(7, i0.Inject(ngx$2.Device)),
        __param(8, i0.Inject(i1$2.ModalController))
    ], Utils);
    function noop() { }
    ;
    function cacheErrorHandle() { return null; }
    ;
    function refreshParam(refresher, groupkey, key, prefixKey) {
        return { rCache: refresher ? 'fresh' : 'default', rCacheKey: key || null, rCacheGroupKey: groupkey || null, rPrefixCacheKey: prefixKey || null };
    }
    console.log('prevent');
    function preventBuble(event) {
        if (!event) {
            return;
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (!event.srcEvent) {
            return;
        }
        var srcEvent = event.srcEvent;
        if (srcEvent.stopPropagation) {
            srcEvent.stopPropagation();
        }
        if (srcEvent.preventDefault) {
            srcEvent.preventDefault();
        }
    }

    var PermanentSettings_1;
    exports.ɵg = PermanentSettings_1 = /** @class */ (function () {
        function PermanentSettings(cache) {
            this.cache = cache;
            this.bkItems = [];
            // this.cache.sa
        }
        PermanentSettings.prototype.saveItem = function (key, val) {
            return this.cache.saveItem(key, val, null, PermanentSettings_1.cacheTime);
        };
        PermanentSettings.prototype.getItem = function (key) {
            var _this = this;
            return this.cache.getItem(key)
                .then(function (val) {
                // refresh extend time;
                _this.saveItem(key, val);
                return val;
            })
                .catch(function () { return null; });
        };
        PermanentSettings.prototype.backup = function () {
            return __awaiter(this, void 0, void 0, function () {
                var showedStoreVal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cache.getItem(PermanentSettings_1.SHOWED_SELECT_STORE).catch(cacheErrorHandle)];
                        case 1:
                            showedStoreVal = _a.sent();
                            ;
                            if (showedStoreVal !== null) {
                                this.bkItems.push({ key: PermanentSettings_1.SHOWED_SELECT_STORE, val: showedStoreVal });
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        PermanentSettings.prototype.restore = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all(this.bkItems.map(function (item) {
                                return _this.saveItem(item.key, item.val);
                            }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return PermanentSettings;
    }());
    exports.ɵg.cacheTime = 60 * 60 * 24 * 300; // 300 days
    exports.ɵg.SHOWED_SELECT_STORE = 'SHOWED_SELECT_STORE';
    exports.ɵg.SHOWED_NEWS_55 = 'SHOWED_NEWS_55';
    exports.ɵg.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermanentSettings_Factory() { return new exports.ɵg(i0.ɵɵinject(i1.CacheService)); }, token: exports.ɵg, providedIn: "root" });
    exports.ɵg = PermanentSettings_1 = __decorate([
        i0.Injectable({
            providedIn: 'root'
        })
    ], exports.ɵg);

    exports.ɵf = /** @class */ (function (_super) {
        __extends(RelationshopEComHttpClient, _super);
        function RelationshopEComHttpClient(handler, cre) {
            var _this = _super.call(this, handler) || this;
            _this.cre = cre;
            _this.api = ENV.EComHost;
            _this.shopPath = 'InStore';
            return _this;
        }
        RelationshopEComHttpClient.prototype.request = function (first, url, options) {
            if (options === void 0) { options = {}; }
            var override = {};
            if (!options) {
                options = {};
            }
            // end point url
            // url =  ENV.APIUrl+ url;
            url = this.api + url;
            // token
            var headers = undefined;
            if (options.headers instanceof i1$1.HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new i1$1.HttpHeaders(options.headers);
            }
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('X-MCMAccessToken', this.cre.rsApiToken || '');
            headers = headers.set('ShopPath', this.shopPath);
            // headers = headers.set('X-MCMAccessToken', this.cre.rsApiToken || '');
            options.headers = headers;
            var req = _super.prototype.request.call(this, first, url, options);
            return req;
        };
        return RelationshopEComHttpClient;
    }(i1$1.HttpClient));
    exports.ɵf.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RelationshopEComHttpClient_Factory() { return new exports.ɵf(i0.ɵɵinject(i1$1.HttpHandler), i0.ɵɵinject(exports.ɵd)); }, token: exports.ɵf, providedIn: "root" });
    exports.ɵf = __decorate([
        i0.Injectable({
            providedIn: 'root'
        })
        // export class RelationshopEComHttpClient extends RelationshopHttpClient{
        // 	protected api = ENV.EComHost;
        // }
    ], exports.ɵf);

    exports.ɵe = /** @class */ (function () {
        function CurrentStore(cache, api, cre, ecapi, platform, events) {
            var _this = this;
            this.cache = cache;
            this.api = api;
            this.cre = cre;
            this.ecapi = ecapi;
            this.platform = platform;
            this.events = events;
            // public store$: ReplaySubject<any>;
            this.cacheKey = 'cache-currentStore';
            this.store$ = new rxjs.ReplaySubject(1);
            this.events.subscribe('change-store', function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!data) return [3 /*break*/, 1];
                            this.setStore(data);
                            return [3 /*break*/, 3];
                        case 1:
                            _a = this.setStore;
                            return [4 /*yield*/, this.loadStore()];
                        case 2:
                            _a.apply(this, [_b.sent()]);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        CurrentStore.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.setStore;
                            return [4 /*yield*/, this.loadStore()];
                        case 1: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CurrentStore.prototype.getStore = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(this.store === undefined)) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, this.cache.getItem(this.cacheKey).catch(function () {
                                    return null;
                                })];
                        case 1:
                            _a.store = _c.sent();
                            _c.label = 2;
                        case 2:
                            if (!(this.store === undefined)) return [3 /*break*/, 5];
                            _b = this.setStore;
                            return [4 /*yield*/, this.loadStore()];
                        case 3: 
                        /*
                        const user = await this.cre.getCurrentUser();
                        if (user && user.StoreID) {
                            const store = await this.getStoreById(user.StoreID).toPromise();
                            await this.setStore(store);
                        }
                        */
                        return [4 /*yield*/, _b.apply(this, [_c.sent()])];
                        case 4:
                            /*
                            const user = await this.cre.getCurrentUser();
                            if (user && user.StoreID) {
                                const store = await this.getStoreById(user.StoreID).toPromise();
                                await this.setStore(store);
                            }
                            */
                            _c.sent();
                            _c.label = 5;
                        case 5: return [2 /*return*/, this.store];
                    }
                });
            });
        };
        CurrentStore.prototype.setStore = function (store) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (store) {
                                store.IsEcomm = false;
                                if (store.Pickup == true || store.Delivery == true) {
                                    store.IsEcomm = true;
                                }
                                // store.ShopPath = 'Online';
                                // store.ShopPath = 'Instore';
                            }
                            // console.log(store);
                            this.store = store;
                            return [4 /*yield*/, this.cache.saveItem(this.cacheKey, store, undefined, 60 * 60 * 12 * 15)];
                        case 1:
                            _a.sent();
                            this.store$.next(store);
                            return [2 /*return*/];
                    }
                });
            });
        };
        CurrentStore.prototype.getStoreById = function (id) {
            var seq = this.api.get('/stores/' + id);
            return seq;
        };
        CurrentStore.prototype.loadStore = function () {
            return __awaiter(this, void 0, void 0, function () {
                var user, store;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cre.getCurrentUser()];
                        case 1:
                            user = _a.sent();
                            store = null;
                            if (!!user) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.cache.getItem(this.cacheKey).catch(function () {
                                    return null;
                                })];
                        case 2:
                            // load form cache
                            store = _a.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            if (!user.StoreID) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.getStoreById(user.StoreID).toPromise()];
                        case 4:
                            store = _a.sent();
                            if (!store) {
                                return [2 /*return*/, null];
                            }
                            store.StoreType = this.displayStoreType(store);
                            store.ShopPath = user.ShopPath;
                            _a.label = 5;
                        case 5: return [2 /*return*/, store];
                    }
                });
            });
        };
        CurrentStore.prototype.isEcom = function () {
            return this.store && this.store.ShopPath == 'Online';
        };
        /*
        setCurrentStore(data, currentUser?) {
            this.cache.saveItem('cache-currentStore', data, undefined, 60 * 60 * 12 * 15);
            if (currentUser) {
                this.setStoretoShoppingV3(currentUser, data);
            }
        }

        setStoretoShoppingV3(user, store) {
            return this.ecapi.put(`/user/store/v3?`, null, { params: { userId: user.ExternalCustomerCardID, storeId: store.ExternalID } });
        }
        */
        CurrentStore.prototype.displayStoreType = function (store) {
            if (!store || (!store.Pickup && !store.Delivery))
                return "";
            var pickupText = store.Pickup ? "Pickup " : "";
            var deliveryText = store.Delivery ? "Delivery " : "";
            var andText = store.Pickup && store.Delivery ? "& " : "";
            var type = "" + deliveryText + andText + pickupText + "Available";
            return type;
        };
        return CurrentStore;
    }());
    exports.ɵe.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CurrentStore_Factory() { return new exports.ɵe(i0.ɵɵinject(i1.CacheService), i0.ɵɵinject(exports.ɵc), i0.ɵɵinject(exports.ɵd), i0.ɵɵinject(exports.ɵf), i0.ɵɵinject(i1$2.Platform), i0.ɵɵinject(i6.NgxPubSubService)); }, token: exports.ɵe, providedIn: "root" });
    exports.ɵe = __decorate([
        i0.Injectable({
            providedIn: 'root'
        })
    ], exports.ɵe);

    exports.ɵb = /** @class */ (function () {
        // public  authState: Observable<any>;
        function AuthService(rsapi, cre, cache, cStore, network, platform, pSettings) {
            var _this = this;
            this.rsapi = rsapi;
            this.cre = cre;
            this.cache = cache;
            this.cStore = cStore;
            this.network = network;
            this.platform = platform;
            this.pSettings = pSettings;
            this.underGuestFlow = false;
            this.authState$ = new rxjs.ReplaySubject(1);
            this.cache.setOfflineInvalidate(false);
            this.platform.ready().then(function () {
                _this.init();
            });
        }
        AuthService.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var isOffLine, ready, user, token, haveToken, freshCre, apiUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isOffLine = this.network.type == this.network.Connection.NONE;
                            return [4 /*yield*/, this.cache.ready()];
                        case 1:
                            ready = _a.sent();
                            if (!!isOffLine) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.cache.clearExpired()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [4 /*yield*/, this.cre.getCurrentUser()];
                        case 4:
                            user = _a.sent();
                            return [4 /*yield*/, this.cre.getRsApiToken()];
                        case 5:
                            token = _a.sent(), haveToken = !!this.cre.rsApiToken;
                            // if have token, refresh token, refresh user info. It token is not valid: logout
                            // console.log('from Cache:', user, token);
                            if (isOffLine) {
                                this.authState$.next(this.cre.currentUser);
                                return [2 /*return*/];
                            }
                            if (!haveToken) return [3 /*break*/, 12];
                            return [4 /*yield*/, this.validateToken(this.cre.rsApiToken).toPromise().catch(noop)];
                        case 6:
                            freshCre = _a.sent();
                            if (!freshCre) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.cre.setCurrentUser(freshCre.User)];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, this.cre.setRsApiToken(freshCre.Token)];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 12];
                        case 9: 
                        // console.log('invalid Token set Null');
                        return [4 /*yield*/, this.cre.setCurrentUser(null)];
                        case 10:
                            // console.log('invalid Token set Null');
                            _a.sent();
                            return [4 /*yield*/, this.cre.setRsApiToken(null)];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12:
                            if (!!this.cre.rsApiToken) return [3 /*break*/, 15];
                            return [4 /*yield*/, this.requestAccessToken().toPromise().catch(noop)];
                        case 13:
                            apiUser = _a.sent();
                            if (!apiUser) return [3 /*break*/, 15];
                            return [4 /*yield*/, this.cre.setRsApiToken(apiUser.AccessToken)];
                        case 14:
                            _a.sent();
                            _a.label = 15;
                        case 15:
                            // console.log(this.cre);
                            this.authState$.next(this.cre.currentUser);
                            this.cStore.init();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.authState = function () {
            return this.authState$.asObservable();
        };
        AuthService.prototype.getCurrentUser = function () {
            return this.authState();
        };
        AuthService.prototype.requestAccessToken = function () {
            // console.log('request access token');
            var tokenRequest = {
                Username: ENV.APIUserName,
                Password: ENV.APIPassword
            };
            return this.rsapi.post("/tokens/" + ENV.APIComsumerKey, tokenRequest);
        };
        // valite Token , refresh Token
        AuthService.prototype.validateToken = function (token) {
            var _this = this;
            return this.rsapi.post('/tokens/validate', "\"" + token + "\"").pipe(
            // return this.rsapi.post(`/tokens`, `"${token}"`).pipe(
            operators.switchMap(function (rs) {
                // invalid token
                if (!rs) {
                    return rxjs.of(null);
                }
                // anoymous token
                if (!_this.cre.currentUser || rs.Name == 'UnitedApiUser') {
                    return rxjs.of({ Token: rs.AccessToken, User: null });
                }
                // user token
                return _this.getUser(_this.cre.currentUser.UserID).pipe(operators.map(function (user) {
                    return { Token: rs.AccessToken, User: user };
                }));
                ;
            }), operators.catchError(function () {
                return rxjs.of(null);
            }));
        };
        AuthService.prototype.login = function (accountInfo) {
            var _this = this;
            return this.rsapi.post("/login?un=" + accountInfo.username, '"' + accountInfo.password + '"').pipe(operators.switchMap(function (res) {
                // login failed
                if (!res.User) {
                    // return of({Token: null, User: null, msg: res.Message});
                    throw { statusText: res.Message };
                }
                // login sucess
                return _this.getUser(res.User.UserID).pipe(operators.map(function (user) {
                    return { Token: res.Token, User: user };
                }));
            }), 
            // update current select store to user
            operators.switchMap(function (cre) {
                if (!cre || !_this.cStore.store) {
                    return rxjs.of(cre);
                }
                /*
                 case have cre and have current store,
                 update curent store to current user
                */
                var user = cre.User, store = _this.cStore.store;
                user.StoreID = store.CS_StoreID;
                user.StoreZipCode = store.Zipcode;
                user.StoreName = store.StoreName;
                user.ShopPath = store.ShopPath === "Online" ? "Online" : "InStore";
                return _this.rsapi.put("/users/" + user.UserID, user).pipe(operators.map(function () {
                    return cre;
                }), operators.catchError(function (error) {
                    return rxjs.of(cre);
                }));
            }), operators.switchMap(function (cre) {
                // login false
                // if(!cre.User || !cre.Token){
                // 	throw cre.msg;
                // }
                var o1 = _this.cre.setCurrentUser(cre.User), o2 = _this.cre.setRsApiToken(cre.Token), o3 = _this.cStore.init();
                return rxjs.from([o1, o2, o3]).pipe(operators.switchMap(function () {
                    return o3;
                }), operators.map(function () {
                    _this.authState$.next(_this.cre.currentUser);
                    return cre;
                }));
            }));
        };
        AuthService.prototype.logout = function () {
            return __awaiter(this, void 0, void 0, function () {
                var apiUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // backup perperment settings
                        return [4 /*yield*/, this.pSettings.backup()];
                        case 1:
                            // backup perperment settings
                            _a.sent();
                            return [4 /*yield*/, this.cache.clearAll()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.cre.setCurrentUser(null)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.cStore.setStore(null)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.pSettings.restore()];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, this.requestAccessToken().toPromise().catch(noop)];
                        case 6:
                            apiUser = _a.sent();
                            if (!apiUser) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.cre.setRsApiToken(apiUser.AccessToken)];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8:
                            this.authState$.next(null);
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.getUser = function (userId) {
            var _this = this;
            return this.rsapi.get('/users/' + userId).pipe(operators.tap(function (user) {
                /*
                if(user.ExternalCustomerID){
                    return of(user);
                }
                return this.updateExternalCustomerID(user);
                */
                _this.updateExternalCustomerID(user).pipe(operators.take(1)).subscribe();
            }));
        };
        AuthService.prototype.refreshUser = function () {
            var _this = this;
            return this.getUser(this.cre.currentUser.UserID).pipe(operators.tap(function (user) {
                _this.cre.setCurrentUser(user);
            }));
        };
        AuthService.prototype.getCardDemographic = function (userSRCardID, refresher) {
            var params = {};
            var cacheGroup = 'reward';
            Object.assign(params, refreshParam(refresher, cacheGroup, null));
            return this.rsapi.get("/cards/" + userSRCardID + "/demographic", { params: params });
        };
        AuthService.prototype.updateExternalCustomerID = function (user) {
            try {
                return this.getCardDemographic(user.SRCardID).pipe(operators.map(function (cardDemographic) {
                    if (cardDemographic && cardDemographic.CustomerCode) {
                        user.ExternalCustomerID = cardDemographic.CustomerCode + '';
                        user.Segments = cardDemographic.Segments;
                    }
                    return user;
                }));
            }
            catch (error) {
                return rxjs.of(null);
            }
        };
        AuthService.prototype.sendEmailVerification = function (username) {
            return this.rsapi.post('/email-verification?sender=' + username + '&bannerId=' + ENV.DefaultBanerId, "");
        };
        AuthService.prototype.toogleGuestFlow = function (t) {
            this.underGuestFlow = t;
            // this.cache.saveItem('allow-guest', true,undefined, 3.154e+8); // expired in 10 years;
        };
        AuthService.prototype.isUnderGuestFlow = function () {
            return rxjs.of(this.underGuestFlow);
        };
        // FaceID
        AuthService.prototype.getIsFace = function () {
            return __awaiter(this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cache.getItem('isFace').catch(function () { return (null); })];
                        case 1:
                            value = _a.sent();
                            if (value === null) {
                                value = true;
                            }
                            return [2 /*return*/, value];
                    }
                });
            });
        };
        AuthService.prototype.setIsFace = function (value) {
            var cacheTime = 60 * 60 * 24 * 60; // 60 days
            this.cache.saveItem('isFace', value, null, cacheTime);
        };
        //Notification
        AuthService.prototype.getNotification = function () {
            return __awaiter(this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cache.getItem('setting-notification').catch(function () { return (null); })];
                        case 1:
                            value = _a.sent();
                            if (value === null) {
                                value = true;
                            }
                            return [2 /*return*/, value];
                    }
                });
            });
        };
        AuthService.prototype.setNotification = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var cacheTime;
                return __generator(this, function (_a) {
                    cacheTime = 60 * 60 * 24 * 60;
                    this.cache.saveItem('setting-notification', value, null, cacheTime);
                    return [2 /*return*/];
                });
            });
        };
        return AuthService;
    }());
    exports.ɵb.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new exports.ɵb(i0.ɵɵinject(exports.ɵc), i0.ɵɵinject(exports.ɵd), i0.ɵɵinject(i1.CacheService), i0.ɵɵinject(exports.ɵe), i0.ɵɵinject(i5$1.Network), i0.ɵɵinject(i1$2.Platform), i0.ɵɵinject(exports.ɵg)); }, token: exports.ɵb, providedIn: "root" });
    exports.ɵb = __decorate([
        i0.Injectable({
            providedIn: 'root'
        }),
        __param(0, i0.Inject(exports.ɵc)),
        __param(1, i0.Inject(exports.ɵd)),
        __param(2, i0.Inject(ionicCache.CacheService)),
        __param(3, i0.Inject(exports.ɵe)),
        __param(4, i0.Inject(ngx$3.Network)),
        __param(5, i0.Inject(i1$2.Platform)),
        __param(6, i0.Inject(exports.ɵg))
    ], exports.ɵb);

    exports.ɵa = /** @class */ (function () {
        function TutorialPage(router, route, storage, auth) {
            this.router = router;
            this.route = route;
            this.storage = storage;
            this.auth = auth;
            this.info = {
                version: 1,
                buildNumber: 1,
            };
            var back = this.route.snapshot.paramMap.get('back');
            if (back) {
                this.back = back;
            }
            // this.wellcomeType = navParams.get('wellcomeType');
        }
        TutorialPage.prototype.ionViewWillEnter = function () {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("🚀 ~ file: tutorial.ts ~ line 32 ~ TutorialPage ~ ionViewWillEnter ~ ionViewWillEnter");
                            return [4 /*yield*/, this.auth.authState().pipe(operators.take(1)).toPromise()];
                        case 1:
                            user = _a.sent();
                            console.log("🚀 ~ file: tutorial.ts ~ line 34 ~ TutorialPage ~ ionViewWillEnter ~ user", user);
                            return [2 /*return*/];
                    }
                });
            });
        };
        TutorialPage.prototype.startTour = function () {
            this.isStartTour = true;
        };
        return TutorialPage;
    }());
    exports.ɵa = __decorate([
        i0.Component({
            selector: 'page-tutorial',
            template: "<ion-header>\n    <ion-toolbar class=\"ion-no-line\" [ngClass]=\"{'bg-gray':isStartTour}\">\n        <ion-title>About Our App</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" text=\"\" icon=\"md-close\" color=\"dark\"></ion-back-button>\n            <!-- <ion-button [routerLink]=\"[back]\" *ngIf=\"back\">\n                <ion-icon slot=\"icon-only\" name=\"md-close\" color=\"dark\"></ion-icon>\n            </ion-button> -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content [ngClass]=\"{'bg-gray':isStartTour}\">\n    <div class=\"first-tour\" *ngIf=\"!isStartTour\">\n        <div>\n            <ion-text color=\"secondary\" class=\"ion-text-center\">\n                <h1 class=\"secondary\">\n                    Shop Your Way!\n                </h1>\n            </ion-text>\n            <ion-text color=\"tertiary\" class=\"ion-text-center\">\n                <h4>\n                    Order online or make your list and <br> shop in the store!\n                </h4>\n            </ion-text>\n            <div class=\"image-container ion-text-center\">\n                <img src=\"assets/img/step1-01.png\" />\n            </div>\n            <ion-text class=\"ion-text-center\">\n                <p class=\"ion-margin-bottom ion-no-margin\">\n                    You choose how to shop! <br>\n                    Online pickup & delivery orders <br> or build a list to shop in-store. <br>\n                    It's easy with our new App!\n                </p>\n            </ion-text>\n            <ion-row>\n                <ion-col size=\"5\" offset=\"3.5\">\n                    <ion-button expand=\"block\" color=\"primary\" (click)=\"startTour()\">NEXT</ion-button>\n                </ion-col>\n\n            </ion-row>\n        </div>\n    </div>\n    <div class=\"slides-wrapper\" *ngIf=\"isStartTour\">\n        <ion-slides #slides [pager]=\"true\">\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step2-01.png\" />\n                    </div>\n\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Allow Notifications!\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Turn on notifications so you can receive our <br>\n                            special offers and deals!\n                        </p>\n                    </ion-text>\n                    <!-- <p class=\"title\" style=\"margin-bottom: 0px\">\n                        Our Healthy Rewards app<br />\n                        is getting an update,<br />\n                        making it easier to save, earn,<br />\n                        and live healthy!\n                    </p>\n                    <p class=\"next-img\">Take a tour to learn more!\n                    <p>\n                    <p class=\"begin\">SWIPE TO BEGIN</p> -->\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step3-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            New Rewards Dashboard\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            View your points & rewards. See all offers &<br>\n                            coupons added to your account and access<br>\n                            previous purchases to quickly build your <br>\n                            grocery list or shop online.\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step4-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Shopping Lists\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Search your store for the exact products you<br>\n                            buy. Easily check items off your list while<br>\n                            shopping in the store!\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step5-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Shop Our Weekly Ad\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Love to save? Shop our weekly ad!<br>\n                            Easily add weekly deals right to <br>\n                            your list or cart!\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step6-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Buy Again\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Items you buy most often are right on the<br>\n                            home screen so you can quickly add to<br>\n                            your list or shopping cart for online orders.\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>",
            styles: ["ion-title{color:#666}h1.secondary{color:var(--ion-color-secondary)}.first-tour{float:left;width:100%;height:calc(100% - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0));margin-bottom:10px}.first-tour .image-container{height:40vh}.first-tour .image-container img{height:100%}.bg-gray{--background:#efeff0}.ion-no-margin-top{margin-top:0}ion-slides{height:calc(100vh - 60px - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0))}ion-slide div{height:100%}p{color:#666;font-size:16px}.title{color:var(--ion-color-primary);font-weight:700;font-size:24px}ion-slide:nth-child(2) .next-img{margin-top:0}ion-slide:nth-child(3) .next-img{margin-top:-100px}ion-slide:nth-child(4) .next-img{margin-top:-20px}ion-slide:nth-child(5) .next-img{margin-top:-60px}ion-slide:nth-child(6) .next-img{margin-top:-20px}ion-slide:first-child img{margin-top:0}.begin{color:var(--ion-color-primary);font-weight:700;letter-spacing:2px;margin-bottom:30px}.next-img{margin-top:-30px}ion-slides{--bullet-background:var(--ion-color-primary);--bullet-background-active:var(--ion-color-secondary)}.tapx{color:var(--ion-color-primary);font-size:20px}.slides-wrapper{height:calc(100vh - 260px - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0));margin-bottom:10px}.slides-wrapper .image-container{height:70%}"]
        }),
        __param(0, i0.Inject(router.Router)),
        __param(1, i0.Inject(router.ActivatedRoute)),
        __param(2, i0.Inject(storage.Storage)),
        __param(3, i0.Inject(exports.ɵb))
    ], exports.ɵa);

    /**
     * Generated class for the PhoneFormatPipe pipe.
     *
     * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
     */
    exports.ɵk = /** @class */ (function () {
        function PhoneFormatPipe() {
        }
        PhoneFormatPipe.prototype.transform = function (tel, args) {
            if (!!tel) {
                var value = tel.toString().trim().replace(/^\+/, '');
                if (value.match(/[^0-9]/)) {
                    return tel;
                }
                var country, city, number;
                switch (value.length) {
                    case 10: // +1PPP####### -> C (PPP) ###-####
                        country = 1;
                        city = value.slice(0, 3);
                        number = value.slice(3);
                        break;
                    case 11: // +CPPP####### -> CCC (PP) ###-####
                        country = value[0];
                        city = value.slice(1, 4);
                        number = value.slice(4);
                        break;
                    case 12: // +CCCPP####### -> CCC (PP) ###-####
                        country = value.slice(0, 3);
                        city = value.slice(3, 5);
                        number = value.slice(5);
                        break;
                    default:
                        return tel;
                }
                if (country == 1) {
                    country = "";
                }
                number = number.slice(0, 3) + '-' + number.slice(3);
                return (country + city + "-" + number).trim();
            }
        };
        return PhoneFormatPipe;
    }());
    exports.ɵk = __decorate([
        i0.Pipe({
            name: 'phoneFormat',
        }),
        i0.Injectable()
    ], exports.ɵk);

    exports.ɵl = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        SafeHtmlPipe.prototype.transform = function (value) {
            return this.sanitized.bypassSecurityTrustHtml(value);
        };
        return SafeHtmlPipe;
    }());
    exports.ɵl = __decorate([
        i0.Pipe({ name: 'safeHtml' }),
        __param(0, i0.Inject(platformBrowser.DomSanitizer))
    ], exports.ɵl);

    exports.ɵi = /** @class */ (function () {
        function LearnMore(router, 
        // public state: ActivatedRouteSnapshot,
        modalCtrl) {
            this.router = router;
            this.modalCtrl = modalCtrl;
            this.backUrl = this.router.url;
        }
        return LearnMore;
    }());
    exports.ɵi = __decorate([
        i0.Component({
            selector: 'learn-more',
            template: "<ion-header>\n\t<ion-toolbar class=\"ion-no-line\">\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"modalCtrl.dismiss()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" color=\"dark\" name=\"md-close\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-img style=\"width: 100%; height: 90px; background: transparent !important;\" src=\"assets/imgs/learnMoreLogo.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"ion-text-center\" color=\"secondary\" class=\"cus-headline-1\">Sign Up!</ion-label>\n        <ion-label class=\"ion-text-left\" color=\"color-text\" class=\"cus-lgBody\">Earn and redeem rewards for\n          savings at checkout and the pump,\n          plus enjoy access to online\n          shopping, digital coupons and\n          exclusive clubs.</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"ion-text-center\" color=\"secondary\" class=\"cus-headline-1\">Shop & Earn!</ion-label>\n        <ion-label class=\"ion-text-left\" color=\"color-text\" class=\"cus-lgBody\">Fill your basket and earn a point for\n          every dollar you spend. Gift card*\n          purchases earn double points!</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"ion-text-center\" color=\"secondary\" class=\"cus-headline-1\">Save</ion-label>\n        <ion-label class=\"ion-text-left\" color=\"color-text\" class=\"cus-lgBody\">Automatically earn a Reward for\n          every 100 points. Redeem Rewards\n          for big discounts, free products or\n          up to $1 off per gallon of gas!</ion-label>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row padding-horizontal>\n      <ion-col text-center>\n        <button class=\"cus-lgButton\" ion-button color=\"primary\" round (click)=\"openSignUp()\">SIGN UP</button>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>",
            styles: ["ion-img img{margin-left:auto;margin-right:auto}.btn{width:110px;height:40px}.cus-headline-1{color:var(--ion-color-tertiary)}ion-label{display:block;text-overflow:clip;white-space:normal}.cus-headline-1{padding:0}"]
        }),
        __param(0, i0.Inject(router.Router)),
        __param(1, i0.Inject(i1$2.ModalController))
    ], exports.ɵi);

    exports.ɵh = /** @class */ (function () {
        function GuestMsg(router, 
        // public state: ActivatedRouteSnapshot,
        modalCtrl, navCtrl, events) {
            this.router = router;
            this.modalCtrl = modalCtrl;
            this.navCtrl = navCtrl;
            this.events = events;
            this.backUrl = this.router.url;
        }
        GuestMsg.prototype.goLogin = function () {
            this.modalCtrl.dismiss(true);
            this.events.publishEvent('close-modal');
            this.navCtrl.navigateRoot(['/login', { returnRoute: this.backUrl || '' }]);
        };
        GuestMsg.prototype.goSignup = function () {
            this.modalCtrl.dismiss(true);
            this.events.publishEvent('close-modal');
            this.navCtrl.navigateRoot(['/signup', { returnRoute: this.backUrl || '' }]);
        };
        GuestMsg.prototype.showLearn = function () {
            return __awaiter(this, void 0, void 0, function () {
                var m;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCtrl.create({
                                component: exports.ɵi
                            })];
                        case 1:
                            m = _a.sent();
                            m.present();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return GuestMsg;
    }());
    exports.ɵh = __decorate([
        i0.Component({
            selector: 'guest-msg',
            template: "<ion-header>\n\t<ion-toolbar class=\"ion-no-line\">\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"modalCtrl.dismiss()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" color=\"dark\" name=\"md-close\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<h1>\n\t\tSign up to shop online,<br />\n\t\tcreate lists & more!\n\t</h1>\n\t<p>\n\t\tIn addition to earning and redeeming<br />\n\t\trewards for savings at check out and<br />\n\t\tthe pump, signing up for a Rewards<br />\n\t\taccount allows you to create lists,<br />\n\t\tshop online & access special offers<br />\n\t\tand digital coupons\n\t</p>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button class=\"action\" color=\"secondary\" (click)=\"goLogin()\">LOG IN</ion-button>\n\t\t\t<ion-button class=\"action\" color=\"tertiary\" (click)=\"goSignup()\">SIGN UP</ion-button>\n\t\t</ion-col>\n\t\t<ion-col class=\"ion-text-center guest\" size=\"12\">\n\t      <ion-label (click)=\"showLearn()\" color=\"blue-light\" class=\"learn-more-lbl\">\n\t        Learn more >\n\t      </ion-label>\n\t    </ion-col>\n\t</ion-row>\n</ion-content>",
            styles: [":host{text-align:center}h1{font-size:var(--dxp-fz-huge);color:var(--ion-color-primary);margin-bottom:30px}.learn-more-lbl{display:block;margin-top:30px;color:var(--ion-color-blue-light)}ion-button.action{width:100px}"]
        }),
        __param(0, i0.Inject(router.Router)),
        __param(1, i0.Inject(i1$2.ModalController)),
        __param(2, i0.Inject(i1$2.NavController)),
        __param(3, i0.Inject(i6.NgxPubSubService))
    ], exports.ɵh);

    exports.ɵo = /** @class */ (function () {
        function SkeletonComponent() {
        }
        SkeletonComponent.prototype.ngOnInit = function () {
        };
        SkeletonComponent.prototype.ngOnChanges = function (changes) {
        };
        return SkeletonComponent;
    }());
    exports.ɵo = __decorate([
        i0.Component({
            selector: 'skeleton-component',
            template: "<div class=\"img-wrapper\">\n        <ion-skeleton-text animated class=\"image\"></ion-skeleton-text>\n</div>\n<div class=\"item ion-padding-top\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n</div>\n<div class=\"item\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n</div>\n<div class=\"item\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n</div>",
            styles: [".image{width:90%;height:150px;margin:auto}.item{padding-top:5px}.item ion-skeleton-text{line-height:18px;width:60%;margin:auto}"]
        })
    ], exports.ɵo);

    exports.ɵm = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (html) {
            return this.sanitizer.bypassSecurityTrustStyle('url(\'' + encodeURI(html) + '\')');
        };
        return SafeUrlPipe;
    }());
    exports.ɵm = __decorate([
        i0.Pipe({ name: 'safeUrl' }),
        __param(0, i0.Inject(platformBrowser.DomSanitizer))
    ], exports.ɵm);

    exports.ɵn = /** @class */ (function () {
        function SafeResourceUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeResourceUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SafeResourceUrlPipe;
    }());
    exports.ɵn = __decorate([
        i0.Pipe({ name: 'safeResourceUrl' }),
        __param(0, i0.Inject(platformBrowser.DomSanitizer))
    ], exports.ɵn);

    exports.ɵj = /** @class */ (function () {
        function UtilsModule() {
        }
        return UtilsModule;
    }());
    exports.ɵj = __decorate([
        i0.NgModule({
            declarations: [
                exports.ɵk, exports.ɵl, exports.ɵm, exports.ɵn, exports.ɵh, exports.ɵo, exports.ɵi, exports.ɵp
            ],
            imports: [
                common.CommonModule,
                i1$2.IonicModule
            ],
            entryComponents: [exports.ɵh, exports.ɵi, exports.ɵp],
            exports: [exports.ɵk, exports.ɵl, exports.ɵm, exports.ɵn, exports.ɵh, exports.ɵo, exports.ɵi, exports.ɵp]
        })
    ], exports.ɵj);

    var routes = [
        {
            path: '',
            component: exports.ɵa
        },
    ];
    exports.TutorialModule = /** @class */ (function () {
        function TutorialModule() {
        }
        return TutorialModule;
    }());
    exports.TutorialModule = __decorate([
        i0.NgModule({
            imports: [
                router.RouterModule.forChild(routes),
                common.CommonModule,
                forms.FormsModule,
                i1$2.IonicModule,
                exports.ɵj,
            ],
            declarations: [exports.ɵa]
        })
    ], exports.TutorialModule);

    /*
     * Public API Surface
     */
    // export * from './src/app/modules/header/header.module'
    // export * from './app/modules/header/header.module';

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ShopUnitedSupermarkets.umd.js.map
