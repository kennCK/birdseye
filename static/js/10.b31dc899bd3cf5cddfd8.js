webpackJsonp([10],{425:function(e,t,n){n(783);var i=n(300)(n(653),n(888),null,null);e.exports=i.exports},446:function(e,t,n){"use strict";function i(e){return"[object Array]"===M.call(e)}function r(e){return void 0===e}function a(e){return null!==e&&!r(e)&&null!==e.constructor&&!r(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"[object ArrayBuffer]"===M.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function l(e){return"string"==typeof e}function c(e){return"number"==typeof e}function A(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===M.call(e)}function p(e){return"[object File]"===M.call(e)}function f(e){return"[object Blob]"===M.call(e)}function h(e){return"[object Function]"===M.call(e)}function m(e){return A(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function C(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,i=arguments.length;n<i;n++)b(arguments[n],e);return t}function B(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=B(t[n],e):t[n]="object"==typeof e?B({},e):e}for(var t={},n=0,i=arguments.length;n<i;n++)b(arguments[n],e);return t}function y(e,t,n){return b(t,function(t,i){e[i]=n&&"function"==typeof t?w(t,n):t}),e}var w=n(456),M=Object.prototype.toString;e.exports={isArray:i,isArrayBuffer:o,isBuffer:a,isFormData:s,isArrayBufferView:u,isString:l,isNumber:c,isObject:A,isUndefined:r,isDate:d,isFile:p,isBlob:f,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:b,merge:x,deepMerge:B,extend:y,trim:C}},448:function(e,t,n){"use strict";t.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null},{accountType:"AGENCY",accountStatus:"ALL",description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY",accountStatus:"ALL",description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY",accountStatus:"ALL",description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"}}},449:function(e,t,n){e.exports=n(458)},450:function(e,t,n){"use strict";var i=n(446),r=n(465),a=n(457),o=n(462),s=n(472),u=n(470),l=n(453);e.exports=function(e){return new Promise(function(t,c){var A=e.data,d=e.headers;i.isFormData(A)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(f+":"+h)}var m=o(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(m,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,i=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:i,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};r(t,c,a),p=null}},p.onabort=function(){p&&(c(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),c(l(t,e,"ECONNABORTED",p)),p=null},i.isStandardBrowserEnv()){var g=n(468),C=(e.withCredentials||u(m))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;C&&(d[e.xsrfHeaderName]=C)}if("setRequestHeader"in p&&i.forEach(d,function(e,t){void 0===A&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),i.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===A&&(A=null),p.send(A)})}},451:function(e,t,n){"use strict";function i(e){this.message=e}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,e.exports=i},452:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},453:function(e,t,n){"use strict";var i=n(464);e.exports=function(e,t,n,r,a){var o=new Error(e);return i(o,t,n,r,a)}},454:function(e,t,n){"use strict";var i=n(446);e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],a=["headers","auth","proxy"],o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];i.forEach(r,function(e){void 0!==t[e]&&(n[e]=t[e])}),i.forEach(a,function(r){i.isObject(t[r])?n[r]=i.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:i.isObject(e[r])?n[r]=i.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])}),i.forEach(o,function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])});var s=r.concat(a).concat(o),u=Object.keys(t).filter(function(e){return-1===s.indexOf(e)});return i.forEach(u,function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])}),n}},455:function(e,t,n){"use strict";(function(t){function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r=n(446),a=n(471),o={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(450):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n(450)),e}(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(o)}),e.exports=s}).call(t,n(142))},456:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},457:function(e,t,n){"use strict";function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(446);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var o=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))}))}),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},458:function(e,t,n){"use strict";function i(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var r=n(446),a=n(456),o=n(460),s=n(454),u=n(455),l=i(u);l.Axios=o,l.create=function(e){return i(s(l.defaults,e))},l.Cancel=n(451),l.CancelToken=n(459),l.isCancel=n(452),l.all=function(e){return Promise.all(e)},l.spread=n(473),e.exports=l,e.exports.default=l},459:function(e,t,n){"use strict";function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}var r=n(451);i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},460:function(e,t,n){"use strict";function i(e){this.defaults=e,this.interceptors={request:new o,response:new o}}var r=n(446),a=n(457),o=n(461),s=n(463),u=n(454);i.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.prototype.getUri=function(e){return e=u(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){i.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){i.prototype[e]=function(t,n,i){return this.request(r.merge(i||{},{method:e,url:t,data:n}))}}),e.exports=i},461:function(e,t,n){"use strict";function i(){this.handlers=[]}var r=n(446);i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},462:function(e,t,n){"use strict";var i=n(469),r=n(467);e.exports=function(e,t){return e&&!i(t)?r(e,t):t}},463:function(e,t,n){"use strict";function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n(446),a=n(466),o=n(452),s=n(455);e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return i(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},464:function(e,t,n){"use strict";e.exports=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},465:function(e,t,n){"use strict";var i=n(453);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(i("Request failed with status code "+n.status,n.config,null,n.request,n))}},466:function(e,t,n){"use strict";var i=n(446);e.exports=function(e,t,n){return i.forEach(n,function(n){e=n(e,t)}),e}},467:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},468:function(e,t,n){"use strict";var i=n(446);e.exports=i.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),i.isString(r)&&s.push("path="+r),i.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},469:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},470:function(e,t,n){"use strict";var i=n(446);e.exports=i.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=i.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},471:function(e,t,n){"use strict";var i=n(446);e.exports=function(e,t){i.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})}},472:function(e,t,n){"use strict";var i=n(446),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,o={};return e?(i.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=i.trim(e.substr(0,a)).toLowerCase(),n=i.trim(e.substr(a+1)),t){if(o[t]&&r.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o):o}},473:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(54),r=n(25),a=n(448),o=n(38);t.default={mounted:function(){},data:function(){return{user:i.a.user,config:r.default,menu:a.a.sidebarMenu,menuOff:a.a.sidebarMenu,toggleSidebar:"fa fa-toggle-on",hide:"",flag:!1,confirmation:{message:null,action:null},prevMenu:0,subPrevMenu:0,menuFlag:!0}},components:{"system-notification":n(842)},watch:{$route:function(e,t){for(var n=null,i=0;i<a.a.sidebarMenu.length;i++){var r=a.a.sidebarMenu[i];if(e.path==="/"+r.path){n=i;break}}null!==n?this.setActiveOnWatch(n,e.path):null!==this.prevMenu&&(this.menu[this.prevMenu].flag=!1)}},methods:{setActive:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.prevMenu!==e&&(this.menu[this.prevMenu].flag=!1,this.menu[e].flag=!0,null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=e),null===this.menu[e].subMenu&&(o.a.push("/"+this.menu[this.prevMenu].path),$(".navbar-collapse").collapse("hide"))},setActiveOnWatch:function(e,t){this.prevMenu!==e&&(this.menu[this.prevMenu].flag=!1,this.menu[e].flag=!0,null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=e),null===this.menu[e].subMenu&&(o.a.push(t),$(".navbar-collapse").collapse("hide"))},setActiveOff:function(e){this.prevMenu!==e&&(this.menuOff[this.prevMenu].flag=!1,this.menuOff[e].flag=!0,this.prevMenu=e),null===this.menuOff[e].subMenu&&(o.a.push("/"+this.menuOff[this.prevMenu].path),$(".navbar-collapse").collapse("hide"))},setActiveSubMenu:function(e,t){this.prevMenu!==e?(this.menu[this.prevMenu].flag=!1,this.menu[e].flag=!0,null!==this.menu[e].subMenu&&(this.menu[e].subMenu[t].flag=!0),null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=e,this.subPrevMenu=t):this.subPrevMenu!==t?(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1,this.menu[e].subMenu[t].flag=!0,this.subPrevMenu=t):this.subPrevMenu=t,o.a.push("/"+this.menu[this.prevMenu].subMenu[this.subPrevMenu].path),$(".navbar-collapse").collapse("hide")},changeToggleSidebarIcon:function(){!1===this.menuFlag?(this.menuOff[this.prevMenu].flag=!1,this.prevMenu=0):(this.menu[this.prevMenu].flag=!1,null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=0,this.subPrevMenu=0),this.menuFlag=!this.menuFlag,this.toggleSidebar=!1===this.menuFlag?"fa fa-toggle-off":"fa fa-toggle-on",this.hide=!1===this.menuFlag?"hidden":""}}}},657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),r=n(54),a=n(25),o=n(449);n.n(o);t.default={mounted:function(){r.a.checkPlan(),this.retrieve()},data:function(){return{user:r.a.user,config:a.default,data:null}},methods:{redirect:function(e){i.a.push(e)},retrieve:function(){var e=this,t={condition:[{column:"device",clause:"like",value:"web%"}],sort:{created_at:"desc"}};this.APIRequest("system_notifications/retrieve",t).then(function(t){t.data.length>0?e.data=t.data:e.data=null})}}}},722:function(e,t,n){t=e.exports=n(415)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Notifications.vue",sourceRoot:""}])},725:function(e,t,n){t=e.exports=n(415)(),t.push([e.i,".content-holder,.main-sidebar{min-height:200px;overflow:hidden;transition:all 1s ease 0s;z-index:1;margin-top:50px}.main-sidebar{overflow-y:hidden;z-index:10000}.sidebar,.sidebar-menu{min-height:100vh;overflow-y:auto}.sidebar-menu{list-style:none;padding:0;margin:0}.sidebar-menu .header{font-weight:700;padding:15px 2%;color:#000;text-align:center}.header .switch{float:left;width:20%}.header i{font-size:24px;color:#005b96}.header i:hover{cursor:pointer;color:#005b96}.profile-photo{float:left;width:100%;height:100px;margin-top:20px}.profile-image-holder{width:100%;float:left;height:80px;text-align:center}.profile-image-holder img{width:80px;height:80px;border-radius:50%}.profile-photo .profile-icon{float:left;font-size:80px;width:100%;height:80px;margin-bottom:10px}.profile-photo .profile-status{font-size:12px!important;padding-left:0!important;padding-right:0!important}.menu-holder{width:100%;float:left;min-height:40px;line-height:40px;overflow:hidden}.menu-holder .visible{width:10%;float:left;text-align:right;line-height:40px}.menu-holder label{float:left;width:86%;margin-left:4%;line-height:40px}.menu-holder-hidden i:hover,.menu-holder:hover,.menu-holder i:hover,.menu-holder label:hover{cursor:pointer;color:#005b96}.sub-menu{list-style:none;padding:0;margin:0;z-index:1}.sub-menu li{width:95%;float:left;height:35px;line-height:35px;margin-left:5%;color:#005b96}.active-menu{color:#005b96!important}.menu-holder-hidden{width:100%;float:left;min-height:50px;line-height:50px;overflow:hidden;text-align:right}.menu-holder-hidden i{font-size:20px;padding-right:5px}@media (min-width:1200px){.main-sidebar{width:18%;float:left}.sidebar-collapse{display:block;position:fixed}.sidebar-menu .header span{display:block}.content-holder{width:80%;margin:60px 0 0;margin-right:1%;float:right}.main-sidebar.hidden{width:5%;position:fixed}.content-holder.hidden{width:94%;margin:60px 0 0 1%;float:right}}@media (min-width:992px) and (max-width:1199px){.main-sidebar{width:23%;float:left}.content-holder{width:71%;margin:60px 0 0;margin-right:1%;float:right}.main-sidebar.active{padding-left:15%}.sidebar-collapse{display:block;position:fixed}.sidebar-menu .header span{display:block}.main-sidebar.hidden{width:5%;position:fixed}.content-holder.hidden{width:94%;margin:60px 0 0 1%;float:right}}@media (max-width:991px){.main-sidebar{width:100%;position:fixed;top:0;left:0;z-index:30;background-color:rgba(0,0,0,.5);margin-top:50px;height:100vh}.content-holder{min-height:10px;width:96%;overflow-y:hidden;margin:60px 2% 0;float:left}.main-sidebar ul{background:#fff;width:60%;min-height:400px;height:100vh}.sm-title{text-align:center}.sidebar-menu .header span{display:none}.header .input-group{width:90%;margin:0 5%}#toggleIcon,.force-collapse{display:none}.collapse{display:none!important}.collapse.show{display:block!important}}@media (max-width:239px){.collapse{display:none!important}.collapse.show{display:block!important}.main-sidebar{width:90%;position:fixed;top:0;left:0;z-index:10;background:#fff;margin-top:100px;height:100vh}.main-sidebar ul{height:100vh}.content-holder{width:96%;margin:60px 2% 0;float:left}.header,.sm-title{display:none}.sidebar-menu li>a{padding:15px 20px 15px 15px;display:block}.sidebar-menu ul li>a{padding:10px 15px 10px 25px;display:block}.sidebar-menu .header span{display:none}.header .input-group{width:90%;margin:0 5%}#toggleIcon,.force-collapse{display:none}}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/components/increment/generic/frame/Sidebar.vue"],names:[],mappings:"AACA,8BAA8B,iBAAiB,gBAAgB,0BAA0B,UAAU,eAAe,CACjH,AACD,cAAc,kBAAkB,aAAa,CAC5C,AAGD,uBAFS,iBAAiB,eAAe,CAGxC,AADD,cAAc,gBAAgB,UAAY,QAAW,CACpD,AACD,sBAAsB,gBAAgB,gBAAwB,WAAW,iBAAiB,CACzF,AACD,gBAAgB,WAAW,SAAS,CACnC,AACD,UAAU,eAAe,aAAa,CACrC,AACD,gBAAgB,eAAe,aAAa,CAC3C,AACD,eAAe,WAAW,WAAW,aAAa,eAAe,CAChE,AACD,sBAAsB,WAAW,WAAW,YAAY,iBAAiB,CACxE,AACD,0BAA0B,WAAW,YAAY,iBAAiB,CACjE,AACD,6BAA6B,WAAW,eAAe,WAAW,YAAY,kBAAkB,CAC/F,AACD,+BAA+B,yBAA0B,yBAA4B,yBAA4B,CAChH,AACD,aAAa,WAAW,WAAW,gBAAgB,iBAAiB,eAAe,CAClF,AACD,sBAAsB,UAAU,WAAW,iBAAiB,gBAAgB,CAC3E,AACD,mBAAmB,WAAW,UAAU,eAAe,gBAAgB,CACtE,AACD,6FAA6F,eAAe,aAAa,CACxH,AACD,UAAU,gBAAgB,UAAY,SAAW,SAAS,CACzD,AACD,aAAa,UAAU,WAAW,YAAY,iBAAiB,eAAe,aAAa,CAC1F,AACD,aAAa,uBAAwB,CACpC,AACD,oBAAoB,WAAW,WAAW,gBAAgB,iBAAiB,gBAAgB,gBAAgB,CAC1G,AACD,sBAAsB,eAAe,iBAAiB,CACrD,AACD,0BACA,cAAc,UAAU,UAAU,CACjC,AACD,kBAAkB,cAAc,cAAc,CAC7C,AACD,2BAA2B,aAAa,CACvC,AACD,gBAAgB,UAAU,gBAAwB,gBAAgB,WAAW,CAC5E,AACD,qBAAqB,SAAS,cAAc,CAC3C,AACD,uBAAuB,UAAU,mBAAuB,WAAW,CAClE,CACA,AACD,gDACA,cAAc,UAAU,UAAU,CACjC,AACD,gBAAgB,UAAU,gBAAwB,gBAAgB,WAAW,CAC5E,AACD,qBAAqB,gBAAgB,CACpC,AACD,kBAAkB,cAAc,cAAc,CAC7C,AACD,2BAA2B,aAAa,CACvC,AACD,qBAAqB,SAAS,cAAc,CAC3C,AACD,uBAAuB,UAAU,mBAAuB,WAAW,CAClE,CACA,AACD,yBACA,cAAc,WAAW,eAAe,MAAM,OAAO,WAAW,gCAAiC,gBAAgB,YAAY,CAC5H,AACD,gBAAgB,gBAAgB,UAAU,kBAAkB,iBAAoB,UAAU,CACzF,AACD,iBAAiB,gBAAgB,UAAU,iBAAiB,YAAY,CACvE,AACD,UAAU,iBAAiB,CAC1B,AACD,2BAA2B,YAAY,CACtC,AACD,qBAAqB,UAAU,WAAgB,CAC9C,AAGD,4BAAgB,YAAY,CAC3B,AACD,UAAU,sBAAuB,CAChC,AACD,eAAe,uBAAwB,CACtC,CACA,AACD,yBACA,UAAU,sBAAuB,CAChC,AACD,eAAe,uBAAwB,CACtC,AACD,cAAc,UAAU,eAAe,MAAM,OAAO,WAAW,gBAAgB,iBAAiB,YAAY,CAC3G,AACD,iBAAiB,YAAY,CAC5B,AACD,gBAAgB,UAAU,iBAAoB,UAAU,CACvD,AACD,kBAAkB,YAAY,CAC7B,AACD,mBAAmB,4BAA4B,aAAa,CAC3D,AACD,sBAAsB,4BAA4B,aAAa,CAC9D,AACD,2BAA2B,YAAY,CACtC,AACD,qBAAqB,UAAU,WAAgB,CAC9C,AAGD,4BAAgB,YAAY,CAC3B,CACA",file:"Sidebar.vue",sourcesContent:["\n.main-sidebar,.content-holder{min-height:200px;overflow:hidden;transition:all 1s ease 0s;z-index:1;margin-top:50px\n}\n.main-sidebar{overflow-y:hidden;z-index:10000\n}\n.sidebar{min-height:100vh;overflow-y:auto\n}\n.sidebar-menu{list-style:none;padding:0px;margin:0px;min-height:100vh;overflow-y:auto\n}\n.sidebar-menu .header{font-weight:700;padding:15px 2% 15px 2%;color:#000;text-align:center\n}\n.header .switch{float:left;width:20%\n}\n.header i{font-size:24px;color:#005b96\n}\n.header i:hover{cursor:pointer;color:#005b96\n}\n.profile-photo{float:left;width:100%;height:100px;margin-top:20px\n}\n.profile-image-holder{width:100%;float:left;height:80px;text-align:center\n}\n.profile-image-holder img{width:80px;height:80px;border-radius:50%\n}\n.profile-photo .profile-icon{float:left;font-size:80px;width:100%;height:80px;margin-bottom:10px\n}\n.profile-photo .profile-status{font-size:12px !important;padding-left:0px !important;padding-right:0px !important\n}\n.menu-holder{width:100%;float:left;min-height:40px;line-height:40px;overflow:hidden\n}\n.menu-holder .visible{width:10%;float:left;text-align:right;line-height:40px\n}\n.menu-holder label{float:left;width:86%;margin-left:4%;line-height:40px\n}\n.menu-holder:hover,.menu-holder i:hover,.menu-holder label:hover,.menu-holder-hidden i:hover{cursor:pointer;color:#005b96\n}\n.sub-menu{list-style:none;padding:0px;margin:0px;z-index:1\n}\n.sub-menu li{width:95%;float:left;height:35px;line-height:35px;margin-left:5%;color:#005b96\n}\n.active-menu{color:#005b96 !important\n}\n.menu-holder-hidden{width:100%;float:left;min-height:50px;line-height:50px;overflow:hidden;text-align:right\n}\n.menu-holder-hidden i{font-size:20px;padding-right:5px\n}\n@media (min-width: 1200px){\n.main-sidebar{width:18%;float:left\n}\n.sidebar-collapse{display:block;position:fixed\n}\n.sidebar-menu .header span{display:block\n}\n.content-holder{width:80%;margin:60px 0px 0px 0px;margin-right:1%;float:right\n}\n.main-sidebar.hidden{width:5%;position:fixed\n}\n.content-holder.hidden{width:94%;margin:60px 0px 0px 1%;float:right\n}\n}\n@media (min-width: 992px) and (max-width: 1199px){\n.main-sidebar{width:23%;float:left\n}\n.content-holder{width:71%;margin:60px 0px 0px 0px;margin-right:1%;float:right\n}\n.main-sidebar.active{padding-left:15%\n}\n.sidebar-collapse{display:block;position:fixed\n}\n.sidebar-menu .header span{display:block\n}\n.main-sidebar.hidden{width:5%;position:fixed\n}\n.content-holder.hidden{width:94%;margin:60px 0px 0px 1%;float:right\n}\n}\n@media (max-width: 991px){\n.main-sidebar{width:100%;position:fixed;top:0;left:0;z-index:30;background-color:rgba(0,0,0,0.5);margin-top:50px;height:100vh\n}\n.content-holder{min-height:10px;width:96%;overflow-y:hidden;margin:60px 2% 0 2%;float:left\n}\n.main-sidebar ul{background:#fff;width:60%;min-height:400px;height:100vh\n}\n.sm-title{text-align:center\n}\n.sidebar-menu .header span{display:none\n}\n.header .input-group{width:90%;margin:0 5% 0 5%\n}\n#toggleIcon{display:none\n}\n.force-collapse{display:none\n}\n.collapse{display:none !important\n}\n.collapse.show{display:block !important\n}\n}\n@media (max-width: 239px){\n.collapse{display:none !important\n}\n.collapse.show{display:block !important\n}\n.main-sidebar{width:90%;position:fixed;top:0;left:0;z-index:10;background:#fff;margin-top:100px;height:100vh\n}\n.main-sidebar ul{height:100vh\n}\n.content-holder{width:96%;margin:60px 2% 0 2%;float:left\n}\n.sm-title,.header{display:none\n}\n.sidebar-menu li>a{padding:15px 20px 15px 15px;display:block\n}\n.sidebar-menu ul li>a{padding:10px 15px 10px 25px;display:block\n}\n.sidebar-menu .header span{display:none\n}\n.header .input-group{width:90%;margin:0 5% 0 5%\n}\n#toggleIcon{display:none\n}\n.force-collapse{display:none\n}\n}\n"],sourceRoot:""}])},780:function(e,t,n){var i=n(722);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(416)("0ec67294",i,!0)},783:function(e,t,n){var i=n(725);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(416)("1e70a79c",i,!0)},842:function(e,t,n){n(780);var i=n(300)(n(657),n(885),"data-v-38e30d05",null);e.exports=i.exports},885:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!==e.data?n("div",{staticStyle:{"margin-top":"25px"}},e._l(e.data,function(t,i){return n("div",{key:i,staticClass:"alert alert-danger",attrs:{role:"alert"}},[n("b",{staticClass:"alert-heading"},[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v("\n      Hi "),n("b",[e._v(e._s(e.user.username)+"!")]),e._v(" "+e._s(t.description)+"\n    ")])])}),0):e._e()},staticRenderFns:[]}},888:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"system-body"},[n("div",{staticClass:"main-sidebar sidebar-collapse navbar-collapse collapse",class:e.hide,attrs:{id:"idfactory"}},[n("div",{staticClass:"sidebar"},[n("ul",{staticClass:"sidebar-menu"},[n("li",{staticClass:"header"},[!0===e.menuFlag?n("span",{staticClass:"profile-photo"},[null!==e.user.profile?n("span",{staticClass:"profile-image-holder"},[n("img",{attrs:{src:e.config.BACKEND_URL+e.user.profile.url}})]):n("i",{staticClass:"fa fa-user-circle-o profile-icon"}),e._v(" "),"VERIFIED"===e.user.status?n("i",{staticClass:"fas fa-check text-primary profile-status"}):e._e(),e._v("\n                Hi "+e._s(e.user.username)+"!\n              ")]):e._e(),e._v(" "),n("i",{class:e.toggleSidebar+" pull-right",attrs:{"aria-hidden":"true",id:"toggleIcon"},on:{click:function(t){return e.changeToggleSidebarIcon()}}})]),e._v(" "),e._l(e.menu,function(t,i){return(t.accountType!==e.user.type&&"ALL"!==t.accountType||"ADMIN"===e.user.type)&&"ADMIN"!==e.user.type||"ALL"!==t.accountStatus&&null!==e.user.subAccount&&(null===e.user.subAccount||e.user.subAccount.status!==t.accountStatus)||!0!==e.menuFlag?e._e():n("li",{key:i,staticClass:"menu-holder",class:{"active-menu":!0===t.flag},on:{click:function(t){return e.setActive(i)}}},[n("i",{staticClass:" visible",class:t.icon}),e._v(" "),n("label",[e._v(e._s(t.description))]),e._v(" "),null!==t.subMenu?n("ul",{staticClass:"sub-menu"},e._l(t.subMenu,function(t,r){return(t.users===e.user.type||"ALL"===t.users)&&"ADMIN"!==t.type||"ADMIN"===t.type?n("li",{class:{"active-menu":!0===t.flag},on:{click:function(t){return e.setActiveSubMenu(i,r)}}},[n("i",{staticClass:" visible",class:t.icon}),e._v(" "),n("label",[e._v(e._s(t.description))])]):e._e()}),0):e._e()])}),e._v(" "),e._l(e.menuOff,function(t,i){return(t.accountType!==e.user.type&&"ALL"!==t.accountType||"ADMIN"===e.user.type)&&"ADMIN"!==e.user.type||!1!==e.menuFlag?e._e():n("li",{staticClass:"menu-holder-hidden",class:{"active-menu":!0===t.flag},on:{click:function(t){return e.setActiveOff(i)}}},[n("i",{class:t.icon})])})],2)])]),e._v(" "),null!==e.confirmation.message?n("div",{staticClass:"modal",attrs:{id:"timerModal"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),n("div",{staticClass:"modal-body"},[e._v("\n            "+e._s(e.confirmation.message)+"\n          ")]),e._v(" "),e._m(1)])])]):e._e(),e._v(" "),n("div",{staticClass:"content-holder",class:e.hide},[n("system-notification"),e._v(" "),n("transition",[n("router-view")],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-header"},[n("h4",{staticClass:"modal-title"},[n("i",{staticClass:"fa fa-warning text-danger"}),e._v(" Confirmation!")]),e._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Ok")])])}]}}});
//# sourceMappingURL=10.b31dc899bd3cf5cddfd8.js.map