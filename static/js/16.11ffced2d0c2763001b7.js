webpackJsonp([16],{1003:function(a,t,e){var n=e(943);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e(416)("1f830ae0",n,!0)},1111:function(a,t,e){a.exports={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-section"},[n("span",{staticClass:"logo"},[n("a",{staticClass:"navbar-brand",on:{click:function(t){return a.redirect("/")}}},[n("img",{staticStyle:{"margin-bottom":"5px"},attrs:{src:e(863)}}),a._v(" "),n("label",{domProps:{innerHTML:a._s(a.common.APP_NAME_HTML)}})])]),a._v(" "),n("span",{staticClass:"menu"},[a._m(0),a._v(" "),n("ul",{staticClass:"header-primary-menu"},[n("li",{staticClass:"nav-item",on:{click:function(t){return a.redirect("/signup")}}},[n("a",{staticClass:"nav-link"},[a._v("Register")])]),a._v(" "),n("li",{staticClass:"nav-item",on:{click:function(t){return a.redirect("/login")}}},[n("a",{staticClass:"nav-link"},[a._v("Login")])])])])]),a._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":"#navbarSupportedContent"},on:{click:function(t){return a.redirect("/signup")}}},[n("a",{staticClass:"nav-link"},[a._v("Register")])]),a._v(" "),n("li",{staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":"#navbarSupportedContent"},on:{click:function(t){return a.redirect("/login")}}},[n("a",{staticClass:"nav-link"},[a._v("Login")])])])])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"navbar-menu-toggler-md"},[e("i",{staticClass:"fa fa-bars",attrs:{"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onclick:"void(0)"}})])}]}},438:function(a,t,e){e(1003);var n=e(300)(e(924),e(1111),"data-v-161812ce",null);a.exports=n.exports},451:function(a,t,e){"use strict";t.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"AGENCY_LEVEL_1",accountStatus:"ALL",description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_LEVEL_1",accountStatus:"ALL",description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_LEVEL_1",accountStatus:"ALL",description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"},vehicleTypes:[{label:"Bus",value:"bus"},{label:"Plane",value:"plane"},{label:"Jeepney",value:"jeep"},{label:"Private Car",value:"private_car"},{label:"Motorcycle",value:"motorcycle"},{label:"Shippings",value:"shppings"},{label:"Train",value:"train"},{label:"Van",value:"van"},{label:"Others",value:"others"}]}},863:function(a,t,e){a.exports=e.p+"static/img/logo_white.2c2147e.png"},924:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(38),i=(e(54),e(451));t.default={mounted:function(){},data:function(){return{common:i.a}},methods:{redirect:function(a){n.a.push(a)}}}},943:function(a,t,e){t=a.exports=e(415)(),t.push([a.i,".header[data-v-161812ce]{width:100%;float:left;min-height:70px;background:#005b96;overflow-y:hidden}.header-section[data-v-161812ce]{min-height:50px;overflow-y:hidden;width:90%;font-size:12px;color:#fff;margin:5px auto}.header-section .logo[data-v-161812ce]{width:20%;float:left;height:100%}.header-section .menu[data-v-161812ce]{width:80%;float:left;height:100%;margin-top:10px}.navbar-menu-toggler-md[data-v-161812ce]{width:100%;text-align:right;float:left;display:none}.menu .header-primary-menu[data-v-161812ce]{width:100%;float:left;min-height:30px;list-style:none;overflow-y:hidden;padding:0;margin-bottom:0!important}.btn-white[data-v-161812ce]{background:#fff;color:#00bff3!important}.fa-bars[data-v-161812ce]{border:1px solid #fff;font-size:20px!important;padding:10px 8px!important;color:#fff!important}.fa-bars[data-v-161812ce]:hover{cursor:pointer}.menu .header-primary-menu .nav-item[data-v-161812ce]{float:right;font-size:15px}.header-primary-menu .nav-item .nav-link[data-v-161812ce]{padding:.5rem}.header-primary-menu .nav-item a[data-v-161812ce]{color:#fff;font-family:MuseoRounded700,sans-serif}.header-primary-menu .nav-item .nav-link[data-v-161812ce]:hover{cursor:pointer;text-decoration:underline}.navbar-toggler[data-v-161812ce]{background:inherit!important;border-radius:0!important;border:1px solid #fff;font-size:20px!important;padding:10px 8px!important;color:#fff!important}.navbar-toggler[data-v-161812ce]:hover{color:#00bff3!important;background:#fff!important}.navbar-collapse .show[data-v-161812ce]{display:none!important}.header-section .logo a img[data-v-161812ce]{width:50px}.header-section .logo a label[data-v-161812ce]{font-size:24px;margin-bottom:0}@media screen and (max-width:992px){.header-section[data-v-161812ce]{width:90%!important;margin:0 5%!important}.header-section .logo[data-v-161812ce]{width:80%;margin-top:10px}.header-section .menu[data-v-161812ce]{width:20%;margin-top:15px}.menu .header-primary-menu[data-v-161812ce],.menu .top-menu[data-v-161812ce]{display:none}.navbar[data-v-161812ce]{width:90%!important;margin:0 5%!important;padding:0!important}.navbar-collapse[data-v-161812ce]{width:100%!important;position:absolute!important;z-index:100000!important;float:left;border-bottom:1px solid #00bff3}.navbar-nav[data-v-161812ce]{background:#fff!important;margin:0!important}.navbar-nav .nav-link[data-v-161812ce]{width:100%!important;padding:17px 30px!important}.navbar-nav .nav-link[data-v-161812ce]:hover{background:#00bff3;color:#fff}.navbar-nav .nav-link[data-v-161812ce]{color:#00bff3}.navbar-menu-toggler-md[data-v-161812ce]{width:100%;text-align:right;float:left;display:block}}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/modules/home/Landing/Header.vue"],names:[],mappings:"AACA,yBAAyB,WAAW,WAAW,gBAAgB,mBAAmB,iBAAiB,CAClG,AACD,iCAAiC,gBAAgB,kBAAkB,UAAU,eAAe,WAAW,eAAwB,CAC9H,AACD,uCAAuC,UAAU,WAAW,WAAW,CACtE,AACD,uCAAuC,UAAU,WAAW,YAAY,eAAe,CACtF,AACD,yCAAyC,WAAW,iBAAiB,WAAW,YAAY,CAC3F,AACD,4CAA4C,WAAW,WAAW,gBAAgB,gBAAgB,kBAAkB,UAAY,yBAA4B,CAC3J,AACD,4BAA4B,gBAAgB,uBAAwB,CACnE,AACD,0BAA0B,sBAAsB,yBAA0B,2BAAqC,oBAAqB,CACnI,AACD,gCAAgC,cAAc,CAC7C,AACD,sDAAsD,YAAY,cAAc,CAC/E,AACD,0DAA0D,aAAa,CACtE,AACD,kDAAkD,WAAW,sCAAuC,CACnG,AACD,gEAAgE,eAAe,yBAAyB,CACvG,AACD,iCAAiC,6BAA8B,0BAA6B,sBAAsB,yBAA0B,2BAAqC,oBAAqB,CACrM,AACD,uCAAuC,wBAAyB,yBAA0B,CACzF,AACD,wCAAwC,sBAAuB,CAC9D,AACD,6CAA6C,UAAU,CACtD,AACD,+CAA+C,eAAe,eAAiB,CAC9E,AACD,oCACA,iCAAiC,oBAAqB,qBAA2B,CAChF,AACD,uCAAuC,UAAU,eAAe,CAC/D,AACD,uCAAuC,UAAU,eAAe,CAC/D,AACD,6EAA6E,YAAY,CACxF,AACD,yBAAyB,oBAAqB,sBAA4B,mBAAoB,CAC7F,AACD,kCAAkC,qBAAsB,4BAA6B,yBAA0B,WAAW,+BAA+B,CACxJ,AACD,6BAA6B,0BAA2B,kBAAmB,CAC1E,AACD,uCAAuC,qBAAsB,2BAAsC,CAClG,AACD,6CAA6C,mBAAmB,UAAU,CACzE,AACD,uCAAuC,aAAa,CACnD,AACD,yCAAyC,WAAW,iBAAiB,WAAW,aAAa,CAC5F,CACA",file:"Header.vue",sourcesContent:["\n.header[data-v-161812ce]{width:100%;float:left;min-height:70px;background:#005b96;overflow-y:hidden\n}\n.header-section[data-v-161812ce]{min-height:50px;overflow-y:hidden;width:90%;font-size:12px;color:#fff;margin:5px auto 5px auto\n}\n.header-section .logo[data-v-161812ce]{width:20%;float:left;height:100%\n}\n.header-section .menu[data-v-161812ce]{width:80%;float:left;height:100%;margin-top:10px\n}\n.navbar-menu-toggler-md[data-v-161812ce]{width:100%;text-align:right;float:left;display:none\n}\n.menu .header-primary-menu[data-v-161812ce]{width:100%;float:left;min-height:30px;list-style:none;overflow-y:hidden;padding:0px;margin-bottom:0px !important\n}\n.btn-white[data-v-161812ce]{background:#fff;color:#00bff3 !important\n}\n.fa-bars[data-v-161812ce]{border:solid 1px #fff;font-size:20px !important;padding:10px 8px 10px 8px !important;color:#fff !important\n}\n.fa-bars[data-v-161812ce]:hover{cursor:pointer\n}\n.menu .header-primary-menu .nav-item[data-v-161812ce]{float:right;font-size:15px\n}\n.header-primary-menu .nav-item .nav-link[data-v-161812ce]{padding:.5rem\n}\n.header-primary-menu .nav-item a[data-v-161812ce]{color:#fff;font-family:MuseoRounded700, sans-serif\n}\n.header-primary-menu .nav-item .nav-link[data-v-161812ce]:hover{cursor:pointer;text-decoration:underline\n}\n.navbar-toggler[data-v-161812ce]{background:inherit !important;border-radius:0px !important;border:solid 1px #fff;font-size:20px !important;padding:10px 8px 10px 8px !important;color:#fff !important\n}\n.navbar-toggler[data-v-161812ce]:hover{color:#00bff3 !important;background:#fff !important\n}\n.navbar-collapse .show[data-v-161812ce]{display:none !important\n}\n.header-section .logo a img[data-v-161812ce]{width:50px\n}\n.header-section .logo a label[data-v-161812ce]{font-size:24px;margin-bottom:0px\n}\n@media screen and (max-width: 992px){\n.header-section[data-v-161812ce]{width:90% !important;margin:0 5% 0 5% !important\n}\n.header-section .logo[data-v-161812ce]{width:80%;margin-top:10px\n}\n.header-section .menu[data-v-161812ce]{width:20%;margin-top:15px\n}\n.menu .top-menu[data-v-161812ce],.menu .header-primary-menu[data-v-161812ce]{display:none\n}\n.navbar[data-v-161812ce]{width:90% !important;margin:0 5% 0 5% !important;padding:0 !important\n}\n.navbar-collapse[data-v-161812ce]{width:100% !important;position:absolute !important;z-index:100000 !important;float:left;border-bottom:solid 1px #00bff3\n}\n.navbar-nav[data-v-161812ce]{background:#fff !important;margin:0 !important\n}\n.navbar-nav .nav-link[data-v-161812ce]{width:100% !important;padding:17px 30px 17px 30px !important\n}\n.navbar-nav .nav-link[data-v-161812ce]:hover{background:#00bff3;color:#fff\n}\n.navbar-nav .nav-link[data-v-161812ce]{color:#00bff3\n}\n.navbar-menu-toggler-md[data-v-161812ce]{width:100%;text-align:right;float:left;display:block\n}\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=16.11ffced2d0c2763001b7.js.map