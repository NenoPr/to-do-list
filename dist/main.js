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
        // console.log("element.name",element.name)
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
    } else if (form.elements[2].value == "") {
        let taskLabelTitle = document.getElementById("label-task-title-input")
        let spanInfo = document.createElement("span")
        spanInfo.id = "span-error-task-title-input"
        spanInfo.textContent = "*Please Create a Project First"
        taskLabelTitle.appendChild(spanInfo)

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
        try {
            if (_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0].title != undefined) {
                document.getElementById("current-view-port").textContent = _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects[0].title
            }
        }
        catch {}
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

        updateRenderProjectTasks(project)

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
    if (localStorage.length != 0) {
        // try {
            for (let i=0;i<localStorage.length;i++) {

                try {
                    let projectToLoad = JSON.parse(localStorage.getItem(localStorage.key(i)))
                console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
                Object.setPrototypeOf(projectToLoad, toDoParent)
                console.log(projectToLoad)
                toDoParent.allProjects.push(projectToLoad)
                projectToLoad.allItems.forEach(element => {
                    Object.setPrototypeOf(element, projectToLoad)
                });
                }
                catch (err) { }
            }
    }
        // catch {
        //     alert("Can not access local Storage. All data will be lost on page refresh or close.")
        // }

        // finally {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsS0FBSyxPQUFPLHFGQUFxRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixhQUFhLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssc0JBQXNCLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVks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QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtRTtBQUNsQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxrRUFBOEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5Q0FBeUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUNBQXlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUE2QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUNBQWlDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGtFQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNB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dGhlb2RpbnByb2plY3QvLi9zcmMvc3R5bGVzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFdlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9zdHlsZXNoZWV0LmNzcz9kNzRkIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9ET01NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBmb3IgRmlyZWZveCAqL1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IFxcclxcbiAgfVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7ICovXFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA3dmggOTN2aCAvIDE3dncgODN2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLWNvbnRlbnRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLXNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxufVxcclxcblxcclxcbiNpbmJveCwgI3RvZGF5LCAjdGhpcy13ZWVrLCAjdGhpcy1tb250aCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNpbmJveDpob3ZlciwgI3RvZGF5OmhvdmVyLCAjdGhpcy13ZWVrOmhvdmVyLCAjdGhpcy1tb250aDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94OmFjdGl2ZSwgI3RvZGF5OmFjdGl2ZSwgI3RoaXMtd2VlazphY3RpdmUsICN0aGlzLW1vbnRoOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQyLCAyNTApO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGhlaWdodDogMjB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc2lkZWJhci13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogIGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciBhdXRvIC8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtb3B0aW9ucy1zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVuYW1lLXByb2plY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBvcmFuZ2U7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVuYW1lLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjUxMSk7XFxyXFxufVxcclxcblxcclxcbi5yZW5hbWUtcHJvamVjdDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjYsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC42MDcpO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY3VycmVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMTVmciAvIDNmciAzZnIgM2ZyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNDIsIDI1MCk7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjAxcmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2s6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdmlldy1wb3J0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc29ydC1ieSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAxIC8gNDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNzb3J0LWJ5LXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Ryb3Bkb3duIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRvcDogMTIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1ieS1vcHRpb25zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1ieS1vcHRpb25zOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbi8qIC50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufSAqL1xcclxcblxcclxcbi5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE0cmVtO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICByb3ctZ2FwOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gYXV0byAxNWZyIDNmciBhdXRvIGF1dG8gYXV0bztcXHJcXG4gICAgY29sdW1uLWdhcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgLjVyZW0gLjFyZW0gcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MCwgMTgxLCAzMCwgMC43MDQpO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuN3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC40cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHkge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMSAvIDQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCByZ2IoMTMwLCAxMzAsIDEzMCk7XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDUgLyAxIC8gNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoMjM0LCAxNDIsIDQ0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDE0MiwgNDQsIDAuNDMzKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA2IC8gMSAvIDY7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCByZ2IoMjU1LCA4MCwgODApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgODAsIDgwLCAwLjQ4NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eTpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDI1cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiA5OS41JTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tdGl0bGUge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGl2LWhpZGRlbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzgwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1kaXYge1xcclxcbiAgICB3aWR0aDogMzMlO1xcclxcbiAgICBoZWlnaHQ6IDMzJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1hbmQtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLWRhdGUtaW5wdXQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1kYXRlLWlucHV0ID4gaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtcHJvamVjdC1pbnB1dC1mb3ItdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLXByb2plY3QtaW5wdXQtZm9yLXRhc2sgPiBzZWxlY3Qge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXQge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlLWlucHV0LWludmFsaWQge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUtaW5wdXQtaW52YWxpZDp2YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogI3NwYW4tZXJyb3ItdGFzay10aXRsZS1pbnB1dCB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5mb3JtID4gbGFiZWwge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYig1NiwgMTUyLCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjA1cmVtIHJnYig1NywgMTU5LCAyNTUpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWRpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYgPiBpbnB1dCB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXN1Ym1pdCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDE4MiwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXN1Ym1pdDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMXJlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2JhY2stZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAyNSU7XFxyXFxuICAgIHdpZHRoOiAxMjAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JhY2stZGl2LWRlbGV0ZSB7XFxyXFxuICAgIGhlaWdodDogMjUlO1xcclxcbiAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LXRleHQge1xcclxcbiAgICBmb250LXdlaWdodDogIDcwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtbGFiZWwge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtbGFiZWwgPiBzcGFuIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1pbnB1dDpmb2N1cywgI25ldy1wcm9qZWN0LWlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoNTYsIDE1MiwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4zcmVtIC4xcmVtIHJnYig1NywgMTU5LCAyNTUpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyAzIC8gMjtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlmMDA7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gMyAvIDM7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcXHJcXG4gICAgLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuICAgICNjb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDd2aCA5M3ZoIC8gMTd2dyA4M3Z3O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDI1NjBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICNjb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDV2aCA5NXZoIC8gMTJ2dyA4OHZ3O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0IsRUFBRSxnQ0FBZ0M7SUFDMUQscUJBQXFCLEVBQUUsZ0JBQWdCO0lBQ3ZDLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGFBQWEsRUFBRSxrQ0FBa0M7RUFDbkQ7O0FBRUY7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFB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O0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw2Q0FBNkM7SUFDN0MsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUNBQW1DO1FBQ25DLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUNBQW1DO1FBQ25DLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogZm9yIEludGVybmV0IEV4cGxvcmVyLCBFZGdlICovXFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogZm9yIEZpcmVmb3ggKi9cXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyBcXHJcXG4gIH1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIGZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXFxyXFxuICB9XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbn1cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogN3ZoIDkzdmggLyAxN3Z3IDgzdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDE7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1jb250ZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3gsICN0b2RheSwgI3RoaXMtd2VlaywgI3RoaXMtbW9udGgge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3g6aG92ZXIsICN0b2RheTpob3ZlciwgI3RoaXMtd2Vlazpob3ZlciwgI3RoaXMtbW9udGg6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNpbmJveDphY3RpdmUsICN0b2RheTphY3RpdmUsICN0aGlzLXdlZWs6YWN0aXZlLCAjdGhpcy1tb250aDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI0MiwgMjUwKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNpZGViYXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6ICBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgYXV0byAvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW9wdGlvbnMtc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbmFtZS1wcm9qZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgb3JhbmdlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbmFtZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41MTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVuYW1lLXByb2plY3Q6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY2LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNjA3KTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWN1cnJlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDE1ZnIgLyAzZnIgM2ZyIDNmcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAyIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQyLCAyNTApO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4wMXJlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjZiNmI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXZpZXctcG9ydCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NvcnQtYnkge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc29ydC1ieS10ZXh0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNkcm9wZG93biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDEyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnktb3B0aW9ucyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnktb3B0aW9uczpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Qge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiAudGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIHdpZHRoOiAxN3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIGF1dG8gMTVmciAzZnIgYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGNvbHVtbi1nYXA6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIC41cmVtIC4xcmVtIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzAsIDE4MSwgMzAsIDAuNzA0KTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjdyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDEgLyAzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDEgLyA0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4xcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgcmdiKDEzMCwgMTMwLCAxMzApO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA1IC8gMSAvIDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDIzNCwgMTQyLCA0NCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAxNDIsIDQ0LCAwLjQzMyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNiAvIDEgLyA2O1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgcmdiKDI1NSwgODAsIDgwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDgwLCA4MCwgMC40ODUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHk6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjAyNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWFjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogOTkuNSU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpdi1oaWRkZW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc4MDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tZGl2IHtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgaGVpZ2h0OiAzMyU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUtYW5kLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1kYXRlLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtZGF0ZS1pbnB1dCA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLXByb2plY3QtaW5wdXQtZm9yLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1wcm9qZWN0LWlucHV0LWZvci10YXNrID4gc2VsZWN0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jc3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZS1pbnB1dC1pbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSByZWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlLWlucHV0LWludmFsaWQ6dmFsaWQge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi8qICNzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXQge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuZm9ybSA+IGxhYmVsIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoNTYsIDE1MiwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4wNXJlbSByZ2IoNTcsIDE1OSwgMjU1KTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2ID4gaW5wdXQge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxODIsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQ6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjFyZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNiYWNrLWRpdiB7XFxyXFxuICAgIGhlaWdodDogMjUlO1xcclxcbiAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNiYWNrLWRpdi1kZWxldGUge1xcclxcbiAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC10ZXh0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6ICA3MDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWxhYmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWxhYmVsID4gc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogLjJyZW07XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdC1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMsICNuZXctcHJvamVjdC1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDU2LCAxNTIsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuM3JlbSAuMXJlbSByZ2IoNTcsIDE1OSwgMjU1KTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IHRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gMyAvIDI7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5ZjAwO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMiAvIDMgLyAzO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC1idXR0b246aG92ZXIsICNjYW5jZWwtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiA3dmggOTN2aCAvIDE3dncgODN2dztcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAyNTYwcHgpIHtcXHJcXG4gICAgLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAjY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiA1dmggOTV2aCAvIDEydncgODh2dztcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZldlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0gezF8MnwzfDR8NXw2fDd9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW87XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRXZWVrWWVhciBmcm9tIFwiLi4vZ2V0V2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0gezF8MnwzfDR8NXw2fDd9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0V2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvRG9QYXJlbnQsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRvRG9JdGVtIH0gZnJvbSAnLi9pbmRleCdcclxuaW1wb3J0IHtnZXREYXksIGdldFdlZWssIGlzVG9kYXl9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0O1xyXG5sZXQgaW5ib3hWaWV3O1xyXG5cclxuLy8gQ3JlYXRlcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2sgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIERPTSB1bmRlciB0aGUgdGFza1xyXG5mdW5jdGlvbiBleHBhbmRUYXNrRGVzY3JpcHRpb25MaXN0ZW5lcnMoZWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50KSB7XHJcblxyXG4gICAgbGV0IGFwcGVuZEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgaWYgKGFwcGVuZEVsZW1lbnQuY2hpbGROb2Rlc1sxXSA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2sgYWN0aW9uIGJ1dHRvbnNcclxuICAgICAgICBsZXQgdGFza0FjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgdGFza0FjdGlvbnMuY2xhc3NMaXN0LmFkZChcInRhc2stYWN0aW9uc1wiKVxyXG4gICAgICAgIGFwcGVuZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0FjdGlvbnMpXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBEZXNjcmlwdGlvbiBUaXRsZVxyXG4gICAgICAgIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tdGl0bGVcIilcclxuICAgICAgICB0YXNrRGVzYy5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOlwiXHJcbiAgICAgICAgdGFza0FjdGlvbnMuYXBwZW5kQ2hpbGQodGFza0Rlc2MpXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBEZXNjcmlwdGlvblxyXG4gICAgICAgIHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxyXG4gICAgICAgIHRhc2tEZXNjLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uRWxlbWVudFxyXG4gICAgICAgIHRhc2tBY3Rpb25zLmFwcGVuZENoaWxkKHRhc2tEZXNjKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBwZW5kRWxlbWVudC5jaGlsZE5vZGVzWzFdLnJlbW92ZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgdGhlIHRhc2sgb24gdGhlIERPTSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgdG9Eb0l0ZW1cclxuZnVuY3Rpb24gcmVuZGVyVGFza1RvRG9tIChlbGVtZW50KSB7XHJcblxyXG4gICAgLy9SZW5kZXIgdGhlIGl0ZW1zIHRhc2sgZGF0YSB0byB0aGUgZGl2XHJcblxyXG4gICAgbGV0IGFwcGVuZFRoZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIilcclxuICAgIC8vQ3JlYXRlIHRoZSB0YXNrIHdyYXBwZXJcclxuICAgIGxldCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgdGFza1dyYXBwZXIuaWQgPSBlbGVtZW50Lm5hbWVcclxuICAgIGFwcGVuZFRoZVRhc2suYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpXHJcbiAgICAvL0NyZWF0ZSB0YXNrIGluZm9cclxuICAgIGxldCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2staW5mb1wiKVxyXG4gICAgdGFza0luZm8uaWQgPSBlbGVtZW50LmlkXHJcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrSW5mbylcclxuXHJcbiAgICAvLyAtLS0tIENyZWF0ZSB0aGUgdGFzayBpbmZvIHN0cnVjdHVyZSBhbmQgZGF0YSAtLS0tXHJcblxyXG4gICAgLy8gQ3JlYXRlIGNoZWNrIHRhc2sgYnV0dG9uXHJcbiAgICBsZXQgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVjay10YXNrXCIpXHJcbiAgICBlbHNlIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC10YXNrXCIpXHJcbiAgICB0YXNrQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgICAgICB0b2dnbGVDaGVja1Rhc2socG9pbnRlcilcclxuICAgIH0pXHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrQ2hlY2ssIGVsZW1lbnQuZGVzY3JpcHRpb24pXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRpdGxlXHJcbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcclxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcclxuXHJcbiAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgZXhwYW5kVGFza0Rlc2NyaXB0aW9uTGlzdGVuZXJzKHRhc2tUaXRsZSwgZWxlbWVudC5kZXNjcmlwdGlvbilcclxuICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAvL0NyZWF0ZSBEYXRlXHJcbiAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIilcclxuICAgIGlmIChlbGVtZW50LmR1ZURhdGUgIT0gXCJObyBEdWUgRGF0ZVwiKSB7XHJcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSByZWZvcm1hdERhdGUoZWxlbWVudC5kdWVEYXRlLCBcImRheVwiKVxyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ICs9IHJlZm9ybWF0RGF0ZShlbGVtZW50LmR1ZURhdGUsIFwiZGQubW9udGgueXl5eS5cIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGVcclxuICAgIH1cclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEYXRlKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0YXNrIHByaW9yaXR5XHJcbiAgICBsZXQgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKVxyXG4gICAgdGFza0l0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XHJcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSBcIlVyZ2VudCBQcmlvcml0eVwiKSB7XHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuYm9yZGVyID0gXCIuMDVyZW0gc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuNSlcIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmNvbG9yID0gXCJyZWRcIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjQwMFwiXHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gXCJSZWd1bGFyIFByaW9yaXR5XCIpIHtcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5ib3JkZXIgPSBcIi4wNXJlbSBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMClcIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmNvbG9yID0gXCJibGFja1wiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuZm9udFdlaWdodCA9IFwiNDAwXCJcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSBcIkxvdyBQcmlvcml0eVwiKSB7XHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuYm9yZGVyID0gXCIuMDVyZW0gc29saWQgcmdiKDczLCAxOTAsIDApXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjQwMFwiXHJcbiAgICB9XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrSXRlbSlcclxuXHJcbiAgICAvLyBDcmVhdGUgZWRpdCB0YXNrIGJ1dHRvblxyXG4gICAgbGV0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtdGFza1wiKVxyXG4gICAgdGFza0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIlxyXG4gICAgdGFza0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgICAgICBhZGRFZGl0VGFza0xpc3RlbmVycyh0YXNrRWRpdCwgZWxlbWVudCwgcG9pbnRlcilcclxuICAgIH0pXHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRWRpdClcclxuXHJcbiAgICAvLyBDcmVhdGUgZGVsZXRlIHRhc2sgYnV0dG9uXHJcbiAgICBsZXQgdGFza0lEZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSURlbC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIilcclxuICAgIHRhc2tJRGVsLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxyXG4gICAgdGFza0lEZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRlbGV0ZVRhc2sodGFza0lEZWwpXHJcbiAgICB9KVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0lEZWwpXHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgdGhlIGFkZCBhIHRhc2tzIGludGVyZmFjZSBhbiBwYXNzZXMgdGhlIGlucHV0dGVkIGRhdGEgdG8gc3VibWl0QWRkTmV3VGFzaygpXHJcbmZ1bmN0aW9uIGFkZFRhc2tJbnRlcmZhY2UoKSB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKVxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGRpdkhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRpdkhpZGRlbi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkhpZGRlbilcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBsZXQgY2xvc2VFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY2xvc2VFZGl0LmlkID0gXCJjYW5jZWwtYnV0dG9uXCJcclxuICAgIGNsb3NlRWRpdC50ZXh0Q29udGVudCA9IFwiIENhbmNlbCBcIlxyXG4gICAgY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VFZGl0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VFZGl0KVxyXG5cclxuICAgIGxldCBhZGQ1dGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBhZGQ1dGFza3MuaWQgPSBcImFkZC01LXRhc2tzXCJcclxuICAgIGFkZDV0YXNrcy50ZXh0Q29udGVudCA9IFwiIEFkZCA1IGZpbGxlciB0YXNrcyBcIlxyXG4gICAgYWRkNXRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0YXNrc0luaXRpYWxFdmVudEFkZGVyKClcclxuICAgIH0pXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZDV0YXNrcylcclxuXHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcInRpdGxlXCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiXHJcbiAgICBsYWJlbC5pZCA9IFwibGFiZWwtdGFzay10aXRsZS1pbnB1dFwiXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcInRpdGxlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIlxyXG4gICAgaW5wdXQuaWQgPSBcInRhc2stdGl0bGUtaW5wdXRcIlxyXG4gICAgaW5wdXQubWluTGVuZ3RoID0gXCIxXCJcclxuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGV0IGRpdkRhdGVBbmRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZGl2RGF0ZUFuZFByb2plY3QuaWQgPSBcImRhdGUtYW5kLXByb2plY3RcIlxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJkYXRlXCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiXHJcbiAgICBsYWJlbC5pZCA9IFwibGFiZWwtZGF0ZS1pbnB1dFwiXHJcbiAgICBkaXZEYXRlQW5kUHJvamVjdC5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwiZGF0ZS1pbnB1dFwiXHJcbiAgICBpbnB1dC5uYW1lID0gXCJkYXRlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcImRhdGVcIlxyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcInByb2plY3RcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIlxyXG4gICAgbGFiZWwuaWQgPSBcImxhYmVsLXByb2plY3QtaW5wdXQtZm9yLXRhc2tcIlxyXG4gICAgZGl2RGF0ZUFuZFByb2plY3QuYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIGlucHV0LmlkID0gXCJwcm9qZWN0LWlucHV0LWZvci10YXNrXCJcclxuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3RcIlxyXG4gICAgaW5wdXQuc2l6ZSA9IFwiMVwiXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA9PSBlbGVtZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBlbGVtZW50LnRpdGxlXHJcbiAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCAhPSBlbGVtZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBlbGVtZW50LnRpdGxlXHJcbiAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZEYXRlQW5kUHJvamVjdClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlNldCBQcmlvcml0eTogXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaW5wdXQuaWQgPSBcInByaW9yaXR5LWRpdlwiXHJcblxyXG4gICAgLy8gUmFkaW8gY2hvaWNlc1xyXG4gICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwibG93LXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJMb3cgUHJpb3JpdHlcIlxyXG4gICAgbGV0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwibG93LXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvdyBQcmlvcml0eVwiXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJyZWd1bGFyLXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcclxuICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJyZWd1bGFyLXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwidXJnZW50LXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJVcmdlbnQgUHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJ1cmdlbnQtcHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW50IFByaW9yaXR5XCJcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJkZXNjcmlwdGlvblwiKVxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBEZXNjcmlwdGlvblwiXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxyXG4gICAgaW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIlxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIilcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCI3MFwiKVxyXG4gICAgaW5wdXQuc3R5bGUuZm9udEZhbWlseSA9ICdPcGVuIFNhbnMnXHJcbiAgICBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJmb3JtLXN1Ym1pdFwiXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2sgKGZvcm0pXHJcbiAgICB9KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXHJcblxyXG4gICAgZGl2SGlkZGVuLmFwcGVuZENoaWxkKGZvcm0pXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gUmVmb3JtYXRzIHRoZSBkYXRlcyBiYXNlZCBvbiB0aGUgZGVzaXJlZCBvdXRwdXRcclxuZnVuY3Rpb24gcmVmb3JtYXREYXRlKGlucHV0LCBvdXRwdXRGb3JtYXQpIHtcclxuXHJcbiAgICBpZiAoaW5wdXQgPT0gXCJObyBEdWUgRGF0ZVwiKSByZXR1cm4gXCJObyBEdWUgRGF0ZVwiXHJcbiAgICBsZXQgeWVhcjtcclxuICAgIGxldCBtb250aDtcclxuICAgIGxldCBkYXk7XHJcblxyXG4gICAgaWYgKG91dHB1dEZvcm1hdCA9PSBcImRkLm1tLnl5eXkuXCIpIHsgLy8gaW5wdXQgZm9ybWF0OiB5eXl5LW1tLWRkXHJcbiAgICAgICAgLy9mb3JtYXQgZGF0ZSBmcm9tIGh0bWwgZGF0ZSBlbGVtZW50IHRvIG9iamVjdCBmb3JtYXRcclxuICAgICAgICB5ZWFyID0gaW5wdXQuc2xpY2UoMCw0KVxyXG4gICAgICAgIG1vbnRoID0gaW5wdXQuc2xpY2UoNSwgNylcclxuICAgICAgICBkYXkgPSBpbnB1dC5zdWJzdHIoLTIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnB1dDogeXl5eS1tbS1kZCBvdXRwdXQ6XCIsZGF5ICsgXCIuXCIgKyBtb250aCArIFwiLlwiICsgeWVhciArIFwiLlwiKVxyXG4gICAgICAgIHJldHVybiBkYXkgKyBcIi5cIiArIG1vbnRoICsgXCIuXCIgKyB5ZWFyICsgXCIuXCJcclxuICAgICAgICBcclxuICAgIH0gZWxzZSBpZiAob3V0cHV0Rm9ybWF0ID09IFwieXl5eS1tbS1kZFwiKSB7IC8vIGlucHV0IGZvcm1hdDogZGQubW9udGgueXl5eS5cclxuICAgICAgICAvL2Zvcm1hdCBkYXRlIGZyb20gT2JqZWN0IGRhdGUgdG8gaHRtbCBkYXRlIGVsZW1lbnQgZm9ybWF0XHJcbiAgICAgICAgeWVhciA9IGlucHV0LnN1YnN0cigtNSlcclxuICAgICAgICB5ZWFyID0geWVhci5zbGljZSgwLDQpXHJcbiAgICAgICAgbW9udGggPSBpbnB1dC5zbGljZSgzLCA1KVxyXG4gICAgICAgIGRheSA9IGlucHV0LnNsaWNlKDAsIDIpXHJcbiAgICAgICAgaW5wdXQgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5XHJcbiAgICAgICAgcmV0dXJuIChpbnB1dClcclxuXHJcbiAgICB9IGVsc2UgaWYgKG91dHB1dEZvcm1hdCA9PSBcInl5eXkgbW0gZGRcIikgeyAvLyBpbnB1dCBmb3JtYXQ6IGRkLm1vbnRoLnl5eXkuXHJcbiAgICAgICAgLy9mb3JtYXQgZGF0ZSBmcm9tIE9iamVjdCBkYXRlIGJlIHBhcnNlZCBmb3IgZGF0ZS1mbiBtb2R1bGUgdG8gZ2V0IHRoZSB3ZWVrXHJcbiAgICAgICAgeWVhciA9IGlucHV0LnN1YnN0cigtNSlcclxuICAgICAgICB5ZWFyID0geWVhci5zbGljZSgwLDQpXHJcbiAgICAgICAgbW9udGggPSBpbnB1dC5zbGljZSgzLCA1KVxyXG4gICAgICAgIGRheSA9IGlucHV0LnNsaWNlKDAsIDIpXHJcbiAgICAgICAgaW5wdXQgPSB5ZWFyICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgZGF5XHJcbiAgICAgICAgcmV0dXJuIChpbnB1dClcclxuXHJcbiAgICB9IGVsc2UgaWYgKG91dHB1dEZvcm1hdCA9PSBcImRkLm1vbnRoLnl5eXkuXCIpIHsgLy8gaW5wdXQgZm9ybWF0IGRkLm1tLnl5eXkuXHJcbiAgICAgICAgLy8gZm9ybWF0IGRhdGUgZnJvbSBPYmplY3QgZGF0ZSB0byByZW5kZXIgZm9ybWF0IGZvciBET01cclxuICAgICAgICBkYXkgPSBpbnB1dC5zbGljZSgwLCAyKVxyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zdWJzdHIoLTUpXHJcbiAgICAgICAgeWVhciA9IHllYXIuc2xpY2UoMCw0KVxyXG4gICAgICAgIG1vbnRoID0gaW5wdXQuc2xpY2UoMywgNSlcclxuICAgICAgICBpZiAobW9udGggPT0gXCIwMVwiKSBtb250aCA9IFwiSmFudWFyeVwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwMlwiKSBtb250aCA9IFwiRmVicnVhcnlcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDNcIikgbW9udGggPSBcIk1hcmNoXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA0XCIpIG1vbnRoID0gXCJBcHJpbFwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwNVwiKSBtb250aCA9IFwiTWF5XCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA2XCIpIG1vbnRoID0gXCJKdW5lXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA3XCIpIG1vbnRoID0gXCJKdWx5XCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA4XCIpIG1vbnRoID0gXCJBdWd1c3RcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDlcIikgbW9udGggPSBcIlNlcHRlbWJlclwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIxMFwiKSBtb250aCA9IFwiT2N0b2JlclwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIxMVwiKSBtb250aCA9IFwiTm92ZW1iZXJcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMTJcIikgbW9udGggPSBcIkRlY2VtYmVyXCJcclxuICAgICAgICAvLyNyZWdpb24gLS0tLSBtbSB0byBtb250aCBmb3JtYXR0ZXJcclxuICAgICAgICAvLyBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkphblwiKSBpbnB1dC5yZXBsYWNlKFwiSmFudWFyeVwiLCBcIjAxXCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkZlYlwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJGZWJydWFyeVwiLCBcIjAyXCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIk1hclwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJNYXJjaFwiLCBcIjAzXCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkFwclwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJBcHJpbFwiLCBcIjA0XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIk1heVwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJNYXlcIiwgXCIwNVwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJKdW5cIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiSnVuZVwiLCBcIjA2XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkp1bFwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJKdWx5XCIsIFwiMDdcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiQXVnXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkF1Z3VzdFwiLCBcIjA4XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIlNlcFwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJTZXB0ZW1iZXJcIiwgXCIwOVwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJPY3RcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiT2N0b2JlclwiLCBcIjEwXCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIk5vdlwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJOb3ZlbWJlclwiLCBcIjExXCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkRlY1wiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJEZWNlbWJlclwiLCBcIjEyXCIpXHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgICAgIHJldHVybiBkYXkgKyBcIi5cIiArIG1vbnRoICsgXCIuXCIgKyB5ZWFyICsgXCIuXCJcclxuXHJcbiAgICB9IGVsc2UgaWYgKG91dHB1dEZvcm1hdCA9IFwiZGF5XCIpIHsgLy8gaW5wdXQgZm9ybWF0IGRkLm1tLnl5eXkuXHJcbiAgICAgICAgLy8gZm9ybWF0IGRhdGUgZnJvbSBPYmplY3QgZGF0ZSB0byByZW5kZXIgZGF5IHRvIHRoZSBET00gd2l0aCBkYXRlLWZucyBtb2R1bGVcclxuICAgICAgICB5ZWFyID0gaW5wdXQuc3Vic3RyKC01KVxyXG4gICAgICAgIHllYXIgPSB5ZWFyLnNsaWNlKDAsNClcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDMsIDUpXHJcbiAgICAgICAgZGF5ID0gaW5wdXQuc2xpY2UoMCwgMilcclxuXHJcbiAgICAgICAgaW5wdXQgPSB5ZWFyICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgZGF5XHJcbiAgICAgICAgaW5wdXQgPSBnZXREYXkobmV3IERhdGUoaW5wdXQpKVxyXG5cclxuICAgICAgICBpZiAoaW5wdXQgPT0gXCIwXCIpIGlucHV0ID0gXCJTdW5kYXksIFwiXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgPT0gXCIxXCIpIGlucHV0ID0gXCJNb25kYXksIFwiXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgPT0gXCIyXCIpIGlucHV0ID0gXCJUaHVyc2RheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjNcIikgaW5wdXQgPSBcIldlZG5lc2RheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjRcIikgaW5wdXQgPSBcIlR1ZXNkYXksIFwiXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgPT0gXCI1XCIpIGlucHV0ID0gXCJGcmlkYXksIFwiXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgPT0gXCI2XCIpIGlucHV0ID0gXCJTYXR1cmRheSwgXCJcclxuICAgICAgICByZXR1cm4gKGlucHV0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gQ3JlYXRlcyB0aGUgZWRpdCBhIHRhc2sgaW50ZXJmYWNlIG9uIHRoZSBwcm92aWRlZCBlbGVtZW50XHJcbmZ1bmN0aW9uIGFkZEVkaXRUYXNrTGlzdGVuZXJzKHRhc2tJdGVtLCBlbGVtZW50LCBwb2ludGVyKSB7XHJcblxyXG4gICAgbGV0IGRpdkhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRpdkhpZGRlbi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkhpZGRlbilcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBsZXQgY2xvc2VFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY2xvc2VFZGl0LmlkID0gXCJjYW5jZWwtYnV0dG9uXCJcclxuICAgIGNsb3NlRWRpdC50ZXh0Q29udGVudCA9IFwiIENhbmNlbCBcIlxyXG4gICAgY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VFZGl0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VFZGl0KVxyXG5cclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwidGl0bGVcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkVkaXQgVGl0bGVcIlxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiXHJcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCJcclxuICAgIGlucHV0LnZhbHVlID0gZWxlbWVudC50aXRsZVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGV0IGRpdkRhdGVBbmRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZGl2RGF0ZUFuZFByb2plY3QuaWQgPSBcImRhdGUtYW5kLXByb2plY3RcIlxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJkYXRlXCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiXHJcbiAgICBsYWJlbC5pZCA9IFwibGFiZWwtZGF0ZS1pbnB1dFwiXHJcbiAgICBkaXZEYXRlQW5kUHJvamVjdC5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwiZGF0ZS1pbnB1dFwiXHJcbiAgICBpbnB1dC5uYW1lID0gXCJkYXRlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcImRhdGVcIlxyXG4gICAgaW5wdXQudmFsdWUgPSByZWZvcm1hdERhdGUoZWxlbWVudC5kdWVEYXRlLFwieXl5eS1tbS1kZFwiKVxyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcInByb2plY3RcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIlxyXG4gICAgbGFiZWwuaWQgPSBcImxhYmVsLXByb2plY3QtaW5wdXQtZm9yLXRhc2tcIlxyXG4gICAgZGl2RGF0ZUFuZFByb2plY3QuYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIGlucHV0LmlkID0gXCJwcm9qZWN0LWlucHV0LWZvci10YXNrXCJcclxuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3RcIlxyXG4gICAgaW5wdXQuc2l6ZSA9IFwiMVwiXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA9PSBlbGVtZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBlbGVtZW50LnRpdGxlXHJcbiAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCAhPSBlbGVtZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBlbGVtZW50LnRpdGxlXHJcbiAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZEYXRlQW5kUHJvamVjdClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYW5nZSBQcmlvcml0eTogXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaW5wdXQuaWQgPSBcInByaW9yaXR5LWRpdlwiXHJcblxyXG4gICAgLy8gUmFkaW8gY2hvaWNlc1xyXG4gICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwibG93LXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJMb3cgUHJpb3JpdHlcIlxyXG4gICAgbGV0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwibG93LXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvdyBQcmlvcml0eVwiXHJcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSByYWRpby52YWx1ZSkgcmFkaW8uY2hlY2tlZCA9IHRydWVcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcInJlZ3VsYXItcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJyZWd1bGFyLXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gcmFkaW8udmFsdWUpIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJ1cmdlbnQtcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIlVyZ2VudCBQcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcInVyZ2VudC1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbnQgUHJpb3JpdHlcIlxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gcmFkaW8udmFsdWUpIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiZGVzY3JpcHRpb25cIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IERlc2NyaXB0aW9uXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcbiAgICBpbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKVxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjcwXCIpXHJcbiAgICBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gJ09wZW4gU2FucydcclxuICAgIGlucHV0LnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCJcclxuICAgIGlucHV0LnZhbHVlID0gZWxlbWVudC5kZXNjcmlwdGlvblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwiZm9ybS1zdWJtaXRcIlxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gICAgLy8gLS0tLSBzZXQgdGhlIHRhc2tJdGVtIHRvIHBhcmVudCBwYXJlbnQgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgaWQgYW5kIHBhc3MgaXRcclxuICAgIHRhc2tJdGVtID0gdGFza0l0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN1Ym1pdFRhc2tDaGFuZ2VzKGZvcm0sIGVsZW1lbnQsIHBvaW50ZXIpXHJcbiAgICB9KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXHJcblxyXG4gICAgZGl2SGlkZGVuLmFwcGVuZENoaWxkKGZvcm0pXHJcbn1cclxuXHJcbi8vIFRvZ2dsZXMgY2hlY2sgdGFzayBzdGF0ZVxyXG5mdW5jdGlvbiB0b2dnbGVDaGVja1Rhc2socG9pbnRlcikge1xyXG5cclxuICAgIGxldCBpdGVtSWQgPSBwb2ludGVyLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgY29uc29sZS5sb2coXCJpdGVtSWQ6XCIsaXRlbUlkKVxyXG4gICAgY29uc29sZS5sb2coKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcInRvRG9QYXJlbnQuYWxsUHJvamVjdHNcIix0b0RvUGFyZW50LmFsbFByb2plY3RzKVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIHByb2plY3QuYWxsSXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1JZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtLmlkXCIsaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQgPT0gXCJVbmNoZWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IFwiQ2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVjay10YXNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXRhc2tcIilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGVja2VkID09IFwiQ2hlY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gXCJVbmNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC10YXNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGVjay10YXNrXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50Lm5hbWVcIixlbGVtZW50Lm5hbWUpXHJcbiAgICB9KVxyXG5cclxufSBcclxuXHJcbi8vIERlbGV0ZSBjdXJyZW50IHRhc2tcclxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrRGVsKSB7XHJcblxyXG4gICAgbGV0IGl0ZW1JZCA9IHRhc2tEZWwucGFyZW50RWxlbWVudC5pZFxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkocHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT09IGl0ZW1JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5zcGxpY2UoY291bnRlciwxKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY291bnRlcisrXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICB0YXNrRGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGVsZW1lbnRQcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KGVsZW1lbnRQcm9qZWN0KSlcclxuXHJcblxyXG59XHJcblxyXG4vLyBDaGFuZ2VzIHRoZSBvYmplY3RzIGRhdGEgdG8gdGhlIHByb3ZpZGVkIG9uZXMgZnJvbSBhZGRUYXNrSW50ZXJmYWNlKClcclxuZnVuY3Rpb24gc3VibWl0TmV3VGFzayhmb3JtKSB7XHJcblxyXG4gICAgaWYgKCBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtaW5wdXRcIilcclxuICAgICAgICBsZXQgdGFza0xhYmVsVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRhc2stdGl0bGUtaW5wdXRcIilcclxuXHJcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGUtaW5wdXQtaW52YWxpZFwiKVxyXG5cclxuICAgICAgICBsZXQgc3BhbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIHNwYW5JbmZvLmlkID0gXCJzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXRcIlxyXG4gICAgICAgIHNwYW5JbmZvLnRleHRDb250ZW50ID0gXCIqUGxlYXNlIGlucHV0IGEgdGl0bGVcIlxyXG4gICAgICAgIHRhc2tMYWJlbFRpdGxlLmFwcGVuZENoaWxkKHNwYW5JbmZvKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzJdLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICBsZXQgdGFza0xhYmVsVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRhc2stdGl0bGUtaW5wdXRcIilcclxuICAgICAgICBsZXQgc3BhbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIHNwYW5JbmZvLmlkID0gXCJzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXRcIlxyXG4gICAgICAgIHNwYW5JbmZvLnRleHRDb250ZW50ID0gXCIqUGxlYXNlIENyZWF0ZSBhIFByb2plY3QgRmlyc3RcIlxyXG4gICAgICAgIHRhc2tMYWJlbFRpdGxlLmFwcGVuZENoaWxkKHNwYW5JbmZvKVxyXG5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZm9ybS5lbGVtZW50c1wiLGZvcm0uZWxlbWVudHMpXHJcblxyXG4gICAgbGV0IGVsZW1lbnRQcmlvcml0eTtcclxuICAgIGlmIChmb3JtLmVsZW1lbnRzWzNdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnRQcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbM10udmFsdWVcclxuICAgIH0gZWxzZSBpZiAoZm9ybS5lbGVtZW50c1s0XS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50UHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzRdLnZhbHVlXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uZWxlbWVudHNbNV0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudFByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1s1XS52YWx1ZVxyXG4gICAgfVxyXG4gICAgbGV0IGVsZW1lbnRUaXRsZSA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWVcclxuICAgIGxldCBlbGVtZW50RHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbMV0udmFsdWVcclxuICAgIGxldCBlbGVtZW50UHJvamVjdCA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWVcclxuICAgIGxldCBlbGVtZW50RGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzWzZdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudE5vdGVzXHJcbiAgICBsZXQgZWxlbWVudENoZWNrZWRcclxuICAgIFxyXG4gICAgaWYgKGVsZW1lbnREdWVEYXRlLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICBlbGVtZW50RHVlRGF0ZSA9IHJlZm9ybWF0RGF0ZShlbGVtZW50RHVlRGF0ZSwgXCJkZC5tbS55eXl5LlwiKVxyXG4gICAgfSBlbHNlIGVsZW1lbnREdWVEYXRlID0gXCJObyBEdWUgRGF0ZVwiXHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBlbGVtZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50UHJvamVjdCA9IGVsZW1lbnRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJwcm9qZWN0VG9QYXNzXCIsZWxlbWVudFByb2plY3QpXHJcblxyXG4gICAgaWYgKGVsZW1lbnRQcm9qZWN0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxldCBub1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBub1Rhc2tzLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUuanVzdGlmeVNlbGYgPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgIG5vVGFza3MudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIFByb2plY3QgRmlyc3QuXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuYXBwZW5kKG5vVGFza3MpXHJcbiAgICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBlbGVtZW50ID0gY3JlYXRlVG9Eb0l0ZW0oXHJcbiAgICAgICAgZWxlbWVudFRpdGxlLCBcclxuICAgICAgICBlbGVtZW50RGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGVsZW1lbnREdWVEYXRlLFxyXG4gICAgICAgIGVsZW1lbnRQcmlvcml0eSxcclxuICAgICAgICBlbGVtZW50Tm90ZXMsXHJcbiAgICAgICAgZWxlbWVudENoZWNrZWQsXHJcbiAgICAgICAgZWxlbWVudFByb2plY3QpXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkYXRlVmFsdWVcIixlbGVtZW50LmRhdGVWYWx1ZSlcclxuICAgIGZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG5cclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShlbGVtZW50UHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShlbGVtZW50UHJvamVjdCkpXHJcbiAgICBcclxuICAgIGlmIChlbGVtZW50UHJvamVjdC50aXRsZSA9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLmlubmVyVGV4dCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgICAgICBlbGVtZW50UHJvamVjdC5hbGxJdGVtcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuLy8gQ2hhbmdlcyB0aGUgb2JqZWN0cyBkYXRhIHRvIHRoZSBwcm92aWRlZCBhZGRFZGl0VGFza0xpc3RlbmVycygpXHJcbmZ1bmN0aW9uIHN1Ym1pdFRhc2tDaGFuZ2VzKGZvcm0sIGVsZW1lbnQsIHBvaW50ZXIpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JtLmVsZW1lbnRzKVxyXG4gICAgXHJcbiAgICBlbGVtZW50LnRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZVxyXG4gICAgbGV0IGVsZW1lbnREdWVEYXRlID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZVxyXG4gICAgbGV0IGVsZW1lbnRQcm9qZWN0ID0gZm9ybS5lbGVtZW50c1syXS52YWx1ZVxyXG5cclxuICAgIC8vZm9ybWF0IGRhdGVcclxuICAgIGlmIChlbGVtZW50RHVlRGF0ZS5sZW5ndGggPT0gMTApIHtcclxuICAgICAgICBlbGVtZW50RHVlRGF0ZSA9IHJlZm9ybWF0RGF0ZShlbGVtZW50RHVlRGF0ZSwgXCJkZC5tbS55eXl5LlwiKVxyXG4gICAgfSBlbHNlIGVsZW1lbnREdWVEYXRlID0gXCJObyBEdWUgRGF0ZVwiXHJcbiAgICBjb25zb2xlLmxvZyhcImVsZW1lbnREdWVEYXRlXCIsZWxlbWVudER1ZURhdGUpXHJcbiAgICBlbGVtZW50LmR1ZURhdGUgPSBlbGVtZW50RHVlRGF0ZVxyXG4gICAgXHJcbiAgICBpZiAoZm9ybS5lbGVtZW50c1szXS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50LnByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1szXS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzRdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnQucHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzRdLnZhbHVlXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uZWxlbWVudHNbNV0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudC5wcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbNV0udmFsdWVcclxuICAgIH1cclxuICAgIGVsZW1lbnQuZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzWzZdLnZhbHVlXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJQT0lOVEVSUlJSUlJSXCIscG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcclxuICAgIGxldCBDdXJyZW50UHJvamVjdElEID0gcG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG5cclxuICAgIGxldCBjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrO1xyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IEN1cnJlbnRQcm9qZWN0SUQpIHtcclxuICAgICAgICAgICAgY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzayA9IGVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidGFza0l0ZW0ubmFtZVwiLEN1cnJlbnRQcm9qZWN0SUQpXHJcbiAgICBjb25zb2xlLmxvZyhcImVsZW1lbnRQcm9qZWN0XCIsZWxlbWVudFByb2plY3QpXHJcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2tcIixjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrKVxyXG4gICAgXHJcbiAgICBpZiAoQ3VycmVudFByb2plY3RJRCAhPSBjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrLmlkKSB7XHJcblxyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdFRvUGFzcztcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBlbGVtZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdFRvUGFzcyA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1Byb2plY3RUb1Bhc3NcIixuZXdQcm9qZWN0VG9QYXNzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0Lm5hbWUgXCIsY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzaylcclxuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuYWxsSXRlbXMuZXZlcnkoIHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09IGVsZW1lbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIRVJFRUVcIixwcm9qZWN0LmFsbEl0ZW1zW2NvdW50ZXJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhFUkVFRVwiLHRhc2suaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuYWxsSXRlbXMuc3BsaWNlKChwcm9qZWN0LmFsbEl0ZW1zLmluZGV4T2YodGFzaykpLDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RUb1Bhc3MuYWxsSXRlbXMucHVzaCh0YXNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgbmV3UHJvamVjdFRvUGFzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIRVJFRUVcIixwcm9qZWN0LmFsbEl0ZW1zW2NvdW50ZXJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdQcm9qZWN0VG9QYXNzLm5hbWUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3RUb1Bhc3MpKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrLm5hbWUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2spKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICAgICAgY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5hbGxJdGVtcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFzc0ludG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpO1xyXG4gICAgLy8gcGFzc2luZyB6ZXJvIGJlY2F1c2UgdGhlIGVsZW1lbnQgcGFzcyB0aGUgY3VycmVudCBwcm9qZWN0IGlkXHJcbiAgICAvLyBwcm9iYWJseSB3b250IHdvcmsgd2hlbiB1cGRhdGVkIHRvIGhvdXNlIGluYm94IHRhc2tzXHJcbiAgICAvLyB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3ModGFza0l0ZW0pXHJcbiAgICBmb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxufVxyXG5cclxuLy8gUmVuZGVycyBkZWZhdWx0IHByb2plY3QgdGFza3Mgb24gdGhlIERPTVxyXG5mdW5jdGlvbiBzdGFydHVwUmVuZGVyUHJvamVjdFRhc2tzKCkge1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuZmlyc3RDaGlsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdENoaWxkIE51bGxcIilcclxuICAgICAgICBpZiAodG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXS5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVuZGVyIHRoZSBpdGVtcyBkYXRhIHRvIHRoZSBkaXZcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVOREVSRCBFTEVNRU5UXCIsIGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0b0RvUGFyZW50LmFsbFByb2plY3RzWzBdLnRpdGxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS50ZXh0Q29udGVudCA9IHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0udGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZW5kZXJzIHRoZSBjdXJyZW50IGxpYnJhcmllcyB0byB0aGUgcHJvamVjdHMgb24gdGhlIHNpZGViYXIgaW4gdGhlIERPTVxyXG5mdW5jdGlvbiBzdGFydHVwTGlicmFyeVNpZGViYXJSZW5kZXJlcigpIHtcclxuXHJcbiAgICBpZiAodG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3RUb0FwcGVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgcHJvamVjdFRvQXBwZW5kLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgICAgICBwcm9qZWN0VG9BcHBlbmQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcclxuICAgICAgICAgICAgcHJvamVjdFRvQXBwZW5kLmlkID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIHByb2plY3RUb0FwcGVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RUb0FwcGVuZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvamVjdFwiLHByb2plY3RUb0FwcGVuZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvamVjdFwiLGN1cnJlbnRQcm9qZWN0KVxyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBwcm9qZWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zaWRlYmFyLXdyYXBwZXJcIilcclxuICAgICAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3RUb0FwcGVuZClcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtb3B0aW9ucy1zaWRlYmFyXCIpXHJcbiAgICAgICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0T3B0aW9ucylcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInJlbmFtZS1wcm9qZWN0XCIpXHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LmlubmVyVGV4dCA9IFwiUmVuYW1lXCJcclxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGVkaXRQcm9qZWN0KVxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVuYW1lUHJvamVjdChwb2ludGVyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIilcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuaW5uZXJUZXh0ID0gXCJEZWxldGVcIlxyXG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmQoZGVsZXRlUHJvamVjdFNpZGViYXIpXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIikuYXBwZW5kQ2hpbGQocHJvamVjdFdyYXBwZXIpXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXS5pZFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIikubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1vcHRpb25zLXNpZGViYXJcIikuZm9yRWFjaCggbm9kZSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZW5kZXJzIEV2ZW50cyBmcm9tIHRoZSBwcm9qZWN0IHRvIHRoZSBET01cclxuZnVuY3Rpb24gdGFza3NJbml0aWFsRXZlbnRBZGRlcigpIHtcclxuXHJcbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggcHJvamVjdCBvYmplY3QgdW50aWwgaXRzIGZpcnN0IGVsZW1lbnQgbmFtZSBtYXRjaGVzIHRoZSBvbmUgb24gdGhlIERPTVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50XCIsZWxlbWVudC5hbGxJdGVtcylcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRQcm9qZWN0XCIsY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50Lm5hbWVcIixlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBjdXJyZW50UHJvamVjdCkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8NTtpKyspe1xyXG4gICAgICAgICAgICAgICAgLy9JbnNlcnQgZGF0YSBmcm9tIG9iamVjdCB0byBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQubmFtZVwiLGVsZW1lbnQubmFtZSlcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHRhc2sgb2JqZWN0IGFuZCBzdXBwbHkgaXQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza1BsYWNlaG9sZGVyID0gY3JlYXRlVG9Eb0l0ZW0oXCJQaWNrIHVwIExhdW5kcnlcIixcIkkgbmVlZCB0byBwaWNrIHVwIG15IExhdW5kcnkgZnJvbSB0aGUgd2FzaGluZyBtYWNoaW5lIG5leHQgaXMgc29tZSBsb3JlbSBpcHN1bTogTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIGV4cGVkaXRhIHNvbHV0YSB2b2x1cHRhdHVtIGFsaXF1YW0gZXhjZXB0dXJpIGVsaWdlbmRpLlwiLFwiMTcuMDYuMjAyMi5cIixcIlVyZ2VudCBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsIGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAvL0luc2VydCBkYXRhIGZyb20gb2JqZWN0IHRvIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza1BsYWNlaG9sZGVyXCIsdGFza1BsYWNlaG9sZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgcHJvdG9cIixPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFza1BsYWNlaG9sZGVyKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBwcm90b1wiLE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbmRlciB0aGUgaXRlbXMgZGF0YSB0byB0aGUgZGl2XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20odGFza1BsYWNlaG9sZGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbi8vIE1ha2UgYSByYW5kb20gbmFtZVxyXG5mdW5jdGlvbiBtYWtlTmFtZShsZW5ndGgpIHtcclxuICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgIHZhciBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcclxuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFxyXG4gY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICB9XHJcbiAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBpbnRlcmZhY2UgdG8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHBhc3MgdmFsdWUgdG8gY3JlYXRlTmV3UHJvamVjdCgpXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QgKCkge1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gcG9wdWxhdGUgRE9NIHdpdGggcHJvamVjdHNcclxuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKVxyXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gIHtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGlkZURpdi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGlkZURpdilcclxuXHJcbiAgICAgICAgbGV0IGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgYmFja0Rpdi5pZCA9IFwiYmFjay1kaXZcIlxyXG4gICAgICAgIGhpZGVEaXYuYXBwZW5kKGJhY2tEaXYpXHJcblxyXG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBOZXcgUHJvamVjdCBcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LXRleHRcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgICAgICBkaXZDb250ZW50Lmh0bWxGb3IgPSBcIm5ldy1wcm9qZWN0LWxhYmVsXCJcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJuZXctcHJvamVjdC1sYWJlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWUgXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBpbnB1dERpdi5pZCA9IFwibmV3LXByb2plY3QtaW5wdXRcIlxyXG4gICAgICAgIGlucHV0RGl2Lm5hbWUgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCJcclxuICAgICAgICBpbnB1dERpdi5taW5MZW5ndGggPSBcIjFcIlxyXG4gICAgICAgIGlucHV0RGl2LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lIFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQoaW5wdXREaXYpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJDcmVhdGVcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgIHtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFwcGVuZCBpdCB3aXRoIHRoZSBwcm92aWRlZCBuYW1lIGZyb20gYWRkTmV3UHJvamVjdCgpXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pbnB1dFwiKS52YWx1ZSkge1xyXG5cclxuICAgICAgICBsZXQgcGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIikudmFsdWVcclxuICAgICAgICBsZXQgcHJvamVjdEhvbGRlciA9IGNyZWF0ZVByb2plY3QocGFzcylcclxuXHJcbiAgICAgICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpXHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxyXG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0SG9sZGVyLm5hbWVcclxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdEhvbGRlci50aXRsZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9QYXJlbnQuYWxsUHJvamVjdHMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IHRvIHBhc3NcIixwcm9qZWN0KVxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2lkZWJhci13cmFwcGVyXCIpXHJcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3QpXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBwcm9qZWN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1vcHRpb25zLXNpZGViYXJcIilcclxuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmQocHJvamVjdE9wdGlvbnMpXHJcblxyXG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicmVuYW1lLXByb2plY3RcIilcclxuICAgICAgICBlZGl0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlbmFtZVwiXHJcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGVkaXRQcm9qZWN0KVxyXG4gICAgICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgICAgIHJlbmFtZVByb2plY3QocG9pbnRlcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgZGVsZXRlUHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuaW5uZXJUZXh0ID0gXCJEZWxldGVcIlxyXG4gICAgICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChkZWxldGVQcm9qZWN0U2lkZWJhcilcclxuICAgICAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpLmFwcGVuZENoaWxkKHByb2plY3RXcmFwcGVyKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuXHJcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdClcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RIb2xkZXIubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEhvbGRlcikpXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGlucHV0IGEgbmFtZS5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbGFiZWxcIikuYXBwZW5kQ2hpbGQoc3BhbilcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuYW1lUHJvamVjdChwb2ludGVyKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJwb2ludGVyLnNyY0VsZW1lbnQuaWRcIiwgcG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pZClcclxuXHJcbiAgICBsZXQgcHJvamVjdE5hbWVIb2xkZXIgPSBwb2ludGVyLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgbGV0IGhpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGlkZURpdi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGlkZURpdilcclxuXHJcbiAgICAgICAgbGV0IGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgYmFja0Rpdi5pZCA9IFwiYmFjay1kaXZcIlxyXG4gICAgICAgIGhpZGVEaXYuYXBwZW5kKGJhY2tEaXYpXHJcblxyXG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJSZW5hbWUgYSBQcm9qZWN0IFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY3JlYXRlLXByb2plY3QtdGV4dFwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaHRtbEZvciA9IFwibmV3LXByb2plY3QtbGFiZWxcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcIm5ldy1wcm9qZWN0LWxhYmVsXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJOZXcgTmFtZTpcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGxldCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgIGlucHV0RGl2LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dFwiXHJcbiAgICAgICAgaW5wdXREaXYubmFtZSA9IFwibmV3LXByb2plY3QtaW5wdXRcIlxyXG4gICAgICAgIGlucHV0RGl2Lm1pbkxlbmd0aCA9IFwiMVwiXHJcbiAgICAgICAgaW5wdXREaXYudmFsdWUgPSBwcm9qZWN0TmFtZUhvbGRlci5pbm5lclRleHRcclxuICAgICAgICBkaXZDb250ZW50LmFwcGVuZChpbnB1dERpdilcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjcmVhdGUtcHJvamVjdC1idXR0b25cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlJlbmFtZVwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSAge1xyXG5cclxuICAgICAgICAgICAgc3VibWl0UmVuYW1lUHJvamVjdChwcm9qZWN0TmFtZUhvbGRlcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjYW5jZWwtcHJvamVjdC1idXR0b25cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRSZW5hbWVQcm9qZWN0KG5vZGUpIHtcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IG5vZGUuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQVRDSCFcIilcclxuICAgICAgICAgICAgcHJvamVjdC50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIikudmFsdWVcclxuICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdC50aXRsZVwiLHByb2plY3QudGl0bGUpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocG9pbnRlcikge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcInBvaW50ZXIuc3JjRWxlbWVudC5pZFwiLCBwb2ludGVyLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkKVxyXG5cclxuICAgIGxldCBwcm9qZWN0TmFtZUhvbGRlciA9IHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICBsZXQgaGlkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoaWRlRGl2LmlkID0gXCJkaXYtaGlkZGVuXCJcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoaWRlRGl2KVxyXG5cclxuICAgICAgICBsZXQgYmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBiYWNrRGl2LmlkID0gXCJiYWNrLWRpdi1kZWxldGVcIlxyXG4gICAgICAgIGhpZGVEaXYuYXBwZW5kKGJhY2tEaXYpXHJcblxyXG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJBcmUgeW91IFN1cmUgWW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0P1wiXHJcbiAgICAgICAgZGl2Q29udGVudC5zdHlsZS5ncmlkQXJlYSA9IFwiMSAvIDEgLyAxIC8gM1wiXHJcbiAgICAgICAgZGl2Q29udGVudC5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiXHJcbiAgICAgICAgZGl2Q29udGVudC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjcmVhdGUtcHJvamVjdC1idXR0b25cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXHJcbiAgICAgICAgZGl2Q29udGVudC5zdHlsZS5ncmlkQXJlYSA9IFwiMiAvIDEgLyAyIC8gMVwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSAge1xyXG5cclxuICAgICAgICAgICAgc3VibWl0RGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZUhvbGRlcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjYW5jZWwtcHJvamVjdC1idXR0b25cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5zdHlsZS5ncmlkQXJlYSA9IFwiMiAvIDIgLyAyIC8gM1wiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXREZWxldGVQcm9qZWN0KG5vZGUpIHtcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IG5vZGUuaWQpIHtcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5zcGxpY2UoKHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSksMSlcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QubmFtZSlcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG59XHJcblxyXG4vLyBVcGRhdGUgdGhlIHRhc2sgcmVuZGVyZXIgYmFzZWQgb24gdGhlIHNlbGVjdGVkIFByb2plY3RzXHJcbmZ1bmN0aW9uIHVwZGF0ZVJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0Tm9kZSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCByZW5kZXJQcm9qZWN0VGFza3MgXCIscHJvamVjdE5vZGUpXHJcblxyXG4gICAgLy8gSWYgYWxyZWFkeSBpbiB0aGUgcHJvamVjdCBkb24ndCByZXJlbmRlclxyXG4gICAgLy8gaWYgKGN1cnJlbnRQcm9qZWN0ID09IHByb2plY3ROb2RlLmlkKSByZXR1cm5cclxuXHJcbiAgICAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgfVxyXG4gICAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3VycmVudFwiKVxyXG5cclxuICAgIC8vIFJlbW92ZSBiYWNrZ3JvdW5kIHNlbGVjdGlvbiBjb2xvciBmcm9tIHNpZGViYXIgaXRlbXNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcblxyXG4gICAgLy8gU2V0IGN1cnJlbnQgd29ya2luZyBwcm9qZWN0XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3ROb2RlLmlkXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW9wdGlvbnMtc2lkZWJhclwiKS5mb3JFYWNoKCBub2RlID0+IHtcclxuICAgICAgICBub2RlLnJlbW92ZSgpXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1vcHRpb25zLXNpZGViYXJcIilcclxuICAgIHByb2plY3ROb2RlLnBhcmVudEVsZW1lbnQuYXBwZW5kKHByb2plY3RPcHRpb25zKVxyXG5cclxuICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJyZW5hbWUtcHJvamVjdFwiKVxyXG4gICAgZWRpdFByb2plY3QuaW5uZXJUZXh0ID0gXCJSZW5hbWVcIlxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGVkaXRQcm9qZWN0KVxyXG4gICAgZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgICAgICByZW5hbWVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBkZWxldGVQcm9qZWN0U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKVxyXG4gICAgZGVsZXRlUHJvamVjdFNpZGViYXIuaW5uZXJUZXh0ID0gXCJEZWxldGVcIlxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGRlbGV0ZVByb2plY3RTaWRlYmFyKVxyXG4gICAgZGVsZXRlUHJvamVjdFNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgICAgICBkZWxldGVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmKGVsZW1lbnQubmFtZSA9PT0gcHJvamVjdE5vZGUuaWQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBwcm9qZWN0SG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJpbmcgZm9yRWFjaCBcIixlbGVtZW50KVxyXG4gICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZm9yRWFjaCBcIixwcm9qZWN0Tm9kZS50ZXh0Q29udGVudClcclxuXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGluYm94VmlldyA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAtLS0tIFNpZGViYXIgTG9naWMgYW5kIFJlbmRlcmluZyAtLS0tXHJcbi8vIFJlbmRlcnMgYWxsIHRhc2tzIGZyb20gZXZlcnkgcHJvamVjdCB0byB0aGUgRE9NXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaW5ib3hUYXNrc1JlbmRlcigpXHJcbn0pXHJcbmZ1bmN0aW9uIGluYm94VGFza3NSZW5kZXIoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5maXJzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IG5vVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIG5vVGFza3MuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtdGFzay13cmFwcGVyXCIpXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS5qdXN0aWZ5U2VsZiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgbm9UYXNrcy50ZXh0Q29udGVudCA9IFwiTm8gVGFza3MuXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuYXBwZW5kKG5vVGFza3MpXHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy1tb250aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIlxyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWN1cnJlbnRcIikgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuICAgIH1cclxuICAgIGluYm94VmlldyA9IHRydWU7XHJcblxyXG59XHJcblxyXG4vLyBSZW5kZXJzIG9ubHkgdG9kYXlzIHRhc2tzIHRvIHRoZSBET01cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICB0b2RheVRhc2tSZW5kZXJlcigpXHJcbn0pXHJcbmZ1bmN0aW9uIHRvZGF5VGFza1JlbmRlcmVyKCkge1xyXG5cclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHRvZGF5ID0gZGQgKyAnLicgKyBtbSArICcuJyArIHl5eXkgKyBcIi5cIjtcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50LmR1ZURhdGVcIixlbGVtZW50LmR1ZURhdGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kdWVEYXRlID09IHRvZGF5KSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmZpcnN0Q2hpbGQgPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCJcclxuICAgICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJObyBUYXNrcyBmb3IgVG9kYXkuXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuYXBwZW5kKG5vVGFza3MpXHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy1tb250aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLnRleHRDb250ZW50ID0gXCJUb2RheSdzIFRhc2tzXCJcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1jdXJyZW50XCIpICE9IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1jdXJyZW50XCIpXHJcbiAgICB9XHJcblxyXG4gICAgaW5ib3hWaWV3ID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgb25seSB0aGlzIHdlZWtzIHRhc2tzIHRvIHRoZSBET01cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgd2Vla1Rhc2tSZW5kZXJlcigpXHJcbn0pXHJcbmZ1bmN0aW9uIHdlZWtUYXNrUmVuZGVyZXIoKSB7XHJcblxyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgdG9kYXkgPSB5eXl5ICsgXCIgXCIgKyBtbSArIFwiIFwiICsgZGRcclxuXHJcbiAgICBsZXQgY3VycmVudFdlZWsgPSByZWZvcm1hdERhdGUodG9kYXksIFwieXl5eSBtbSBkZFwiKVxyXG4gICAgY3VycmVudFdlZWsgPSBnZXRXZWVrKCBuZXcgRGF0ZSh0b2RheSkpXHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXNrc1dlZWsgPSByZWZvcm1hdERhdGUoZWxlbWVudC5kdWVEYXRlLCBcInl5eXkgbW0gZGRcIilcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRZZWFyID0gdGFza3NXZWVrLnNsaWNlKDAsNClcclxuICAgICAgICAgICAgdGFza3NXZWVrID0gZ2V0V2VlayggbmV3IERhdGUodGFza3NXZWVrKSlcclxuICAgICAgICAgICAgaWYgKHRhc2tzV2VlayA9PT0gY3VycmVudFdlZWsgJiYgeXl5eSA9PSBlbGVtZW50WWVhcikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5maXJzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IG5vVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIG5vVGFza3MuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtdGFzay13cmFwcGVyXCIpXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS5qdXN0aWZ5U2VsZiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgbm9UYXNrcy50ZXh0Q29udGVudCA9IFwiTm8gVGFza3MgZm9yIHRoZSBjdXJyZW50IFdlZWsuXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuYXBwZW5kKG5vVGFza3MpXHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy1tb250aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWsncyBUYXNrc1wiXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtY3VycmVudFwiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgfVxyXG4gICAgaW5ib3hWaWV3ID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgb25seSB0aGlzIG1vbnRoJ3MgdGFza3MgdG8gdGhlIERPTVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgbW9udGhUYXNrUmVuZGVyZXIoKVxyXG59KVxyXG5mdW5jdGlvbiBtb250aFRhc2tSZW5kZXJlcigpIHtcclxuXHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGN1cnJlbnRNb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgICAvLyBwYWRTdGFydCBTZXRzIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBzdHJpbmcgd2Ugd2FudCB0byBleHRyYWN0IGFuZCBmaWxscyBpdCB3aXRoIHRlIG5leHQgc3BlY2lmaWVkIGVsZW1lbnQgZnJvbSB0aGUgbGVmdC9iZWdpbm5pbmcgb2YgdGhlIHN0cmluZyBpbiB0aGlzIGNhc2UgaXMgXCIwXCJcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZHVlRGF0ZS5zbGljZSgzLDUpID09PSBjdXJyZW50TW9udGgpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmZpcnN0Q2hpbGQgPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCJcclxuICAgICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJObyBUYXNrcyBmb3IgdGhlIGN1cnJlbnQgTW9udGguXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuYXBwZW5kKG5vVGFza3MpXHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy1tb250aFwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNpZGViYXJcIilcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLnRleHRDb250ZW50ID0gXCJUaGlzIE1vbnRoJ3MgVGFza3NcIlxyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWN1cnJlbnRcIikgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuICAgIH1cclxuICAgIGluYm94VmlldyA9IGZhbHNlO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuXHJcbi8vI3JlZ2lvbiAgLS0tLSBTb3J0IEJ5IExvZ2ljIGFuZCBSZW5kZXJpbmcgLS0tLVxyXG4vLyBTb3J0cyB0aGUgY3VycmVudCBQcm9qZWN0IHRhc2tzIGJ5IHByaW9yaXR5XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgc29ydEJ5UHJpb3JpdHkocG9pbnRlcilcclxufSlcclxuZnVuY3Rpb24gc29ydEJ5UHJpb3JpdHkocG9pbnRlcikge1xyXG5cclxuICAgIFxyXG4gICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsb3ctdG8taGlnaFwiKSkge1xyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG93LXRvLWhpZ2hcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2gtdG8tbG93XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IERlc2NlbmRpbmdcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IERlc2NlbmRpbmdcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2gtdG8tbG93XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3ctdG8taGlnaFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBBc2NlbmRpbmdcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IEFzY2VuZGluZ1wiXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdmlldy1wb3J0XCIpLmlubmVyVGV4dCA9PSBcIkFsbCBUYXNrc1wiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlnaC10by1sb3dcIikpIHtcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJVcmdlbnQgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlJlZ3VsYXIgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIkxvdyBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJMb3cgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlJlZ3VsYXIgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlVyZ2VudCBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuY2hpbGROb2Rlc1xyXG4gICAgICAgIGxldCBpdGVtTGlzdCA9IFtdO1xyXG4gICAgICAgIHRleHRXcmFwcGVyLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5wdXNoKGVsZW1lbnQuZmlyc3RDaGlsZC5pZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgICAgICBpZiAocG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZ2gtdG8tbG93XCIpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlVyZ2VudCBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJSZWd1bGFyIFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIkxvdyBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIkxvdyBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJSZWd1bGFyIFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlVyZ2VudCBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stcHJpb3JpdHlcIikuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gXCI5MDBcIlxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY2hlY2tcIikuaW5uZXJUZXh0ID0gXCJDaGVja1wiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY2hlY2tcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGNoZWNrZWQtbGFzdFwiXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgZmFydGhlci10by1jbG9zZXJcIlxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY3JlYXRpb24tZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbGFzdC1jcmVhdGVkLWZpcnN0XCJcclxufVxyXG5cclxuLy8gU29ydHMgdGhlIGN1cnJlbnQgdGFza3MgYnkgZGF0ZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHNvcnRCeURhdGUoZXZlbnQpXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeURhdGUoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgb3JkZXJlZERhdGVzID0gW107XHJcblxyXG4gICAgbGV0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmNoaWxkTm9kZXNcclxuICAgIGxldCBpdGVtTGlzdCA9IFtdO1xyXG4gICAgdGV4dFdyYXBwZXIuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaXRlbUxpc3QucHVzaChlbGVtZW50LmZpcnN0Q2hpbGQuaWQpXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG5cclxuICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkRGF0ZXMucHVzaChbZWxlbWVudC5kYXRlVmFsdWUsIGVsZW1lbnQuaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudC5kdWVEYXRlOlwiLGVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50LmRhdGVWYWx1ZTpcIixlbGVtZW50LmRhdGVWYWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBvcmRlcmVkRGF0ZXMuc29ydCgpXHJcbiAgICBjb25zb2xlLmxvZyhcIm9yZGVyZWREYXRlczpcIixvcmRlcmVkRGF0ZXMpXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VyLXRvLWZhcnRoZXJcIikpe1xyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNsb3Nlci10by1mYXJ0aGVyXCIpXHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmFydGhlci10by1jbG9zZXJcIilcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IEFzY2VuZGluZ1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogRGVzY2VuZGluZ1wiXHJcblxyXG4gICAgICAgIG9yZGVyZWREYXRlcy5yZXZlcnNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFydGhlci10by1jbG9zZXJcIilcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbG9zZXItdG8tZmFydGhlclwiKVxyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogRGVzY2VuZGluZ1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogQXNjZW5kaW5nXCJcclxuICAgIH1cclxuXHJcbiAgICBkbyB7XHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZXZlcnkodGFzayA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVyZWREYXRlcy5sZW5ndGhcIixvcmRlcmVkRGF0ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyZWREYXRlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09IG9yZGVyZWREYXRlc1swXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbVsxXVwiLCBvcmRlcmVkRGF0ZXNbMF1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKHRhc2spXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZERhdGVzLnNoaWZ0KClcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXJlZERhdGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAob3JkZXJlZERhdGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KSBcclxuICAgIH0gd2hpbGUgKG9yZGVyZWREYXRlcy5sZW5ndGggIT0gMCkgXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdWUtZGF0ZVwiKS5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjkwMFwiXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jaGVja1wiKS5pbm5lclRleHQgPSBcIkNoZWNrXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jaGVja1wiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgY2hlY2tlZC1sYXN0XCJcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtcHJpb3JpdHlcIikuaW5uZXJUZXh0ID0gXCJQcmlvcml0eVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtcHJpb3JpdHlcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGxvdy10by1oaWdoXCJcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY3JlYXRpb24tZGF0ZVwiKS5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGVcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGxhc3QtY3JlYXRlZC1maXJzdFwiXHJcblxyXG59XHJcblxyXG4vLyBTb3J0cyB0aGUgY3VycmVudCB0YXNrcyBieSBjaGVja2VkXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgc29ydEJ5Q2hlY2tlZFN0YXR1cyhwb2ludGVyKVxyXG59KVxyXG5mdW5jdGlvbiBzb3J0QnlDaGVja2VkU3RhdHVzKHBvaW50ZXIpIHtcclxuXHJcbiAgICBpZiAocG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWQtZmlyc3RcIikpIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtbGFzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkNoZWNrZWQ6IEZpcnN0XCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkNoZWNrZWQ6IExhc3RcIlxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC1sYXN0XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLWZpcnN0XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiQ2hlY2tlZDogTGFzdFwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJDaGVja2VkOiBGaXJzdFwiXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoaW5ib3hWaWV3KSB7XHJcblxyXG4gICAgICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZC1maXJzdFwiKSkge1xyXG4gICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkID09PSBcIkNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiVW5jaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiVW5jaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiQ2hlY2tlZFwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBsZXQgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuY2hpbGROb2Rlc1xyXG4gICAgICAgIGxldCBpdGVtTGlzdCA9IFtdO1xyXG4gICAgICAgIHRleHRXcmFwcGVyLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5wdXNoKGVsZW1lbnQuZmlyc3RDaGlsZC5pZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuXHJcbiAgICAgICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkLWZpcnN0XCIpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiQ2hlY2tlZFwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkID09PSBcIlVuY2hlY2tlZFwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiVW5jaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiQ2hlY2tlZFwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtcHJpb3JpdHlcIikuaW5uZXJUZXh0ID0gXCJQcmlvcml0eVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtcHJpb3JpdHlcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGxvdy10by1oaWdoXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1kYXRlXCIpLmlubmVyVGV4dCA9IFwiRHVlIERhdGVcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGZhcnRoZXItdG8tY2xvc2VyXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY3JlYXRpb24tZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbGFzdC1jcmVhdGVkLWZpcnN0XCJcclxufVxyXG5cclxuLy8gU29ydHMgdGFzayBpdGVtcyBieSBjcmVhdGlvbiBkYXRlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICBzb3J0QnlDcmVhdGlvbkRhdGUocG9pbnRlcik7XHJcblxyXG59KVxyXG5mdW5jdGlvbiBzb3J0QnlDcmVhdGlvbkRhdGUocG9pbnRlcikge1xyXG5cclxuICAgIGxldCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5jaGlsZE5vZGVzXHJcbiAgICBsZXQgaXRlbUxpc3QgPSBbXTtcclxuICAgIHRleHRXcmFwcGVyLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGl0ZW1MaXN0LnB1c2goZWxlbWVudC5maXJzdENoaWxkLmlkKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgc29ydGVkSXRlbUxpc3RCeU9iamVjdE9yZGVyID0gW107XHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PSBlbGVtZW50LmlkKSBzb3J0ZWRJdGVtTGlzdEJ5T2JqZWN0T3JkZXIucHVzaChlbGVtZW50LmlkKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGFzdC1jcmVhdGVkLWZpcnN0XCIpKSB7XHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsYXN0LWNyZWF0ZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZpcnN0LWNyZWF0ZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlOiBEZXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGU6IEFzY2VuZGluZ1wiXHJcblxyXG4gICAgICAgIHNvcnRlZEl0ZW1MaXN0QnlPYmplY3RPcmRlci5yZXZlcnNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmaXJzdC1jcmVhdGVkLWZpcnN0XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsYXN0LWNyZWF0ZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlOiBBc2NlbmRpbmdcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZTogRGVzY2VuZGluZ1wiXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaXRlbUxpc3RbMF1cIixpdGVtTGlzdFswXSlcclxuICAgIHNvcnRlZEl0ZW1MaXN0QnlPYmplY3RPcmRlci5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbG93LXRvLWhpZ2hcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgZmFydGhlci10by1jbG9zZXJcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmlubmVyVGV4dCA9IFwiQ2hlY2tcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBjaGVja2VkLWxhc3RcIlxyXG59XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vIEFkZHMgdGhlIFNvcnQgYnkgbGlzdCBvbiBjbGljayBsaXN0ZW5lclxyXG5sZXQgb3JkZXJCeU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKVxyXG5vcmRlckJ5Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIikuc3R5bGUudmlzaWJpbGl0eSA9PSBcInVuc2V0XCIpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ1bnNldFwiXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuLy8gSGlkZXMgdGhlIFNvcnQgYnkgbGlzdCBmcm9tIHRoZSBET01cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI3NvcnQtYnktdGV4dCcpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzdGFydHVwUmVuZGVyUHJvamVjdFRhc2tzLCBzdGFydHVwTGlicmFyeVNpZGViYXJSZW5kZXJlciwgYWRkTmV3UHJvamVjdCwgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzLCBhZGRUYXNrSW50ZXJmYWNlfSIsImltcG9ydCB7IHN0YXJ0dXBSZW5kZXJQcm9qZWN0VGFza3MsIHN0YXJ0dXBMaWJyYXJ5U2lkZWJhclJlbmRlcmVyLCB0YXNrc0luaXRpYWxFdmVudEFkZGVyLCBhZGROZXdQcm9qZWN0LCBhZGRUYXNrSW50ZXJmYWNlfSBmcm9tICcuL0RPTU1hbmlwdWxhdGlvbidcclxuaW1wb3J0IHtnZXREYXksIGdldFdlZWssIGlzVG9kYXl9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldC5jc3MnXHJcblxyXG4vLyBDcmVhdGUgdGhlIHBhcmVudCBvYmplY3QgbG9naWMgZm9yIG1hbmlwdWxhdGluZyBkYXRhIGZyb20gdG9Eb0NoaWxkIGNoaWxkIG9iamVjdHNcclxuY29uc3QgdG9Eb1BhcmVudCA9IHtcclxuICAgIGFsbFByb2plY3RzOiBbXSxcclxuICAgIHN1bW1hcnk6ICBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHksIHRoaXMubm90ZXMsIHRoaXMuY2hlY2tlZClcclxuICAgIH0sXHJcbn1cclxuXHJcbi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgVG8gRG8gaXRlbVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGdldE5hbWUpIHtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3QgPSBPYmplY3QuY3JlYXRlKHRvRG9QYXJlbnQpXHJcblxyXG4gICAgcHJvamVjdC50aXRsZSA9IGdldE5hbWVcclxuICAgIHByb2plY3QubmFtZSA9IGdldE5hbWUgKyBNYXRoLnJhbmRvbSgxMCk7XHJcbiAgICBwcm9qZWN0LmFsbEl0ZW1zID0gW107XHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLnB1c2gocHJvamVjdClcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdDtcclxufVxyXG5cclxuLy8gQ3JlYXRlIGEgVG8gRG8gb2JqZWN0XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9JdGVtKGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldE5vdGVzLCBnZXRDaGVja2VkLCBwcm9qZWN0KSB7XHJcblxyXG4gICAgbGV0IHRvRG9DaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvamVjdClcclxuXHJcbiAgICB0b0RvQ2hpbGQuaWQgPSBnZXRUaXRsZSArIE1hdGgucmFuZG9tKDEwKVxyXG4gICAgdG9Eb0NoaWxkLnRpdGxlID0gZ2V0VGl0bGVcclxuICAgIHRvRG9DaGlsZC5kZXNjcmlwdGlvbiA9IGdldERlc2NyaXB0aW9uID8gZ2V0RGVzY3JpcHRpb24gOiBcIlwiXHJcbiAgICB0b0RvQ2hpbGQuZHVlRGF0ZSA9IGdldER1ZURhdGUgPyBnZXREdWVEYXRlIDogXCJObyBEdWUgRGF0ZVwiXHJcbiAgICB0b0RvQ2hpbGQucHJpb3JpdHkgPSBnZXRQcmlvcml0eSA/IGdldFByaW9yaXR5IDogXCJSZWd1bGFyIFByaW9yaXR5XCJcclxuICAgIHRvRG9DaGlsZC5ub3RlcyA9IGdldE5vdGVzID8gZ2V0Tm90ZXMgOiBcIk5vIE5vdGVzXCJcclxuICAgIHRvRG9DaGlsZC5jaGVja2VkID0gXCJVbmNoZWNrZWRcIlxyXG4gICAgdG9Eb0NoaWxkLmRhdGVWYWx1ZSA9IChOdW1iZXIoZ2V0RHVlRGF0ZS5zbGljZSgwLDIpKSkgKyAoKE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDMsNSkpIC0gMSkgKiAzMCkgKyBOdW1iZXIoZ2V0RHVlRGF0ZS5zbGljZSg2LDEwKSAqIDM2NSlcclxuXHJcbiAgICBwcm9qZWN0LmFsbEl0ZW1zLnB1c2godG9Eb0NoaWxkKVxyXG5cclxuICAgIC8vIENhbiBjcmVhdGUgaXRzIG93biBmdW5jdGlvbnMgaGVyZSB0b28gbGlrZSB0aGlzXHJcbiAgICAvLyB0b0RvSXRlbS5zdW1tYXJ5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50aXRsZSwgdGhpcy5kZXNjcmlwdGlvbiwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5LCB0aGlzLm5vdGVzLCB0aGlzLmNoZWNrbGlzdClcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gdG9Eb0NoaWxkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcclxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8bG9jYWxTdG9yYWdlLmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VG9Mb2FkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2plY3RUb0xvYWQsIHRvRG9QYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9Mb2FkKVxyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5wdXNoKHByb2plY3RUb0xvYWQpXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9Mb2FkLmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGVsZW1lbnQsIHByb2plY3RUb0xvYWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy8gY2F0Y2gge1xyXG4gICAgICAgIC8vICAgICBhbGVydChcIkNhbiBub3QgYWNjZXNzIGxvY2FsIFN0b3JhZ2UuIEFsbCBkYXRhIHdpbGwgYmUgbG9zdCBvbiBwYWdlIHJlZnJlc2ggb3IgY2xvc2UuXCIpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBmaW5hbGx5IHt9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xyXG4gICAgYWxlcnQoXCJDYW4gbm90IGFjY2VzcyBsb2NhbCBTdG9yYWdlLiBBbGwgZGF0YSB3aWxsIGJlIGxvc3Qgb24gcGFnZSByZWZyZXNoIG9yIGNsb3NlLlwiKVxyXG4gIH1cclxuXHJcbmNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuXHJcblxyXG5cclxuXHJcbi8vI3JlZ2lvbiAtLS0tIERlZmF1bHRfUHJvamVjdCBUYXNrIE9iamVjdCBkYXRhIGluc2VydGlvbiAtLS0tXHJcbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4vLyBjb25zdCB0b0RvTGlzdFByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdChcIlRvIERvIExpc3QgUHJvamVjdFwiKVxyXG4vLyBjb25zdCB0ZXN0UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIpICBcclxuXHJcblxyXG5cclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJDb21wbGV0ZSBUaGUgVG8gRG8gTGlzdFwiLFwiRG8gaXQuXCIsXCIxNi4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNvbHZlIHRoZSBxdWFudHVtIHBhcmFkaWdtXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE4LjA4LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiUGljayB1cCBNb25leVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxNy4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIkZpZ3VyZSB0aGUgQWxtb25kIFByaW5jaXBsZVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxNi4wNy4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIkNvbXB1dGUgdGhlIFBpIGZpZ3VyZSBudW1iZXJcIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTMuMDkuMjAyMi5cIixcIlJlZ3VsYXIgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiQ29udGludWUgdGhlIGRpc2lsbHVzaW9uIG9mIHRoZSBkZWx1c2lvblwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIwNS4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNvbHZlIHRoZSBRdWFkcmF0aWMgTWlucGVsJ3MgRXF1YXRpb25cIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTguMDguMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJTbWFjayB0aGF0IG51bWJlciBrZXlcIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTIuMDcuMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJTb2x2ZSB0aGUgUXVhZHJhdGljIE1pbnBlbCdzIEVxdWF0aW9uXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE4LjA4LjIwMjIuXCIsXCJMb3cgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRlc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJTbWFjayB0aGF0IG51bWJlciBrZXlcIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTIuMDcuMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdGVzdFByb2plY3QpO1xyXG5cclxuXHJcblxyXG4vLyB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xyXG4gICAgXHJcbi8vICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSlcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiQUFcIilcclxuLy8gfSlcclxuXHJcblxyXG4vLyBmb3IgKGxldCBpPTA7aTxsb2NhbFN0b3JhZ2UubGVuZ3RoO2krKykge1xyXG5cclxuLy8gICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KGkpLnNsaWNlKDAsNykgPT0gXCJQcm9qZWN0XCIpIHtcclxuLy8gICAgICAgICBsZXQgcHJvamVjdFRvTG9hZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSkpXHJcbi8vICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2plY3RUb0xvYWQsIHRvRG9QYXJlbnQpXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRvTG9hZClcclxuLy8gICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLnB1c2gocHJvamVjdFRvTG9hZClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbi8vICAgICBwcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLmlkLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcclxuLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxyXG4vLyAgICAgcHJvamVjdC5hbGxJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuLy8gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXHJcbi8vICAgICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc29sZS5sb2coXCJJVEVNIFRBU0tcIixKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ29tcGxldGUgVGhlIFRvIERvIExpc3QnKSkpXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZVwiLGxvY2FsU3RvcmFnZSlcclxuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJKU09OLnBhcnNlKGl0ZW0pXCIsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKVxyXG4vLyAgICAgbGV0IGhvbGRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpXHJcbi8vICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaG9sZGVyLCB0ZXN0UHJvamVjdClcclxuLy8gICAgIHRlc3RQcm9qZWN0LmFsbEl0ZW1zLnB1c2goaG9sZGVyKVxyXG4vLyAgICAgLy8gJCgnYm9keScpLmFwcGVuZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKFwidGVzdFByb2plY3QuYWxsSXRlbXNbNF0ubmFtZVwiLHRlc3RQcm9qZWN0LmFsbEl0ZW1zWzRdKVxyXG5cclxuLy8gbGV0IG9iamVjdEZyb21TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU29sdmUgdGhlIHF1YW50dW0gcGFyYWRpZ20nKSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwib2JqZWN0RnJvbVN0b3JhZ2VcIixvYmplY3RGcm9tU3RvcmFnZS5pZClcclxuLy8gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlNvbHZlIHRoZSBxdWFudHVtIHBhcmFkaWdtXCIsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NvbHZlIHRoZSBxdWFudHVtIHBhcmFkaWdtJykpXHJcbiAgICAgICAgXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInRlc3RQcm9qZWN0LmFsbEl0ZW1zXCIsdGVzdFByb2plY3QuYWxsSXRlbXMpXHJcblxyXG4vLyBsZXQgaXRlbVRvQ2hhbmdlID0gdGVzdFByb2plY3QuYWxsSXRlbXNbMF1cclxuLy8gY29uc29sZS5sb2coXCJpdGVtVG9DaGFuZ2VcIixpdGVtVG9DaGFuZ2UpXHJcbi8vIE9iamVjdC5zZXRQcm90b3R5cGVPZihpdGVtVG9DaGFuZ2UsIHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNvbnNvbGUubG9nKFwiaXRlbVRvQ2hhbmdlXCIsaXRlbVRvQ2hhbmdlKVxyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5cclxuc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcygpXHJcbnN0YXJ0dXBMaWJyYXJ5U2lkZWJhclJlbmRlcmVyKClcclxuYWRkVGFza0ludGVyZmFjZSgpXHJcbmFkZE5ld1Byb2plY3QoKVxyXG5cclxuLy8jcmVnaW9uIC0tLS0gTGVmdG92ZXIsIHByYWN0aWNlLCB0ZXN0ZWQgY29kZSAtLS0tXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInVzZXIgcHJvdG9cIixPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcblxyXG4vLyBjb25zb2xlLmxvZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcbi8vIE9iamVjdC5zZXRQcm90b3R5cGVPZih1c2VyLCB0b0RvUGFyZW50KTtcclxuLy8gY29uc29sZS5sb2codG9Eb1BhcmVudC5pc1Byb3RvdHlwZU9mKHVzZXIpKVxyXG4vLyBjb25zb2xlLmxvZyh0eXBlb2YgdXNlcilcclxuLy8gY29uc29sZS5sb2coT2JqZWN0LmdldFByb3RvdHlwZU9mKHVzZXIpKVxyXG4vLyBjb25zb2xlLmxvZyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0b0RvUGFyZW50KS5maWx0ZXIoaXRlbSA9PiB0eXBlb2YgdG9Eb1BhcmVudFtpdGVtXSA9PT0gJ2Z1bmN0aW9uJykpXHJcblxyXG4vLyB1c2VyLnN1bW1hcnkoKVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4vLyBjb25zb2xlLmxvZyhcImRlZmF1bHRQcm9qZWN0J3MgaXRlbXM6XCIsZGVmYXVsdFByb2plY3QuYWxsSXRlbXMpXHJcbi8vIGNvbnNvbGUubG9nKFwidG9Eb1BhcmVudCdzIHByb2plY3RzOlwiLHRvRG9QYXJlbnQuYWxsUHJvamVjdHMpXHJcblxyXG4vLyB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4vLyB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4vLyB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4vLyB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbi8vIHRvZGF5ID0geXl5eSArIFwiIFwiICsgbW0gKyBcIiBcIiArIGRkXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInRvZGF5IGZvciB3ZWVrXCIsdG9kYXkpXHJcbi8vIGxldCB3ZWVrID0gZ2V0V2VlayggbmV3IERhdGUodG9kYXkpKVxyXG4vLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgd2Vla1wiLHdlZWspXHJcblxyXG4vLyB0b2RheSA9IG1tICsgJy4nICsgZGQgKyAnLicgKyB5eXl5ICsgXCIuXCI7XHJcbi8vIGNvbnNvbGUubG9nKFwiVG9kYXkncyBEYXRlXCIsdG9kYXkpO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCB7IHRvRG9QYXJlbnQsIGNyZWF0ZVRvRG9JdGVtLCBjcmVhdGVQcm9qZWN0IH1cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=