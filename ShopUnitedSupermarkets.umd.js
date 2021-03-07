(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/forms'), require('@angular/common'), require('@ionic/angular'), require('@ionic/storage'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ShopUnitedSupermarkets', ['exports', '@angular/core', '@angular/router', '@angular/forms', '@angular/common', '@ionic/angular', '@ionic/storage', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ShopUnitedSupermarkets = {}, global.ng.core, global.ng.router, global.ng.forms, global.ng.common, global.angular, global.storage, global.rxjs));
}(this, (function (exports, i0, router, forms, common, angular, storage, rxjs) { 'use strict';

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

    var LOCAL_STORE_DETAILS_KEY = "LocalStoreDetails";
    var VIEW_STORE_DETAILS_KEY = "ViewStoreDetails";
    exports.ɵb = /** @class */ (function () {
        function CurrentCustomService() {
            this._systemService = new rxjs.BehaviorSubject(-1);
            this._systemService$ = this._systemService.asObservable();
        }
        Object.defineProperty(CurrentCustomService.prototype, "systemServiceId", {
            get: function () {
                return this._systemService.getValue();
            },
            set: function (value) {
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
    exports.ɵb.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CurrentCustomService_Factory() { return new exports.ɵb(); }, token: exports.ɵb, providedIn: "root" });
    exports.ɵb = __decorate([
        i0.Injectable({ providedIn: 'root' })
    ], exports.ɵb);

    exports.ɵa = /** @class */ (function () {
        function TutorialPage(router, route, storage, 
        // @Inject(AuthService) public auth: AuthService,
        currentService) {
            this.router = router;
            this.route = route;
            this.storage = storage;
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
                    console.log("🚀 ~ file: tutorial.ts ~ line 32 ~ TutorialPage ~ ionViewWillEnter ~ ionViewWillEnter");
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
        __param(3, i0.Inject(exports.ɵb))
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
