webpackJsonp([19],{1001:function(a,t,e){var n=e(941);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e(416)("85cae6e2",n,!0)},1109:function(a,t,e){a.exports={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-lg-4 mx-auto signup-container"},[n("div",{staticClass:"signup-wrapper"},[n("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[n("img",{attrs:{src:e(562)},on:{click:function(t){return a.redirect("/")}}})]),a._v(" "),n("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[a._v("\n        Register as partner to "),n("b",{staticClass:"text-primary"},[a._v(a._s(a.common.APP_NAME))])]),a._v(" "),n("div",{staticClass:"signup-holder"},[""!=a.errorMessage?n("div",{staticClass:"login-message-holder login-spacer text-center"},[n("span",{staticClass:"text-danger text-center"},[n("b",[a._v("Oops!")]),a._v(" "+a._s(a.errorMessage))])]):a._e(),a._v(" "),n("div",[n("div",{staticClass:"input-group login-spacer"},[a._m(0),a._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.username,expression:"username"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Username","aria-describedby":"addon-1"},domProps:{value:a.username},on:{input:function(t){t.target.composing||(a.username=t.target.value)}}})]),a._v(" "),n("div",{staticClass:"input-group login-spacer"},[a._m(1),a._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Email","aria-describedby":"addon-1"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}})]),a._v(" "),n("div",{staticClass:"input-group login-spacer"},[a._m(2),a._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control form-control-login",attrs:{type:"password",placeholder:"Password","aria-describedby":"addon-2"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}})]),a._v(" "),n("div",{staticClass:"input-group login-spacer"},[a._m(3),a._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",attrs:{type:"password",placeholder:"Confirm Password","aria-describedby":"addon-2"},domProps:{value:a.cpassword},on:{input:function(t){t.target.composing||(a.cpassword=t.target.value)}}})]),a._v(" "),n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(t){return a.signUp()}}},[a._v("Signup")]),a._v(" "),n("button",{staticClass:"btn btn-danger btn-block login-spacer",on:{click:function(t){return a.redirect("/login")}}},[a._v("Back to Login")])])])])])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[e("i",{staticClass:"fa fa-user"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[e("i",{staticClass:"fa fa-envelope"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])}]}},421:function(a,t,e){e(1001);var n=e(300)(e(880),e(1109),"data-v-0aef687a",null);a.exports=n.exports},451:function(a,t,e){"use strict";t.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"AGENCY_LEVEL_1",accountStatus:"ALL",description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_LEVEL_1",accountStatus:"ALL",description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_LEVEL_1",accountStatus:"ALL",description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"},vehicleTypes:[{label:"Bus",value:"bus"},{label:"Plane",value:"plane"},{label:"Jeepney",value:"jeep"},{label:"Private Car",value:"private_car"},{label:"Motorcycle",value:"motorcycle"},{label:"Shippings",value:"shppings"},{label:"Train",value:"train"},{label:"Van",value:"van"},{label:"Others",value:"others"}]}},562:function(a,t,e){a.exports=e.p+"static/img/logo.3c488a3.png"},880:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(144),i=e.n(n),r=e(38),s=e(54),o=e(25),l=e(451);t.default={mounted:function(){},data:function(){return{username:"",email:"",password:"",cpassword:"",type:"PARTNER",errorMessage:"",user:s.a.user,tokenData:s.a.tokenData,flag:!1,schools:null,schoolIndex:null,common:l.a}},methods:{signUp:function(){var a=this;this.validate();var t={username:this.username,email:this.email,password:this.password,config:o.default,account_type:this.type,referral_code:null};!0===this.flag&&($("#loading").css({display:"block"}),this.APIRequest("accounts/create",t).then(function(t){if($("#loading").css({display:"none"}),null!==t.error)if(100===t.error.status){var e=t.error.message;void 0!==i()(e.username)&&void 0!==e.username?a.errorMessage=e.username[0]:void 0!==i()(e.email)&&void 0!==e.email&&(a.errorMessage=e.email[0])}else null!==t.data&&t.data>0&&a.login()}))},redirect:function(a){r.a.push(a)},validate:function(){this.username.length>=6&&null!==this.email&&null!==this.password&&0===this.password.localeCompare(this.cpassword)&&null!==this.type?this.flag=!0:this.username.length<6?this.errorMessage="Username must be atleast 6 characters.":this.password.length<6?this.errorMessage="Password must be atleast 6 characters":0!==this.password.localeCompare(this.cpassword)?this.errorMessage="Password did not match.":(this.errorMessage="Please fill in all required fields.",this.flag=!1)},login:function(){var a=this;s.a.authenticate(this.username,this.password,function(a){r.a.push("dashboard")},function(t,e){a.errorMessage=401===e?"Your username and password did not match.":"Cannot log in? Contact us through email: support@idfactories.com"})}}}},941:function(a,t,e){t=a.exports=e(415)(),t.push([a.i,".signup-container[data-v-0aef687a]{margin-top:25px}.signup-header[data-v-0aef687a]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-0aef687a]{height:100px!important;width:100px!important}.signup-header img[data-v-0aef687a]:hover{cursor:pointer}.header-title[data-v-0aef687a]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.signup-holder[data-v-0aef687a]{width:80%;margin:0 10%;float:left}.input-holder[data-v-0aef687a]{width:90%;margin:0 5%}.form-control[data-v-0aef687a]{height:45px!important}.btn[data-v-0aef687a]{height:50px!important}.input-group-addon[data-v-0aef687a]{width:15%!important;text-align:center!important;padding:0!important;display:block!important;line-height:43px!important}.input-group[data-v-0aef687a]{margin-top:5px;margin-bottom:5px}.site-title[data-v-0aef687a]{margin-top:25px;width:100%;float:left}.site-title img[data-v-0aef687a]{width:50px;float:left;margin-right:10px}.site-title .app-name[data-v-0aef687a]{float:left}.account-type[data-v-0aef687a]{width:120px!important}@media (max-width:991px){.custom-holder[data-v-0aef687a]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/components/increment/basic/SignupPartner.vue"],names:[],mappings:"AACA,mCACE,eAAiB,CAClB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,uBAAyB,AACzB,qBAAwB,CACzB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,gCACE,UAAW,AACX,aAAoB,AACpB,UAAY,CACb,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,oCACE,oBAAsB,AACtB,4BAA8B,AAC9B,oBAAwB,AACxB,wBAA0B,AAC1B,0BAA6B,CAC9B,AACD,8BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,uCACE,UAAY,CACb,AACD,+BACE,qBAAwB,CACzB,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"SignupPartner.vue",sourcesContent:["\n.signup-container[data-v-0aef687a]{\r\n  margin-top: 25px;\n}\n.signup-header[data-v-0aef687a]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-0aef687a]{\r\n  height: 100px !important;\r\n  width: 100px !important;\n}\n.signup-header img[data-v-0aef687a]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-0aef687a]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.signup-holder[data-v-0aef687a]{\r\n  width: 80%;\r\n  margin: 0 10% 0 10%;\r\n  float: left;\n}\n.input-holder[data-v-0aef687a]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-0aef687a]{\r\n  height: 45px !important;\n}\n.btn[data-v-0aef687a]{\r\n  height: 50px !important;\n}\n.input-group-addon[data-v-0aef687a]{\r\n  width: 15% !important;\r\n  text-align: center !important;\r\n  padding: 0px !important;\r\n  display: block !important;\r\n  line-height: 43px !important;\n}\n.input-group[data-v-0aef687a]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\n}\n.site-title[data-v-0aef687a]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-0aef687a]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\n}\n.site-title .app-name[data-v-0aef687a]{\r\n  float: left;\n}\n.account-type[data-v-0aef687a]{\r\n  width: 120px !important;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-0aef687a]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=19.bf397bb8f9c04aed976e.js.map