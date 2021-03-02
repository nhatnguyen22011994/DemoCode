(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/forms'), require('@angular/common'), require('@ionic/angular'), require('@ionic/storage')) :
    typeof define === 'function' && define.amd ? define('ShopUnitedSupermarkets', ['exports', '@angular/core', '@angular/router', '@angular/forms', '@angular/common', '@ionic/angular', '@ionic/storage'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ShopUnitedSupermarkets = {}, global.ng.core, global.ng.router, global.ng.forms, global.ng.common, global.angular, global.storage));
}(this, (function (exports, core, router, forms, common, angular, storage) { 'use strict';

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

    exports.ɵa = /** @class */ (function () {
        function TutorialPage(router, route, storage) {
            this.router = router;
            this.route = route;
            this.storage = storage;
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
        core.Component({
            selector: 'page-tutorial',
            template: "<ion-header>\n    <ion-toolbar class=\"ion-no-line\" [ngClass]=\"{'bg-gray':isStartTour}\">\n        <ion-title>About Our App</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" text=\"\" icon=\"md-close\" color=\"dark\"></ion-back-button>\n            <!-- <ion-button [routerLink]=\"[back]\" *ngIf=\"back\">\n                <ion-icon slot=\"icon-only\" name=\"md-close\" color=\"dark\"></ion-icon>\n            </ion-button> -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content [ngClass]=\"{'bg-gray':isStartTour}\">\n    <div class=\"first-tour\" *ngIf=\"!isStartTour\">\n        <div>\n            <ion-text color=\"secondary\" class=\"ion-text-center\">\n                <h1 class=\"secondary\">\n                    Shop Your Way!\n                </h1>\n            </ion-text>\n            <ion-text color=\"tertiary\" class=\"ion-text-center\">\n                <h4>\n                    Order online or make your list and <br> shop in the store!\n                </h4>\n            </ion-text>\n            <div class=\"image-container ion-text-center\">\n                <img src=\"assets/img/step1-01.png\" />\n            </div>\n            <ion-text class=\"ion-text-center\">\n                <p class=\"ion-margin-bottom ion-no-margin\">\n                    You choose how to shop! <br>\n                    Online pickup & delivery orders <br> or build a list to shop in-store. <br>\n                    It's easy with our new App!\n                </p>\n            </ion-text>\n            <ion-row>\n                <ion-col size=\"5\" offset=\"3.5\">\n                    <ion-button expand=\"block\" color=\"primary\" (click)=\"startTour()\">NEXT</ion-button>\n                </ion-col>\n\n            </ion-row>\n        </div>\n    </div>\n    <div class=\"slides-wrapper\" *ngIf=\"isStartTour\">\n        <ion-slides #slides [pager]=\"true\">\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step2-01.png\" />\n                    </div>\n\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Allow Notifications!\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Turn on notifications so you can receive our <br>\n                            special offers and deals!\n                        </p>\n                    </ion-text>\n                    <!-- <p class=\"title\" style=\"margin-bottom: 0px\">\n                        Our Healthy Rewards app<br />\n                        is getting an update,<br />\n                        making it easier to save, earn,<br />\n                        and live healthy!\n                    </p>\n                    <p class=\"next-img\">Take a tour to learn more!\n                    <p>\n                    <p class=\"begin\">SWIPE TO BEGIN</p> -->\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step3-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            New Rewards Dashboard\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            View your points & rewards. See all offers &<br>\n                            coupons added to your account and access<br>\n                            previous purchases to quickly build your <br>\n                            grocery list or shop online.\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step4-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Shopping Lists\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Search your store for the exact products you<br>\n                            buy. Easily check items off your list while<br>\n                            shopping in the store!\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step5-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Shop Our Weekly Ad\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Love to save? Shop our weekly ad!<br>\n                            Easily add weekly deals right to <br>\n                            your list or cart!\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <div class=\"image-container ion-text-center\">\n                        <img src=\"assets/img/step6-01.png\" />\n                    </div>\n                    <ion-text color=\"secondary\" class=\"ion-text-center\">\n                        <h1 class=\"secondary ion-no-margin-top\">\n                            Buy Again\n                        </h1>\n                    </ion-text>\n                    <ion-text class=\"ion-text-center\">\n                        <p class=\"ion-margin-bottom ion-no-margin\">\n                            Items you buy most often are right on the<br>\n                            home screen so you can quickly add to<br>\n                            your list or shopping cart for online orders.\n                        </p>\n                    </ion-text>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>",
            styles: ["ion-title{color:#666}h1.secondary{color:var(--ion-color-secondary)}.first-tour{float:left;width:100%;height:calc(100% - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0));margin-bottom:10px}.first-tour .image-container{height:40vh}.first-tour .image-container img{height:100%}.bg-gray{--background:#efeff0}.ion-no-margin-top{margin-top:0}ion-slides{height:calc(100vh - 60px - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0))}ion-slide div{height:100%}p{color:#666;font-size:16px}.title{color:var(--ion-color-primary);font-weight:700;font-size:24px}ion-slide:nth-child(2) .next-img{margin-top:0}ion-slide:nth-child(3) .next-img{margin-top:-100px}ion-slide:nth-child(4) .next-img{margin-top:-20px}ion-slide:nth-child(5) .next-img{margin-top:-60px}ion-slide:nth-child(6) .next-img{margin-top:-20px}ion-slide:first-child img{margin-top:0}.begin{color:var(--ion-color-primary);font-weight:700;letter-spacing:2px;margin-bottom:30px}.next-img{margin-top:-30px}ion-slides{--bullet-background:var(--ion-color-primary);--bullet-background-active:var(--ion-color-secondary)}.tapx{color:var(--ion-color-primary);font-size:20px}.slides-wrapper{height:calc(100vh - 260px - var(--ion-safe-area-top, 0) - var(--ion-safe-area-bottom, 0));margin-bottom:10px}.slides-wrapper .image-container{height:70%}"]
        }),
        __param(0, core.Inject(router.Router)),
        __param(1, core.Inject(router.ActivatedRoute)),
        __param(2, core.Inject(storage.Storage))
    ], exports.ɵa);

    /**
     * Generated class for the PhoneFormatPipe pipe.
     *
     * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
     */
    exports.ɵe = /** @class */ (function () {
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
    exports.ɵe = __decorate([
        core.Pipe({
            name: 'phoneFormat',
        }),
        core.Injectable()
    ], exports.ɵe);

    exports.ɵf = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        SafeHtmlPipe.prototype.transform = function (value) {
            return this.sanitized.bypassSecurityTrustHtml(value);
        };
        return SafeHtmlPipe;
    }());
    exports.ɵf = __decorate([
        core.Pipe({ name: 'safeHtml' })
    ], exports.ɵf);

    exports.ɵc = /** @class */ (function () {
        function LearnMore(router, 
        // public state: ActivatedRouteSnapshot,
        modalCtrl) {
            this.router = router;
            this.modalCtrl = modalCtrl;
            this.backUrl = this.router.url;
        }
        return LearnMore;
    }());
    exports.ɵc = __decorate([
        core.Component({
            selector: 'learn-more',
            template: "<ion-header>\n\t<ion-toolbar class=\"ion-no-line\">\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"modalCtrl.dismiss()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" color=\"dark\" name=\"md-close\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-padding-horizontal\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-img style=\"width: 100%; height: 90px; background: transparent !important;\" src=\"assets/imgs/learnMoreLogo.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"ion-text-center\" color=\"secondary\" class=\"cus-headline-1\">Sign Up!</ion-label>\n        <ion-label class=\"ion-text-left\" color=\"color-text\" class=\"cus-lgBody\">Earn and redeem rewards for\n          savings at checkout and the pump,\n          plus enjoy access to online\n          shopping, digital coupons and\n          exclusive clubs.</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"ion-text-center\" color=\"secondary\" class=\"cus-headline-1\">Shop & Earn!</ion-label>\n        <ion-label class=\"ion-text-left\" color=\"color-text\" class=\"cus-lgBody\">Fill your basket and earn a point for\n          every dollar you spend. Gift card*\n          purchases earn double points!</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"ion-text-center\" color=\"secondary\" class=\"cus-headline-1\">Save</ion-label>\n        <ion-label class=\"ion-text-left\" color=\"color-text\" class=\"cus-lgBody\">Automatically earn a Reward for\n          every 100 points. Redeem Rewards\n          for big discounts, free products or\n          up to $1 off per gallon of gas!</ion-label>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row padding-horizontal>\n      <ion-col text-center>\n        <button class=\"cus-lgButton\" ion-button color=\"primary\" round (click)=\"openSignUp()\">SIGN UP</button>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>",
            styles: ["ion-img img{margin-left:auto;margin-right:auto}.btn{width:110px;height:40px}.cus-headline-1{color:var(--ion-color-tertiary)}ion-label{display:block;text-overflow:clip;white-space:normal}.cus-headline-1{padding:0}"]
        })
    ], exports.ɵc);

    exports.ɵb = /** @class */ (function () {
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
                                component: exports.ɵc
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
    exports.ɵb = __decorate([
        core.Component({
            selector: 'guest-msg',
            template: "<ion-header>\n\t<ion-toolbar class=\"ion-no-line\">\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"modalCtrl.dismiss()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" color=\"dark\" name=\"md-close\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<h1>\n\t\tSign up to shop online,<br />\n\t\tcreate lists & more!\n\t</h1>\n\t<p>\n\t\tIn addition to earning and redeeming<br />\n\t\trewards for savings at check out and<br />\n\t\tthe pump, signing up for a Rewards<br />\n\t\taccount allows you to create lists,<br />\n\t\tshop online & access special offers<br />\n\t\tand digital coupons\n\t</p>\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button class=\"action\" color=\"secondary\" (click)=\"goLogin()\">LOG IN</ion-button>\n\t\t\t<ion-button class=\"action\" color=\"tertiary\" (click)=\"goSignup()\">SIGN UP</ion-button>\n\t\t</ion-col>\n\t\t<ion-col class=\"ion-text-center guest\" size=\"12\">\n\t      <ion-label (click)=\"showLearn()\" color=\"blue-light\" class=\"learn-more-lbl\">\n\t        Learn more >\n\t      </ion-label>\n\t    </ion-col>\n\t</ion-row>\n</ion-content>",
            styles: [":host{text-align:center}h1{font-size:var(--dxp-fz-huge);color:var(--ion-color-primary);margin-bottom:30px}.learn-more-lbl{display:block;margin-top:30px;color:var(--ion-color-blue-light)}ion-button.action{width:100px}"]
        })
    ], exports.ɵb);

    exports.ɵi = /** @class */ (function () {
        function SkeletonComponent() {
        }
        SkeletonComponent.prototype.ngOnInit = function () {
        };
        SkeletonComponent.prototype.ngOnChanges = function (changes) {
        };
        return SkeletonComponent;
    }());
    exports.ɵi = __decorate([
        core.Component({
            selector: 'skeleton-component',
            template: "<div class=\"img-wrapper\">\n        <ion-skeleton-text animated class=\"image\"></ion-skeleton-text>\n</div>\n<div class=\"item ion-padding-top\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n</div>\n<div class=\"item\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n</div>\n<div class=\"item\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n</div>",
            styles: [".image{width:90%;height:150px;margin:auto}.item{padding-top:5px}.item ion-skeleton-text{line-height:18px;width:60%;margin:auto}"]
        })
    ], exports.ɵi);

    exports.ɵg = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (html) {
            return this.sanitizer.bypassSecurityTrustStyle('url(\'' + encodeURI(html) + '\')');
        };
        return SafeUrlPipe;
    }());
    exports.ɵg = __decorate([
        core.Pipe({ name: 'safeUrl' })
    ], exports.ɵg);

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

    exports.ɵj = /** @class */ (function () {
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
        core.Input()
    ], exports.ɵj.prototype, "url", void 0);
    __decorate([
        core.Input()
    ], exports.ɵj.prototype, "title", void 0);
    exports.ɵj = __decorate([
        core.Component({
            selector: "iframe-modal",
            template: "<ion-header class=\"\">\n    <ion-toolbar>\n        <ion-title>{{title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"modalCtrl.dismiss()\">\n                <ion-icon color=\"dark\" name=\"md-close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"online-order-content\">\n    <ng-container *ngIf=\"url\">\n        <iframe [src]=\"url | safeResourceUrl\"></iframe>\n    </ng-container>\n</ion-content>",
            styles: ["ion-title{padding:0 70px}h3{color:var(--online-order-primary-color);text-align:center;font-weight:700;margin:0}.txt-confirm{color:var(--online-order-blue)}.txt-confirm ion-label{font-weight:700}.link{color:var(--online-order-link-color);display:flex;align-items:center;justify-content:center}ion-label{font-size:14px}.online-order-content iframe{display:block;width:100%;height:100%;border:none}"]
        })
    ], exports.ɵj);

    exports.ɵh = /** @class */ (function () {
        function SafeResourceUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeResourceUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SafeResourceUrlPipe;
    }());
    exports.ɵh = __decorate([
        core.Pipe({ name: 'safeResourceUrl' })
    ], exports.ɵh);

    exports.ɵd = /** @class */ (function () {
        function UtilsModule() {
        }
        return UtilsModule;
    }());
    exports.ɵd = __decorate([
        core.NgModule({
            declarations: [
                exports.ɵe, exports.ɵf, exports.ɵg, exports.ɵh, exports.ɵb, exports.ɵi, exports.ɵc, exports.ɵj
            ],
            imports: [
                common.CommonModule,
                angular.IonicModule
            ],
            entryComponents: [exports.ɵb, exports.ɵc, exports.ɵj],
            exports: [exports.ɵe, exports.ɵf, exports.ɵg, exports.ɵh, exports.ɵb, exports.ɵi, exports.ɵc, exports.ɵj]
        })
    ], exports.ɵd);

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
        core.NgModule({
            imports: [
                router.RouterModule.forChild(routes),
                common.CommonModule,
                forms.FormsModule,
                angular.IonicModule,
                exports.ɵd,
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
