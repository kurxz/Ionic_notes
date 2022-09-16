"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_viewAndEditList_viewAndEditList_module_ts"],{

/***/ 363:
/*!*******************************************************************!*\
  !*** ./src/app/viewAndEditList/viewAndEditList-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAndEditListPageRoutingModule": () => (/* binding */ ViewAndEditListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _viewAndEditList_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewAndEditList.page */ 163);




const routes = [
    {
        path: '',
        component: _viewAndEditList_page__WEBPACK_IMPORTED_MODULE_0__.ViewAndEditListPage
    }
];
let ViewAndEditListPageRoutingModule = class ViewAndEditListPageRoutingModule {
};
ViewAndEditListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewAndEditListPageRoutingModule);



/***/ }),

/***/ 6522:
/*!***********************************************************!*\
  !*** ./src/app/viewAndEditList/viewAndEditList.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAndEditListPageModule": () => (/* binding */ ViewAndEditListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _viewAndEditList_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewAndEditList-routing.module */ 363);
/* harmony import */ var _viewAndEditList_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewAndEditList.page */ 163);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);








let ViewAndEditListPageModule = class ViewAndEditListPageModule {
};
ViewAndEditListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viewAndEditList_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewAndEditListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_viewAndEditList_page__WEBPACK_IMPORTED_MODULE_1__.ViewAndEditListPage]
    })
], ViewAndEditListPageModule);



/***/ }),

/***/ 163:
/*!*********************************************************!*\
  !*** ./src/app/viewAndEditList/viewAndEditList.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAndEditListPage": () => (/* binding */ ViewAndEditListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _viewAndEditList_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewAndEditList.page.html?ngResource */ 718);
/* harmony import */ var _viewAndEditList_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewAndEditList.page.scss?ngResource */ 6312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
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









let ViewAndEditListPage = class ViewAndEditListPage {
    constructor(route, router, alertController, database, translate) {
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.database = database;
        this.translate = translate;
        this.list = null;
        this.getTranslations();
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state != null) {
                this.data = null;
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.id = this.data.id;
                this.created = this.data.created;
                this.oldList = this.data.list;
                this.title = this.oldList.title;
                this.created = this.data.list.createdat;
                yield this.oldListToNew();
            }
            else {
                this.goToHomePage();
            }
        }));
    }
    ngOnDestroy() {
        delete this.data;
        delete this.id;
        delete this.list;
        delete this.oldList;
        delete this.created;
        delete this.id;
        delete this.title;
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
    oldListToNew() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.list = [];
            var arraySize = this.oldList.myLists.length;
            for (var i = 0; i < arraySize; i++) {
                this.list.push({
                    item: this.oldList.myLists[i].item,
                    isDone: this.oldList.myLists[i].isDone,
                });
            }
        });
    }
    filterEntry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var filteredEntries = this.list.filter(this.deleteEmptyEntry);
            this.list = filteredEntries;
        });
    }
    deleteEmptyEntry(obj) {
        if ("item" in obj && typeof obj.item === "string" && obj.item !== "") {
            return true;
        }
        else {
            return false;
        }
    }
    Add() {
        this.list.push({ item: "", isDone: false });
    }
    RemoveItem(index) {
        this.list.splice(index, 1);
    }
    goToHomePage() {
        this.router.navigate(["/home"]);
    }
    Update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var arrayLength = this.list.length;
            if (arrayLength > 0) {
                yield this.filterEntry();
                let data = {
                    title: this.title,
                    myLists: this.list,
                    createdat: this.created,
                    edited: Date.now(),
                };
                yield this.database.Insert(this.id, data);
                this.goToHomePage();
            }
            else {
            }
        });
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
                            this.goToHomePage();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    msgAlertOK(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Alert",
                message: message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    formatDates(date) {
        var result = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("D MMMM YYYY, h:mm:ss a");
        return result;
    }
};
ViewAndEditListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
ViewAndEditListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-viewAndEditList",
        template: _viewAndEditList_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_viewAndEditList_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewAndEditListPage);



/***/ }),

/***/ 6312:
/*!**********************************************************************!*\
  !*** ./src/app/viewAndEditList/viewAndEditList.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".buttonAlign {\n  top: calc(80% - 0px);\n  left: calc(70% - 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdBbmRFZGl0TGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoidmlld0FuZEVkaXRMaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25BbGlnbiB7XHJcbiAgICB0b3A6IGNhbGMoODAlIC0gMHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNzAlIC0gMHB4KTtcclxuICB9XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 718:
/*!**********************************************************************!*\
  !*** ./src/app/viewAndEditList/viewAndEditList.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<!-- \r\n               _____            _        _   _       _            \r\n              |_   _|          (_)      | \\ | |     | |           \r\n                | |  ___  _ __  _  ___  |  \\| | ___ | |_ ___  ___ \r\n                | | / _ \\| '_ \\| |/ __| | . ` |/ _ \\| __/ _ \\/ __|\r\n               _| || (_) | | | | | (__  | |\\  | (_) | ||  __/\\__ \\\r\n              |_____\\___/|_| |_|_|\\___| |_| \\_|\\___/ \\__\\___||___/\r\n\r\n             \r\n   Copyright [2021] [KurXZ] [https:github.com/kurxz]\r\n\r\n   Licensed under the Apache License, Version 2.0 (the \"License\");\r\n   you may not use this file except in compliance with the License.\r\n   You may obtain a copy of the License at\r\n\r\n    http:www.apache.org/licenses/LICENSE-2.0\r\n\r\n   Unless required by applicable law or agreed to in writing, software\r\n   distributed under the License is distributed on an \"AS IS\" BASIS,\r\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n   See the License for the specific language governing permissions and\r\n   limitations under the License.    \r\n\r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title\r\n      >{{ 'translations.viewAndEditList.pageTitle' | translate }}</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Title</ion-label>\r\n    <ion-input\r\n      placeholder=\"{{ 'translations.notesPagesGeneral.placeHolderTitle' | translate }}\"\r\n      [(ngModel)]=\"title\"\r\n      autocapitalize=\"true\"\r\n    >\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item-divider>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"ion-text-start\">\r\n          {{ 'translations.notesPagesGeneral.created' | translate }}: {{ formatDates(created) }}\r\n        </div>\r\n      </ion-col>\r\n      <ion-col> </ion-col>\r\n      <ion-col *ngIf=\"data.list.edited != null\">\r\n        <div class=\"ion-text-center\">\r\n          {{ 'translations.notesPagesGeneral.edited' | translate }}: {{ formatDates(data.list.edited) }}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item-divider>\r\n\r\n  <ion-item *ngFor=\"let att of list; let idx = index\" class=\"item-text-wrap\">\r\n    <ion-col size=\"1\">\r\n      <ion-checkbox [(ngModel)]=\"list[idx].isDone\"></ion-checkbox>\r\n    </ion-col>\r\n\r\n    <ion-input\r\n      *ngIf=\"list[idx].isDone == true ; else itemIsNotDone\"\r\n      style=\"text-decoration: line-through\"\r\n      placeholder=\"LISTA\"\r\n      type=\"text\"\r\n      text-right\r\n      required\r\n      [(ngModel)]=\"list[idx].item\"\r\n      autocapitalize=\"true\"\r\n    ></ion-input>\r\n\r\n    <ng-template #itemIsNotDone>\r\n      <ion-input\r\n        placeholder=\" {{ 'translations.notesPagesGeneral.inputPlaceHolder' | translate }} \"\r\n        type=\"text\"\r\n        text-right\r\n        required\r\n        [(ngModel)]=\"list[idx].item\"\r\n        autocapitalize=\"true\"\r\n      ></ion-input>\r\n\r\n\r\n    </ng-template>\r\n\r\n    <ion-button color=\"danger\" (click)=\"RemoveItem(idx)\">X</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-fab slot=\"fixed\" class=\"buttonAlign\">\r\n    <ion-fab-button (click)=\"Add()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-row style=\"display: flex; justify-content: space-between\">\r\n    <div>\r\n      <ion-button size=\"small\" color=\"primary\" (click)=\"goToHomePage()\">\r\n        <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>{{\r\n        'translations.notesPagesGeneral.backButton' | translate }}\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-button size=\"small\" color=\"danger\" (click)=\"Delete()\">\r\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>{{\r\n        'translations.notesPagesGeneral.deleteButton' | translate }}\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-button size=\"small\" color=\"success\" (click)=\"Update()\"\r\n        >{{ 'translations.notesPagesGeneral.saveButton' | translate }}\r\n        <ion-icon name=\"add-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </ion-row>\r\n \r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_viewAndEditList_viewAndEditList_module_ts.js.map