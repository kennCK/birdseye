webpackJsonp([19],{381:function(a,t,e){e(592);var n=e(268)(e(455),e(659),"data-v-e4246baa",null);a.exports=n.exports},407:function(a,t,e){"use strict";t.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BIRDSEYE",APP_NAME_HTML:"BIRDSEYE",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"www.increment.ltd",COPYRIGHT:"BIRDSEYE "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseye"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"}}},409:function(a,t,e){a.exports=e.p+"static/img/logo.f67a183.png"},455:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(32),o=e(47),r=e(407);t.default={mounted:function(){},data:function(){return{username:null,password:null,errorMessage:null,user:o.a.user,tokenData:o.a.tokenData,otpCode:null,otpErrorCode:null,common:r.a}},methods:{logIn:function(){var a=this;null!==this.username&&""!==this.username&&null!==this.password&&""!==this.password?($("#loading").css({display:"block"}),o.a.authenticate(this.username,this.password,function(t){a.errorMessage=null,$("#loading").css({display:"none"})},function(t,e){$("#loading").css({display:"none"}),a.errorMessage=401===e?"Username and Password did not match.":"Cannot log in? Contact us through email: "+a.common.APP_EMAIL})):this.errorMessage="Please fill up all the required fields."},redirect:function(a){n.a.push(a)},request:function(a){this.APIRequest(a,{}).then(function(a){})}}}},544:function(a,t,e){t=a.exports=e(379)(),t.push([a.i,'.bg-primary[data-v-e4246baa]{background:#005b96!important}.login-wrapper[data-v-e4246baa]{width:80%;margin:0 10% 50px}.login-header[data-v-e4246baa]{height:100px;color:#060;width:100%;float:left;text-align:center}.login-header img[data-v-e4246baa]{height:100px!important;width:100px!important}.login-header img[data-v-e4246baa]:hover{cursor:pointer}.login-message-holder[data-v-e4246baa]{min-height:30px;font-size:12px;float:left;overflow:hidden}.login-spacer[data-v-e4246baa]{margin-bottom:10px}.forgot-password a[data-v-e4246baa]{color:#060!important}.forgot-password a[data-v-e4246baa]:hover{cursor:pointer!important;text-decoration:underline!important;color:#090!important}.btn[data-v-e4246baa]{height:50px!important}.input-group-addon[data-v-e4246baa]{width:15%!important;text-align:center!important;padding:0!important;display:block!important;line-height:43px!important}.form-control-login[data-v-e4246baa]{height:45px!important}.separator>[data-v-e4246baa]{display:inline-block;vertical-align:middle}.separator[data-v-e4246baa]{text-align:center;border:0;white-space:nowrap;display:block;overflow:hidden;padding:0;margin:0}.separator[data-v-e4246baa]:after,.separator[data-v-e4246baa]:before{content:"";height:1px;width:50%;background-color:#ccc;margin:0 5px;display:inline-block;vertical-align:middle}.separator[data-v-e4246baa]:before{margin-left:-100%}.separator[data-v-e4246baa]:after{margin-right:-100%}@media (max-width:992px){.login-wrapper[data-v-e4246baa]{width:96%;margin:0 2%}}',"",{version:3,sources:["/Users/macbookpro/Desktop/vue/tinabangay/src/components/increment/basic/LogInBasic.vue"],names:[],mappings:"AACA,6BAA6B,4BAA6B,CACzD,AACD,gCAAgC,UAAU,iBAAqB,CAC9D,AACD,+BAA+B,aAAa,WAAc,WAAW,WAAW,iBAAiB,CAChG,AACD,mCAAmC,uBAAwB,qBAAsB,CAChF,AACD,yCAAyC,cAAc,CACtD,AACD,uCAAuC,gBAAgB,eAAe,WAAW,eAAe,CAC/F,AACD,+BAA+B,kBAAkB,CAChD,AACD,oCAAoC,oBAAwB,CAC3D,AACD,0CAA0C,yBAA0B,oCAAqC,oBAAwB,CAChI,AACD,sBAAsB,qBAAsB,CAC3C,AACD,oCAAoC,oBAAqB,4BAA6B,oBAAuB,wBAAyB,0BAA2B,CAChK,AACD,qCAAqC,qBAAsB,CAC1D,AACD,6BAA8B,qBAAqB,qBAAqB,CACvE,AACD,4BAA4B,kBAAkB,SAAS,mBAAmB,cAAc,gBAAgB,UAAU,QAAQ,CACzH,AACD,qEAAqE,WAAW,WAAW,UAAU,sBAAsB,aAAmB,qBAAqB,qBAAqB,CACvL,AACD,mCAAmC,iBAAiB,CACnD,AACD,kCAAkC,kBAAkB,CACnD,AACD,yBACA,gCAAgC,UAAU,WAAgB,CACzD,CACA",file:"LogInBasic.vue",sourcesContent:['\n.bg-primary[data-v-e4246baa]{background:#005b96 !important\n}\n.login-wrapper[data-v-e4246baa]{width:80%;margin:0 10% 50px 10%\n}\n.login-header[data-v-e4246baa]{height:100px;color:#006600;width:100%;float:left;text-align:center\n}\n.login-header img[data-v-e4246baa]{height:100px !important;width:100px !important\n}\n.login-header img[data-v-e4246baa]:hover{cursor:pointer\n}\n.login-message-holder[data-v-e4246baa]{min-height:30px;font-size:12px;float:left;overflow:hidden\n}\n.login-spacer[data-v-e4246baa]{margin-bottom:10px\n}\n.forgot-password a[data-v-e4246baa]{color:#006600 !important\n}\n.forgot-password a[data-v-e4246baa]:hover{cursor:pointer !important;text-decoration:underline !important;color:#009900 !important\n}\n.btn[data-v-e4246baa]{height:50px !important\n}\n.input-group-addon[data-v-e4246baa]{width:15% !important;text-align:center !important;padding:0px !important;display:block !important;line-height:43px !important\n}\n.form-control-login[data-v-e4246baa]{height:45px !important\n}\n.separator>*[data-v-e4246baa]{display:inline-block;vertical-align:middle\n}\n.separator[data-v-e4246baa]{text-align:center;border:0;white-space:nowrap;display:block;overflow:hidden;padding:0;margin:0\n}\n.separator[data-v-e4246baa]:before,.separator[data-v-e4246baa]:after{content:"";height:1px;width:50%;background-color:#ccc;margin:0 5px 0 5px;display:inline-block;vertical-align:middle\n}\n.separator[data-v-e4246baa]:before{margin-left:-100%\n}\n.separator[data-v-e4246baa]:after{margin-right:-100%\n}\n@media (max-width: 992px){\n.login-wrapper[data-v-e4246baa]{width:96%;margin:0 2% 0 2%\n}\n}\n'],sourceRoot:""}])},592:function(a,t,e){var n=e(544);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e(380)("2b1dfa14",n,!0)},659:function(a,t,e){a.exports={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto"},[n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"login-header",staticStyle:{"margin-top":"75px"}},[n("img",{attrs:{src:e(409)},on:{click:function(t){a.redirect("/")}}})]),a._v(" "),n("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[a._v("\n        Login to "),n("b",{staticClass:"text-primary"},[a._v(a._s(a.common.APP_NAME))])]),a._v(" "),null!=a.errorMessage?n("div",{staticClass:"login-message-holder login-spacer"},[n("span",{staticClass:"text-danger"},[n("b",[a._v("Oops!")]),a._v(" "+a._s(a.errorMessage))])]):a._e(),a._v(" "),n("div",[n("div",{staticClass:"input-group login-spacer"},[a._m(0),a._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.username,expression:"username"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Username or Email","aria-describedby":"addon-1"},domProps:{value:a.username},on:{input:function(t){t.target.composing||(a.username=t.target.value)}}})]),a._v(" "),n("div",{staticClass:"input-group login-spacer"},[a._m(1),a._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control form-control-login",attrs:{type:"password",placeholder:"********","aria-describedby":"addon-2"},domProps:{value:a.password},on:{keyup:function(t){if(!("button"in t)&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;a.logIn()},input:function(t){t.target.composing||(a.password=t.target.value)}}})]),a._v(" "),n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(t){a.logIn()}}},[a._v("Login")]),a._v(" "),n("button",{staticClass:"btn btn-warning btn-block login-spacer",on:{click:function(t){a.redirect("/request_reset_password")}}},[a._v("Forgot your Password?")]),a._v(" "),n("br"),a._v(" "),n("div",{staticClass:"container-fluid separator"},[a._v("\n            or\n        ")]),a._v(" "),n("br"),a._v(" "),n("button",{staticClass:"btn btn-secondary btn-block login-spacer",on:{click:function(t){a.redirect("/signup")}}},[a._v("Create Account Now!")])])])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[e("i",{staticClass:"fa fa-user"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])}]}}});
//# sourceMappingURL=19.3b7ae6fad47fe1a93c87.js.map