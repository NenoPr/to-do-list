(()=>{"use strict";var e={747:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(81),o=t.n(n),i=t(645),a=t.n(i)()(o());a.push([e.id,"\r\n\r\n\r\nhtml, body {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n* {\r\n    outline: 1px solid blue;\r\n}\r\n#container {\r\n    display: grid;\r\n    grid-template: 10vh 90vh / 15vw 85vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n#header {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 1;\r\n    gap: 3rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n#sidebar-contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n#inbox {\r\n    width: fit-content;\r\n}\r\n\r\n#sidebar-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n    height: 65vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#sidebar-projects::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#sidebar-projects::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n#add-project {\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#add-project:hover {\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    font-size: 1rem;\r\n    height: 65vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.project {\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template: 1fr 10fr / 1fr;\r\n    padding: 2rem;\r\n    gap: 2rem;\r\n    grid-area: 2 / 2 / 2 / 3;\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#add-task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 100px;\r\n    width: 150px;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#add-task:hover {\r\n    box-shadow: 0 0 .1rem .3rem black;\r\n}\r\n\r\n#tasks-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding-top: 2rem;\r\n    padding-left: 2rem;\r\n    gap: 1rem;\r\n    width: 80vw;\r\n    justify-content: flex-start;\r\n    align-content: flex-start;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n.task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 10rem;\r\n    width: 17rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n    .task {\r\n        height: 10rem;\r\n        width: 19rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .task {\r\n        height: 10rem;\r\n        width: 18rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 2560px) {\r\n    .task {\r\n        height: 10rem;\r\n        width: 17rem;\r\n    }\r\n}",""]);const s=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=i[c]||0,m="".concat(c," ").concat(d);i[c]=d+1;var p=t(m),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=o(u,n);n.byIndex=s,r.splice(s,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);r[s].references--}for(var l=n(e,o),c=0;c<i.length;c++){var d=t(i[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=l}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,(()=>{var e=t(379),r=t.n(e),n=t(795),o=t.n(n),i=t(569),a=t.n(i),s=t(565),l=t.n(s),c=t(216),d=t.n(c),m=t(589),p=t.n(m),u=t(747),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h={allProjects:[],summary:function(){console.log(this.title,this.description,this.dueDate,this.priority,this.notes,this.checklist)}};function g(e){let r=Object.create(h);return r.name=e+Math.random(10),r.allItems=[],h.allProjects.push(r),r}function v(e,r,t,n,o,i,a){let s=Object.create(a);return s.id=e+Math.random(10),s.title=e,s.description=r,s.dueDate=t,s.priority=n,s.notes=o,s.checklist=i,y.allItems.push(s),s}console.log("-----------------------");const y=new g("Default_Project");let b=v("Title of item","description of item","date","high priority","notes for todo item","checked item",y);v("Title of item","description of item","date","high priority","notes for todo item","checked item",y),v("Title of item","description of item","date","high priority","notes for todo item","checked item",y),v("Title of item","description of item","date","high priority","notes for todo item","checked item",y),v("Title of item","description of item","date","high priority","notes for todo item","checked item",y),v("Title of item","description of item","date","high priority","notes for todo item","checked item",y),v("Title of item","description of item","date","high priority","notes for todo item","checked item",y),b.summary(),console.log("defaultProject's items:",y.allItems),console.log("toDoParent's projects:",h.allProjects),null==document.getElementById("tasks-list").firstChild&&y.allItems.forEach((e=>{let r=document.createElement("div");r.classList.add("task"),r.textContent=e.id,document.getElementById("tasks-list").appendChild(r)}));let x=document.createElement("div");x.innerText=y.name,x.classList.add("project"),x.addEventListener("click",(()=>{j(x)})),document.getElementById("projects-list").appendChild(x);let k=document.getElementById("add-task");k.addEventListener("click",(()=>{let e=document.createElement("div");e.classList.add("task"),k.nextElementSibling.appendChild(e),h.allProjects.forEach((r=>{console.log("element",r),k.nextElementSibling.firstChild.textContent==r.allItems[0].id&&(console.log("element",r),console.log(v("Title","description of item","date","high priority","notes for todo item","checked item",r)),e.textContent=r.allItems[r.allItems.length-1].id)}))}));let w=document.getElementById("add-project");function j(e){console.log("entered renderProjectTasks ",e.textContent),h.allProjects.forEach((r=>{r.name===e.textContent&&(document.querySelectorAll(".task").forEach((e=>{e.remove()})),console.log("entering forEach ",r),r.allItems.forEach((r=>{console.log("entered forEach ",e.textContent);let t=document.createElement("div");t.classList.add("task"),t.textContent=r.id,console.log("Hello",r),document.getElementById("tasks-list").appendChild(t)})))}))}w.addEventListener("click",(()=>{let e=document.createElement("div");e.classList.add("project"),w.nextElementSibling.appendChild(e),console.log(g("Project")),e.textContent=h.allProjects[h.allProjects.length-1].name,console.log(h.allProjects),e.addEventListener("click",(()=>{j(e)}))}))})()})();