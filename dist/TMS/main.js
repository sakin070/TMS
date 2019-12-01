(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/registration-form/registration-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teams-list/teams-list.component */ "./src/app/teams-list/teams-list.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/professor/professor.component.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");










var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationFormComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'teams', component: _teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_6__["TeamsListComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'professor', component: _professor_professor_component__WEBPACK_IMPORTED_MODULE_8__["ProfessorComponent"] },
    { path: 'courses', component: _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_9__["CourseListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;The content below is only a placeholder and can be replaced.&ndash;&gt;-->\n<!--<div style=\"text-align:center\">-->\n<!--  <h1>-->\n<!--    Welcome to {{ title }}!-->\n<!--  </h1>-->\n<!--  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n<!--</div>-->\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n<!--  <li>-->\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n<!--  </li>-->\n<!--  <li>-->\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>-->\n<!--  </li>-->\n<!--  <li>-->\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\n<!--  </li>-->\n<!--</ul>-->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TMS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/registration-form/registration-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./teams-list/teams-list.component */ "./src/app/teams-list/teams-list.component.ts");
/* harmony import */ var _services_professor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/professor.service */ "./src/app/services/professor.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/professor/professor.component.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationFormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_15__["StudentComponent"],
                _teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_18__["TeamsListComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _professor_professor_component__WEBPACK_IMPORTED_MODULE_24__["ProfessorComponent"],
                _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_25__["CourseListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            providers: [
                _services_student_service__WEBPACK_IMPORTED_MODULE_16__["StudentService"],
                _services_team_service__WEBPACK_IMPORTED_MODULE_17__["TeamService"],
                _services_professor_service__WEBPACK_IMPORTED_MODULE_19__["ProfessorService"],
                _services_course_service__WEBPACK_IMPORTED_MODULE_20__["CourseService"],
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthService.prototype.getCurrentUser = function () {
        var user = this.afAuth.auth.currentUser;
        if (user) {
            return user;
        }
    };
    AuthService.prototype.doRegister = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
                if (value.designation == "Student") {
                    firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('students-list/' + res.user.uid).set({
                        id: value.id,
                        firstName: value.firstName,
                        lastName: value.lastName,
                        email: value.email,
                        programOfStudy: value.programOfStudy,
                        courseList: value.courseList,
                    })
                        .then(function (save) {
                        resolve(save);
                        _this.doLogin(value);
                        _this.router.navigateByUrl('/student');
                    }, function (err2) { return reject(err2); });
                }
                else {
                    firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('professors-list/' + res.user.uid).set({
                        id: value.id,
                        firstName: value.firstName,
                        lastName: value.lastName,
                        email: value.email,
                        courseList: value.courseList,
                    })
                        .then(function (save) {
                        resolve(save);
                        _this.doLogin(value);
                        _this.router.navigateByUrl('/professor');
                    }, function (err2) { return reject(err2); });
                }
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then(function (res) {
                if (value.designation == "Student") {
                    firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('students-list/' + res.user.uid).once('value').then(function (snapshot) {
                        if (snapshot.val()) {
                            resolve(res);
                        }
                    }, function (err) { return reject(err); });
                }
                else {
                    firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('professors-list/' + res.user.uid).once('value').then(function (snapshot) {
                        if (snapshot.val()) {
                            resolve(res);
                        }
                    }, function (err) { return reject(err); });
                }
            }, function (err2) { return reject(err2); });
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/login');
        sessionStorage.removeItem('user');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/course-list/course-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-list/course-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course-list/course-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-list/course-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div  class=\"row\">-->\n<!--  <div class=\"col\">-->\n\n<!--    <h1 class=\"student-title\">-->\n<!--      Pick a course-->\n<!--    </h1>-->\n\n<!--    <div *ngFor=\"let course of courseList\" (click)=\"getTeams(course)\">-->\n<!--      <button class=\"ui right labeled icon button course-button\">-->\n<!--        <i class=\"right arrow icon\"></i>-->\n<!--        {{course}}-->\n<!--      </button>-->\n<!--    </div>-->\n\n<!--  </div>-->\n\n<!--  <div class=\"col\">-->\n<!--    <div *ngIf=\"teamList.length>0\">-->\n<!--      <div *ngFor=\"let team of teamList\" >-->\n<!--        <button class=\"ui right labeled icon button course-button\">-->\n<!--          <i class=\"right arrow icon\"></i>-->\n<!--          {{team}}-->\n<!--        </button>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n\n<!--</div>-->\n\n<div class=\"ui segments\">\n  <div class=\"ui segment\">\n    <div class=\"ui grid\" style=\"margin-bottom: 10px;\">\n      <div class=\"four column row\">\n        <div class=\"left floated column\">\n          <h1 style=\"margin-bottom: 0px;\">\n            Your Courses\n          </h1>\n        </div>\n        <div class=\"right floated column\">\n          <button class=\"ui black right floated button\" (click)=\"logout()\">\n            Logout\n          </button>\n        </div>\n      </div>\n    </div>\n    <button class=\"ui left floated primary button left labeled icon\" (click)=\"back()\">\n      <i class=\"arrow left icon\"></i>\n      Home\n    </button>\n  </div>\n  <br>\n  <br>\n  <div class=\"ui segment\">\n    <div *ngFor=\"let course of courseList\" class=\"ui segment\" (click)=\"getTeams(course)\">\n      <div class=\"ui grid\">\n        <div class=\"four column row\">\n          <div class=\"left floated column\">\n            <h3 class=\"ui header\">Course ID: {{ course }}</h3>\n          </div>\n          <div class=\"right floated column\">\n            <button class=\"ui right floated button right labeled icon\">\n              <i class=\"cogs icon\"></i>Vizualize Teams\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template let-context let-modal=\"modal\" #applicantModal>\n  <div class=\"content\">\n\n    <div class=\"ui large header\">\n      Registered Teams\n      <span class=\"right floated\">\n      </span>\n    </div>\n    <div class=\"ui clearing divider\"></div>\n    <div *ngIf=\"teamList.length != 0\">\n      <div *ngFor=\"let team of teamList\" class=\"ui segment\">\n        <div class=\"ui grid\">\n          <div class=\"four column row\">\n            <div class=\"left floated column\">\n              <h3 class=\"ui header\"> {{ team.teamName }} ({{ team.teamMembers.length }}/{{ team.maximalNumber }})</h3>\n            </div>\n            <div class=\"right floated column\">\n              <button class=\"ui right floated button\" (click)=\"openViewTeamModal(team)\">\n                View Team\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"teamList.length == 0\">\n      <h3>Student's have not yet created any teams for this course.</h3>\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"modal.deny()\" autofocus>Close</button>\n  </div>\n</ng-template>\n\n<ng-template let-context let-modal=\"modal\" #viewTeamModal>\n  <div class=\"content\">\n    <div class=\"ui large header\" *ngIf=\"!currentTeam.isComplete\">\n      {{currentTeam.teamName}} (Incomplete)\n    </div>\n\n    <div class=\"ui large header\" *ngIf=\"currentTeam.isComplete\">\n      {{currentTeam.teamName}} (Complete)\n    </div>\n\n    <div class=\"ui clearing divider\"></div>\n\n    <div class=\"ui medium header\">Team Info </div>\n\n    <div class=\"ui small header\">Student liaison:</div>\n    <div>\n      {{currentTeam.studentThatIsLiasion}}\n    </div>\n\n    <div class=\"ui small header\">Date of creation:</div>\n    <div>\n      {{currentTeam.dateOfCreation}}\n    </div>\n\n    <div class=\"ui small header\">Team members:\n      ({{ currentTeam.teamMembers.length }}/{{ currentTeam.maximalNumber }})</div>\n    <div>\n      <li *ngFor=\"let student of currentTeam.teamMembers\">\n        {{ student }}\n      </li>\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"modal.approve()\" autofocus>Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/course-list/course-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-list/course-list.component.ts ***!
  \******************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(modalService, courseService, teamService, router, authService) {
        this.modalService = modalService;
        this.courseService = courseService;
        this.teamService = teamService;
        this.router = router;
        this.authService = authService;
        this.currentUser = null;
        this.courseList = null;
        this.teamList = [];
        this.currentTeam = null;
    }
    CourseListComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.courseList = this.currentUser.courseList;
    };
    CourseListComponent.prototype.getTeams = function (course) {
        var _this = this;
        // console.log(this.courseService.GetCourse(course).once())
        this.teamList = [];
        this.courseService.GetCourse(course).valueChanges().forEach(function (team) {
            team.teamList.forEach(function (teamId) {
                _this.teamService.GetTeam(teamId).valueChanges().forEach(function (teamInfo) {
                    _this.teamList.push(teamInfo);
                });
            });
        });
        var config = new ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["TemplateModalConfig"](this.applicantModal);
        config.isClosable = false;
        config.size = 'small';
        config.transition = 'fade up';
        config.transitionDuration = 400;
        this.modalService
            .open(config)
            .onDeny(function (_) { });
    };
    CourseListComponent.prototype.openViewTeamModal = function (team) {
        this.currentTeam = team;
        var config = new ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["TemplateModalConfig"](this.viewTeamModal);
        config.isClosable = false;
        config.size = 'small';
        config.transition = 'fade up';
        config.transitionDuration = 400;
        this.modalService
            .open(config)
            .onApprove(function (_) {
        })
            .onDeny(function (_) { });
    };
    CourseListComponent.prototype.back = function () {
        this.router.navigateByUrl("/professor");
    };
    CourseListComponent.prototype.logout = function () {
        this.authService.logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('applicantModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["ModalTemplate"])
    ], CourseListComponent.prototype, "applicantModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewTeamModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["ModalTemplate"])
    ], CourseListComponent.prototype, "viewTeamModal", void 0);
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./src/app/course-list/course-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiModalService"],
            _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a >\nlogout\n</a>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.currentUser = null;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container-log-in{\n    width: 400px;\n    height: 500px;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  \n  .button-login {\n    margin-top: 20px !important;\n  }\n  \n  #input-login {\n    margin-top: 10px !important;\n  }\n  \n  #log-in-service {\n    margin-top: 4px !important;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXItbG9nLWlue1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICAuYnV0dG9uLWxvZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gICNpbnB1dC1sb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAjbG9nLWluLXNlcnZpY2Uge1xuICAgIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"ui form\" [formGroup]=\"registerForm\">\n  <div class=\"ui segment\">\n    <p><strong>Designation</strong></p>\n    <sui-select class=\"selection\"  formControlName=\"designation\" placeholder=\"Designation\">\n      <sui-select-option value=\"Student\"></sui-select-option>\n      <sui-select-option value=\"Professor\"></sui-select-option>\n    </sui-select>\n  </div>\n\n  <div class=\"field\">\n    <label>Email</label>\n    <input type=\"text\" formControlName=\"email\" placeholder=\"Email\">\n  </div>\n\n  <div class=\"field\">\n    <label>Password</label>\n    <input type=\"password\" formControlName=\"password\" placeholder=\"Password\">\n  </div>\n\n  <button class=\"ui button\" type=\"submit\" (click)=\"tryLogin(registerForm.value)\">Login</button>\n</form> -->\n\n\n\n<div class=\"ui container\" id=\"container-log-in\">\n  <h1 style=\"text-align: center;\">TMS</h1>\n  <div class=\"ui basic segment\">\n    <div class=\"content\">\n      <form class=\"ui form\" [formGroup]=\"registerForm\">\n        <div class=\"ui left icon input fluid\">\n          <input type=\"email\" formControlName=\"email\" placeholder=\"Email address\" name=\"email\">\n          <i class=\"user icon\"></i>\n        </div>\n        <div class=\"ui left icon input fluid\" id=\"input-login\">\n          <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" name=\"password\">\n          <i class=\"lock icon\"></i>\n        </div>\n        <sui-select class=\"selection input fluid\" id=\"input-login\" formControlName=\"designation\" placeholder=\"Designation\">\n          <sui-select-option value=\"Student\"></sui-select-option>\n          <sui-select-option value=\"Professor\"></sui-select-option>\n        </sui-select>\n        <button type=\"submit\" (click)=\"tryLogin(registerForm.value)\" class=\"ui fluid button instagram button-login\">Login</button>\n      </form>\n      <div class=\"ui horizontal divider\">\n        Or\n      </div>\n    </div>\n    <button type=\"button\" class=\"ui fluid black button\" (click)=\"registerAccount()\" id=\"log-in-service\">\n      Register Account\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_professor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/professor.service */ "./src/app/services/professor.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, studentService, professorService) {
        this.authService = authService;
        this.router = router;
        this.studentService = studentService;
        this.professorService = professorService;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
            var id = _this.authService.getCurrentUser().uid;
            if (value.designation == 'Student') {
                var user = _this.studentService.GetStudent(id).valueChanges().subscribe(function (user) {
                    sessionStorage.setItem('user', JSON.stringify(user));
                    _this.router.navigateByUrl('/student');
                });
            }
            else {
                var user = _this.professorService.GetProfessor(id).valueChanges().subscribe(function (user) {
                    sessionStorage.setItem('user', JSON.stringify(user));
                    _this.router.navigateByUrl('/professor');
                });
            }
        }, function (err) {
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    LoginComponent.prototype.registerAccount = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"],
            _services_professor_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/course.ts":
/*!*********************************!*\
  !*** ./src/app/model/course.ts ***!
  \*********************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
        this.id = '';
        this.teamList = [];
        this.deadlineFormation = "";
        this.minimalNumberInTeam = 0;
        this.maximalNumberInTeam = 0;
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/model/team.ts":
/*!*******************************!*\
  !*** ./src/app/model/team.ts ***!
  \*******************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team() {
        this.id = '';
        this.minimalNumber = 0;
        this.maximalNumber = 0;
        this.deadlineFormation = '';
        this.studentThatIsLiasion = '';
        this.dateOfCreation = '';
        this.isComplete = false;
        this.teamName = '';
        this.courseId = '';
        this.teamMembers = [];
        this.pendingMembers = [];
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/professor/professor.component.css":
/*!***************************************************!*\
  !*** ./src/app/professor/professor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-title {\n  margin-bottom: 50px;\n  margin-top: 20px;\n}\n\n.course-button {\n  margin-bottom: 20px;\n}\n\n.options {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 100px;\n}\n\n.option-buttons {\n  margin: 10px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9mZXNzb3IvcHJvZmVzc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAvcHJvZmVzc29yL3Byb2Zlc3Nvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY291cnNlLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5vcHRpb25zIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5vcHRpb24tYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/professor/professor.component.html":
/*!****************************************************!*\
  !*** ./src/app/professor/professor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser;else loading\">\n  <div class=\"ui segment\">\n    <div class=\"ui grid\" style=\"margin-bottom: 10px;\">\n      <div class=\"four column row\">\n        <div class=\"left floated column\">\n          <h1 style=\"margin-bottom: 0px;\">\n            Welcome professor {{currentUser.firstName}}\n          </h1>\n        </div>\n        <div class=\"right floated column\">\n          <button class=\"ui black right floated button\" (click)=\"logout()\">\n            Logout\n          </button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<div class=\"ui container options\">\n  <div class=\"ui segment\">\n    <h2>Actions</h2>\n\n    <button class=\"ui labeled icon button option-buttons\" (click)=\"courses()\">\n      View My Courses\n      <i class=\"right edit icon\"></i>\n    </button>\n\n    <button class=\"ui labeled icon button option-buttons\" (click)=\"openProfileModal()\">\n      Set Up Team Parameters\n      <i class=\"right plus icon\"></i>\n    </button>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"ui container\" id=\"container-log-in\">\n    <h1 style=\"text-align: center; padding-top: 10px;\"> You have not been authenticated </h1>\n    <div class=\"ui basic segment\">\n      <button type=\"submit\" (click)=\"routeToLogin()\" class=\"ui fluid button instagram button-login\"> click here to\n        login</button>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template let-context let-modal=\"modal\" #applicantModal>\n  <div class=\"content\">\n\n    <div class=\"ui large header\">\n      Set up parameters for Teams\n      <span class=\"right floated\">\n      </span>\n    </div>\n    <div class=\"ui clearing divider\"></div>\n\n    <form class=\"ui form\" [formGroup]=\"newCourseForm\">\n      <div class=\"field\">\n        <label>Course Id</label>\n        <input type=\"text\" formControlName=\"courseId\" placeholder=\"Course id\">\n      </div>\n\n      <div class=\"field\">\n        <label>Minimum Number In A Team</label>\n        <input type=\"number\" formControlName=\"minimalNumberInTeam\" placeholder=\"Min\">\n      </div>\n\n      <div class=\"field\">\n        <label>Maximum Number In A Team</label>\n        <input type=\"number\" formControlName=\"maximalNumberInTeam\" placeholder=\"Max\">\n      </div>\n\n      <div class=\"field\">\n        <label>Deadline For Team Formation</label>\n        <input type=\"date\" formControlName=\"deadlineFormation\" placeholder=\"Deadline\">\n      </div>\n    </form>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"modal.deny()\" autofocus>Close</button>\n    <button class=\"ui green button\" (click)=\"modal.approve(newCourseForm.value)\" autofocus>Add</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/professor/professor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/professor/professor.component.ts ***!
  \**************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_professor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/professor.service */ "./src/app/services/professor.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _model_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/course */ "./src/app/model/course.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");









var ProfessorComponent = /** @class */ (function () {
    function ProfessorComponent(authService, router, courseService, professorService, modalService) {
        this.authService = authService;
        this.router = router;
        this.courseService = courseService;
        this.professorService = professorService;
        this.modalService = modalService;
        this.courseList = [];
        this.currentUser = null;
        this.newCourseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            minimalNumberInTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            maximalNumberInTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            deadlineFormation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
    }
    ProfessorComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    ProfessorComponent.prototype.getCourses = function () {
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        if (this.currentUser) {
            this.courseList = this.currentUser.courseList;
        }
    };
    ProfessorComponent.prototype.addCourse = function (value) {
        var course = new _model_course__WEBPACK_IMPORTED_MODULE_5__["Course"]();
        course.id = value.courseId;
        course.teamList = [];
        course.deadlineFormation = value.deadlineFormation;
        course.minimalNumberInTeam = value.minimalNumberInTeam;
        course.maximalNumberInTeam = value.maximalNumberInTeam;
        this.courseService.AddCourse(course);
        if (!this.currentUser.courseList) {
            this.currentUser.courseList = [];
        }
        if (!this.currentUser.courseList.includes(course.id)) {
            this.currentUser.courseList.push(course.id);
        }
        this.courseList = this.currentUser.courseList;
        sessionStorage.setItem('user', JSON.stringify(this.currentUser));
        this.newCourseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            minimalNumberInTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            maximalNumberInTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            deadlineFormation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
        var proff = {
            id: this.currentUser.id,
            firstName: this.currentUser.firstName,
            lastName: this.currentUser.lastName,
            email: this.currentUser.email,
            courseList: this.courseList
        };
        this.professorService.UpdateProfessor(proff);
    };
    ProfessorComponent.prototype.openProfileModal = function () {
        var _this = this;
        var config = new ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["TemplateModalConfig"](this.applicantModal);
        config.isClosable = false;
        config.size = 'small';
        config.transition = 'fade up';
        config.transitionDuration = 400;
        this.modalService
            .open(config)
            .onApprove(function (value) {
            _this.addCourse(value);
        })
            .onDeny(function (_) { });
    };
    ProfessorComponent.prototype.courses = function () {
        this.router.navigateByUrl('courses');
    };
    ProfessorComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('login');
    };
    ProfessorComponent.prototype.routeToLogin = function () {
        // this.authService.logout();
        this.router.navigateByUrl('login');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('applicantModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["ModalTemplate"])
    ], ProfessorComponent.prototype, "applicantModal", void 0);
    ProfessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professor',
            template: __webpack_require__(/*! ./professor.component.html */ "./src/app/professor/professor.component.html"),
            styles: [__webpack_require__(/*! ./professor.component.css */ "./src/app/professor/professor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], _services_professor_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorService"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["SuiModalService"]])
    ], ProfessorComponent);
    return ProfessorComponent;
}());



/***/ }),

/***/ "./src/app/registration-form/registration-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-container {\n    width: 50%;\n    margin: 0 auto;\n    margin-top: 30px !important;\n}\n\n.centered {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwL3JlZ2lzdHJhdGlvbi1mb3JtL3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXJlZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment registration-container\">\n\n  <form class=\"ui form\" [formGroup]=\"registerForm\">\n    <div class=\"ui segment\">\n      <p><strong>Designation</strong></p>\n      <sui-select class=\"selection\" formControlName=\"designation\" placeholder=\"Designation\">\n        <sui-select-option value=\"Student\"></sui-select-option>\n        <sui-select-option value=\"Professor\"></sui-select-option>\n      </sui-select>\n    </div>\n\n    <div class=\"field\">\n      <label>Student or Professor Number</label>\n      <input type=\"text\" formControlName=\"id\" placeholder=\"Student/Professor Number\">\n    </div>\n\n    <div class=\"two fields\">\n      <div class=\"field\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" placeholder=\"First Name\">\n      </div>\n      <div class=\"field\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" placeholder=\"Last Name\">\n      </div>\n    </div>\n\n    <div class=\"field\">\n      <label>Email</label>\n      <input type=\"text\" formControlName=\"email\" placeholder=\"Email\">\n    </div>\n\n    <div class=\"field\">\n      <label>Program of Study (only for students)</label>\n      <input type=\"text\" formControlName=\"programOfStudy\" placeholder=\"Program of Study\">\n    </div>\n\n    <div class=\"field\">\n      <label>Courses</label>\n      <li *ngFor=\"let course of courseList\">\n        {{ course }}\n      </li>\n      <form class=\"ui form\" [formGroup]=\"courseForm\">\n        <input type=\"text\" formControlName=\"courseID\" placeholder=\"Enter Course to Add \" style=\"width: 40%;\">\n        <button class=\"ui button primary\" (click)=\"addCourse(courseForm.value)\">Add Course</button>\n      </form>\n      <br>\n    </div>\n\n    <div class=\"field\">\n      <label>Password</label>\n      <input type=\"password\" formControlName=\"password\" placeholder=\"Password\">\n    </div>\n    <div class=\"centered\">\n      <button class=\"ui button\" type=\"submit\" (click)=\"tryRegister(registerForm.value)\">Register</button>\n      <button class=\"ui red button\" type=\"submit\" (click)=\"goBack()\">Cancel</button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(authService, studentService, router) {
        this.authService = authService;
        this.studentService = studentService;
        this.router = router;
        this.courseList = [];
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            courseID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            programOfStudy: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.addCourse = function (value) {
        if (!this.courseList.includes(value.courseID) && value.courseID != null) {
            this.courseList.push(value.courseID);
        }
        this.courseForm.reset();
    };
    RegistrationFormComponent.prototype.tryRegister = function (value) {
        var _this = this;
        console.log("blah");
        // add courses selected
        value.courseList = this.courseList;
        this.authService.doRegister(value)
            .then(function (res) {
            _this.errorMessage = '';
            _this.successMessage = 'Your account has been created';
            sessionStorage.setItem('user', JSON.stringify(value));
        }, function (err) {
            _this.errorMessage = err.message;
            _this.successMessage = '';
        });
    };
    RegistrationFormComponent.prototype.goBack = function () {
        this.router.navigateByUrl("/login");
    };
    RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.css */ "./src/app/registration-form/registration-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        if (user == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var CourseService = /** @class */ (function () {
    function CourseService(db) {
        this.db = db;
    }
    // Create Course
    CourseService.prototype.AddCourse = function (course) {
        this.courseRef = this.db.object('courses-list/' + course.id);
        this.courseRef.set({
            id: course.id,
            teamList: course.teamList,
            minimalNumberInTeam: course.minimalNumberInTeam,
            maximalNumberInTeam: course.maximalNumberInTeam,
            deadlineFormation: course.deadlineFormation,
        });
    };
    // Read Course
    CourseService.prototype.GetCourse = function (id) {
        this.courseRef = this.db.object('courses-list/' + id);
        return this.courseRef;
    };
    // Read Course List
    CourseService.prototype.GetCourseList = function () {
        this.coursesRef = this.db.list('courses-list');
        return this.coursesRef;
    };
    // Update Course
    CourseService.prototype.UpdateCourse = function (course) {
        this.courseRef = this.db.object('courses-list/' + course.id);
        this.courseRef.update({
            id: course.id,
            teamList: course.teamList,
            minimalNumberInTeam: course.minimalNumberInTeam,
            maximalNumberInTeam: course.maximalNumberInTeam,
            deadlineFormation: course.deadlineFormation,
        });
    };
    // Delete Course
    CourseService.prototype.DeleteCourse = function (id) {
        this.courseRef = this.db.object('courses-list/' + id);
        this.courseRef.remove();
    };
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/professor.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/professor.service.ts ***!
  \***********************************************/
/*! exports provided: ProfessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorService", function() { return ProfessorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var ProfessorService = /** @class */ (function () {
    function ProfessorService(authService, db) {
        this.authService = authService;
        this.db = db;
    }
    // Create Professor
    ProfessorService.prototype.AddProfessor = function (professor) {
        var profId = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        this.professorRef = this.db.object('professors-list/' + profId);
        this.professorRef.set({
            id: profId,
            firstName: professor.firstName,
            lastName: professor.lastName,
            email: professor.email,
            courseList: professor.courseList,
        });
    };
    // Read Professor
    ProfessorService.prototype.GetProfessor = function (id) {
        this.professorRef = this.db.object('professors-list/' + id);
        return this.professorRef;
    };
    // Read Professor List
    ProfessorService.prototype.GetProfessorList = function () {
        this.professorsRef = this.db.list('professors-list');
        return this.professorsRef;
    };
    // Update Professor
    ProfessorService.prototype.UpdateProfessor = function (professor) {
        this.professorRef = this.db.object('professors-list/' + this.authService.getCurrentUser().uid);
        this.professorRef.update({
            id: professor.id,
            firstName: professor.firstName,
            lastName: professor.lastName,
            email: professor.email,
            courseList: professor.courseList,
        });
    };
    // Delete Professor
    ProfessorService.prototype.DeleteProfessor = function (id) {
        this.professorRef = this.db.object('professors-list/' + id);
        this.professorRef.remove();
    };
    ProfessorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProfessorService);
    return ProfessorService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var StudentService = /** @class */ (function () {
    function StudentService(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    // Add Student
    StudentService.prototype.AddStudent = function (student) {
        this.studentRef = this.db.object('students-list/' + student.id);
        this.studentRef.set({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            programOfStudy: student.programOfStudy,
            courseList: student.courseList,
        });
    };
    // Read Student
    StudentService.prototype.GetStudent = function (id) {
        this.studentRef = this.db.object('students-list/' + id);
        return this.studentRef;
    };
    // Read Student List
    StudentService.prototype.GetStudentList = function () {
        this.studentsRef = this.db.list('students-list');
        return this.studentsRef;
    };
    // Update Student
    StudentService.prototype.UpdateStudent = function (student) {
        this.studentRef = this.db.object('students-list/' + student.id);
        this.studentRef.update({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            programOfStudy: student.programOfStudy,
            courseList: student.courseList,
        });
    };
    // Delete Student
    StudentService.prototype.DeleteStudent = function (id) {
        this.studentRef = this.db.object('students-list/' + id);
        this.studentRef.remove();
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




var TeamService = /** @class */ (function () {
    function TeamService(db) {
        this.db = db;
    }
    // Create Team
    TeamService.prototype.AddTeam = function (team) {
        var teamId = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        this.teamRef = this.db.object('teams-list/' + teamId);
        this.teamRef.set({
            id: teamId,
            minimalNumber: team.minimalNumber,
            maximalNumber: team.maximalNumber,
            deadlineFormation: team.deadlineFormation,
            studentThatIsLiasion: team.studentThatIsLiasion,
            dateOfCreation: team.dateOfCreation,
            isComplete: team.isComplete,
            teamName: team.teamName,
            courseId: team.courseId,
            teamMembers: team.teamMembers,
            pendingMembers: team.pendingMembers,
        });
        return teamId;
    };
    // Read Team
    TeamService.prototype.GetTeam = function (id) {
        this.teamRef = this.db.object('teams-list/' + id);
        return this.teamRef;
    };
    // Read Team List
    TeamService.prototype.GetTeamList = function () {
        this.teamsRef = this.db.list('teams-list');
        return this.teamsRef;
    };
    // Update Team
    TeamService.prototype.UpdateTeam = function (team) {
        this.teamRef = this.db.object('teams-list/' + team.id);
        this.teamRef.update({
            id: team.id,
            minimalNumber: team.minimalNumber,
            maximalNumber: team.maximalNumber,
            deadlineFormation: team.deadlineFormation,
            studentThatIsLiasion: team.studentThatIsLiasion,
            dateOfCreation: team.dateOfCreation,
            isComplete: team.isComplete,
            teamName: team.teamName,
            courseId: team.courseId,
            teamMembers: team.teamMembers,
            pendingMembers: team.pendingMembers,
        });
    };
    // Delete Team
    TeamService.prototype.DeleteTeam = function (id) {
        this.teamRef = this.db.object('teams-list/' + id);
        this.teamRef.remove();
    };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-title {\n    margin-bottom: 50px;\n    margin-top: 20px;\n}\n\n.course-button {\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvdXJzZS1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 0px;\" class=\"ui segment\">\n\n  <div class=\"ui grid\">\n    <div class=\"four column row\">\n      <div class=\"left floated column\">\n        <h1 style=\"margin-bottom: 0px;\">\n          Your Courses\n        </h1>\n      </div>\n      <div class=\"right floated column\">\n        <button class=\"ui black right floated button\" (click)=\"logout()\">\n          Logout\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n  <br>\n  <br>\n  <div class=\"ui segment\" style=\"margin-top: 0px;\">\n    <div [suiCollapse]=\"collapse\">\n      <div *ngFor=\"let course of courseList\" class=\"ui segment\" (click)=\"onSelect(course)\">\n        <div class=\"ui grid\">\n          <div class=\"four column row\">\n            <div class=\"left floated column\">\n              <h3 class=\"ui header\">Course ID: {{ course }}</h3>\n            </div>\n            <div class=\"right floated column\">\n              <button class=\"ui right floated button right labeled icon\">\n                <i class=\"right arrow icon\"></i>View\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var StudentComponent = /** @class */ (function () {
    function StudentComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.currentUser = null;
        this.courseList = [];
        this.selectedCourse = null;
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    StudentComponent.prototype.getCourses = function () {
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.courseList = this.currentUser.courseList;
    };
    StudentComponent.prototype.onSelect = function (course) {
        this.selectedCourse = course;
        sessionStorage.setItem('currentCourseID', this.selectedCourse);
        this.router.navigateByUrl('teams');
    };
    StudentComponent.prototype.logout = function () {
        this.authService.logout();
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/teams-list/teams-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/teams-list/teams-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n    text-align: center;\n    margin-top: 100px;\n}\n\n.no-teams-to-join-message {\n    margin-top: 100px;\n    text-align: center;\n}\n\n.go-back {\n    margin-top: 0px !important;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.cursor-hover {\n    cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtcy1saXN0L3RlYW1zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6ImFwcC90ZWFtcy1saXN0L3RlYW1zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5uby10ZWFtcy10by1qb2luLW1lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvLWJhY2sge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Vyc29yLWhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/teams-list/teams-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/teams-list/teams-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!course\">\n  <div class=\"error-message\">\n    <h2>\n      Oops... it looks like course {{currentCourseID}} has not been assigned for teams by the professor.\n    </h2>\n    <br>\n    <button class=\"ui  floated labeled icon button\" (click)=\"goBack()\">\n      View My Team\n      <i class=\"arrow left icon\"></i>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"course\" class=\"ui segments\">\n  <div class=\"ui segment\">\n    <div class=\"ui grid\" style=\"margin-bottom: 10px;\">\n      <div class=\"four column row\">\n        <div class=\"left floated column\">\n          <h1 style=\"margin-bottom: 0px;\">\n            Course: {{currentCourseID}}\n          </h1>\n        </div>\n        <div class=\"right floated column\">\n          <button class=\"ui black right floated button\" (click)=\"logout()\">\n            Logout\n          </button>\n        </div>\n      </div>\n    </div>\n    <button class=\"ui left floated primary button left labeled icon\" (click)=\"goBack()\">\n      <i class=\"arrow left icon\"></i>\n      View other courses\n    </button>\n    <button class=\"ui right floated labeled icon button\" (click)=\"createTeamButton()\">\n      Create Team\n      <i class=\"right plus icon\"></i>\n    </button>\n    <button class=\"ui right floated labeled icon button\" (click)=\"viewMyTeam()\">\n      View My Team\n      <i class=\"right edit icon\"></i>\n    </button>\n  </div>\n  <br>\n  <br>\n  <div class=\"ui segment\" *ngIf=\"!isTeamListEmpty\">\n    <div [suiCollapse]=\"collapse\">\n      <div *ngFor=\"let team of teamList\" class=\"ui segment\">\n        <div class=\"ui grid\">\n          <div class=\"four column row\">\n            <div class=\"left floated column\">\n              <span>\n                <h4 class=\"ui header\">{{ team.teamName }}</h4>\n              </span> <span>({{ team.teamMembers.length }}/{{ team.maximalNumber }})</span>\n            </div>\n            <div class=\"right floated column\">\n              <button class=\"ui right floated button\" (click)=\"joinTeam(team)\">Request to Join</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"isTeamListEmpty\" class=\"no-teams-to-join-message\">\n  <h3>\n    Currently this course has no teams to join. You can create your own using the Create Team button in the top\n    right\n    corner.\n  </h3>\n  <br>\n</div>\n\n<ng-template let-context let-modal=\"modal\" #createJobModal>\n  <div class=\"content\">\n\n    <div class=\"ui large header\">\n      Create New Team\n      <span class=\"right floated\">\n      </span>\n    </div>\n    <div class=\"ui clearing divider\"></div>\n    <form class=\"ui form\" [formGroup]=\"newTeamForm\">\n      <div class=\"field\">\n        <label>Team Name</label>\n        <input type=\"text\" formControlName=\"teamName\" placeholder=\"Your Team Name\">\n      </div>\n\n      <div class=\"field\">\n        <label>Memebers (please enter student IDs)</label>\n        <li *ngFor=\"let student of studentList_toAdd\">\n          {{ student }}\n        </li>\n        <br>\n        <form class=\"ui form\" [formGroup]=\"addMemberForm\">\n          <input type=\"text\" formControlName=\"memberID\" placeholder=\"Please enter student ID\" style=\"width: 40%;\">\n          <button class=\"ui button primary\" (click)=\"addTeamMember(addMemberForm.value)\">Add Member</button>\n        </form>\n        <br>\n      </div>\n    </form>\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"modal.deny()\" autofocus>Close</button>\n    <button class=\"ui green button\" (click)=\"modal.approve(newTeamForm.value)\" autofocus>Create</button>\n  </div>\n</ng-template>\n\n<ng-template let-context let-modal=\"modal\" #genericModal>\n  <div class=\"content\">\n    {{joinJobModalMessage}}\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"modal.approve()\" autofocus>Close</button>\n  </div>\n</ng-template>\n\n<ng-template let-context let-modal=\"modal\" #viewTeamModal>\n  <div class=\"content\">\n    <div class=\"ui large header\" *ngIf=\"!currentUserTeam.isComplete\">\n      {{currentUserTeam.teamName}} (Incomplete)\n    </div>\n\n    <div class=\"ui large header\" *ngIf=\"currentUserTeam.isComplete\">\n      {{currentUserTeam.teamName}} (Complete)\n    </div>\n\n    <div class=\"ui clearing divider\"></div>\n\n    <div class=\"ui medium header\">Team Info </div>\n\n    <div class=\"ui small header\">Student liaison:</div>\n    <div>\n      {{currentUserTeam.studentThatIsLiasion}}\n    </div>\n\n    <div class=\"ui small header\">Date of creation:</div>\n    <div>\n      {{currentUserTeam.dateOfCreation}}\n    </div>\n\n    <div class=\"ui small header\">Team members:\n      ({{ currentUserTeam.teamMembers.length }}/{{ currentUserTeam.maximalNumber }})</div>\n    <div>\n      <li *ngFor=\"let student of currentUserTeam.teamMembers\">\n        {{ student }} \n      </li>\n    </div>\n\n\n    <div *ngIf=\"currentUserIsLiaison\">\n      <div class=\"ui clearing divider\"></div>\n\n      <div class=\"ui medium header\">Requests to join</div>\n      <div>\n        <li *ngFor=\"let student of currentUserTeam.pendingMembers\">\n          {{ student }} \n          <i class=\"check icon cursor-hover\" style=\"color: green; margin-left: 4px;\" (click)=\"acceptStudentToTeam(student)\"></i>  \n          <i class=\"x icon cursor-hover\" style=\"color: red;\" (click)=\"declineStudentToTeam(student)\"></i> \n        </li>\n      </div>\n\n\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"modal.approve()\" autofocus>Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/teams-list/teams-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/teams-list/teams-list.component.ts ***!
  \****************************************************/
/*! exports provided: TeamsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsListComponent", function() { return TeamsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/course */ "./src/app/model/course.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _model_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/team */ "./src/app/model/team.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");










var TeamsListComponent = /** @class */ (function () {
    function TeamsListComponent(modalService, router, courseService, teamService, authService) {
        this.modalService = modalService;
        this.router = router;
        this.courseService = courseService;
        this.teamService = teamService;
        this.authService = authService;
        this.currentCourseID = null;
        this.course = new _model_course__WEBPACK_IMPORTED_MODULE_6__["Course"]();
        this.teamIDList = [];
        this.teamList = [];
        this.isTeamListEmpty = false;
        this.newCourse = new _model_course__WEBPACK_IMPORTED_MODULE_6__["Course"]();
        this.studentList_toAdd = [];
        this.joinJobModalMessage = "";
        this.currentUserTeam = null;
        this.currentUserIsLiaison = false;
        this.addMemberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            memberID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        this.newTeamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            teamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    TeamsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentCourseID = sessionStorage.getItem('currentCourseID');
        if (!this.currentCourseID) {
            this.router.navigateByUrl('student'); // if no course is selected go back to student view
        }
        this.courseService.GetCourse(this.currentCourseID).valueChanges().subscribe(function (course) {
            sessionStorage.setItem('currentCourse', JSON.stringify(course));
            _this.course = course;
            _this.teamIDList = course.teamList;
            if (!_this.teamIDList) {
                _this.teamIDList = [];
            }
            if (Object.keys(_this.teamIDList).length > 0) {
                for (var _i = 0, _a = Object.keys(_this.teamIDList); _i < _a.length; _i++) {
                    var key = _a[_i];
                    _this.teamService.GetTeam(_this.teamIDList[key]).valueChanges().subscribe(function (team) {
                        _this.teamList.push(team);
                    });
                }
            }
            else {
                _this.isTeamListEmpty = true;
            }
        });
    };
    TeamsListComponent.prototype.goBack = function () {
        this.router.navigateByUrl('student');
    };
    // implement to cheque if member exists
    TeamsListComponent.prototype.addTeamMember = function (value) {
        if (!this.studentList_toAdd.includes(value.memberID) && value.memberID != null) {
            this.studentList_toAdd.push(value.memberID);
        }
        this.addMemberForm.reset();
    };
    TeamsListComponent.prototype.createNewTeam = function (value) {
        var newTeam = new _model_team__WEBPACK_IMPORTED_MODULE_8__["Team"]();
        var currentUser = JSON.parse(sessionStorage.getItem('user'));
        newTeam.teamName = value.teamName;
        newTeam.minimalNumber = this.course.minimalNumberInTeam;
        newTeam.maximalNumber = this.course.maximalNumberInTeam;
        newTeam.deadlineFormation = this.course.deadlineFormation;
        newTeam.dateOfCreation = new Date(Date.now()).toISOString();
        newTeam.studentThatIsLiasion = JSON.parse(sessionStorage.getItem('user')).id;
        newTeam.isComplete = false; // create a function that takes in value and returns whether its complete or not
        newTeam.courseId = this.currentCourseID;
        newTeam.teamMembers = this.studentList_toAdd;
        newTeam.teamMembers.push(currentUser.id);
        newTeam.pendingMembers = [];
        // push team to firebase
        var teamId = this.teamService.AddTeam(newTeam);
        // add new team to course team list
        this.teamIDList.push(teamId);
        this.course.teamList = this.teamIDList;
        // push to firebase
        this.courseService.UpdateCourse(this.course);
        //update local storage
        sessionStorage.setItem('currentCourse', JSON.stringify(this.course));
    };
    TeamsListComponent.prototype.joinTeam = function (team) {
        var _this = this;
        if (!team.isComplete) {
            var currentUser_1 = JSON.parse(sessionStorage.getItem('user'));
            var alreadyJoined_1 = false;
            var closedModal_1 = false;
            this.teamService.GetTeamList().valueChanges().subscribe(function (teams) {
                for (var _i = 0, _a = Object.keys(teams); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (teams[key].teamMembers.indexOf(currentUser_1.id) >= 0) {
                        alreadyJoined_1 = true;
                    }
                }
                if (!alreadyJoined_1) {
                    if (!team.pendingMembers) {
                        team.pendingMembers = [];
                    }
                    if (!team.pendingMembers.includes(currentUser_1.id) && currentUser_1.id != null && !closedModal_1) {
                        team.pendingMembers.push(currentUser_1.id);
                        _this.teamService.UpdateTeam(team);
                        _this.isTeamListEmpty = true;
                        _this.openGenericModal("Your request to join the team has been sent.");
                        closedModal_1 = true;
                    }
                    else if (!closedModal_1 && team.pendingMembers.includes(currentUser_1.id)) {
                        _this.openGenericModal("You've already requested to join this team.");
                        closedModal_1 = true;
                    }
                }
                else if (alreadyJoined_1 && !closedModal_1) {
                    _this.openGenericModal("You're already part of a team.");
                    closedModal_1 = true;
                }
            });
        }
    };
    TeamsListComponent.prototype.viewMyTeam = function () {
        var _this = this;
        var currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.currentUserTeam = null;
        var closedModal = false;
        this.currentUserIsLiaison = false;
        this.teamService.GetTeamList().valueChanges().subscribe(function (teams) {
            for (var _i = 0, _a = Object.keys(teams); _i < _a.length; _i++) {
                var key = _a[_i];
                if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
                    _this.currentUserTeam = teams[key];
                }
            }
            if (_this.currentUserTeam && !closedModal) {
                if (_this.currentUserTeam.studentThatIsLiasion == currentUser.id) {
                    _this.currentUserIsLiaison = true;
                }
                _this.openViewTeamModal();
                closedModal = true;
            }
            else if (!closedModal) {
                _this.openGenericModal("You are not a member of any team!");
                closedModal = true;
            }
        });
    };
    TeamsListComponent.prototype.acceptStudentToTeam = function (student) {
        if (this.currentUserTeam.teamMembers.length + 1 <= this.currentUserTeam.maximalNumber) {
            this.currentUserTeam.teamMembers.push(student);
            this.currentUserTeam.pendingMembers.splice(this.currentUserTeam.pendingMembers.indexOf(student), 1);
            this.teamService.UpdateTeam(this.currentUserTeam);
        }
        else {
            this.openGenericModal("You can't add anymore members to your team.");
        }
    };
    TeamsListComponent.prototype.declineStudentToTeam = function (student) {
        this.currentUserTeam.pendingMembers.splice(this.currentUserTeam.pendingMembers.indexOf(student), 1);
        this.teamService.UpdateTeam(this.currentUserTeam);
    };
    TeamsListComponent.prototype.openViewTeamModal = function () {
        var config = new ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["TemplateModalConfig"](this.viewTeamModal);
        config.isClosable = false;
        config.size = 'small';
        config.transition = 'fade up';
        config.transitionDuration = 400;
        this.modalService
            .open(config)
            .onApprove(function (_) {
            window.location.reload();
        })
            .onDeny(function (_) { });
    };
    TeamsListComponent.prototype.openGenericModal = function (msg) {
        this.joinJobModalMessage = msg;
        var config = new ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["TemplateModalConfig"](this.genericModal);
        config.isClosable = false;
        config.size = 'mini';
        config.transition = 'fade up';
        config.transitionDuration = 400;
        this.modalService
            .open(config)
            .onApprove(function (_) {
            window.location.reload();
        })
            .onDeny(function (_) { });
    };
    TeamsListComponent.prototype.createTeamButton = function () {
        var _this = this;
        var currentUser = JSON.parse(sessionStorage.getItem('user'));
        var alreadyJoined = false;
        var closedModal = false;
        this.teamService.GetTeamList().valueChanges().subscribe(function (teams) {
            for (var _i = 0, _a = Object.keys(teams); _i < _a.length; _i++) {
                var key = _a[_i];
                if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
                    alreadyJoined = true;
                }
            }
            if (!alreadyJoined && !closedModal) {
                _this.createNewTeamModal();
                closedModal = true;
            }
            else if (alreadyJoined && !closedModal) {
                _this.openGenericModal("You're already part of a team.");
                closedModal = true;
            }
        });
    };
    // validateTeam(team) {
    //   this.teamService.GetTeamList().valueChanges().subscribe(teams => {
    //     for (let key of Object.keys(teams)) {
    //       if (teams[key].teamName == team.teamName) {
    //         return true;
    //       }
    //     }
    //   });
    // }
    TeamsListComponent.prototype.createNewTeamModal = function () {
        var _this = this;
        var config = new ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["TemplateModalConfig"](this.createJobModal);
        config.isClosable = false;
        config.size = 'small';
        config.transition = 'fade up';
        config.transitionDuration = 400;
        this.modalService
            .open(config)
            .onApprove(function (value) {
            _this.createNewTeam(value);
            _this.openGenericModal("Your team has been created!");
        })
            .onDeny(function (_) { });
    };
    TeamsListComponent.prototype.logout = function () {
        this.authService.logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createJobModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["ModalTemplate"])
    ], TeamsListComponent.prototype, "createJobModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('genericModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["ModalTemplate"])
    ], TeamsListComponent.prototype, "genericModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewTeamModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["ModalTemplate"])
    ], TeamsListComponent.prototype, "viewTeamModal", void 0);
    TeamsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams-list',
            template: __webpack_require__(/*! ./teams-list.component.html */ "./src/app/teams-list/teams-list.component.html"),
            styles: [__webpack_require__(/*! ./teams-list.component.css */ "./src/app/teams-list/teams-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["SuiModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], TeamsListComponent);
    return TeamsListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBt5pZK-SnfmJeMx_xmdDxTS_0sefreSxE',
        authDomain: 'teams-e1d0b.firebaseapp.com',
        databaseURL: 'https://teams-e1d0b.firebaseio.com',
        projectId: 'teams-e1d0b',
        storageBucket: 'teams-e1d0b.appspot.com',
        messagingSenderId: '114316252364',
        appId: '1:114316252364:web:53aaed6613e31ebd911e69',
        measurementId: 'G-3SDQN8PS7P'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amarjasarbasic/Projects/TMS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map