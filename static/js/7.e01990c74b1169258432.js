webpackJsonp([7],{394:function(e,t,a){a(572);var l=a(268)(a(488),a(637),"data-v-567aaf46",null);e.exports=l.exports},407:function(e,t,a){"use strict";t.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BIRDSEYE",APP_NAME_HTML:"BIRDSEYE",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"www.increment.ltd",COPYRIGHT:"BIRDSEYE "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseye"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"}}},433:function(e,t,a){"use strict";a(47),a(20),a(407);t.a={id:"createPlacesModal",size:"modal-md",title:"Add Places",background:null,inputs:[{row:"full",label:"Latitude",variable:"latitude",placeholder:"Enter Latitude",value:null,required:!0,id:"latitude",type:"input",inputType:"text",validation:{size:1,type:"text"}},{row:"full",label:"Longitude",variable:"longitude",placeholder:"Enter Longitude",value:null,required:!0,id:"longitude",type:"input",inputType:"text",validation:{size:1,type:"text"}},{row:"full",label:"Route",variable:"route",placeholder:"Enter Route",value:null,required:!0,id:"route",type:"input",inputType:"text",validation:{size:1,type:"text"}},{row:"full",label:"Locality",variable:"locality",placeholder:"Enter Locality",value:null,required:!0,id:"locality",type:"input",inputType:"text",validation:{size:1,type:"text"}},{row:"full",label:"Country",variable:"country",placeholder:"Enter Country",value:null,required:!0,id:"country",type:"input",inputType:"text",validation:{size:1,type:"text"}},{row:"full",label:"Region",variable:"region",placeholder:"Enter Region",value:null,required:!0,id:"region",type:"input",inputType:"text",validation:{size:1,type:"text"}},{row:"full",label:"Date",variable:"date",placeholder:"Enter date",value:null,required:!0,id:"longitude",type:"input",inputType:"date",validation:{size:1,type:"text"}},{row:"full",label:"Time",variable:"time",placeholder:"Enter time",value:null,required:!0,id:"time",type:"input",inputType:"time",validation:{size:1,type:"text"}}],route:"visited_places/create",button:{left:"Cancel",right:"Submit"},sort:null,params:[{variable:"account_id",value:null}]}},434:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(269),i=a.n(l),n=a(435),r=a.n(n),o=(a(32),a(47)),s=a(20);t.default={data:function(){return{user:o.a.user,config:s.default,errorMessage:null,parameter:null}},props:["property"],methods:{hideModal:function(){$("#"+this.property.id).modal("hide")},validateTyping:function(e){switch(e.validation.type){case"email":!1===o.a.validateEmail(e.value)?e.validation.flag=!1:e.validation.flag=!0}},validate:function(){this.parameter={};for(var e=this.property.inputs,t=0;t<e.length;t++){var a=e[t];if(!0===a.required||!1===a.required&&(null!==a.value||""!==a.value)){if("select_increment"===a.type||"select_specified"===a.type||"select_decrement"===a.type)this.parameter[a.variable]=a.value;else if("text"===a.validation.type){if(null===a.value)return this.errorMessage=a.label+" is required",!1;if(null!==a.value&&a.validation.size>a.value.length)return this.errorMessage=a.label+" must be greater than equal to "+a.validation.size,!1;this.parameter[a.variable]=a.value}else if("date"===a.validation.type||"datetime-local"===a.validation.type){if(null===a.value)return this.errorMessage=a.label+" is required",!1;this.parameter[a.variable]=a.value}else if("number"===a.validation.type){if(null===a.value||a.validation.size>parseFloat(a.value))return this.errorMessage=a.label+" must be greater than equal to "+a.validation.size,!1;this.parameter[a.variable]=parseFloat(a.value)}else if("email"===a.validation.type){if(!1===o.a.validateEmail(a.value))return this.errorMessage=a.label+" is invalid",!1;this.parameter[a.variable]=a.value}}else null===a.value&&""===a.value||("account_id"===a.variable?this.parameter[a.variable]=this.user.userID:this.parameter[a.variable]=a.value)}return this.errorMessage=null,!0},addParams:function(){for(var e=0;e<this.property.params.length;e++){var t=this.property.params[e];this.parameter[t.variable]=t.value}},submit:function(){var e=this;$("#loading").css({display:"block"}),this.validate()?(this.addParams(),this.APIRequest(this.property.route,this.parameter).then(function(t){if($("#loading").css({display:"none"}),null!==t.data)e.errorMessage=null,e.hideModal(),e.$parent.retrieve({created_at:"desc"},{column:"created_at",value:""});else if(null!==t.error){var a=!0,l=!1,n=void 0;try{for(var o,s=r()(i()(t.error.message));!(a=(o=s.next()).done);a=!0){var u=o.value;e.errorMessage=t.error.message[u][0];break}}catch(e){l=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(l)throw n}}}})):$("#loading").css({display:"none"})}}}},435:function(e,t,a){e.exports={default:a(437),__esModule:!0}},436:function(e,t,a){"use strict";t.__esModule=!0;var l=a(270),i=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}},437:function(e,t,a){a(272),a(271),e.exports=a(440)},438:function(e,t,a){var l=a(126),i=a(33)("toStringTag"),n="Arguments"==l(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=r(t=Object(e),i))?a:n?l(t):"Object"==(o=l(t))&&"function"==typeof t.callee?"Arguments":o}},439:function(e,t,a){var l=a(438),i=a(33)("iterator"),n=a(70);e.exports=a(16).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||n[l(e)]}},440:function(e,t,a){var l=a(41),i=a(439);e.exports=a(16).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return l(t.call(e))}},441:function(e,t,a){t=e.exports=a(379)(),t.push([e.i,".form-control[data-v-0f93a2c4]{min-height:50px!important}.input-group[data-v-0f93a2c4]{margin-bottom:10px!important}.input-group-addon[data-v-0f93a2c4]{width:100px!important;background:#22b173!important;color:#fff!important}.invalid-inputs[data-v-0f93a2c4]{border:1px solid red!important}.float-left[data-v-0f93a2c4]{float:left!important}","",{version:3,sources:["/Users/macbookpro/Desktop/vue/tinabangay/src/components/increment/generic/modal/Modal.vue"],names:[],mappings:"AACA,+BACE,yBAA4B,CAC7B,AACD,8BACE,4BAA+B,CAChC,AACD,oCACE,sBAAwB,AACxB,6BAA+B,AAC/B,oBAAuB,CACxB,AACD,iCACE,8BAAqC,CACtC,AACD,6BACE,oBAAuB,CACxB",file:"Modal.vue",sourcesContent:["\n.form-control[data-v-0f93a2c4]{\n  min-height: 50px !important;\n}\n.input-group[data-v-0f93a2c4]{\n  margin-bottom: 10px !important;\n}\n.input-group-addon[data-v-0f93a2c4]{\n  width: 100px !important;\n  background: #22b173 !important;\n  color: #fff !important;\n}\n.invalid-inputs[data-v-0f93a2c4]{\n  border: solid 1px #ff0000 !important;\n}\n.float-left[data-v-0f93a2c4]{\n  float: left !important;\n}\n"],sourceRoot:""}])},442:function(e,t,a){var l=a(441);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(380)("1b48f977",l,!0)},444:function(e,t,a){a(442);var l=a(268)(a(434),a(445),"data-v-0f93a2c4",null);e.exports=l.exports},445:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:e.property.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",class:e.property.size,attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header",class:e.property.background},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v(e._s(e.property.title))]),e._v(" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){e.hideModal()}}},[a("span",{class:{"text-primary":null===e.property.background,"text-white":null!==e.property.background},attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),a("div",{staticClass:"modal-body"},[null!==e.errorMessage?a("span",{staticClass:"text-danger text-center"},[a("label",[a("b",[e._v("Opps! ")]),e._v(e._s(e.errorMessage))])]):e._e(),e._v(" "),null!==e.errorMessage?a("br"):e._e(),e._v(" "),e._l(e.property.inputs,function(t,l){return a("div",{key:l,staticClass:"form-group",class:"full"!==t.row?t.row+" float-left":""},[a("label",{staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[e._v("\n            "+e._s(t.label)+"\n            "),!0===t.required?a("label",{staticClass:"text-danger"},[e._v("*")]):e._e()]),e._v(" "),("input"===t.type||"textarea"===t.type)&&null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length?a("label",{staticClass:"text-danger",staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[a("b",[e._v("Opps!")]),e._v(" Length must be greater than equal "+e._s(t.validation.size)+".")]):e._e(),e._v(" "),"input"===t.type&&null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag?a("label",{staticClass:"text-danger",staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[a("b",[e._v("Opps!")]),e._v(" Invalid email address.")]):e._e(),e._v(" "),"input"===t.type&&null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)?a("label",{staticClass:"text-danger",staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[a("b",[e._v("Opps!")]),e._v(" Minimum value is "+e._s(t.validation.size)+".")]):e._e(),e._v(" "),"checkbox"===t.inputType&&"input"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)||null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length||null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag},attrs:{placeholder:t.placeholder,disabled:!0===t.disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{keyup:function(a){e.validateTyping(t)},change:function(a){var l=t.value,i=a.target,n=!!i.checked;if(Array.isArray(l)){var r=e._i(l,null);i.checked?r<0&&e.$set(t,"value",l.concat([null])):r>-1&&e.$set(t,"value",l.slice(0,r).concat(l.slice(r+1)))}else e.$set(t,"value",n)}}}):"radio"===t.inputType&&"input"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)||null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length||null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag},attrs:{placeholder:t.placeholder,disabled:!0===t.disabled,type:"radio"},domProps:{checked:e._q(t.value,null)},on:{keyup:function(a){e.validateTyping(t)},change:function(a){e.$set(t,"value",null)}}}):"input"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)||null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length||null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag},attrs:{placeholder:t.placeholder,disabled:!0===t.disabled,type:t.inputType},domProps:{value:t.value},on:{keyup:function(a){e.validateTyping(t)},input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}):e._e(),e._v(" "),"select_specified"===t.type?a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control form-control-custom",attrs:{placeholder:t.placeholder},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",a.target.multiple?l:l[0])}}},e._l(t.options,function(t,l){return a("option",{key:l,domProps:{value:t.value}},[e._v(e._s(t.label))])})):e._e(),e._v(" "),"select_decrement"===t.type?a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control form-control-custom",attrs:{placeholder:t.placeholder},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",a.target.multiple?l:l[0])}}},e._l(t.options.max,function(l,i){return a("option",{key:i,domProps:{value:t.options.start-l}},[e._v(e._s(t.options.start-l+t.options.label))])})):e._e(),e._v(" "),"select_increment"===t.type?a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control form-control-custom",attrs:{placeholder:t.placeholder},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",a.target.multiple?l:l[0])}}},e._l(t.options.max,function(l,i){return a("option",{key:i,domProps:{value:t.options.start+l}},[e._v(e._s(t.options.start+l+t.options.label))])})):e._e(),e._v(" "),"textarea"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&t.validation.size>t.value.length},attrs:{rows:t.textAreaRows,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}):e._e()])})],2),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.hideModal()}}},[e._v(e._s(e.property.button.left))]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.submit()}}},[e._v(e._s(e.property.button.right))])])])])])},staticRenderFns:[]}},488:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(15);a.n(l);t.default={name:"",create:function(){},mounted:function(){},data:function(){return{}},props:{},components:{trend:a(613)},methods:{}}},499:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(269),i=a.n(l),n=a(436),r=a.n(n),o=a(32),s=a(47),u=a(407),c=a(433);t.default={mounted:function(){this.retrieve()},data:function(){return{common:u.a,user:s.a.user,modalProperty:c.a,data:null,message:"Test message",messageFlag:!0}},components:{"increment-modal":a(444)},methods:{redirect:function(e){o.a.push(e)},hideMessage:function(){this.messageFlag=!1},retrieve:function(){var e=this,t={condition:[{clause:"=",column:"account_id",value:this.user.userID}],sort:{locality:"desc"}};$("#loading").css({display:"block"}),this.APIRequest("visited_places/retrieve",t).then(function(t){$("#loading").css({display:"none"}),e.data=t.data})},removeItem:function(e){var t=this,a={id:e};$("#loading").css({display:"block"}),this.APIRequest("visited_places/delete",a).then(function(e){t.retrieve()})},showModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(e){case"create":this.modalProperty=r()({},c.a);this.modalProperty.inputs.map(function(e){e.value=null}),this.modalProperty.params[0].value=this.user.userID;break;case"update":var a=r()({},this.modalProperty),l={title:"Update Requests",route:"visited_places/update",button:{left:"Cancel",right:"Update"},sort:{column:"created_at",value:"desc"},params:[{variable:"id",value:t.id}]};a=r()({},a,l);i()(t);a.inputs.map(function(e){"longitude"===e.variable&&(e.value=t.longitude),"latitude"===e.variable&&(e.value=t.latitude),"country"===e.variable&&(e.value=t.country),"locality"===e.variable&&(e.value=t.locality),"region"===e.variable&&(e.value=t.region),"date"===e.variable&&(e.value=t.date),"time"===e.variable&&(e.value=t.time)}),this.modalProperty=r()({},a)}$("#createPlacesModal").modal("show")}}}},512:function(e,t,a){t=e.exports=a(379)(),t.push([e.i,".custom-header-color[data-v-264c50f4]{color:#005b96}","",{version:3,sources:["/Users/macbookpro/Desktop/vue/tinabangay/src/modules/places/Trend.vue"],names:[],mappings:"AACA,sCAAsC,aAAa,CAClD",file:"Trend.vue",sourcesContent:["\n.custom-header-color[data-v-264c50f4]{color:#005b96\n}\n"],sourceRoot:""}])},524:function(e,t,a){t=e.exports=a(379)(),t.push([e.i,".half-rule[data-v-567aaf46]{margin-left:0;text-align:left;width:50%}","",{version:3,sources:["/Users/macbookpro/Desktop/vue/tinabangay/src/modules/dashboard/Dashboard.vue"],names:[],mappings:"AACA,4BACE,cAAe,AACf,gBAAiB,AACjB,SAAW,CACZ",file:"Dashboard.vue",sourcesContent:["\n.half-rule[data-v-567aaf46] {\n  margin-left: 0;\n  text-align: left;\n  width: 50%;\n}\n"],sourceRoot:""}])},560:function(e,t,a){var l=a(512);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(380)("e5c66786",l,!0)},572:function(e,t,a){var l=a(524);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(380)("0a4b68a0",l,!0)},613:function(e,t,a){a(560);var l=a(268)(a(499),a(624),"data-v-264c50f4",null);e.exports=l.exports},624:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"btn btn-primary pull-right",staticStyle:{"margin-bottom":"25px","margin-top":"25px"},on:{click:function(t){e.showModal("create",null)}}},[e._v("New Place")]),e._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(t){e.hideMessage()}}},[e._v("Hide Message")]),e._v(" "),!0===e.messageFlag?a("h1",[e._v(e._s(e.message))]):a("h2",[e._v("You hide me: "+e._s(e.message))]),e._v(" "),a("table",{staticClass:"table table-responsive table-bordered"},[e._m(0),e._v(" "),a("tbody",e._l(e.data,function(t,l){return a("tr",{key:l},[a("td",{staticClass:"text-warning"},[e._v(e._s(t.country))]),e._v(" "),a("td",{staticClass:"text-danger"},[e._v(e._s(t.region))]),e._v(" "),a("td",{staticClass:"text-primary"},[e._v(e._s("testin"===t.locality?"true":t.locality))]),e._v(" "),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){e.showModal("update",t)}}},[a("i",{staticClass:"fas fa-edit"})]),e._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(a){e.removeItem(t.id)}}},[a("i",{staticClass:"fas fa-trash"})])])])}))]),e._v(" "),a("increment-modal",{attrs:{property:e.modalProperty}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"custom-header-color"},[a("td",[e._v("Coutry")]),e._v(" "),a("td",[e._v("Region")]),e._v(" "),a("td",[e._v("Locality")]),e._v(" "),a("td",[e._v("Action")])])}]}},637:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("trend")],1),e._v(" "),a("div",[a("trend")],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.e01990c74b1169258432.js.map