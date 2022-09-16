"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_viewAndEdit_viewAndEdit_module_ts"],{

/***/ 3084:
/*!***********************************************************!*\
  !*** ./src/app/viewAndEdit/viewAndEdit-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewAndEditPageRoutingModule": () => (/* binding */ viewAndEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _viewAndEdit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewAndEdit.page */ 2273);




const routes = [
    {
        path: '',
        component: _viewAndEdit_page__WEBPACK_IMPORTED_MODULE_0__.viewAndEditPage
    }
];
let viewAndEditPageRoutingModule = class viewAndEditPageRoutingModule {
};
viewAndEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], viewAndEditPageRoutingModule);



/***/ }),

/***/ 5235:
/*!***************************************************!*\
  !*** ./src/app/viewAndEdit/viewAndEdit.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewAndEditPageeModule": () => (/* binding */ viewAndEditPageeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _viewAndEdit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewAndEdit-routing.module */ 3084);
/* harmony import */ var _viewAndEdit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewAndEdit.page */ 2273);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);








let viewAndEditPageeModule = class viewAndEditPageeModule {
};
viewAndEditPageeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viewAndEdit_routing_module__WEBPACK_IMPORTED_MODULE_0__.viewAndEditPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_viewAndEdit_page__WEBPACK_IMPORTED_MODULE_1__.viewAndEditPage]
    })
], viewAndEditPageeModule);



/***/ }),

/***/ 2273:
/*!*************************************************!*\
  !*** ./src/app/viewAndEdit/viewAndEdit.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewAndEditPage": () => (/* binding */ viewAndEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _viewAndEdit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewAndEdit.page.html?ngResource */ 2389);
/* harmony import */ var _viewAndEdit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewAndEdit.page.scss?ngResource */ 3877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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









let viewAndEditPage = class viewAndEditPage {
    constructor(route, router, database, alertController, translate) {
        this.route = route;
        this.router = router;
        this.database = database;
        this.alertController = alertController;
        this.translate = translate;
        this.id = null;
        this.edited = null;
        this.getTranslations();
    }
    getTranslations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.translate
                .get("translations.viewAndEditPage")
                .subscribe((translation) => {
                this.alertText = translation.alertText;
            });
            yield this.translate
                .get("translations.general")
                .subscribe((translation) => {
                this.yesAnswer = translation.yesAnswer;
                this.noAnswer = translation.noAnswer;
                this.alert = translation.alert;
            });
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state != null) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.id = this.data.id;
                this.newTitle = this.data.note.title;
                this.newText = this.data.note.text;
                this.created = this.data.note.createdat;
                this.edited = this.data.note.edited;
            }
            else {
                this.router.navigate(["/home"]);
            }
        });
    }
    ionViewWillLeave() {
        delete this.data;
        delete this.id;
        delete this.newTitle;
        delete this.newText;
        delete this.created;
        delete this.edited;
    }
    goToHomePage() {
        this.router.navigate(["/home"]);
    }
    Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: this.alert,
                message: this.alertText,
                buttons: [
                    {
                        text: this.noAnswer,
                        role: "cancel",
                        cssClass: "secondary",
                    },
                    {
                        text: this.yesAnswer,
                        handler: () => {
                            this.database.Delete(this.id);
                            this.router.navigate(["/home"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    Update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = {
                title: this.newTitle,
                text: this.newText,
                createdat: this.created,
                edited: Date.now(),
            };
            this.database.Update(this.id, data);
            this.router.navigate(["/home"]);
        });
    }
    formatDates(date) {
        var result = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("D MMMM YYYY, h:mm:ss a");
        return result;
    }
};
viewAndEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
viewAndEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-visualizar",
        template: _viewAndEdit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_viewAndEdit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], viewAndEditPage);



/***/ }),

/***/ 3877:
/*!**************************************************************!*\
  !*** ./src/app/viewAndEdit/viewAndEdit.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3QW5kRWRpdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2389:
/*!**************************************************************!*\
  !*** ./src/app/viewAndEdit/viewAndEdit.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!--\r\n               _____            _        _   _       _            \r\n              |_   _|          (_)      | \\ | |     | |           \r\n                | |  ___  _ __  _  ___  |  \\| | ___ | |_ ___  ___ \r\n                | | / _ \\| '_ \\| |/ __| | . ` |/ _ \\| __/ _ \\/ __|\r\n               _| || (_) | | | | | (__  | |\\  | (_) | ||  __/\\__ \\\r\n              |_____\\___/|_| |_|_|\\___| |_| \\_|\\___/ \\__\\___||___/\r\n\r\n             \r\n   Copyright [2021] [KurXZ] [https:github.com/kurxz]\r\n\r\n   Licensed under the Apache License, Version 2.0 (the \"License\");\r\n   you may not use this file except in compliance with the License.\r\n   You may obtain a copy of the License at\r\n\r\n    http:www.apache.org/licenses/LICENSE-2.0\r\n\r\n   Unless required by applicable law or agreed to in writing, software\r\n   distributed under the License is distributed on an \"AS IS\" BASIS,\r\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n   See the License for the specific language governing permissions and\r\n   limitations under the License.       \r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'translations.viewAndEditPage.pageTitle' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n<div class=\"container\">\r\n  \r\n  <ion-item-divider> \r\n  \r\n   \r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">{{ 'translations.notesPagesGeneral.notesTitle' | translate }}</ion-label>\r\n    <ion-input placeholder=\"{{ 'translations.notesPagesGeneral.placeHolderTitle' | translate }}\" [(ngModel)]=\"newTitle\" autocapitalize=\"true\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item-divider> \r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"ion-text-start\">\r\n          {{ 'translations.notesPagesGeneral.created' | translate }}: {{ formatDates(created) }}\r\n        </div>\r\n      </ion-col>\r\n      <ion-col> </ion-col>\r\n  \r\n      <ion-col *ngIf=\"edited != null\">\r\n        <div class=\"ion-text-center\">\r\n          {{ 'translations.notesPagesGeneral.edited' | translate }}: {{ formatDates(edited) }}\r\n        </div>\r\n        \r\n      </ion-col>\r\n  \r\n    </ion-row>  \r\n    \r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">{{ 'translations.notesPagesGeneral.notesDescription' | translate }}</ion-label>\r\n    <ion-textarea placeholder=\"{{ 'translations.notesPagesGeneral.placeHolderDescription' | translate }}\" rows=\"10\"\r\n      [(ngModel)]=\"newText\" autocomplete=\"true\">\r\n    </ion-textarea>\r\n  </ion-item>\r\n\r\n</div>\r\n \r\n</ion-content>\r\n\r\n<ion-footer>\r\n \r\n<ion-row style=\"display: flex;  justify-content: space-between;\">\r\n  <div>\r\n  \r\n      <ion-button size=\"small\" color=\"primary\" (click)=\"goToHomePage()\" >\r\n        <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon> {{ 'translations.notesPagesGeneral.backButton' |\r\n        translate }}\r\n      </ion-button>\r\n  \r\n  </div>\r\n  \r\n<div>\r\n\r\n    <ion-button size=\"small\" color=\"danger\" (click)=\"Delete()\">\r\n      <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>{{ 'translations.notesPagesGeneral.deleteButton' |\r\n      translate }}\r\n    </ion-button>\r\n\r\n</div>\r\n\r\n  <div>\r\n    <ion-button size=\"small\" color=\"success\" (click)=\"Update()\">\r\n      <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon> {{ 'translations.notesPagesGeneral.saveButton' | translate\r\n      }}\r\n    </ion-button>\r\n  </div>\r\n</ion-row>\r\n \r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_viewAndEdit_viewAndEdit_module_ts.js.map