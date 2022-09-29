"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 7152:
/*!**************************************!*\
  !*** ./src/app/Pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FilterPipe = class FilterPipe {
    transform(data, args) {
        if (!data || !args) {
            return data;
        }
        var filteredData = data.filter((element) => {
            args = args.toLowerCase();
            if (element.list.text != null &&
                element.list.text.toLowerCase().includes(args)) {
                return true;
            }
            if (element.list.myLists != null) {
                return element.list.myLists.some((data) => {
                    if (data.item.toLowerCase().includes(args)) {
                        return true;
                    }
                });
            }
        });
        return filteredData;
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "filter",
    })
], FilterPipe);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pipes/filter.pipe */ 7152);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8610);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _services_languages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/languages.service */ 3340);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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









let HomePage = class HomePage {
    constructor(route, database, languageservice, translate) {
        this.route = route;
        this.database = database;
        this.languageservice = languageservice;
        this.translate = translate;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.listNotes = yield this.database.listAll();
            this.listNotes = yield this.database.showList();
            let amoutOfItems = yield this.database.returnNotesCount();
            if (amoutOfItems == 0 || amoutOfItems == undefined || amoutOfItems == 1) {
                this.notes = 0;
            }
            else {
                this.notes = 1;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ionViewWillEnter() {
        this.languageservice.defaultLang();
        this.listAll();
    }
    viewDetails(id, item) {
        var info = null;
        info = {
            id: id,
            note: item,
        };
        let navigationExtras = {
            state: {
                data: info,
            },
        };
        this.route.navigate(["viewAndEdit"], navigationExtras);
        navigationExtras = null;
    }
    viewDetailsOfList(id, list) {
        var info = null;
        info = {
            id: id,
            list: list,
        };
        let navigationExtras = null;
        navigationExtras = {
            state: {
                data: info,
            },
        };
        this.route.navigate(["viewAndEditList"], navigationExtras);
        navigationExtras = null;
    }
    doRefresh(event) {
        this.listAll();
        this.languageservice.defaultLang();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    countSinceDate(date) {
        var result = moment__WEBPACK_IMPORTED_MODULE_4__(date).fromNow();
        return result;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _services_languages_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-home",
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  left: 0;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.checkboxStyle {\n  display: flex;\n  align-items: center;\n}\n\nion-card {\n  max-height: 200px;\n  display: flex;\n  flex-direction: column;\n}\n\n.noNotes {\n  height: 100px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\nion-searchbar {\n  --background: var(--ion-color-light) !important;\n  --border-radius: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0FBREYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tib3hTdHlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubm9Ob3RlcyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiBcclxufSJdfQ== */";

/***/ }),

/***/ 8610:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!--\r\n               _____            _        _   _       _            \r\n              |_   _|          (_)      | \\ | |     | |           \r\n                | |  ___  _ __  _  ___  |  \\| | ___ | |_ ___  ___ \r\n                | | / _ \\| '_ \\| |/ __| | . ` |/ _ \\| __/ _ \\/ __|\r\n               _| || (_) | | | | | (__  | |\\  | (_) | ||  __/\\__ \\\r\n              |_____\\___/|_| |_|_|\\___| |_| \\_|\\___/ \\__\\___||___/\r\n\r\n             \r\n   Copyright [2021] [KurXZ] [https:github.com/kurxz]\r\n\r\n   Licensed under the Apache License, Version 2.0 (the \"License\");\r\n   you may not use this file except in compliance with the License.\r\n   You may obtain a copy of the License at\r\n\r\n    http:www.apache.org/licenses/LICENSE-2.0\r\n\r\n   Unless required by applicable law or agreed to in writing, software\r\n   distributed under the License is distributed on an \"AS IS\" BASIS,\r\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n   See the License for the specific language governing permissions and\r\n   limitations under the License.       \r\n-->\r\n\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title> Notes </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"has-header\" [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Notes</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div id=\"container\">\r\n    <ion-searchbar animated [(ngModel)]=\"searchContext\"></ion-searchbar>\r\n    <div>\r\n      <div *ngIf=\"notes >  0 ; else no_notesFound\">\r\n        <ion-row *ngFor=\"let item of listNotes | filter: searchContext \">\r\n          <ion-col>\r\n            <div *ngIf=\"item.list.text != null  ; else isList\">\r\n              <ion-card>\r\n                <ion-item (click)=\"viewDetails(item.id, item.list)\">\r\n                  <ion-label>\r\n                    <span id=\"title\"> {{ item.list.title }} </span>\r\n                    <p id=\"text\">{{ item.list.text }}</p>\r\n                  </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-label\r\n                  *ngIf=\"item.list.createdat != null\"\r\n                  class=\"ion-text-center\"\r\n                >\r\n                  {{ 'translations.notesPagesGeneral.created' | translate }} {{\r\n                  countSinceDate(item.list.createdat) }}\r\n                </ion-label>\r\n              </ion-card>\r\n            </div>\r\n\r\n            <ng-template #isList>\r\n              <ion-card (click)=\"viewDetailsOfList(item.id, item.list)\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    {{ item.list.title }}\r\n\r\n                    <div *ngFor=\"let arrayList of item.list.myLists\">\r\n                      <div float-left class=\"checkboxStyle\">\r\n                        <ion-checkbox\r\n                          item-right\r\n                          checked=\"{{ arrayList.isDone }}\"\r\n                        >\r\n                        </ion-checkbox>\r\n\r\n                        <div *ngIf=\"arrayList.isDone == true ; else notDone\">\r\n                          <ion-label style=\"text-decoration: line-through\">\r\n                            <ion-col size=\"1\"> </ion-col>\r\n\r\n                            {{ arrayList.item }}\r\n                          </ion-label>\r\n                        </div>\r\n\r\n                        <ng-template #notDone>\r\n                          <ion-label>\r\n                            <ion-col size=\"1\"> </ion-col>\r\n                            {{ arrayList.item }}\r\n                          </ion-label>\r\n                        </ng-template>\r\n                      </div>\r\n                    </div>\r\n                  </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-label>\r\n                  <ion-col size=\"1\" *ngIf=\"item.list.myLists.length > 3 ; \">\r\n                    {{ 'translations.homePage.andOthers' | translate }}\r\n                    <span style=\"font-weight: bold\">\r\n                      {{ item.list.myLists.length -3 }}\r\n                    </span>\r\n                    -\r\n                  </ion-col>\r\n                  {{ 'translations.notesPagesGeneral.created' | translate }} {{\r\n                  countSinceDate(item.list.createdat) }}\r\n                </ion-label>\r\n              </ion-card>\r\n            </ng-template>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <ng-template #no_notesFound>\r\n        <div class=\"noNotes\">\r\n          {{ 'translations.homePage.noNotes' | translate }}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map