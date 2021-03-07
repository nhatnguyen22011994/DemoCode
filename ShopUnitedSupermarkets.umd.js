(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/forms'), require('@angular/common'), require('@ionic/angular'), require('@ionic/storage'), require('rxjs/operators'), require('@angular/common/http'), require('ionic-cache/dist/cache.service'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ShopUnitedSupermarkets', ['exports', '@angular/core', '@angular/router', '@angular/forms', '@angular/common', '@ionic/angular', '@ionic/storage', 'rxjs/operators', '@angular/common/http', 'ionic-cache/dist/cache.service', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ShopUnitedSupermarkets = {}, global.ng.core, global.ng.router, global.ng.forms, global.ng.common, global.angular, global.storage, global.rxjs.operators, global.ng.common.http, global.i1, global.rxjs));
}(this, (function (exports, i0, router, forms, common, angular, storage, operators, i1$1, i1, rxjs) { 'use strict';

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
            this.AppVersion = '5.5.7';
            this.AppName = 'UnitedMarket';
            this.CompanyId = '';
            this.ApplicationId = '';
            this.AppBundle = "sysnify.com.dfwrelationshop";
            this.BuildNumber = '557004';
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

    exports.ɵe = /** @class */ (function () {
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
    exports.ɵe.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Credential_Factory() { return new exports.ɵe(i0.ɵɵinject(i1.CacheService)); }, token: exports.ɵe, providedIn: "root" });
    exports.ɵe = __decorate([
        i0.Injectable({
            providedIn: 'root'
        })
    ], exports.ɵe);

    /** reference
        https://medium.com/@admin_87321/extending-angular-httpclient-episode-2-144b58494db4
        https://github.com/bbogdanov/ExtendAngularHttpClient/blob/master/extendHttpClient/src/app/http-client.ts
        https://github.com/angular/angular/issues/20203
    **/
    exports.ɵd = /** @class */ (function (_super) {
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
    exports.ɵd.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RelationshopHttpClient_Factory() { return new exports.ɵd(i0.ɵɵinject(i1$1.HttpHandler), i0.ɵɵinject(exports.ɵe)); }, token: exports.ɵd, providedIn: "root" });
    exports.ɵd = __decorate([
        i0.Injectable({
            providedIn: 'root'
        }),
        __param(0, i0.Inject(i1$1.HttpHandler)),
        __param(1, i0.Inject(exports.ɵe))
    ], exports.ɵd);

    exports.ɵb = /** @class */ (function () {
        function UserServiceModule() {
        }
        return UserServiceModule;
    }());
    exports.ɵb = __decorate([
        i0.NgModule({})
    ], exports.ɵb);
    /**
     * Most apps have the concept of a User. This is a simple provider
     * with stubs for login/signup/etc.
     *
     * This User provider makes calls to our API at the `login` and `signup` endpoints.
     *
     * By default, it expects `login` and `signup` to return a JSON object of the shape:
     *
     * ```json
     * {
     *   status: 'success',
     *   user: {u
     *     // User fields your app needs, like "id", "name", "email", etc.
     *   }
     * }Ø
     * ```
     *
     * If the `status` field is not `success`, then an error is detected and returned.
     */
    exports.ɵc = /** @class */ (function () {
        function User(api) {
            this.api = api;
            this._currentValue = 0;
        }
        /**
         * Send a POST request to our signup endpoint with the data
         * the user entered on the form.
         */
        User.prototype.signup = function (accountInfo) {
            var birthDay = accountInfo.BirthDay;
            if (birthDay) {
                var parts = birthDay.split('/'); //['MM', 'DD', 'YYYY']
                birthDay = [parts[2], parts[0], parts[1]].join('/');
            }
            var newAccount = {
                isReceiveCard: true,
                Email: accountInfo.Email,
                UserEmail: accountInfo.UserEmail,
                Password: accountInfo.Password,
                FirstName: accountInfo.FirstName,
                LastName: accountInfo.LastName,
                Address: accountInfo.Address,
                City: accountInfo.City,
                State: accountInfo.State,
                ZipCode: accountInfo.ZipCode,
                Phone: accountInfo.Phone,
                CellPhone: accountInfo.CellPhone,
                StoreID: accountInfo.StoreID,
                LoyaltyAutoEnroll: accountInfo.LoyaltyAutoEnroll,
                ReceiveEmail: accountInfo.ReceiveEmail,
                ReceiveTextMessage: accountInfo.ReceiveTextMessage,
                SRCardID: accountInfo.SRCardID,
                BannerID: ENV.DefaultBanerId
            };
            var seq = this.api.post('/users', newAccount);
            // seq.subscribe((res: any) => {
            //   // If the API returned a successful response, mark the user as logged in
            //   console.log('SIGHUP', res);
            // }, err => {
            //   console.error('ERROR', err);
            // });
            return seq;
        };
        User.prototype.updateUserProfile = function (username, profile, value) {
            var body = '"' + value + '"';
            return this.api.put("/profile/" + profile + "?", body, { params: { username: username } });
        };
        User.prototype.validateUser = function (email, phone, firstName, lastName, username) {
            var user = {
                Email: email,
                Phone: phone,
                FirstName: firstName,
                LastName: lastName,
                UserName: username //email of userRO
            };
            var seq = this.api.post('/users/validate', user);
            return seq;
        };
        User.prototype.getUserById = function (userId) {
            return this.api.get('/users/' + userId);
        };
        User.prototype.forgotUserName = function (email) {
            return this.api.post('/ForgotUserName', {}, { params: { email: email, bannerid: ENV.DefaultBanerId + '' } });
        };
        User.prototype.forgotPassWord = function (email) {
            return this.api.post('/ForgotPassword/email', {}, { params: { email: email, bannerid: ENV.DefaultBanerId + '' } });
        };
        User.prototype.updateUserById = function (user) {
            var _this = this;
            var birthDay = user.BirthDay;
            if (birthDay) {
                var parts = birthDay.split('/'); //['MM', 'DD', 'YYYY']
                birthDay = [parts[2], parts[0], parts[1]].join('/');
            }
            var userConvert = {
                Address: user.Address,
                ApplicationKey: user.ApplicationKey,
                BannerHost: user.BannerHost,
                BannerID: user.BannerID,
                BannerName: user.BannerName,
                BirthDay: birthDay,
                CellPhone: user.CellPhone,
                ChangedUserName: user.ChangedUserName,
                City: user.City,
                CreatedDate: user.CreatedDate,
                Email: user.Email,
                ExternalCustomerCardID: user.ExternalCustomerCardID,
                ExternalCustomerID: user.ExternalCustomerID,
                FirstName: user.FirstName,
                IsAuthorized: user.IsAuthorized,
                IsLockedOut: user.IsLockedOut,
                LastLoginDate: user.LastLoginDate,
                LastName: user.LastName,
                LastPasswordChangeDate: user.LastPasswordChangeDate,
                LastUpdatedByUser: user.LastUpdatedByUser,
                LastUpdatedDate: user.LastUpdatedDate,
                ListRoles: user.ListRoles,
                LoyaltyAutoEnroll: user.LoyaltyAutoEnroll,
                MiddleName: user.MiddleName,
                Password: user.Password,
                Phone: user.Phone,
                ReceiveEmail: user.ReceiveEmail,
                ReceivePostalMail: user.ReceivePostalMail,
                ReceiveTextMessage: user.ReceiveTextMessage,
                SRCardID: user.SRCardID,
                SecondaryCellPhone: user.SecondaryCellPhone,
                State: user.State,
                StoreID: user.StoreID,
                StoreManagerID: user.StoreManagerID,
                StoreName: user.StoreName,
                StoreZipCode: user.StoreZipCode,
                Token: user.Token,
                UserEmail: user.UserEmail,
                UserID: user.UserID,
                ZipCode: user.ZipCode,
                ShopPath: user.ShopPath
            };
            return this.api.put("/users/" + userConvert.UserID, userConvert)
                .pipe(operators.tap(function () {
                _this.setUserCache(user.UserID).subscribe();
            }));
        };
        User.prototype.setUserCache = function (userId) {
            var url = "/cache/SetUserCache?key=cs.user:QRY:session_current_user:" + userId;
            return this.api.post(url, null);
        };
        User.prototype.updatePassword = function (email, oldPassword, newPassword) {
            var passwordBody = {
                Email: email,
                OldPassword: oldPassword,
                NewPassword: newPassword
            };
            return this.api.put('/users/password', passwordBody);
        };
        User.prototype.searchUsersByField = function (field, val) {
            var params = {
                field: field,
                value: val
            };
            return this.api.get('/users', { params: { field: params.field, value: params.value } });
        };
        User.prototype.checkUserExists = function (email, currentUsername) {
            return this.api.get("/users/email/" + email + "/v5", { params: { un: currentUsername || '' } });
        };
        User.prototype.updateUserName = function (username, newUsername, pwd) {
            var body = '"' + pwd + '"';
            return this.api.post('/users/change-username/v5', body, { params: { username: username, newUsername: newUsername } });
        };
        User.prototype.getAddresses = function (userId) {
            return this.api.get('/users/contacts/user', { params: { userId: userId } });
        };
        User.prototype.getAddressesById = function (contactId) {
            return this.api.get('/users/contact', { params: { contactId: contactId } });
        };
        User.prototype.updateAddress = function (address) {
            var body = {
                CS_ContactID: address.CS_ContactID,
                Address: address.Address,
                City: address.City,
                Country: null,
                Email: null,
                ExternalId: null,
                Fax: null,
                FirstName: address.FirstName,
                LastName: address.LastName,
                MobilePhone: address.MobilePhone,
                Note: null,
                OrderNumber: null,
                Phone: null,
                SecondaryPhone: address.SecondaryPhone || null,
                State: address.State,
                Title: null,
                UserID: address.UserID,
                ZipCode: address.ZipCode,
                IsBilling: address.IsBilling,
                IsDelivery: address.IsDelivery
            };
            return this.api.post('/users/contact/update', body);
        };
        User.prototype.addAddress = function (address) {
            var body = {
                CS_ContactID: null,
                Address: address.Address,
                City: address.City,
                Country: null,
                Email: null,
                ExternalId: null,
                Fax: null,
                FirstName: address.FirstName,
                LastName: address.LastName,
                MobilePhone: address.MobilePhone,
                Note: null,
                OrderNumber: null,
                Phone: null,
                SecondaryPhone: null,
                State: address.State,
                Title: null,
                UserID: address.userId,
                ZipCode: address.ZipCode,
                IsBilling: address.IsBilling,
                IsDelivery: address.IsDelivery
            };
            return this.api.post('/users/contact/add', body);
        };
        User.prototype.setStore = function (user, store, shopPath) {
            var data = {
                UserEmail: user.UserEmail,
                Email: user.Email,
                UserID: user.UserID,
                StoreID: store.CS_StoreID,
                StoreZipCode: store.Zipcode,
                StoreName: store.StoreName
            };
            if (shopPath) {
                data.ShopPath = shopPath === "Online" ? "Online" : "InStore";
            }
            console.log(store);
            return this.api.put("/users/" + data.UserID + "/UpdateShoppingMode", data);
        };
        // ToDo: should move to shoppinglist provider
        // getActiveShoppingList(user, store, refresher?) {
        //   let url = ENV.EComHost + '/shopping-list/active';
        //   // return this.apiWrapper.getCache(url, { userId: user.ExternalCustomerCardID, storeId: store.ExternalID }, { refresher: refresher || false });
        // }
        // region Earth Fare functions
        User.prototype.sendOtpEmail = function (email) {
            return this.api.get("/user/sendotpemail?email=" + email + "&bannerId=" + ENV.DefaultBanerId);
        };
        User.prototype.validateOtpEmail = function (email, code) {
            return this.api.get("/user/validateotp?email=" + email + "&otp=" + code);
        };
        User.prototype.getLoyaltyMembers = function (email) {
            return this.api.get("/user/GetLoyaltyRegMember?email=" + email);
        };
        User.prototype.getCardInfo = function (card) {
            return this.api.get("/cards/" + card + "/demographic");
        };
        // check card in loyaly
        User.prototype.checkCard = function (card) {
            // return this.api.get(`/user/VerifyLoyaltyRegMember?cardId=${card.cardId}&lastName=trang`)
            var url = "/user/VerifyLoyaltyRegMember?cardId=" + card.cardId;
            if (card.lastName) {
                url += "&lastName=" + card.lastName;
            }
            return this.api.get(url);
        };
        // check card is linked account
        User.prototype.isUsedCard = function (card) {
            return this.api.get("/users/card/" + card + "?un=");
        };
        User.prototype.getUserByCard = function (card) {
            return this.api.get("/user-card/" + card);
        };
        User.prototype.sendSupportEmail = function (obj) {
            Object.assign(obj, { BannerID: ENV.DefaultBanerId });
            return this.api.post('/feedbacks', obj);
        };
        User.prototype.linkCard = function (user, card) {
            return this.api.post("/users/" + user.Email + "/relink", card);
        };
        User.prototype.getBirthTreat = function (userId) {
            return this.api.get("/loyalty/club/" + userId + "?type=BirthTreat");
        };
        User.prototype.updateBirthTreat = function (username, children) {
            var params = {
                username: username,
                Options: {
                    IsReceivedLetter: false,
                    FamilyMembers: JSON.stringify(children)
                }
            };
            return this.api.post("/loyalty/enrollclub?type=BirthTreat", params);
        };
        User.prototype.getInterestClub = function (username) {
            return this.api.get("/profile/InterestClub?username=" + username);
        };
        User.prototype.updateInterestClub = function (username, pets) {
            var params = JSON.stringify(pets);
            params = params.replace(/\"/g, '\\"');
            console.log('updateInterestClub params', params);
            return this.api.put("/profile/InterestClub?username=" + username, '"' + params + '"');
        };
        User.prototype.changePassword = function (username, newPassword) {
            return this.api.post("/users/set-password?username=" + username, '"' + newPassword + '"');
        };
        return User;
    }());
    exports.ɵc.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function User_Factory() { return new exports.ɵc(i0.ɵɵinject(exports.ɵd)); }, token: exports.ɵc, providedIn: exports.ɵb });
    exports.ɵc = __decorate([
        i0.Injectable({
            providedIn: exports.ɵb
        })
    ], exports.ɵc);

    var LOCAL_STORE_DETAILS_KEY = "LocalStoreDetails";
    var VIEW_STORE_DETAILS_KEY = "ViewStoreDetails";
    exports.ɵf = /** @class */ (function () {
        function CurrentCustomService() {
            this._systemService = new rxjs.BehaviorSubject(-1);
            this._systemService$ = this._systemService.asObservable();
        }
        Object.defineProperty(CurrentCustomService.prototype, "systemServiceId", {
            get: function () {
                console.log("setSystemService external code");
                return this._systemService.getValue();
            },
            set: function (value) {
                console.log("getSystemService external code");
                this._systemService.next(value);
            },
            enumerable: true,
            configurable: true
        });
        CurrentCustomService.prototype.setSystemService = function (value) {
            this.systemServiceId = value;
        };
        CurrentCustomService.prototype.getSystemService = function () {
            return this.systemServiceId;
        };
        return CurrentCustomService;
    }());
    exports.ɵf.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CurrentCustomService_Factory() { return new exports.ɵf(); }, token: exports.ɵf, providedIn: "root" });
    exports.ɵf = __decorate([
        i0.Injectable({ providedIn: 'root' })
    ], exports.ɵf);

    exports.ɵa = /** @class */ (function () {
        function TutorialPage(router, route, storage, 
        // @Inject(AuthService) public auth: AuthService,
        user, currentService) {
            this.router = router;
            this.route = route;
            this.storage = storage;
            this.user = user;
            this.currentService = currentService;
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
                return __generator(this, function (_a) {
                    console.log("🚀 ~ file: tutorial.ts ~ line 32 ~ TutorialPage ~ ionViewWillEnter ~ ionViewWillEnter", this.user);
                    // const user = await this.auth.authState().pipe(take(1)).toPromise();
                    console.log("🚀 ~ file: tutorial.ts ~ line 34 ~ TutorialPage ~ ionViewWillEnter ~ user", this.currentService.systemServiceId);
                    return [2 /*return*/];
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
        __param(3, i0.Inject(exports.ɵc)),
        __param(4, i0.Inject(exports.ɵf))
    ], exports.ɵa);

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
                angular.IonicModule,
                exports.ɵb,
            ],
            declarations: [exports.ɵa]
        })
    ], exports.TutorialModule);

    /*
     * Public API Surface
     */
    // export * from './app/modules/online-order/providers/current-custom-service.service';
    // export * from './src/app/modules/header/header.module'
    // export * from './app/modules/header/header.module';

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ShopUnitedSupermarkets.umd.js.map
