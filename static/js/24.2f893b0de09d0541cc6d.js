webpackJsonp([24],{1025:function(t,a,n){var e=n(965);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(416)("1dd3ef38",e,!0)},1118:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("footer",[n("div",{staticClass:"footer"},[n("ul",{staticClass:"footer-widget contact-us"},[n("li",{staticClass:"title"},[n("b",[t._v(t._s(t.common.APP_NAME))])]),t._v(" "),n("li",{staticClass:"link"},[n("a",{on:{click:function(a){return t.redirect("/")}}},[t._v("Home")])])]),t._v(" "),n("span",{staticClass:"footer-widget community"},[t._m(0),t._v(" "),n("span",{staticClass:"link"},[n("a",{staticClass:"text-gray",attrs:{target:"_BLANK",href:"https://www.facebook.com/"+t.common.socialMedia.facebook}},[n("i",{staticClass:"fab fa-facebook"})])])]),t._v(" "),n("span",{staticClass:"copyright"},[n("label",[t._v("Copyright @"+t._s(t.common.COPYRIGHT)+". All rights reserved.")])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("span",{staticClass:"title"},[n("b",[t._v("Community")])])}]}},437:function(t,a,n){n(1025);var e=n(300)(n(923),n(1118),"data-v-587cdab2",null);t.exports=e.exports},451:function(t,a,n){"use strict";a.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",showOnAdmin:!0,description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",APP_URL:"https://birds-eye.org",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"},vehicleTypes:[{label:"Bus",value:"bus"},{label:"Plane",value:"plane"},{label:"Jeepney",value:"jeep"},{label:"Private Car",value:"private_car"},{label:"Motorcycle",value:"motorcycle"},{label:"Shippings",value:"shppings"},{label:"Train",value:"train"},{label:"Van",value:"van"},{label:"Others",value:"others"}]}},923:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n(38),i=n(54),o=n(25),A=n(451);a.default={mounted:function(){},data:function(){return{user:i.a.user,tokenData:i.a.tokenData,account:[],config:o.default,host:null,common:A.a}},methods:{redirect:function(t){e.a.push(t)},openModal:function(t){$(t).modal("show")}}}},965:function(t,a,n){a=t.exports=n(415)(),a.push([t.i,"footer[data-v-587cdab2]{width:100%;min-height:200px;float:left;overflow-y:hidden;background:#e9e9e9}.footer[data-v-587cdab2]{width:80%;float:left;min-height:50px;margin-left:10%;margin-right:10%;overflow-y:hidden}.footer-widget[data-v-587cdab2]{width:25%;float:left;margin-top:50px;list-style:none;padding:0;margin-bottom:0}.footer-widget li[data-v-587cdab2]{list-style:none;padding:5px 10px;float:left;width:100%;color:#6f6f6f!important}.footer-widget[data-v-587cdab2],.footer-widget li a[data-v-587cdab2]{color:#6f6f6f!important}.footer-widget .title[data-v-587cdab2]{color:#4c4c4c}.footer-widget li a[data-v-587cdab2]:hover{cursor:pointer;text-decoration:underline}footer-widget .title[data-v-587cdab2]:hover{cursor:default}.community .title[data-v-587cdab2]{width:100%;float:left;height:40px;text-align:left;padding-top:5px}.community .links[data-v-587cdab2]{width:100%;float:left}.community .link i[data-v-587cdab2]{font-size:24px;padding:0 10px;float:left;width:20%}.community .link i[data-v-587cdab2]:hover{color:#1caceb;cursor:pointer}.text-gray[data-v-587cdab2]{color:#212529}.contact-us li i[data-v-587cdab2]{padding-right:10px}.contact-us li .fa-phone[data-v-587cdab2]{padding-right:9px}.contact-us li .fa-mobile-alt[data-v-587cdab2]{padding-right:12px}.copyright[data-v-587cdab2]{width:100%;float:left;padding-top:5px;padding-bottom:5px;font-size:12px;text-align:center;margin-top:45px;color:#6f6f6f!important}@media screen and (max-width:992px){.footer-widget[data-v-587cdab2]{width:100%;text-align:center;margin-right:0;padding:0}.community .title[data-v-587cdab2]{text-align:center}.community i[data-v-587cdab2]{width:20%}}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/modules/home/Landing/Footer.vue"],names:[],mappings:"AACA,wBACE,WAAW,AACX,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,kBAAoB,CACrB,AACD,yBACE,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,gCACE,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,UAAa,AACb,eAAmB,CACpB,AACD,mCACE,gBAAiB,AACjB,iBAA2B,AAC3B,WAAY,AACZ,WAAY,AACZ,uBAA0B,CAC3B,AACD,qEACE,uBAA0B,CAC3B,AACD,uCACE,aAAe,CAChB,AACD,2CACE,eAAgB,AAChB,yBAA2B,CAC5B,AACD,4CACE,cAAgB,CACjB,AACD,mCACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,mCACE,WAAY,AACZ,UAAY,CACb,AACD,oCACE,eAAgB,AAChB,eAAuB,AACvB,WAAY,AACZ,SAAW,CACZ,AACD,0CACE,cAAe,AACf,cAAgB,CACjB,AACD,4BACE,aAAe,CAChB,AACD,kCACE,kBAAoB,CACrB,AACD,0CACE,iBAAmB,CACpB,AACD,+CACE,kBAAoB,CACrB,AACD,4BACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,uBAA0B,CAC3B,AACD,oCACA,gCACI,WAAY,AACZ,kBAAmB,AACnB,eAAiB,AACjB,SAAa,CAChB,AACD,mCACI,iBAAmB,CACtB,AACD,8BACI,SAAW,CACd,CACA",file:"Footer.vue",sourcesContent:["\nfooter[data-v-587cdab2] {\r\n  width:100%;\r\n  min-height: 200px;\r\n  float: left;\r\n  overflow-y: hidden;\r\n  background: #e9e9e9;\n}\n.footer[data-v-587cdab2]{\r\n  width: 80%;\r\n  float: left;\r\n  min-height: 50px;\r\n  margin-left: 10%; \r\n  margin-right: 10%;\r\n  overflow-y: hidden;\n}\n.footer-widget[data-v-587cdab2]{\r\n  width: 25%;\r\n  float: left;\r\n  margin-top: 50px;\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin-bottom: 0px;\n}\n.footer-widget li[data-v-587cdab2]{\r\n  list-style: none;\r\n  padding: 5px 10px 5px 10px;\r\n  float: left;\r\n  width: 100%;\r\n  color: #6f6f6f !important;\n}\n.footer-widget[data-v-587cdab2], .footer-widget li a[data-v-587cdab2]{\r\n  color: #6f6f6f !important;\n}\n.footer-widget .title[data-v-587cdab2]{\r\n  color: #4c4c4c;\n}\n.footer-widget li a[data-v-587cdab2]:hover{\r\n  cursor: pointer;\r\n  text-decoration: underline;\n}\nfooter-widget .title[data-v-587cdab2]:hover{\r\n  cursor: default;\n}\n.community .title[data-v-587cdab2]{\r\n  width: 100%;\r\n  float: left;\r\n  height: 40px;\r\n  text-align: left;\r\n  padding-top: 5px;\n}\n.community .links[data-v-587cdab2]{\r\n  width: 100%;\r\n  float: left;\n}\n.community .link i[data-v-587cdab2]{\r\n  font-size: 24px;\r\n  padding: 0 10px 0 10px;\r\n  float: left;\r\n  width: 20%;\n}\n.community .link i[data-v-587cdab2]:hover{\r\n  color: #1caceb;\r\n  cursor: pointer;\n}\n.text-gray[data-v-587cdab2]{\r\n  color: #212529;\n}\n.contact-us li i[data-v-587cdab2]{\r\n  padding-right: 10px;\n}\n.contact-us li .fa-phone[data-v-587cdab2]{\r\n  padding-right: 9px;\n}\n.contact-us li .fa-mobile-alt[data-v-587cdab2]{\r\n  padding-right: 12px;\n}\n.copyright[data-v-587cdab2]{\r\n  width: 100%;\r\n  float: left;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  font-size: 12px;\r\n  text-align: center;\r\n  margin-top: 45px;\r\n  color: #6f6f6f !important;\n}\n@media screen and (max-width: 992px){\n.footer-widget[data-v-587cdab2]{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-right: 0%;\r\n    padding: 0px;\n}\n.community .title[data-v-587cdab2]{\r\n    text-align: center;\n}\n.community i[data-v-587cdab2]{\r\n    width: 20%;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=24.2f893b0de09d0541cc6d.js.map