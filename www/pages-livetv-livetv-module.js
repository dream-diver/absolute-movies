(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-livetv-livetv-module"],{

/***/ "./src/app/pages/livetv/livetv.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/livetv/livetv.module.ts ***!
  \***********************************************/
/*! exports provided: LivetvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetvPageModule", function() { return LivetvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _livetv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./livetv.page */ "./src/app/pages/livetv/livetv.page.ts");







var routes = [
    {
        path: '',
        component: _livetv_page__WEBPACK_IMPORTED_MODULE_6__["LivetvPage"]
    }
];
var LivetvPageModule = /** @class */ (function () {
    function LivetvPageModule() {
    }
    LivetvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_livetv_page__WEBPACK_IMPORTED_MODULE_6__["LivetvPage"]]
        })
    ], LivetvPageModule);
    return LivetvPageModule;
}());



/***/ }),

/***/ "./src/app/pages/livetv/livetv.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/livetv/livetv.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n        <img src=\"../../../assets/img/logo-200.png\" height=\"35\">\r\n      </ion-buttons>\r\n    <ion-title>বাংলাদেশী লাইভ টিভি</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <!-- <p>\r\n    <ion-chip color=\"dark\" expand=\"full\"\r\n    *ngFor=\"let c of tvChannels\" (click)=goToChannel(c.url)>\r\n        <ion-avatar>\r\n          <img src='{{\"../../../assets/img/tv-logos/\" + c.logo}}'>\r\n        </ion-avatar>\r\n        <ion-label color=\"success\">{{c.channelName}}</ion-label>\r\n      </ion-chip>\r\n  </p> -->\r\n\r\n      <div class=\"container \">\r\n        <!-- ionic grid starts -->\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\" *ngFor=\"let m of movies\" >\r\n              <ion-card (click)=\"openModal(m.name,m.frame)\" style=\"margin:auto\">\r\n               <ion-card-content style=\"padding: 0 0 12px;\">\r\n                 <div [innerHTML]=\"m.imagehtml\"></div>\r\n                  <!-- <ion-card-subtitle color=\"dark\" *ngIf=\"result.title.rendered\">{{result.title.rendered}}\r\n                  </ion-card-subtitle> -->\r\n\r\n                  <!-- <ion-card-title>Card Title</ion-card-title> -->\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n<!--        <ion-card (click)=\"openModal()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>\r\n          </ion-card-subtitle>\r\n          <ion-grid style=\"margin-left: 2em;margin-right: 1em;\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <img alt=\"Fast &amp; Furious Presents: Hobbs &amp; Shaw\" class=\"thumb mli-thumb lazy\" data-original=\"https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg\" title=\"Fast &amp; Furious Presents: Hobbs &amp; Shaw\" src=\"https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg\" style=\"display: block;\">\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-header>\r\n      </ion-card> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/livetv/livetv.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/livetv/livetv.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #fe8c00; }\n\nion-content {\n  --ion-background-color:#232122; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGl2ZXR2L0Q6XFxOT0RFSlMgQVBQXFxJb25pYzRcXGFic29sdXRlLW1vdmllcy9zcmNcXGFwcFxccGFnZXNcXGxpdmV0dlxcbGl2ZXR2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBRUksOEJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXZldHYvbGl2ZXR2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZlOGMwMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMjMyMTIyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/livetv/livetv.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/livetv/livetv.page.ts ***!
  \*********************************************/
/*! exports provided: LivetvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetvPage", function() { return LivetvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _example_modal_example_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../example-modal/example-modal.page */ "./src/app/pages/example-modal/example-modal.page.ts");






var LivetvPage = /** @class */ (function () {
    function LivetvPage(iab, router, modalController) {
        this.iab = iab;
        this.router = router;
        this.modalController = modalController;
        this.tvChannels = [];
        // movies:any=[
        //   {
        //      name:"Hobbs And Shaw",
        //     frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZiMY9sTslWsBed8930qK3swQ2nl2YmMYgbkcoFM2Z8rHGF3xcWg5Snd9ZKrJ-dUwcn4OJsCNbiD-CxPSPyre08xEhfY01r8WCESDvHGEOyd5jIq1PIy7QuxpSgLGjpAkZRe_CCTWogxXEET7RYqj2bvZHA==" webkitallowfullscreen="true" width="100%" __idm_frm__="130"></iframe>',
        //     imagehtml:'<img alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" title="Fast &amp; Furious Presents: Hobbs &amp; Shaw" src="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" style="display: block;">'
        //   },
        //   {
        //      name:"Once Upon a Time in Hollywood",
        //     frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZpE7y1K-TTrl71hceLg0s-vLBh3ElKu2Tr3eKvAQbMWCnuZEqPq6FyHVCxzrZwL1Rxqmd3RpS7D-wRUJeV9y8uB1eWIH-zKuF_z8S11ToUCq0JZmPn7EgJVkmeEzVPi1yURegLpdZzVz9YRIh2xA7HCMAg==" webkitallowfullscreen="true" width="100%" __idm_frm__="136"></iframe>',
        //     imagehtml:'<img alt="Men in Black: International" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" title="Men in Black: International" src="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" style="display: block;">'
        //   },
        //   {
        //      name:"Judge Mental Hay Kya",
        //     frame:'<video id="my-video" type="video/x-matroska" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://ssd17.polosolo.net/MKV/mkv-bollywood/Judgementall Hai Kya 2019 preDvDRip.mkv" ></video>',
        //     imagehtml:'<img alt="" src="https://m.media-amazon.com/images/M/MV5BZDBmZTZiYWUtMTQ3OS00NzA1LThjNjYtZmE3NzFhMzAzNDFmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY268_CR16,0,182,268_AL_.jpg">'
        //   },
        //   {
        //      name:"Batla House",
        //     frame:'<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://bolly1.polosolo.net/mkv-bollywood/Batla House 2019 Pre DvD Rip HDFriday.mkv" ></video>',
        //     imagehtml:'<img alt="" src="https://m.media-amazon.com/images/M/MV5BZmI4M2I1NWYtM2MwNS00NDJmLThhMmMtNDk1MzM4ZWQyMDZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg">'
        //   },
        //   {
        //      name:"Student of the Year 2 2019",
        //     frame:'<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://s24.hubfiles.club:182/d/hxh3t7eiurvhkjtugb5euvkhjegy6ozo2niddcssmytlngiozvpto7ye2f6yykwdwsc3yozd/Student%20of%20the%20Year%202%20(2019)%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AC3%20ESub.mkv" ></video>',
        //     imagehtml:'<img alt="" src="https://1.bp.blogspot.com/-Ag-GUouK_GI/XNeC4ignwOI/AAAAAAAAPuU/B1Ww9D-ad307-YFQbc2Y9Wq-A4YhpOg0wCLcBGAs/s1600/student.jpg">'
        //   },    
        //   {
        //      name:"Super 30",
        //     frame:'<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://www4.uptobox.com/dl/sj6Eeph9CGs8Y_s9Zwl6XSqBhwXqaPBJ1V5qavhDQ6PMC64pgO1BWLzDfbQydWprg8lFD3BfRjwrR80qBQrjpASsmckX-mVl8-U6i6t7XnSZ8PurLQRyNwMTAKc3x_QJ3Ifp5xhpOJ7JOz0QxZ4uVA/Super%2030%20%282019%29%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AAC%20ESub.mkv" ></video>',
        //     imagehtml:'<img alt="" src="https://1.bp.blogspot.com/-Jc0950DSumU/XSjXNJdCIII/AAAAAAAAR28/J_r5YO8csHw4IKBQ3XW46FfqBOC3fGCeQCLcBGAs/s1600/sup.jpg">'
        //   },      
        // ];
        this.movies = [
            // {
            //    name:"Hobbs And Shaw",
            //   frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZiMY9sTslWsBed8930qK3swQ2nl2YmMYgbkcoFM2Z8rHGF3xcWg5Snd9ZKrJ-dUwcn4OJsCNbiD-CxPSPyre08xEhfY01r8WCESDvHGEOyd5jIq1PIy7QuxpSgLGjpAkZRe_CCTWogxXEET7RYqj2bvZHA==" webkitallowfullscreen="true" width="100%" __idm_frm__="130"></iframe>',
            //   imagehtml:'<img alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" title="Fast &amp; Furious Presents: Hobbs &amp; Shaw" src="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" style="display: block;">'
            // },
            // {
            //    name:"Once Upon a Time in Hollywood",
            //   frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZpE7y1K-TTrl71hceLg0s-vLBh3ElKu2Tr3eKvAQbMWCnuZEqPq6FyHVCxzrZwL1Rxqmd3RpS7D-wRUJeV9y8uB1eWIH-zKuF_z8S11ToUCq0JZmPn7EgJVkmeEzVPi1yURegLpdZzVz9YRIh2xA7HCMAg==" webkitallowfullscreen="true" width="100%" __idm_frm__="136"></iframe>',
            //   imagehtml:'<img alt="Men in Black: International" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" title="Men in Black: International" src="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" style="display: block;">'
            // },
            {
                name: "Judge Mental Hay Kya",
                frame: "http://ssd17.polosolo.net/MKV/mkv-bollywood/Judgementall Hai Kya 2019 preDvDRip.mkv",
                imagehtml: '<img alt="" src="https://m.media-amazon.com/images/M/MV5BZDBmZTZiYWUtMTQ3OS00NzA1LThjNjYtZmE3NzFhMzAzNDFmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY268_CR16,0,182,268_AL_.jpg">'
            },
            {
                name: "Batla House",
                frame: "http://bolly1.polosolo.net/mkv-bollywood/Batla House 2019 Pre DvD Rip HDFriday.mkv",
                imagehtml: '<img alt="" src="https://m.media-amazon.com/images/M/MV5BZmI4M2I1NWYtM2MwNS00NDJmLThhMmMtNDk1MzM4ZWQyMDZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg">'
            },
            {
                name: "Student of the Year 2 2019",
                frame: "http://s24.hubfiles.club:182/d/hxh3t7eiurvhkjtugb5euvkhjegy6ozo2niddcssmytlngiozvpto7ye2f6yykwdwsc3yozd/Student%20of%20the%20Year%202%20(2019)%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AC3%20ESub.mkv",
                imagehtml: '<img alt="" src="https://1.bp.blogspot.com/-Ag-GUouK_GI/XNeC4ignwOI/AAAAAAAAPuU/B1Ww9D-ad307-YFQbc2Y9Wq-A4YhpOg0wCLcBGAs/s1600/student.jpg">'
            },
            {
                name: "Super 30",
                frame: "http://www4.uptobox.com/dl/sj6Eeph9CGs8Y_s9Zwl6XSqBhwXqaPBJ1V5qavhDQ6PMC64pgO1BWLzDfbQydWprg8lFD3BfRjwrR80qBQrjpASsmckX-mVl8-U6i6t7XnSZ8PurLQRyNwMTAKc3x_QJ3Ifp5xhpOJ7JOz0QxZ4uVA/Super%2030%20%282019%29%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AAC%20ESub.mkv",
                imagehtml: '<img alt="" src="https://1.bp.blogspot.com/-Jc0950DSumU/XSjXNJdCIII/AAAAAAAAR28/J_r5YO8csHw4IKBQ3XW46FfqBOC3fGCeQCLcBGAs/s1600/sup.jpg">'
            },
        ];
        // this.playVideo();
    }
    LivetvPage.prototype.goToChannel = function (url) {
        this.iab.create(url, '_self', 'location=yes');
    };
    LivetvPage.prototype.openModal = function (name, frame) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _example_modal_example_modal_page__WEBPACK_IMPORTED_MODULE_5__["ExampleModalPage"],
                            componentProps: {
                                "name": name,
                                "frame": frame
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            // if (dataReturned !== null) {
                            //   this.dataReturned = dataReturned.data;
                            //   //alert('Modal Sent Data :'+ dataReturned);
                            // }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // test1(){
    //   this.router.navigate(['/home'],{
    //           queryParams: this.object,
    //           });
    // }
    LivetvPage.prototype.ngOnInit = function () {
    };
    LivetvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livetv',
            template: __webpack_require__(/*! ./livetv.page.html */ "./src/app/pages/livetv/livetv.page.html"),
            styles: [__webpack_require__(/*! ./livetv.page.scss */ "./src/app/pages/livetv/livetv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], LivetvPage);
    return LivetvPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-livetv-livetv-module.js.map