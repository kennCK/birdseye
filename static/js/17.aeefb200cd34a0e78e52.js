webpackJsonp([17],{1002:function(t,a,e){var n=e(942);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(416)("7c9aaaca",n,!0)},1111:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"system-header"},[n("a",{staticClass:"navbar-brand",on:{click:function(a){return t.redirect("dashboard")}}},[n("img",{staticClass:"logo-brand",attrs:{src:e(863)}}),t._v(" "),n("label",{staticClass:"navbar-brand hide-on-mobile text-white",domProps:{innerHTML:t._s(t.common.APP_NAME_HTML)}})])]),t._v(" "),n("nav",{staticClass:"header-navbar"},[n("span",{staticClass:"navbar-menu-toggler-md",class:{"active-menu":!0===t.menuFlag},attrs:{"data-toggle":"collapse","data-target":"#idfactory","aria-controls":"idfactory","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(a){return t.makeActive("menu")}}},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("span",{staticClass:"left-menu-icons"},[t.common.header.indexOf("status")||null===t.user?t._e():n("label",{staticClass:"account-type  hide-on-mobile bg-warning"},[t._v(t._s(t.user.type))])]),t._v(" "),n("span",{staticClass:"right-menu-icons"},[n("div",{staticClass:"dropdown"},[n("span",{staticClass:"nav-item",class:{"active-menu":!0===t.settingFlag},attrs:{"data-toggle":"dropdown",id:"settings","aria-haspopup":"true","aria-expanded":"false",onkeypress:t.makeActive("")},on:{click:function(a){return t.makeActive("dropdown")}}},[t._m(0),t._v(" "),n("span",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"settings"}},[n("span",{staticClass:"dropdown-item-profile"},[n("span",{staticClass:"account-picture text-center"},[n("span",{staticClass:"profile-photo-header"},[null!==t.user.profile?n("span",{staticClass:"profile-image-holder-header"},[n("img",{attrs:{src:t.config.BACKEND_URL+t.user.profile.url}})]):n("i",{staticClass:"fa fa-user-circle-o"})])]),t._v(" "),n("span",{staticClass:"account-info text-center"},[t._v(t._s(t.user.username))])]),t._v(" "),t._m(1),t._v(" "),t._l(t.common.profileMenu,function(a,e){return n("span",{key:e,staticClass:"dropdown-item",on:{click:function(e){return t.redirect(a.route)}}},[n("i",{class:a.icon}),t._v(" "),n("label",[t._v(t._s(a.title))])])}),t._v(" "),t._m(2),t._v(" "),n("span",{staticClass:"dropdown-item",on:{click:function(a){return t.openModal("#guideModal")}}},[n("i",{staticClass:"far fa-question-circle"}),t._v(" "),n("label",[t._v("Guide")])]),t._v(" "),n("span",{staticClass:"dropdown-item",on:{click:function(a){return t.openModal("#privacyModal")}}},[n("i",{staticClass:"fas fa-shield-alt"}),t._v(" "),n("label",[t._v("Privacy Policy")])]),t._v(" "),n("span",{staticClass:"dropdown-item",on:{click:function(a){return t.openModal("#termsAndConditionsModal")}}},[n("i",{staticClass:"fa fa-handshake-o"}),t._v(" "),n("label",[t._v("Terms and Conditions")])]),t._v(" "),n("span",{staticClass:"dropdown-item",on:{click:function(a){return t.logOut()}}},[n("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" "),n("label",[t._v("Logout")])])],2)])]),t._v(" "),null!==t.user.messages.data?n("div",{staticClass:"dropdown"},[n("span",{staticClass:"nav-item",attrs:{"data-toggle":"dropdown",id:"notifications","aria-haspopup":"true","aria-expanded":"false"}},[n("span",[n("i",{staticClass:"fas fa-envelope",staticStyle:{"font-size":"22px","margin-top":"2px"}}),t._v(" "),parseInt(t.user.messages.totalUnreadMessages)>0?n("label",{staticClass:"badge badge-danger",staticStyle:{"margin-left":"-15px"}},[t._v(t._s(t.user.messages.totalUnreadMessages))]):t._e()]),t._v(" "),n("span",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-notification",attrs:{"aria-labelledby":"notifications"}},[n("span",{staticClass:"notification-header",on:{click:function(a){return t.redirect("/"+t.common.messagesHeader.path)}}},[t._v("\n                  Recent\n                  "),n("label",{staticClass:"badge badge-danger"},[t._v(t._s(t.user.messages.totalUnreadMessages))])]),t._v(" "),t._l(t.user.messages.data,function(a,e){return null!==t.user.messages.data?n("span",{staticClass:"notification-item",on:{click:function(e){return t.redirect("/"+t.common.messagesHeader.path+"/"+a.payload,a)}}},[n("span",{staticClass:"notification-title"},[t._v("\n                    "+t._s(a.title.username)+"\n                    "),parseInt(a.total_unread_messages)>0?n("label",{staticClass:"badge badge-danger",staticStyle:{"margin-left":"5px"}},[t._v(t._s(a.total_unread_messages))]):t._e()]),t._v(" "),n("span",{staticClass:"notification-description"},[t._v(t._s(a.description))]),t._v(" "),n("span",{staticClass:"notification-date"},[t._v("Posted on "+t._s(a.created_at_human))])]):t._e()})],2)])]):t._e(),t._v(" "),null!==t.user.notifications.data?n("div",{staticClass:"dropdown"},[null!==t.user.notifications.data?n("span",{staticClass:"nav-item",class:{"active-menu":!0===t.notifFlag},attrs:{"data-toggle":"dropdown",id:"notifications","aria-haspopup":"true","aria-expanded":"false",onkeypress:t.makeActive("")},on:{click:function(a){return t.makeActive("notif")}}},[n("span",[n("i",{staticClass:"fa fa-bell"}),t._v(" "),parseInt(t.user.notifications.current)>0?n("label",{staticClass:"notifications badge-danger"},[t._v(t._s(t.user.notifications.current))]):t._e()]),t._v(" "),n("span",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-notification",attrs:{"aria-labelledby":"notifications"}},[n("span",{staticClass:"notification-header"},[t._v("\n                  Notifications\n                ")]),t._v(" "),t._l(t.user.notifications.data,function(a,e){return null!==t.user.notifications.data&&"ac_viewed"!==a.status?n("span",{staticClass:"notification-item",class:{"notification-item-unread":e<t.user.notifications.current},on:{click:function(n){return t.updateNotification(a,t.user.notifications.current,e)}}},[n("span",{staticClass:"notification-title"},[t._v("\n                    "+t._s(a.title)+"\n                  ")]),t._v(" "),n("span",{staticClass:"notification-description"},[t._v(t._s(a.description))]),t._v(" "),n("span",{staticClass:"notification-date"},[t._v("Posted on "+t._s(a.created_at_human))])]):t._e()})],2)]):t._e()]):t._e()])]),t._v(" "),null!==t.confirmation.message?n("div",{staticClass:"modal",attrs:{id:"timerHeaderModal"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),n("div",{staticClass:"modal-body"},[t._v("\n            "+t._s(t.confirmation.message)+"\n          ")]),t._v(" "),t._m(4)])])]):t._e(),t._v(" "),n("div")])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("i",{staticClass:"fa fa-cog"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"dropdown-item dropdown-item-menu-title"},[e("label",[t._v("Personal")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"dropdown-item dropdown-item-menu-title"},[e("label",[t._v("Documents")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[e("i",{staticClass:"fa fa-warning text-danger"}),t._v(" Confirmation!")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Ok")])])}]}},424:function(t,a,e){e(1002);var n=e(300)(e(883),e(1111),"data-v-12737b2c",null);t.exports=n.exports},451:function(t,a,e){"use strict";a.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",showOnAdmin:!0,description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_DOH",accountStatus:"ALL",showOnAdmin:!0,description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY_GOV",accountStatus:"ALL",showOnAdmin:!1,description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",showOnAdmin:!0,description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"},vehicleTypes:[{label:"Bus",value:"bus"},{label:"Plane",value:"plane"},{label:"Jeepney",value:"jeep"},{label:"Private Car",value:"private_car"},{label:"Motorcycle",value:"motorcycle"},{label:"Shippings",value:"shppings"},{label:"Train",value:"train"},{label:"Van",value:"van"},{label:"Others",value:"others"}]}},863:function(t,a,e){t.exports=e.p+"static/img/logo_white.2c2147e.png"},883:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=(e(38),e(54)),i=e(25),o=e(451),r=e(305),d=e(20);e.n(d);a.default={mounted:function(){this.initPusher()},data:function(){return{user:n.a.user,data:null,tokenData:n.a.tokenData,settingFlag:!1,menuFlag:!1,notifFlag:!1,config:i.default,confirmation:{message:null,action:null},sort:{column:"created_at",value:"desc"},accountNotif:null,common:o.a}},methods:{makeActive:function(t){"dropdown"===t?(this.settingFlag=!0,this.menuFlag=!1,this.notifFlag=!1):"sidebar"===t?(this.settingFlag=!1,this.menuFlag=!0,this.notifFlag=!1):"notif"===t?(this.settingFlag=!1,this.menuFlag=!1,this.notifFlag=!0):(this.settingFlag=!1,this.menuFlag=!1,this.notifFlag=!1)},logOut:function(){n.a.deaunthenticate()},redirect:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===a?n.a.redirect(t):this.updateMessages(t,a)},display:function(){},initPusher:function(){var t=this;"pusher"===i.default.PUSHER.flag?window.Echo=new r.a({broadcaster:"pusher",key:i.default.PUSHER.key,cluster:"ap1",encrypted:!0}):window.Echo=new r.a({broadcaster:"pusher",key:i.default.PUSHER.key,wsHost:i.default.PUSHER.wsHost,wsPort:i.default.PUSHER.wsPort,disableStats:!0,enabledTransports:["ws","wss"]}),window.Echo.channel(o.a.pusher.channel).listen("Call",function(t){console.log(t)}).listen(o.a.pusher.notifications,function(t){console.log(t),n.a.addNotification(t.data)}).listen(o.a.pusher.messages,function(t){n.a.addMessage(t.data)}).listen(o.a.pusher.messageGroup,function(a){parseInt(a.data.id)===n.a.messenger.messengerGroupId&&(console.log("group",a.data),n.a.messenger.group.status=parseInt(a.data.status),n.a.messenger.group.validations=a.data.validations,n.a.messenger.group.rating=a.data.rating,n.a.messenger.group.created_at_human=a.data.created_at_human,n.a.playNotificationSound(),!0===a.data.message_update&&t.retrieveMessages(parseInt(a.data.id)))})},retrieveMessages:function(t){var a={condition:[{value:t,column:"messenger_group_id",clause:"="}],sort:{created_at:"ASC"}};this.APIRequest("messenger_messages/retrieve",a).done(function(t){t.data.length>0?n.a.messenger.messages=t.data:n.a.messenger.messages=null})},openModal:function(t){$("#profileModal").modal("hide"),$("#guideModal").modal("hide"),$("#privacyModal").modal("hide"),$("#termsAndConditionsModal").modal("hide"),setTimeout(function(){$(t).modal("show")},100)},updateNotification:function(t,a,e){var i=this;if(parseInt(a)>e){var o={id:t.id};this.APIRequest("notifications/update",o).then(function(a){n.a.retrieveNotifications(i.user.userID),i.redirect(t.route)})}else this.redirect(t.route)},updateMessages:function(t,a){if(a.total_unread_messages>0){var e={messenger_group_id:a.messenger_group_id};this.APIRequest("messenger_messages/update_by_status",e).then(function(a){n.a.redirect(t)}),a.total_unread_messages=0}else n.a.redirect(t)}}}},942:function(t,a,e){a=t.exports=e(415)(),a.push([t.i,"body[data-v-12737b2c]{font-size:13px;font-weight:400}.btn[data-v-12737b2c]{font-size:12px}.btn[data-v-12737b2c]:hover{cursor:pointer}.account-picture i[data-v-12737b2c]{font-size:100px!important}.arrow[data-v-12737b2c]:before{border-right-color:#ed2a2a!important;position:relative;border-top-color:#ed2a2a!important}.table[data-v-12737b2c]{font-size:12px}.form-control[data-v-12737b2c]{height:35px;font-size:12px}.system-header[data-v-12737b2c]{float:left;height:50px;font-size:24px;width:18%;background:#011f4b;text-align:center;position:fixed}.header-navbar[data-v-12737b2c]{background:#005b96;height:50px;float:left;width:82%;position:fixed;margin-left:18%;z-index:5000}.system-header .navbar-brand[data-v-12737b2c]{color:#fff;text-transform:uppercase;line-height:30px}.header-navbar-nav[data-v-12737b2c]{height:50px;float:left;color:#fff;width:15%}.header-navbar-nav label[data-v-12737b2c]{font-size:13px;font-weight:500;vertical-align:middle;padding-left:10px}.header-navbar-nav i[data-v-12737b2c]{font-size:24px;padding:10px 0 0 5%}.header-navbar-nav[data-v-12737b2c]:hover{cursor:pointer;background:#005b96}#messagesHeader[data-v-12737b2c]{margin-left:70%}.nav-item[data-v-12737b2c]{width:5%;height:50px;text-align:center;float:right;color:#fff;display:inline;padding-top:0!important}.left-menu-icons[data-v-12737b2c],right-menu-icons[data-v-12737b2c]{height:50px;float:left;width:50%;position:fixed;z-index:100}.nav-item span i[data-v-12737b2c]{padding:12px 0 15px;font-size:24px}.nav-item span .notifications[data-v-12737b2c]{color:#fff;border-radius:5px;height:18px;width:18px;margin-left:-10px;font-size:10px;margin-top:15px;text-align:center;padding-top:2px}.nav-item span .notifications[data-v-12737b2c]:hover{cursor:pointer}.nav-item .label[data-v-12737b2c]{background:red;padding:5px;margin:-10px 0 0 -10px;border-radius:2px;border-color:solid 1px red;position:fixed;z-index:1}.nav-item[data-v-12737b2c]:hover{background:#011f4b;cursor:pointer}.dropdown-menu[data-v-12737b2c]{width:250px;min-height:250px;border-radius:0!important;padding-bottom:0!important}.dropdown-menu-notification[data-v-12737b2c]{padding-top:0!important;width:350px!important;height:400px!important;overflow-y:auto}.dropdown-item[data-v-12737b2c]{width:100%!important;height:40px!important;float:left!important;background:#fff!important;padding-top:0!important}.dropdown-item[data-v-12737b2c]:hover{background:#ddd!important}.dropdown-item i[data-v-12737b2c]{font-size:14px!important;padding-right:10px!important;color:#005b96!important}.dropdown-item label[data-v-12737b2c]{font-size:14px!important}.dropdown-item i[data-v-12737b2c]:hover,.dropdown-item label[data-v-12737b2c]:hover{cursor:pointer}.dropdown-header[data-v-12737b2c]{padding:5px 0 10px;width:100%;text-align:center;border-bottom:1px solid #ccc}.dropdown-item-profile[data-v-12737b2c]{height:auto;width:100%;float:left;top:0}.dropdown-item-menu-title label[data-v-12737b2c]{line-height:40px;font-weight:550}.dropdown-item-menu-title[data-v-12737b2c]:hover,.dropdown-item-menu-title label[data-v-12737b2c]:hover{cursor:default;background:#fff!important}#account[data-v-12737b2c]{background:#fff}.account-picture[data-v-12737b2c]{height:auto;width:100%;float:left;padding-bottom:12px}.account-info[data-v-12737b2c]{width:100%;display:inline-block;float:left;font-weight:550;color:#005b96;margin-top:25px}.dropdown-item-button[data-v-12737b2c]{height:50px;width:100%;float:left;background:#fff;border-top:1px solid #ddd}.dropdown-item-button button[data-v-12737b2c]{height:40px;border-radius:0;width:100px;margin-top:5px}.dropdown-item-button button[data-v-12737b2c]:hover{background:red;color:#fff}.navbar-menu-toggler-md[data-v-12737b2c]{height:50px;float:left;text-align:center;font-size:16px;color:#fff;line-height:50px;display:none}.navbar-menu-toggler-md[data-v-12737b2c]:hover{cursor:pointer;background:#005b96}.active-menu[data-v-12737b2c]{background:#005b96}.profile-photo-header[data-v-12737b2c]{float:left;width:100%;height:80px;color:#005b96}.profile-image-holder-header[data-v-12737b2c]{width:100%;float:left;height:80px;text-align:center;margin-top:25px}.profile-image-holder-header img[data-v-12737b2c]{width:80px;height:80px;border-radius:50%}.profile-photo-header i[data-v-12737b2c]{float:left!important;font-size:60px!important;line-height:80px!important;width:100%!important}.logo-brand[data-v-12737b2c]{width:25px;height:25px}.left-menu-icons .account-type[data-v-12737b2c]{padding:10px;margin-top:6px;margin-left:5px;border-radius:5px;font-size:11px;color:#fff;float:left}.semester-selector[data-v-12737b2c]{float:left;margin-top:6px}.semester-selector button[data-v-12737b2c]{height:36px!important;margin-left:5px}.semester-selector .dropdown-menu[data-v-12737b2c]{min-height:100px!important;overflow-y:hidden;margin-top:7px;font-size:14px!important;text-align:left}.semester-selector .dropdown-menu .dropdown-item[data-v-12737b2c]{padding:0!important;line-height:30px!important}.semester-selector .dropdown-menu .dropdown-item i[data-v-12737b2c]{padding-left:5px;padding-right:5px}.semester-selector .dropdown-menu .dropdown-item[data-v-12737b2c]:hover{cursor:pointer}.notification-header[data-v-12737b2c]{padding-top:10px;padding-bottom:10px;text-align:center}.notification-header[data-v-12737b2c],.notification-item[data-v-12737b2c]{width:100%;float:left;border-bottom:1px solid #ddd}.notification-item[data-v-12737b2c]:hover{cursor:pointer;background:#efefef}.notification-item-unread[data-v-12737b2c]{background:#efefef}.notification-title[data-v-12737b2c]{width:96%;margin-right:2%;margin-left:2%;float:left;font-size:12px;padding-top:5px;padding-bottom:5px;font-weight:600}.notification-description[data-v-12737b2c]{font-size:12px}.notification-date[data-v-12737b2c],.notification-description[data-v-12737b2c]{width:96%;margin-right:2%;margin-left:2%;float:left;color:#999;text-align:justify}.notification-date[data-v-12737b2c]{font-size:11px;margin-bottom:5px}@media (min-width:1200px){.system-header[data-v-12737b2c]{width:18%}.header-navbar[data-v-12737b2c]{width:82%;margin-left:18%}.header-navbar-nav[data-v-12737b2c]{width:15%!important}.navbar-menu-toggler-md[data-v-12737b2c]{display:none}.left-menu-icons[data-v-12737b2c]{width:40%!important}.right-menu-icons[data-v-12737b2c]{width:60%!important}.nav-item[data-v-12737b2c]{width:5%!important}}@media (max-width:1199px){.system-header[data-v-12737b2c]{width:18%}.header-navbar[data-v-12737b2c]{width:82%;margin-left:18%}.header-navbar-nav[data-v-12737b2c]{width:30%}.navbar-menu-toggler-md[data-v-12737b2c]{display:none}.left-menu-icons[data-v-12737b2c]{width:60%!important}.right-menu-icons[data-v-12737b2c]{width:40%}.nav-item[data-v-12737b2c]{width:10%}}@media (max-width:991px){.system-header[data-v-12737b2c]{width:30%}.header-navbar[data-v-12737b2c]{width:70%;margin-left:30%}.header-navbar-nav[data-v-12737b2c]{width:30%}.navbar-menu-toggler-md[data-v-12737b2c]{width:10%;text-align:center;display:block}.left-menu-icons[data-v-12737b2c]{width:30%!important}.right-menu-icons[data-v-12737b2c]{width:70%!important}.nav-item[data-v-12737b2c]{width:10%}}@media (max-width:767px){.header-margin[data-v-12737b2c]{width:10%!important}.system-header[data-v-12737b2c]{width:15%}.navbar-brand[data-v-12737b2c]{width:100%!important;margin:0!important}.header-navbar[data-v-12737b2c]{width:85%;margin-left:15%}.nav-item[data-v-12737b2c]{width:20%}.logo-brand[data-v-12737b2c]{width:30px;height:30px}.left-menu-icons[data-v-12737b2c]{width:20%!important}.right-menu-icons[data-v-12737b2c]{width:80%!important}.hide-on-mobile[data-v-12737b2c]{display:none!important}}@media (max-width:300px){.logo-brand[data-v-12737b2c]{width:30px;height:30px}}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/components/increment/generic/frame/Header.vue"],names:[],mappings:"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",file:"Header.vue",sourcesContent:["\nbody[data-v-12737b2c]{font-size:13px;font-weight:400\n}\n.btn[data-v-12737b2c]{font-size:12px\n}\n.btn[data-v-12737b2c]:hover{cursor:pointer\n}\n.account-picture i[data-v-12737b2c]{font-size:100px !important\n}\n.arrow[data-v-12737b2c]::before{border-right-color:#ed2a2a !important;position:relative;border-top-color:#ed2a2a !important\n}\n.table[data-v-12737b2c]{font-size:12px\n}\n.form-control[data-v-12737b2c]{height:35px;font-size:12px\n}\n.system-header[data-v-12737b2c]{float:left;height:50px;font-size:24px;width:18%;background:#011f4b;text-align:center;position:fixed\n}\n.header-navbar[data-v-12737b2c]{background:#005b96;height:50px;float:left;width:82%;position:fixed;margin-left:18%;z-index:5000\n}\n.system-header .navbar-brand[data-v-12737b2c]{color:#fff;text-transform:uppercase;line-height:30px\n}\n.header-navbar-nav[data-v-12737b2c]{height:50px;float:left;color:#fff;width:15%\n}\n.header-navbar-nav label[data-v-12737b2c]{font-size:13px;font-weight:500;vertical-align:middle;padding-left:10px\n}\n.header-navbar-nav i[data-v-12737b2c]{font-size:24px;padding:10px 0 0 5%\n}\n.header-navbar-nav[data-v-12737b2c]:hover{cursor:pointer;background:#005b96\n}\n#messagesHeader[data-v-12737b2c]{margin-left:70%\n}\n.nav-item[data-v-12737b2c]{width:5%;height:50px;text-align:center;float:right;color:#fff;display:inline;padding-top:0px !important\n}\n.left-menu-icons[data-v-12737b2c],right-menu-icons[data-v-12737b2c]{height:50px;float:left;width:50%;position:fixed;z-index:100\n}\n.nav-item span i[data-v-12737b2c]{padding:12px 0 15px 0;font-size:24px\n}\n.nav-item span .notifications[data-v-12737b2c]{color:#ffffff;border-radius:5px;height:18px;width:18px;margin-left:-10px;font-size:10px;margin-top:15px;text-align:center;padding-top:2px\n}\n.nav-item span .notifications[data-v-12737b2c]:hover{cursor:pointer\n}\n.nav-item .label[data-v-12737b2c]{background:#ff0000;padding:5px;margin:-10px 0 0 -10px;border-radius:2px;border-color:solid 1px #ff0000;position:fixed;z-index:1\n}\n.nav-item[data-v-12737b2c]:hover{background:#011f4b;cursor:pointer\n}\n.dropdown-menu[data-v-12737b2c]{width:250px;min-height:250px;border-radius:0px !important;padding-bottom:0px !important\n}\n.dropdown-menu-notification[data-v-12737b2c]{padding-top:0px !important;width:350px !important;height:400px !important;overflow-y:auto\n}\n.dropdown-item[data-v-12737b2c]{width:100% !important;height:40px !important;float:left !important;background:#fff !important;padding-top:0px !important\n}\n.dropdown-item[data-v-12737b2c]:hover{background:#ddd !important\n}\n.dropdown-item i[data-v-12737b2c]{font-size:14px !important;padding-right:10px !important;color:#005b96 !important\n}\n.dropdown-item label[data-v-12737b2c]{font-size:14px !important\n}\n.dropdown-item label[data-v-12737b2c]:hover,.dropdown-item i[data-v-12737b2c]:hover{cursor:pointer\n}\n.dropdown-header[data-v-12737b2c]{padding:5px 0 10px 0;width:100%;text-align:center;border-bottom:solid 1px #ccc\n}\n.dropdown-item-profile[data-v-12737b2c]{height:auto;width:100%;float:left;top:0\n}\n.dropdown-item-menu-title label[data-v-12737b2c]{line-height:40px;font-weight:550\n}\n.dropdown-item-menu-title[data-v-12737b2c]:hover,.dropdown-item-menu-title label[data-v-12737b2c]:hover{cursor:default;background:#fff !important\n}\n#account[data-v-12737b2c]{background:#fff\n}\n.account-picture[data-v-12737b2c]{height:auto;width:100%;float:left;padding-bottom:12px\n}\n.account-info[data-v-12737b2c]{width:100%;display:inline-block;float:left;font-weight:550;color:#005b96;margin-top:25px\n}\n.dropdown-item-button[data-v-12737b2c]{height:50px;width:100%;float:left;background:#fff;border-top:solid 1px #ddd\n}\n.dropdown-item-button button[data-v-12737b2c]{height:40px;border-radius:0;width:100px;margin-top:5px\n}\n.dropdown-item-button button[data-v-12737b2c]:hover{background:#ff0000;color:#fff\n}\n.navbar-menu-toggler-md[data-v-12737b2c]{height:50px;float:left;text-align:center;font-size:16px;color:#fff;line-height:50px;display:none\n}\n.navbar-menu-toggler-md[data-v-12737b2c]:hover{cursor:pointer;background:#005b96\n}\n.active-menu[data-v-12737b2c]{background:#005b96\n}\n.profile-photo-header[data-v-12737b2c]{float:left;width:100%;height:80px;color:#005b96\n}\n.profile-image-holder-header[data-v-12737b2c]{width:100%;float:left;height:80px;text-align:center;margin-top:25px\n}\n.profile-image-holder-header img[data-v-12737b2c]{width:80px;height:80px;border-radius:50%\n}\n.profile-photo-header i[data-v-12737b2c]{float:left !important;font-size:60px !important;line-height:80px !important;width:100% !important\n}\n.logo-brand[data-v-12737b2c]{width:25px;height:25px\n}\n.left-menu-icons .account-type[data-v-12737b2c]{padding:10px 10px 10px 10px;margin-top:6px;margin-left:5px;border-radius:5px;font-size:11px;color:#fff;float:left\n}\n.semester-selector[data-v-12737b2c]{float:left;margin-top:6px\n}\n.semester-selector button[data-v-12737b2c]{height:36px !important;margin-left:5px\n}\n.semester-selector .dropdown-menu[data-v-12737b2c]{min-height:100px !important;overflow-y:hidden;margin-top:7px;font-size:14px !important;text-align:left\n}\n.semester-selector .dropdown-menu .dropdown-item[data-v-12737b2c]{padding:0px !important;line-height:30px !important\n}\n.semester-selector .dropdown-menu .dropdown-item i[data-v-12737b2c]{padding-left:5px;padding-right:5px\n}\n.semester-selector .dropdown-menu .dropdown-item[data-v-12737b2c]:hover{cursor:pointer\n}\n.notification-header[data-v-12737b2c]{width:100%;float:left;border-bottom:solid 1px #ddd;padding-top:10px;padding-bottom:10px;text-align:center\n}\n.notification-item[data-v-12737b2c]{width:100%;float:left;border-bottom:solid 1px #ddd\n}\n.notification-item[data-v-12737b2c]:hover{cursor:pointer;background:#efefef\n}\n.notification-item-unread[data-v-12737b2c]{background:#efefef\n}\n.notification-title[data-v-12737b2c]{width:96%;margin-right:2%;margin-left:2%;float:left;font-size:12px;padding-top:5px;padding-bottom:5px;font-weight:600\n}\n.notification-description[data-v-12737b2c]{width:96%;margin-right:2%;margin-left:2%;float:left;color:#999;font-size:12px;text-align:justify\n}\n.notification-date[data-v-12737b2c]{width:96%;margin-right:2%;margin-left:2%;float:left;color:#999;font-size:11px;text-align:justify;margin-bottom:5px\n}\n@media (min-width: 1200px){\n.system-header[data-v-12737b2c]{width:18%\n}\n.header-navbar[data-v-12737b2c]{width:82%;margin-left:18%\n}\n.header-navbar-nav[data-v-12737b2c]{width:15% !important\n}\n.navbar-menu-toggler-md[data-v-12737b2c]{display:none\n}\n.left-menu-icons[data-v-12737b2c]{width:40% !important\n}\n.right-menu-icons[data-v-12737b2c]{width:60% !important\n}\n.nav-item[data-v-12737b2c]{width:5% !important\n}\n}\n@media (max-width: 1199px){\n.system-header[data-v-12737b2c]{width:18%\n}\n.header-navbar[data-v-12737b2c]{width:82%;margin-left:18%\n}\n.header-navbar-nav[data-v-12737b2c]{width:30%\n}\n.navbar-menu-toggler-md[data-v-12737b2c]{display:none\n}\n.left-menu-icons[data-v-12737b2c]{width:60% !important\n}\n.right-menu-icons[data-v-12737b2c]{width:40%\n}\n.nav-item[data-v-12737b2c]{width:10%\n}\n}\n@media (max-width: 991px){\n.system-header[data-v-12737b2c]{width:30%\n}\n.header-navbar[data-v-12737b2c]{width:70%;margin-left:30%\n}\n.header-navbar-nav[data-v-12737b2c]{width:30%\n}\n.navbar-menu-toggler-md[data-v-12737b2c]{width:10%;text-align:center;display:block\n}\n.left-menu-icons[data-v-12737b2c]{width:30% !important\n}\n.right-menu-icons[data-v-12737b2c]{width:70% !important\n}\n.nav-item[data-v-12737b2c]{width:10%\n}\n}\n@media (max-width: 767px){\n.header-margin[data-v-12737b2c]{width:10% !important\n}\n.system-header[data-v-12737b2c]{width:15%\n}\n.navbar-brand[data-v-12737b2c]{width:100% !important;margin:0px !important\n}\n.header-navbar[data-v-12737b2c]{width:85%;margin-left:15%\n}\n.nav-item[data-v-12737b2c]{width:20%\n}\n.logo-brand[data-v-12737b2c]{width:30px;height:30px\n}\n.left-menu-icons[data-v-12737b2c]{width:20% !important\n}\n.right-menu-icons[data-v-12737b2c]{width:80% !important\n}\n.hide-on-mobile[data-v-12737b2c]{display:none !important\n}\n}\n@media (max-width: 300px){\n.logo-brand[data-v-12737b2c]{width:30px;height:30px\n}\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=17.aeefb200cd34a0e78e52.js.map