webpackJsonp([22],{1016:function(t,e,a){var n=a(956);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(416)("333686af",n,!0)},1125:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-lg-4 mx-auto signup-container"},[n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[n("img",{attrs:{src:a(690)},on:{click:function(e){return t.redirect("/")}}})]),t._v(" "),n("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"10px"}},[t._v("\n        Verification\n      ")]),t._v(" "),n("div",{staticClass:"signup-holder"},[n("br"),t._v(" "),n("div",[n("div",{staticClass:"login-spacer",class:{"text-danger":!1===t.flag},staticStyle:{"margin-bottom":"25px !important","text-align":"justify"}},[t._v("\n            "+t._s(t.message)+"\n          ")]),t._v(" "),!1===t.verified?n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(e){return t.update()}}},[t._v("Continue")]):t._e(),t._v(" "),!0===t.verified&&t.user.userID>0?n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(e){t.redirect("/dashboard")()}}},[t._v("Go to dashboard")]):t._e(),t._v(" "),!0===t.verified&&t.user.userID<=0?n("button",{staticClass:"btn btn-danger btn-block login-spacer",on:{click:function(e){return t.redirect("/")}}},[t._v("Back to Login")]):t._e()])])])])])},staticRenderFns:[]}},418:function(t,e,a){a(1016);var n=a(300)(a(876),a(1125),"data-v-39832e76",null);t.exports=n.exports},451:function(t,e,a){"use strict";e.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",showOnAdmin:!0,description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"},vehicleTypes:[{label:"Bus",value:"bus"},{label:"Plane",value:"plane"},{label:"Jeepney",value:"jeep"},{label:"Private Car",value:"private_car"},{label:"Motorcycle",value:"motorcycle"},{label:"Shippings",value:"shppings"},{label:"Train",value:"train"},{label:"Van",value:"van"},{label:"Others",value:"others"}]}},690:function(t,e,a){t.exports=a.p+"static/img/logo.3c488a3.png"},876:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(38),i=a(54),r=a(451);e.default={mounted:function(){this.username=this.$route.params.username,this.code=this.$route.params.code,this.retrieveAccount(),this.setMessage(),null!==this.account&&this.validate()},data:function(){return{username:this.$route.params.username,code:this.$route.params.code,account:null,flag:null,message:null,user:i.a.user,verified:!1,common:r.a}},methods:{setMessage:function(){this.message="Hi "+this.username+"! Please click the button to verify your email address here in "+this.common.APP_NAME},retrieveAccount:function(){var t=this,e={condition:[{column:"username",value:this.username,clause:"="},{column:"code",value:this.code,clause:"="}]};this.APIRequest("accounts/retrieve",e).then(function(e){e.data.length>0?t.account=e.data[0]:t.account=null})},update:function(){var t=this;if(this.retrieveAccount(),!0===this.validate()&&null!==this.account){var e={id:this.account.id,status:"VERIFIED"};$("#loading").css({display:"block"}),this.APIRequest("accounts/update_verification",e).then(function(e){$("#loading").css({display:"none"}),!0===e.data?(t.message="Congratulations! You've have successfully verified your account. Kindly click Continue Button to login.",t.flag=!0,t.verified=!0):(t.flag=!1,t.verified=!1,t.message="Sorry! Internal Error. Kindly verify again or contact the system support.")})}else this.flag=!1,this.message="Sorry! Internal Error. Kindly verify again or contact the system support."},validate:function(){return null!==this.username||null!==this.code?(this.flag=!0,!0):(this.flag=!1,!1)},redirect:function(t){n.a.push(t)}}}},956:function(t,e,a){e=t.exports=a(415)(),e.push([t.i,".signup-container[data-v-39832e76]{margin-top:50px}.signup-header[data-v-39832e76]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-39832e76]{height:100px!important;width:100px!important}.signup-header img[data-v-39832e76]:hover{cursor:pointer}.header-title[data-v-39832e76]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.input-holder[data-v-39832e76]{width:90%;margin:0 5%}.form-control[data-v-39832e76]{height:45px!important}.btn[data-v-39832e76]{height:50px!important}.input-group[data-v-39832e76]{margin-top:5px;margin-bottom:5px}.site-title[data-v-39832e76]{margin-top:25px;width:100%;float:left}.site-title img[data-v-39832e76]{width:50px;float:left;margin-right:10px}.site-title .app-name[data-v-39832e76]{float:left}@media (max-width:991px){.custom-holder[data-v-39832e76]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/components/increment/basic/LoginByVerification.vue"],names:[],mappings:"AACA,mCACE,eAAiB,CAClB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,uBAAyB,AACzB,qBAAwB,CACzB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,8BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,uCACE,UAAY,CACb,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"LoginByVerification.vue",sourcesContent:["\n.signup-container[data-v-39832e76]{\r\n  margin-top: 50px;\n}\n.signup-header[data-v-39832e76]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-39832e76]{\r\n  height: 100px !important;\r\n  width: 100px !important;\n}\n.signup-header img[data-v-39832e76]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-39832e76]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.input-holder[data-v-39832e76]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-39832e76]{\r\n  height: 45px !important;\n}\n.btn[data-v-39832e76]{\r\n  height: 50px !important;\n}\n.input-group[data-v-39832e76]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\n}\n.site-title[data-v-39832e76]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-39832e76]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\n}\n.site-title .app-name[data-v-39832e76]{\r\n  float: left;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-39832e76]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=22.9cd7da0a61b9fd206ee5.js.map