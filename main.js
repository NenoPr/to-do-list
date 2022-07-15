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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nbody {\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n    overflow-y: hidden; \r\n  }\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n  }\r\n\r\n* {\r\n    /* outline: 1px solid blue; */\r\n}\r\n#container {\r\n    display: grid;\r\n    grid-template: 10vh 90vh / 17vw 83vw;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n#header {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: #4c8eff;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 1;\r\n    gap: 1rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n#sidebar-contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n#inbox, #today, #this-week, #this-month {\r\n    width: fit-content;\r\n    cursor: pointer;\r\n    border-radius: 1rem;\r\n    margin-left: 1rem;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    width: 85%;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#inbox:hover, #today:hover, #this-week:hover, #this-month:hover {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n}\r\n\r\n#inbox:active, #today:active, #this-week:active, #this-month:active {\r\n    transform: scale(0.97);\r\n}\r\n\r\n#sidebar-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    margin-left: 1rem;\r\n}\r\n\r\n#add-project {\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#add-project:hover {\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    height: 20vh;\r\n    overflow-y: scroll;\r\n    font-size: 1rem;\r\n    height: 50vh;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n.project {\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-current {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template: auto 15fr / 10fr auto;\r\n    padding-top: 2rem;\r\n    grid-area: 2 / 2 / 2 / 3;\r\n    background-color: rgb(215, 242, 250);\r\n    align-content: center;\r\n    position: relative;\r\n}\r\n\r\n#add-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: fit-content;\r\n    width: fit-content;\r\n    padding: 1rem;\r\n    border-radius: .5rem;\r\n    background-color: #979797;\r\n}\r\n\r\n#add-task:hover {\r\n    box-shadow: 0 0 .1rem .3rem black;\r\n}\r\n\r\n#sort-by {\r\n    grid-area: 1 / 2 / 1 / 3;\r\n    text-align: center;\r\n    padding: 1rem;\r\n    border: .1rem solid gray;\r\n    margin-right: 5rem;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    align-self: flex-end;\r\n    cursor: pointer;\r\n    position: relative;\r\n    width: 6rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#dropdown {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    right: 5rem;\r\n    top: 5.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 999;\r\n}\r\n\r\n.order-by-options {\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1rem solid gray;\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    width: 6rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n}\r\n\r\n#tasks-list {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    grid-row: 2 / 2;\r\n    grid-column: 1 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    padding-top: 2rem;\r\n    padding-left: 1rem;\r\n    padding-bottom: 1rem;\r\n    gap: 1rem;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: .75rem;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n/* .task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 10rem;\r\n    width: 17rem;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n} */\r\n\r\n.example-task-wrapper {\r\n    display: grid;\r\n    height: fit-content;\r\n    max-height: 14rem;\r\n    width: 50%;\r\n    grid-template: auto 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    row-gap: .2rem;\r\n}\r\n\r\n.example-task-info {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / auto 15fr 3fr auto auto auto;\r\n    column-gap: .2rem;\r\n    padding: .5rem;\r\n    gap: 1rem;\r\n    position: relative;\r\n    border-radius: .5rem;\r\n    align-items: center;\r\n}\r\n\r\n.example-task-info:hover {\r\n    box-shadow:  0 0 .5rem .1rem gray;\r\n}\r\n\r\n.example-task-info:active {\r\n    box-shadow:  0 0 .5rem .1rem rgb(255, 255, 255);\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar {\r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n.check-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.checked-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: rgba(70, 181, 30, 0.704);\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.title {\r\n    position: absolute;\r\n    grid-area: 1 / 2 / 1 / 2;\r\n    font-weight: 900;\r\n    margin: 0;\r\n    padding-top: .7rem;\r\n    padding-bottom: .4rem;\r\n    height: 100%;\r\n    align-self: center;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n.due-date {\r\n    grid-area: 1 / 3 / 1 / 3;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    width: fit-content;\r\n    justify-self: center;\r\n}\r\n\r\n.task-priority {\r\n    grid-area: 1 / 4 / 1 / 4;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .1rem;\r\n    padding-bottom: .1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border: .05rem solid rgb(130, 130, 130);\r\n    width: 8rem;\r\n    justify-self: center;\r\n}\r\n\r\n.edit-task {\r\n    grid-area: 1 / 5 / 1 / 5;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .1rem solid rgb(234, 142, 44);\r\n    background-color: rgba(234, 142, 44, 0.433);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n}\r\n\r\n.delete-task {\r\n    grid-area: 1 / 6 / 1 / 6;\r\n    padding: .5rem;\r\n    border: .05rem solid rgb(255, 80, 80);\r\n    background-color: rgba(255, 80, 80, 0.485);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    width: fit-content;\r\n}\r\n\r\n.task-priority:hover {\r\n    box-shadow: 0 0 .1rem .025rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.task-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    margin-bottom: .2rem;\r\n    height: fit-content;\r\n    width: 99.5%;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    justify-self: center;\r\n}\r\n\r\n.description-title {\r\n    padding-top: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.description {\r\n    padding-bottom: .5rem;\r\n    padding-top: .5rem;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#div-hidden {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #97979780;\r\n}\r\n\r\n#form-div {\r\n    width: 33%;\r\n    height: 33%;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / 1fr;\r\n    padding: 2rem;\r\n}\r\n\r\n#cancel-button {\r\n    padding: 1rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    align-self: end;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 30rem;\r\n    height: max-content;\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    background-color: #ffffff;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n}\r\n\r\n#date-input {\r\n    width: 30%;\r\n}\r\n\r\nform > input {\r\n    margin-bottom: 2rem;\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\n#span-error-task-title-input {\r\n    color: red;\r\n    font-size: .75rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.task-title-input-invalid {\r\n    border: .1rem solid red;\r\n    box-shadow: 0 0 .5rem .1rem red;\r\n}\r\n\r\n.task-title-input-invalid:valid {\r\n    border: .1rem solid green;\r\n    box-shadow: 0 0 .5rem .1rem green;\r\n}\r\n\r\n/* #span-error-task-title-input {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 1rem;\r\n} */\r\n\r\nform > label {\r\n    font-weight: 500;\r\n}\r\n\r\nform > input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .1rem .05rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > label {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n#priority-div {\r\n    margin-bottom: 2rem;\r\n    border-bottom: .1rem solid gray;\r\n    display: flex;\r\n    gap: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#priority-div > input {\r\n    transform: scale(2);\r\n}\r\n\r\n#form-submit {\r\n    padding: 1rem;\r\n    background-color: rgb(139, 182, 255);\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin-top: 2rem;\r\n    align-self: center;\r\n}\r\n\r\n#form-submit:hover {\r\n    box-shadow: 0 0 .1rem .1rem black;\r\n}\r\n\r\n#back-div {\r\n    height: 25%;\r\n    width: 120%;\r\n    padding: 1rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n    align-items: center;\r\n}\r\n\r\n#create-project-text {\r\n    font-weight:  700;\r\n    border-bottom: .1rem solid gray;\r\n    grid-area: 1 / 1 / 1 / 3;\r\n}\r\n\r\n#new-project-label {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#new-project-label > span {\r\n    margin: .2rem;\r\n    color: red;\r\n}\r\n\r\n\r\n#new-project-input {\r\n    height: 2rem;\r\n    font-size: 1.5rem;\r\n    padding: .5rem;\r\n    margin-top: .5rem;\r\n    border-radius: 0;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin-bottom: 0;\r\n}\r\n\r\n#new-project-input:focus, #new-project-input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .3rem .1rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > textarea {\r\n    border-radius: .5rem;\r\n    padding: .25rem;\r\n}\r\n\r\n#create-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 1 / 3 / 2;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    background-color: #109f00;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    font-weight: 700;\r\n    letter-spacing: .1rem;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#cancel-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 2 / 3 / 3;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#create-project-button:hover, #cancel-project-button:hover {\r\n\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    #container {\r\n        display: grid;\r\n        grid-template: 10vh 90vh / 15vw 85vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}\r\n\r\n@media (min-width: 2560px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    \r\n    #container {\r\n        display: grid;\r\n        grid-template: 10vh 90vh / 12vw 88vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n\r\nhtml, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nbody {\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n    overflow-y: hidden; \r\n  }\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n  }\r\n\r\n* {\r\n    /* outline: 1px solid blue; */\r\n}\r\n#container {\r\n    display: grid;\r\n    grid-template: 10vh 90vh / 17vw 83vw;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n#header {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: #4c8eff;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 1;\r\n    gap: 1rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n#sidebar-contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n#inbox, #today, #this-week, #this-month {\r\n    width: fit-content;\r\n    cursor: pointer;\r\n    border-radius: 1rem;\r\n    margin-left: 1rem;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    width: 85%;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#inbox:hover, #today:hover, #this-week:hover, #this-month:hover {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n}\r\n\r\n#inbox:active, #today:active, #this-week:active, #this-month:active {\r\n    transform: scale(0.97);\r\n}\r\n\r\n#sidebar-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    margin-left: 1rem;\r\n}\r\n\r\n#add-project {\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#add-project:hover {\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    height: 20vh;\r\n    overflow-y: scroll;\r\n    font-size: 1rem;\r\n    height: 50vh;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#projects-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n.project {\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.project-current {\r\n    background-color: #4c8eff5d;\r\n    border-radius: 1rem;\r\n    padding-left: .5rem;\r\n    padding-top: .2rem;\r\n    padding-bottom: .2rem;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template: auto 15fr / 10fr auto;\r\n    padding-top: 2rem;\r\n    grid-area: 2 / 2 / 2 / 3;\r\n    background-color: rgb(215, 242, 250);\r\n    align-content: center;\r\n    position: relative;\r\n}\r\n\r\n#add-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: fit-content;\r\n    width: fit-content;\r\n    padding: 1rem;\r\n    border-radius: .5rem;\r\n    background-color: #979797;\r\n}\r\n\r\n#add-task:hover {\r\n    box-shadow: 0 0 .1rem .3rem black;\r\n}\r\n\r\n#sort-by {\r\n    grid-area: 1 / 2 / 1 / 3;\r\n    text-align: center;\r\n    padding: 1rem;\r\n    border: .1rem solid gray;\r\n    margin-right: 5rem;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    align-self: flex-end;\r\n    cursor: pointer;\r\n    position: relative;\r\n    width: 6rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#dropdown {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    right: 5rem;\r\n    top: 5.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 999;\r\n}\r\n\r\n.order-by-options {\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1rem solid gray;\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    width: 6rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n}\r\n\r\n#tasks-list {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    grid-row: 2 / 2;\r\n    grid-column: 1 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    padding-top: 2rem;\r\n    padding-left: 1rem;\r\n    padding-bottom: 1rem;\r\n    gap: 1rem;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: .75rem;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n/* .task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 10rem;\r\n    width: 17rem;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n} */\r\n\r\n.example-task-wrapper {\r\n    display: grid;\r\n    height: fit-content;\r\n    max-height: 14rem;\r\n    width: 50%;\r\n    grid-template: auto 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    row-gap: .2rem;\r\n}\r\n\r\n.example-task-info {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / auto 15fr 3fr auto auto auto;\r\n    column-gap: .2rem;\r\n    padding: .5rem;\r\n    gap: 1rem;\r\n    position: relative;\r\n    border-radius: .5rem;\r\n    align-items: center;\r\n}\r\n\r\n.example-task-info:hover {\r\n    box-shadow:  0 0 .5rem .1rem gray;\r\n}\r\n\r\n.example-task-info:active {\r\n    box-shadow:  0 0 .5rem .1rem rgb(255, 255, 255);\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar {\r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n.example-task-info::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n}\r\n\r\n.check-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.checked-task {\r\n    grid-area: 1 / 1 / 1 / 1;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .05rem solid black;\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    background-color: rgba(70, 181, 30, 0.704);\r\n    height: 50%;\r\n    width: 2rem;\r\n}\r\n\r\n.title {\r\n    position: absolute;\r\n    grid-area: 1 / 2 / 1 / 2;\r\n    font-weight: 900;\r\n    margin: 0;\r\n    padding-top: .7rem;\r\n    padding-bottom: .4rem;\r\n    height: 100%;\r\n    align-self: center;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n.due-date {\r\n    grid-area: 1 / 3 / 1 / 3;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    width: fit-content;\r\n    justify-self: center;\r\n}\r\n\r\n.task-priority {\r\n    grid-area: 1 / 4 / 1 / 4;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    padding-top: .1rem;\r\n    padding-bottom: .1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border: .05rem solid rgb(130, 130, 130);\r\n    width: 8rem;\r\n    justify-self: center;\r\n}\r\n\r\n.edit-task {\r\n    grid-area: 1 / 5 / 1 / 5;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    border: .1rem solid rgb(234, 142, 44);\r\n    background-color: rgba(234, 142, 44, 0.433);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n}\r\n\r\n.delete-task {\r\n    grid-area: 1 / 6 / 1 / 6;\r\n    padding: .5rem;\r\n    border: .05rem solid rgb(255, 80, 80);\r\n    background-color: rgba(255, 80, 80, 0.485);\r\n    border-radius: .3rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    width: fit-content;\r\n}\r\n\r\n.task-priority:hover {\r\n    box-shadow: 0 0 .1rem .025rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.task-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    margin-bottom: .2rem;\r\n    height: fit-content;\r\n    width: 99.5%;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    justify-self: center;\r\n}\r\n\r\n.description-title {\r\n    padding-top: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.description {\r\n    padding-bottom: .5rem;\r\n    padding-top: .5rem;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#div-hidden {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #97979780;\r\n}\r\n\r\n#form-div {\r\n    width: 33%;\r\n    height: 33%;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr / 1fr;\r\n    padding: 2rem;\r\n}\r\n\r\n#cancel-button {\r\n    padding: 1rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    align-self: end;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 30rem;\r\n    height: max-content;\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    background-color: #ffffff;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n}\r\n\r\n#date-input {\r\n    width: 30%;\r\n}\r\n\r\nform > input {\r\n    margin-bottom: 2rem;\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    width: 90%;\r\n    border: .1rem solid gray;\r\n}\r\n\r\n#span-error-task-title-input {\r\n    color: red;\r\n    font-size: .75rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.task-title-input-invalid {\r\n    border: .1rem solid red;\r\n    box-shadow: 0 0 .5rem .1rem red;\r\n}\r\n\r\n.task-title-input-invalid:valid {\r\n    border: .1rem solid green;\r\n    box-shadow: 0 0 .5rem .1rem green;\r\n}\r\n\r\n/* #span-error-task-title-input {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 1rem;\r\n} */\r\n\r\nform > label {\r\n    font-weight: 500;\r\n}\r\n\r\nform > input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .1rem .05rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > label {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n#priority-div {\r\n    margin-bottom: 2rem;\r\n    border-bottom: .1rem solid gray;\r\n    display: flex;\r\n    gap: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#priority-div > input {\r\n    transform: scale(2);\r\n}\r\n\r\n#form-submit {\r\n    padding: 1rem;\r\n    background-color: rgb(139, 182, 255);\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin-top: 2rem;\r\n    align-self: center;\r\n}\r\n\r\n#form-submit:hover {\r\n    box-shadow: 0 0 .1rem .1rem black;\r\n}\r\n\r\n#back-div {\r\n    height: 25%;\r\n    width: 120%;\r\n    padding: 1rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\r\n    border-radius: .5rem;\r\n    border: .1rem solid gray;\r\n    box-shadow: 0 0 .5rem .1rem gray;\r\n    align-items: center;\r\n}\r\n\r\n#create-project-text {\r\n    font-weight:  700;\r\n    border-bottom: .1rem solid gray;\r\n    grid-area: 1 / 1 / 1 / 3;\r\n}\r\n\r\n#new-project-label {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n#new-project-label > span {\r\n    margin: .2rem;\r\n    color: red;\r\n}\r\n\r\n\r\n#new-project-input {\r\n    height: 2rem;\r\n    font-size: 1.5rem;\r\n    padding: .5rem;\r\n    margin-top: .5rem;\r\n    border-radius: 0;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin-bottom: 0;\r\n}\r\n\r\n#new-project-input:focus, #new-project-input:focus {\r\n    border: .1rem solid rgb(56, 152, 255);\r\n    box-shadow: 0 0 .3rem .1rem rgb(57, 159, 255);\r\n    outline: none;\r\n}\r\n\r\nform > textarea {\r\n    border-radius: .5rem;\r\n    padding: .25rem;\r\n}\r\n\r\n#create-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 1 / 3 / 2;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    background-color: #109f00;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    font-weight: 700;\r\n    letter-spacing: .1rem;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#cancel-project-button {\r\n    justify-self: center;\r\n    grid-area: 3 / 2 / 3 / 3;\r\n    width: 10rem;\r\n    height: 3rem;\r\n    border: .1rem solid gray;\r\n    border-radius: .5rem;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n#create-project-button:hover, #cancel-project-button:hover {\r\n\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    #container {\r\n        display: grid;\r\n        grid-template: 10vh 90vh / 15vw 85vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}\r\n\r\n@media (min-width: 2560px) {\r\n    .example-task-wrapper {\r\n        height: fit-content;\r\n        width: 80%;\r\n    }\r\n    \r\n    #container {\r\n        display: grid;\r\n        grid-template: 10vh 90vh / 12vw 88vw;\r\n        min-height: 100vh;\r\n        width: 100vw;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js");



let currentProject;
let currentView;

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
    taskCheck.addEventListener("click", function() {
        toggleCheckTask(taskCheck)
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
    taskEdit.addEventListener("click", function() {
        addEditTaskListeners(taskEdit, element)
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

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Due Date"
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    form.appendChild(label)
    form.appendChild(input)

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

// Redormates the dates based on the desired output
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

    } else if (outputFormat == "dd.month.yyyy.") { // input format dd.mm.yyyy.
        // format date from Object date to render format for DOM
        day = input.slice(0, 2)
        console.log("day",day)
        year = input.substr(-5)
        year = year.slice(0,4)
        console.log("year",year)
        month = input.slice(3, 5)
        console.log("month",month)
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
        input = (0,date_fns_getDay__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(input))

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
function addEditTaskListeners(taskItem, element) {

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

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Change Date"
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    input.value = reformatDate(element.dueDate,"yyyy-mm-dd")
    form.appendChild(label)
    form.appendChild(input)

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
        submitTaskChanges(form, element, taskItem)
    })
    form.appendChild(submitButton)

    divHidden.appendChild(form)
}

// Toggles check task state
function toggleCheckTask(taskCheck) {

    let itemId = taskCheck.parentElement.parentElement.firstChild.id
    console.log("itemId:",itemId)
    console.log()
    
    console.log("toDoParent.allProjects",_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects)
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every(element => {
        if (element.name === currentProject) {
            element.allItems.every( item => {
                if (item.id === itemId) {
                    if (item.checked == "Unchecked") {
                        item.checked = "Checked"
                        taskCheck.classList.remove("check-task")
                        taskCheck.classList.add("checked-task")
                        return false
                    } else if (item.checked == "Checked") {
                        item.checked = "Unchecked"
                        taskCheck.classList.remove("checked-task")
                        taskCheck.classList.add("check-task")
                        return false
                    }
                }
                console.log(item.id)
                return true
            })
            return false
        }
        console.log("element.name",element.name)
        return true
    })
} 

// Delete current task
function deleteTask(taskDel) {

    let itemId = taskDel.parentElement.id
    console.log("element.allItems",_index__WEBPACK_IMPORTED_MODULE_0__.defaultProject.allItems)

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every(element => {
        if (element.name === currentProject) {
            let counter = 0;
            element.allItems.forEach( element => {
                if (element.id === itemId) {
                    for (const key in element) {
                        delete element[key];
                    }
                    element.allItems.splice(counter,1)
                }
                counter++
            })
            // for (let i = 0; i < element.allItems.length; i++) {
            //     if (element.allItems[i].id === itemId) {
            //         console.log("element.allItems",element.allItems)
            //         for (const key in element.allItems[i]) {
            //             delete element.allItems[i][key];
            //         }
            //         delete element.allItems[i]
            //         // element.allItems[i].splice(i,1)
            //         console.log("element.allItems",element.allItems)
                    
            //     }
            // }
            return false
        }
        return true
    })

    taskDel.parentElement.parentElement.remove()


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
    if (form.elements[2].checked == true) {
        elementPriority = form.elements[2].value
    } else if (form.elements[3].checked == true) {
        elementPriority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        elementPriority = form.elements[4].value
    }
    let elementTitle = form.elements[0].value
    let elementDueDate = form.elements[1].value
    let elementDescription = form.elements[5].value
    let elementNotes
    let elementChecked
    
    if (elementDueDate.length > 5) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"

    let projectToPass;
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name == currentProject) {
            projectToPass = element
            return false
        }
        return true
    })
    console.log("projectToPass",projectToPass)
    
    let element = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createToDoItem)(
        elementTitle, 
        elementDescription, 
        elementDueDate,
        elementPriority,
        elementNotes,
        elementChecked,
        projectToPass)

        console.log("dateValue",element.dateValue)
    form.parentElement.remove()
    renderTaskToDom(element)
}

// Changes the objects data to the provided addEditTaskListeners()
function submitTaskChanges(form, element, taskItem) {

    console.log(form.elements)
    
    element.title = form.elements[0].value
    let elementDueDate = form.elements[1].value

    //format date
    if (elementDueDate.length == 10) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"
    console.log("elementDueDate",elementDueDate)
    element.dueDate = elementDueDate
    
    if (form.elements[2].checked == true) {
        element.priority = form.elements[2].value
    } else if (form.elements[3].checked == true) {
        element.priority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        element.priority = form.elements[4].value
    }
    element.description = form.elements[5].value

    let passInto = document.querySelectorAll(".example-task-wrapper");
    // passing zero because the element pass the current project id
    // probably wont work when updated to house inbox tasks
    updateRenderProjectTasks(taskItem)
    form.parentElement.remove()
}

// Renders default project tasks on the DOM
function startupRenderProjectTasks() {

    if (document.getElementById("tasks-list").firstChild == null) {
        
        console.log("firstChild Null")
        _index__WEBPACK_IMPORTED_MODULE_0__.defaultProject.allItems.forEach(element => {

            //Render the items data to the div
            renderTaskToDom(element)
        
        })
    }
}

// Renders the current libraries to the projects on the sidebar in the DOM
function startupLibrarySidebarRenderer() {

    let projectDefault = document.createElement("div")
    projectDefault.textContent = _index__WEBPACK_IMPORTED_MODULE_0__.defaultProject.title
    projectDefault.classList.add("project")
    projectDefault.id = _index__WEBPACK_IMPORTED_MODULE_0__.defaultProject.name
    projectDefault.addEventListener("click", () => {
        updateRenderProjectTasks(projectDefault)
    })
    document.getElementById("projects-list").appendChild(projectDefault)
    console.log("currentProject",projectDefault)
    currentProject = projectDefault.id

    document.getElementById(projectDefault.id).classList.add("project-current")

    console.log("currentProject",currentProject)
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
                console.log("user proto",Object.getPrototypeOf(_index__WEBPACK_IMPORTED_MODULE_0__.user))

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
        addProject.parentElement.append(project)
        project.id = projectHolder.name
        project.textContent = projectHolder.title
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects)
        console.log("project to pass",project)

        document.getElementById("div-hidden").remove()

        project.addEventListener("click", () => {
            updateRenderProjectTasks(project)
        })

    } else {
        let span = document.createElement("span")
        span.textContent = "Please input a name."
        document.getElementById("new-project-label").appendChild(span)
    }
}

// Update the task renderer based on the selected Projects
function updateRenderProjectTasks(projectNode) {

    console.log("entered renderProjectTasks ",projectNode)

    // If already in the project don't rerender
    if (currentProject == projectNode.id) return

    // Set the background color
    document.querySelector(".project-current").classList.remove("project-current")
    document.getElementById(projectNode.id).classList.add("project-current")

    // Set current working project
    currentProject = projectNode.id

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        if(element.name === projectNode.id) {
            
            document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})

            // let projectHolder = document.getElementById("tasks-list")
            console.log("entering forEach ",element)
            element.allItems.forEach(element => {
                console.log("entered forEach ",projectNode.textContent)

                renderTaskToDom(element)

            })
        }
    })

}

//#region ---- Sidebar Logic and Rendering ----
document.getElementById("inbox").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    inboxTasksRender()
})
function inboxTasksRender() {
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            renderTaskToDom(element)
        })
    })
}

document.getElementById("today").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    todayTaskRenderer()
})

function todayTaskRenderer() {
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate === "16.July.2022") renderTaskToDom(element)
        })
    })
}

document.getElementById("this-week").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    weekTaskRenderer()
})

function weekTaskRenderer() {
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate.slice(3,7) === "July") renderTaskToDom(element)
        })
    })
}

document.getElementById("this-month").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    monthTaskRenderer()
})

function monthTaskRenderer() {
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate.slice(3,7) === "July") renderTaskToDom(element)
        })
    })
}
//#endregion

// Adds the Sort by list on click listener
let orderByNode = document.getElementById("sort-by")
orderByNode.addEventListener("click", () => {
        
    if (document.getElementById("dropdown").style.visibility == "unset"){
        document.getElementById("dropdown").style.visibility = "hidden"
    } else {
        document.getElementById("dropdown").style.visibility = "unset"
    }

})

// Hides the Sort by list from the DOM
window.onclick = function(event) {
    if (!event.target.matches('#sort-by')) {
        document.getElementById("dropdown").style.visibility = "hidden"
    }
  }

// Sorts the current Project tasks by priority
document.getElementById("sort-priority").addEventListener("click", function() {
    sortByPriority() 
})
function sortByPriority() {

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name === currentProject) {
            element.allItems.forEach(element => {
                if (element.priority === "Urgent Priority") renderTaskToDom(element)
            })
            return false
        }
        return true
    })
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name === currentProject) {
            element.allItems.forEach(element => {
                if (element.priority === "Regular Priority") renderTaskToDom(element)
            })
            return false
        }
        return true
    })
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name === currentProject) {
            element.allItems.forEach(element => {
                if (element.priority === "Low Priority") renderTaskToDom(element)
            })
            return false
        }
        return true
    })


}

// Sorts the current tasks by date
document.getElementById("sort-date").addEventListener("click", function(event) {
    sortByDate(event)
})
function sortByDate(event) {

    let orderedDates = [];

    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name == currentProject) {
            element.allItems.forEach(element => {
                orderedDates.push([element.dateValue, element.id])
                console.log("element.dueDate:",element.id)
                console.log("element.dateValue:",element.dateValue)
            })
            return false
        }
        return true
    })
    orderedDates.sort()
    console.log("orderedDates:",orderedDates)

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    if (event.srcElement.classList.contains("closer-to-farther")){
        event.srcElement.classList.remove("closer-to-farther")
        event.srcElement.classList.add("farther-to-closer")
        event.srcElement.innerText = "Due Date: Ascending"
        orderedDates.reverse()
    } else {
        event.srcElement.classList.remove("farther-to-closer")
        event.srcElement.classList.add("closer-to-farther")
        event.srcElement.innerText = "Due Date: Descending"
    }


    _index__WEBPACK_IMPORTED_MODULE_0__.toDoParent.allProjects.every( element => {
        if (element.name == currentProject) {
            do {
                element.allItems.every(element => {
                    if (element.id == orderedDates[0][1]) {
                        console.log("item[1]", orderedDates[0][1])
                        renderTaskToDom(element)
                        orderedDates.shift()
                        return false
                    }
                    return true
                })
            } while (orderedDates.length != 0)
        }
        return true
    })    




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
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "toDoParent": () => (/* binding */ toDoParent),
/* harmony export */   "user": () => (/* binding */ user)
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

console.log("-----------------------")

const defaultProject = new createProject("Default_Project")  

//#region ---- Default_Project Task Object data insertion ----
let user = createToDoItem("Solve the quantum paradigm","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Urgent Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Pick up Money","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","17.07.2022.","Urgent Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Figure the Almond Principle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","16.07.2022.","Low Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Compute the Pi figure number","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","13.09.2022.","Regular Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Continue the disillusion of the delusion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","05.07.2022.","Urgent Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","06.07.2022.","Low Priority","notes for todo item","Unchecked",defaultProject);

//#endregion


console.log("user proto",Object.getPrototypeOf(user))

// console.log(Object.getPrototypeOf(user))
// Object.setPrototypeOf(user, toDoParent);
// console.log(toDoParent.isPrototypeOf(user))
// console.log(typeof user)
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getOwnPropertyNames(toDoParent).filter(item => typeof toDoParent[item] === 'function'))

user.summary()
console.log(user)
console.log("defaultProject's items:",defaultProject.allItems)
console.log("toDoParent's projects:",toDoParent.allProjects)

;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.startupRenderProjectTasks)()
;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.startupLibrarySidebarRenderer)()
;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.addTaskInterface)()
;(0,_DOMManipulation__WEBPACK_IMPORTED_MODULE_0__.addNewProject)()







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxX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YTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5RjtBQUNyRDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlDQUF5QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2Q0FBNkM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlDQUFpQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywwREFBc0I7QUFDL0QsSUFBSSxnRUFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBeUI7QUFDekIsZ0ZBQTZCO0FBQzdCLG1FQUFnQjtBQUNoQixnRUFBYTtBQUNiO0FBQzBFO0FBQzFFO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9zcmMvc3R5bGVzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9zdHlsZXNoZWV0LmNzcz9kNzRkIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9ET01NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBmb3IgRmlyZWZveCAqL1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IFxcclxcbiAgfVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7ICovXFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxMHZoIDkwdmggLyAxN3Z3IDgzdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAxO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItY29udGVudHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNpbmJveCwgI3RvZGF5LCAjdGhpcy13ZWVrLCAjdGhpcy1tb250aCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNpbmJveDpob3ZlciwgI3RvZGF5OmhvdmVyLCAjdGhpcy13ZWVrOmhvdmVyLCAjdGhpcy1tb250aDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzhlZmY1ZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94OmFjdGl2ZSwgI3RvZGF5OmFjdGl2ZSwgI3RoaXMtd2VlazphY3RpdmUsICN0aGlzLW1vbnRoOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQyLCAyNTApO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGhlaWdodDogMjB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jdXJyZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDE1ZnIgLyAxMGZyIGF1dG87XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI0MiwgMjUwKTtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuM3JlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3NvcnQtYnkge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNkcm9wZG93biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICByaWdodDogNXJlbTtcXHJcXG4gICAgdG9wOiA1LjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ5LW9wdGlvbnMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Qge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB3aWR0aDogMTdyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWF4LWhlaWdodDogMTRyZW07XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHJvdy1nYXA6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm8ge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBhdXRvIDE1ZnIgM2ZyIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAuNXJlbSAuMXJlbSByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkLXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCAxODEsIDMwLCAwLjcwNCk7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IC43cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAxIC8gMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAxIC8gNDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4xcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIHJnYigxMzAsIDEzMCwgMTMwKTtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNSAvIDEgLyA1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYigyMzQsIDE0MiwgNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMTQyLCA0NCwgMC40MzMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDYgLyAxIC8gNjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjA1cmVtIHNvbGlkIHJnYigyNTUsIDgwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4MCwgODAsIDAuNDg1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4wMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDk5LjUlO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNkaXYtaGlkZGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3ODA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWRpdiB7XFxyXFxuICAgIHdpZHRoOiAzMyU7XFxyXFxuICAgIGhlaWdodDogMzMlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMzByZW07XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNkYXRlLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4tZXJyb3ItdGFzay10aXRsZS1pbnB1dCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUtaW5wdXQtaW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZS1pbnB1dC1pbnZhbGlkOnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjc3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0IHtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufSAqL1xcclxcblxcclxcbmZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDU2LCAxNTIsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDVyZW0gcmdiKDU3LCAxNTksIDI1NSk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWRpdiA+IGlucHV0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTgyLCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4xcmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYmFjay1kaXYge1xcclxcbiAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSBncmF5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtdGV4dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAgNzAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1sYWJlbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1sYWJlbCA+IHNwYW4ge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0OmZvY3VzLCAjbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYig1NiwgMTUyLCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjNyZW0gLjFyZW0gcmdiKDU3LCAxNTksIDI1NSk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDMgLyAyO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWYwMDtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyAzIC8gMztcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjY2FuY2VsLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMTB2aCA5MHZoIC8gMTV2dyA4NXZ3O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDI1NjBweCkge1xcclxcbiAgICAuZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICNjb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDEwdmggOTB2aCAvIDEydncgODh2dztcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0JBQXdCLEVBQUUsZ0NBQWdDO0lBQzFELHFCQUFxQixFQUFFLGdCQUFnQjtJQUN2QyxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxhQUFhLEVBQUUsa0NBQWtDO0VBQ25EOztBQUVGO0lBQ0ksNkJBQTZCO0FBQ2pD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Q3BCLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIGZvciBJbnRlcm5ldCBFeHBsb3JlciwgRWRnZSAqL1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIGZvciBGaXJlZm94ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgXFxyXFxuICB9XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcclxcbiAgfVxcclxcblxcclxcbioge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwdmggOTB2aCAvIDE3dncgODN2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDE7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1jb250ZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94LCAjdG9kYXksICN0aGlzLXdlZWssICN0aGlzLW1vbnRoIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2luYm94OmhvdmVyLCAjdG9kYXk6aG92ZXIsICN0aGlzLXdlZWs6aG92ZXIsICN0aGlzLW1vbnRoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGVmZjVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5ib3g6YWN0aXZlLCAjdG9kYXk6YWN0aXZlLCAjdGhpcy13ZWVrOmFjdGl2ZSwgI3RoaXMtbW9udGg6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNDIsIDI1MCk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWN1cnJlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZWZmNWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMTVmciAvIDEwZnIgYXV0bztcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAyIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQyLCAyNTApO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4zcmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc29ydC1ieSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Ryb3Bkb3duIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHJpZ2h0OiA1cmVtO1xcclxcbiAgICB0b3A6IDUuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnktb3B0aW9ucyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtbGlzdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiAudGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIHdpZHRoOiAxN3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIGF1dG8gMTVmciAzZnIgYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGNvbHVtbi1nYXA6IC4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZS10YXNrLWluZm86aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLXRhc2staW5mbzphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIC41cmVtIC4xcmVtIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGUtdGFzay1pbmZvOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQtdGFzayB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzAsIDE4MSwgMzAsIDAuNzA0KTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjdyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDEgLyAzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDEgLyA0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IC4xcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgcmdiKDEzMCwgMTMwLCAxMzApO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRhc2sge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyA1IC8gMSAvIDU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDIzNCwgMTQyLCA0NCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAxNDIsIDQ0LCAwLjQzMyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10YXNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNiAvIDEgLyA2O1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAuMDVyZW0gc29saWQgcmdiKDI1NSwgODAsIDgwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDgwLCA4MCwgMC40ODUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHk6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjAyNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWFjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogOTkuNSU7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpdi1oaWRkZW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc4MDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tZGl2IHtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgaGVpZ2h0OiAzMyU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jc3Bhbi1lcnJvci10YXNrLXRpdGxlLWlucHV0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZS1pbnB1dC1pbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAuMXJlbSByZWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlLWlucHV0LWludmFsaWQ6dmFsaWQge1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjVyZW0gLjFyZW0gZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi8qICNzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXQge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuZm9ybSA+IGxhYmVsIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2IoNTYsIDE1MiwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC4xcmVtIC4wNXJlbSByZ2IoNTcsIDE1OSwgMjU1KTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2ID4gaW5wdXQge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxODIsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQ6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgLjFyZW0gLjFyZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNiYWNrLWRpdiB7XFxyXFxuICAgIGhlaWdodDogMjUlO1xcclxcbiAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIC41cmVtIC4xcmVtIGdyYXk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC10ZXh0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6ICA3MDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWxhYmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWxhYmVsID4gc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogLjJyZW07XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctcHJvamVjdC1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQ6Zm9jdXMsICNuZXctcHJvamVjdC1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgcmdiKDU2LCAxNTIsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAuM3JlbSAuMXJlbSByZ2IoNTcsIDE1OSwgMjU1KTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IHRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gMyAvIDI7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5ZjAwO1xcclxcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMiAvIDMgLyAzO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdC1idXR0b246aG92ZXIsICNjYW5jZWwtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxMHZoIDkwdmggLyAxNXZ3IDg1dnc7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxyXFxuICAgIC5leGFtcGxlLXRhc2std3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMTB2aCA5MHZoIC8gMTJ2dyA4OHZ3O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RvUGFyZW50LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb0RvSXRlbSwgZGVmYXVsdFByb2plY3QsIHVzZXIgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgZ2V0RGF5IGZyb20gJ2RhdGUtZm5zL2dldERheSdcclxuXHJcbmxldCBjdXJyZW50UHJvamVjdDtcclxubGV0IGN1cnJlbnRWaWV3O1xyXG5cclxuLy8gQ3JlYXRlcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2sgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIERPTSB1bmRlciB0aGUgdGFza1xyXG5mdW5jdGlvbiBleHBhbmRUYXNrRGVzY3JpcHRpb25MaXN0ZW5lcnMoZWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50KSB7XHJcblxyXG4gICAgbGV0IGFwcGVuZEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgaWYgKGFwcGVuZEVsZW1lbnQuY2hpbGROb2Rlc1sxXSA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2sgYWN0aW9uIGJ1dHRvbnNcclxuICAgICAgICBsZXQgdGFza0FjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgdGFza0FjdGlvbnMuY2xhc3NMaXN0LmFkZChcInRhc2stYWN0aW9uc1wiKVxyXG4gICAgICAgIGFwcGVuZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0FjdGlvbnMpXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBEZXNjcmlwdGlvbiBUaXRsZVxyXG4gICAgICAgIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tdGl0bGVcIilcclxuICAgICAgICB0YXNrRGVzYy5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOlwiXHJcbiAgICAgICAgdGFza0FjdGlvbnMuYXBwZW5kQ2hpbGQodGFza0Rlc2MpXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBEZXNjcmlwdGlvblxyXG4gICAgICAgIHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxyXG4gICAgICAgIHRhc2tEZXNjLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uRWxlbWVudFxyXG4gICAgICAgIHRhc2tBY3Rpb25zLmFwcGVuZENoaWxkKHRhc2tEZXNjKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBwZW5kRWxlbWVudC5jaGlsZE5vZGVzWzFdLnJlbW92ZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgdGhlIHRhc2sgb24gdGhlIERPTSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgdG9Eb0l0ZW1cclxuZnVuY3Rpb24gcmVuZGVyVGFza1RvRG9tIChlbGVtZW50KSB7XHJcblxyXG4gICAgLy9SZW5kZXIgdGhlIGl0ZW1zIHRhc2sgZGF0YSB0byB0aGUgZGl2XHJcblxyXG4gICAgbGV0IGFwcGVuZFRoZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIilcclxuICAgIC8vQ3JlYXRlIHRoZSB0YXNrIHdyYXBwZXJcclxuICAgIGxldCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2std3JhcHBlclwiKVxyXG4gICAgdGFza1dyYXBwZXIuaWQgPSBlbGVtZW50Lm5hbWVcclxuICAgIGFwcGVuZFRoZVRhc2suYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpXHJcbiAgICAvL0NyZWF0ZSB0YXNrIGluZm9cclxuICAgIGxldCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRhc2staW5mb1wiKVxyXG4gICAgdGFza0luZm8uaWQgPSBlbGVtZW50LmlkXHJcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrSW5mbylcclxuXHJcbiAgICAvLyAtLS0tIENyZWF0ZSB0aGUgdGFzayBpbmZvIHN0cnVjdHVyZSBhbmQgZGF0YSAtLS0tXHJcblxyXG4gICAgLy8gQ3JlYXRlIGNoZWNrIHRhc2sgYnV0dG9uXHJcbiAgICBsZXQgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gXCJVbmNoZWNrZWRcIikgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVjay10YXNrXCIpXHJcbiAgICBlbHNlIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC10YXNrXCIpXHJcbiAgICB0YXNrQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZUNoZWNrVGFzayh0YXNrQ2hlY2spXHJcbiAgICB9KVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0NoZWNrLCBlbGVtZW50LmRlc2NyaXB0aW9uKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aXRsZVxyXG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcblxyXG4gICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGV4cGFuZFRhc2tEZXNjcmlwdGlvbkxpc3RlbmVycyh0YXNrVGl0bGUsIGVsZW1lbnQuZGVzY3JpcHRpb24pXHJcbiAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgLy9DcmVhdGUgRGF0ZVxyXG4gICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpXHJcbiAgICBpZiAoZWxlbWVudC5kdWVEYXRlICE9IFwiTm8gRHVlIERhdGVcIikge1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gcmVmb3JtYXREYXRlKGVsZW1lbnQuZHVlRGF0ZSwgXCJkYXlcIilcclxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCArPSByZWZvcm1hdERhdGUoZWxlbWVudC5kdWVEYXRlLCBcImRkLm1vbnRoLnl5eXkuXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlXHJcbiAgICB9XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcclxuXHJcbiAgICAvLyBDcmVhdGUgdGFzayBwcmlvcml0eVxyXG4gICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHlcIilcclxuICAgIHRhc2tJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eVxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gXCJVcmdlbnQgUHJpb3JpdHlcIikge1xyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmJvcmRlciA9IFwiLjA1cmVtIHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5jb2xvciA9IFwicmVkXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIlxyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09IFwiUmVndWxhciBQcmlvcml0eVwiKSB7XHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuYm9yZGVyID0gXCIuMDVyZW0gc29saWQgcmdiKDEwMCwgMTAwLCAxMDApXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIlxyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjQwMFwiXHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gXCJMb3cgUHJpb3JpdHlcIikge1xyXG4gICAgICAgIHRhc2tJdGVtLnN0eWxlLmJvcmRlciA9IFwiLjA1cmVtIHNvbGlkIHJnYig3MywgMTkwLCAwKVwiXHJcbiAgICAgICAgdGFza0l0ZW0uc3R5bGUuY29sb3IgPSBcImdyZWVuXCJcclxuICAgICAgICB0YXNrSXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gXCI0MDBcIlxyXG4gICAgfVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0l0ZW0pXHJcblxyXG4gICAgLy8gQ3JlYXRlIGVkaXQgdGFzayBidXR0b25cclxuICAgIGxldCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2tcIilcclxuICAgIHRhc2tFZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgIHRhc2tFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBhZGRFZGl0VGFza0xpc3RlbmVycyh0YXNrRWRpdCwgZWxlbWVudClcclxuICAgIH0pXHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRWRpdClcclxuXHJcbiAgICAvLyBDcmVhdGUgZGVsZXRlIHRhc2sgYnV0dG9uXHJcbiAgICBsZXQgdGFza0lEZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSURlbC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIilcclxuICAgIHRhc2tJRGVsLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxyXG4gICAgdGFza0lEZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRlbGV0ZVRhc2sodGFza0lEZWwpXHJcbiAgICB9KVxyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0lEZWwpXHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgdGhlIGFkZCBhIHRhc2tzIGludGVyZmFjZSBhbiBwYXNzZXMgdGhlIGlucHV0dGVkIGRhdGEgdG8gc3VibWl0QWRkTmV3VGFzaygpXHJcbmZ1bmN0aW9uIGFkZFRhc2tJbnRlcmZhY2UoKSB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKVxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGRpdkhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRpdkhpZGRlbi5pZCA9IFwiZGl2LWhpZGRlblwiXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkhpZGRlbilcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBsZXQgY2xvc2VFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY2xvc2VFZGl0LmlkID0gXCJjYW5jZWwtYnV0dG9uXCJcclxuICAgIGNsb3NlRWRpdC50ZXh0Q29udGVudCA9IFwiIENhbmNlbCBcIlxyXG4gICAgY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VFZGl0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VFZGl0KVxyXG5cclxuICAgIGxldCBhZGQ1dGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBhZGQ1dGFza3MuaWQgPSBcImFkZC01LXRhc2tzXCJcclxuICAgIGFkZDV0YXNrcy50ZXh0Q29udGVudCA9IFwiIEFkZCA1IGZpbGxlciB0YXNrcyBcIlxyXG4gICAgYWRkNXRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0YXNrc0luaXRpYWxFdmVudEFkZGVyKClcclxuICAgIH0pXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZDV0YXNrcylcclxuXHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcInRpdGxlXCJcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiXHJcbiAgICBsYWJlbC5pZCA9IFwibGFiZWwtdGFzay10aXRsZS1pbnB1dFwiXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcInRpdGxlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIlxyXG4gICAgaW5wdXQuaWQgPSBcInRhc2stdGl0bGUtaW5wdXRcIlxyXG4gICAgaW5wdXQubWluTGVuZ3RoID0gXCIxXCJcclxuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIlxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dC5pZCA9IFwiZGF0ZS1pbnB1dFwiXHJcbiAgICBpbnB1dC5uYW1lID0gXCJkYXRlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcImRhdGVcIlxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJTZXQgUHJpb3JpdHk6IFwiXHJcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGlucHV0LmlkID0gXCJwcmlvcml0eS1kaXZcIlxyXG5cclxuICAgIC8vIFJhZGlvIGNob2ljZXNcclxuICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcImxvdy1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiTG93IFByaW9yaXR5XCJcclxuICAgIGxldCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcImxvdy1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIlxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW8pXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxyXG5cclxuICAgIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwicmVndWxhci1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiUmVndWxhciBQcmlvcml0eVwiXHJcbiAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwicmVndWxhci1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcInVyZ2VudC1wcmlvcml0eVwiXHJcbiAgICByYWRpby52YWx1ZSA9IFwiVXJnZW50IFByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwidXJnZW50LXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VudCBQcmlvcml0eVwiXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiZGVzY3JpcHRpb25cIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgRGVzY3JpcHRpb25cIlxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCJcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNzBcIilcclxuICAgIGlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSAnT3BlbiBTYW5zJ1xyXG4gICAgaW5wdXQuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIlxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwiZm9ybS1zdWJtaXRcIlxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzdWJtaXROZXdUYXNrIChmb3JtKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIGRpdkhpZGRlbi5hcHBlbmRDaGlsZChmb3JtKVxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIFJlZG9ybWF0ZXMgdGhlIGRhdGVzIGJhc2VkIG9uIHRoZSBkZXNpcmVkIG91dHB1dFxyXG5mdW5jdGlvbiByZWZvcm1hdERhdGUoaW5wdXQsIG91dHB1dEZvcm1hdCkge1xyXG5cclxuICAgIGlmIChpbnB1dCA9PSBcIk5vIER1ZSBEYXRlXCIpIHJldHVybiBcIk5vIER1ZSBEYXRlXCJcclxuICAgIGxldCB5ZWFyO1xyXG4gICAgbGV0IG1vbnRoO1xyXG4gICAgbGV0IGRheTtcclxuXHJcbiAgICBpZiAob3V0cHV0Rm9ybWF0ID09IFwiZGQubW0ueXl5eS5cIikgeyAvLyBpbnB1dCBmb3JtYXQ6IHl5eXktbW0tZGRcclxuICAgICAgICAvL2Zvcm1hdCBkYXRlIGZyb20gaHRtbCBkYXRlIGVsZW1lbnQgdG8gb2JqZWN0IGZvcm1hdFxyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zbGljZSgwLDQpXHJcbiAgICAgICAgbW9udGggPSBpbnB1dC5zbGljZSg1LCA3KVxyXG4gICAgICAgIGRheSA9IGlucHV0LnN1YnN0cigtMilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlucHV0OiB5eXl5LW1tLWRkIG91dHB1dDpcIixkYXkgKyBcIi5cIiArIG1vbnRoICsgXCIuXCIgKyB5ZWFyICsgXCIuXCIpXHJcbiAgICAgICAgcmV0dXJuIGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXIgKyBcIi5cIlxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChvdXRwdXRGb3JtYXQgPT0gXCJ5eXl5LW1tLWRkXCIpIHsgLy8gaW5wdXQgZm9ybWF0OiBkZC5tb250aC55eXl5LlxyXG4gICAgICAgIC8vZm9ybWF0IGRhdGUgZnJvbSBPYmplY3QgZGF0ZSB0byBodG1sIGRhdGUgZWxlbWVudCBmb3JtYXRcclxuICAgICAgICB5ZWFyID0gaW5wdXQuc3Vic3RyKC01KVxyXG4gICAgICAgIHllYXIgPSB5ZWFyLnNsaWNlKDAsNClcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDMsIDUpXHJcbiAgICAgICAgZGF5ID0gaW5wdXQuc2xpY2UoMCwgMilcclxuICAgICAgICBpbnB1dCA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXlcclxuICAgICAgICByZXR1cm4gKGlucHV0KVxyXG5cclxuICAgIH0gZWxzZSBpZiAob3V0cHV0Rm9ybWF0ID09IFwiZGQubW9udGgueXl5eS5cIikgeyAvLyBpbnB1dCBmb3JtYXQgZGQubW0ueXl5eS5cclxuICAgICAgICAvLyBmb3JtYXQgZGF0ZSBmcm9tIE9iamVjdCBkYXRlIHRvIHJlbmRlciBmb3JtYXQgZm9yIERPTVxyXG4gICAgICAgIGRheSA9IGlucHV0LnNsaWNlKDAsIDIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXlcIixkYXkpXHJcbiAgICAgICAgeWVhciA9IGlucHV0LnN1YnN0cigtNSlcclxuICAgICAgICB5ZWFyID0geWVhci5zbGljZSgwLDQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5ZWFyXCIseWVhcilcclxuICAgICAgICBtb250aCA9IGlucHV0LnNsaWNlKDMsIDUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb250aFwiLG1vbnRoKVxyXG4gICAgICAgIGlmIChtb250aCA9PSBcIjAxXCIpIG1vbnRoID0gXCJKYW51YXJ5XCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjAyXCIpIG1vbnRoID0gXCJGZWJydWFyeVwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwM1wiKSBtb250aCA9IFwiTWFyY2hcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDRcIikgbW9udGggPSBcIkFwcmlsXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjA1XCIpIG1vbnRoID0gXCJNYXlcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDZcIikgbW9udGggPSBcIkp1bmVcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDdcIikgbW9udGggPSBcIkp1bHlcIlxyXG4gICAgICAgIGVsc2UgaWYgKG1vbnRoID09IFwiMDhcIikgbW9udGggPSBcIkF1Z3VzdFwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIwOVwiKSBtb250aCA9IFwiU2VwdGVtYmVyXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjEwXCIpIG1vbnRoID0gXCJPY3RvYmVyXCJcclxuICAgICAgICBlbHNlIGlmIChtb250aCA9PSBcIjExXCIpIG1vbnRoID0gXCJOb3ZlbWJlclwiXHJcbiAgICAgICAgZWxzZSBpZiAobW9udGggPT0gXCIxMlwiKSBtb250aCA9IFwiRGVjZW1iZXJcIlxyXG4gICAgICAgIC8vI3JlZ2lvbiAtLS0tIG1tIHRvIG1vbnRoIGZvcm1hdHRlclxyXG4gICAgICAgIC8vIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiSmFuXCIpIGlucHV0LnJlcGxhY2UoXCJKYW51YXJ5XCIsIFwiMDFcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiRmViXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkZlYnJ1YXJ5XCIsIFwiMDJcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiTWFyXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk1hcmNoXCIsIFwiMDNcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiQXByXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkFwcmlsXCIsIFwiMDRcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiTWF5XCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk1heVwiLCBcIjA1XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIkp1blwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJKdW5lXCIsIFwiMDZcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiSnVsXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkp1bHlcIiwgXCIwN1wiKVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGlucHV0LnNsaWNlKDMsNikgPT0gXCJBdWdcIikgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiQXVndXN0XCIsIFwiMDhcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiU2VwXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIlNlcHRlbWJlclwiLCBcIjA5XCIpXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoaW5wdXQuc2xpY2UoMyw2KSA9PSBcIk9jdFwiKSBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCJPY3RvYmVyXCIsIFwiMTBcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiTm92XCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIk5vdmVtYmVyXCIsIFwiMTFcIilcclxuICAgICAgICAvLyBlbHNlIGlmIChpbnB1dC5zbGljZSgzLDYpID09IFwiRGVjXCIpIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIkRlY2VtYmVyXCIsIFwiMTJcIilcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgcmV0dXJuIGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXIgKyBcIi5cIlxyXG5cclxuICAgIH0gZWxzZSBpZiAob3V0cHV0Rm9ybWF0ID0gXCJkYXlcIikgeyAvLyBpbnB1dCBmb3JtYXQgZGQubW0ueXl5eS5cclxuICAgICAgICAvLyBmb3JtYXQgZGF0ZSBmcm9tIE9iamVjdCBkYXRlIHRvIHJlbmRlciBkYXkgdG8gdGhlIERPTSB3aXRoIGRhdGUtZm5zIG1vZHVsZVxyXG4gICAgICAgIHllYXIgPSBpbnB1dC5zdWJzdHIoLTUpXHJcbiAgICAgICAgeWVhciA9IHllYXIuc2xpY2UoMCw0KVxyXG4gICAgICAgIG1vbnRoID0gaW5wdXQuc2xpY2UoMywgNSlcclxuICAgICAgICBkYXkgPSBpbnB1dC5zbGljZSgwLCAyKVxyXG5cclxuICAgICAgICBpbnB1dCA9IHllYXIgKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyBkYXlcclxuICAgICAgICBpbnB1dCA9IGdldERheShuZXcgRGF0ZShpbnB1dCkpXHJcblxyXG4gICAgICAgIGlmIChpbnB1dCA9PSBcIjBcIikgaW5wdXQgPSBcIlN1bmRheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjFcIikgaW5wdXQgPSBcIk1vbmRheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjJcIikgaW5wdXQgPSBcIlRodXJzZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiM1wiKSBpbnB1dCA9IFwiV2VkbmVzZGF5LCBcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0ID09IFwiNFwiKSBpbnB1dCA9IFwiVHVlc2RheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjVcIikgaW5wdXQgPSBcIkZyaWRheSwgXCJcclxuICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBcIjZcIikgaW5wdXQgPSBcIlNhdHVyZGF5LCBcIlxyXG4gICAgICAgIHJldHVybiAoaW5wdXQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBDcmVhdGVzIHRoZSBlZGl0IGEgdGFzayBpbnRlcmZhY2Ugb24gdGhlIHByb3ZpZGVkIGVsZW1lbnRcclxuZnVuY3Rpb24gYWRkRWRpdFRhc2tMaXN0ZW5lcnModGFza0l0ZW0sIGVsZW1lbnQpIHtcclxuXHJcbiAgICBsZXQgZGl2SGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZGl2SGlkZGVuLmlkID0gXCJkaXYtaGlkZGVuXCJcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2SGlkZGVuKVxyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICAgIGxldCBjbG9zZUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjbG9zZUVkaXQuaWQgPSBcImNhbmNlbC1idXR0b25cIlxyXG4gICAgY2xvc2VFZGl0LnRleHRDb250ZW50ID0gXCIgQ2FuY2VsIFwiXHJcbiAgICBjbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjbG9zZUVkaXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUVkaXQpXHJcblxyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJ0aXRsZVwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBUaXRsZVwiXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0Lm5hbWUgPSBcInRpdGxlXCJcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIlxyXG4gICAgaW5wdXQudmFsdWUgPSBlbGVtZW50LnRpdGxlXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwuaHRtbEZvciA9IFwiZGF0ZVwiXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIERhdGVcIlxyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGlucHV0LmlkID0gXCJkYXRlLWlucHV0XCJcclxuICAgIGlucHV0Lm5hbWUgPSBcImRhdGVcIlxyXG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiXHJcbiAgICBpbnB1dC52YWx1ZSA9IHJlZm9ybWF0RGF0ZShlbGVtZW50LmR1ZURhdGUsXCJ5eXl5LW1tLWRkXCIpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYW5nZSBQcmlvcml0eTogXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaW5wdXQuaWQgPSBcInByaW9yaXR5LWRpdlwiXHJcblxyXG4gICAgLy8gUmFkaW8gY2hvaWNlc1xyXG4gICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByYWRpby50eXBlID0gXCJyYWRpb1wiXHJcbiAgICByYWRpby5uYW1lID0gXCJwcmlvcml0eS1yYWRpb1wiXHJcbiAgICByYWRpby5pZCA9IFwibG93LXByaW9yaXR5XCJcclxuICAgIHJhZGlvLnZhbHVlID0gXCJMb3cgUHJpb3JpdHlcIlxyXG4gICAgbGV0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHJhZGlvTGFiZWwuaHRtbEZvciA9IFwibG93LXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvdyBQcmlvcml0eVwiXHJcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PSByYWRpby52YWx1ZSkgcmFkaW8uY2hlY2tlZCA9IHRydWVcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvKVxyXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbClcclxuXHJcbiAgICByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgcmFkaW8ubmFtZSA9IFwicHJpb3JpdHktcmFkaW9cIlxyXG4gICAgcmFkaW8uaWQgPSBcInJlZ3VsYXItcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgcmFkaW9MYWJlbC5odG1sRm9yID0gXCJyZWd1bGFyLXByaW9yaXR5XCJcclxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gcmFkaW8udmFsdWUpIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIHJhZGlvLm5hbWUgPSBcInByaW9yaXR5LXJhZGlvXCJcclxuICAgIHJhZGlvLmlkID0gXCJ1cmdlbnQtcHJpb3JpdHlcIlxyXG4gICAgcmFkaW8udmFsdWUgPSBcIlVyZ2VudCBQcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICByYWRpb0xhYmVsLmh0bWxGb3IgPSBcInVyZ2VudC1wcmlvcml0eVwiXHJcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbnQgUHJpb3JpdHlcIlxyXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT0gcmFkaW8udmFsdWUpIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChyYWRpbylcclxuICAgIGlucHV0LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiZGVzY3JpcHRpb25cIilcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IERlc2NyaXB0aW9uXCJcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcbiAgICBpbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKVxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjcwXCIpXHJcbiAgICBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gJ09wZW4gU2FucydcclxuICAgIGlucHV0LnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCJcclxuICAgIGlucHV0LnZhbHVlID0gZWxlbWVudC5kZXNjcmlwdGlvblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwiZm9ybS1zdWJtaXRcIlxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gICAgLy8gLS0tLSBzZXQgdGhlIHRhc2tJdGVtIHRvIHBhcmVudCBwYXJlbnQgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgaWQgYW5kIHBhc3MgaXRcclxuICAgIHRhc2tJdGVtID0gdGFza0l0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN1Ym1pdFRhc2tDaGFuZ2VzKGZvcm0sIGVsZW1lbnQsIHRhc2tJdGVtKVxyXG4gICAgfSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIGRpdkhpZGRlbi5hcHBlbmRDaGlsZChmb3JtKVxyXG59XHJcblxyXG4vLyBUb2dnbGVzIGNoZWNrIHRhc2sgc3RhdGVcclxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2tUYXNrKHRhc2tDaGVjaykge1xyXG5cclxuICAgIGxldCBpdGVtSWQgPSB0YXNrQ2hlY2sucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuaWRcclxuICAgIGNvbnNvbGUubG9nKFwiaXRlbUlkOlwiLGl0ZW1JZClcclxuICAgIGNvbnNvbGUubG9nKClcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJ0b0RvUGFyZW50LmFsbFByb2plY3RzXCIsdG9Eb1BhcmVudC5hbGxQcm9qZWN0cylcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5ldmVyeSggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaXRlbUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCA9PSBcIlVuY2hlY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IFwiQ2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2stdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hlY2tlZCA9PSBcIkNoZWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBcIlVuY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC10YXNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2stdGFza1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudC5uYW1lXCIsZWxlbWVudC5uYW1lKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG59IFxyXG5cclxuLy8gRGVsZXRlIGN1cnJlbnQgdGFza1xyXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tEZWwpIHtcclxuXHJcbiAgICBsZXQgaXRlbUlkID0gdGFza0RlbC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQuYWxsSXRlbXNcIixkZWZhdWx0UHJvamVjdC5hbGxJdGVtcylcclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBpdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuc3BsaWNlKGNvdW50ZXIsMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrK1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYWxsSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChlbGVtZW50LmFsbEl0ZW1zW2ldLmlkID09PSBpdGVtSWQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQuYWxsSXRlbXNcIixlbGVtZW50LmFsbEl0ZW1zKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnQuYWxsSXRlbXNbaV0pIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuYWxsSXRlbXNbaV1ba2V5XTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZGVsZXRlIGVsZW1lbnQuYWxsSXRlbXNbaV1cclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBlbGVtZW50LmFsbEl0ZW1zW2ldLnNwbGljZShpLDEpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50LmFsbEl0ZW1zXCIsZWxlbWVudC5hbGxJdGVtcylcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgdGFza0RlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuXHJcblxyXG59XHJcblxyXG4vLyBDaGFuZ2VzIHRoZSBvYmplY3RzIGRhdGEgdG8gdGhlIHByb3ZpZGVkIG9uZXMgZnJvbSBhZGRUYXNrSW50ZXJmYWNlKClcclxuZnVuY3Rpb24gc3VibWl0TmV3VGFzayhmb3JtKSB7XHJcblxyXG4gICAgaWYgKCBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtaW5wdXRcIilcclxuICAgICAgICBsZXQgdGFza0xhYmVsVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLXRhc2stdGl0bGUtaW5wdXRcIilcclxuXHJcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGUtaW5wdXQtaW52YWxpZFwiKVxyXG5cclxuICAgICAgICBsZXQgc3BhbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIHNwYW5JbmZvLmlkID0gXCJzcGFuLWVycm9yLXRhc2stdGl0bGUtaW5wdXRcIlxyXG4gICAgICAgIHNwYW5JbmZvLnRleHRDb250ZW50ID0gXCIqUGxlYXNlIGlucHV0IGEgdGl0bGVcIlxyXG4gICAgICAgIHRhc2tMYWJlbFRpdGxlLmFwcGVuZENoaWxkKHNwYW5JbmZvKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJmb3JtLmVsZW1lbnRzXCIsZm9ybS5lbGVtZW50cylcclxuXHJcbiAgICBsZXQgZWxlbWVudFByaW9yaXR5O1xyXG4gICAgaWYgKGZvcm0uZWxlbWVudHNbMl0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudFByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1syXS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzNdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnRQcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbM10udmFsdWVcclxuICAgIH0gZWxzZSBpZiAoZm9ybS5lbGVtZW50c1s0XS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50UHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzRdLnZhbHVlXHJcbiAgICB9XHJcbiAgICBsZXQgZWxlbWVudFRpdGxlID0gZm9ybS5lbGVtZW50c1swXS52YWx1ZVxyXG4gICAgbGV0IGVsZW1lbnREdWVEYXRlID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZVxyXG4gICAgbGV0IGVsZW1lbnREZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHNbNV0udmFsdWVcclxuICAgIGxldCBlbGVtZW50Tm90ZXNcclxuICAgIGxldCBlbGVtZW50Q2hlY2tlZFxyXG4gICAgXHJcbiAgICBpZiAoZWxlbWVudER1ZURhdGUubGVuZ3RoID4gNSkge1xyXG4gICAgICAgIGVsZW1lbnREdWVEYXRlID0gcmVmb3JtYXREYXRlKGVsZW1lbnREdWVEYXRlLCBcImRkLm1tLnl5eXkuXCIpXHJcbiAgICB9IGVsc2UgZWxlbWVudER1ZURhdGUgPSBcIk5vIER1ZSBEYXRlXCJcclxuXHJcbiAgICBsZXQgcHJvamVjdFRvUGFzcztcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgcHJvamVjdFRvUGFzcyA9IGVsZW1lbnRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJwcm9qZWN0VG9QYXNzXCIscHJvamVjdFRvUGFzcylcclxuICAgIFxyXG4gICAgbGV0IGVsZW1lbnQgPSBjcmVhdGVUb0RvSXRlbShcclxuICAgICAgICBlbGVtZW50VGl0bGUsIFxyXG4gICAgICAgIGVsZW1lbnREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZWxlbWVudER1ZURhdGUsXHJcbiAgICAgICAgZWxlbWVudFByaW9yaXR5LFxyXG4gICAgICAgIGVsZW1lbnROb3RlcyxcclxuICAgICAgICBlbGVtZW50Q2hlY2tlZCxcclxuICAgICAgICBwcm9qZWN0VG9QYXNzKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGVWYWx1ZVwiLGVsZW1lbnQuZGF0ZVZhbHVlKVxyXG4gICAgZm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxufVxyXG5cclxuLy8gQ2hhbmdlcyB0aGUgb2JqZWN0cyBkYXRhIHRvIHRoZSBwcm92aWRlZCBhZGRFZGl0VGFza0xpc3RlbmVycygpXHJcbmZ1bmN0aW9uIHN1Ym1pdFRhc2tDaGFuZ2VzKGZvcm0sIGVsZW1lbnQsIHRhc2tJdGVtKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coZm9ybS5lbGVtZW50cylcclxuICAgIFxyXG4gICAgZWxlbWVudC50aXRsZSA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWVcclxuICAgIGxldCBlbGVtZW50RHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbMV0udmFsdWVcclxuXHJcbiAgICAvL2Zvcm1hdCBkYXRlXHJcbiAgICBpZiAoZWxlbWVudER1ZURhdGUubGVuZ3RoID09IDEwKSB7XHJcbiAgICAgICAgZWxlbWVudER1ZURhdGUgPSByZWZvcm1hdERhdGUoZWxlbWVudER1ZURhdGUsIFwiZGQubW0ueXl5eS5cIilcclxuICAgIH0gZWxzZSBlbGVtZW50RHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIlxyXG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50RHVlRGF0ZVwiLGVsZW1lbnREdWVEYXRlKVxyXG4gICAgZWxlbWVudC5kdWVEYXRlID0gZWxlbWVudER1ZURhdGVcclxuICAgIFxyXG4gICAgaWYgKGZvcm0uZWxlbWVudHNbMl0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZWxlbWVudC5wcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWVcclxuICAgIH0gZWxzZSBpZiAoZm9ybS5lbGVtZW50c1szXS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBlbGVtZW50LnByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1szXS52YWx1ZVxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmVsZW1lbnRzWzRdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVsZW1lbnQucHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWzRdLnZhbHVlXHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1s1XS52YWx1ZVxyXG5cclxuICAgIGxldCBwYXNzSW50byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIik7XHJcbiAgICAvLyBwYXNzaW5nIHplcm8gYmVjYXVzZSB0aGUgZWxlbWVudCBwYXNzIHRoZSBjdXJyZW50IHByb2plY3QgaWRcclxuICAgIC8vIHByb2JhYmx5IHdvbnQgd29yayB3aGVuIHVwZGF0ZWQgdG8gaG91c2UgaW5ib3ggdGFza3NcclxuICAgIHVwZGF0ZVJlbmRlclByb2plY3RUYXNrcyh0YXNrSXRlbSlcclxuICAgIGZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG59XHJcblxyXG4vLyBSZW5kZXJzIGRlZmF1bHQgcHJvamVjdCB0YXNrcyBvbiB0aGUgRE9NXHJcbmZ1bmN0aW9uIHN0YXJ0dXBSZW5kZXJQcm9qZWN0VGFza3MoKSB7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtbGlzdFwiKS5maXJzdENoaWxkID09IG51bGwpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2hpbGQgTnVsbFwiKVxyXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL1JlbmRlciB0aGUgaXRlbXMgZGF0YSB0byB0aGUgZGl2XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJlbmRlcnMgdGhlIGN1cnJlbnQgbGlicmFyaWVzIHRvIHRoZSBwcm9qZWN0cyBvbiB0aGUgc2lkZWJhciBpbiB0aGUgRE9NXHJcbmZ1bmN0aW9uIHN0YXJ0dXBMaWJyYXJ5U2lkZWJhclJlbmRlcmVyKCkge1xyXG5cclxuICAgIGxldCBwcm9qZWN0RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHByb2plY3REZWZhdWx0LnRleHRDb250ZW50ID0gZGVmYXVsdFByb2plY3QudGl0bGVcclxuICAgIHByb2plY3REZWZhdWx0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXHJcbiAgICBwcm9qZWN0RGVmYXVsdC5pZCA9IGRlZmF1bHRQcm9qZWN0Lm5hbWVcclxuICAgIHByb2plY3REZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3REZWZhdWx0KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKS5hcHBlbmRDaGlsZChwcm9qZWN0RGVmYXVsdClcclxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFByb2plY3RcIixwcm9qZWN0RGVmYXVsdClcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdERlZmF1bHQuaWRcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0RGVmYXVsdC5pZCkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3VycmVudFwiKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFByb2plY3RcIixjdXJyZW50UHJvamVjdClcclxufVxyXG5cclxuLy8gUmVuZGVycyBFdmVudHMgZnJvbSB0aGUgcHJvamVjdCB0byB0aGUgRE9NXHJcbmZ1bmN0aW9uIHRhc2tzSW5pdGlhbEV2ZW50QWRkZXIoKSB7XHJcblxyXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIHByb2plY3Qgb2JqZWN0IHVudGlsIGl0cyBmaXJzdCBlbGVtZW50IG5hbWUgbWF0Y2hlcyB0aGUgb25lIG9uIHRoZSBET01cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudFwiLGVsZW1lbnQuYWxsSXRlbXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvamVjdFwiLGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudC5uYW1lXCIsZWxlbWVudC5uYW1lKVxyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gY3VycmVudFByb2plY3QpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPDU7aSsrKXtcclxuICAgICAgICAgICAgICAgIC8vSW5zZXJ0IGRhdGEgZnJvbSBvYmplY3QgdG8gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50Lm5hbWVcIixlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB0YXNrIG9iamVjdCBhbmQgc3VwcGx5IGl0IHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tQbGFjZWhvbGRlciA9IGNyZWF0ZVRvRG9JdGVtKFwiUGljayB1cCBMYXVuZHJ5XCIsXCJJIG5lZWQgdG8gcGljayB1cCBteSBMYXVuZHJ5IGZyb20gdGhlIHdhc2hpbmcgbWFjaGluZSBuZXh0IGlzIHNvbWUgbG9yZW0gaXBzdW06IExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBleHBlZGl0YSBzb2x1dGEgdm9sdXB0YXR1bSBhbGlxdWFtIGV4Y2VwdHVyaSBlbGlnZW5kaS5cIixcIjE3LjA2LjIwMjIuXCIsXCJVcmdlbnQgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLCBlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLy9JbnNlcnQgZGF0YSBmcm9tIG9iamVjdCB0byBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tQbGFjZWhvbGRlclwiLHRhc2tQbGFjZWhvbGRlcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHByb3RvXCIsT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhc2tQbGFjZWhvbGRlcikpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgcHJvdG9cIixPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW5kZXIgdGhlIGl0ZW1zIGRhdGEgdG8gdGhlIGRpdlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRG9tKHRhc2tQbGFjZWhvbGRlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vLyBNYWtlIGEgcmFuZG9tIG5hbWVcclxuZnVuY3Rpb24gbWFrZU5hbWUobGVuZ3RoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBcclxuIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuICAgfVxyXG4gICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYW4gaW50ZXJmYWNlIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBwYXNzIHZhbHVlIHRvIGNyZWF0ZU5ld1Byb2plY3QoKVxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0ICgpIHtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHBvcHVsYXRlIERPTSB3aXRoIHByb2plY3RzXHJcbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIilcclxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+ICB7XHJcblxyXG4gICAgICAgIGxldCBoaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGhpZGVEaXYuaWQgPSBcImRpdi1oaWRkZW5cIlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhpZGVEaXYpXHJcblxyXG4gICAgICAgIGxldCBiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGJhY2tEaXYuaWQgPSBcImJhY2stZGl2XCJcclxuICAgICAgICBoaWRlRGl2LmFwcGVuZChiYWNrRGl2KVxyXG5cclxuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgTmV3IFByb2plY3QgXCJcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjcmVhdGUtcHJvamVjdC10ZXh0XCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgZGl2Q29udGVudC5odG1sRm9yID0gXCJuZXctcHJvamVjdC1sYWJlbFwiXHJcbiAgICAgICAgZGl2Q29udGVudC5pZCA9IFwibmV3LXByb2plY3QtbGFiZWxcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIk5hbWU6XCJcclxuICAgICAgICBkaXZDb250ZW50LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lIFwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgaW5wdXREaXYuaWQgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCJcclxuICAgICAgICBpbnB1dERpdi5uYW1lID0gXCJuZXctcHJvamVjdC1pbnB1dFwiXHJcbiAgICAgICAgaW5wdXREaXYubWluTGVuZ3RoID0gXCIxXCJcclxuICAgICAgICBpbnB1dERpdi5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgTmFtZSBcIlxyXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKGlucHV0RGl2KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRpdkNvbnRlbnQuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LWJ1dHRvblwiXHJcbiAgICAgICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCJcclxuICAgICAgICBiYWNrRGl2LmFwcGVuZChkaXZDb250ZW50KVxyXG5cclxuICAgICAgICBkaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpICB7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkaXZDb250ZW50LmlkID0gXCJjYW5jZWwtcHJvamVjdC1idXR0b25cIlxyXG4gICAgICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmQoZGl2Q29udGVudClcclxuXHJcbiAgICAgICAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1oaWRkZW5cIikucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBhcHBlbmQgaXQgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZSBmcm9tIGFkZE5ld1Byb2plY3QoKVxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIikudmFsdWUpIHtcclxuXHJcbiAgICAgICAgbGV0IHBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWlucHV0XCIpLnZhbHVlXHJcbiAgICAgICAgbGV0IHByb2plY3RIb2xkZXIgPSBjcmVhdGVQcm9qZWN0KHBhc3MpXHJcblxyXG4gICAgICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKVxyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcclxuICAgICAgICBhZGRQcm9qZWN0LnBhcmVudEVsZW1lbnQuYXBwZW5kKHByb2plY3QpXHJcbiAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3RIb2xkZXIubmFtZVxyXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0SG9sZGVyLnRpdGxlXHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb1BhcmVudC5hbGxQcm9qZWN0cylcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3QgdG8gcGFzc1wiLHByb2plY3QpXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWhpZGRlblwiKS5yZW1vdmUoKVxyXG5cclxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGlucHV0IGEgbmFtZS5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbGFiZWxcIikuYXBwZW5kQ2hpbGQoc3BhbilcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXBkYXRlIHRoZSB0YXNrIHJlbmRlcmVyIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBQcm9qZWN0c1xyXG5mdW5jdGlvbiB1cGRhdGVSZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdE5vZGUpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgcmVuZGVyUHJvamVjdFRhc2tzIFwiLHByb2plY3ROb2RlKVxyXG5cclxuICAgIC8vIElmIGFscmVhZHkgaW4gdGhlIHByb2plY3QgZG9uJ3QgcmVyZW5kZXJcclxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PSBwcm9qZWN0Tm9kZS5pZCkgcmV0dXJuXHJcblxyXG4gICAgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3VycmVudFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC1jdXJyZW50XCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0Tm9kZS5pZCkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3VycmVudFwiKVxyXG5cclxuICAgIC8vIFNldCBjdXJyZW50IHdvcmtpbmcgcHJvamVjdFxyXG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0Tm9kZS5pZFxyXG5cclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYoZWxlbWVudC5uYW1lID09PSBwcm9qZWN0Tm9kZS5pZCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3RcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmluZyBmb3JFYWNoIFwiLGVsZW1lbnQpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBmb3JFYWNoIFwiLHByb2plY3ROb2RlLnRleHRDb250ZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuLy8jcmVnaW9uIC0tLS0gU2lkZWJhciBMb2dpYyBhbmQgUmVuZGVyaW5nIC0tLS1cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICBpbmJveFRhc2tzUmVuZGVyKClcclxufSlcclxuZnVuY3Rpb24gaW5ib3hUYXNrc1JlbmRlcigpIHtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICB0b2RheVRhc2tSZW5kZXJlcigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiB0b2RheVRhc2tSZW5kZXJlcigpIHtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kdWVEYXRlID09PSBcIjE2Lkp1bHkuMjAyMlwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgd2Vla1Rhc2tSZW5kZXJlcigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiB3ZWVrVGFza1JlbmRlcmVyKCkge1xyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmR1ZURhdGUuc2xpY2UoMyw3KSA9PT0gXCJKdWx5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtbW9udGhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leGFtcGxlLXRhc2std3JhcHBlclwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge2VsZW1lbnQucmVtb3ZlKCl9KVxyXG4gICAgbW9udGhUYXNrUmVuZGVyZXIoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gbW9udGhUYXNrUmVuZGVyZXIoKSB7XHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZHVlRGF0ZS5zbGljZSgzLDcpID09PSBcIkp1bHlcIikgcmVuZGVyVGFza1RvRG9tKGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcblxyXG4vLyBBZGRzIHRoZSBTb3J0IGJ5IGxpc3Qgb24gY2xpY2sgbGlzdGVuZXJcclxubGV0IG9yZGVyQnlOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LWJ5XCIpXHJcbm9yZGVyQnlOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID09IFwidW5zZXRcIil7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInVuc2V0XCJcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vLyBIaWRlcyB0aGUgU29ydCBieSBsaXN0IGZyb20gdGhlIERPTVxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjc29ydC1ieScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vIFNvcnRzIHRoZSBjdXJyZW50IFByb2plY3QgdGFza3MgYnkgcHJpb3JpdHlcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXByaW9yaXR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHNvcnRCeVByaW9yaXR5KCkgXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeVByaW9yaXR5KCkge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhhbXBsZS10YXNrLXdyYXBwZXJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtlbGVtZW50LnJlbW92ZSgpfSlcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMuZXZlcnkoIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIlVyZ2VudCBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiUmVndWxhciBQcmlvcml0eVwiKSByZW5kZXJUYXNrVG9Eb20oZWxlbWVudClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbGxJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiTG93IFByaW9yaXR5XCIpIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcblxyXG5cclxufVxyXG5cclxuLy8gU29ydHMgdGhlIGN1cnJlbnQgdGFza3MgYnkgZGF0ZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtZGF0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHNvcnRCeURhdGUoZXZlbnQpXHJcbn0pXHJcbmZ1bmN0aW9uIHNvcnRCeURhdGUoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgb3JkZXJlZERhdGVzID0gW107XHJcblxyXG4gICAgdG9Eb1BhcmVudC5hbGxQcm9qZWN0cy5ldmVyeSggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFsbEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcmVkRGF0ZXMucHVzaChbZWxlbWVudC5kYXRlVmFsdWUsIGVsZW1lbnQuaWRdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50LmR1ZURhdGU6XCIsZWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudC5kYXRlVmFsdWU6XCIsZWxlbWVudC5kYXRlVmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIG9yZGVyZWREYXRlcy5zb3J0KClcclxuICAgIGNvbnNvbGUubG9nKFwib3JkZXJlZERhdGVzOlwiLG9yZGVyZWREYXRlcylcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4YW1wbGUtdGFzay13cmFwcGVyXCIpLmZvckVhY2goZWxlbWVudCA9PiB7ZWxlbWVudC5yZW1vdmUoKX0pXHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZXItdG8tZmFydGhlclwiKSl7XHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VyLXRvLWZhcnRoZXJcIilcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmYXJ0aGVyLXRvLWNsb3NlclwiKVxyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogQXNjZW5kaW5nXCJcclxuICAgICAgICBvcmRlcmVkRGF0ZXMucmV2ZXJzZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZhcnRoZXItdG8tY2xvc2VyXCIpXHJcbiAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VyLXRvLWZhcnRoZXJcIilcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IERlc2NlbmRpbmdcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b0RvUGFyZW50LmFsbFByb2plY3RzLmV2ZXJ5KCBlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWxsSXRlbXMuZXZlcnkoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gb3JkZXJlZERhdGVzWzBdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbVsxXVwiLCBvcmRlcmVkRGF0ZXNbMF1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclRhc2tUb0RvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmVkRGF0ZXMuc2hpZnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG9yZGVyZWREYXRlcy5sZW5ndGggIT0gMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pICAgIFxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgc3RhcnR1cFJlbmRlclByb2plY3RUYXNrcywgc3RhcnR1cExpYnJhcnlTaWRlYmFyUmVuZGVyZXIsIGFkZE5ld1Byb2plY3QsIHVwZGF0ZVJlbmRlclByb2plY3RUYXNrcywgYWRkVGFza0ludGVyZmFjZX0iLCJpbXBvcnQgeyBzdGFydHVwUmVuZGVyUHJvamVjdFRhc2tzLCBzdGFydHVwTGlicmFyeVNpZGViYXJSZW5kZXJlciwgdGFza3NJbml0aWFsRXZlbnRBZGRlciwgYWRkTmV3UHJvamVjdCwgdXBkYXRlUmVuZGVyUHJvamVjdFRhc2tzLCBhZGRUYXNrSW50ZXJmYWNlfSBmcm9tICcuL0RPTU1hbmlwdWxhdGlvbidcclxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0LmNzcydcclxuXHJcbi8vIENyZWF0ZSB0aGUgcGFyZW50IG9iamVjdCBsb2dpYyBmb3IgbWFuaXB1bGF0aW5nIGRhdGEgZnJvbSB0b0RvQ2hpbGQgY2hpbGQgb2JqZWN0c1xyXG5jb25zdCB0b0RvUGFyZW50ID0ge1xyXG4gICAgYWxsUHJvamVjdHM6IFtdLFxyXG4gICAgc3VtbWFyeTogIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUsIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5ub3RlcywgdGhpcy5jaGVja2VkKVxyXG4gICAgfSxcclxufVxyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBUbyBEbyBpdGVtXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZ2V0TmFtZSkge1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUodG9Eb1BhcmVudClcclxuXHJcbiAgICBwcm9qZWN0LnRpdGxlID0gZ2V0TmFtZVxyXG4gICAgcHJvamVjdC5uYW1lID0gZ2V0TmFtZSArIE1hdGgucmFuZG9tKDEwKTtcclxuICAgIHByb2plY3QuYWxsSXRlbXMgPSBbXTtcclxuICAgIHRvRG9QYXJlbnQuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBUbyBEbyBvYmplY3RcclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0oZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0Tm90ZXMsIGdldENoZWNrZWQsIHByb2plY3QpIHtcclxuXHJcbiAgICBsZXQgdG9Eb0NoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KVxyXG5cclxuICAgIHRvRG9DaGlsZC5pZCA9IGdldFRpdGxlICsgTWF0aC5yYW5kb20oMTApXHJcbiAgICB0b0RvQ2hpbGQudGl0bGUgPSBnZXRUaXRsZVxyXG4gICAgdG9Eb0NoaWxkLmRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24gPyBnZXREZXNjcmlwdGlvbiA6IFwiXCJcclxuICAgIHRvRG9DaGlsZC5kdWVEYXRlID0gZ2V0RHVlRGF0ZSA/IGdldER1ZURhdGUgOiBcIk5vIER1ZSBEYXRlXCJcclxuICAgIHRvRG9DaGlsZC5wcmlvcml0eSA9IGdldFByaW9yaXR5ID8gZ2V0UHJpb3JpdHkgOiBcIlJlZ3VsYXIgUHJpb3JpdHlcIlxyXG4gICAgdG9Eb0NoaWxkLm5vdGVzID0gZ2V0Tm90ZXMgPyBnZXROb3RlcyA6IFwiTm8gTm90ZXNcIlxyXG4gICAgdG9Eb0NoaWxkLmNoZWNrZWQgPSBcIlVuY2hlY2tlZFwiXHJcbiAgICB0b0RvQ2hpbGQuZGF0ZVZhbHVlID0gKE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDAsMikpKSArICgoTnVtYmVyKGdldER1ZURhdGUuc2xpY2UoMyw1KSkgLSAxKSAqIDMwKSArIE51bWJlcihnZXREdWVEYXRlLnNsaWNlKDYsMTApICogMzY1KVxyXG5cclxuICAgIHByb2plY3QuYWxsSXRlbXMucHVzaCh0b0RvQ2hpbGQpXHJcblxyXG4gICAgLy8gQ2FuIGNyZWF0ZSBpdHMgb3duIGZ1bmN0aW9ucyBoZXJlIHRvbyBsaWtlIHRoaXNcclxuICAgIC8vIHRvRG9JdGVtLnN1bW1hcnkgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHksIHRoaXMubm90ZXMsIHRoaXMuY2hlY2tsaXN0KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiB0b0RvQ2hpbGQ7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcblxyXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KFwiRGVmYXVsdF9Qcm9qZWN0XCIpICBcclxuXHJcbi8vI3JlZ2lvbiAtLS0tIERlZmF1bHRfUHJvamVjdCBUYXNrIE9iamVjdCBkYXRhIGluc2VydGlvbiAtLS0tXHJcbmxldCB1c2VyID0gY3JlYXRlVG9Eb0l0ZW0oXCJTb2x2ZSB0aGUgcXVhbnR1bSBwYXJhZGlnbVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxOC4wOC4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIixkZWZhdWx0UHJvamVjdCk7XHJcbmNyZWF0ZVRvRG9JdGVtKFwiUGljayB1cCBNb25leVwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxNy4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIixkZWZhdWx0UHJvamVjdCk7XHJcbmNyZWF0ZVRvRG9JdGVtKFwiRmlndXJlIHRoZSBBbG1vbmQgUHJpbmNpcGxlXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjE2LjA3LjIwMjIuXCIsXCJMb3cgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLGRlZmF1bHRQcm9qZWN0KTtcclxuY3JlYXRlVG9Eb0l0ZW0oXCJDb21wdXRlIHRoZSBQaSBmaWd1cmUgbnVtYmVyXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjEzLjA5LjIwMjIuXCIsXCJSZWd1bGFyIFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIixkZWZhdWx0UHJvamVjdCk7XHJcbmNyZWF0ZVRvRG9JdGVtKFwiQ29udGludWUgdGhlIGRpc2lsbHVzaW9uIG9mIHRoZSBkZWx1c2lvblwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIwNS4wNy4yMDIyLlwiLFwiVXJnZW50IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIixkZWZhdWx0UHJvamVjdCk7XHJcbmNyZWF0ZVRvRG9JdGVtKFwiU29sdmUgdGhlIFF1YWRyYXRpYyBNaW5wZWwncyBFcXVhdGlvblwiLFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIG9iY2FlY2F0aSBjb25zZXF1dW50dXIgZGlzdGluY3RpbywgZnVnaWF0IGFkIG1hZ25hbSwgZXggb3B0aW8gZHVjaW11cyBvZmZpY2lhIG1pbnVzIHJlcHJlaGVuZGVyaXQgcXVhZXJhdCEgRW9zLCBkb2xvcnVtIGVzc2UhXCIsXCIxOC4wOC4yMDIyLlwiLFwiTG93IFByaW9yaXR5XCIsXCJub3RlcyBmb3IgdG9kbyBpdGVtXCIsXCJVbmNoZWNrZWRcIixkZWZhdWx0UHJvamVjdCk7XHJcbmNyZWF0ZVRvRG9JdGVtKFwiU21hY2sgdGhhdCBudW1iZXIga2V5XCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJzcGljaWF0aXMgb2JjYWVjYXRpIGNvbnNlcXV1bnR1ciBkaXN0aW5jdGlvLCBmdWdpYXQgYWQgbWFnbmFtLCBleCBvcHRpbyBkdWNpbXVzIG9mZmljaWEgbWludXMgcmVwcmVoZW5kZXJpdCBxdWFlcmF0ISBFb3MsIGRvbG9ydW0gZXNzZSFcIixcIjA2LjA3LjIwMjIuXCIsXCJMb3cgUHJpb3JpdHlcIixcIm5vdGVzIGZvciB0b2RvIGl0ZW1cIixcIlVuY2hlY2tlZFwiLGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwidXNlciBwcm90b1wiLE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyKSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyKSlcclxuLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHVzZXIsIHRvRG9QYXJlbnQpO1xyXG4vLyBjb25zb2xlLmxvZyh0b0RvUGFyZW50LmlzUHJvdG90eXBlT2YodXNlcikpXHJcbi8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VyKVxyXG4vLyBjb25zb2xlLmxvZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodXNlcikpXHJcbi8vIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRvRG9QYXJlbnQpLmZpbHRlcihpdGVtID0+IHR5cGVvZiB0b0RvUGFyZW50W2l0ZW1dID09PSAnZnVuY3Rpb24nKSlcclxuXHJcbnVzZXIuc3VtbWFyeSgpXHJcbmNvbnNvbGUubG9nKHVzZXIpXHJcbmNvbnNvbGUubG9nKFwiZGVmYXVsdFByb2plY3QncyBpdGVtczpcIixkZWZhdWx0UHJvamVjdC5hbGxJdGVtcylcclxuY29uc29sZS5sb2coXCJ0b0RvUGFyZW50J3MgcHJvamVjdHM6XCIsdG9Eb1BhcmVudC5hbGxQcm9qZWN0cylcclxuXHJcbnN0YXJ0dXBSZW5kZXJQcm9qZWN0VGFza3MoKVxyXG5zdGFydHVwTGlicmFyeVNpZGViYXJSZW5kZXJlcigpXHJcbmFkZFRhc2tJbnRlcmZhY2UoKVxyXG5hZGROZXdQcm9qZWN0KClcclxuXHJcbmV4cG9ydCB7IHRvRG9QYXJlbnQsIGNyZWF0ZVRvRG9JdGVtLCBjcmVhdGVQcm9qZWN0LCBkZWZhdWx0UHJvamVjdCwgdXNlciB9XHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9