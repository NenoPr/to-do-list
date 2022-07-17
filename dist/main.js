/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nbody {\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n    overflow-y: hidden; \r\n  }\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n  }\r\n\r\n* {\r\n    /* outline: 1px solid blue; */\r\n}\r\n#container {\r\n    display: grid;\r\n    grid-template: 7vh 93vh / 17vw 83vw;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n#header {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: #4c8eff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n#header-text {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    color: white;\r\n    margin: 0;\r\n    text-align: left;\r\n    margin-left: 3rem;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 1;\r\n    gap: 1rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n#sidebar-contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.active-sidebar {\r\n    background-color: #4c8eff5d;\r\n}\r\n\r\n#inbox, #today, #this-week, #this-month {\r\n    width: fit-content;\r\n    cursor: pointer;\r\n    border-radius: 1rem;\r\n    margin-left: 1rem;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    width: 85%;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#inbox:hover, #today:hover, #this-week:hover, #this-month:hover {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n}\r\n\r\n#inbox:active, #today:active, #this-week:active, #this-month:active {\r\n    transform: scale(0.97);\r\n}\r\n\r\n#sidebar-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    margin-left: 1rem;\r\n}\r\n\r\n#add-project {\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n    padding-left: .5rem;\r\n}\r\n\r\n#add-project:hover {\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    height: 20vh;\r\n    overflow-y: scroll;\r\n    font-size: 1rem;\r\n    height: 50vh;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n#project-sidebar-wrapper {\r\n    display:  grid;\r\n    grid-template: 1fr auto / 1fr 1fr;\r\n}\r\n\r\n.project {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n.project-options-sidebar {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: .5rem;\r\n    justify-self: center;\r\n    align-self: center;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n.rename-project {\r\n    padding: .5rem;\r\n    border: .1rem solid orange;\r\n    width: 40%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.rename-project:hover {\r\n    background-color: rgba(255, 166, 0, 0.511);\r\n}\r\n\r\n.rename-project:active {\r\n    background-color: rgb(255, 166, 0);\r\n}\r\n\r\n.delete-project {\r\n    padding: .5rem;\r\n    border: .1rem solid red;\r\n    background-color: rgba(240, 128, 128, 0.607);\r\n    width: 40%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-current {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template: auto 15fr / 3fr 3fr 3fr;\r\n    padding-top: 2rem;\r\n    grid-area: 2 / 2 / 2 / 3;\r\n    background-color: rgb(215, 242, 250);\r\n    align-content: center;\r\n    position: relative;\r\n}\r\n\r\n#add-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: fit-content;\r\n    width: fit-content;\r\n    padding: 1rem;\r\n    border-radius: .5rem;\r\n    background-color: #979797;\r\n}\r\n\r\n#add-task:hover {\r\n    box-shadow: 0 0 .5rem .01rem black;\r\n}\r\n\r\n#add-task:active {\r\n    background-color: #6b6b6b;\r\n}\r\n\r\n#current-view-port {\r\n    grid-area: 1 / 2 / 1 / 2;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    align-self: center;\r\n}\r\n\r\n#sort-by {\r\n    grid-area: 1 / 3 / 1 / 4;\r\n    justify-self: center;\r\n    display: flex;\r\n    position: relative;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#sort-by-text {\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    margin: 0;\r\n}\r\n\r\n#dropdown {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 120%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 999;\r\n    width: fit-content;\r\n}\r\n\r\n.order-by-options {\r\n    background-color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    width: 6rem;\r\n    text-align: center;\r\n}\r\n\r\n.order-by-options:hover {\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n\r\n#tasks-list {\r\n    grid-area: 2 / 1 / 2 / 4;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    padding-top: 2rem;\r\n    padding-left: 1rem;\r\n    padding-bottom: 1rem;\r\n    gap: 1rem;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: .75rem;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n/* .task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 10rem;\r\n    width: 17rem;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n} */\r\n\r\n.example-task-wrapper {\r\n    display: grid;\r\n    height: fit-content;\r\n    max-height: 14rem;\r\n    width: 50%;\r\n    grid-template: auto 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    row-gap: .2rem;\r\n}\r\n\r\n.example-task-info {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / auto 15fr 3fr auto auto auto;\r\n    column-gap: .2rem;\r\n    padding: .5rem;\r\n    gap: 1rem;\r\n    position: relative;\r\n    border-radius: .5rem;\r\n    align-items: center;\r\n}\r\n\r\n.example-task-info:hover {\r\n    box-shadow:  0 0 .5rem .1rem gray;\r\n}\r\n\r\n.example-task-info:active {\r\n    box-shadow:  0 0 .5rem .1rem rgb(255, 255, 255);\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar {\r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n.check-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.checked-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: rgba(70, 181, 30, 0.704);\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.title {\r\n    position: absolute;\r\n    grid-area: 1 / 2 / 1 / 2;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding-top: .7rem;\r\n    padding-bottom: .4rem;\r\n    height: 100%;\r\n    align-self: center;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n.due-date {\r\n    grid-area: 1 / 3 / 1 / 3;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    width: fit-content;\r\n    justify-self: center;\r\n}\r\n\r\n.task-priority {\r\n    grid-area: 1 / 4 / 1 / 4;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .1rem;\r\n    padding-bottom: .1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border: .05rem solid rgb(130, 130, 130);\r\n    width: 8rem;\r\n    justify-self: center;\r\n}\r\n\r\n.edit-task {\r\n    grid-area: 1 / 5 / 1 / 5;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .1rem solid rgb(234, 142, 44);\r\n    background-color: rgba(234, 142, 44, 0.433);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n}\r\n\r\n.delete-task {\r\n    grid-area: 1 / 6 / 1 / 6;\r\n    padding: .5rem;\r\n    border: .05rem solid rgb(255, 80, 80);\r\n    background-color: rgba(255, 80, 80, 0.485);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    width: fit-content;\r\n}\r\n\r\n.task-priority:hover {\r\n    box-shadow: 0 0 .1rem .025rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.task-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    margin-bottom: .2rem;\r\n    height: fit-content;\r\n    width: 99.5%;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    justify-self: center;\r\n}\r\n\r\n.description-title {\r\n    padding-top: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.description {\r\n    padding-bottom: .5rem;\r\n    padding-top: .5rem;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#div-hidden {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #97979780;\r\n}\r\n\r\n#form-div {\r\n    width: 33%;\r\n    height: 33%;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / 1fr;\r\n    padding: 2rem;\r\n}\r\n\r\n#cancel-button {\r\n    padding: 1rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    align-self: end;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 30rem;\r\n    height: max-content;\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    background-color: #ffffff;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n}\r\n\r\n#date-and-project {\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n#label-date-input {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n}\r\n\r\n#label-date-input > input {\r\n    margin-bottom: 2rem;\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\n#label-project-input-for-task {\r\n    grid-area: 1 / 2 / 1 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n}\r\n\r\n#label-project-input-for-task > select {\r\n    margin-bottom: 2rem;\r\n    height: 2.2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\nform > input {\r\n    margin-bottom: 2rem;\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\n#span-error-task-title-input {\r\n    color: red;\r\n    font-size: .75rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.task-title-input-invalid {\r\n    border: .1rem solid red;\r\n    box-shadow: 0 0 .5rem .1rem red;\r\n}\r\n\r\n.task-title-input-invalid:valid {\r\n    border: .1rem solid green;\r\n    box-shadow: 0 0 .5rem .1rem green;\r\n}\r\n\r\n/* #span-error-task-title-input {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 1rem;\r\n} */\r\n\r\nform > label {\r\n    font-weight: 500;\r\n}\r\n\r\nform > input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .1rem .05rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > label {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n#priority-div {\r\n    margin-bottom: 2rem;\r\n    border-bottom: .1rem solid gray;\r\n    display: flex;\r\n    gap: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#priority-div > input {\r\n    transform: scale(2);\r\n}\r\n\r\n#form-submit {\r\n    padding: 1rem;\r\n    background-color: rgb(139, 182, 255);\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin-top: 2rem;\r\n    align-self: center;\r\n}\r\n\r\n#form-submit:hover {\r\n    box-shadow: 0 0 .1rem .1rem black;\r\n}\r\n\r\n#back-div {\r\n    height: 25%;\r\n    width: 120%;\r\n    padding: 1rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n    align-items: center;\r\n}\r\n\r\n#back-div-delete {\r\n    height: 25%;\r\n    width: 120%;\r\n    padding: 1rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n    align-items: center;\r\n}\r\n\r\n#create-project-text {\r\n    font-weight:  700;\r\n    border-bottom: .1rem solid gray;\r\n    grid-area: 1 / 1 / 1 / 3;\r\n}\r\n\r\n#new-project-label {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#new-project-label > span {\r\n    margin: .2rem;\r\n    color: red;\r\n}\r\n\r\n\r\n#new-project-input {\r\n    height: 2rem;\r\n    font-size: 1.5rem;\r\n    padding: .5rem;\r\n    margin-top: .5rem;\r\n    border-radius: 0;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin-bottom: 0;\r\n}\r\n\r\n#new-project-input:focus, #new-project-input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .3rem .1rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > textarea {\r\n    border-radius: .5rem;\r\n    padding: .25rem;\r\n}\r\n\r\n#create-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 1 / 3 / 2;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    background-color: #109f00;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    font-weight: 700;\r\n    letter-spacing: .1rem;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#cancel-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 2 / 3 / 3;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#create-project-button:hover, #cancel-project-button:hover {\r\n\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    #container {\r\n        display: grid;\r\n        grid-template: 7vh 93vh / 17vw 83vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}\r\n\r\n@media (min-width: 2560px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    \r\n    #container {\r\n        display: grid;\r\n        grid-template: 5vh 95vh / 12vw 88vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n\r\nhtml, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nbody {\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n    overflow-y: hidden; \r\n  }\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n  }\r\n\r\n* {\r\n    /* outline: 1px solid blue; */\r\n}\r\n#container {\r\n    display: grid;\r\n    grid-template: 7vh 93vh / 17vw 83vw;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n#header {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: #4c8eff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n#header-text {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    color: white;\r\n    margin: 0;\r\n    text-align: left;\r\n    margin-left: 3rem;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 1;\r\n    gap: 1rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n#sidebar-contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.active-sidebar {\r\n    background-color: #4c8eff5d;\r\n}\r\n\r\n#inbox, #today, #this-week, #this-month {\r\n    width: fit-content;\r\n    cursor: pointer;\r\n    border-radius: 1rem;\r\n    margin-left: 1rem;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    width: 85%;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#inbox:hover, #today:hover, #this-week:hover, #this-month:hover {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n}\r\n\r\n#inbox:active, #today:active, #this-week:active, #this-month:active {\r\n    transform: scale(0.97);\r\n}\r\n\r\n#sidebar-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    margin-left: 1rem;\r\n}\r\n\r\n#add-project {\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n    padding-left: .5rem;\r\n}\r\n\r\n#add-project:hover {\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    height: 20vh;\r\n    overflow-y: scroll;\r\n    font-size: 1rem;\r\n    height: 50vh;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n#project-sidebar-wrapper {\r\n    display:  grid;\r\n    grid-template: 1fr auto / 1fr 1fr;\r\n}\r\n\r\n.project {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n.project-options-sidebar {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: .5rem;\r\n    justify-self: center;\r\n    align-self: center;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n.rename-project {\r\n    padding: .5rem;\r\n    border: .1rem solid orange;\r\n    width: 40%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.rename-project:hover {\r\n    background-color: rgba(255, 166, 0, 0.511);\r\n}\r\n\r\n.rename-project:active {\r\n    background-color: rgb(255, 166, 0);\r\n}\r\n\r\n.delete-project {\r\n    padding: .5rem;\r\n    border: .1rem solid red;\r\n    background-color: rgba(240, 128, 128, 0.607);\r\n    width: 40%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-current {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template: auto 15fr / 3fr 3fr 3fr;\r\n    padding-top: 2rem;\r\n    grid-area: 2 / 2 / 2 / 3;\r\n    background-color: rgb(215, 242, 250);\r\n    align-content: center;\r\n    position: relative;\r\n}\r\n\r\n#add-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: fit-content;\r\n    width: fit-content;\r\n    padding: 1rem;\r\n    border-radius: .5rem;\r\n    background-color: #979797;\r\n}\r\n\r\n#add-task:hover {\r\n    box-shadow: 0 0 .5rem .01rem black;\r\n}\r\n\r\n#add-task:active {\r\n    background-color: #6b6b6b;\r\n}\r\n\r\n#current-view-port {\r\n    grid-area: 1 / 2 / 1 / 2;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    align-self: center;\r\n}\r\n\r\n#sort-by {\r\n    grid-area: 1 / 3 / 1 / 4;\r\n    justify-self: center;\r\n    display: flex;\r\n    position: relative;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#sort-by-text {\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    margin: 0;\r\n}\r\n\r\n#dropdown {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 120%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 999;\r\n    width: fit-content;\r\n}\r\n\r\n.order-by-options {\r\n    background-color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    width: 6rem;\r\n    text-align: center;\r\n}\r\n\r\n.order-by-options:hover {\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n\r\n#tasks-list {\r\n    grid-area: 2 / 1 / 2 / 4;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    padding-top: 2rem;\r\n    padding-left: 1rem;\r\n    padding-bottom: 1rem;\r\n    gap: 1rem;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: .75rem;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n/* .task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 10rem;\r\n    width: 17rem;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n} */\r\n\r\n.example-task-wrapper {\r\n    display: grid;\r\n    height: fit-content;\r\n    max-height: 14rem;\r\n    width: 50%;\r\n    grid-template: auto 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    row-gap: .2rem;\r\n}\r\n\r\n.example-task-info {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / auto 15fr 3fr auto auto auto;\r\n    column-gap: .2rem;\r\n    padding: .5rem;\r\n    gap: 1rem;\r\n    position: relative;\r\n    border-radius: .5rem;\r\n    align-items: center;\r\n}\r\n\r\n.example-task-info:hover {\r\n    box-shadow:  0 0 .5rem .1rem gray;\r\n}\r\n\r\n.example-task-info:active {\r\n    box-shadow:  0 0 .5rem .1rem rgb(255, 255, 255);\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar {\r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n.check-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.checked-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: rgba(70, 181, 30, 0.704);\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.title {\r\n    position: absolute;\r\n    grid-area: 1 / 2 / 1 / 2;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding-top: .7rem;\r\n    padding-bottom: .4rem;\r\n    height: 100%;\r\n    align-self: center;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n.due-date {\r\n    grid-area: 1 / 3 / 1 / 3;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    width: fit-content;\r\n    justify-self: center;\r\n}\r\n\r\n.task-priority {\r\n    grid-area: 1 / 4 / 1 / 4;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .1rem;\r\n    padding-bottom: .1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border: .05rem solid rgb(130, 130, 130);\r\n    width: 8rem;\r\n    justify-self: center;\r\n}\r\n\r\n.edit-task {\r\n    grid-area: 1 / 5 / 1 / 5;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .1rem solid rgb(234, 142, 44);\r\n    background-color: rgba(234, 142, 44, 0.433);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n}\r\n\r\n.delete-task {\r\n    grid-area: 1 / 6 / 1 / 6;\r\n    padding: .5rem;\r\n    border: .05rem solid rgb(255, 80, 80);\r\n    background-color: rgba(255, 80, 80, 0.485);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    width: fit-content;\r\n}\r\n\r\n.task-priority:hover {\r\n    box-shadow: 0 0 .1rem .025rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.task-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    margin-bottom: .2rem;\r\n    height: fit-content;\r\n    width: 99.5%;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    justify-self: center;\r\n}\r\n\r\n.description-title {\r\n    padding-top: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.description {\r\n    padding-bottom: .5rem;\r\n    padding-top: .5rem;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#div-hidden {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #97979780;\r\n}\r\n\r\n#form-div {\r\n    width: 33%;\r\n    height: 33%;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / 1fr;\r\n    padding: 2rem;\r\n}\r\n\r\n#cancel-button {\r\n    padding: 1rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    align-self: end;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 30rem;\r\n    height: max-content;\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    background-color: #ffffff;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n}\r\n\r\n#date-and-project {\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n#label-date-input {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n}\r\n\r\n#label-date-input > input {\r\n    margin-bottom: 2rem;\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\n#label-project-input-for-task {\r\n    grid-area: 1 / 2 / 1 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n}\r\n\r\n#label-project-input-for-task > select {\r\n    margin-bottom: 2rem;\r\n    height: 2.2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\nform > input {\r\n    margin-bottom: 2rem;\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\n#span-error-task-title-input {\r\n    color: red;\r\n    font-size: .75rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.task-title-input-invalid {\r\n    border: .1rem solid red;\r\n    box-shadow: 0 0 .5rem .1rem red;\r\n}\r\n\r\n.task-title-input-invalid:valid {\r\n    border: .1rem solid green;\r\n    box-shadow: 0 0 .5rem .1rem green;\r\n}\r\n\r\n/* #span-error-task-title-input {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 1rem;\r\n} */\r\n\r\nform > label {\r\n    font-weight: 500;\r\n}\r\n\r\nform > input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .1rem .05rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > label {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n#priority-div {\r\n    margin-bottom: 2rem;\r\n    border-bottom: .1rem solid gray;\r\n    display: flex;\r\n    gap: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#priority-div > input {\r\n    transform: scale(2);\r\n}\r\n\r\n#form-submit {\r\n    padding: 1rem;\r\n    background-color: rgb(139, 182, 255);\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin-top: 2rem;\r\n    align-self: center;\r\n}\r\n\r\n#form-submit:hover {\r\n    box-shadow: 0 0 .1rem .1rem black;\r\n}\r\n\r\n#back-div {\r\n    height: 25%;\r\n    width: 120%;\r\n    padding: 1rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n    align-items: center;\r\n}\r\n\r\n#back-div-delete {\r\n    height: 25%;\r\n    width: 120%;\r\n    padding: 1rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n    align-items: center;\r\n}\r\n\r\n#create-project-text {\r\n    font-weight:  700;\r\n    border-bottom: .1rem solid gray;\r\n    grid-area: 1 / 1 / 1 / 3;\r\n}\r\n\r\n#new-project-label {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#new-project-label > span {\r\n    margin: .2rem;\r\n    color: red;\r\n}\r\n\r\n\r\n#new-project-input {\r\n    height: 2rem;\r\n    font-size: 1.5rem;\r\n    padding: .5rem;\r\n    margin-top: .5rem;\r\n    border-radius: 0;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin-bottom: 0;\r\n}\r\n\r\n#new-project-input:focus, #new-project-input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .3rem .1rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > textarea {\r\n    border-radius: .5rem;\r\n    padding: .25rem;\r\n}\r\n\r\n#create-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 1 / 3 / 2;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    background-color: #109f00;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    font-weight: 700;\r\n    letter-spacing: .1rem;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#cancel-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 2 / 3 / 3;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#create-project-button:hover, #cancel-project-button:hover {\r\n\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    #container {\r\n        display: grid;\r\n        grid-template: 7vh 93vh / 17vw 83vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}\r\n\r\n@media (min-width: 2560px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    \r\n    #container {\r\n        display: grid;\r\n        grid-template: 5vh 95vh / 12vw 88vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeek/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeek/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeekYear/index.js */ "./node_modules/date-fns/esm/startOfWeekYear/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeekYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeekYear/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(dirtyDate, options) {
  var _options$locale, _options$locale$optio;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeekYear/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeekYear/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getWeekYear/index.js */ "./node_modules/date-fns/esm/getWeekYear/index.js");
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/stylesheet.css":
/*!****************************!*\
  !*** ./src/stylesheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMManipulation.js":
/*!********************************!*\
  !*** ./src/DOMManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addTaskInterface": () => (/* binding */ addTaskInterface),
/* harmony export */   "startupLibrarySidebarRenderer": () => (/* binding */ startupLibrarySidebarRenderer),
/* harmony export */   "startupRenderProjectTasks": () => (/* binding */ startupRenderProjectTasks),
/* harmony export */   "updateRenderProjectTasks": () => (/* binding */ updateRenderProjectTasks)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getWeek/index.js");



let currentProject;
let inboxView;

// Creates the description of the task and appends it to the DOM under the task
function expandTaskDescriptionListeners(element, descriptionElement) {

    let appendElement = element.parentElement.parentElement
    if (appendElement.childNodes[1] == undefined) {

        // Create task action buttons
        let taskActions = document.createElement("div")
        taskActions.classList.add("task-actions")
        appendElement.appendChild(taskActions)

        // Create Description Title
        let taskDesc = document.createElement("div")
        taskDesc.classList.add("description-title")
        taskDesc.innerText = "Description:"
        taskActions.appendChild(taskDesc)

        // Create Description
        taskDesc = document.createElement("div")
        taskDesc.classList.add("description")
        taskDesc.innerText = descriptionElement
        taskActions.appendChild(taskDesc)

    } else {
        appendElement.childNodes[1].remove()
    }
}

// Renders the task on the DOM based on the provided toDoItem
function renderTaskToDom (element) {

    //Render the items task data to the div

    let appendTheTask = document.getElementById("tasks-list")
    //Create the task wrapper
    let taskWrapper = document.createElement("div")
    taskWrapper.classList.add("example-task-wrapper")
    taskWrapper.id = element.name
    appendTheTask.appendChild(taskWrapper)
    //Create task info
    let taskInfo = document.createElement("div")
    taskInfo.classList.add("example-task-info")
    taskInfo.id = element.id
    taskWrapper.appendChild(taskInfo)

    // ---- Create the task info structure and data ----

    // Create check task button
    let taskCheck = document.createElement("div")
    if (element.checked === "Unchecked") taskCheck.classList.add("check-task")
    else taskCheck.classList.add("checked-task")
    taskCheck.addEventListener("click", function(pointer) {
        toggleCheckTask(pointer)
    })
    taskInfo.appendChild(taskCheck, element.description)

    // Create title
    let taskTitle = document.createElement("p")
    taskTitle.classList.add("title")
    taskTitle.textContent = element.title
    taskInfo.appendChild(taskTitle)

    taskTitle.addEventListener("click", () => {

        expandTaskDescriptionListeners(taskTitle, element.description)
    })
        
    //Create Date
    let taskDate = document.createElement("div")
    taskDate.classList.add("due-date")
    if (element.dueDate != "No Due Date") {
        taskDate.textContent = reformatDate(element.dueDate, "day")
        taskDate.textContent += reformatDate(element.dueDate, "dd.month.yyyy.")
    } else {
        taskDate.textContent = element.dueDate
    }
    taskInfo.appendChild(taskDate)

    // Create task priority
    let taskItem = document.createElement("div")
    taskItem.classList.add("task-priority")
    taskItem.textContent = element.priority
    if (element.priority == "Urgent Priority") {
        taskItem.style.border = ".05rem solid rgba(255, 0, 0, 0.5)"
        taskItem.style.color = "red"
        taskItem.style.fontWeight = "400"
    } else if (element.priority == "Regular Priority") {
        taskItem.style.border = ".05rem solid rgb(100, 100, 100)"
        taskItem.style.color = "black"
        taskItem.style.fontWeight = "400"
    } else if (element.priority == "Low Priority") {
        taskItem.style.border = ".05rem solid rgb(73, 190, 0)"
        taskItem.style.color = "green"
        taskItem.style.fontWeight = "400"
    }
    taskInfo.appendChild(taskItem)

    // Create edit task button
    let taskEdit = document.createElement("div")
    taskEdit.classList.add("edit-task")
    taskEdit.textContent = "Edit"
    taskEdit.addEventListener("click", function(pointer) {
        addEditTaskListeners(taskEdit, element, pointer)
    })
    taskInfo.appendChild(taskEdit)

    // Create delete task button
    let taskIDel = document.createElement("div")
    taskIDel.classList.add("delete-task")
    taskIDel.textContent = "Delete"
    taskIDel.addEventListener("click", function() {
        deleteTask(taskIDel)
    })
    taskInfo.appendChild(taskIDel)
}

// Creates the add a tasks interface an passes the inputted data to submitAddNewTask()
function addTaskInterface() {

    const button = document.getElementById("add-task")
    button.addEventListener("click", () => {

    let divHidden = document.createElement("div")
    divHidden.id = "div-hidden"
    document.body.appendChild(divHidden)

    let form = document.createElement("form")
    let closeEdit = document.createElement("div")
    closeEdit.id = "cancel-button"
    closeEdit.textContent = " Cancel "
    closeEdit.addEventListener("click", () => {
        closeEdit.parentElement.parentElement.remove()
    })
    form.appendChild(closeEdit)

    let add5tasks = document.createElement("div")
    add5tasks.id = "add-5-tasks"
    add5tasks.textContent = " Add 5 filler tasks "
    add5tasks.addEventListener("click", function() {
        tasksInitialEventAdder()
    })
    form.appendChild(add5tasks)

    let label = document.createElement("label")
    label.htmlFor = "title"
    label.textContent = "Title"
    label.id = "label-task-title-input"
    let input = document.createElement("input")
    input.name = "title"
    input.type = "text"
    input.id = "task-title-input"
    input.minLength = "1"
    input.required = true
    form.appendChild(label)
    form.appendChild(input)

    let divDateAndProject = document.createElement("div")
    divDateAndProject.id = "date-and-project"

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Due Date"
    label.id = "label-date-input"
    divDateAndProject.appendChild(label)
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    label.appendChild(input)

    label = document.createElement("label")
    label.htmlFor = "project"
    label.textContent = "Project"
    label.id = "label-project-input-for-task"
    divDateAndProject.appendChild(label)
    input = document.createElement("select")
    input.id = "project-input-for-task"
    input.name = "project"
    input.size = "1"
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every(element => {
        if (currentProject == element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
            return false
        }
        return true
    })
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach(element => {
        if (currentProject != element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
        }
    })
    label.appendChild(input)

    form.appendChild(divDateAndProject)

    label = document.createElement("label")
    label.textContent = "Set Priority: "
    input = document.createElement("div")
    input.id = "priority-div"

    // Radio choices
    let radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "low-priority"
    radio.value = "Low Priority"
    let radioLabel = document.createElement("label")
    radioLabel.htmlFor = "low-priority"
    radioLabel.textContent = "Low Priority"
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "regular-priority"
    radio.value = "Regular Priority"
    radio.checked = true;
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "regular-priority"
    radioLabel.textContent = "Regular Priority"
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "urgent-priority"
    radio.value = "Urgent Priority"
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "urgent-priority"
    radioLabel.textContent = "Urgent Priority"
    input.appendChild(radio)
    input.appendChild(radioLabel)

    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.setAttribute("for","description")
    label.textContent = "Add Description"
    input = document.createElement("textarea")
    input.name = "description"
    input.setAttribute("rows", "5")
    input.setAttribute("cols", "70")
    input.style.fontFamily = 'Open Sans'
    input.style.fontSize = "1rem"
    form.appendChild(label)
    form.appendChild(input)

    let submitButton = document.createElement("div")
    submitButton.id = "form-submit"
    submitButton.textContent = "Submit"
    submitButton.addEventListener("click", function() {
        submitNewTask (form)
    })
    form.appendChild(submitButton)

    divHidden.appendChild(form)

    })
}

// Reformats the dates based on the desired output
function reformatDate(input, outputFormat) {

    if (input == "No Due Date") return "No Due Date"
    let year;
    let month;
    let day;

    if (outputFormat == "dd.mm.yyyy.") { // input format: yyyy-mm-dd
        //format date from html date element to object format
        year = input.slice(0,4)
        month = input.slice(5, 7)
        day = input.substr(-2)
        console.log("input: yyyy-mm-dd output:",day + "." + month + "." + year + ".")
        return day + "." + month + "." + year + "."
        
    } else if (outputFormat == "yyyy-mm-dd") { // input format: dd.month.yyyy.
        //format date from Object date to html date element format
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        day = input.slice(0, 2)
        input = year + "-" + month + "-" + day
        return (input)

    } else if (outputFormat == "yyyy mm dd") { // input format: dd.month.yyyy.
        //format date from Object date be parsed for date-fn module to get the week
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        day = input.slice(0, 2)
        input = year + " " + month + " " + day
        return (input)

    } else if (outputFormat == "dd.month.yyyy.") { // input format dd.mm.yyyy.
        // format date from Object date to render format for DOM
        day = input.slice(0, 2)
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        if (month == "01") month = "January"
        else if (month == "02") month = "February"
        else if (month == "03") month = "March"
        else if (month == "04") month = "April"
        else if (month == "05") month = "May"
        else if (month == "06") month = "June"
        else if (month == "07") month = "July"
        else if (month == "08") month = "August"
        else if (month == "09") month = "September"
        else if (month == "10") month = "October"
        else if (month == "11") month = "November"
        else if (month == "12") month = "December"
        //#region ---- mm to month formatter
        // if (input.slice(3,6) == "Jan") input.replace("January", "01")
        // else if (input.slice(3,6) == "Feb") input = input.replace("February", "02")
        // else if (input.slice(3,6) == "Mar") input = input.replace("March", "03")
        // else if (input.slice(3,6) == "Apr") input = input.replace("April", "04")
        // else if (input.slice(3,6) == "May") input = input.replace("May", "05")
        // else if (input.slice(3,6) == "Jun") input = input.replace("June", "06")
        // else if (input.slice(3,6) == "Jul") input = input.replace("July", "07")
        // else if (input.slice(3,6) == "Aug") input = input.replace("August", "08")
        // else if (input.slice(3,6) == "Sep") input = input.replace("September", "09")
        // else if (input.slice(3,6) == "Oct") input = input.replace("October", "10")
        // else if (input.slice(3,6) == "Nov") input = input.replace("November", "11")
        // else if (input.slice(3,6) == "Dec") input = input.replace("December", "12")
        //#endregion

        return day + "." + month + "." + year + "."

    } else if (outputFormat = "day") { // input format dd.mm.yyyy.
        // format date from Object date to render day to the DOM with date-fns module
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        day = input.slice(0, 2)

        input = year + " " + month + " " + day
        input = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(input))

        if (input == "0") input = "Sunday, "
        else if (input == "1") input = "Monday, "
        else if (input == "2") input = "Thursday, "
        else if (input == "3") input = "Wednesday, "
        else if (input == "4") input = "Tuesday, "
        else if (input == "5") input = "Friday, "
        else if (input == "6") input = "Saturday, "
        return (input)
    }

}

// Creates the edit a task interface on the provided element
function addEditTaskListeners(taskItem, element, pointer) {

    let divHidden = document.createElement("div")
    divHidden.id = "div-hidden"
    document.body.appendChild(divHidden)

    let form = document.createElement("form")
    let closeEdit = document.createElement("div")
    closeEdit.id = "cancel-button"
    closeEdit.textContent = " Cancel "
    closeEdit.addEventListener("click", () => {
        closeEdit.parentElement.parentElement.remove()
    })
    form.appendChild(closeEdit)

    let label = document.createElement("label")
    label.htmlFor = "title"
    label.textContent = "Edit Title"
    let input = document.createElement("input")
    input.name = "title"
    input.type = "text"
    input.value = element.title
    form.appendChild(label)
    form.appendChild(input)

    let divDateAndProject = document.createElement("div")
    divDateAndProject.id = "date-and-project"

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Due Date"
    label.id = "label-date-input"
    divDateAndProject.appendChild(label)
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    input.value = reformatDate(element.dueDate,"yyyy-mm-dd")
    label.appendChild(input)

    label = document.createElement("label")
    label.htmlFor = "project"
    label.textContent = "Project"
    label.id = "label-project-input-for-task"
    divDateAndProject.appendChild(label)
    input = document.createElement("select")
    input.id = "project-input-for-task"
    input.name = "project"
    input.size = "1"
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every(element => {
        if (currentProject == element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
            return false
        }
        return true
    })
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach(element => {
        if (currentProject != element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
        }
    })
    label.appendChild(input)

    form.appendChild(divDateAndProject)

    label = document.createElement("label")
    label.textContent = "Change Priority: "
    input = document.createElement("div")
    input.id = "priority-div"

    // Radio choices
    let radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "low-priority"
    radio.value = "Low Priority"
    let radioLabel = document.createElement("label")
    radioLabel.htmlFor = "low-priority"
    radioLabel.textContent = "Low Priority"
    if (element.priority == radio.value) radio.checked = true
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "regular-priority"
    radio.value = "Regular Priority"
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "regular-priority"
    radioLabel.textContent = "Regular Priority"
    if (element.priority == radio.value) radio.checked = true
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "urgent-priority"
    radio.value = "Urgent Priority"
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "urgent-priority"
    radioLabel.textContent = "Urgent Priority"
    if (element.priority == radio.value) radio.checked = true
    input.appendChild(radio)
    input.appendChild(radioLabel)

    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.setAttribute("for","description")
    label.textContent = "Edit Description"
    input = document.createElement("textarea")
    input.name = "description"
    input.setAttribute("rows", "5")
    input.setAttribute("cols", "70")
    input.style.fontFamily = 'Open Sans'
    input.style.fontSize = "1rem"
    input.value = element.description
    form.appendChild(label)
    form.appendChild(input)

    let submitButton = document.createElement("div")
    submitButton.id = "form-submit"
    submitButton.textContent = "Submit"
    // ---- set the taskItem to parent parent element for the project id and pass it
    taskItem = taskItem.parentElement.parentElement
    submitButton.addEventListener("click", function() {
        submitTaskChanges(form, element, pointer)
    })
    form.appendChild(submitButton)

    divHidden.appendChild(form)
}

// Toggles check task state
function toggleCheckTask(pointer) {

    let itemId = pointer.srcElement.parentElement.id
    console.log("itemId:",itemId)
    console.log()
    
    console.log("toDoParent.allProjects",_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects)
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach(project => {
        project.allItems.forEach( item => {
            if (item.id == itemId) {
                console.log("item.id",item.id)
                if (item.checked == "Unchecked") {
                    item.checked = "Checked"
                    pointer.srcElement.classList.remove("check-task")
                    pointer.srcElement.classList.add("checked-task")
                } else if (item.checked == "Checked") {
                    item.checked = "Unchecked"
                    pointer.srcElement.classList.remove("checked-task")
                    pointer.srcElement.classList.add("check-task")
                }
                window.localStorage.setItem(project.name, JSON.stringify(project))
            }
            console.log(item.id)
        })
        console.log("element.name",element.name)
    })

} 

// Delete current task
function deleteTask(taskDel) {

    let itemId = taskDel.parentElement.id

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every(project => {
        if (project.name === currentProject) {
            let counter = 0;
            project.allItems.forEach( element => {
                if (element.id === itemId) {
                    for (const key in element) {
                        delete element[key];
                    }
                    element.allItems.splice(counter,1)
                    window.localStorage.setItem(project.name, JSON.stringify(project))
                }
                counter++
            })
            return false
        }
        return true
    })

    taskDel.parentElement.parentElement.remove()
    window.localStorage.setItem(elementProject.name, JSON.stringify(elementProject))


}

// Changes the objects data to the provided ones from addTaskInterface()
function submitNewTask(form) {

    if ( form.elements[0].value == "") {
        let taskTitleInput = document.getElementById("task-title-input")
        let taskLabelTitle = document.getElementById("label-task-title-input")

        taskTitleInput.classList.add("task-title-input-invalid")

        let spanInfo = document.createElement("span")
        spanInfo.id = "span-error-task-title-input"
        spanInfo.textContent = "*Please input a title"
        taskLabelTitle.appendChild(spanInfo)
        return
    }
    console.log("form.elements",form.elements)

    let elementPriority;
    if (form.elements[3].checked == true) {
        elementPriority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        elementPriority = form.elements[4].value
    } else if (form.elements[5].checked == true) {
        elementPriority = form.elements[5].value
    }
    let elementTitle = form.elements[0].value
    let elementDueDate = form.elements[1].value
    let elementProject = form.elements[2].value
    let elementDescription = form.elements[6].value
    let elementNotes
    let elementChecked
    
    if (elementDueDate.length > 5) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name == elementProject) {
            elementProject = element
            return false
        }
        return true
    })
    console.log("projectToPass",elementProject)

    if (elementProject == undefined) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "Create a Project First."
        document.getElementById("tasks-list").append(noTasks)
        form.parentElement.remove()
        return
    }
    
    let element = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createToDoItem)(
        elementTitle, 
        elementDescription, 
        elementDueDate,
        elementPriority,
        elementNotes,
        elementChecked,
        elementProject)

    console.log("dateValue",element.dateValue)
    form.parentElement.remove()

    window.localStorage.setItem(elementProject.name, JSON.stringify(elementProject))
    
    if (elementProject.title == document.getElementById("current-view-port").innerText) {
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        elementProject.allItems.forEach( element => {
            renderTaskToDom(element)
        })
    }
}

// Changes the objects data to the provided addEditTaskListeners()
function submitTaskChanges(form, element, pointer) {

    console.log(form.elements)
    
    element.title = form.elements[0].value
    let elementDueDate = form.elements[1].value
    let elementProject = form.elements[2].value

    //format date
    if (elementDueDate.length == 10) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"
    console.log("elementDueDate",elementDueDate)
    element.dueDate = elementDueDate
    
    if (form.elements[3].checked == true) {
        element.priority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        element.priority = form.elements[4].value
    } else if (form.elements[5].checked == true) {
        element.priority = form.elements[5].value
    }
    element.description = form.elements[6].value

    console.log("POINTERRRRRRR",pointer.srcElement.parentElement.parentElement)
    let CurrentProjectID = pointer.srcElement.parentElement.parentElement.id

    let currentWorkingProjectForTheTask;
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        if (element.name == CurrentProjectID) {
            currentWorkingProjectForTheTask = element
        }
    })

    console.log("taskItem.name",CurrentProjectID)
    console.log("elementProject",elementProject)
    console.log("currentWorkingProjectForTheTask",currentWorkingProjectForTheTask)
    
    if (CurrentProjectID != currentWorkingProjectForTheTask.id) {

        let counter = 0;
        let newProjectToPass;
        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( project => {
            if (project.name == elementProject) {
                newProjectToPass = project;
                console.log("newProjectToPass",newProjectToPass)
                return false
            }
            return true
        })

        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( project => {
            console.log("project.name ",currentWorkingProjectForTheTask)
            if (project.name == currentWorkingProjectForTheTask.name) {
                project.allItems.every( task => {
                    if (task.id == element.id) {
                        console.log("HEREEE",project.allItems[counter])
                        console.log("HEREEE",task.id)
                        project.allItems.splice((project.allItems.indexOf(task)),1)
                        newProjectToPass.allItems.push(task)
                        Object.setPrototypeOf(task, newProjectToPass)
                        console.log("HEREEE",project.allItems[counter])
                        counter++
                        return false
                    }
                    return true
                })
                return false
            }
            return true
        })
        window.localStorage.setItem(newProjectToPass.name, JSON.stringify(newProjectToPass))
        window.localStorage.setItem(currentWorkingProjectForTheTask.name, JSON.stringify(currentWorkingProjectForTheTask))

        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        currentWorkingProjectForTheTask.allItems.forEach( element => {
            renderTaskToDom(element)
        })
    }

    let passInto = document.querySelectorAll(".example-task-wrapper");
    // passing zero because the element pass the current project id
    // probably wont work when updated to house inbox tasks
    // updateRenderProjectTasks(taskItem)
    form.parentElement.remove()
}

// Renders default project tasks on the DOM
function startupRenderProjectTasks() {

    if (document.getElementById("tasks-list").firstChild == null) {
        
        console.log("firstChild Null")
        if (_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0] != undefined) {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0].allItems.forEach(element => {

                //Render the items data to the div
                console.log("RENDERD ELEMENT", element)
                renderTaskToDom(element)
            
            })
        }
        document.getElementById("current-view-port").textContent = _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0].title
    }
}

// Renders the current libraries to the projects on the sidebar in the DOM
function startupLibrarySidebarRenderer() {

    if (_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0] != undefined) {
        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {

            let projectToAppend = document.createElement("div")
            projectToAppend.textContent = element.title
            projectToAppend.classList.add("project")
            projectToAppend.id = element.name
            projectToAppend.addEventListener("click", () => {
                updateRenderProjectTasks(projectToAppend)
            })
            console.log("currentProject",projectToAppend)
            console.log("currentProject",currentProject)

            let projectWrapper = document.createElement("div")
            projectWrapper.classList.add("project-sidebar-wrapper")
            projectWrapper.append(projectToAppend)

            let projectOptions = document.createElement("div")
            projectOptions.classList.add("project-options-sidebar")
            projectWrapper.append(projectOptions)

            let editProject = document.createElement("div")
            editProject.classList.add("rename-project")
            editProject.innerText = "Rename"
            projectOptions.append(editProject)
            editProject.addEventListener("click", function(pointer) {
                renameProject(pointer)
            })

            let deleteProjectSidebar = document.createElement("div")
            deleteProjectSidebar.classList.add("delete-project")
            deleteProjectSidebar.innerText = "Delete"
            projectOptions.append(deleteProjectSidebar)
            deleteProjectSidebar.addEventListener("click", function(pointer) {
                deleteProject(pointer)
            })

            document.getElementById("projects-list").appendChild(projectWrapper)

            if (document.getElementById("div-hidden")) {
                document.getElementById("div-hidden").remove()
            }

        })
        currentProject = _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0].id
        document.getElementById("add-project").nextElementSibling.childNodes[0].classList.add("project-current")
        document.querySelectorAll(".project-options-sidebar").forEach( node => {
            node.remove()
        })
    }
}

// Renders Events from the project to the DOM
function tasksInitialEventAdder() {

    // Go through each project object until its first element name matches the one on the DOM
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        console.log("element",element.allItems)
        console.log("currentProject",currentProject)
        console.log("element.name",element.name)
        if (element.name == currentProject) {

            for (let i = 0; i<5;i++){
                //Insert data from object to element
                console.log("element.name",element.name)
                // Create a task object and supply it with the corresponding project
                let taskPlaceholder = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createToDoItem)("Pick up Laundry","I need to pick up my Laundry from the washing machine next is some lorem ipsum: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id expedita soluta voluptatum aliquam excepturi eligendi.","17.06.2022.","Urgent Priority","notes for todo item","Unchecked", element)
                //Insert data from object to element
                console.log("taskPlaceholder",taskPlaceholder)
                console.log("new proto",Object.getPrototypeOf(taskPlaceholder))
                console.log("user proto",Object.getPrototypeOf(user))

                //Render the items data to the div
                renderTaskToDom(taskPlaceholder)
            }
            return false
        }
        return true
    })

}

// Make a random name
function makeName(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// Create an interface to create a new project and pass value to createNewProject()
function addNewProject () {

    // Add event listeners to populate DOM with projects
    let addProject = document.getElementById("add-project")
    addProject.addEventListener("click", () =>  {

        let hideDiv = document.createElement("div")
        hideDiv.id = "div-hidden"
        document.body.append(hideDiv)

        let backDiv = document.createElement("div")
        backDiv.id = "back-div"
        hideDiv.append(backDiv)

        let divContent = document.createElement("p")
        divContent.textContent = "Create a New Project "
        divContent.id = "create-project-text"
        backDiv.append(divContent)

        divContent = document.createElement("label")
        divContent.htmlFor = "new-project-label"
        divContent.id = "new-project-label"
        divContent.textContent = "Name:"
        divContent.placeholder = "New Project Name "
        backDiv.append(divContent)

        let inputDiv = document.createElement("input")
        inputDiv.id = "new-project-input"
        inputDiv.name = "new-project-input"
        inputDiv.minLength = "1"
        inputDiv.placeholder = "New Project Name "
        divContent.append(inputDiv)

        divContent = document.createElement("button")
        divContent.id = "create-project-button"
        divContent.textContent = "Create"
        backDiv.append(divContent)

        divContent.addEventListener("click", function()  {

            createNewProject()
            
        })

        divContent = document.createElement("button")
        divContent.id = "cancel-project-button"
        divContent.textContent = "Cancel"
        backDiv.append(divContent)

        divContent.addEventListener("click", () => {
            document.getElementById("div-hidden").remove()
        })

    })
}

// Create a new project and append it with the provided name from addNewProject()
function createNewProject() {

    if(document.getElementById("new-project-input").value) {

        let pass = document.getElementById("new-project-input").value
        let projectHolder = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createProject)(pass)

        let addProject = document.getElementById("add-project")
        let project = document.createElement("div")
        project.classList.add("project")
        project.id = projectHolder.name
        project.textContent = projectHolder.title
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects)
        console.log("project to pass",project)

        let projectWrapper = document.createElement("div")
        projectWrapper.classList.add("project-sidebar-wrapper")
        projectWrapper.append(project)

        let projectOptions = document.createElement("div")
        projectOptions.classList.add("project-options-sidebar")
        projectWrapper.append(projectOptions)

        let editProject = document.createElement("div")
        editProject.classList.add("rename-project")
        editProject.innerText = "Rename"
        projectOptions.append(editProject)
        editProject.addEventListener("click", function(pointer) {
            renameProject(pointer)
        })

        let deleteProjectSidebar = document.createElement("div")
        deleteProjectSidebar.classList.add("delete-project")
        deleteProjectSidebar.innerText = "Delete"
        projectOptions.append(deleteProjectSidebar)
        deleteProjectSidebar.addEventListener("click", function(pointer) {
            deleteProject(pointer)
        })

        document.getElementById("projects-list").appendChild(projectWrapper)

        document.getElementById("div-hidden").remove()

        project.addEventListener("click", () => {
            updateRenderProjectTasks(project)
        })

        window.localStorage.setItem(projectHolder.name, JSON.stringify(projectHolder))

    } else {
        let span = document.createElement("span")
        span.textContent = "Please input a name."
        document.getElementById("new-project-label").appendChild(span)
    }
}

function renameProject(pointer) {

    console.log("pointer.srcElement.id", pointer.srcElement.parentElement.previousElementSibling.id)

    let projectNameHolder = pointer.srcElement.parentElement.previousElementSibling

    let hideDiv = document.createElement("div")
        hideDiv.id = "div-hidden"
        document.body.append(hideDiv)

        let backDiv = document.createElement("div")
        backDiv.id = "back-div"
        hideDiv.append(backDiv)

        let divContent = document.createElement("p")
        divContent.textContent = "Rename a Project "
        divContent.id = "create-project-text"
        backDiv.append(divContent)

        divContent = document.createElement("label")
        divContent.htmlFor = "new-project-label"
        divContent.id = "new-project-label"
        divContent.textContent = "New Name:"
        backDiv.append(divContent)

        let inputDiv = document.createElement("input")
        inputDiv.id = "new-project-input"
        inputDiv.name = "new-project-input"
        inputDiv.minLength = "1"
        inputDiv.value = projectNameHolder.innerText
        divContent.append(inputDiv)

        divContent = document.createElement("button")
        divContent.id = "create-project-button"
        divContent.textContent = "Rename"
        backDiv.append(divContent)

        divContent.addEventListener("click", function()  {

            submitRenameProject(projectNameHolder)
            
        })

        divContent = document.createElement("button")
        divContent.id = "cancel-project-button"
        divContent.textContent = "Cancel"
        backDiv.append(divContent)

        divContent.addEventListener("click", () => {
            document.getElementById("div-hidden").remove()
        })
}

function submitRenameProject(node) {

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( project => {
        if (project.name == node.id) {
            console.log("MATCH!")
            project.title = document.getElementById("new-project-input").value
            node.innerText = project.title
            console.log("project.title",project.title)
            window.localStorage.setItem(project.name, JSON.stringify(project))
            return false
        }
        return true
    })
    document.getElementById("div-hidden").remove()

}

function deleteProject(pointer) {
    
    console.log("pointer.srcElement.id", pointer.srcElement.parentElement.previousElementSibling.id)

    let projectNameHolder = pointer.srcElement.parentElement.previousElementSibling

    let hideDiv = document.createElement("div")
        hideDiv.id = "div-hidden"
        document.body.append(hideDiv)

        let backDiv = document.createElement("div")
        backDiv.id = "back-div-delete"
        hideDiv.append(backDiv)

        let divContent = document.createElement("p")
        divContent.textContent = "Are you Sure You want to delete the project?"
        divContent.style.gridArea = "1 / 1 / 1 / 3"
        divContent.style.fontSize = "2rem"
        divContent.style.textAlign = "center"
        backDiv.append(divContent)

        divContent = document.createElement("button")
        divContent.id = "create-project-button"
        divContent.style.backgroundColor = "red"
        divContent.textContent = "Delete"
        divContent.style.gridArea = "2 / 1 / 2 / 1"
        backDiv.append(divContent)

        divContent.addEventListener("click", function()  {

            submitDeleteProject(projectNameHolder)
            
        })

        divContent = document.createElement("button")
        divContent.id = "cancel-project-button"
        divContent.textContent = "Cancel"
        divContent.style.gridArea = "2 / 2 / 2 / 3"
        backDiv.append(divContent)

        divContent.addEventListener("click", () => {
            document.getElementById("div-hidden").remove()
        })
}

function submitDeleteProject(node) {

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( project => {
        if (project.name == node.id) {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.splice((_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.indexOf(project)),1)
            window.localStorage.removeItem(project.name)
            node.parentElement.remove()
            return false
        }
        return true
    })
    document.getElementById("div-hidden").remove()
}

// Update the task renderer based on the selected Projects
function updateRenderProjectTasks(projectNode) {

    console.log("entered renderProjectTasks ",projectNode)

    // If already in the project don't rerender
    // if (currentProject == projectNode.id) return

    // Set the background color
    if (document.querySelector(".project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    projectNode.classList.add("project-current")

    // Remove background selection color from sidebar items
    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    // Set current working project
    currentProject = projectNode.id

    document.querySelectorAll(".project-options-sidebar").forEach( node => {
        node.remove()
    })


    let projectOptions = document.createElement("div")
    projectOptions.classList.add("project-options-sidebar")
    projectNode.parentElement.append(projectOptions)

    let editProject = document.createElement("div")
    editProject.classList.add("rename-project")
    editProject.innerText = "Rename"
    projectOptions.append(editProject)
    editProject.addEventListener("click", function(pointer) {
        renameProject(pointer)
    })

    let deleteProjectSidebar = document.createElement("div")
    deleteProjectSidebar.classList.add("delete-project")
    deleteProjectSidebar.innerText = "Delete"
    projectOptions.append(deleteProjectSidebar)
    deleteProjectSidebar.addEventListener("click", function(pointer) {
        deleteProject(pointer)
    })


    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        if(element.name === projectNode.id) {
            
            document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
            document.getElementById("current-view-port").textContent = element.title

            // let projectHolder = document.getElementById("tasks-list")
            console.log("entering forEach ",element)
            element.allItems.forEach(element => {
                console.log("entered forEach ",projectNode.textContent)

                renderTaskToDom(element)

            })
            inboxView = false
        }
    })

}

//#region ---- Sidebar Logic and Rendering ----
// Renders all tasks from every project to the DOM
document.getElementById("inbox").addEventListener("click", function() {
    inboxTasksRender()
})
function inboxTasksRender() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            renderTaskToDom(element)
        })
    })

    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.add("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    document.getElementById("current-view-port").textContent = "All Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    inboxView = true;

}

// Renders only todays tasks to the DOM
document.getElementById("today").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    todayTaskRenderer()
})
function todayTaskRenderer() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy + ".";

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            console.log("element.dueDate",element.dueDate)
            console.log(today)
            if (element.dueDate == today) renderTaskToDom(element)
        })
    })

    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks for Today."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.add("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    document.getElementById("current-view-port").textContent = "Today's Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }

    inboxView = false;
}

// Renders only this weeks tasks to the DOM
document.getElementById("this-week").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    weekTaskRenderer()
})
function weekTaskRenderer() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + " " + mm + " " + dd

    let currentWeek = reformatDate(today, "yyyy mm dd")
    currentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])( new Date(today))

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            let tasksWeek = reformatDate(element.dueDate, "yyyy mm dd")
            let elementYear = tasksWeek.slice(0,4)
            tasksWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])( new Date(tasksWeek))
            if (tasksWeek === currentWeek && yyyy == elementYear) renderTaskToDom(element)
        })
    })

    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks for the current Week."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.add("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    document.getElementById("current-view-port").textContent = "This Week's Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    inboxView = false;
}

// Renders only this month's tasks to the DOM
document.getElementById("this-month").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    monthTaskRenderer()
})
function monthTaskRenderer() {

    let today = new Date();
    let currentMonth = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // padStart Sets the maximum width of the string we want to extract and fills it with te next specified element from the left/beginning of the string in this case is "0"

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate.slice(3,5) === currentMonth) renderTaskToDom(element)
        })
    })


    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks for the current Month."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.add("active-sidebar")

    document.getElementById("current-view-port").textContent = "This Month's Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    inboxView = false;
}
//#endregion


//#region  ---- Sort By Logic and Rendering ----
// Sorts the current Project tasks by priority
document.getElementById("sort-priority").addEventListener("click", function(pointer) {
    sortByPriority(pointer)
})
function sortByPriority(pointer) {

    
    if (pointer.srcElement.classList.contains("low-to-high")) {
        pointer.srcElement.classList.remove("low-to-high")
        pointer.srcElement.classList.add("high-to-low")
        pointer.srcElement.innerText = "Priority: Descending"
        document.getElementById("sort-by-text").innerText = "Priority: Descending"
    } else {
        pointer.srcElement.classList.remove("high-to-low")
        pointer.srcElement.classList.add("low-to-high")
        pointer.srcElement.innerText = "Priority: Ascending"
        document.getElementById("sort-by-text").innerText = "Priority: Ascending"

    }

    if (document.getElementById("current-view-port").innerText == "All Tasks") {
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        if (pointer.srcElement.classList.contains("high-to-low")) {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Urgent Priority") renderTaskToDom(element)
                })
            })
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Regular Priority") renderTaskToDom(element)
                })
            })
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Low Priority") renderTaskToDom(element)
                })
            })
        } else {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Low Priority") renderTaskToDom(element)
                })
            })
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Regular Priority") renderTaskToDom(element)
                })
            })
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Urgent Priority") renderTaskToDom(element)
                })
            })
        }
    } else {
        let textWrapper = document.getElementById("tasks-list").childNodes
        let itemList = [];
        textWrapper.forEach( element => {
            itemList.push(element.firstChild.id)
        })
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        if (pointer.srcElement.classList.contains("high-to-low")) {
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Urgent Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Regular Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Low Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
        } else {
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Low Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Regular Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Urgent Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
        }
    }

    document.querySelectorAll(".task-priority").forEach( element => {
        element.style.fontWeight = "900"
    })

    document.getElementById("sort-check").innerText = "Check"
    document.getElementById("sort-check").classList = "order-by-options checked-last"

    document.getElementById("sort-date").innerText = "Due Date"
    document.getElementById("sort-date").classList = "order-by-options farther-to-closer"

    document.getElementById("sort-creation-date").innerText = "Creation Date"
    document.getElementById("sort-creation-date").classList = "order-by-options last-created-first"
}

// Sorts the current tasks by date
document.getElementById("sort-date").addEventListener("click", function(event) {
    sortByDate(event)
})
function sortByDate(event) {

    let orderedDates = [];

    let textWrapper = document.getElementById("tasks-list").childNodes
    let itemList = [];
    textWrapper.forEach( element => {
        itemList.push(element.firstChild.id)
    })
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})

    itemList.forEach( item => {
        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
            element.allItems.forEach(element => {
                if (element.id == item) {
                    orderedDates.push([element.dateValue, element.id])
                    // console.log("element.dueDate:",element.id)
                    // console.log("element.dateValue:",element.dateValue)
                }
            })
        })
    })

    orderedDates.sort()
    console.log("orderedDates:",orderedDates)

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    if (event.srcElement.classList.contains("closer-to-farther")){
        event.srcElement.classList.remove("closer-to-farther")
        event.srcElement.classList.add("farther-to-closer")
        event.srcElement.innerText = "Due Date: Ascending"
        document.getElementById("sort-by-text").innerText = "Due Date: Descending"

        orderedDates.reverse()
    } else {
        event.srcElement.classList.remove("farther-to-closer")
        event.srcElement.classList.add("closer-to-farther")
        event.srcElement.innerText = "Due Date: Descending"
        document.getElementById("sort-by-text").innerText = "Due Date: Ascending"
    }

    do {
        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
            element.allItems.every(task => {
                console.log("orderedDates.length",orderedDates.length)
                if (orderedDates.length == 0) {
                    return false;
                }
                if (task.id == orderedDates[0][1]) {
                    console.log("item[1]", orderedDates[0][1])
                    renderTaskToDom(task)
                    orderedDates.shift()
                    if (orderedDates.length == 0) {
                        return false;
                    }
                }
                return true
            })
            if (orderedDates.length == 0) {
                return false;
            }
            return true
        }) 
    } while (orderedDates.length != 0) 

    document.querySelectorAll(".due-date").forEach( element => {
        element.style.fontWeight = "900"
    })

    document.getElementById("sort-check").innerText = "Check"
    document.getElementById("sort-check").classList = "order-by-options checked-last"

    document.getElementById("sort-priority").innerText = "Priority"
    document.getElementById("sort-priority").classList = "order-by-options low-to-high"

    document.getElementById("sort-creation-date").innerText = "Creation Date"
    document.getElementById("sort-creation-date").classList = "order-by-options last-created-first"

}

// Sorts the current tasks by checked
document.getElementById("sort-check").addEventListener("click", function(pointer) {
    sortByCheckedStatus(pointer)
})
function sortByCheckedStatus(pointer) {

    if (pointer.srcElement.classList.contains("checked-first")) {
        pointer.srcElement.classList.remove("checked-first")
        pointer.srcElement.classList.add("checked-last")
        pointer.srcElement.innerText = "Checked: First"
        document.getElementById("sort-by-text").innerText = "Checked: Last"


    } else {
        pointer.srcElement.classList.remove("checked-last")
        pointer.srcElement.classList.add("checked-first")
        pointer.srcElement.innerText = "Checked: Last"
        document.getElementById("sort-by-text").innerText = "Checked: First"

    }


    if (inboxView) {

        if (pointer.srcElement.classList.contains("checked-first")) {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
                if (element.name === currentProject) {
                    element.allItems.forEach(element => {
                        if (element.checked === "Checked") renderTaskToDom(element)
                    })
                    return false
                }
                return true
            })
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
                if (element.name === currentProject) {
                    element.allItems.forEach(element => {
                        if (element.checked === "Unchecked") renderTaskToDom(element)
                    })
                    return false
                }
                return true
            })
        } else {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
            if (element.name === currentProject) {
                element.allItems.forEach(element => {
                    if (element.checked === "Unchecked") renderTaskToDom(element)
                })
                return false
            }
            return true
            })
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
                if (element.name === currentProject) {
                    element.allItems.forEach(element => {
                        if (element.checked === "Checked") renderTaskToDom(element)
                    })
                    return false
                }
                return true
            })
        }
    } else {

        let textWrapper = document.getElementById("tasks-list").childNodes
        let itemList = [];
        textWrapper.forEach( element => {
            itemList.push(element.firstChild.id)
        })
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})

        if (pointer.srcElement.classList.contains("checked-first")) {
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Checked") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Unchecked") renderTaskToDom(element)
                        }
                    })
                })
            })
        } else {
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Unchecked") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Checked") renderTaskToDom(element)
                        }
                    })
                })
            })
        }
    }

    document.getElementById("sort-priority").innerText = "Priority"
    document.getElementById("sort-priority").classList = "order-by-options low-to-high"
    document.getElementById("sort-date").innerText = "Due Date"
    document.getElementById("sort-date").classList = "order-by-options farther-to-closer"
    document.getElementById("sort-creation-date").innerText = "Creation Date"
    document.getElementById("sort-creation-date").classList = "order-by-options last-created-first"
}

// Sorts task items by creation date
document.getElementById("sort-creation-date").addEventListener("click", function(pointer) {
    sortByCreationDate(pointer);

})
function sortByCreationDate(pointer) {

    let textWrapper = document.getElementById("tasks-list").childNodes
    let itemList = [];
    textWrapper.forEach( element => {
        itemList.push(element.firstChild.id)
    })

    let sortedItemListByObjectOrder = [];
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            itemList.forEach( item => {
                if (item == element.id) sortedItemListByObjectOrder.push(element.id)
            })
        })
    })

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    if (pointer.srcElement.classList.contains("last-created-first")) {
        pointer.srcElement.classList.remove("last-created-first")
        pointer.srcElement.classList.add("first-created-first")
        pointer.srcElement.innerText = "Creation Date: Descending"
        document.getElementById("sort-by-text").innerText = "Creation Date: Ascending"

        sortedItemListByObjectOrder.reverse()
    } else {
        pointer.srcElement.classList.remove("first-created-first")
        pointer.srcElement.classList.add("last-created-first")
        pointer.srcElement.innerText = "Creation Date: Ascending"
        document.getElementById("sort-by-text").innerText = "Creation Date: Descending"

    }

    console.log("itemList[0]",itemList[0])
    sortedItemListByObjectOrder.forEach( item => {
        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
            element.allItems.forEach(element => {
                if (element.id == item) {
                    renderTaskToDom(element)
                }
            })
        })
    })


    document.getElementById("sort-priority").innerText = "Priority"
    document.getElementById("sort-priority").classList = "order-by-options low-to-high"
    document.getElementById("sort-date").innerText = "Due Date"
    document.getElementById("sort-date").classList = "order-by-options farther-to-closer"
    document.getElementById("sort-check").innerText = "Check"
    document.getElementById("sort-check").classList = "order-by-options checked-last"
}

//#endregion

// Adds the Sort by list on click listener
let orderByNode = document.getElementById("sort-by-text")
orderByNode.addEventListener("click", () => {
        
    if (document.getElementById("dropdown").style.visibility == "unset"){
        document.getElementById("dropdown").style.visibility = "hidden"
    } else {
        document.getElementById("dropdown").style.visibility = "unset"
    }

})

// Hides the Sort by list from the DOM
window.onclick = function(event) {
    if (!event.target.matches('#sort-by-text')) {
        document.getElementById("dropdown").style.visibility = "hidden"
    }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createToDoItem": () => (/* binding */ createToDoItem),
/* harmony export */   "toDoParent": () => (/* binding */ toDoParent)
/* harmony export */ });
/* harmony import */ var _DOMManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManipulation */ "./src/DOMManipulation.js");
/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheet.css */ "./src/stylesheet.css");




// Create the parent object logic for manipulating data from toDoChild child objects
const toDoParent = {
    allProjects: [],
    summary:  function() {
        console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.checked)
    },
}

// Factory function to create a To Do item
function createProject(getName) {
    
    let project = Object.create(toDoParent)

    project.title = getName
    project.name = getName + Math.random(10);
    project.allItems = [];
    toDoParent.allProjects.push(project)

    return project;
}

// Create a To Do object
function createToDoItem(getTitle, getDescription, getDueDate, getPriority, getNotes, getChecked, project) {

    let toDoChild = Object.create(project)

    toDoChild.id = getTitle + Math.random(10)
    toDoChild.title = getTitle
    toDoChild.description = getDescription ? getDescription : ""
    toDoChild.dueDate = getDueDate ? getDueDate : "No Due Date"
    toDoChild.priority = getPriority ? getPriority : "Regular Priority"
    toDoChild.notes = getNotes ? getNotes : "No Notes"
    toDoChild.checked = "Unchecked"
    toDoChild.dateValue = (Number(getDueDate.slice(0,2))) + ((Number(getDueDate.slice(3,5)) - 1) * 30) + Number(getDueDate.slice(6,10) * 365)

    project.allItems.push(toDoChild)

    // Can create its own functions here too like this
    // toDoItem.summary = function() {
    //     console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.checklist)
    // }

    return toDoChild;
};

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    console.log(localStorage)
    for (let i=0;i<localStorage.length;i++) {

            let projectToLoad = JSON.parse(localStorage.getItem(localStorage.key(i)))
            console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
            Object.setPrototypeOf(projectToLoad, toDoParent)
            console.log(projectToLoad)
            toDoParent.allProjects.push(projectToLoad)
            projectToLoad.allItems.forEach(element => {
                Object.setPrototypeOf(element, projectToLoad)
            });
    }
  }
  else {
    // Too bad, no localStorage for us
    alert("Can not access local Storage. All data will be lost on page refresh or close.")
  }

console.log("-----------------------")




//#region ---- Default_Project Task Object data insertion ----
// window.localStorage.clear()
// const toDoListProject = new createProject("To Do List Project")
// const testProject = new createProject("Test Project")  



// createToDoItem("Complete The To Do List","Do it.","16.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Solve the quantum paradigm","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Pick up Money","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","17.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Figure the Almond Principle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","16.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Compute the Pi figure number","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","13.09.2022.","Regular Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Continue the disillusion of the delusion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","05.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",testProject);
// createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",testProject);



// toDoParent.allProjects.forEach( project => {
    
//     window.localStorage.setItem(project.name, JSON.stringify(project))
//     console.log("AA")
// })


// for (let i=0;i<localStorage.length;i++) {

//     if (localStorage.key(i).slice(0,7) == "Project") {
//         let projectToLoad = JSON.parse(localStorage.getItem(localStorage.key(i)))
//         console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
//         Object.setPrototypeOf(projectToLoad, toDoParent)
//         console.log(projectToLoad)
//         toDoParent.allProjects.push(projectToLoad)
//     }
// }

// toDoParent.allProjects.every( project => {
//     project.allItems.forEach( item => {
//         window.localStorage.setItem(item.id, JSON.stringify(item))
//     })
// })


// toDoParent.allProjects.forEach( project => {
//     window.localStorage.setItem(project.name, JSON.stringify(project))
//     project.allItems.forEach( item => {
//         window.localStorage.setItem(item.id, JSON.stringify(item))
//     })
// })

// console.log("ITEM TASK",JSON.parse(window.localStorage.getItem('Complete The To Do List')))

// console.log("localStorage",localStorage)
// for (var i = 0; i < localStorage.length; i++){
//     console.log("JSON.parse(item)", JSON.parse(localStorage.getItem(localStorage.key(i))))
//     let holder = JSON.parse(localStorage.getItem(localStorage.key(i)))
//     Object.setPrototypeOf(holder, testProject)
//     testProject.allItems.push(holder)
//     // $('body').append(localStorage.getItem(localStorage.key(i)));
// }

// console.log("testProject.allItems[4].name",testProject.allItems[4])

// let objectFromStorage = JSON.parse(localStorage.getItem('Solve the quantum paradigm'))

// console.log("objectFromStorage",objectFromStorage.id)
//         window.localStorage.clear()
//         console.log("Solve the quantum paradigm",localStorage.getItem('Solve the quantum paradigm'))
        

// console.log("testProject.allItems",testProject.allItems)

// let itemToChange = testProject.allItems[0]
// console.log("itemToChange",itemToChange)
// Object.setPrototypeOf(itemToChange, toDoListProject);
// console.log("itemToChange",itemToChange)

//#endregion


;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.startupRenderProjectTasks)()
;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.startupLibrarySidebarRenderer)()
;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.addTaskInterface)()
;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.addNewProject)()

//#region ---- Leftover, practice, tested code ----

// console.log("user proto",Object.getPrototypeOf(user))

// console.log(Object.getPrototypeOf(user))
// Object.setPrototypeOf(user, toDoParent);
// console.log(toDoParent.isPrototypeOf(user))
// console.log(typeof user)
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getOwnPropertyNames(toDoParent).filter(item => typeof toDoParent[item] === 'function'))

// user.summary()
// console.log(user)
// console.log("defaultProject's items:",defaultProject.allItems)
// console.log("toDoParent's projects:",toDoParent.allProjects)

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = yyyy + " " + mm + " " + dd

// console.log("today for week",today)
// let week = getWeek( new Date(today))
// console.log("current week",week)

// today = mm + '.' + dd + '.' + yyyy + ".";
// console.log("Today's Date",today);
//#endregion







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsS0FBSyxPQUFPLHFGQUFxRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixhQUFhLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssc0JBQXNCLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVks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QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtRTtBQUNsQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxrRUFBOEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5Q0FBeUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUNBQXlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUE2QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUNBQWlDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGtFQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBNEI7QUFDaEM7QUFDQSxZQUFZLGlFQUE2QixFQUFFLGtFQUE4QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxrRUFBOEI7QUFDbEM7QUFDQTtBQUNBLG1GQUFtRixpQkFBaUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyRUFBMkUsaUJBQWlCO0FBQzVGLElBQUksa0VBQThCO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxpQkFBaUI7QUFDNUY7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBOEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBeUI7QUFDekIsZ0ZBQTZCO0FBQzdCLG1FQUFnQjtBQUNoQixnRUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0Q7QUFDcEQ7QUFDQTtBQUNBOzs7Ozs7O1VDNU5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9zdHlsZXNoZWV0LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0RGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0V2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3N0eWxlc2hlZXQuY3NzP2Q3NGQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL0RPTU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIGZvciBJbnRlcm5ldCBFeHBsb3JlciwgRWRnZSAqL1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIGZvciBGaXJlZm94ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgXFxyXFxuICB9XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcclxcbiAgfVxcclxcblxcclxcbioge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDd2aCA5M3ZoIC8gMTd2dyA4M3Z3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAxO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItY29udGVudHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94LCAjdG9kYXksICN0aGlzLXdlZWssICN0aGlzLW1vbnRoIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94OmhvdmVyLCAjdG9kYXk6aG92ZXIsICN0aGlzLXdlZWs6aG92ZXIsICN0aGlzLW1vbnRoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3g6YWN0aXZlLCAjdG9kYXk6YWN0aXZlLCAjdGhpcy13ZWVrOmFjdGl2ZSwgI3RoaXMtbW9udGg6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNDIsIDI1MCk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zaWRlYmFyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiAgZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIGF1dG8gLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1vcHRpb25zLXNpZGViYXIge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5yZW5hbWUtcHJvamVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIG9yYW5nZTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZW5hbWUtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTExKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbmFtZS1wcm9qZWN0OmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2NiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjYwNyk7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jdXJyZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxNWZyIC8gM2ZyIDNmciAzZnI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI0MiwgMjUwKTtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMDFyZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC12aWV3LXBvcnQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzb3J0LWJ5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDEgLyA0O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NvcnQtYnktdGV4dCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJvcGRvd24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdG9wOiAxMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ5LW9wdGlvbnMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ5LW9wdGlvbnM6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyA0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB3aWR0aDogMTdyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWF4LWhlaWdodDogMTRyZW07XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHJvdy1nYXA6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm8ge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBhdXRvIDE1ZnIgM2ZyIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAuNXJlbSAuMXJlbSByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCAxODEsIDMwLCAwLjcwNCk7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IC43cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAxIC8gMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAxIC8gNDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4xcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIHJnYigxMzAsIDEzMCwgMTMwKTtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNSAvIDEgLyA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYigyMzQsIDE0MiwgNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMTQyLCA0NCwgMC40MzMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDYgLyAxIC8gNjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIHJnYigyNTUsIDgwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4MCwgODAsIDAuNDg1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4wMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDk5LjUlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNkaXYtaGlkZGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3ODA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWRpdiB7XFxyXFxuICAgIHdpZHRoOiAzMyU7XFxyXFxuICAgIGhlaWdodDogMzMlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMzByZW07XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNkYXRlLWFuZC1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLWRhdGUtaW5wdXQgPiBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1wcm9qZWN0LWlucHV0LWZvci10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtcHJvamVjdC1pbnB1dC1mb3ItdGFzayA+IHNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGhlaWdodDogMi4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4tZXJyb3ItdGFzay10aXRsZS1pbnB1dCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUtaW5wdXQtaW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZS1pbnB1dC1pbnZhbGlkOnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjc3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0IHtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufSAqL1xcclxcblxcclxcbmZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDU2LCAxNTIsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDVyZW0gcmdiKDU3LCAxNTksIDI1NSk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWRpdiA+IGlucHV0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTgyLCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4xcmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYmFjay1kaXYge1xcclxcbiAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmFjay1kaXYtZGVsZXRlIHtcXHJcXG4gICAgaGVpZ2h0OiAyNSU7XFxyXFxuICAgIHdpZHRoOiAxMjAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtdGV4dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAgNzAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1sYWJlbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1sYWJlbCA+IHNwYW4ge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0OmZvY3VzLCAjbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYig1NiwgMTUyLCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjNyZW0gLjFyZW0gcmdiKDU3LCAxNTksIDI1NSk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDMgLyAyO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWYwMDtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyAzIC8gMztcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjY2FuY2VsLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogN3ZoIDkzdmggLyAxN3Z3IDgzdnc7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogNXZoIDk1dmggLyAxMnZ3IDg4dnc7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdCQUF3QixFQUFFLGdDQUFnQztJQUMxRCxxQkFBcUIsRUFBRSxnQkFBZ0I7SUFDdkMsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksYUFBYSxFQUFFLGtDQUFrQztFQUNuRDs7QUFFRjtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7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WixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZjtBQUNKOztBQUVBOztBQUVBOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBmb3IgRmlyZWZveCAqL1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IFxcclxcbiAgfVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7ICovXFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA3dmggOTN2aCAvIDE3dncgODN2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLWNvbnRlbnRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLXNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxufVxcclxcblxcclxcbiNpbmJveCwgI3RvZGF5LCAjdGhpcy13ZWVrLCAjdGhpcy1tb250aCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNpbmJveDpob3ZlciwgI3RvZGF5OmhvdmVyLCAjdGhpcy13ZWVrOmhvdmVyLCAjdGhpcy1tb250aDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94OmFjdGl2ZSwgI3RvZGF5OmFjdGl2ZSwgI3RoaXMtd2VlazphY3RpdmUsICN0aGlzLW1vbnRoOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQyLCAyNTApO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGhlaWdodDogMjB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc2lkZWJhci13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogIGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciBhdXRvIC8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtb3B0aW9ucy1zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVuYW1lLXByb2plY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBvcmFuZ2U7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVuYW1lLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjUxMSk7XFxyXFxufVxcclxcblxcclxcbi5yZW5hbWUtcHJvamVjdDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjYsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC42MDcpO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY3VycmVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMTVmciAvIDNmciAzZnIgM2ZyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNDIsIDI1MCk7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjAxcmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2s6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdmlldy1wb3J0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc29ydC1ieSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAxIC8gNDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNzb3J0LWJ5LXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Ryb3Bkb3duIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRvcDogMTIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1ieS1vcHRpb25zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1ieS1vcHRpb25zOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbi8qIC50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufSAqL1xcclxcblxcclxcbi5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE0cmVtO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICByb3ctZ2FwOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gYXV0byAxNWZyIDNmciBhdXRvIGF1dG8gYXV0bztcXHJcXG4gICAgY29sdW1uLWdhcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgLjVyZW0gLjFyZW0gcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MCwgMTgxLCAzMCwgMC43MDQpO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuN3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC40cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHkge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMSAvIDQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCByZ2IoMTMwLCAxMzAsIDEzMCk7XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDUgLyAxIC8gNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoMjM0LCAxNDIsIDQ0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDE0MiwgNDQsIDAuNDMzKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA2IC8gMSAvIDY7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCByZ2IoMjU1LCA4MCwgODApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgODAsIDgwLCAwLjQ4NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eTpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDI1cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiA5OS41JTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tdGl0bGUge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGl2LWhpZGRlbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzgwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1kaXYge1xcclxcbiAgICB3aWR0aDogMzMlO1xcclxcbiAgICBoZWlnaHQ6IDMzJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1hbmQtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLWRhdGUtaW5wdXQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1kYXRlLWlucHV0ID4gaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtcHJvamVjdC1pbnB1dC1mb3ItdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLXByb2plY3QtaW5wdXQtZm9yLXRhc2sgPiBzZWxlY3Qge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXQge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlLWlucHV0LWludmFsaWQge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUtaW5wdXQtaW52YWxpZDp2YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogI3NwYW4tZXJyb3ItdGFzay10aXRsZS1pbnB1dCB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5mb3JtID4gbGFiZWwge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYig1NiwgMTUyLCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjA1cmVtIHJnYig1NywgMTU5LCAyNTUpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWRpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYgPiBpbnB1dCB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXN1Ym1pdCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDE4MiwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXN1Ym1pdDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMXJlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2JhY2stZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAyNSU7XFxyXFxuICAgIHdpZHRoOiAxMjAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JhY2stZGl2LWRlbGV0ZSB7XFxyXFxuICAgIGhlaWdodDogMjUlO1xcclxcbiAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LXRleHQge1xcclxcbiAgICBmb250LXdlaWdodDogIDcwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtbGFiZWwge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtbGFiZWwgPiBzcGFuIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1pbnB1dDpmb2N1cywgI25ldy1wcm9qZWN0LWlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoNTYsIDE1MiwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4zcmVtIC4xcmVtIHJnYig1NywgMTU5LCAyNTUpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyAzIC8gMjtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlmMDA7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDM7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcXHJcXG4gICAgLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuICAgICNjb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDd2aCA5M3ZoIC8gMTd2dyA4M3Z3O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDI1NjBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICNjb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDV2aCA5NXZoIC8gMTJ2dyA4OHZ3O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHswfDF8MnwzfDR8NXw2fSB0aGUgZGF5IG9mIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHdlZWsgaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgcmV0dXJuIGRheTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZldlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHsxfDJ8M3w0fDV8Nnw3fSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhclxuICogQHJldHVybnMge051bWJlcn0gdGhlIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbztcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFdlZWtZZWFyIGZyb20gXCIuLi9nZXRXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9Eb1BhcmVudCwgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9Eb0l0ZW0gfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQge2dldERheSwgZ2V0V2VlaywgaXNUb2RheX0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5sZXQgY3VycmVudFByb2plY3Q7XHJcbmxldCBpbmJveFZpZXc7XHJcblxyXG4vLyBDcmVhdGVzIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzayBhbmQgYXBwZW5kcyBpdCB0byB0aGUgRE9NIHVuZGVyIHRoZSB0YXNrXHJcbmZ1bmN0aW9uIGV4cGFuZFRhc2tEZXNjcmlwdGlvbkxpc3RlbmVycyhlbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQpIHtcclxuXHJcbiAgICBsZXQgYXBwZW5kRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICBpZiAoYXBwZW5kRWxlbWVudC5jaGlsZE5vZGVzWzFdID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGFzayBhY3Rpb24gYnV0dG9uc1xyXG4gICAgICAgIGxldCB0YXNrQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0YXNrQWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwidGFzay1hY3Rpb25zXCIpXHJcbiAgICAgICAgYXBwZW5kRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrQWN0aW9ucylcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIERlc2NyaXB0aW9uIFRpdGxlXHJcbiAgICAgICAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi10aXRsZVwiKVxyXG4gICAgICAgIHRhc2tEZXNjLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246XCJcclxuICAgICAgICB0YXNrQWN0aW9ucy5hcHBlbmRDaGlsZCh0YXNrRGVzYylcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIERlc2NyaXB0aW9uXHJcbiAgICAgICAgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgdGFza0Rlc2MuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25FbGVtZW50XHJcbiAgICAgICAgdGFza0FjdGlvbnMuYXBwZW5kQ2hpbGQodGFza0Rlc2MpXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBlbmRFbGVtZW50LmNoaWxkTm9kZXNbMV0ucmVtb3ZlKClcclxuICAgIH1cclxufVxyXG5cclxuLy8gUmVuZGVycyB0aGUgdGFzayBvbiB0aGUgRE9NIGJhc2VkIG9uIHRoZSBwcm92aWRlZCB0b0RvSXRlbVxyXG5mdW5jdGlvbiByZW5kZXJUYXNrVG9Eb20gKGVsZW1lbnQpIHtcclxuXHJcbiAgICAvL1JlbmRlciB0aGUgaXRlbXMgdGFzayBkYXRhIHRvIHRoZSBkaXZcclxuXHJcbiAgICBsZXQgYXBwZW5kVGhlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKVxyXG4gICAgLy9DcmVhdGUgdGhlIHRhc2sgd3JhcHBlclxyXG4gICAgbGV0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtdGFzay13cmFwcGVyXCIpXHJcbiAgICB0YXNrV3JhcHBlci5pZCA9IGVsZW1lbnQubmFtZVxyXG4gICAgYXBwZW5kVGhlVGFzay5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcilcclxuICAgIC8vQ3JlYXRlIHRhc2sgaW5mb1xyXG4gICAgbGV0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtdGFzay1pbmZvXCIpXHJcbiAgICB0YXNrSW5mby5pZCA9IGVsZW1lbnQuaWRcclxuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKVxyXG5cclxuICAgIC8vIC0tLS0gQ3JlYXRlIHRoZSB0YXNrIGluZm8gc3RydWN0dXJlIGFuZCBkYXRhIC0tLS1cclxuXHJcbiAgICAvLyBDcmVhdGUgY2hlY2sgdGFzayBidXR0b25cclxuICAgIGxldCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBpZiAoZWxlbWVudC5jaGVja2VkID09PSBcIlVuY2hlY2tlZFwiKSB0YXNrQ2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrLXRhc2tcIilcclxuICAgIGVsc2UgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXRhc2tcIilcclxuICAgIHRhc2tDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgIHRvZ2dsZUNoZWNrVGFzayhwb2ludGVyKVxyXG4gICAgfSlcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tDaGVjaywgZWxlbWVudC5kZXNjcmlwdGlvbilcclxuXHJcbiAgICAvLyBDcmVhdGUgdGl0bGVcclxuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxyXG5cclxuICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBleHBhbmRUYXNrRGVzY3JpcHRpb25MaXN0ZW5lcnModGFza1RpdGxlLCBlbGVtZW50LmRlc2NyaXB0aW9uKVxyXG4gICAgfSlcclxuICAgICAgICBcclxuICAgIC8vQ3JlYXRlIERhdGVcclxuICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKVxyXG4gICAgaWYgKGVsZW1lbnQuZHVlRGF0ZSAhPSBcIk5vIER1ZSBEYXRlXCIpIHtcclxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHJlZm9ybWF0RGF0ZShlbGVtZW50LmR1ZURhdGUsIFwiZGF5XCIpXHJcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgKz0gcmVmb3JtYXREYXRlKGVsZW1lbnQuZHVlRGF0ZSwgXCJkZC5tb250aC55eXl5LlwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZVxyXG4gICAgfVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0RhdGUpXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRhc2sgcHJpb3JpdHlcclxuICAgIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpXHJcbiAgICB0YXNrSXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHlcclxuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09IFwiVXJnZW50IFByaW9yaXR5XCIpIHtcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5ib3JkZXIgPSBcIi4wNXJlbSBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC41KVwiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuY29sb3IgPSBcInJlZFwiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCJcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSBcIlJlZ3VsYXIgUHJpb3JpdHlcIikge1xyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmJvcmRlciA9IFwiLjA1cmVtIHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKVwiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIlxyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09IFwiTG93IFByaW9yaXR5XCIpIHtcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5ib3JkZXIgPSBcIi4wNXJlbSBzb2xpZCByZ2IoNzMsIDE5MCwgMClcIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmNvbG9yID0gXCJncmVlblwiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCJcclxuICAgIH1cclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tJdGVtKVxyXG5cclxuICAgIC8vIENyZWF0ZSBlZGl0IHRhc2sgYnV0dG9uXHJcbiAgICBsZXQgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIpXHJcbiAgICB0YXNrRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiXHJcbiAgICB0YXNrRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgIGFkZEVkaXRUYXNrTGlzdGVuZXJzKHRhc2tFZGl0LCBlbGVtZW50LCBwb2ludGVyKVxyXG4gICAgfSlcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tFZGl0KVxyXG5cclxuICAgIC8vIENyZWF0ZSBkZWxldGUgdGFzayBidXR0b25cclxuICAgIGxldCB0YXNrSURlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tJRGVsLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiKVxyXG4gICAgdGFza0lEZWwudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXHJcbiAgICB0YXNrSURlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrSURlbClcclxuICAgIH0pXHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrSURlbClcclxufVxyXG5cclxuLy8gQ3JlYXRlcyB0aGUgYWRkIGEgdGFza3MgaW50ZXJmYWNlIGFuIHBhc3NlcyB0aGUgaW5wdXR0ZWQgZGF0YSB0byBzdWJtaXRBZGROZXdUYXNrKClcclxuZnVuY3Rpb24gYWRkVGFza0ludGVyZmFjZSgpIHtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICBsZXQgZGl2SGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZGl2SGlkZGVuLmlkID0gXCJkaXYtaGlkZGVuXCJcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2SGlkZGVuKVxyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICAgIGxldCBjbG9zZUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjbG9zZUVkaXQuaWQgPSBcImNhbmNlbC1idXR0b25cIlxyXG4gICAgY2xvc2VFZGl0LnRleHRDb250ZW50ID0gXCIgQ2FuY2VsIFwiXHJcbiAgICBjbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjbG9zZUVkaXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUVkaXQpXHJcblxyXG4gICAgbGV0IGFkZDV0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGFkZDV0YXNrcy5pZCA9IFwiYWRkLTUtdGFza3NcIlxyXG4gICAgYWRkNXRhc2tzLnRleHRDb250ZW50ID0gXCIgQWRkIDUgZmlsbGVyIHRhc2tzIFwiXHJcbiAgICBhZGQ1dGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRhc2tzSW5pdGlhbEV2ZW50QWRkZXIoKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkNXRhc2tzKVxyXG5cclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwidGl0bGVcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCJcclxuICAgIGxhYmVsLmlkID0gXCJsYWJlbC10YXNrLXRpdGxlLWlucHV0XCJcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgaW5wdXQubmFtZSA9IFwidGl0bGVcIlxyXG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiXHJcbiAgICBpbnB1dC5pZCA9IFwidGFzay10aXRsZS1pbnB1dFwiXHJcbiAgICBpbnB1dC5taW5MZW5ndGggPSBcIjFcIlxyXG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsZXQgZGl2RGF0ZUFuZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBkaXZEYXRlQW5kUHJvamVjdC5pZCA9IFwiZGF0ZS1hbmQtcHJvamVjdFwiXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCJcclxuICAgIGxhYmVsLmlkID0gXCJsYWJlbC1kYXRlLWlucHV0XCJcclxuICAgIGRpdkRhdGVBbmRQcm9qZWN0LmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0LmlkID0gXCJkYXRlLWlucHV0XCJcclxuICAgIGlucHV0Lm5hbWUgPSBcImRhdGVcIlxyXG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiXHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwicHJvamVjdFwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXHJcbiAgICBsYWJlbC5pZCA9IFwibGFiZWwtcHJvamVjdC1pbnB1dC1mb3ItdGFza1wiXHJcbiAgICBkaXZEYXRlQW5kUHJvamVjdC5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxyXG4gICAgaW5wdXQuaWQgPSBcInByb2plY3QtaW5wdXQtZm9yLXRhc2tcIlxyXG4gICAgaW5wdXQubmFtZSA9IFwicHJvamVjdFwiXHJcbiAgICBpbnB1dC5zaXplID0gXCIxXCJcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09IGVsZW1lbnQubmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGVsZW1lbnQudGl0bGVcclxuICAgICAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IGVsZW1lbnQubmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGVsZW1lbnQudGl0bGVcclxuICAgICAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdkRhdGVBbmRQcm9qZWN0KVxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiU2V0IFByaW9yaXR5OiBcIlxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwicHJpb3JpdHktZGl2XCJcclxuXHJcbiAgICAvLyBSYWRpbyBjaG9pY2VzXHJcbiAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJsb3ctcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIkxvdyBQcmlvcml0eVwiXHJcbiAgICBsZXQgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJsb3ctcHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiTG93IFByaW9yaXR5XCJcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcInJlZ3VsYXItcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XHJcbiAgICByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcInJlZ3VsYXItcHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiUmVndWxhciBQcmlvcml0eVwiXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJ1cmdlbnQtcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIlVyZ2VudCBQcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcInVyZ2VudC1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbnQgUHJpb3JpdHlcIlxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImRlc2NyaXB0aW9uXCIpXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIERlc2NyaXB0aW9uXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcbiAgICBpbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKVxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjcwXCIpXHJcbiAgICBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gJ09wZW4gU2FucydcclxuICAgIGlucHV0LnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCJcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcImZvcm0tc3VibWl0XCJcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc3VibWl0TmV3VGFzayAoZm9ybSlcclxuICAgIH0pXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcclxuXHJcbiAgICBkaXZIaWRkZW4uYXBwZW5kQ2hpbGQoZm9ybSlcclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBSZWZvcm1hdHMgdGhlIGRhdGVzIGJhc2VkIG9uIHRoZSBkZXNpcmVkIG91dHB1dFxyXG5mdW5jdGlvbiByZWZvcm1hdERhdGUoaW5wdXQsIG91dHB1dEZvcm1hdCkge1xyXG5cclxuICAgIGlmIChpbnB1dCA9PSBcIk5vIER1ZSBEYXRlXCIpIHJldHVybiBcIk5vIER1ZSBEYXRlXCJcclxuICAgIGxldCB5ZWFyO1xyXG4gICAgbGV0IG1vbnRoO1xyXG4gICAgbGV0IGRheTtcclxuXHJcbiAgICBpZiAob3V0cHV0Rm9ybWF0ID09IFwiZGQubW0ueXl5eS5cIikgeyAvLyBpbnB1dCBmb3JtYXQ6IHl5eXktbW0tZGRcclxuICAgICAgICAvL2Zvcm1hdCBkYXRlIGZyb20gaHRtbCBkYXRlIGVsZW1lbnQgdG8gb2JqZWN0IGZvcm1hdFxyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zbGljZSgwLDQpXHJcbiAgICAgICAgbW9udGggPSBpbnB1dC5zbGljZSg1LCA3KVxyXG4gICAgICAgIGRheSA9IGlucHV0LnN1YnN0cigtMilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlucHV0OiB5eXl5LW1tLWRkIG91dHB1dDpcIixkYXkgKyBcIi5cIiArIG1vbnRoICsgXCIuXCIgKyB5ZWFyICsgXCIuXCIpXHJcbiAgICAgICAgcmV0dXJuIGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXIgKyBcIi5cIlxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChvdXRwdXRGb3JtYXQgPT0gXCJ5eXl5LW1tLWRkXCIpIHsgLy8gaW5wdXQgZm9ybWF0OiBkZC5tb250aC55eXl5LlxyXG4gICAgICAgIC8vZm9ybWF0IGRhdGUgZnJvbSBPYmplY3QgZGF0ZSB0byBodG1sIGRhdGUgZWxlbWVudCBmb3JtYXRcclxuICAgICAgICB5ZWFyID0gaW5wdXQuc3Vic3RyKC01KVxyXG4gICAgICAgIHllYXIgPSB5ZWFyLnNsaWNlKDAsNClcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDMsIDUpXHJcbiAgICAgICAgZGF5ID0gaW5wdXQuc2xpY2UoMCwgMilcclxuICAgICAgICBpbnB1dCA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXlcclxuICAgICAgICByZXR1cm4gKGlucHV0KVxyXG5cclxuICAgIH0gZWxzZSBpZiAob3V0cHV0Rm9ybWF0ID09IFwieXl5eSBtbSBkZFwiKSB7IC8vIGlucHV0IGZvcm1hdDogZGQubW9udGgueXl5eS5cclxuICAgICAgICAvL2Zvcm1hdCBkYXRlIGZyb20gT2JqZWN0IGRhdGUgYmUgcGFyc2VkIGZvciBkYXRlLWZuIG1vZHVsZSB0byBnZXQgdGhlIHdlZWtcclxuICAgICAgICB5ZWFyID0gaW5wdXQuc3Vic3RyKC01KVxyXG4gICAgICAgIHllYXIgPSB5ZWFyLnNsaWNlKDAsNClcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDMsIDUpXHJcbiAgICAgICAgZGF5ID0gaW5wdXQuc2xpY2UoMCwgMilcclxuICAgICAgICBpbnB1dCA9IHllYXIgKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyBkYXlcclxuICAgICAgICByZXR1cm4gKGlucHV0KVxyXG5cclxuICAgIH0gZWxzZSBpZiAob3V0cHV0Rm9ybWF0ID09IFwiZGQubW9udGgueXl5eS5cIikgeyAvLyBpbnB1dCBmb3JtYXQgZGQubW0ueXl5eS5cclxuICAgICAgICAvLyBmb3JtYXQgZGF0ZSBmcm9tIE9iamVjdCBkYXRlIHRvIHJlbmRlciBmb3JtYXQgZm9yIERPTVxyXG4gICAgICAgIGRheSA9IGlucHV0LnNsaWNlKDAsIDIpXHJcbiAgICAgICAgeWVhciA9IGlucHV0LnN1YnN0cigtNSlcclxuICAgICAgICB5ZWFyID0geWVhci5zbGljZSgwLDQpXHJcbiAgICAgICAgbW9udGggPSBpbnB1dC5zbGljZSgzLCA1KVxyXG4gICAgICAgIGlmIChtb250aCA9PSBcIjAxXCIpIG1vbnRoID0gXCJKYW51YXJ5XCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjAyXCIpIG1vbnRoID0gXCJGZWJydWFyeVwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwM1wiKSBtb250aCA9IFwiTWFyY2hcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDRcIikgbW9udGggPSBcIkFwcmlsXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA1XCIpIG1vbnRoID0gXCJNYXlcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDZcIikgbW9udGggPSBcIkp1bmVcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDdcIikgbW9udGggPSBcIkp1bHlcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDhcIikgbW9udGggPSBcIkF1Z3VzdFwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwOVwiKSBtb250aCA9IFwiU2VwdGVtYmVyXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjEwXCIpIG1vbnRoID0gXCJPY3RvYmVyXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjExXCIpIG1vbnRoID0gXCJOb3ZlbWJlclwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIxMlwiKSBtb250aCA9IFwiRGVjZW1iZXJcIlxyXG4gICAgICAgIC8vI3JlZ2lvbiAtLS0tIG1tIHRvIG1vbnRoIGZvcm1hdHRlclxyXG4gICAgICAgIC8vIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiSmFuXCIpIGlucHV0LnJlcGxhY2UoXCJKYW51YXJ5XCIsIFwiMDFcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiRmViXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkZlYnJ1YXJ5XCIsIFwiMDJcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiTWFyXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk1hcmNoXCIsIFwiMDNcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiQXByXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkFwcmlsXCIsIFwiMDRcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiTWF5XCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk1heVwiLCBcIjA1XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkp1blwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJKdW5lXCIsIFwiMDZcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiSnVsXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkp1bHlcIiwgXCIwN1wiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJBdWdcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiQXVndXN0XCIsIFwiMDhcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiU2VwXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIlNlcHRlbWJlclwiLCBcIjA5XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIk9jdFwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJPY3RvYmVyXCIsIFwiMTBcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiTm92XCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk5vdmVtYmVyXCIsIFwiMTFcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiRGVjXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkRlY2VtYmVyXCIsIFwiMTJcIilcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgcmV0dXJuIGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXIgKyBcIi5cIlxyXG5cclxuICAgIH0gZWxzZSBpZiAob3V0cHV0Rm9ybWF0ID0gXCJkYXlcIikgeyAvLyBpbnB1dCBmb3JtYXQgZGQubW0ueXl5eS5cclxuICAgICAgICAvLyBmb3JtYXQgZGF0ZSBmcm9tIE9iamVjdCBkYXRlIHRvIHJlbmRlciBkYXkgdG8gdGhlIERPTSB3aXRoIGRhdGUtZm5zIG1vZHVsZVxyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zdWJzdHIoLTUpXHJcbiAgICAgICAgeWVhciA9IHllYXIuc2xpY2UoMCw0KVxyXG4gICAgICAgIG1vbnRoID0gaW5wdXQuc2xpY2UoMywgNSlcclxuICAgICAgICBkYXkgPSBpbnB1dC5zbGljZSgwLCAyKVxyXG5cclxuICAgICAgICBpbnB1dCA9IHllYXIgKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyBkYXlcclxuICAgICAgICBpbnB1dCA9IGdldERheShuZXcgRGF0ZShpbnB1dCkpXHJcblxyXG4gICAgICAgIGlmIChpbnB1dCA9PSBcIjBcIikgaW5wdXQgPSBcIlN1bmRheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjFcIikgaW5wdXQgPSBcIk1vbmRheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjJcIikgaW5wdXQgPSBcIlRodXJzZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiM1wiKSBpbnB1dCA9IFwiV2VkbmVzZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiNFwiKSBpbnB1dCA9IFwiVHVlc2RheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjVcIikgaW5wdXQgPSBcIkZyaWRheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjZcIikgaW5wdXQgPSBcIlNhdHVyZGF5LCBcIlxyXG4gICAgICAgIHJldHVybiAoaW5wdXQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBDcmVhdGVzIHRoZSBlZGl0IGEgdGFzayBpbnRlcmZhY2Ugb24gdGhlIHByb3ZpZGVkIGVsZW1lbnRcclxuZnVuY3Rpb24gYWRkRWRpdFRhc2tMaXN0ZW5lcnModGFza0l0ZW0sIGVsZW1lbnQsIHBvaW50ZXIpIHtcclxuXHJcbiAgICBsZXQgZGl2SGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZGl2SGlkZGVuLmlkID0gXCJkaXYtaGlkZGVuXCJcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2SGlkZGVuKVxyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICAgIGxldCBjbG9zZUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjbG9zZUVkaXQuaWQgPSBcImNhbmNlbC1idXR0b25cIlxyXG4gICAgY2xvc2VFZGl0LnRleHRDb250ZW50ID0gXCIgQ2FuY2VsIFwiXHJcbiAgICBjbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjbG9zZUVkaXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUVkaXQpXHJcblxyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJ0aXRsZVwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBUaXRsZVwiXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcInRpdGxlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIlxyXG4gICAgaW5wdXQudmFsdWUgPSBlbGVtZW50LnRpdGxlXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsZXQgZGl2RGF0ZUFuZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBkaXZEYXRlQW5kUHJvamVjdC5pZCA9IFwiZGF0ZS1hbmQtcHJvamVjdFwiXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCJcclxuICAgIGxhYmVsLmlkID0gXCJsYWJlbC1kYXRlLWlucHV0XCJcclxuICAgIGRpdkRhdGVBbmRQcm9qZWN0LmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0LmlkID0gXCJkYXRlLWlucHV0XCJcclxuICAgIGlucHV0Lm5hbWUgPSBcImRhdGVcIlxyXG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiXHJcbiAgICBpbnB1dC52YWx1ZSA9IHJlZm9ybWF0RGF0ZShlbGVtZW50LmR1ZURhdGUsXCJ5eXl5LW1tLWRkXCIpXHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwicHJvamVjdFwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXHJcbiAgICBsYWJlbC5pZCA9IFwibGFiZWwtcHJvamVjdC1pbnB1dC1mb3ItdGFza1wiXHJcbiAgICBkaXZEYXRlQW5kUHJvamVjdC5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxyXG4gICAgaW5wdXQuaWQgPSBcInByb2plY3QtaW5wdXQtZm9yLXRhc2tcIlxyXG4gICAgaW5wdXQubmFtZSA9IFwicHJvamVjdFwiXHJcbiAgICBpbnB1dC5zaXplID0gXCIxXCJcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09IGVsZW1lbnQubmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGVsZW1lbnQudGl0bGVcclxuICAgICAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IGVsZW1lbnQubmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGVsZW1lbnQudGl0bGVcclxuICAgICAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdkRhdGVBbmRQcm9qZWN0KVxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIFByaW9yaXR5OiBcIlxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwicHJpb3JpdHktZGl2XCJcclxuXHJcbiAgICAvLyBSYWRpbyBjaG9pY2VzXHJcbiAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJsb3ctcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIkxvdyBQcmlvcml0eVwiXHJcbiAgICBsZXQgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJsb3ctcHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiTG93IFByaW9yaXR5XCJcclxuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09IHJhZGlvLnZhbHVlKSByYWRpby5jaGVja2VkID0gdHJ1ZVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwicmVndWxhci1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiUmVndWxhciBQcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcInJlZ3VsYXItcHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiUmVndWxhciBQcmlvcml0eVwiXHJcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSByYWRpby52YWx1ZSkgcmFkaW8uY2hlY2tlZCA9IHRydWVcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcInVyZ2VudC1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiVXJnZW50IFByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwidXJnZW50LXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VudCBQcmlvcml0eVwiXHJcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSByYWRpby52YWx1ZSkgcmFkaW8uY2hlY2tlZCA9IHRydWVcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJkZXNjcmlwdGlvblwiKVxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkVkaXQgRGVzY3JpcHRpb25cIlxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCJcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNzBcIilcclxuICAgIGlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSAnT3BlbiBTYW5zJ1xyXG4gICAgaW5wdXQuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIlxyXG4gICAgaW5wdXQudmFsdWUgPSBlbGVtZW50LmRlc2NyaXB0aW9uXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJmb3JtLXN1Ym1pdFwiXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXHJcbiAgICAvLyAtLS0tIHNldCB0aGUgdGFza0l0ZW0gdG8gcGFyZW50IHBhcmVudCBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBpZCBhbmQgcGFzcyBpdFxyXG4gICAgdGFza0l0ZW0gPSB0YXNrSXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc3VibWl0VGFza0NoYW5nZXMoZm9ybSwgZWxlbWVudCwgcG9pbnRlcilcclxuICAgIH0pXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcclxuXHJcbiAgICBkaXZIaWRkZW4uYXBwZW5kQ2hpbGQoZm9ybSlcclxufVxyXG5cclxuLy8gVG9nZ2xlcyBjaGVjayB0YXNrIHN0YXRlXHJcbmZ1bmN0aW9uIHRvZ2dsZUNoZWNrVGFzayhwb2ludGVyKSB7XHJcblxyXG4gICAgbGV0IGl0ZW1JZCA9IHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICBjb25zb2xlLmxvZyhcIml0ZW1JZDpcIixpdGVtSWQpXHJcbiAgICBjb25zb2xlLmxvZygpXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwidG9Eb1BhcmVudC5hbGxQcm9qZWN0c1wiLHRvRG9QYXJlbnQuYWxsUHJvamVjdHMpXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5hbGxJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0uaWRcIixpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCA9PSBcIlVuY2hlY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gXCJDaGVja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrLXRhc2tcIilcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoZWNrZWQgPT0gXCJDaGVja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBcIlVuY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkLXRhc2tcIilcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrLXRhc2tcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQubmFtZVwiLGVsZW1lbnQubmFtZSlcclxuICAgIH0pXHJcblxyXG59IFxyXG5cclxuLy8gRGVsZXRlIGN1cnJlbnQgdGFza1xyXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tEZWwpIHtcclxuXHJcbiAgICBsZXQgaXRlbUlkID0gdGFza0RlbC5wYXJlbnRFbGVtZW50LmlkXHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeShwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHByb2plY3QuYWxsSXRlbXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaXRlbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLnNwbGljZShjb3VudGVyLDEpXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKytcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHRhc2tEZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oZWxlbWVudFByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudFByb2plY3QpKVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIENoYW5nZXMgdGhlIG9iamVjdHMgZGF0YSB0byB0aGUgcHJvdmlkZWQgb25lcyBmcm9tIGFkZFRhc2tJbnRlcmZhY2UoKVxyXG5mdW5jdGlvbiBzdWJtaXROZXdUYXNrKGZvcm0pIHtcclxuXHJcbiAgICBpZiAoIGZvcm0uZWxlbWVudHNbMF0udmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgIGxldCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1pbnB1dFwiKVxyXG4gICAgICAgIGxldCB0YXNrTGFiZWxUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtdGFzay10aXRsZS1pbnB1dFwiKVxyXG5cclxuICAgICAgICB0YXNrVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZS1pbnB1dC1pbnZhbGlkXCIpXHJcblxyXG4gICAgICAgIGxldCBzcGFuSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgc3BhbkluZm8uaWQgPSBcInNwYW4tZXJyb3ItdGFzay10aXRsZS1pbnB1dFwiXHJcbiAgICAgICAgc3BhbkluZm8udGV4dENvbnRlbnQgPSBcIipQbGVhc2UgaW5wdXQgYSB0aXRsZVwiXHJcbiAgICAgICAgdGFza0xhYmVsVGl0bGUuYXBwZW5kQ2hpbGQoc3BhbkluZm8pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImZvcm0uZWxlbWVudHNcIixmb3JtLmVsZW1lbnRzKVxyXG5cclxuICAgIGxldCBlbGVtZW50UHJpb3JpdHk7XHJcbiAgICBpZiAoZm9ybS5lbGVtZW50c1szXS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50UHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzNdLnZhbHVlXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uZWxlbWVudHNbNF0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudFByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1s0XS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzVdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnRQcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbNV0udmFsdWVcclxuICAgIH1cclxuICAgIGxldCBlbGVtZW50VGl0bGUgPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudER1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudFByb2plY3QgPSBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudERlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1s2XS52YWx1ZVxyXG4gICAgbGV0IGVsZW1lbnROb3Rlc1xyXG4gICAgbGV0IGVsZW1lbnRDaGVja2VkXHJcbiAgICBcclxuICAgIGlmIChlbGVtZW50RHVlRGF0ZS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgZWxlbWVudER1ZURhdGUgPSByZWZvcm1hdERhdGUoZWxlbWVudER1ZURhdGUsIFwiZGQubW0ueXl5eS5cIilcclxuICAgIH0gZWxzZSBlbGVtZW50RHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIlxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gZWxlbWVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudFByb2plY3QgPSBlbGVtZW50XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFwicHJvamVjdFRvUGFzc1wiLGVsZW1lbnRQcm9qZWN0KVxyXG5cclxuICAgIGlmIChlbGVtZW50UHJvamVjdCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCJcclxuICAgICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBQcm9qZWN0IEZpcnN0LlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmFwcGVuZChub1Rhc2tzKVxyXG4gICAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZWxlbWVudCA9IGNyZWF0ZVRvRG9JdGVtKFxyXG4gICAgICAgIGVsZW1lbnRUaXRsZSwgXHJcbiAgICAgICAgZWxlbWVudERlc2NyaXB0aW9uLCBcclxuICAgICAgICBlbGVtZW50RHVlRGF0ZSxcclxuICAgICAgICBlbGVtZW50UHJpb3JpdHksXHJcbiAgICAgICAgZWxlbWVudE5vdGVzLFxyXG4gICAgICAgIGVsZW1lbnRDaGVja2VkLFxyXG4gICAgICAgIGVsZW1lbnRQcm9qZWN0KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGF0ZVZhbHVlXCIsZWxlbWVudC5kYXRlVmFsdWUpXHJcbiAgICBmb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oZWxlbWVudFByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudFByb2plY3QpKVxyXG4gICAgXHJcbiAgICBpZiAoZWxlbWVudFByb2plY3QudGl0bGUgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS5pbm5lclRleHQpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICAgICAgZWxlbWVudFByb2plY3QuYWxsSXRlbXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENoYW5nZXMgdGhlIG9iamVjdHMgZGF0YSB0byB0aGUgcHJvdmlkZWQgYWRkRWRpdFRhc2tMaXN0ZW5lcnMoKVxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrQ2hhbmdlcyhmb3JtLCBlbGVtZW50LCBwb2ludGVyKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coZm9ybS5lbGVtZW50cylcclxuICAgIFxyXG4gICAgZWxlbWVudC50aXRsZSA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWVcclxuICAgIGxldCBlbGVtZW50RHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbMV0udmFsdWVcclxuICAgIGxldCBlbGVtZW50UHJvamVjdCA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWVcclxuXHJcbiAgICAvL2Zvcm1hdCBkYXRlXHJcbiAgICBpZiAoZWxlbWVudER1ZURhdGUubGVuZ3RoID09IDEwKSB7XHJcbiAgICAgICAgZWxlbWVudER1ZURhdGUgPSByZWZvcm1hdERhdGUoZWxlbWVudER1ZURhdGUsIFwiZGQubW0ueXl5eS5cIilcclxuICAgIH0gZWxzZSBlbGVtZW50RHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIlxyXG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50RHVlRGF0ZVwiLGVsZW1lbnREdWVEYXRlKVxyXG4gICAgZWxlbWVudC5kdWVEYXRlID0gZWxlbWVudER1ZURhdGVcclxuICAgIFxyXG4gICAgaWYgKGZvcm0uZWxlbWVudHNbM10uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudC5wcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbM10udmFsdWVcclxuICAgIH0gZWxzZSBpZiAoZm9ybS5lbGVtZW50c1s0XS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50LnByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1s0XS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzVdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnQucHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzVdLnZhbHVlXHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1s2XS52YWx1ZVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiUE9JTlRFUlJSUlJSUlwiLHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXHJcbiAgICBsZXQgQ3VycmVudFByb2plY3RJRCA9IHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcclxuXHJcbiAgICBsZXQgY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzaztcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBDdXJyZW50UHJvamVjdElEKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2sgPSBlbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRhc2tJdGVtLm5hbWVcIixDdXJyZW50UHJvamVjdElEKVxyXG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50UHJvamVjdFwiLGVsZW1lbnRQcm9qZWN0KVxyXG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrXCIsY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzaylcclxuICAgIFxyXG4gICAgaWYgKEN1cnJlbnRQcm9qZWN0SUQgIT0gY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5pZCkge1xyXG5cclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3RUb1Bhc3M7XHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gZWxlbWVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RUb1Bhc3MgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdQcm9qZWN0VG9QYXNzXCIsbmV3UHJvamVjdFRvUGFzcylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdC5uYW1lIFwiLGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2spXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLmV2ZXJ5KCB0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5pZCA9PSBlbGVtZW50LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVSRUVFXCIscHJvamVjdC5hbGxJdGVtc1tjb3VudGVyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIRVJFRUVcIix0YXNrLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLnNwbGljZSgocHJvamVjdC5hbGxJdGVtcy5pbmRleE9mKHRhc2spKSwxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0VG9QYXNzLmFsbEl0ZW1zLnB1c2godGFzaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRhc2ssIG5ld1Byb2plY3RUb1Bhc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVSRUVFXCIscHJvamVjdC5hbGxJdGVtc1tjb3VudGVyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdFRvUGFzcy5uYW1lLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0VG9QYXNzKSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5uYW1lLCBKU09OLnN0cmluZ2lmeShjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrKSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgICAgIGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2suYWxsSXRlbXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhc3NJbnRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKTtcclxuICAgIC8vIHBhc3NpbmcgemVybyBiZWNhdXNlIHRoZSBlbGVtZW50IHBhc3MgdGhlIGN1cnJlbnQgcHJvamVjdCBpZFxyXG4gICAgLy8gcHJvYmFibHkgd29udCB3b3JrIHdoZW4gdXBkYXRlZCB0byBob3VzZSBpbmJveCB0YXNrc1xyXG4gICAgLy8gdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHRhc2tJdGVtKVxyXG4gICAgZm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgZGVmYXVsdCBwcm9qZWN0IHRhc2tzIG9uIHRoZSBET01cclxuZnVuY3Rpb24gc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcygpIHtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RDaGlsZCBOdWxsXCIpXHJcbiAgICAgICAgaWYgKHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0uYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbmRlciB0aGUgaXRlbXMgZGF0YSB0byB0aGUgZGl2XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFTkRFUkQgRUxFTUVOVFwiLCBlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLnRleHRDb250ZW50ID0gdG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXS50aXRsZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZW5kZXJzIHRoZSBjdXJyZW50IGxpYnJhcmllcyB0byB0aGUgcHJvamVjdHMgb24gdGhlIHNpZGViYXIgaW4gdGhlIERPTVxyXG5mdW5jdGlvbiBzdGFydHVwTGlicmFyeVNpZGViYXJSZW5kZXJlcigpIHtcclxuXHJcbiAgICBpZiAodG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3RUb0FwcGVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgcHJvamVjdFRvQXBwZW5kLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgICAgICBwcm9qZWN0VG9BcHBlbmQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcclxuICAgICAgICAgICAgcHJvamVjdFRvQXBwZW5kLmlkID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIHByb2plY3RUb0FwcGVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RUb0FwcGVuZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvamVjdFwiLHByb2plY3RUb0FwcGVuZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvamVjdFwiLGN1cnJlbnRQcm9qZWN0KVxyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBwcm9qZWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zaWRlYmFyLXdyYXBwZXJcIilcclxuICAgICAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3RUb0FwcGVuZClcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtb3B0aW9ucy1zaWRlYmFyXCIpXHJcbiAgICAgICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0T3B0aW9ucylcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInJlbmFtZS1wcm9qZWN0XCIpXHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LmlubmVyVGV4dCA9IFwiUmVuYW1lXCJcclxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGVkaXRQcm9qZWN0KVxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVuYW1lUHJvamVjdChwb2ludGVyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIilcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuaW5uZXJUZXh0ID0gXCJEZWxldGVcIlxyXG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmQoZGVsZXRlUHJvamVjdFNpZGViYXIpXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIikuYXBwZW5kQ2hpbGQocHJvamVjdFdyYXBwZXIpXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXS5pZFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIikubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1vcHRpb25zLXNpZGViYXJcIikuZm9yRWFjaCggbm9kZSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZW5kZXJzIEV2ZW50cyBmcm9tIHRoZSBwcm9qZWN0IHRvIHRoZSBET01cclxuZnVuY3Rpb24gdGFza3NJbml0aWFsRXZlbnRBZGRlcigpIHtcclxuXHJcbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggcHJvamVjdCBvYmplY3QgdW50aWwgaXRzIGZpcnN0IGVsZW1lbnQgbmFtZSBtYXRjaGVzIHRoZSBvbmUgb24gdGhlIERPTVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50XCIsZWxlbWVudC5hbGxJdGVtcylcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRQcm9qZWN0XCIsY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50Lm5hbWVcIixlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBjdXJyZW50UHJvamVjdCkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8NTtpKyspe1xyXG4gICAgICAgICAgICAgICAgLy9JbnNlcnQgZGF0YSBmcm9tIG9iamVjdCB0byBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQubmFtZVwiLGVsZW1lbnQubmFtZSlcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHRhc2sgb2JqZWN0IGFuZCBzdXBwbHkgaXQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza1BsYWNlaG9sZGVyID0gY3JlYXRlVG9Eb0l0ZW0oXCJQaWNrIHVwIExhdW5kcnlcIixcIkkgbmVlZCB0byBwaWNrIHVwIG15IExhdW5kcnkgZnJvbSB0aGUgd2FzaGluZyBtYWNoaW5lIG5leHQgaXMgc29tZSBsb3JlbSBpcHN1bTogTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIGV4cGVkaXRhIHNvbHV0YSB2b2x1cHRhdHVtIGFsaXF1YW0gZXhjZXB0dXJpIGVsaWdlbmRpLlwiLFwiMTcuMDYuMjAyMi5cIixcIlVyZ2VudCBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsIGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAvL0luc2VydCBkYXRhIGZyb20gb2JqZWN0IHRvIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza1BsYWNlaG9sZGVyXCIsdGFza1BsYWNlaG9sZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgcHJvdG9cIixPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFza1BsYWNlaG9sZGVyKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBwcm90b1wiLE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbmRlciB0aGUgaXRlbXMgZGF0YSB0byB0aGUgZGl2XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20odGFza1BsYWNlaG9sZGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbi8vIE1ha2UgYSByYW5kb20gbmFtZVxyXG5mdW5jdGlvbiBtYWtlTmFtZShsZW5ndGgpIHtcclxuICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgIHZhciBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcclxuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFxyXG4gY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICB9XHJcbiAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBpbnRlcmZhY2UgdG8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHBhc3MgdmFsdWUgdG8gY3JlYXRlTmV3UHJvamVjdCgpXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QgKCkge1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gcG9wdWxhdGUgRE9NIHdpdGggcHJvamVjdHNcclxuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKVxyXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gIHtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGlkZURpdi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGlkZURpdilcclxuXHJcbiAgICAgICAgbGV0IGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgYmFja0Rpdi5pZCA9IFwiYmFjay1kaXZcIlxyXG4gICAgICAgIGhpZGVEaXYuYXBwZW5kKGJhY2tEaXYpXHJcblxyXG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBOZXcgUHJvamVjdCBcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LXRleHRcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgICAgICBkaXZDb250ZW50Lmh0bWxGb3IgPSBcIm5ldy1wcm9qZWN0LWxhYmVsXCJcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJuZXctcHJvamVjdC1sYWJlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWUgXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBpbnB1dERpdi5pZCA9IFwibmV3LXByb2plY3QtaW5wdXRcIlxyXG4gICAgICAgIGlucHV0RGl2Lm5hbWUgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCJcclxuICAgICAgICBpbnB1dERpdi5taW5MZW5ndGggPSBcIjFcIlxyXG4gICAgICAgIGlucHV0RGl2LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lIFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQoaW5wdXREaXYpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJDcmVhdGVcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgIHtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFwcGVuZCBpdCB3aXRoIHRoZSBwcm92aWRlZCBuYW1lIGZyb20gYWRkTmV3UHJvamVjdCgpXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pbnB1dFwiKS52YWx1ZSkge1xyXG5cclxuICAgICAgICBsZXQgcGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIikudmFsdWVcclxuICAgICAgICBsZXQgcHJvamVjdEhvbGRlciA9IGNyZWF0ZVByb2plY3QocGFzcylcclxuXHJcbiAgICAgICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpXHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxyXG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0SG9sZGVyLm5hbWVcclxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdEhvbGRlci50aXRsZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9QYXJlbnQuYWxsUHJvamVjdHMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IHRvIHBhc3NcIixwcm9qZWN0KVxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2lkZWJhci13cmFwcGVyXCIpXHJcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3QpXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBwcm9qZWN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1vcHRpb25zLXNpZGViYXJcIilcclxuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmQocHJvamVjdE9wdGlvbnMpXHJcblxyXG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicmVuYW1lLXByb2plY3RcIilcclxuICAgICAgICBlZGl0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlbmFtZVwiXHJcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGVkaXRQcm9qZWN0KVxyXG4gICAgICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgICAgIHJlbmFtZVByb2plY3QocG9pbnRlcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgZGVsZXRlUHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuaW5uZXJUZXh0ID0gXCJEZWxldGVcIlxyXG4gICAgICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChkZWxldGVQcm9qZWN0U2lkZWJhcilcclxuICAgICAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpLmFwcGVuZENoaWxkKHByb2plY3RXcmFwcGVyKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuXHJcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEhvbGRlci5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0SG9sZGVyKSlcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJQbGVhc2UgaW5wdXQgYSBuYW1lLlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1sYWJlbFwiKS5hcHBlbmRDaGlsZChzcGFuKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KHBvaW50ZXIpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInBvaW50ZXIuc3JjRWxlbWVudC5pZFwiLCBwb2ludGVyLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkKVxyXG5cclxuICAgIGxldCBwcm9qZWN0TmFtZUhvbGRlciA9IHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICBsZXQgaGlkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoaWRlRGl2LmlkID0gXCJkaXYtaGlkZGVuXCJcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoaWRlRGl2KVxyXG5cclxuICAgICAgICBsZXQgYmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBiYWNrRGl2LmlkID0gXCJiYWNrLWRpdlwiXHJcbiAgICAgICAgaGlkZURpdi5hcHBlbmQoYmFja0RpdilcclxuXHJcbiAgICAgICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlJlbmFtZSBhIFByb2plY3QgXCJcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjcmVhdGUtcHJvamVjdC10ZXh0XCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5odG1sRm9yID0gXCJuZXctcHJvamVjdC1sYWJlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwibmV3LXByb2plY3QtbGFiZWxcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIk5ldyBOYW1lOlwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgaW5wdXREaXYuaWQgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCJcclxuICAgICAgICBpbnB1dERpdi5uYW1lID0gXCJuZXctcHJvamVjdC1pbnB1dFwiXHJcbiAgICAgICAgaW5wdXREaXYubWluTGVuZ3RoID0gXCIxXCJcclxuICAgICAgICBpbnB1dERpdi52YWx1ZSA9IHByb2plY3ROYW1lSG9sZGVyLmlubmVyVGV4dFxyXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKGlucHV0RGl2KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpICB7XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRSZW5hbWVQcm9qZWN0KHByb2plY3ROYW1lSG9sZGVyKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFJlbmFtZVByb2plY3Qobm9kZSkge1xyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIHByb2plY3QgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gbm9kZS5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1BVENIIVwiKVxyXG4gICAgICAgICAgICBwcm9qZWN0LnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pbnB1dFwiKS52YWx1ZVxyXG4gICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0LnRpdGxlXCIscHJvamVjdC50aXRsZSlcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwb2ludGVyKSB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwicG9pbnRlci5zcmNFbGVtZW50LmlkXCIsIHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQpXHJcblxyXG4gICAgbGV0IHByb2plY3ROYW1lSG9sZGVyID0gcG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xyXG5cclxuICAgIGxldCBoaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGhpZGVEaXYuaWQgPSBcImRpdi1oaWRkZW5cIlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhpZGVEaXYpXHJcblxyXG4gICAgICAgIGxldCBiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGJhY2tEaXYuaWQgPSBcImJhY2stZGl2LWRlbGV0ZVwiXHJcbiAgICAgICAgaGlkZURpdi5hcHBlbmQoYmFja0RpdilcclxuXHJcbiAgICAgICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkFyZSB5b3UgU3VyZSBZb3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3Q/XCJcclxuICAgICAgICBkaXZDb250ZW50LnN0eWxlLmdyaWRBcmVhID0gXCIxIC8gMSAvIDEgLyAzXCJcclxuICAgICAgICBkaXZDb250ZW50LnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCJcclxuICAgICAgICBkaXZDb250ZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcclxuICAgICAgICBkaXZDb250ZW50LnN0eWxlLmdyaWRBcmVhID0gXCIyIC8gMSAvIDIgLyAxXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpICB7XHJcblxyXG4gICAgICAgICAgICBzdWJtaXREZWxldGVQcm9qZWN0KHByb2plY3ROYW1lSG9sZGVyKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuICAgICAgICBkaXZDb250ZW50LnN0eWxlLmdyaWRBcmVhID0gXCIyIC8gMiAvIDIgLyAzXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdERlbGV0ZVByb2plY3Qobm9kZSkge1xyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIHByb2plY3QgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gbm9kZS5pZCkge1xyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLnNwbGljZSgodG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKSwxKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdC5uYW1lKVxyXG4gICAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpLnJlbW92ZSgpXHJcbn1cclxuXHJcbi8vIFVwZGF0ZSB0aGUgdGFzayByZW5kZXJlciBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgUHJvamVjdHNcclxuZnVuY3Rpb24gdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3ROb2RlKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJlbnRlcmVkIHJlbmRlclByb2plY3RUYXNrcyBcIixwcm9qZWN0Tm9kZSlcclxuXHJcbiAgICAvLyBJZiBhbHJlYWR5IGluIHRoZSBwcm9qZWN0IGRvbid0IHJlcmVuZGVyXHJcbiAgICAvLyBpZiAoY3VycmVudFByb2plY3QgPT0gcHJvamVjdE5vZGUuaWQpIHJldHVyblxyXG5cclxuICAgIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpICE9IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1jdXJyZW50XCIpXHJcbiAgICB9XHJcbiAgICBwcm9qZWN0Tm9kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jdXJyZW50XCIpXHJcblxyXG4gICAgLy8gUmVtb3ZlIGJhY2tncm91bmQgc2VsZWN0aW9uIGNvbG9yIGZyb20gc2lkZWJhciBpdGVtc1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy1tb250aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuXHJcbiAgICAvLyBTZXQgY3VycmVudCB3b3JraW5nIHByb2plY3RcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5vZGUuaWRcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9ucy1zaWRlYmFyXCIpLmZvckVhY2goIG5vZGUgPT4ge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHByb2plY3RPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW9wdGlvbnMtc2lkZWJhclwiKVxyXG4gICAgcHJvamVjdE5vZGUucGFyZW50RWxlbWVudC5hcHBlbmQocHJvamVjdE9wdGlvbnMpXHJcblxyXG4gICAgbGV0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInJlbmFtZS1wcm9qZWN0XCIpXHJcbiAgICBlZGl0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlbmFtZVwiXHJcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmQoZWRpdFByb2plY3QpXHJcbiAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgIHJlbmFtZVByb2plY3QocG9pbnRlcilcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGRlbGV0ZVByb2plY3RTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZGVsZXRlUHJvamVjdFNpZGViYXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpXHJcbiAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5pbm5lclRleHQgPSBcIkRlbGV0ZVwiXHJcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmQoZGVsZXRlUHJvamVjdFNpZGViYXIpXHJcbiAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QocG9pbnRlcilcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYoZWxlbWVudC5uYW1lID09PSBwcm9qZWN0Tm9kZS5pZCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmluZyBmb3JFYWNoIFwiLGVsZW1lbnQpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBmb3JFYWNoIFwiLHByb2plY3ROb2RlLnRleHRDb250ZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaW5ib3hWaWV3ID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuLy8jcmVnaW9uIC0tLS0gU2lkZWJhciBMb2dpYyBhbmQgUmVuZGVyaW5nIC0tLS1cclxuLy8gUmVuZGVycyBhbGwgdGFza3MgZnJvbSBldmVyeSBwcm9qZWN0IHRvIHRoZSBET01cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpbmJveFRhc2tzUmVuZGVyKClcclxufSlcclxuZnVuY3Rpb24gaW5ib3hUYXNrc1JlbmRlcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmZpcnN0Q2hpbGQgPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCJcclxuICAgICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJObyBUYXNrcy5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5hcHBlbmQobm9UYXNrcylcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLW1vbnRoXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtY3VycmVudFwiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgfVxyXG4gICAgaW5ib3hWaWV3ID0gdHJ1ZTtcclxuXHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgb25seSB0b2RheXMgdGFza3MgdG8gdGhlIERPTVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgIHRvZGF5VGFza1JlbmRlcmVyKClcclxufSlcclxuZnVuY3Rpb24gdG9kYXlUYXNrUmVuZGVyZXIoKSB7XHJcblxyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgdG9kYXkgPSBkZCArICcuJyArIG1tICsgJy4nICsgeXl5eSArIFwiLlwiO1xyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQuZHVlRGF0ZVwiLGVsZW1lbnQuZHVlRGF0ZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXkpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmR1ZURhdGUgPT0gdG9kYXkpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuZmlyc3RDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBub1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBub1Rhc2tzLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUuanVzdGlmeVNlbGYgPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgIG5vVGFza3MudGV4dENvbnRlbnQgPSBcIk5vIFRhc2tzIGZvciBUb2RheS5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5hcHBlbmQobm9UYXNrcylcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLW1vbnRoXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikudGV4dENvbnRlbnQgPSBcIlRvZGF5J3MgVGFza3NcIlxyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWN1cnJlbnRcIikgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuICAgIH1cclxuXHJcbiAgICBpbmJveFZpZXcgPSBmYWxzZTtcclxufVxyXG5cclxuLy8gUmVuZGVycyBvbmx5IHRoaXMgd2Vla3MgdGFza3MgdG8gdGhlIERPTVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICB3ZWVrVGFza1JlbmRlcmVyKClcclxufSlcclxuZnVuY3Rpb24gd2Vla1Rhc2tSZW5kZXJlcigpIHtcclxuXHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICB0b2RheSA9IHl5eXkgKyBcIiBcIiArIG1tICsgXCIgXCIgKyBkZFxyXG5cclxuICAgIGxldCBjdXJyZW50V2VlayA9IHJlZm9ybWF0RGF0ZSh0b2RheSwgXCJ5eXl5IG1tIGRkXCIpXHJcbiAgICBjdXJyZW50V2VlayA9IGdldFdlZWsoIG5ldyBEYXRlKHRvZGF5KSlcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhc2tzV2VlayA9IHJlZm9ybWF0RGF0ZShlbGVtZW50LmR1ZURhdGUsIFwieXl5eSBtbSBkZFwiKVxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFllYXIgPSB0YXNrc1dlZWsuc2xpY2UoMCw0KVxyXG4gICAgICAgICAgICB0YXNrc1dlZWsgPSBnZXRXZWVrKCBuZXcgRGF0ZSh0YXNrc1dlZWspKVxyXG4gICAgICAgICAgICBpZiAodGFza3NXZWVrID09PSBjdXJyZW50V2VlayAmJiB5eXl5ID09IGVsZW1lbnRZZWFyKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmZpcnN0Q2hpbGQgPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCJcclxuICAgICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJObyBUYXNrcyBmb3IgdGhlIGN1cnJlbnQgV2Vlay5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5hcHBlbmQobm9UYXNrcylcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLW1vbnRoXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikudGV4dENvbnRlbnQgPSBcIlRoaXMgV2VlaydzIFRhc2tzXCJcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1jdXJyZW50XCIpICE9IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1jdXJyZW50XCIpXHJcbiAgICB9XHJcbiAgICBpbmJveFZpZXcgPSBmYWxzZTtcclxufVxyXG5cclxuLy8gUmVuZGVycyBvbmx5IHRoaXMgbW9udGgncyB0YXNrcyB0byB0aGUgRE9NXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy1tb250aFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICBtb250aFRhc2tSZW5kZXJlcigpXHJcbn0pXHJcbmZ1bmN0aW9uIG1vbnRoVGFza1JlbmRlcmVyKCkge1xyXG5cclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgY3VycmVudE1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcclxuICAgIC8vIHBhZFN0YXJ0IFNldHMgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIHN0cmluZyB3ZSB3YW50IHRvIGV4dHJhY3QgYW5kIGZpbGxzIGl0IHdpdGggdGUgbmV4dCBzcGVjaWZpZWQgZWxlbWVudCBmcm9tIHRoZSBsZWZ0L2JlZ2lubmluZyBvZiB0aGUgc3RyaW5nIGluIHRoaXMgY2FzZSBpcyBcIjBcIlxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kdWVEYXRlLnNsaWNlKDMsNSkgPT09IGN1cnJlbnRNb250aCkgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuZmlyc3RDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBub1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBub1Rhc2tzLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUuanVzdGlmeVNlbGYgPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgIG5vVGFza3MudGV4dENvbnRlbnQgPSBcIk5vIFRhc2tzIGZvciB0aGUgY3VycmVudCBNb250aC5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5hcHBlbmQobm9UYXNrcylcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLW1vbnRoXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikudGV4dENvbnRlbnQgPSBcIlRoaXMgTW9udGgncyBUYXNrc1wiXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtY3VycmVudFwiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgfVxyXG4gICAgaW5ib3hWaWV3ID0gZmFsc2U7XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5cclxuLy8jcmVnaW9uICAtLS0tIFNvcnQgQnkgTG9naWMgYW5kIFJlbmRlcmluZyAtLS0tXHJcbi8vIFNvcnRzIHRoZSBjdXJyZW50IFByb2plY3QgdGFza3MgYnkgcHJpb3JpdHlcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICBzb3J0QnlQcmlvcml0eShwb2ludGVyKVxyXG59KVxyXG5mdW5jdGlvbiBzb3J0QnlQcmlvcml0eShwb2ludGVyKSB7XHJcblxyXG4gICAgXHJcbiAgICBpZiAocG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImxvdy10by1oaWdoXCIpKSB7XHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3ctdG8taGlnaFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC10by1sb3dcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogRGVzY2VuZGluZ1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogRGVzY2VuZGluZ1wiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaC10by1sb3dcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvdy10by1oaWdoXCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IEFzY2VuZGluZ1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogQXNjZW5kaW5nXCJcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikuaW5uZXJUZXh0ID09IFwiQWxsIFRhc2tzXCIpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICAgICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWdoLXRvLWxvd1wiKSkge1xyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlVyZ2VudCBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiUmVndWxhciBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiTG93IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIkxvdyBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiUmVndWxhciBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiVXJnZW50IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5jaGlsZE5vZGVzXHJcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdGV4dFdyYXBwZXIuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goZWxlbWVudC5maXJzdENoaWxkLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlnaC10by1sb3dcIikpIHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiVXJnZW50IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlJlZ3VsYXIgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiTG93IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiTG93IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlJlZ3VsYXIgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiVXJnZW50IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1wcmlvcml0eVwiKS5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjkwMFwiXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jaGVja1wiKS5pbm5lclRleHQgPSBcIkNoZWNrXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jaGVja1wiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgY2hlY2tlZC1sYXN0XCJcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1kYXRlXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBmYXJ0aGVyLXRvLWNsb3NlclwiXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBsYXN0LWNyZWF0ZWQtZmlyc3RcIlxyXG59XHJcblxyXG4vLyBTb3J0cyB0aGUgY3VycmVudCB0YXNrcyBieSBkYXRlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1kYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgc29ydEJ5RGF0ZShldmVudClcclxufSlcclxuZnVuY3Rpb24gc29ydEJ5RGF0ZShldmVudCkge1xyXG5cclxuICAgIGxldCBvcmRlcmVkRGF0ZXMgPSBbXTtcclxuXHJcbiAgICBsZXQgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuY2hpbGROb2Rlc1xyXG4gICAgbGV0IGl0ZW1MaXN0ID0gW107XHJcbiAgICB0ZXh0V3JhcHBlci5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBpdGVtTGlzdC5wdXNoKGVsZW1lbnQuZmlyc3RDaGlsZC5pZClcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcblxyXG4gICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWREYXRlcy5wdXNoKFtlbGVtZW50LmRhdGVWYWx1ZSwgZWxlbWVudC5pZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50LmR1ZURhdGU6XCIsZWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQuZGF0ZVZhbHVlOlwiLGVsZW1lbnQuZGF0ZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIG9yZGVyZWREYXRlcy5zb3J0KClcclxuICAgIGNvbnNvbGUubG9nKFwib3JkZXJlZERhdGVzOlwiLG9yZGVyZWREYXRlcylcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZXItdG8tZmFydGhlclwiKSl7XHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VyLXRvLWZhcnRoZXJcIilcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmYXJ0aGVyLXRvLWNsb3NlclwiKVxyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogQXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBEZXNjZW5kaW5nXCJcclxuXHJcbiAgICAgICAgb3JkZXJlZERhdGVzLnJldmVyc2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmYXJ0aGVyLXRvLWNsb3NlclwiKVxyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb3Nlci10by1mYXJ0aGVyXCIpXHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBEZXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBBc2NlbmRpbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGRvIHtcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5ldmVyeSh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXJlZERhdGVzLmxlbmd0aFwiLG9yZGVyZWREYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJlZERhdGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT0gb3JkZXJlZERhdGVzWzBdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtWzFdXCIsIG9yZGVyZWREYXRlc1swXVsxXSlcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20odGFzaylcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkRGF0ZXMuc2hpZnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmRlcmVkRGF0ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChvcmRlcmVkRGF0ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pIFxyXG4gICAgfSB3aGlsZSAob3JkZXJlZERhdGVzLmxlbmd0aCAhPSAwKSBcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmR1ZS1kYXRlXCIpLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IFwiOTAwXCJcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmlubmVyVGV4dCA9IFwiQ2hlY2tcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBjaGVja2VkLWxhc3RcIlxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbG93LXRvLWhpZ2hcIlxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY3JlYXRpb24tZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbGFzdC1jcmVhdGVkLWZpcnN0XCJcclxuXHJcbn1cclxuXHJcbi8vIFNvcnRzIHRoZSBjdXJyZW50IHRhc2tzIGJ5IGNoZWNrZWRcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICBzb3J0QnlDaGVja2VkU3RhdHVzKHBvaW50ZXIpXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeUNoZWNrZWRTdGF0dXMocG9pbnRlcikge1xyXG5cclxuICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZC1maXJzdFwiKSkge1xyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC1sYXN0XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiQ2hlY2tlZDogRmlyc3RcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiQ2hlY2tlZDogTGFzdFwiXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkLWxhc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJDaGVja2VkOiBMYXN0XCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkNoZWNrZWQ6IEZpcnN0XCJcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChpbmJveFZpZXcpIHtcclxuXHJcbiAgICAgICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkLWZpcnN0XCIpKSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiQ2hlY2tlZFwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJDaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGxldCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5jaGlsZE5vZGVzXHJcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdGV4dFdyYXBwZXIuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goZWxlbWVudC5maXJzdENoaWxkLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG5cclxuICAgICAgICBpZiAocG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWQtZmlyc3RcIikpIHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJDaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiVW5jaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJDaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbG93LXRvLWhpZ2hcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgZmFydGhlci10by1jbG9zZXJcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBsYXN0LWNyZWF0ZWQtZmlyc3RcIlxyXG59XHJcblxyXG4vLyBTb3J0cyB0YXNrIGl0ZW1zIGJ5IGNyZWF0aW9uIGRhdGVcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgIHNvcnRCeUNyZWF0aW9uRGF0ZShwb2ludGVyKTtcclxuXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeUNyZWF0aW9uRGF0ZShwb2ludGVyKSB7XHJcblxyXG4gICAgbGV0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmNoaWxkTm9kZXNcclxuICAgIGxldCBpdGVtTGlzdCA9IFtdO1xyXG4gICAgdGV4dFdyYXBwZXIuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaXRlbUxpc3QucHVzaChlbGVtZW50LmZpcnN0Q2hpbGQuaWQpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBzb3J0ZWRJdGVtTGlzdEJ5T2JqZWN0T3JkZXIgPSBbXTtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09IGVsZW1lbnQuaWQpIHNvcnRlZEl0ZW1MaXN0QnlPYmplY3RPcmRlci5wdXNoKGVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsYXN0LWNyZWF0ZWQtZmlyc3RcIikpIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtY3JlYXRlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtY3JlYXRlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGU6IERlc2NlbmRpbmdcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZTogQXNjZW5kaW5nXCJcclxuXHJcbiAgICAgICAgc29ydGVkSXRlbUxpc3RCeU9iamVjdE9yZGVyLnJldmVyc2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZpcnN0LWNyZWF0ZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxhc3QtY3JlYXRlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGU6IEFzY2VuZGluZ1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlOiBEZXNjZW5kaW5nXCJcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpdGVtTGlzdFswXVwiLGl0ZW1MaXN0WzBdKVxyXG4gICAgc29ydGVkSXRlbUxpc3RCeU9iamVjdE9yZGVyLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXByaW9yaXR5XCIpLmlubmVyVGV4dCA9IFwiUHJpb3JpdHlcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXByaW9yaXR5XCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBsb3ctdG8taGlnaFwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1kYXRlXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBmYXJ0aGVyLXRvLWNsb3NlclwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY2hlY2tcIikuaW5uZXJUZXh0ID0gXCJDaGVja1wiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY2hlY2tcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGNoZWNrZWQtbGFzdFwiXHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8gQWRkcyB0aGUgU29ydCBieSBsaXN0IG9uIGNsaWNrIGxpc3RlbmVyXHJcbmxldCBvcmRlckJ5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpXHJcbm9yZGVyQnlOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID09IFwidW5zZXRcIil7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInVuc2V0XCJcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vLyBIaWRlcyB0aGUgU29ydCBieSBsaXN0IGZyb20gdGhlIERPTVxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjc29ydC1ieS10ZXh0JykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN0YXJ0dXBSZW5kZXJQcm9qZWN0VGFza3MsIHN0YXJ0dXBMaWJyYXJ5U2lkZWJhclJlbmRlcmVyLCBhZGROZXdQcm9qZWN0LCB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MsIGFkZFRhc2tJbnRlcmZhY2V9IiwiaW1wb3J0IHsgc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcywgc3RhcnR1cExpYnJhcnlTaWRlYmFyUmVuZGVyZXIsIHRhc2tzSW5pdGlhbEV2ZW50QWRkZXIsIGFkZE5ld1Byb2plY3QsIGFkZFRhc2tJbnRlcmZhY2V9IGZyb20gJy4vRE9NTWFuaXB1bGF0aW9uJ1xyXG5pbXBvcnQge2dldERheSwgZ2V0V2VlaywgaXNUb2RheX0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0LmNzcydcclxuXHJcbi8vIENyZWF0ZSB0aGUgcGFyZW50IG9iamVjdCBsb2dpYyBmb3IgbWFuaXB1bGF0aW5nIGRhdGEgZnJvbSB0b0RvQ2hpbGQgY2hpbGQgb2JqZWN0c1xyXG5jb25zdCB0b0RvUGFyZW50ID0ge1xyXG4gICAgYWxsUHJvamVjdHM6IFtdLFxyXG4gICAgc3VtbWFyeTogIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUsIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5ub3RlcywgdGhpcy5jaGVja2VkKVxyXG4gICAgfSxcclxufVxyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBUbyBEbyBpdGVtXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZ2V0TmFtZSkge1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUodG9Eb1BhcmVudClcclxuXHJcbiAgICBwcm9qZWN0LnRpdGxlID0gZ2V0TmFtZVxyXG4gICAgcHJvamVjdC5uYW1lID0gZ2V0TmFtZSArIE1hdGgucmFuZG9tKDEwKTtcclxuICAgIHByb2plY3QuYWxsSXRlbXMgPSBbXTtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBUbyBEbyBvYmplY3RcclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0oZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0Tm90ZXMsIGdldENoZWNrZWQsIHByb2plY3QpIHtcclxuXHJcbiAgICBsZXQgdG9Eb0NoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KVxyXG5cclxuICAgIHRvRG9DaGlsZC5pZCA9IGdldFRpdGxlICsgTWF0aC5yYW5kb20oMTApXHJcbiAgICB0b0RvQ2hpbGQudGl0bGUgPSBnZXRUaXRsZVxyXG4gICAgdG9Eb0NoaWxkLmRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24gPyBnZXREZXNjcmlwdGlvbiA6IFwiXCJcclxuICAgIHRvRG9DaGlsZC5kdWVEYXRlID0gZ2V0RHVlRGF0ZSA/IGdldER1ZURhdGUgOiBcIk5vIER1ZSBEYXRlXCJcclxuICAgIHRvRG9DaGlsZC5wcmlvcml0eSA9IGdldFByaW9yaXR5ID8gZ2V0UHJpb3JpdHkgOiBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgdG9Eb0NoaWxkLm5vdGVzID0gZ2V0Tm90ZXMgPyBnZXROb3RlcyA6IFwiTm8gTm90ZXNcIlxyXG4gICAgdG9Eb0NoaWxkLmNoZWNrZWQgPSBcIlVuY2hlY2tlZFwiXHJcbiAgICB0b0RvQ2hpbGQuZGF0ZVZhbHVlID0gKE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDAsMikpKSArICgoTnVtYmVyKGdldER1ZURhdGUuc2xpY2UoMyw1KSkgLSAxKSAqIDMwKSArIE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDYsMTApICogMzY1KVxyXG5cclxuICAgIHByb2plY3QuYWxsSXRlbXMucHVzaCh0b0RvQ2hpbGQpXHJcblxyXG4gICAgLy8gQ2FuIGNyZWF0ZSBpdHMgb3duIGZ1bmN0aW9ucyBoZXJlIHRvbyBsaWtlIHRoaXNcclxuICAgIC8vIHRvRG9JdGVtLnN1bW1hcnkgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHksIHRoaXMubm90ZXMsIHRoaXMuY2hlY2tsaXN0KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiB0b0RvQ2hpbGQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxyXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xyXG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcclxuICAgIGZvciAobGV0IGk9MDtpPGxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRvTG9hZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKVxyXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdFRvTG9hZCwgdG9Eb1BhcmVudClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRvTG9hZClcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5wdXNoKHByb2plY3RUb0xvYWQpXHJcbiAgICAgICAgICAgIHByb2plY3RUb0xvYWQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihlbGVtZW50LCBwcm9qZWN0VG9Mb2FkKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXHJcbiAgICBhbGVydChcIkNhbiBub3QgYWNjZXNzIGxvY2FsIFN0b3JhZ2UuIEFsbCBkYXRhIHdpbGwgYmUgbG9zdCBvbiBwYWdlIHJlZnJlc2ggb3IgY2xvc2UuXCIpXHJcbiAgfVxyXG5cclxuY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG5cclxuXHJcblxyXG5cclxuLy8jcmVnaW9uIC0tLS0gRGVmYXVsdF9Qcm9qZWN0IFRhc2sgT2JqZWN0IGRhdGEgaW5zZXJ0aW9uIC0tLS1cclxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbi8vIGNvbnN0IHRvRG9MaXN0UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KFwiVG8gRG8gTGlzdCBQcm9qZWN0XCIpXHJcbi8vIGNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3QoXCJUZXN0IFByb2plY3RcIikgIFxyXG5cclxuXHJcblxyXG4vLyBjcmVhdGVUb0RvSXRlbShcIkNvbXBsZXRlIFRoZSBUbyBEbyBMaXN0XCIsXCJEbyBpdC5cIixcIjE2LjA3LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiU29sdmUgdGhlIHF1YW50dW0gcGFyYWRpZ21cIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTguMDguMjAyMi5cIixcIlVyZ2VudCBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJQaWNrIHVwIE1vbmV5XCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE3LjA3LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiRmlndXJlIHRoZSBBbG1vbmQgUHJpbmNpcGxlXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE2LjA3LjIwMjIuXCIsXCJMb3cgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiQ29tcHV0ZSB0aGUgUGkgZmlndXJlIG51bWJlclwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxMy4wOS4yMDIyLlwiLFwiUmVndWxhciBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJDb250aW51ZSB0aGUgZGlzaWxsdXNpb24gb2YgdGhlIGRlbHVzaW9uXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjA1LjA3LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiU29sdmUgdGhlIFF1YWRyYXRpYyBNaW5wZWwncyBFcXVhdGlvblwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxOC4wOC4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNtYWNrIHRoYXQgbnVtYmVyIGtleVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxMi4wNy4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNvbHZlIHRoZSBRdWFkcmF0aWMgTWlucGVsJ3MgRXF1YXRpb25cIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTguMDguMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdGVzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNtYWNrIHRoYXQgbnVtYmVyIGtleVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxMi4wNy4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0ZXN0UHJvamVjdCk7XHJcblxyXG5cclxuXHJcbi8vIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XHJcbiAgICBcclxuLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxyXG4vLyAgICAgY29uc29sZS5sb2coXCJBQVwiKVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIGZvciAobGV0IGk9MDtpPGxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKSB7XHJcblxyXG4vLyAgICAgaWYgKGxvY2FsU3RvcmFnZS5rZXkoaSkuc2xpY2UoMCw3KSA9PSBcIlByb2plY3RcIikge1xyXG4vLyAgICAgICAgIGxldCBwcm9qZWN0VG9Mb2FkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSlcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKSlcclxuLy8gICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdFRvTG9hZCwgdG9Eb1BhcmVudClcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9Mb2FkKVxyXG4vLyAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0VG9Mb2FkKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBwcm9qZWN0ID0+IHtcclxuLy8gICAgIHByb2plY3QuYWxsSXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbi8vICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0uaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxyXG4vLyAgICAgfSlcclxuLy8gfSlcclxuXHJcblxyXG4vLyB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xyXG4vLyAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXHJcbi8vICAgICBwcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLmlkLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIklURU0gVEFTS1wiLEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDb21wbGV0ZSBUaGUgVG8gRG8gTGlzdCcpKSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlXCIsbG9jYWxTdG9yYWdlKVxyXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkpTT04ucGFyc2UoaXRlbSlcIiwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSkpXHJcbi8vICAgICBsZXQgaG9sZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSlcclxuLy8gICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihob2xkZXIsIHRlc3RQcm9qZWN0KVxyXG4vLyAgICAgdGVzdFByb2plY3QuYWxsSXRlbXMucHVzaChob2xkZXIpXHJcbi8vICAgICAvLyAkKCdib2R5JykuYXBwZW5kKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2coXCJ0ZXN0UHJvamVjdC5hbGxJdGVtc1s0XS5uYW1lXCIsdGVzdFByb2plY3QuYWxsSXRlbXNbNF0pXHJcblxyXG4vLyBsZXQgb2JqZWN0RnJvbVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTb2x2ZSB0aGUgcXVhbnR1bSBwYXJhZGlnbScpKVxyXG5cclxuLy8gY29uc29sZS5sb2coXCJvYmplY3RGcm9tU3RvcmFnZVwiLG9iamVjdEZyb21TdG9yYWdlLmlkKVxyXG4vLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiU29sdmUgdGhlIHF1YW50dW0gcGFyYWRpZ21cIixsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU29sdmUgdGhlIHF1YW50dW0gcGFyYWRpZ20nKSlcclxuICAgICAgICBcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwidGVzdFByb2plY3QuYWxsSXRlbXNcIix0ZXN0UHJvamVjdC5hbGxJdGVtcylcclxuXHJcbi8vIGxldCBpdGVtVG9DaGFuZ2UgPSB0ZXN0UHJvamVjdC5hbGxJdGVtc1swXVxyXG4vLyBjb25zb2xlLmxvZyhcIml0ZW1Ub0NoYW5nZVwiLGl0ZW1Ub0NoYW5nZSlcclxuLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGl0ZW1Ub0NoYW5nZSwgdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY29uc29sZS5sb2coXCJpdGVtVG9DaGFuZ2VcIixpdGVtVG9DaGFuZ2UpXHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcblxyXG5zdGFydHVwUmVuZGVyUHJvamVjdFRhc2tzKClcclxuc3RhcnR1cExpYnJhcnlTaWRlYmFyUmVuZGVyZXIoKVxyXG5hZGRUYXNrSW50ZXJmYWNlKClcclxuYWRkTmV3UHJvamVjdCgpXHJcblxyXG4vLyNyZWdpb24gLS0tLSBMZWZ0b3ZlciwgcHJhY3RpY2UsIHRlc3RlZCBjb2RlIC0tLS1cclxuXHJcbi8vIGNvbnNvbGUubG9nKFwidXNlciBwcm90b1wiLE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyKSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyKSlcclxuLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHVzZXIsIHRvRG9QYXJlbnQpO1xyXG4vLyBjb25zb2xlLmxvZyh0b0RvUGFyZW50LmlzUHJvdG90eXBlT2YodXNlcikpXHJcbi8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VyKVxyXG4vLyBjb25zb2xlLmxvZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcbi8vIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRvRG9QYXJlbnQpLmZpbHRlcihpdGVtID0+IHR5cGVvZiB0b0RvUGFyZW50W2l0ZW1dID09PSAnZnVuY3Rpb24nKSlcclxuXHJcbi8vIHVzZXIuc3VtbWFyeSgpXHJcbi8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbi8vIGNvbnNvbGUubG9nKFwiZGVmYXVsdFByb2plY3QncyBpdGVtczpcIixkZWZhdWx0UHJvamVjdC5hbGxJdGVtcylcclxuLy8gY29uc29sZS5sb2coXCJ0b0RvUGFyZW50J3MgcHJvamVjdHM6XCIsdG9Eb1BhcmVudC5hbGxQcm9qZWN0cylcclxuXHJcbi8vIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbi8vIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbi8vIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbi8vIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuLy8gdG9kYXkgPSB5eXl5ICsgXCIgXCIgKyBtbSArIFwiIFwiICsgZGRcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwidG9kYXkgZm9yIHdlZWtcIix0b2RheSlcclxuLy8gbGV0IHdlZWsgPSBnZXRXZWVrKCBuZXcgRGF0ZSh0b2RheSkpXHJcbi8vIGNvbnNvbGUubG9nKFwiY3VycmVudCB3ZWVrXCIsd2VlaylcclxuXHJcbi8vIHRvZGF5ID0gbW0gKyAnLicgKyBkZCArICcuJyArIHl5eXkgKyBcIi5cIjtcclxuLy8gY29uc29sZS5sb2coXCJUb2RheSdzIERhdGVcIix0b2RheSk7XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IHsgdG9Eb1BhcmVudCwgY3JlYXRlVG9Eb0l0ZW0sIGNyZWF0ZVByb2plY3QgfVxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==