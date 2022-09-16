"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newList_newList_module_ts"],{

/***/ 7631:
/*!***************************************************!*\
  !*** ./src/app/newList/newList-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewListPageRoutingModule": () => (/* binding */ NewListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _newList_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newList.page */ 8540);




const routes = [
    {
        path: '',
        component: _newList_page__WEBPACK_IMPORTED_MODULE_0__.NewListPage
    }
];
let NewListPageRoutingModule = class NewListPageRoutingModule {
};
NewListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewListPageRoutingModule);



/***/ }),

/***/ 6366:
/*!*******************************************!*\
  !*** ./src/app/newList/newList.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewListPageModule": () => (/* binding */ NewListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _newList_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newList-routing.module */ 7631);
/* harmony import */ var _newList_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newList.page */ 8540);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);








let NewListPageModule = class NewListPageModule {
};
NewListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newList_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_newList_page__WEBPACK_IMPORTED_MODULE_1__.NewListPage]
    })
], NewListPageModule);



/***/ }),

/***/ 8540:
/*!*****************************************!*\
  !*** ./src/app/newList/newList.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModel": () => (/* binding */ ListModel),
/* harmony export */   "NewListPage": () => (/* binding */ NewListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _newList_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newList.page.html?ngResource */ 618);
/* harmony import */ var _newList_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newList.page.scss?ngResource */ 7609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);








let NewListPage = class NewListPage {
    constructor(alertController, database, router, translate) {
        this.alertController = alertController;
        this.database = database;
        this.router = router;
        this.translate = translate;
        this.list = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getTranslations();
            this.title = null;
        });
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            delete this.list;
            delete this.title;
        });
    }
    getTranslations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.translate
                .get("translations.newListPage")
                .subscribe((translation) => {
                this.emptyListTranslation = translation.emptyList;
            });
        });
    }
    filterEntry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var filteredEntries = this.list.filter(this.deleteEmptyEntry);
            this.list = filteredEntries;
        });
    }
    deleteEmptyEntry(obj) {
        if ("item" in obj && typeof obj.item === "string" && obj.item != "") {
            return true;
        }
        else {
            return false;
        }
    }
    saveButton() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.filterEntry();
            var arrayLength = this.list.length;
            if (arrayLength > 0) {
                let data = new ListModel(this.title, this.list, Date.now());
                yield this.database.Insert(Date.now(), data).then(() => {
                    data = null;
                    this.list = [];
                    this.goToHomePage();
                });
            }
            else {
                this.msgAlertOK(this.emptyListTranslation);
            }
        });
    }
    msgAlertOK(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Alert",
                message: message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
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
};
NewListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
NewListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-newList",
        template: _newList_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_newList_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewListPage);

class ListModel {
    constructor(title, myList, createdat) {
        this.title = title;
        this.myLists = myList;
        this.createdat = createdat;
    }
}


/***/ }),

/***/ 7609:
/*!******************************************************!*\
  !*** ./src/app/newList/newList.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".buttonAlign {\n  top: calc(80% - 0px);\n  left: calc(70% - 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld0xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6Im5ld0xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbkFsaWduIHtcclxuICAgIHRvcDogY2FsYyg4MCUgLSAwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg3MCUgLSAwcHgpO1xyXG4gIH1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 618:
/*!******************************************************!*\
  !*** ./src/app/newList/newList.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title\r\n      >{{ 'translations.newListPage.pageTitle' | translate }}</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">\r\n      {{ 'translations.notesPagesGeneral.notesTitle' | translate }}\r\n    </ion-label>\r\n    <ion-input\r\n      placeholder=\"{{ 'translations.notesPagesGeneral.placeHolderTitle' | translate }}\"\r\n      [(ngModel)]=\"title\"\r\n      autocapitalize=\"true\"\r\n    >\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item-divider> </ion-item-divider>\r\n\r\n  <ion-item *ngFor=\"let att of list; let idx = index\" class=\"item-text-wrap\">\r\n    <ion-col size=\"1\">\r\n      <ion-checkbox [(ngModel)]=\"list[idx].isDone\"></ion-checkbox>\r\n    </ion-col>\r\n\r\n    <ion-input\r\n      placeholder=\"{{ 'translations.notesPagesGeneral.inputPlaceHolder' | translate }}\"\r\n      type=\"text\"\r\n      text-right\r\n      required\r\n      [(ngModel)]=\"list[idx].item\"\r\n      autocapitalize=\"true\"\r\n    ></ion-input>\r\n\r\n    <ion-button color=\"danger\" (click)=\"RemoveItem(idx)\">X</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-fab slot=\"fixed\" class=\"buttonAlign\">\r\n    <ion-fab-button (click)=\"Add()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-button color=\"primary\" (click)=\"goToHomePage()\">\r\n        <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>{{\r\n        'translations.notesPagesGeneral.backButton' | translate }}\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col> </ion-col>\r\n\r\n    <ion-col>\r\n      <ion-button color=\"success\" (click)=\"saveButton()\" type=\"submit\">\r\n        {{ 'translations.notesPagesGeneral.saveButton' | translate }}\r\n        <ion-icon name=\"add-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_newList_newList_module_ts.js.map