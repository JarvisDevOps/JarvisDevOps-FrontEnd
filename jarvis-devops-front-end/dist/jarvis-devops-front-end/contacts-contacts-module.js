(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./src/app/contacts/contacts-home/contacts-home.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contacts-home/contacts-home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container mt-5\">\n    <div class=\"row\">\n      <div class=\"col mt-5\">\n        <!-- contact form -->\n        <form [formGroup]=\"contactForm\">\n          <p class=\"h5 text-center mb-4\">Write to us</p>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-user prefix grey-text\"></i>\n            <input type=\"text\" id=\"contactFormName\" formControlName=\"contactFormName\" class=\"form-control\" mdbInputDirective>\n            <label for=\"contactFormName\">Your name</label>\n          </div>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-envelope prefix grey-text\"></i>\n            <input type=\"email\" id=\"contactFormEmail\" formControlName=\"contactFormEmail\" class=\"form-control\" mdbInputDirective>\n            <label for=\"contactFormEmail\">Your email</label>\n          </div>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-tag prefix grey-text\"></i>\n            <input type=\"text\" id=\"contactFormSubject\" formControlName=\"contactFormSubject\" class=\"form-control\" mdbInputDirective>\n            <label for=\"contactFormSubject\">Subject</label>\n          </div>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-pencil prefix grey-text\"></i>\n            <textarea type=\"text\" id=\"contactFormMessage\" formControlName=\"contactFormMessage\" class=\"md-textarea\" style=\"height: 80px\"\n              mdbInputDirective></textarea>\n            <label for=\"contactFormMessage\">Your message</label>\n          </div>\n\n          <div class=\"text-center\">\n            <button class=\"btn btn-teal waves-light\" mdbWavesEffect>Send to us\n              <i class=\"fa fa-paper-plane-o ml-1\"></i>\n            </button>\n            <a routerLink=\"/home\" class=\"btn btn-teal waves-light\" role=\"button\" mdbWavesEffect>\n              Back to Home\n              <i class=\"fa fa-home ml-1\"></i>\n            </a>\n          </div>\n        </form>\n        <!-- contact form -->\n      </div>\n    </div>\n  </div>\n\n\n</section>"

/***/ }),

/***/ "./src/app/contacts/contacts-home/contacts-home.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contacts-home/contacts-home.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contacts-home/contacts-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contacts-home/contacts-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsHomeComponent", function() { return ContactsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsHomeComponent = /** @class */ (function () {
    function ContactsHomeComponent(fb) {
        this.fb = fb;
        this.contactForm = fb.group({
            contactFormName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactFormEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            contactFormSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactFormMessage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ContactsHomeComponent.prototype.ngOnInit = function () { };
    ContactsHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts-home',
            template: __webpack_require__(/*! ./contacts-home.component.html */ "./src/app/contacts/contacts-home/contacts-home.component.html"),
            styles: [__webpack_require__(/*! ./contacts-home.component.scss */ "./src/app/contacts/contacts-home/contacts-home.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactsHomeComponent);
    return ContactsHomeComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_home_contacts_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts-home/contacts-home.component */ "./src/app/contacts/contacts-home/contacts-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// const routes: Routes = [
//   { path: '', redirectTo: '/contacts/home', pathMatch: 'full' },
//   { path: 'home', component: ContactsHomeComponent },
// ]
var routes = [
    {
        path: '',
        component: _contacts_home_contacts_home_component__WEBPACK_IMPORTED_MODULE_2__["ContactsHomeComponent"],
        children: [
            { path: '', redirectTo: '/contacts/home', pathMatch: 'full' },
            { path: 'home', component: _contacts_home_contacts_home_component__WEBPACK_IMPORTED_MODULE_2__["ContactsHomeComponent"] },
        ],
    },
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contacts_home_contacts_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-home/contacts-home.component */ "./src/app/contacts/contacts-home/contacts-home.component.ts");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/contacts/contacts-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: [_contacts_home_contacts_home_component__WEBPACK_IMPORTED_MODULE_3__["ContactsHomeComponent"]],
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module.js.map