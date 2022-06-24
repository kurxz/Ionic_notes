"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newNote_newNote_module_ts"],{

/***/ 4627:
/*!***************************************************!*\
  !*** ./src/app/newNote/newNote-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newNoteRoutingModule": () => (/* binding */ newNoteRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _newNote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newNote.page */ 9772);




const routes = [
    {
        path: '',
        component: _newNote_page__WEBPACK_IMPORTED_MODULE_0__.newNote
    }
];
let newNoteRoutingModule = class newNoteRoutingModule {
};
newNoteRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], newNoteRoutingModule);



/***/ }),

/***/ 3422:
/*!*******************************************!*\
  !*** ./src/app/newNote/newNote.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newNotePageModule": () => (/* binding */ newNotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _newNote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newNote-routing.module */ 4627);
/* harmony import */ var _newNote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newNote.page */ 9772);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);









let newNotePageModule = class newNotePageModule {
};
newNotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newNote_routing_module__WEBPACK_IMPORTED_MODULE_0__.newNoteRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.IonicStorageModule.forRoot()
        ],
        declarations: [_newNote_page__WEBPACK_IMPORTED_MODULE_1__.newNote]
    })
], newNotePageModule);



/***/ }),

/***/ 9772:
/*!*****************************************!*\
  !*** ./src/app/newNote/newNote.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteModel": () => (/* binding */ NoteModel),
/* harmony export */   "newNote": () => (/* binding */ newNote)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _newNote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newNote.page.html?ngResource */ 7702);
/* harmony import */ var _newNote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newNote.page.scss?ngResource */ 447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
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






let newNote = class newNote {
    constructor(route, database) {
        this.route = route;
        this.database = database;
    }
    ngOnInit() { }
    homePage() {
        this.route.navigate(["/home"]);
    }
    ionViewWillLeave() {
        delete this.text;
        delete this.title;
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.text == undefined) {
            }
            else {
                let data = new NoteModel(this.title, this.text, Date.now());
                yield this.database.Insert(Date.now().toString(), data).then(() => {
                    data = null;
                    this.homePage();
                });
            }
        });
    }
};
newNote.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
newNote = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-nota",
        template: _newNote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_newNote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], newNote);

class NoteModel {
    constructor(title, text, createdat) {
        this.title = title;
        this.text = text;
        this.createdat = createdat;
    }
}


/***/ }),

/***/ 447:
/*!******************************************************!*\
  !*** ./src/app/newNote/newNote.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdOb3RlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7702:
/*!******************************************************!*\
  !*** ./src/app/newNote/newNote.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!--\r\n               _____            _        _   _       _            \r\n              |_   _|          (_)      | \\ | |     | |           \r\n                | |  ___  _ __  _  ___  |  \\| | ___ | |_ ___  ___ \r\n                | | / _ \\| '_ \\| |/ __| | . ` |/ _ \\| __/ _ \\/ __|\r\n               _| || (_) | | | | | (__  | |\\  | (_) | ||  __/\\__ \\\r\n              |_____\\___/|_| |_|_|\\___| |_| \\_|\\___/ \\__\\___||___/\r\n\r\n             \r\n   Copyright [2021] [KurXZ] [https:github.com/kurxz]\r\n\r\n   Licensed under the Apache License, Version 2.0 (the \"License\");\r\n   you may not use this file except in compliance with the License.\r\n   You may obtain a copy of the License at\r\n\r\n    http:www.apache.org/licenses/LICENSE-2.0\r\n\r\n   Unless required by applicable law or agreed to in writing, software\r\n   distributed under the License is distributed on an \"AS IS\" BASIS,\r\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n   See the License for the specific language governing permissions and\r\n   limitations under the License.       \r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">\r\n        {{ 'translations.newNotePage.pageTitle' | translate }}\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"ion-align-self-start\">\r\n      <ion-item-divider> </ion-item-divider>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\"\r\n          >{{ 'translations.notesPagesGeneral.notesTitle' | translate }}</ion-label\r\n        >\r\n        <ion-input\r\n          placeholder=\"{{ 'translations.notesPagesGeneral.placeHolderTitle' | translate }}\"\r\n          [(ngModel)]=\"title\"\r\n        >\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item-divider> </ion-item-divider>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\"\r\n          > {{ 'translations.notesPagesGeneral.notesDescription' | translate }}\r\n        </ion-label>\r\n        <ion-textarea\r\n          placeholder=\"{{ 'translations.notesPagesGeneral.placeHolderDescription' | translate }}\"\r\n          rows=\"10\"\r\n          [(ngModel)]=\"text\"\r\n        ></ion-textarea>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-button color=\"primary\" (click)=\"homePage()\">\r\n        <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>{{\r\n        'translations.notesPagesGeneral.backButton' | translate }}\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col> </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"success\" (click)=\"save()\">\r\n        <ion-icon name=\"add-outline\" slot=\"end\"></ion-icon> {{\r\n        'translations.notesPagesGeneral.saveButton' | translate }}\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_newNote_newNote_module_ts.js.map