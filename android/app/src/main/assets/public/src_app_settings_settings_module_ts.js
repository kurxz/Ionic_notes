"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 1836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsPageRoutingModule": () => (/* binding */ settingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.settingsPage
    }
];
let settingsPageRoutingModule = class settingsPageRoutingModule {
};
settingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], settingsPageRoutingModule);



/***/ }),

/***/ 7075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsPageModule": () => (/* binding */ settingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 1836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);








let settingsPageModule = class settingsPageModule {
};
settingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.settingsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.settingsPage]
    })
], settingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsPage": () => (/* binding */ settingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 5375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _services_languages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/languages.service */ 3340);
/*
               _____            _        _   _       _
              |_   _|          (_)      | \ | |     | |
                | |  ___  _ __  _  ___  |  \| | ___ | |_ ___  ___
                | | / _ \| '_ \| |/ __| | . ` |/ _ \| __/ _ \/ __|
               _| || (_) | | | | | (__  | |\  | (_) | ||  __/\__ \
              |_____\___/|_| |_|_|\___| |_| \_|\___/ \__\___||___/

             
   Copyright [2021] [KurXZ] [https:github.com/kurxz]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

    http:www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/








let settingsPage = class settingsPage {
    constructor(alertController, database, translate, languageservice) {
        this.alertController = alertController;
        this.database = database;
        this.translate = translate;
        this.languageservice = languageservice;
        this.languagesArray = [
            {
                langName: "Português Brasil",
                code: "pt",
            },
            {
                langName: "English",
                code: "en",
            },
            {
                langName: "Español",
                code: "es",
            },
            {
                langName: "Italiano",
                code: "it",
            },
        ];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getTranslations();
            yield this.updateLangFromDB();
        });
    }
    ionViewWillEnter() {
        this.languageservice.defaultLang();
    }
    updateLangFromDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.database.getLang().then((langCode) => {
                this.langfromDB = langCode;
            });
        });
    }
    doRefresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.updateLangFromDB();
            yield this.getTranslations();
            yield this.translate.use(this.langfromDB || 'en');
            setTimeout(() => { }, 1000);
        });
    }
    getTranslations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.translate
                .get("translations.settingsPage")
                .subscribe((translation) => {
                this.resetText = translation.resetText;
                this.langSetTo = translation.langSetTo;
                this.contributors = translation.contributorsText;
            });
            yield this.translate
                .get("translations.general")
                .subscribe((translation) => {
                this.alert = translation.alert;
                this.yesAnswer = translation.yesAnswer;
                this.noAnswer = translation.noAnswer;
            });
        });
    }
    warningReset() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getTranslations().then((fuction) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: "my-custom-class",
                    header: this.alert,
                    message: this.resetText,
                    buttons: [
                        {
                            text: this.yesAnswer,
                            role: "cancel",
                            cssClass: "secondary",
                            handler: () => {
                                this.database.resetDatabase();
                            },
                        },
                        {
                            text: this.noAnswer,
                            handler: () => { },
                        },
                    ],
                });
                yield alert.present();
            }));
        });
    }
    langSet(langcode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let languageCode = langcode.detail.value;
            yield this.database.setLang(languageCode);
            yield this.getTranslations();
            this.langSetAlert(languageCode);
        });
    }
    contributorsAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getTranslations().then((fuction) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: "my-custom-class",
                    header: this.contributors + " :)",
                    message: "Lucyferinna uwu - Español",
                    buttons: ["OK"],
                });
                yield alert.present();
            }));
        });
    }
    langSetAlert(langcode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var fullnameofLang = "";
            switch (langcode) {
                case "pt":
                    fullnameofLang = "Português Brasil";
                    break;
                case "en":
                    fullnameofLang = "English";
                    break;
                case "es":
                    fullnameofLang = "Español";
                    break;
                case "it":
                    fullnameofLang = "Italiano";
                    break;
                default:
                    break;
            }
            if (this.langfromDB != langcode) {
                const alert = yield this.alertController.create({
                    cssClass: "my-custom-class",
                    header: this.alert,
                    message: this.langSetTo + ": " + fullnameofLang,
                    buttons: ["OK"],
                });
                yield alert.present();
                yield this.doRefresh();
                yield alert.onDidDismiss();
            }
        });
    }
};
settingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _services_languages_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService }
];
settingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-config",
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], settingsPage);



/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!--\r\n               _____            _        _   _       _            \r\n              |_   _|          (_)      | \\ | |     | |           \r\n                | |  ___  _ __  _  ___  |  \\| | ___ | |_ ___  ___ \r\n                | | / _ \\| '_ \\| |/ __| | . ` |/ _ \\| __/ _ \\/ __|\r\n               _| || (_) | | | | | (__  | |\\  | (_) | ||  __/\\__ \\\r\n              |_____\\___/|_| |_|_|\\___| |_| \\_|\\___/ \\__\\___||___/\r\n\r\n             \r\n   Copyright [2021] [KurXZ] [https:github.com/kurxz]\r\n\r\n   Licensed under the Apache License, Version 2.0 (the \"License\");\r\n   you may not use this file except in compliance with the License.\r\n   You may obtain a copy of the License at\r\n\r\n    http:www.apache.org/licenses/LICENSE-2.0\r\n\r\n   Unless required by applicable law or agreed to in writing, software\r\n   distributed under the License is distributed on an \"AS IS\" BASIS,\r\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n   See the License for the specific language governing permissions and\r\n   limitations under the License.       \r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title\r\n      >{{ 'translations.settingsPage.pageTitle' | translate }}</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n  <ion-list>\r\n    <ion-item>\r\n      <h2>{{ 'translations.settingsPage.appOptions' | translate }}</h2>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label\r\n        >{{ 'translations.settingsPage.languageSelect' | translate }}</ion-label\r\n      >\r\n      <ion-icon name=\"language-outline\"></ion-icon>\r\n      <ion-select value=\"{{ this.langfromDB }}\" (ionChange)=\"langSet($event)\">\r\n\r\n      <span *ngFor=\"let languages of languagesArray\"> \r\n        <ion-select-option value=\"{{ languages.code }}\"> {{ languages.langName }} </ion-select-option>\r\n      </span>\r\n\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item>\r\n          <h2>{{ 'translations.settingsPage.aboutTitle' | translate }}</h2>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ 'translations.settingsPage.aboutText' | translate }}\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"ion-text-wrap\"> Ver: 1.5.5 </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list>\r\n        <ion-item>\r\n          <h2>Links</h2>\r\n        </ion-item>\r\n\r\n        <ion-item href=\"https://github.com/kurxz/Ionic_notes/\">\r\n          <ion-label>\r\n            {{ 'translations.settingsPage.githubCode' | translate }}\r\n          </ion-label>\r\n          <ion-icon name=\"logo-github\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item href=\"https://www.ionicframework.com\">\r\n          <ion-label> Ionic Framework </ion-label>\r\n          <ion-icon name=\"logo-ionic\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-button color=\"primary\" (click)=\"contributorsAlert()\">\r\n            {{ 'translations.settingsPage.contributorsText' | translate }}\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n\r\n    <ion-list>\r\n      <ion-item>\r\n        <h2>{{ 'translations.settingsPage.dangerZone' | translate }}</h2>\r\n      </ion-item>\r\n\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-button\r\n            color=\"danger\"\r\n            (click)=\"warningReset()\"\r\n            class=\"ion-text-wrap\"\r\n          >\r\n            {{ 'translations.settingsPage.resetAppButton' | translate }}\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-list>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map