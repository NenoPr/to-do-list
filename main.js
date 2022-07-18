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
        _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( project => {
            console.log("project",project)
            project.allItems.forEach( task => {
                if (task.id == item) {
                    orderedDates.push([task.dateValue, task.id])
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

        console.log("window.localStorage.length",window.localStorage.length)
        if (window.localStorage.length == 0) {
            window.localStorage.clear()
            const toDoListProject = new createProject("To Do List Project")
            const testProject = new createProject("Test Project")  

            createToDoItem("Complete The To Do List","Do it.","16.07.2022.","Urgent Priority","notes for todo item","Checked",toDoListProject);
            createToDoItem("Solve the quantum paradigm","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Pick up Money","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","17.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Figure the Almond Principle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","16.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Compute the Pi figure number","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","13.09.2022.","Regular Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Continue the disillusion of the delusion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","05.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
            createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",testProject);
            createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",testProject);

        }
        else {
            for (let i=0;i<window.localStorage.length;i++) {

                try {
                    let projectToLoad = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)))
                console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsS0FBSyxPQUFPLHFGQUFxRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixhQUFhLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssc0JBQXNCLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVks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QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtRTtBQUNsQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxrRUFBOEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5Q0FBeUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUNBQXlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUE2QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUNBQWlDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGtFQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzF1RG9KO0FBQ25HO0FBQ3hCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUF5QjtBQUN6QixnRkFBNkI7QUFDN0IsbUVBQWdCO0FBQ2hCLGdFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDtBQUNwRDtBQUNBO0FBQ0E7Ozs7Ozs7VUNwUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3N0eWxlc2hlZXQuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0V2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9zcmMvc3R5bGVzaGVldC5jc3M/ZDc0ZCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9zcmMvRE9NTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogZm9yIEludGVybmV0IEV4cGxvcmVyLCBFZGdlICovXFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogZm9yIEZpcmVmb3ggKi9cXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyBcXHJcXG4gIH1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIGZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXFxyXFxuICB9XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbn1cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogN3ZoIDkzdmggLyAxN3Z3IDgzdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDE7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1jb250ZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3gsICN0b2RheSwgI3RoaXMtd2VlaywgI3RoaXMtbW9udGgge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3g6aG92ZXIsICN0b2RheTpob3ZlciwgI3RoaXMtd2Vlazpob3ZlciwgI3RoaXMtbW9udGg6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNpbmJveDphY3RpdmUsICN0b2RheTphY3RpdmUsICN0aGlzLXdlZWs6YWN0aXZlLCAjdGhpcy1tb250aDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI0MiwgMjUwKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNpZGViYXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6ICBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgYXV0byAvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW9wdGlvbnMtc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbmFtZS1wcm9qZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgb3JhbmdlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbmFtZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41MTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVuYW1lLXByb2plY3Q6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY2LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNjA3KTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWN1cnJlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDE1ZnIgLyAzZnIgM2ZyIDNmcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAyIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQyLCAyNTApO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4wMXJlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjZiNmI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXZpZXctcG9ydCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NvcnQtYnkge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc29ydC1ieS10ZXh0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNkcm9wZG93biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDEyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnktb3B0aW9ucyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnktb3B0aW9uczpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Qge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiAudGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIHdpZHRoOiAxN3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIGF1dG8gMTVmciAzZnIgYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGNvbHVtbi1nYXA6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIC41cmVtIC4xcmVtIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzAsIDE4MSwgMzAsIDAuNzA0KTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjdyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDEgLyAzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDEgLyA0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4xcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgcmdiKDEzMCwgMTMwLCAxMzApO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA1IC8gMSAvIDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDIzNCwgMTQyLCA0NCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAxNDIsIDQ0LCAwLjQzMyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNiAvIDEgLyA2O1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgcmdiKDI1NSwgODAsIDgwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDgwLCA4MCwgMC40ODUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHk6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjAyNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWFjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogOTkuNSU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpdi1oaWRkZW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc4MDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tZGl2IHtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgaGVpZ2h0OiAzMyU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUtYW5kLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1kYXRlLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtZGF0ZS1pbnB1dCA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLXByb2plY3QtaW5wdXQtZm9yLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1wcm9qZWN0LWlucHV0LWZvci10YXNrID4gc2VsZWN0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jc3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZS1pbnB1dC1pbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSByZWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlLWlucHV0LWludmFsaWQ6dmFsaWQge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi8qICNzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXQge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuZm9ybSA+IGxhYmVsIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoNTYsIDE1MiwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4wNXJlbSByZ2IoNTcsIDE1OSwgMjU1KTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2ID4gaW5wdXQge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxODIsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQ6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjFyZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNiYWNrLWRpdiB7XFxyXFxuICAgIGhlaWdodDogMjUlO1xcclxcbiAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNiYWNrLWRpdi1kZWxldGUge1xcclxcbiAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC10ZXh0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6ICA3MDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWxhYmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWxhYmVsID4gc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogLjJyZW07XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdC1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMsICNuZXctcHJvamVjdC1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDU2LCAxNTIsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuM3JlbSAuMXJlbSByZ2IoNTcsIDE1OSwgMjU1KTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IHRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gMyAvIDI7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5ZjAwO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMiAvIDMgLyAzO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC1idXR0b246aG92ZXIsICNjYW5jZWwtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiA3dmggOTN2aCAvIDE3dncgODN2dztcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAyNTYwcHgpIHtcXHJcXG4gICAgLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAjY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiA1dmggOTV2aCAvIDEydncgODh2dztcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0JBQXdCLEVBQUUsZ0NBQWdDO0lBQzFELHFCQUFxQixFQUFFLGdCQUFnQjtJQUN2QyxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxhQUFhLEVBQUUsa0NBQWtDO0VBQ25EOztBQUVGO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsU0FB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QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1DQUFtQztRQUNuQyxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1DQUFtQztRQUNuQyxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIGZvciBJbnRlcm5ldCBFeHBsb3JlciwgRWRnZSAqL1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIGZvciBGaXJlZm94ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgXFxyXFxuICB9XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcclxcbiAgfVxcclxcblxcclxcbioge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDd2aCA5M3ZoIC8gMTd2dyA4M3Z3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAxO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItY29udGVudHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94LCAjdG9kYXksICN0aGlzLXdlZWssICN0aGlzLW1vbnRoIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94OmhvdmVyLCAjdG9kYXk6aG92ZXIsICN0aGlzLXdlZWs6aG92ZXIsICN0aGlzLW1vbnRoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3g6YWN0aXZlLCAjdG9kYXk6YWN0aXZlLCAjdGhpcy13ZWVrOmFjdGl2ZSwgI3RoaXMtbW9udGg6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNDIsIDI1MCk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zaWRlYmFyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiAgZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIGF1dG8gLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1vcHRpb25zLXNpZGViYXIge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5yZW5hbWUtcHJvamVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIG9yYW5nZTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZW5hbWUtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTExKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbmFtZS1wcm9qZWN0OmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2NiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjYwNyk7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jdXJyZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxNWZyIC8gM2ZyIDNmciAzZnI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI0MiwgMjUwKTtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMDFyZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC12aWV3LXBvcnQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzb3J0LWJ5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDEgLyA0O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NvcnQtYnktdGV4dCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJvcGRvd24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdG9wOiAxMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ5LW9wdGlvbnMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ5LW9wdGlvbnM6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyA0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB3aWR0aDogMTdyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWF4LWhlaWdodDogMTRyZW07XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHJvdy1nYXA6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm8ge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBhdXRvIDE1ZnIgM2ZyIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAuNXJlbSAuMXJlbSByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCAxODEsIDMwLCAwLjcwNCk7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IC43cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAxIC8gMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAxIC8gNDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4xcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIHJnYigxMzAsIDEzMCwgMTMwKTtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNSAvIDEgLyA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYigyMzQsIDE0MiwgNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMTQyLCA0NCwgMC40MzMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDYgLyAxIC8gNjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIHJnYigyNTUsIDgwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4MCwgODAsIDAuNDg1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4wMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDk5LjUlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNkaXYtaGlkZGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3ODA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWRpdiB7XFxyXFxuICAgIHdpZHRoOiAzMyU7XFxyXFxuICAgIGhlaWdodDogMzMlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMzByZW07XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNkYXRlLWFuZC1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhYmVsLWRhdGUtaW5wdXQgPiBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNsYWJlbC1wcm9qZWN0LWlucHV0LWZvci10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGFiZWwtcHJvamVjdC1pbnB1dC1mb3ItdGFzayA+IHNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGhlaWdodDogMi4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4tZXJyb3ItdGFzay10aXRsZS1pbnB1dCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUtaW5wdXQtaW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZS1pbnB1dC1pbnZhbGlkOnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjc3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0IHtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufSAqL1xcclxcblxcclxcbmZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDU2LCAxNTIsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDVyZW0gcmdiKDU3LCAxNTksIDI1NSk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWRpdiA+IGlucHV0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTgyLCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4xcmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYmFjay1kaXYge1xcclxcbiAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmFjay1kaXYtZGVsZXRlIHtcXHJcXG4gICAgaGVpZ2h0OiAyNSU7XFxyXFxuICAgIHdpZHRoOiAxMjAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtdGV4dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAgNzAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1sYWJlbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1sYWJlbCA+IHNwYW4ge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0OmZvY3VzLCAjbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYig1NiwgMTUyLCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjNyZW0gLjFyZW0gcmdiKDU3LCAxNTksIDI1NSk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDMgLyAyO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWYwMDtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyAzIC8gMztcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjY2FuY2VsLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogN3ZoIDkzdmggLyAxN3Z3IDgzdnc7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogNXZoIDk1dmggLyAxMnZ3IDg4dnc7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMgezB8MXwyfDN8NHw1fDZ9IHRoZSBkYXkgb2Ygd2VlaywgMCByZXByZXNlbnRzIFN1bmRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0gezF8MnwzfDR8NXw2fDd9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHsxfDJ8M3w0fDV8Nnw3fSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhclxuICogQHJldHVybnMge051bWJlcn0gdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0V2Vla1llYXIgZnJvbSBcIi4uL2dldFdlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHsxfDJ8M3w0fDV8Nnw3fSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhclxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFdlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RvUGFyZW50LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb0RvSXRlbSB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7Z2V0RGF5LCBnZXRXZWVrLCBpc1RvZGF5fSBmcm9tICdkYXRlLWZucydcclxuXHJcbmxldCBjdXJyZW50UHJvamVjdDtcclxubGV0IGluYm94VmlldztcclxuXHJcbi8vIENyZWF0ZXMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBET00gdW5kZXIgdGhlIHRhc2tcclxuZnVuY3Rpb24gZXhwYW5kVGFza0Rlc2NyaXB0aW9uTGlzdGVuZXJzKGVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudCkge1xyXG5cclxuICAgIGxldCBhcHBlbmRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgIGlmIChhcHBlbmRFbGVtZW50LmNoaWxkTm9kZXNbMV0gPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrIGFjdGlvbiBidXR0b25zXHJcbiAgICAgICAgbGV0IHRhc2tBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRhc2tBY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFjdGlvbnNcIilcclxuICAgICAgICBhcHBlbmRFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tBY3Rpb25zKVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgRGVzY3JpcHRpb24gVGl0bGVcclxuICAgICAgICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXRpdGxlXCIpXHJcbiAgICAgICAgdGFza0Rlc2MuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIlxyXG4gICAgICAgIHRhc2tBY3Rpb25zLmFwcGVuZENoaWxkKHRhc2tEZXNjKVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgRGVzY3JpcHRpb25cclxuICAgICAgICB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICB0YXNrRGVzYy5pbm5lclRleHQgPSBkZXNjcmlwdGlvbkVsZW1lbnRcclxuICAgICAgICB0YXNrQWN0aW9ucy5hcHBlbmRDaGlsZCh0YXNrRGVzYylcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwcGVuZEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5yZW1vdmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZW5kZXJzIHRoZSB0YXNrIG9uIHRoZSBET00gYmFzZWQgb24gdGhlIHByb3ZpZGVkIHRvRG9JdGVtXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tUb0RvbSAoZWxlbWVudCkge1xyXG5cclxuICAgIC8vUmVuZGVyIHRoZSBpdGVtcyB0YXNrIGRhdGEgdG8gdGhlIGRpdlxyXG5cclxuICAgIGxldCBhcHBlbmRUaGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpXHJcbiAgICAvL0NyZWF0ZSB0aGUgdGFzayB3cmFwcGVyXHJcbiAgICBsZXQgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgIHRhc2tXcmFwcGVyLmlkID0gZWxlbWVudC5uYW1lXHJcbiAgICBhcHBlbmRUaGVUYXNrLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKVxyXG4gICAgLy9DcmVhdGUgdGFzayBpbmZvXHJcbiAgICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLWluZm9cIilcclxuICAgIHRhc2tJbmZvLmlkID0gZWxlbWVudC5pZFxyXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0luZm8pXHJcblxyXG4gICAgLy8gLS0tLSBDcmVhdGUgdGhlIHRhc2sgaW5mbyBzdHJ1Y3R1cmUgYW5kIGRhdGEgLS0tLVxyXG5cclxuICAgIC8vIENyZWF0ZSBjaGVjayB0YXNrIGJ1dHRvblxyXG4gICAgbGV0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiVW5jaGVja2VkXCIpIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2stdGFza1wiKVxyXG4gICAgZWxzZSB0YXNrQ2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtdGFza1wiKVxyXG4gICAgdGFza0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgdG9nZ2xlQ2hlY2tUYXNrKHBvaW50ZXIpXHJcbiAgICB9KVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0NoZWNrLCBlbGVtZW50LmRlc2NyaXB0aW9uKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aXRsZVxyXG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcblxyXG4gICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGV4cGFuZFRhc2tEZXNjcmlwdGlvbkxpc3RlbmVycyh0YXNrVGl0bGUsIGVsZW1lbnQuZGVzY3JpcHRpb24pXHJcbiAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgLy9DcmVhdGUgRGF0ZVxyXG4gICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpXHJcbiAgICBpZiAoZWxlbWVudC5kdWVEYXRlICE9IFwiTm8gRHVlIERhdGVcIikge1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gcmVmb3JtYXREYXRlKGVsZW1lbnQuZHVlRGF0ZSwgXCJkYXlcIilcclxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCArPSByZWZvcm1hdERhdGUoZWxlbWVudC5kdWVEYXRlLCBcImRkLm1vbnRoLnl5eXkuXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlXHJcbiAgICB9XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcclxuXHJcbiAgICAvLyBDcmVhdGUgdGFzayBwcmlvcml0eVxyXG4gICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHlcIilcclxuICAgIHRhc2tJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eVxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gXCJVcmdlbnQgUHJpb3JpdHlcIikge1xyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmJvcmRlciA9IFwiLjA1cmVtIHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5jb2xvciA9IFwicmVkXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIlxyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09IFwiUmVndWxhciBQcmlvcml0eVwiKSB7XHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuYm9yZGVyID0gXCIuMDVyZW0gc29saWQgcmdiKDEwMCwgMTAwLCAxMDApXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjQwMFwiXHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gXCJMb3cgUHJpb3JpdHlcIikge1xyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmJvcmRlciA9IFwiLjA1cmVtIHNvbGlkIHJnYig3MywgMTkwLCAwKVwiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuY29sb3IgPSBcImdyZWVuXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIlxyXG4gICAgfVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0l0ZW0pXHJcblxyXG4gICAgLy8gQ3JlYXRlIGVkaXQgdGFzayBidXR0b25cclxuICAgIGxldCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2tcIilcclxuICAgIHRhc2tFZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgIHRhc2tFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgYWRkRWRpdFRhc2tMaXN0ZW5lcnModGFza0VkaXQsIGVsZW1lbnQsIHBvaW50ZXIpXHJcbiAgICB9KVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0VkaXQpXHJcblxyXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSB0YXNrIGJ1dHRvblxyXG4gICAgbGV0IHRhc2tJRGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0lEZWwuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpXHJcbiAgICB0YXNrSURlbC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcclxuICAgIHRhc2tJRGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBkZWxldGVUYXNrKHRhc2tJRGVsKVxyXG4gICAgfSlcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tJRGVsKVxyXG59XHJcblxyXG4vLyBDcmVhdGVzIHRoZSBhZGQgYSB0YXNrcyBpbnRlcmZhY2UgYW4gcGFzc2VzIHRoZSBpbnB1dHRlZCBkYXRhIHRvIHN1Ym1pdEFkZE5ld1Rhc2soKVxyXG5mdW5jdGlvbiBhZGRUYXNrSW50ZXJmYWNlKCkge1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIilcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgIGxldCBkaXZIaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBkaXZIaWRkZW4uaWQgPSBcImRpdi1oaWRkZW5cIlxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZIaWRkZW4pXHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gICAgbGV0IGNsb3NlRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNsb3NlRWRpdC5pZCA9IFwiY2FuY2VsLWJ1dHRvblwiXHJcbiAgICBjbG9zZUVkaXQudGV4dENvbnRlbnQgPSBcIiBDYW5jZWwgXCJcclxuICAgIGNsb3NlRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlRWRpdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRWRpdClcclxuXHJcbiAgICBsZXQgYWRkNXRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYWRkNXRhc2tzLmlkID0gXCJhZGQtNS10YXNrc1wiXHJcbiAgICBhZGQ1dGFza3MudGV4dENvbnRlbnQgPSBcIiBBZGQgNSBmaWxsZXIgdGFza3MgXCJcclxuICAgIGFkZDV0YXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGFza3NJbml0aWFsRXZlbnRBZGRlcigpXHJcbiAgICB9KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGQ1dGFza3MpXHJcblxyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJ0aXRsZVwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIlxyXG4gICAgbGFiZWwuaWQgPSBcImxhYmVsLXRhc2stdGl0bGUtaW5wdXRcIlxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiXHJcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCJcclxuICAgIGlucHV0LmlkID0gXCJ0YXNrLXRpdGxlLWlucHV0XCJcclxuICAgIGlucHV0Lm1pbkxlbmd0aCA9IFwiMVwiXHJcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWVcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxldCBkaXZEYXRlQW5kUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRpdkRhdGVBbmRQcm9qZWN0LmlkID0gXCJkYXRlLWFuZC1wcm9qZWN0XCJcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwiZGF0ZVwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIlxyXG4gICAgbGFiZWwuaWQgPSBcImxhYmVsLWRhdGUtaW5wdXRcIlxyXG4gICAgZGl2RGF0ZUFuZFByb2plY3QuYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgaW5wdXQuaWQgPSBcImRhdGUtaW5wdXRcIlxyXG4gICAgaW5wdXQubmFtZSA9IFwiZGF0ZVwiXHJcbiAgICBpbnB1dC50eXBlID0gXCJkYXRlXCJcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0XCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcclxuICAgIGxhYmVsLmlkID0gXCJsYWJlbC1wcm9qZWN0LWlucHV0LWZvci10YXNrXCJcclxuICAgIGRpdkRhdGVBbmRQcm9qZWN0LmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1pbnB1dC1mb3ItdGFza1wiXHJcbiAgICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0XCJcclxuICAgIGlucHV0LnNpemUgPSBcIjFcIlxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeShlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QgPT0gZWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQubmFtZVxyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QgIT0gZWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQubmFtZVxyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RGF0ZUFuZFByb2plY3QpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJTZXQgUHJpb3JpdHk6IFwiXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGlucHV0LmlkID0gXCJwcmlvcml0eS1kaXZcIlxyXG5cclxuICAgIC8vIFJhZGlvIGNob2ljZXNcclxuICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcImxvdy1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiTG93IFByaW9yaXR5XCJcclxuICAgIGxldCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcImxvdy1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIlxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwicmVndWxhci1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiUmVndWxhciBQcmlvcml0eVwiXHJcbiAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwicmVndWxhci1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcInVyZ2VudC1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiVXJnZW50IFByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwidXJnZW50LXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VudCBQcmlvcml0eVwiXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiZGVzY3JpcHRpb25cIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgRGVzY3JpcHRpb25cIlxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCJcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNzBcIilcclxuICAgIGlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSAnT3BlbiBTYW5zJ1xyXG4gICAgaW5wdXQuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIlxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwiZm9ybS1zdWJtaXRcIlxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzdWJtaXROZXdUYXNrIChmb3JtKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIGRpdkhpZGRlbi5hcHBlbmRDaGlsZChmb3JtKVxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIFJlZm9ybWF0cyB0aGUgZGF0ZXMgYmFzZWQgb24gdGhlIGRlc2lyZWQgb3V0cHV0XHJcbmZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShpbnB1dCwgb3V0cHV0Rm9ybWF0KSB7XHJcblxyXG4gICAgaWYgKGlucHV0ID09IFwiTm8gRHVlIERhdGVcIikgcmV0dXJuIFwiTm8gRHVlIERhdGVcIlxyXG4gICAgbGV0IHllYXI7XHJcbiAgICBsZXQgbW9udGg7XHJcbiAgICBsZXQgZGF5O1xyXG5cclxuICAgIGlmIChvdXRwdXRGb3JtYXQgPT0gXCJkZC5tbS55eXl5LlwiKSB7IC8vIGlucHV0IGZvcm1hdDogeXl5eS1tbS1kZFxyXG4gICAgICAgIC8vZm9ybWF0IGRhdGUgZnJvbSBodG1sIGRhdGUgZWxlbWVudCB0byBvYmplY3QgZm9ybWF0XHJcbiAgICAgICAgeWVhciA9IGlucHV0LnNsaWNlKDAsNClcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDUsIDcpXHJcbiAgICAgICAgZGF5ID0gaW5wdXQuc3Vic3RyKC0yKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5wdXQ6IHl5eXktbW0tZGQgb3V0cHV0OlwiLGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXIgKyBcIi5cIilcclxuICAgICAgICByZXR1cm4gZGF5ICsgXCIuXCIgKyBtb250aCArIFwiLlwiICsgeWVhciArIFwiLlwiXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKG91dHB1dEZvcm1hdCA9PSBcInl5eXktbW0tZGRcIikgeyAvLyBpbnB1dCBmb3JtYXQ6IGRkLm1vbnRoLnl5eXkuXHJcbiAgICAgICAgLy9mb3JtYXQgZGF0ZSBmcm9tIE9iamVjdCBkYXRlIHRvIGh0bWwgZGF0ZSBlbGVtZW50IGZvcm1hdFxyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zdWJzdHIoLTUpXHJcbiAgICAgICAgeWVhciA9IHllYXIuc2xpY2UoMCw0KVxyXG4gICAgICAgIG1vbnRoID0gaW5wdXQuc2xpY2UoMywgNSlcclxuICAgICAgICBkYXkgPSBpbnB1dC5zbGljZSgwLCAyKVxyXG4gICAgICAgIGlucHV0ID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheVxyXG4gICAgICAgIHJldHVybiAoaW5wdXQpXHJcblxyXG4gICAgfSBlbHNlIGlmIChvdXRwdXRGb3JtYXQgPT0gXCJ5eXl5IG1tIGRkXCIpIHsgLy8gaW5wdXQgZm9ybWF0OiBkZC5tb250aC55eXl5LlxyXG4gICAgICAgIC8vZm9ybWF0IGRhdGUgZnJvbSBPYmplY3QgZGF0ZSBiZSBwYXJzZWQgZm9yIGRhdGUtZm4gbW9kdWxlIHRvIGdldCB0aGUgd2Vla1xyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zdWJzdHIoLTUpXHJcbiAgICAgICAgeWVhciA9IHllYXIuc2xpY2UoMCw0KVxyXG4gICAgICAgIG1vbnRoID0gaW5wdXQuc2xpY2UoMywgNSlcclxuICAgICAgICBkYXkgPSBpbnB1dC5zbGljZSgwLCAyKVxyXG4gICAgICAgIGlucHV0ID0geWVhciArIFwiIFwiICsgbW9udGggKyBcIiBcIiArIGRheVxyXG4gICAgICAgIHJldHVybiAoaW5wdXQpXHJcblxyXG4gICAgfSBlbHNlIGlmIChvdXRwdXRGb3JtYXQgPT0gXCJkZC5tb250aC55eXl5LlwiKSB7IC8vIGlucHV0IGZvcm1hdCBkZC5tbS55eXl5LlxyXG4gICAgICAgIC8vIGZvcm1hdCBkYXRlIGZyb20gT2JqZWN0IGRhdGUgdG8gcmVuZGVyIGZvcm1hdCBmb3IgRE9NXHJcbiAgICAgICAgZGF5ID0gaW5wdXQuc2xpY2UoMCwgMilcclxuICAgICAgICB5ZWFyID0gaW5wdXQuc3Vic3RyKC01KVxyXG4gICAgICAgIHllYXIgPSB5ZWFyLnNsaWNlKDAsNClcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDMsIDUpXHJcbiAgICAgICAgaWYgKG1vbnRoID09IFwiMDFcIikgbW9udGggPSBcIkphbnVhcnlcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDJcIikgbW9udGggPSBcIkZlYnJ1YXJ5XCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjAzXCIpIG1vbnRoID0gXCJNYXJjaFwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwNFwiKSBtb250aCA9IFwiQXByaWxcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDVcIikgbW9udGggPSBcIk1heVwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwNlwiKSBtb250aCA9IFwiSnVuZVwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwN1wiKSBtb250aCA9IFwiSnVseVwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwOFwiKSBtb250aCA9IFwiQXVndXN0XCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA5XCIpIG1vbnRoID0gXCJTZXB0ZW1iZXJcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMTBcIikgbW9udGggPSBcIk9jdG9iZXJcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMTFcIikgbW9udGggPSBcIk5vdmVtYmVyXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjEyXCIpIG1vbnRoID0gXCJEZWNlbWJlclwiXHJcbiAgICAgICAgLy8jcmVnaW9uIC0tLS0gbW0gdG8gbW9udGggZm9ybWF0dGVyXHJcbiAgICAgICAgLy8gaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJKYW5cIikgaW5wdXQucmVwbGFjZShcIkphbnVhcnlcIiwgXCIwMVwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJGZWJcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiRmVicnVhcnlcIiwgXCIwMlwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJNYXJcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiTWFyY2hcIiwgXCIwM1wiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJBcHJcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiQXByaWxcIiwgXCIwNFwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJNYXlcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiTWF5XCIsIFwiMDVcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiSnVuXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkp1bmVcIiwgXCIwNlwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJKdWxcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiSnVseVwiLCBcIjA3XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkF1Z1wiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJBdWd1c3RcIiwgXCIwOFwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJTZXBcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiU2VwdGVtYmVyXCIsIFwiMDlcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiT2N0XCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk9jdG9iZXJcIiwgXCIxMFwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJOb3ZcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiTm92ZW1iZXJcIiwgXCIxMVwiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJEZWNcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiRGVjZW1iZXJcIiwgXCIxMlwiKVxyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICByZXR1cm4gZGF5ICsgXCIuXCIgKyBtb250aCArIFwiLlwiICsgeWVhciArIFwiLlwiXHJcblxyXG4gICAgfSBlbHNlIGlmIChvdXRwdXRGb3JtYXQgPSBcImRheVwiKSB7IC8vIGlucHV0IGZvcm1hdCBkZC5tbS55eXl5LlxyXG4gICAgICAgIC8vIGZvcm1hdCBkYXRlIGZyb20gT2JqZWN0IGRhdGUgdG8gcmVuZGVyIGRheSB0byB0aGUgRE9NIHdpdGggZGF0ZS1mbnMgbW9kdWxlXHJcbiAgICAgICAgeWVhciA9IGlucHV0LnN1YnN0cigtNSlcclxuICAgICAgICB5ZWFyID0geWVhci5zbGljZSgwLDQpXHJcbiAgICAgICAgbW9udGggPSBpbnB1dC5zbGljZSgzLCA1KVxyXG4gICAgICAgIGRheSA9IGlucHV0LnNsaWNlKDAsIDIpXHJcblxyXG4gICAgICAgIGlucHV0ID0geWVhciArIFwiIFwiICsgbW9udGggKyBcIiBcIiArIGRheVxyXG4gICAgICAgIGlucHV0ID0gZ2V0RGF5KG5ldyBEYXRlKGlucHV0KSlcclxuXHJcbiAgICAgICAgaWYgKGlucHV0ID09IFwiMFwiKSBpbnB1dCA9IFwiU3VuZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiMVwiKSBpbnB1dCA9IFwiTW9uZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiMlwiKSBpbnB1dCA9IFwiVGh1cnNkYXksIFwiXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgPT0gXCIzXCIpIGlucHV0ID0gXCJXZWRuZXNkYXksIFwiXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgPT0gXCI0XCIpIGlucHV0ID0gXCJUdWVzZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiNVwiKSBpbnB1dCA9IFwiRnJpZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiNlwiKSBpbnB1dCA9IFwiU2F0dXJkYXksIFwiXHJcbiAgICAgICAgcmV0dXJuIChpbnB1dClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgdGhlIGVkaXQgYSB0YXNrIGludGVyZmFjZSBvbiB0aGUgcHJvdmlkZWQgZWxlbWVudFxyXG5mdW5jdGlvbiBhZGRFZGl0VGFza0xpc3RlbmVycyh0YXNrSXRlbSwgZWxlbWVudCwgcG9pbnRlcikge1xyXG5cclxuICAgIGxldCBkaXZIaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBkaXZIaWRkZW4uaWQgPSBcImRpdi1oaWRkZW5cIlxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZIaWRkZW4pXHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gICAgbGV0IGNsb3NlRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNsb3NlRWRpdC5pZCA9IFwiY2FuY2VsLWJ1dHRvblwiXHJcbiAgICBjbG9zZUVkaXQudGV4dENvbnRlbnQgPSBcIiBDYW5jZWwgXCJcclxuICAgIGNsb3NlRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlRWRpdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRWRpdClcclxuXHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcInRpdGxlXCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFRpdGxlXCJcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgaW5wdXQubmFtZSA9IFwidGl0bGVcIlxyXG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiXHJcbiAgICBpbnB1dC52YWx1ZSA9IGVsZW1lbnQudGl0bGVcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxldCBkaXZEYXRlQW5kUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRpdkRhdGVBbmRQcm9qZWN0LmlkID0gXCJkYXRlLWFuZC1wcm9qZWN0XCJcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwiZGF0ZVwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIlxyXG4gICAgbGFiZWwuaWQgPSBcImxhYmVsLWRhdGUtaW5wdXRcIlxyXG4gICAgZGl2RGF0ZUFuZFByb2plY3QuYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgaW5wdXQuaWQgPSBcImRhdGUtaW5wdXRcIlxyXG4gICAgaW5wdXQubmFtZSA9IFwiZGF0ZVwiXHJcbiAgICBpbnB1dC50eXBlID0gXCJkYXRlXCJcclxuICAgIGlucHV0LnZhbHVlID0gcmVmb3JtYXREYXRlKGVsZW1lbnQuZHVlRGF0ZSxcInl5eXktbW0tZGRcIilcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0XCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcclxuICAgIGxhYmVsLmlkID0gXCJsYWJlbC1wcm9qZWN0LWlucHV0LWZvci10YXNrXCJcclxuICAgIGRpdkRhdGVBbmRQcm9qZWN0LmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1pbnB1dC1mb3ItdGFza1wiXHJcbiAgICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0XCJcclxuICAgIGlucHV0LnNpemUgPSBcIjFcIlxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeShlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QgPT0gZWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQubmFtZVxyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QgIT0gZWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQubmFtZVxyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RGF0ZUFuZFByb2plY3QpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDaGFuZ2UgUHJpb3JpdHk6IFwiXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGlucHV0LmlkID0gXCJwcmlvcml0eS1kaXZcIlxyXG5cclxuICAgIC8vIFJhZGlvIGNob2ljZXNcclxuICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcImxvdy1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiTG93IFByaW9yaXR5XCJcclxuICAgIGxldCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcImxvdy1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIlxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gcmFkaW8udmFsdWUpIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJyZWd1bGFyLXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwicmVndWxhci1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcclxuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09IHJhZGlvLnZhbHVlKSByYWRpby5jaGVja2VkID0gdHJ1ZVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwidXJnZW50LXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJVcmdlbnQgUHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJ1cmdlbnQtcHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW50IFByaW9yaXR5XCJcclxuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09IHJhZGlvLnZhbHVlKSByYWRpby5jaGVja2VkID0gdHJ1ZVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImRlc2NyaXB0aW9uXCIpXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBEZXNjcmlwdGlvblwiXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxyXG4gICAgaW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIlxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIilcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCI3MFwiKVxyXG4gICAgaW5wdXQuc3R5bGUuZm9udEZhbWlseSA9ICdPcGVuIFNhbnMnXHJcbiAgICBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiXHJcbiAgICBpbnB1dC52YWx1ZSA9IGVsZW1lbnQuZGVzY3JpcHRpb25cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcImZvcm0tc3VibWl0XCJcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcclxuICAgIC8vIC0tLS0gc2V0IHRoZSB0YXNrSXRlbSB0byBwYXJlbnQgcGFyZW50IGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IGlkIGFuZCBwYXNzIGl0XHJcbiAgICB0YXNrSXRlbSA9IHRhc2tJdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzdWJtaXRUYXNrQ2hhbmdlcyhmb3JtLCBlbGVtZW50LCBwb2ludGVyKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIGRpdkhpZGRlbi5hcHBlbmRDaGlsZChmb3JtKVxyXG59XHJcblxyXG4vLyBUb2dnbGVzIGNoZWNrIHRhc2sgc3RhdGVcclxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2tUYXNrKHBvaW50ZXIpIHtcclxuXHJcbiAgICBsZXQgaXRlbUlkID0gcG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcclxuICAgIGNvbnNvbGUubG9nKFwiaXRlbUlkOlwiLGl0ZW1JZClcclxuICAgIGNvbnNvbGUubG9nKClcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJ0b0RvUGFyZW50LmFsbFByb2plY3RzXCIsdG9Eb1BhcmVudC5hbGxQcm9qZWN0cylcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbS5pZFwiLGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkID09IFwiVW5jaGVja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBcIkNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2stdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC10YXNrXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hlY2tlZCA9PSBcIkNoZWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IFwiVW5jaGVja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWQtdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5pZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudC5uYW1lXCIsZWxlbWVudC5uYW1lKVxyXG4gICAgfSlcclxuXHJcbn0gXHJcblxyXG4vLyBEZWxldGUgY3VycmVudCB0YXNrXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0RlbCkge1xyXG5cclxuICAgIGxldCBpdGVtSWQgPSB0YXNrRGVsLnBhcmVudEVsZW1lbnQuaWRcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KHByb2plY3QgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgcHJvamVjdC5hbGxJdGVtcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBpdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuc3BsaWNlKGNvdW50ZXIsMSlcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrK1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgdGFza0RlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShlbGVtZW50UHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShlbGVtZW50UHJvamVjdCkpXHJcblxyXG5cclxufVxyXG5cclxuLy8gQ2hhbmdlcyB0aGUgb2JqZWN0cyBkYXRhIHRvIHRoZSBwcm92aWRlZCBvbmVzIGZyb20gYWRkVGFza0ludGVyZmFjZSgpXHJcbmZ1bmN0aW9uIHN1Ym1pdE5ld1Rhc2soZm9ybSkge1xyXG5cclxuICAgIGlmICggZm9ybS5lbGVtZW50c1swXS52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlLWlucHV0XCIpXHJcbiAgICAgICAgbGV0IHRhc2tMYWJlbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC10YXNrLXRpdGxlLWlucHV0XCIpXHJcblxyXG4gICAgICAgIHRhc2tUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlLWlucHV0LWludmFsaWRcIilcclxuXHJcbiAgICAgICAgbGV0IHNwYW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBzcGFuSW5mby5pZCA9IFwic3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0XCJcclxuICAgICAgICBzcGFuSW5mby50ZXh0Q29udGVudCA9IFwiKlBsZWFzZSBpbnB1dCBhIHRpdGxlXCJcclxuICAgICAgICB0YXNrTGFiZWxUaXRsZS5hcHBlbmRDaGlsZChzcGFuSW5mbylcclxuICAgICAgICByZXR1cm5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5lbGVtZW50c1syXS52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IHRhc2tMYWJlbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC10YXNrLXRpdGxlLWlucHV0XCIpXHJcbiAgICAgICAgbGV0IHNwYW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBzcGFuSW5mby5pZCA9IFwic3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0XCJcclxuICAgICAgICBzcGFuSW5mby50ZXh0Q29udGVudCA9IFwiKlBsZWFzZSBDcmVhdGUgYSBQcm9qZWN0IEZpcnN0XCJcclxuICAgICAgICB0YXNrTGFiZWxUaXRsZS5hcHBlbmRDaGlsZChzcGFuSW5mbylcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImZvcm0uZWxlbWVudHNcIixmb3JtLmVsZW1lbnRzKVxyXG5cclxuICAgIGxldCBlbGVtZW50UHJpb3JpdHk7XHJcbiAgICBpZiAoZm9ybS5lbGVtZW50c1szXS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50UHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzNdLnZhbHVlXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uZWxlbWVudHNbNF0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudFByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1s0XS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzVdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnRQcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbNV0udmFsdWVcclxuICAgIH1cclxuICAgIGxldCBlbGVtZW50VGl0bGUgPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudER1ZURhdGUgPSBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudFByb2plY3QgPSBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlXHJcbiAgICBsZXQgZWxlbWVudERlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1s2XS52YWx1ZVxyXG4gICAgbGV0IGVsZW1lbnROb3Rlc1xyXG4gICAgbGV0IGVsZW1lbnRDaGVja2VkXHJcbiAgICBcclxuICAgIGlmIChlbGVtZW50RHVlRGF0ZS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgZWxlbWVudER1ZURhdGUgPSByZWZvcm1hdERhdGUoZWxlbWVudER1ZURhdGUsIFwiZGQubW0ueXl5eS5cIilcclxuICAgIH0gZWxzZSBlbGVtZW50RHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIlxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gZWxlbWVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudFByb2plY3QgPSBlbGVtZW50XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFwicHJvamVjdFRvUGFzc1wiLGVsZW1lbnRQcm9qZWN0KVxyXG5cclxuICAgIGlmIChlbGVtZW50UHJvamVjdCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS10YXNrLXdyYXBwZXJcIilcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCJcclxuICAgICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBQcm9qZWN0IEZpcnN0LlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmFwcGVuZChub1Rhc2tzKVxyXG4gICAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZWxlbWVudCA9IGNyZWF0ZVRvRG9JdGVtKFxyXG4gICAgICAgIGVsZW1lbnRUaXRsZSwgXHJcbiAgICAgICAgZWxlbWVudERlc2NyaXB0aW9uLCBcclxuICAgICAgICBlbGVtZW50RHVlRGF0ZSxcclxuICAgICAgICBlbGVtZW50UHJpb3JpdHksXHJcbiAgICAgICAgZWxlbWVudE5vdGVzLFxyXG4gICAgICAgIGVsZW1lbnRDaGVja2VkLFxyXG4gICAgICAgIGVsZW1lbnRQcm9qZWN0KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGF0ZVZhbHVlXCIsZWxlbWVudC5kYXRlVmFsdWUpXHJcbiAgICBmb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oZWxlbWVudFByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudFByb2plY3QpKVxyXG4gICAgXHJcbiAgICBpZiAoZWxlbWVudFByb2plY3QudGl0bGUgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS5pbm5lclRleHQpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICAgICAgZWxlbWVudFByb2plY3QuYWxsSXRlbXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENoYW5nZXMgdGhlIG9iamVjdHMgZGF0YSB0byB0aGUgcHJvdmlkZWQgYWRkRWRpdFRhc2tMaXN0ZW5lcnMoKVxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrQ2hhbmdlcyhmb3JtLCBlbGVtZW50LCBwb2ludGVyKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coZm9ybS5lbGVtZW50cylcclxuICAgIFxyXG4gICAgZWxlbWVudC50aXRsZSA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWVcclxuICAgIGxldCBlbGVtZW50RHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbMV0udmFsdWVcclxuICAgIGxldCBlbGVtZW50UHJvamVjdCA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWVcclxuXHJcbiAgICAvL2Zvcm1hdCBkYXRlXHJcbiAgICBpZiAoZWxlbWVudER1ZURhdGUubGVuZ3RoID09IDEwKSB7XHJcbiAgICAgICAgZWxlbWVudER1ZURhdGUgPSByZWZvcm1hdERhdGUoZWxlbWVudER1ZURhdGUsIFwiZGQubW0ueXl5eS5cIilcclxuICAgIH0gZWxzZSBlbGVtZW50RHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIlxyXG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50RHVlRGF0ZVwiLGVsZW1lbnREdWVEYXRlKVxyXG4gICAgZWxlbWVudC5kdWVEYXRlID0gZWxlbWVudER1ZURhdGVcclxuICAgIFxyXG4gICAgaWYgKGZvcm0uZWxlbWVudHNbM10uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudC5wcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbM10udmFsdWVcclxuICAgIH0gZWxzZSBpZiAoZm9ybS5lbGVtZW50c1s0XS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50LnByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1s0XS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzVdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnQucHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzVdLnZhbHVlXHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1s2XS52YWx1ZVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiUE9JTlRFUlJSUlJSUlwiLHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXHJcbiAgICBsZXQgQ3VycmVudFByb2plY3RJRCA9IHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcclxuXHJcbiAgICBsZXQgY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzaztcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBDdXJyZW50UHJvamVjdElEKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2sgPSBlbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRhc2tJdGVtLm5hbWVcIixDdXJyZW50UHJvamVjdElEKVxyXG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50UHJvamVjdFwiLGVsZW1lbnRQcm9qZWN0KVxyXG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrXCIsY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzaylcclxuICAgIFxyXG4gICAgaWYgKEN1cnJlbnRQcm9qZWN0SUQgIT0gY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5pZCkge1xyXG5cclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3RUb1Bhc3M7XHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gZWxlbWVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RUb1Bhc3MgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdQcm9qZWN0VG9QYXNzXCIsbmV3UHJvamVjdFRvUGFzcylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdC5uYW1lIFwiLGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2spXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLmV2ZXJ5KCB0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5pZCA9PSBlbGVtZW50LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVSRUVFXCIscHJvamVjdC5hbGxJdGVtc1tjb3VudGVyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIRVJFRUVcIix0YXNrLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLnNwbGljZSgocHJvamVjdC5hbGxJdGVtcy5pbmRleE9mKHRhc2spKSwxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0VG9QYXNzLmFsbEl0ZW1zLnB1c2godGFzaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRhc2ssIG5ld1Byb2plY3RUb1Bhc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVSRUVFXCIscHJvamVjdC5hbGxJdGVtc1tjb3VudGVyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdFRvUGFzcy5uYW1lLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0VG9QYXNzKSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFdvcmtpbmdQcm9qZWN0Rm9yVGhlVGFzay5uYW1lLCBKU09OLnN0cmluZ2lmeShjdXJyZW50V29ya2luZ1Byb2plY3RGb3JUaGVUYXNrKSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgICAgIGN1cnJlbnRXb3JraW5nUHJvamVjdEZvclRoZVRhc2suYWxsSXRlbXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhc3NJbnRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKTtcclxuICAgIC8vIHBhc3NpbmcgemVybyBiZWNhdXNlIHRoZSBlbGVtZW50IHBhc3MgdGhlIGN1cnJlbnQgcHJvamVjdCBpZFxyXG4gICAgLy8gcHJvYmFibHkgd29udCB3b3JrIHdoZW4gdXBkYXRlZCB0byBob3VzZSBpbmJveCB0YXNrc1xyXG4gICAgLy8gdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHRhc2tJdGVtKVxyXG4gICAgZm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgZGVmYXVsdCBwcm9qZWN0IHRhc2tzIG9uIHRoZSBET01cclxuZnVuY3Rpb24gc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcygpIHtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmZpcnN0Q2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RDaGlsZCBOdWxsXCIpXHJcbiAgICAgICAgaWYgKHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0uYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbmRlciB0aGUgaXRlbXMgZGF0YSB0byB0aGUgZGl2XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFTkRFUkQgRUxFTUVOVFwiLCBlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodG9Eb1BhcmVudC5hbGxQcm9qZWN0c1swXS50aXRsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikudGV4dENvbnRlbnQgPSB0b0RvUGFyZW50LmFsbFByb2plY3RzWzBdLnRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2gge31cclxuICAgIH1cclxufVxyXG5cclxuLy8gUmVuZGVycyB0aGUgY3VycmVudCBsaWJyYXJpZXMgdG8gdGhlIHByb2plY3RzIG9uIHRoZSBzaWRlYmFyIGluIHRoZSBET01cclxuZnVuY3Rpb24gc3RhcnR1cExpYnJhcnlTaWRlYmFyUmVuZGVyZXIoKSB7XHJcblxyXG4gICAgaWYgKHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VG9BcHBlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgICAgIHByb2plY3RUb0FwcGVuZC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcclxuICAgICAgICAgICAgcHJvamVjdFRvQXBwZW5kLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXHJcbiAgICAgICAgICAgIHByb2plY3RUb0FwcGVuZC5pZCA9IGVsZW1lbnQubmFtZVxyXG4gICAgICAgICAgICBwcm9qZWN0VG9BcHBlbmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0VG9BcHBlbmQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFByb2plY3RcIixwcm9qZWN0VG9BcHBlbmQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFByb2plY3RcIixjdXJyZW50UHJvamVjdClcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2lkZWJhci13cmFwcGVyXCIpXHJcbiAgICAgICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0VG9BcHBlbmQpXHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgICAgIHByb2plY3RPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW9wdGlvbnMtc2lkZWJhclwiKVxyXG4gICAgICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmQocHJvamVjdE9wdGlvbnMpXHJcblxyXG4gICAgICAgICAgICBsZXQgZWRpdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJyZW5hbWUtcHJvamVjdFwiKVxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlbmFtZVwiXHJcbiAgICAgICAgICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChlZGl0UHJvamVjdClcclxuICAgICAgICAgICAgZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlbmFtZVByb2plY3QocG9pbnRlcilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWxldGVQcm9qZWN0U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmlubmVyVGV4dCA9IFwiRGVsZXRlXCJcclxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGRlbGV0ZVByb2plY3RTaWRlYmFyKVxyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdChwb2ludGVyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpLmFwcGVuZENoaWxkKHByb2plY3RXcmFwcGVyKVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRvRG9QYXJlbnQuYWxsUHJvamVjdHNbMF0uaWRcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpLm5leHRFbGVtZW50U2libGluZy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9ucy1zaWRlYmFyXCIpLmZvckVhY2goIG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuLy8gUmVuZGVycyBFdmVudHMgZnJvbSB0aGUgcHJvamVjdCB0byB0aGUgRE9NXHJcbmZ1bmN0aW9uIHRhc2tzSW5pdGlhbEV2ZW50QWRkZXIoKSB7XHJcblxyXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIHByb2plY3Qgb2JqZWN0IHVudGlsIGl0cyBmaXJzdCBlbGVtZW50IG5hbWUgbWF0Y2hlcyB0aGUgb25lIG9uIHRoZSBET01cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudFwiLGVsZW1lbnQuYWxsSXRlbXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvamVjdFwiLGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudC5uYW1lXCIsZWxlbWVudC5uYW1lKVxyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gY3VycmVudFByb2plY3QpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPDU7aSsrKXtcclxuICAgICAgICAgICAgICAgIC8vSW5zZXJ0IGRhdGEgZnJvbSBvYmplY3QgdG8gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50Lm5hbWVcIixlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB0YXNrIG9iamVjdCBhbmQgc3VwcGx5IGl0IHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tQbGFjZWhvbGRlciA9IGNyZWF0ZVRvRG9JdGVtKFwiUGljayB1cCBMYXVuZHJ5XCIsXCJJIG5lZWQgdG8gcGljayB1cCBteSBMYXVuZHJ5IGZyb20gdGhlIHdhc2hpbmcgbWFjaGluZSBuZXh0IGlzIHNvbWUgbG9yZW0gaXBzdW06IExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBleHBlZGl0YSBzb2x1dGEgdm9sdXB0YXR1bSBhbGlxdWFtIGV4Y2VwdHVyaSBlbGlnZW5kaS5cIixcIjE3LjA2LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLCBlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLy9JbnNlcnQgZGF0YSBmcm9tIG9iamVjdCB0byBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tQbGFjZWhvbGRlclwiLHRhc2tQbGFjZWhvbGRlcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHByb3RvXCIsT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhc2tQbGFjZWhvbGRlcikpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgcHJvdG9cIixPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW5kZXIgdGhlIGl0ZW1zIGRhdGEgdG8gdGhlIGRpdlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKHRhc2tQbGFjZWhvbGRlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vLyBNYWtlIGEgcmFuZG9tIG5hbWVcclxuZnVuY3Rpb24gbWFrZU5hbWUobGVuZ3RoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBcclxuIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuICAgfVxyXG4gICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYW4gaW50ZXJmYWNlIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBwYXNzIHZhbHVlIHRvIGNyZWF0ZU5ld1Byb2plY3QoKVxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0ICgpIHtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHBvcHVsYXRlIERPTSB3aXRoIHByb2plY3RzXHJcbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIilcclxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+ICB7XHJcblxyXG4gICAgICAgIGxldCBoaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGhpZGVEaXYuaWQgPSBcImRpdi1oaWRkZW5cIlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhpZGVEaXYpXHJcblxyXG4gICAgICAgIGxldCBiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGJhY2tEaXYuaWQgPSBcImJhY2stZGl2XCJcclxuICAgICAgICBoaWRlRGl2LmFwcGVuZChiYWNrRGl2KVxyXG5cclxuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgTmV3IFByb2plY3QgXCJcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjcmVhdGUtcHJvamVjdC10ZXh0XCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5odG1sRm9yID0gXCJuZXctcHJvamVjdC1sYWJlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwibmV3LXByb2plY3QtbGFiZWxcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIk5hbWU6XCJcclxuICAgICAgICBkaXZDb250ZW50LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lIFwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgaW5wdXREaXYuaWQgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCJcclxuICAgICAgICBpbnB1dERpdi5uYW1lID0gXCJuZXctcHJvamVjdC1pbnB1dFwiXHJcbiAgICAgICAgaW5wdXREaXYubWluTGVuZ3RoID0gXCIxXCJcclxuICAgICAgICBpbnB1dERpdi5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgTmFtZSBcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKGlucHV0RGl2KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpICB7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjYW5jZWwtcHJvamVjdC1idXR0b25cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBhcHBlbmQgaXQgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZSBmcm9tIGFkZE5ld1Byb2plY3QoKVxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIikudmFsdWUpIHtcclxuXHJcbiAgICAgICAgbGV0IHBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWlucHV0XCIpLnZhbHVlXHJcbiAgICAgICAgbGV0IHByb2plY3RIb2xkZXIgPSBjcmVhdGVQcm9qZWN0KHBhc3MpXHJcblxyXG4gICAgICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKVxyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcclxuICAgICAgICBwcm9qZWN0LmlkID0gcHJvamVjdEhvbGRlci5uYW1lXHJcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RIb2xkZXIudGl0bGVcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0RvUGFyZW50LmFsbFByb2plY3RzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdCB0byBwYXNzXCIscHJvamVjdClcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHByb2plY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNpZGViYXItd3JhcHBlclwiKVxyXG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0KVxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtb3B0aW9ucy1zaWRlYmFyXCIpXHJcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3RPcHRpb25zKVxyXG5cclxuICAgICAgICBsZXQgZWRpdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInJlbmFtZS1wcm9qZWN0XCIpXHJcbiAgICAgICAgZWRpdFByb2plY3QuaW5uZXJUZXh0ID0gXCJSZW5hbWVcIlxyXG4gICAgICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChlZGl0UHJvamVjdClcclxuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24ocG9pbnRlcikge1xyXG4gICAgICAgICAgICByZW5hbWVQcm9qZWN0KHBvaW50ZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKVxyXG4gICAgICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmlubmVyVGV4dCA9IFwiRGVsZXRlXCJcclxuICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmQoZGVsZXRlUHJvamVjdFNpZGViYXIpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdFNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChwb2ludGVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKS5hcHBlbmRDaGlsZChwcm9qZWN0V3JhcHBlcilcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QpXHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0SG9sZGVyLm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RIb2xkZXIpKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlBsZWFzZSBpbnB1dCBhIG5hbWUuXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWxhYmVsXCIpLmFwcGVuZENoaWxkKHNwYW4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QocG9pbnRlcikge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicG9pbnRlci5zcmNFbGVtZW50LmlkXCIsIHBvaW50ZXIuc3JjRWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQpXHJcblxyXG4gICAgbGV0IHByb2plY3ROYW1lSG9sZGVyID0gcG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xyXG5cclxuICAgIGxldCBoaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGhpZGVEaXYuaWQgPSBcImRpdi1oaWRkZW5cIlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhpZGVEaXYpXHJcblxyXG4gICAgICAgIGxldCBiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGJhY2tEaXYuaWQgPSBcImJhY2stZGl2XCJcclxuICAgICAgICBoaWRlRGl2LmFwcGVuZChiYWNrRGl2KVxyXG5cclxuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiUmVuYW1lIGEgUHJvamVjdCBcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LXRleHRcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgICAgICBkaXZDb250ZW50Lmh0bWxGb3IgPSBcIm5ldy1wcm9qZWN0LWxhYmVsXCJcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJuZXctcHJvamVjdC1sYWJlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiTmV3IE5hbWU6XCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBpbnB1dERpdi5pZCA9IFwibmV3LXByb2plY3QtaW5wdXRcIlxyXG4gICAgICAgIGlucHV0RGl2Lm5hbWUgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCJcclxuICAgICAgICBpbnB1dERpdi5taW5MZW5ndGggPSBcIjFcIlxyXG4gICAgICAgIGlucHV0RGl2LnZhbHVlID0gcHJvamVjdE5hbWVIb2xkZXIuaW5uZXJUZXh0XHJcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQoaW5wdXREaXYpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJSZW5hbWVcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgIHtcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdFJlbmFtZVByb2plY3QocHJvamVjdE5hbWVIb2xkZXIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY2FuY2VsLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UmVuYW1lUHJvamVjdChub2RlKSB7XHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBub2RlLmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTUFUQ0ghXCIpXHJcbiAgICAgICAgICAgIHByb2plY3QudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWlucHV0XCIpLnZhbHVlXHJcbiAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3QudGl0bGVcIixwcm9qZWN0LnRpdGxlKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpLnJlbW92ZSgpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHBvaW50ZXIpIHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJwb2ludGVyLnNyY0VsZW1lbnQuaWRcIiwgcG9pbnRlci5zcmNFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pZClcclxuXHJcbiAgICBsZXQgcHJvamVjdE5hbWVIb2xkZXIgPSBwb2ludGVyLnNyY0VsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgbGV0IGhpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGlkZURpdi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGlkZURpdilcclxuXHJcbiAgICAgICAgbGV0IGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgYmFja0Rpdi5pZCA9IFwiYmFjay1kaXYtZGVsZXRlXCJcclxuICAgICAgICBoaWRlRGl2LmFwcGVuZChiYWNrRGl2KVxyXG5cclxuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBTdXJlIFlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD9cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuZ3JpZEFyZWEgPSBcIjEgLyAxIC8gMSAvIDNcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBkaXZDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuZ3JpZEFyZWEgPSBcIjIgLyAxIC8gMiAvIDFcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgIHtcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdERlbGV0ZVByb2plY3QocHJvamVjdE5hbWVIb2xkZXIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwiY2FuY2VsLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuc3R5bGUuZ3JpZEFyZWEgPSBcIjIgLyAyIC8gMiAvIDNcIlxyXG4gICAgICAgIGJhY2tEaXYuYXBwZW5kKGRpdkNvbnRlbnQpXHJcblxyXG4gICAgICAgIGRpdkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXYtaGlkZGVuXCIpLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0RGVsZXRlUHJvamVjdChub2RlKSB7XHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBub2RlLmlkKSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuc3BsaWNlKCh0b0RvUGFyZW50LmFsbFByb2plY3RzLmluZGV4T2YocHJvamVjdCkpLDEpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0Lm5hbWUpXHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxufVxyXG5cclxuLy8gVXBkYXRlIHRoZSB0YXNrIHJlbmRlcmVyIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBQcm9qZWN0c1xyXG5mdW5jdGlvbiB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdE5vZGUpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgcmVuZGVyUHJvamVjdFRhc2tzIFwiLHByb2plY3ROb2RlKVxyXG5cclxuICAgIC8vIElmIGFscmVhZHkgaW4gdGhlIHByb2plY3QgZG9uJ3QgcmVyZW5kZXJcclxuICAgIC8vIGlmIChjdXJyZW50UHJvamVjdCA9PSBwcm9qZWN0Tm9kZS5pZCkgcmV0dXJuXHJcblxyXG4gICAgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuICAgIH1cclxuICAgIHByb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuXHJcbiAgICAvLyBSZW1vdmUgYmFja2dyb3VuZCBzZWxlY3Rpb24gY29sb3IgZnJvbSBzaWRlYmFyIGl0ZW1zXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXJcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLW1vbnRoXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG5cclxuICAgIC8vIFNldCBjdXJyZW50IHdvcmtpbmcgcHJvamVjdFxyXG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0Tm9kZS5pZFxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1vcHRpb25zLXNpZGViYXJcIikuZm9yRWFjaCggbm9kZSA9PiB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmUoKVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcHJvamVjdE9wdGlvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtb3B0aW9ucy1zaWRlYmFyXCIpXHJcbiAgICBwcm9qZWN0Tm9kZS5wYXJlbnRFbGVtZW50LmFwcGVuZChwcm9qZWN0T3B0aW9ucylcclxuXHJcbiAgICBsZXQgZWRpdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicmVuYW1lLXByb2plY3RcIilcclxuICAgIGVkaXRQcm9qZWN0LmlubmVyVGV4dCA9IFwiUmVuYW1lXCJcclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChlZGl0UHJvamVjdClcclxuICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgcmVuYW1lUHJvamVjdChwb2ludGVyKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgZGVsZXRlUHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBkZWxldGVQcm9qZWN0U2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIilcclxuICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmlubmVyVGV4dCA9IFwiRGVsZXRlXCJcclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChkZWxldGVQcm9qZWN0U2lkZWJhcilcclxuICAgIGRlbGV0ZVByb2plY3RTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChwb2ludGVyKVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBpZihlbGVtZW50Lm5hbWUgPT09IHByb2plY3ROb2RlLmlkKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC12aWV3LXBvcnRcIikudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyaW5nIGZvckVhY2ggXCIsZWxlbWVudClcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGZvckVhY2ggXCIscHJvamVjdE5vZGUudGV4dENvbnRlbnQpXHJcblxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpbmJveFZpZXcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vLyNyZWdpb24gLS0tLSBTaWRlYmFyIExvZ2ljIGFuZCBSZW5kZXJpbmcgLS0tLVxyXG4vLyBSZW5kZXJzIGFsbCB0YXNrcyBmcm9tIGV2ZXJ5IHByb2plY3QgdG8gdGhlIERPTVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGluYm94VGFza3NSZW5kZXIoKVxyXG59KVxyXG5mdW5jdGlvbiBpbmJveFRhc2tzUmVuZGVyKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuZmlyc3RDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBub1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBub1Rhc2tzLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUuanVzdGlmeVNlbGYgPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgIG5vVGFza3MudGV4dENvbnRlbnQgPSBcIk5vIFRhc2tzLlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmFwcGVuZChub1Rhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCJcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1jdXJyZW50XCIpICE9IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1jdXJyZW50XCIpXHJcbiAgICB9XHJcbiAgICBpbmJveFZpZXcgPSB0cnVlO1xyXG5cclxufVxyXG5cclxuLy8gUmVuZGVycyBvbmx5IHRvZGF5cyB0YXNrcyB0byB0aGUgRE9NXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgdG9kYXlUYXNrUmVuZGVyZXIoKVxyXG59KVxyXG5mdW5jdGlvbiB0b2RheVRhc2tSZW5kZXJlcigpIHtcclxuXHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICB0b2RheSA9IGRkICsgJy4nICsgbW0gKyAnLicgKyB5eXl5ICsgXCIuXCI7XHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudC5kdWVEYXRlXCIsZWxlbWVudC5kdWVEYXRlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZHVlRGF0ZSA9PSB0b2RheSkgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5maXJzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IG5vVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIG5vVGFza3MuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtdGFzay13cmFwcGVyXCIpXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS5qdXN0aWZ5U2VsZiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgbm9UYXNrcy50ZXh0Q29udGVudCA9IFwiTm8gVGFza3MgZm9yIFRvZGF5LlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmFwcGVuZChub1Rhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtY3VycmVudFwiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtY3VycmVudFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGluYm94VmlldyA9IGZhbHNlO1xyXG59XHJcblxyXG4vLyBSZW5kZXJzIG9ubHkgdGhpcyB3ZWVrcyB0YXNrcyB0byB0aGUgRE9NXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgIHdlZWtUYXNrUmVuZGVyZXIoKVxyXG59KVxyXG5mdW5jdGlvbiB3ZWVrVGFza1JlbmRlcmVyKCkge1xyXG5cclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHRvZGF5ID0geXl5eSArIFwiIFwiICsgbW0gKyBcIiBcIiArIGRkXHJcblxyXG4gICAgbGV0IGN1cnJlbnRXZWVrID0gcmVmb3JtYXREYXRlKHRvZGF5LCBcInl5eXkgbW0gZGRcIilcclxuICAgIGN1cnJlbnRXZWVrID0gZ2V0V2VlayggbmV3IERhdGUodG9kYXkpKVxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFza3NXZWVrID0gcmVmb3JtYXREYXRlKGVsZW1lbnQuZHVlRGF0ZSwgXCJ5eXl5IG1tIGRkXCIpXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50WWVhciA9IHRhc2tzV2Vlay5zbGljZSgwLDQpXHJcbiAgICAgICAgICAgIHRhc2tzV2VlayA9IGdldFdlZWsoIG5ldyBEYXRlKHRhc2tzV2VlaykpXHJcbiAgICAgICAgICAgIGlmICh0YXNrc1dlZWsgPT09IGN1cnJlbnRXZWVrICYmIHl5eXkgPT0gZWxlbWVudFllYXIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIikuZmlyc3RDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBub1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBub1Rhc2tzLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgIG5vVGFza3Muc3R5bGUuanVzdGlmeVNlbGYgPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgIG5vVGFza3MudGV4dENvbnRlbnQgPSBcIk5vIFRhc2tzIGZvciB0aGUgY3VycmVudCBXZWVrLlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmFwcGVuZChub1Rhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrJ3MgVGFza3NcIlxyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWN1cnJlbnRcIikgIT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jdXJyZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWN1cnJlbnRcIilcclxuICAgIH1cclxuICAgIGluYm94VmlldyA9IGZhbHNlO1xyXG59XHJcblxyXG4vLyBSZW5kZXJzIG9ubHkgdGhpcyBtb250aCdzIHRhc2tzIHRvIHRoZSBET01cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLW1vbnRoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgIG1vbnRoVGFza1JlbmRlcmVyKClcclxufSlcclxuZnVuY3Rpb24gbW9udGhUYXNrUmVuZGVyZXIoKSB7XHJcblxyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBjdXJyZW50TW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4gICAgLy8gcGFkU3RhcnQgU2V0cyB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgc3RyaW5nIHdlIHdhbnQgdG8gZXh0cmFjdCBhbmQgZmlsbHMgaXQgd2l0aCB0ZSBuZXh0IHNwZWNpZmllZCBlbGVtZW50IGZyb20gdGhlIGxlZnQvYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcgaW4gdGhpcyBjYXNlIGlzIFwiMFwiXHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmR1ZURhdGUuc2xpY2UoMyw1KSA9PT0gY3VycmVudE1vbnRoKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5maXJzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IG5vVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIG5vVGFza3MuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtdGFzay13cmFwcGVyXCIpXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXHJcbiAgICAgICAgbm9UYXNrcy5zdHlsZS5qdXN0aWZ5U2VsZiA9IFwiY2VudGVyXCJcclxuICAgICAgICBub1Rhc2tzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgbm9UYXNrcy50ZXh0Q29udGVudCA9IFwiTm8gVGFza3MgZm9yIHRoZSBjdXJyZW50IE1vbnRoLlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmFwcGVuZChub1Rhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2lkZWJhclwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyXCIpXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS50ZXh0Q29udGVudCA9IFwiVGhpcyBNb250aCdzIFRhc2tzXCJcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWN1cnJlbnRcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1jdXJyZW50XCIpICE9IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1jdXJyZW50XCIpXHJcbiAgICB9XHJcbiAgICBpbmJveFZpZXcgPSBmYWxzZTtcclxufVxyXG4vLyNlbmRyZWdpb25cclxuXHJcblxyXG4vLyNyZWdpb24gIC0tLS0gU29ydCBCeSBMb2dpYyBhbmQgUmVuZGVyaW5nIC0tLS1cclxuLy8gU29ydHMgdGhlIGN1cnJlbnQgUHJvamVjdCB0YXNrcyBieSBwcmlvcml0eVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtcHJpb3JpdHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgIHNvcnRCeVByaW9yaXR5KHBvaW50ZXIpXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeVByaW9yaXR5KHBvaW50ZXIpIHtcclxuXHJcbiAgICBcclxuICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG93LXRvLWhpZ2hcIikpIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvdy10by1oaWdoXCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXRvLWxvd1wiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBEZXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBEZXNjZW5kaW5nXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoLXRvLWxvd1wiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93LXRvLWhpZ2hcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogQXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBBc2NlbmRpbmdcIlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXZpZXctcG9ydFwiKS5pbm5lclRleHQgPT0gXCJBbGwgVGFza3NcIikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgICAgICBpZiAocG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZ2gtdG8tbG93XCIpKSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiVXJnZW50IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJSZWd1bGFyIFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJMb3cgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiTG93IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJSZWd1bGFyIFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJVcmdlbnQgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmNoaWxkTm9kZXNcclxuICAgICAgICBsZXQgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB0ZXh0V3JhcHBlci5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChlbGVtZW50LmZpcnN0Q2hpbGQuaWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICAgICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWdoLXRvLWxvd1wiKSkge1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJVcmdlbnQgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiUmVndWxhciBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJMb3cgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJMb3cgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiUmVndWxhciBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJVcmdlbnQgUHJpb3JpdHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLXByaW9yaXR5XCIpLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IFwiOTAwXCJcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmlubmVyVGV4dCA9IFwiQ2hlY2tcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBjaGVja2VkLWxhc3RcIlxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1kYXRlXCIpLmlubmVyVGV4dCA9IFwiRHVlIERhdGVcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGZhcnRoZXItdG8tY2xvc2VyXCJcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY3JlYXRpb24tZGF0ZVwiKS5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGVcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGxhc3QtY3JlYXRlZC1maXJzdFwiXHJcbn1cclxuXHJcbi8vIFNvcnRzIHRoZSBjdXJyZW50IHRhc2tzIGJ5IGRhdGVcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBzb3J0QnlEYXRlKGV2ZW50KVxyXG59KVxyXG5mdW5jdGlvbiBzb3J0QnlEYXRlKGV2ZW50KSB7XHJcblxyXG4gICAgbGV0IG9yZGVyZWREYXRlcyA9IFtdO1xyXG5cclxuICAgIGxldCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5jaGlsZE5vZGVzXHJcbiAgICBsZXQgaXRlbUxpc3QgPSBbXTtcclxuICAgIHRleHRXcmFwcGVyLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGl0ZW1MaXN0LnB1c2goZWxlbWVudC5maXJzdENoaWxkLmlkKVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuXHJcbiAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3RcIixwcm9qZWN0KVxyXG4gICAgICAgICAgICBwcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goIHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWREYXRlcy5wdXNoKFt0YXNrLmRhdGVWYWx1ZSwgdGFzay5pZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50LmR1ZURhdGU6XCIsZWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQuZGF0ZVZhbHVlOlwiLGVsZW1lbnQuZGF0ZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIG9yZGVyZWREYXRlcy5zb3J0KClcclxuICAgIGNvbnNvbGUubG9nKFwib3JkZXJlZERhdGVzOlwiLG9yZGVyZWREYXRlcylcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZXItdG8tZmFydGhlclwiKSl7XHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VyLXRvLWZhcnRoZXJcIilcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmYXJ0aGVyLXRvLWNsb3NlclwiKVxyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogQXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBEZXNjZW5kaW5nXCJcclxuXHJcbiAgICAgICAgb3JkZXJlZERhdGVzLnJldmVyc2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmYXJ0aGVyLXRvLWNsb3NlclwiKVxyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb3Nlci10by1mYXJ0aGVyXCIpXHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBEZXNjZW5kaW5nXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBBc2NlbmRpbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGRvIHtcclxuICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5ldmVyeSh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXJlZERhdGVzLmxlbmd0aFwiLG9yZGVyZWREYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJlZERhdGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT0gb3JkZXJlZERhdGVzWzBdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtWzFdXCIsIG9yZGVyZWREYXRlc1swXVsxXSlcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20odGFzaylcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkRGF0ZXMuc2hpZnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmRlcmVkRGF0ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChvcmRlcmVkRGF0ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pIFxyXG4gICAgfSB3aGlsZSAob3JkZXJlZERhdGVzLmxlbmd0aCAhPSAwKSBcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmR1ZS1kYXRlXCIpLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IFwiOTAwXCJcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmlubmVyVGV4dCA9IFwiQ2hlY2tcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBjaGVja2VkLWxhc3RcIlxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbG93LXRvLWhpZ2hcIlxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY3JlYXRpb24tZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbGFzdC1jcmVhdGVkLWZpcnN0XCJcclxuXHJcbn1cclxuXHJcbi8vIFNvcnRzIHRoZSBjdXJyZW50IHRhc2tzIGJ5IGNoZWNrZWRcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNoZWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihwb2ludGVyKSB7XHJcbiAgICBzb3J0QnlDaGVja2VkU3RhdHVzKHBvaW50ZXIpXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeUNoZWNrZWRTdGF0dXMocG9pbnRlcikge1xyXG5cclxuICAgIGlmIChwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZC1maXJzdFwiKSkge1xyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC1sYXN0XCIpXHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiQ2hlY2tlZDogRmlyc3RcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiQ2hlY2tlZDogTGFzdFwiXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkLWxhc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJDaGVja2VkOiBMYXN0XCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtYnktdGV4dFwiKS5pbm5lclRleHQgPSBcIkNoZWNrZWQ6IEZpcnN0XCJcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChpbmJveFZpZXcpIHtcclxuXHJcbiAgICAgICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkLWZpcnN0XCIpKSB7XHJcbiAgICAgICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiQ2hlY2tlZFwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJDaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGxldCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5jaGlsZE5vZGVzXHJcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdGV4dFdyYXBwZXIuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goZWxlbWVudC5maXJzdENoaWxkLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG5cclxuICAgICAgICBpZiAocG9pbnRlci5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWQtZmlyc3RcIikpIHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJDaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgPT09IFwiVW5jaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJDaGVja2VkXCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5pbm5lclRleHQgPSBcIlByaW9yaXR5XCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1wcmlvcml0eVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgbG93LXRvLWhpZ2hcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWRhdGVcIikuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5jbGFzc0xpc3QgPSBcIm9yZGVyLWJ5LW9wdGlvbnMgZmFydGhlci10by1jbG9zZXJcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1jcmVhdGlvbi1kYXRlXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBsYXN0LWNyZWF0ZWQtZmlyc3RcIlxyXG59XHJcblxyXG4vLyBTb3J0cyB0YXNrIGl0ZW1zIGJ5IGNyZWF0aW9uIGRhdGVcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWNyZWF0aW9uLWRhdGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKHBvaW50ZXIpIHtcclxuICAgIHNvcnRCeUNyZWF0aW9uRGF0ZShwb2ludGVyKTtcclxuXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeUNyZWF0aW9uRGF0ZShwb2ludGVyKSB7XHJcblxyXG4gICAgbGV0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1saXN0XCIpLmNoaWxkTm9kZXNcclxuICAgIGxldCBpdGVtTGlzdCA9IFtdO1xyXG4gICAgdGV4dFdyYXBwZXIuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaXRlbUxpc3QucHVzaChlbGVtZW50LmZpcnN0Q2hpbGQuaWQpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBzb3J0ZWRJdGVtTGlzdEJ5T2JqZWN0T3JkZXIgPSBbXTtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09IGVsZW1lbnQuaWQpIHNvcnRlZEl0ZW1MaXN0QnlPYmplY3RPcmRlci5wdXNoKGVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgaWYgKHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsYXN0LWNyZWF0ZWQtZmlyc3RcIikpIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtY3JlYXRlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtY3JlYXRlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGU6IERlc2NlbmRpbmdcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRpb24gRGF0ZTogQXNjZW5kaW5nXCJcclxuXHJcbiAgICAgICAgc29ydGVkSXRlbUxpc3RCeU9iamVjdE9yZGVyLnJldmVyc2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZpcnN0LWNyZWF0ZWQtZmlyc3RcIilcclxuICAgICAgICBwb2ludGVyLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxhc3QtY3JlYXRlZC1maXJzdFwiKVxyXG4gICAgICAgIHBvaW50ZXIuc3JjRWxlbWVudC5pbm5lclRleHQgPSBcIkNyZWF0aW9uIERhdGU6IEFzY2VuZGluZ1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5LXRleHRcIikuaW5uZXJUZXh0ID0gXCJDcmVhdGlvbiBEYXRlOiBEZXNjZW5kaW5nXCJcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpdGVtTGlzdFswXVwiLGl0ZW1MaXN0WzBdKVxyXG4gICAgc29ydGVkSXRlbUxpc3RCeU9iamVjdE9yZGVyLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXByaW9yaXR5XCIpLmlubmVyVGV4dCA9IFwiUHJpb3JpdHlcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXByaW9yaXR5XCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBsb3ctdG8taGlnaFwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1kYXRlXCIpLmNsYXNzTGlzdCA9IFwib3JkZXItYnktb3B0aW9ucyBmYXJ0aGVyLXRvLWNsb3NlclwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY2hlY2tcIikuaW5uZXJUZXh0ID0gXCJDaGVja1wiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtY2hlY2tcIikuY2xhc3NMaXN0ID0gXCJvcmRlci1ieS1vcHRpb25zIGNoZWNrZWQtbGFzdFwiXHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8gQWRkcyB0aGUgU29ydCBieSBsaXN0IG9uIGNsaWNrIGxpc3RlbmVyXHJcbmxldCBvcmRlckJ5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydC1ieS10ZXh0XCIpXHJcbm9yZGVyQnlOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID09IFwidW5zZXRcIil7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInVuc2V0XCJcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vLyBIaWRlcyB0aGUgU29ydCBieSBsaXN0IGZyb20gdGhlIERPTVxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjc29ydC1ieS10ZXh0JykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN0YXJ0dXBSZW5kZXJQcm9qZWN0VGFza3MsIHN0YXJ0dXBMaWJyYXJ5U2lkZWJhclJlbmRlcmVyLCBhZGROZXdQcm9qZWN0LCB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MsIGFkZFRhc2tJbnRlcmZhY2V9IiwiaW1wb3J0IHsgc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcywgc3RhcnR1cExpYnJhcnlTaWRlYmFyUmVuZGVyZXIsIHRhc2tzSW5pdGlhbEV2ZW50QWRkZXIsIGFkZE5ld1Byb2plY3QsIGFkZFRhc2tJbnRlcmZhY2V9IGZyb20gJy4vRE9NTWFuaXB1bGF0aW9uJ1xyXG5pbXBvcnQge2dldERheSwgZ2V0V2VlaywgaXNUb2RheX0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0LmNzcydcclxuXHJcbi8vIENyZWF0ZSB0aGUgcGFyZW50IG9iamVjdCBsb2dpYyBmb3IgbWFuaXB1bGF0aW5nIGRhdGEgZnJvbSB0b0RvQ2hpbGQgY2hpbGQgb2JqZWN0c1xyXG5jb25zdCB0b0RvUGFyZW50ID0ge1xyXG4gICAgYWxsUHJvamVjdHM6IFtdLFxyXG4gICAgc3VtbWFyeTogIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUsIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5ub3RlcywgdGhpcy5jaGVja2VkKVxyXG4gICAgfSxcclxufVxyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBUbyBEbyBpdGVtXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZ2V0TmFtZSkge1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUodG9Eb1BhcmVudClcclxuXHJcbiAgICBwcm9qZWN0LnRpdGxlID0gZ2V0TmFtZVxyXG4gICAgcHJvamVjdC5uYW1lID0gZ2V0TmFtZSArIE1hdGgucmFuZG9tKDEwKTtcclxuICAgIHByb2plY3QuYWxsSXRlbXMgPSBbXTtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBUbyBEbyBvYmplY3RcclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0oZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0Tm90ZXMsIGdldENoZWNrZWQsIHByb2plY3QpIHtcclxuXHJcbiAgICBsZXQgdG9Eb0NoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KVxyXG5cclxuICAgIHRvRG9DaGlsZC5pZCA9IGdldFRpdGxlICsgTWF0aC5yYW5kb20oMTApXHJcbiAgICB0b0RvQ2hpbGQudGl0bGUgPSBnZXRUaXRsZVxyXG4gICAgdG9Eb0NoaWxkLmRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24gPyBnZXREZXNjcmlwdGlvbiA6IFwiXCJcclxuICAgIHRvRG9DaGlsZC5kdWVEYXRlID0gZ2V0RHVlRGF0ZSA/IGdldER1ZURhdGUgOiBcIk5vIER1ZSBEYXRlXCJcclxuICAgIHRvRG9DaGlsZC5wcmlvcml0eSA9IGdldFByaW9yaXR5ID8gZ2V0UHJpb3JpdHkgOiBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgdG9Eb0NoaWxkLm5vdGVzID0gZ2V0Tm90ZXMgPyBnZXROb3RlcyA6IFwiTm8gTm90ZXNcIlxyXG4gICAgdG9Eb0NoaWxkLmNoZWNrZWQgPSBcIlVuY2hlY2tlZFwiXHJcbiAgICB0b0RvQ2hpbGQuZGF0ZVZhbHVlID0gKE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDAsMikpKSArICgoTnVtYmVyKGdldER1ZURhdGUuc2xpY2UoMyw1KSkgLSAxKSAqIDMwKSArIE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDYsMTApICogMzY1KVxyXG5cclxuICAgIHByb2plY3QuYWxsSXRlbXMucHVzaCh0b0RvQ2hpbGQpXHJcblxyXG4gICAgLy8gQ2FuIGNyZWF0ZSBpdHMgb3duIGZ1bmN0aW9ucyBoZXJlIHRvbyBsaWtlIHRoaXNcclxuICAgIC8vIHRvRG9JdGVtLnN1bW1hcnkgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHksIHRoaXMubm90ZXMsIHRoaXMuY2hlY2tsaXN0KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiB0b0RvQ2hpbGQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxyXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xyXG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aFwiLHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoKVxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgICAgICBjb25zdCB0b0RvTGlzdFByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdChcIlRvIERvIExpc3QgUHJvamVjdFwiKVxyXG4gICAgICAgICAgICBjb25zdCB0ZXN0UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIpICBcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVRvRG9JdGVtKFwiQ29tcGxldGUgVGhlIFRvIERvIExpc3RcIixcIkRvIGl0LlwiLFwiMTYuMDcuMjAyMi5cIixcIlVyZ2VudCBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiQ2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvRG9JdGVtKFwiU29sdmUgdGhlIHF1YW50dW0gcGFyYWRpZ21cIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTguMDguMjAyMi5cIixcIlVyZ2VudCBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuICAgICAgICAgICAgY3JlYXRlVG9Eb0l0ZW0oXCJQaWNrIHVwIE1vbmV5XCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE3LjA3LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvRG9JdGVtKFwiRmlndXJlIHRoZSBBbG1vbmQgUHJpbmNpcGxlXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE2LjA3LjIwMjIuXCIsXCJMb3cgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvRG9JdGVtKFwiQ29tcHV0ZSB0aGUgUGkgZmlndXJlIG51bWJlclwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxMy4wOS4yMDIyLlwiLFwiUmVndWxhciBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuICAgICAgICAgICAgY3JlYXRlVG9Eb0l0ZW0oXCJDb250aW51ZSB0aGUgZGlzaWxsdXNpb24gb2YgdGhlIGRlbHVzaW9uXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjA1LjA3LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvRG9JdGVtKFwiU29sdmUgdGhlIFF1YWRyYXRpYyBNaW5wZWwncyBFcXVhdGlvblwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxOC4wOC4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVUb0RvSXRlbShcIlNtYWNrIHRoYXQgbnVtYmVyIGtleVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxMi4wNy4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVUb0RvSXRlbShcIlNvbHZlIHRoZSBRdWFkcmF0aWMgTWlucGVsJ3MgRXF1YXRpb25cIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTguMDguMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdGVzdFByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVUb0RvSXRlbShcIlNtYWNrIHRoYXQgbnVtYmVyIGtleVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxMi4wNy4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0ZXN0UHJvamVjdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8d2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFRvTG9hZCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KGkpKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KGkpKSkpXHJcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdFRvTG9hZCwgdG9Eb1BhcmVudClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RUb0xvYWQpXHJcbiAgICAgICAgICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLnB1c2gocHJvamVjdFRvTG9hZClcclxuICAgICAgICAgICAgICAgIHByb2plY3RUb0xvYWQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgcHJvamVjdFRvTG9hZClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikgeyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcclxuICAgIGFsZXJ0KFwiQ2FuIG5vdCBhY2Nlc3MgbG9jYWwgU3RvcmFnZS4gQWxsIGRhdGEgd2lsbCBiZSBsb3N0IG9uIHBhZ2UgcmVmcmVzaCBvciBjbG9zZS5cIilcclxuICAgIH1cclxuXHJcbmNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuXHJcblxyXG5cclxuXHJcbi8vI3JlZ2lvbiAtLS0tIERlZmF1bHRfUHJvamVjdCBUYXNrIE9iamVjdCBkYXRhIGluc2VydGlvbiAtLS0tXHJcbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4vLyBjb25zdCB0b0RvTGlzdFByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdChcIlRvIERvIExpc3QgUHJvamVjdFwiKVxyXG4vLyBjb25zdCB0ZXN0UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIpICBcclxuXHJcblxyXG5cclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJDb21wbGV0ZSBUaGUgVG8gRG8gTGlzdFwiLFwiRG8gaXQuXCIsXCIxNi4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNvbHZlIHRoZSBxdWFudHVtIHBhcmFkaWdtXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE4LjA4LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiUGljayB1cCBNb25leVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxNy4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIkZpZ3VyZSB0aGUgQWxtb25kIFByaW5jaXBsZVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxNi4wNy4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIkNvbXB1dGUgdGhlIFBpIGZpZ3VyZSBudW1iZXJcIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTMuMDkuMjAyMi5cIixcIlJlZ3VsYXIgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNyZWF0ZVRvRG9JdGVtKFwiQ29udGludWUgdGhlIGRpc2lsbHVzaW9uIG9mIHRoZSBkZWx1c2lvblwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIwNS4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIix0b0RvTGlzdFByb2plY3QpO1xyXG4vLyBjcmVhdGVUb0RvSXRlbShcIlNvbHZlIHRoZSBRdWFkcmF0aWMgTWlucGVsJ3MgRXF1YXRpb25cIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTguMDguMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJTbWFjayB0aGF0IG51bWJlciBrZXlcIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTIuMDcuMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdG9Eb0xpc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJTb2x2ZSB0aGUgUXVhZHJhdGljIE1pbnBlbCdzIEVxdWF0aW9uXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE4LjA4LjIwMjIuXCIsXCJMb3cgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLHRlc3RQcm9qZWN0KTtcclxuLy8gY3JlYXRlVG9Eb0l0ZW0oXCJTbWFjayB0aGF0IG51bWJlciBrZXlcIixcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBvYmNhZWNhdGkgY29uc2VxdXVudHVyIGRpc3RpbmN0aW8sIGZ1Z2lhdCBhZCBtYWduYW0sIGV4IG9wdGlvIGR1Y2ltdXMgb2ZmaWNpYSBtaW51cyByZXByZWhlbmRlcml0IHF1YWVyYXQhIEVvcywgZG9sb3J1bSBlc3NlIVwiLFwiMTIuMDcuMjAyMi5cIixcIkxvdyBQcmlvcml0eVwiLFwibm90ZXMgZm9yIHRvZG8gaXRlbVwiLFwiVW5jaGVja2VkXCIsdGVzdFByb2plY3QpO1xyXG5cclxuXHJcblxyXG4vLyB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xyXG4gICAgXHJcbi8vICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSlcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiQUFcIilcclxuLy8gfSlcclxuXHJcblxyXG4vLyBmb3IgKGxldCBpPTA7aTxsb2NhbFN0b3JhZ2UubGVuZ3RoO2krKykge1xyXG5cclxuLy8gICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KGkpLnNsaWNlKDAsNykgPT0gXCJQcm9qZWN0XCIpIHtcclxuLy8gICAgICAgICBsZXQgcHJvamVjdFRvTG9hZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSkpXHJcbi8vICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2plY3RUb0xvYWQsIHRvRG9QYXJlbnQpXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRvTG9hZClcclxuLy8gICAgICAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLnB1c2gocHJvamVjdFRvTG9hZClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggcHJvamVjdCA9PiB7XHJcbi8vICAgICBwcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLmlkLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcclxuLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxyXG4vLyAgICAgcHJvamVjdC5hbGxJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuLy8gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXHJcbi8vICAgICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc29sZS5sb2coXCJJVEVNIFRBU0tcIixKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ29tcGxldGUgVGhlIFRvIERvIExpc3QnKSkpXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZVwiLGxvY2FsU3RvcmFnZSlcclxuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJKU09OLnBhcnNlKGl0ZW0pXCIsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKVxyXG4vLyAgICAgbGV0IGhvbGRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpXHJcbi8vICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaG9sZGVyLCB0ZXN0UHJvamVjdClcclxuLy8gICAgIHRlc3RQcm9qZWN0LmFsbEl0ZW1zLnB1c2goaG9sZGVyKVxyXG4vLyAgICAgLy8gJCgnYm9keScpLmFwcGVuZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKFwidGVzdFByb2plY3QuYWxsSXRlbXNbNF0ubmFtZVwiLHRlc3RQcm9qZWN0LmFsbEl0ZW1zWzRdKVxyXG5cclxuLy8gbGV0IG9iamVjdEZyb21TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU29sdmUgdGhlIHF1YW50dW0gcGFyYWRpZ20nKSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwib2JqZWN0RnJvbVN0b3JhZ2VcIixvYmplY3RGcm9tU3RvcmFnZS5pZClcclxuLy8gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlNvbHZlIHRoZSBxdWFudHVtIHBhcmFkaWdtXCIsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NvbHZlIHRoZSBxdWFudHVtIHBhcmFkaWdtJykpXHJcbiAgICAgICAgXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInRlc3RQcm9qZWN0LmFsbEl0ZW1zXCIsdGVzdFByb2plY3QuYWxsSXRlbXMpXHJcblxyXG4vLyBsZXQgaXRlbVRvQ2hhbmdlID0gdGVzdFByb2plY3QuYWxsSXRlbXNbMF1cclxuLy8gY29uc29sZS5sb2coXCJpdGVtVG9DaGFuZ2VcIixpdGVtVG9DaGFuZ2UpXHJcbi8vIE9iamVjdC5zZXRQcm90b3R5cGVPZihpdGVtVG9DaGFuZ2UsIHRvRG9MaXN0UHJvamVjdCk7XHJcbi8vIGNvbnNvbGUubG9nKFwiaXRlbVRvQ2hhbmdlXCIsaXRlbVRvQ2hhbmdlKVxyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5cclxuc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcygpXHJcbnN0YXJ0dXBMaWJyYXJ5U2lkZWJhclJlbmRlcmVyKClcclxuYWRkVGFza0ludGVyZmFjZSgpXHJcbmFkZE5ld1Byb2plY3QoKVxyXG5cclxuLy8jcmVnaW9uIC0tLS0gTGVmdG92ZXIsIHByYWN0aWNlLCB0ZXN0ZWQgY29kZSAtLS0tXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInVzZXIgcHJvdG9cIixPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcblxyXG4vLyBjb25zb2xlLmxvZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcbi8vIE9iamVjdC5zZXRQcm90b3R5cGVPZih1c2VyLCB0b0RvUGFyZW50KTtcclxuLy8gY29uc29sZS5sb2codG9Eb1BhcmVudC5pc1Byb3RvdHlwZU9mKHVzZXIpKVxyXG4vLyBjb25zb2xlLmxvZyh0eXBlb2YgdXNlcilcclxuLy8gY29uc29sZS5sb2coT2JqZWN0LmdldFByb3RvdHlwZU9mKHVzZXIpKVxyXG4vLyBjb25zb2xlLmxvZyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0b0RvUGFyZW50KS5maWx0ZXIoaXRlbSA9PiB0eXBlb2YgdG9Eb1BhcmVudFtpdGVtXSA9PT0gJ2Z1bmN0aW9uJykpXHJcblxyXG4vLyB1c2VyLnN1bW1hcnkoKVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4vLyBjb25zb2xlLmxvZyhcImRlZmF1bHRQcm9qZWN0J3MgaXRlbXM6XCIsZGVmYXVsdFByb2plY3QuYWxsSXRlbXMpXHJcbi8vIGNvbnNvbGUubG9nKFwidG9Eb1BhcmVudCdzIHByb2plY3RzOlwiLHRvRG9QYXJlbnQuYWxsUHJvamVjdHMpXHJcblxyXG4vLyB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4vLyB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4vLyB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4vLyB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbi8vIHRvZGF5ID0geXl5eSArIFwiIFwiICsgbW0gKyBcIiBcIiArIGRkXHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInRvZGF5IGZvciB3ZWVrXCIsdG9kYXkpXHJcbi8vIGxldCB3ZWVrID0gZ2V0V2VlayggbmV3IERhdGUodG9kYXkpKVxyXG4vLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgd2Vla1wiLHdlZWspXHJcblxyXG4vLyB0b2RheSA9IG1tICsgJy4nICsgZGQgKyAnLicgKyB5eXl5ICsgXCIuXCI7XHJcbi8vIGNvbnNvbGUubG9nKFwiVG9kYXkncyBEYXRlXCIsdG9kYXkpO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCB7IHRvRG9QYXJlbnQsIGNyZWF0ZVRvRG9JdGVtLCBjcmVhdGVQcm9qZWN0IH1cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=