webpackJsonp([15],{444:function(e,t,a){a(807);var l=a(300)(a(700),a(915),"data-v-c9d81936",null);e.exports=l.exports},448:function(e,t,a){"use strict";t.a={sidebarMenu:[{accountType:"ALL",accountStatus:"ALL",description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Visited Places",icon:"fa fa-map-marker",path:"places",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Temperature",icon:"fa fa-chart-line",path:"temperature/p",flag:!1,subMenu:null},{accountType:"ALL",accountStatus:"ALL",description:"My Rides",icon:"fa fa-car",path:"rides/p",flag:!1,subMenu:null},{accountType:"ADMIN",accountStatus:"ALL",description:"Accounts",icon:"fa fa-users",path:"admin/accounts",flag:!1,subMenu:null},{accountType:"AGENCY",accountStatus:"ALL",description:"Patients",icon:"fa fa-users",path:"patients",flag:!1,subMenu:null},{accountType:"AGENCY",accountStatus:"ALL",description:"Tracing",icon:"fa fa-sitemap",path:"tracing",flag:!1,subMenu:null},{accountType:"AGENCY",accountStatus:"ALL",description:"Temperature Summary",icon:"fa fa-chart-line",path:"temperature",flag:!1,subMenu:null}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"},{title:"Invite Friends",icon:"fa fa-users",route:"/referrals"}],APP_NAME:"BirdsEye",APP_NAME_HTML:"BirdsEye",APP_EMAIL:"support@increment.ltd",COMPANY:"Increment Technologies",COMPANY_URL:"http://www.increment.ltd",COPYRIGHT:"BirdsEye "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"},{title:"AGENCY"}],plan:!1,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address","sex","birth_date"]},{title:"Account",type:"account",allowed:[]}],referral:{message:"and let's be one in fighting COVID-19. ",emailMessage:".They can trace and have an birdseye view for COVID-19. Let's spread the good news!"},socialMedia:{facebook:"birdseyeph"},pusher:{channel:"birdseye",notifications:"Notifications",messages:"Message",validation:"Validation"}}},474:function(e,t,a){a(477);var l=a(300)(a(475),a(479),"data-v-190e8f7a",null);e.exports=l.exports},475:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(a(38),a(54)),i=a(448);t.default={mounted:function(){},data:function(){return{common:i.a,user:l.a.user,searchValue:null,results:null,selectedFlag:!1}},props:["property","placeholder"],methods:{getPlaces:function(){var e=this;if(null!==this.searchValue&&""!==this.searchValue&&!(this.searchValue.length<3)&&!0!==this.selectedFlag){for(var t="",a=0;a<this.searchValue.length;a++)" "!==this.searchValue[a]?t+=this.searchValue[a]:t+="%20";var l="https://maps.googleapis.com/maps/api/place/textsearch/json?query="+t+"&key="+this.property.GOOGLE_API_KEY,i={route:l};this.APIRequest("google_places/search",i).then(function(t){null!==t.data&&null!==t.data.results&&(e.results=t.data.results)})}},clear:function(){this.searchValue=null,this.results=null},onCancel:function(){this.clear(),this.$emit("onFinish",null),this.selectedFlag=!1},setSelectedItem:function(e){var t=e.formatted_address.split(", "),a=t[t.length-1],l=t[t.length-2],i=t[t.length-3],r={latitude:e.geometry.location.lat,longitude:e.geometry.location.lng,route:e.name+(t.length>3?", "+t[0]:""),locality:i,country:a,region:l};this.searchValue=r.route,this.results=null,this.selectedFlag=!0,this.$emit("onFinish",r)}}}},476:function(e,t,a){t=e.exports=a(415)(),t.push([e.i,".google-autocomplete-holder[data-v-190e8f7a]{position:relative}.results-holder[data-v-190e8f7a]{width:100%;position:absolute;background:#fff;z-index:10000;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc}label[data-v-190e8f7a]{width:100%;float:left;border-bottom:1px solid #ccc;padding:10px 20px;margin-bottom:0}.close-icon[data-v-190e8f7a]{position:absolute;right:10px;top:10px;height:30px;width:30px;line-height:30px;text-align:center;font-size:18px;background:#ccc;color:#fff;border-radius:50%}.close-icon[data-v-190e8f7a]:hover{cursor:pointer;background:#005b96}label[data-v-190e8f7a]:hover{cursor:pointer;background:#ccc}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/components/increment/generic/location/GooglePlacesAutoComplete.vue"],names:[],mappings:"AACA,6CAA6C,iBAAiB,CAC7D,AACD,iCAAiC,WAAW,kBAAkB,gBAAiB,cAAc,6BAA6B,2BAA2B,2BAA2B,CAC/K,AACD,uBAAuB,WAAW,WAAW,6BAA6B,kBAAkB,AAAwD,eAAiB,CACpK,AACD,6BAA6B,kBAAkB,WAAW,SAAS,YAAY,WAAW,iBAAiB,kBAAkB,eAAe,gBAAgB,WAAY,iBAAiB,CACxL,AACD,mCAAmC,eAAe,kBAAkB,CACnE,AACD,6BAA6B,eAAe,eAAe,CAC1D",file:"GooglePlacesAutoComplete.vue",sourcesContent:["\n.google-autocomplete-holder[data-v-190e8f7a]{position:relative\n}\n.results-holder[data-v-190e8f7a]{width:100%;position:absolute;background:white;z-index:10000;border-bottom:solid 1px #ccc;border-left:solid 1px #ccc;border-right:solid 1px #ccc\n}\nlabel[data-v-190e8f7a]{width:100%;float:left;border-bottom:solid 1px #ccc;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;margin-bottom:0px\n}\n.close-icon[data-v-190e8f7a]{position:absolute;right:10px;top:10px;height:30px;width:30px;line-height:30px;text-align:center;font-size:18px;background:#ccc;color:white;border-radius:50%\n}\n.close-icon[data-v-190e8f7a]:hover{cursor:pointer;background:#005b96\n}\nlabel[data-v-190e8f7a]:hover{cursor:pointer;background:#ccc\n}\n"],sourceRoot:""}])},477:function(e,t,a){var l=a(476);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(416)("a5db45b4",l,!0)},479:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"google-autocomplete-holder"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"form-control",style:e.property.style,attrs:{type:"text",placeholder:e.placeholder?e.placeholder:"Type location"},domProps:{value:e.searchValue},on:{keyup:function(t){return e.getPlaces()},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),null!==e.results||!0===e.selectedFlag?a("span",{staticClass:"close-icon",on:{click:function(t){return e.onCancel()}}},[a("i",{staticClass:"fas fa-times"})]):e._e(),e._v(" "),null!==e.results?a("span",{staticClass:"results-holder",style:e.property.results.style},e._l(e.results,function(t,l){return a("label",{key:l,on:{click:function(a){return e.setSelectedItem(t)}}},[e._v("\n      "+e._s(t.name+", "+t.formatted_address)+"\n    ")])}),0):e._e()])},staticRenderFns:[]}},480:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(301),i=a.n(l),r=a(481),o=a.n(r),n=(a(38),a(54)),s=a(25);t.default={data:function(){return{user:n.a.user,config:s.default,errorMessage:null,parameter:null,searchLocation:"",location:{route:null,locality:null,region:null,country:null,latitude:0,longitude:0},googleProperty:{style:{height:"45px !important"},GOOGLE_API_KEY:s.default.GOOGLE_API_KEY,results:{style:{}},placeholder:"Type Location"}}},props:["property"],components:{"google-autocomplete-location":a(474)},methods:{hideModal:function(){$("#"+this.property.id).modal("hide")},validateTyping:function(e){switch(e.validation.type){case"email":!1===n.a.validateEmail(e.value)?e.validation.flag=!1:e.validation.flag=!0}},getAddressData:function(e){if(null===e.route||""===e.route)return void(this.searchLocation=null);if(null===e.locality||""===e.locality)return void(this.searchLocation=null);if(null===e.country||""===e.country)return void(this.searchLocation=null);this.location={route:e.route,locality:e.locality,region:e.region,country:e.country,latitude:e.latitude,longitude:e.longitude};var t=this.location;this.searchLocation=t.route;for(var a=!1,l=0;l<this.property.inputs.length;l++){if("route"===this.property.inputs[l].variable){a=!0;break}}!1===a?(this.property.inputs.push({row:"full",label:"Route",variable:"route",placeholder:"Enter route",value:t.route,required:!0,id:"route",type:"input",inputType:"hidden",validation:{size:1,type:"text"}}),this.property.inputs.push({row:"full",label:"Locality",variable:"locality",placeholder:"Enter locality",value:t.locality,required:!0,id:"locality",type:"input",inputType:"hidden",validation:{size:1,type:"text"}}),this.property.inputs.push({row:"full",label:"Region",variable:"region",placeholder:"Enter region",value:t.region,required:!0,id:"region",type:"input",inputType:"hidden",validation:{size:1,type:"text"}}),this.property.inputs.push({row:"full",label:"Country",variable:"country",placeholder:"Enter country",value:t.country,required:!0,id:"country",type:"input",inputType:"hidden",validation:{size:1,type:"text"}}),this.property.inputs.push({row:"full",label:"Latitude",variable:"latitude",placeholder:"Enter latitude",value:t.latitude,required:!0,id:"latitude",type:"input",inputType:"hidden",validation:{size:1,type:"text"}}),this.property.inputs.push({row:"full",label:"Longitude",variable:"longitude",placeholder:"Enter longitude",value:t.longitude,required:!0,id:"longitude",type:"input",inputType:"hidden",validation:{size:1,type:"text"}})):this.property.inputs.map(function(e){return"route"===e.variable&&(e.value=t.route),"locality"===e.variable&&(e.value=t.locality),"latitude"===e.variable&&(e.value=t.latitude),"longitude"===e.variable&&(e.value=t.longitude),"region"===e.variable&&(e.value=t.region),"country"===e.variable&&(e.value=t.country),e})},validate:function(){this.parameter={};for(var e=this.property.inputs,t=0;t<e.length;t++){var a=e[t];if(!0===a.required||!1===a.required&&(null!==a.value||""!==a.value)){if("select_increment"===a.type||"select_specified"===a.type||"select_decrement"===a.type)this.parameter[a.variable]=a.value;else if("text"===a.validation.type){if(null===a.value)return this.errorMessage=a.label+" is required",!1;if(null!==a.value&&a.validation.size>a.value.length)return this.errorMessage=a.label+" must be greater than equal to "+a.validation.size,!1;this.parameter[a.variable]=a.value}else if("date"===a.validation.type||"datetime-local"===a.validation.type){if(null===a.value)return this.errorMessage=a.label+" is required",!1;this.parameter[a.variable]=a.value}else if("number"===a.validation.type){if(null===a.value||a.validation.size>parseFloat(a.value))return this.errorMessage=a.label+" must be greater than equal to "+a.validation.size,!1;this.parameter[a.variable]=parseFloat(a.value)}else if("email"===a.validation.type){if(!1===n.a.validateEmail(a.value))return this.errorMessage=a.label+" is invalid",!1;this.parameter[a.variable]=a.value}else if("location"===a.validation.type){for(var l=!1,i=0;i<e.length&&!l;i++){var r=e[i];"route"===r.variable&&null!==r.value&&(l=!0)}if(!l)return this.errorMessage=a.label+" is required",!1}}else null===a.value&&""===a.value||("account_id"===a.variable?this.parameter[a.variable]=this.user.userID:this.parameter[a.variable]=a.value)}return this.errorMessage=null,!0},addParams:function(){for(var e=0;e<this.property.params.length;e++){var t=this.property.params[e];this.parameter[t.variable]=t.value}},submit:function(){var e=this;$("#loading").css({display:"block"}),this.validate()?(this.addParams(),this.APIRequest(this.property.route,this.parameter).then(function(t){if($("#loading").css({display:"none"}),null!==t.data)e.errorMessage=null,e.hideModal(),e.$parent.retrieve({created_at:"desc"},{column:"created_at",value:""});else if(null!==t.error){var a=!0,l=!1,r=void 0;try{for(var n,s=o()(i()(t.error.message));!(a=(n=s.next()).done);a=!0){var u=n.value;e.errorMessage=t.error.message[u][0];break}}catch(e){l=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(l)throw r}}}})):$("#loading").css({display:"none"})}}}},481:function(e,t,a){e.exports={default:a(482),__esModule:!0}},482:function(e,t,a){a(303),a(302),e.exports=a(485)},483:function(e,t,a){var l=a(143),i=a(39)("toStringTag"),r="Arguments"==l(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=o(t=Object(e),i))?a:r?l(t):"Object"==(n=l(t))&&"function"==typeof t.callee?"Arguments":n}},484:function(e,t,a){var l=a(483),i=a(39)("iterator"),r=a(79);e.exports=a(21).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||r[l(e)]}},485:function(e,t,a){var l=a(49),i=a(484);e.exports=a(21).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return l(t.call(e))}},486:function(e,t,a){t=e.exports=a(415)(),t.push([e.i,".form-control[data-v-0f93a2c4]{min-height:50px!important}.input-group[data-v-0f93a2c4]{margin-bottom:10px!important}.input-group-addon[data-v-0f93a2c4]{width:100px!important;background:#22b173!important;color:#fff!important}.invalid-inputs[data-v-0f93a2c4]{border:1px solid red!important}.float-left[data-v-0f93a2c4]{float:left!important}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/components/increment/generic/modal/Modal.vue"],names:[],mappings:"AACA,+BACE,yBAA4B,CAC7B,AACD,8BACE,4BAA+B,CAChC,AACD,oCACE,sBAAwB,AACxB,6BAA+B,AAC/B,oBAAuB,CACxB,AACD,iCACE,8BAAqC,CACtC,AACD,6BACE,oBAAuB,CACxB",file:"Modal.vue",sourcesContent:["\n.form-control[data-v-0f93a2c4]{\r\n  min-height: 50px !important;\n}\n.input-group[data-v-0f93a2c4]{\r\n  margin-bottom: 10px !important;\n}\n.input-group-addon[data-v-0f93a2c4]{\r\n  width: 100px !important;\r\n  background: #22b173 !important;\r\n  color: #fff !important;\n}\n.invalid-inputs[data-v-0f93a2c4]{\r\n  border: solid 1px #ff0000 !important;\n}\n.float-left[data-v-0f93a2c4]{\r\n  float: left !important;\n}\r\n"],sourceRoot:""}])},487:function(e,t,a){var l=a(486);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(416)("1b48f977",l,!0)},488:function(e,t,a){a(487);var l=a(300)(a(480),a(489),"data-v-0f93a2c4",null);e.exports=l.exports},489:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:e.property.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",class:e.property.size,attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header",class:e.property.background},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v(e._s(e.property.title))]),e._v(" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return e.hideModal()}}},[a("span",{class:{"text-primary":null===e.property.background,"text-white":null!==e.property.background},attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),a("div",{staticClass:"modal-body"},[null!==e.errorMessage?a("span",{staticClass:"text-danger text-center"},[a("label",[a("b",[e._v("Oops! ")]),e._v(e._s(e.errorMessage))])]):e._e(),e._v(" "),null!==e.errorMessage?a("br"):e._e(),e._v(" "),e._l(e.property.inputs,function(t,l){return"hidden"!==t.inputType?a("div",{key:l,staticClass:"form-group d-flex flex-column",class:"full"!==t.row?t.row+" float-left":""},["hidden"!==t.inputType?a("label",{staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[e._v("\n            "+e._s(t.label)+"\n            "),!0===t.required?a("label",{staticClass:"text-danger"},[e._v("*")]):e._e()]):e._e(),e._v(" "),("input"===t.type||"textarea"===t.type)&&null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length?a("label",{staticClass:"text-danger",staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[a("b",[e._v("Oops!")]),e._v(" Length must be greater than equal "+e._s(t.validation.size)+".")]):e._e(),e._v(" "),"input"===t.type&&null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag?a("label",{staticClass:"text-danger",staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[a("b",[e._v("Oops!")]),e._v(" Invalid email address.")]):e._e(),e._v(" "),"input"===t.type&&null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)?a("label",{staticClass:"text-danger",staticStyle:{float:"left",width:"100%"},attrs:{for:t.id}},[a("b",[e._v("Oops!")]),e._v(" Minimum value is "+e._s(t.validation.size)+".")]):e._e(),e._v(" "),"checkbox"===t.inputType&&"input"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)||null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length||null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag},attrs:{placeholder:t.placeholder,disabled:!0===t.disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{keyup:function(a){return e.validateTyping(t)},change:function(a){var l=t.value,i=a.target,r=!!i.checked;if(Array.isArray(l)){var o=e._i(l,null);i.checked?o<0&&e.$set(t,"value",l.concat([null])):o>-1&&e.$set(t,"value",l.slice(0,o).concat(l.slice(o+1)))}else e.$set(t,"value",r)}}}):"radio"===t.inputType&&"input"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)||null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length||null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag},attrs:{placeholder:t.placeholder,disabled:!0===t.disabled,type:"radio"},domProps:{checked:e._q(t.value,null)},on:{keyup:function(a){return e.validateTyping(t)},change:function(a){return e.$set(t,"value",null)}}}):"input"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&!isNaN(t.value)&&"number"===t.validation.type&&t.validation.size>parseFloat(t.value)||null!==t.value&&"text"===t.validation.type&&t.validation.size>t.value.length||null!==t.value&&"email"===t.validation.type&&!1===t.validation.flag},attrs:{placeholder:t.placeholder,disabled:!0===t.disabled,type:t.inputType},domProps:{value:t.value},on:{keyup:function(a){return e.validateTyping(t)},input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}):e._e(),e._v(" "),"location"===t.type?a("google-autocomplete-location",{attrs:{id:t.id,inputVal:t.value,placeholder:t.placeholder,property:e.googleProperty},on:{onFinish:function(t){return e.getAddressData(t)}}}):e._e(),e._v(" "),"select_specified"===t.type?a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control form-control-custom",attrs:{placeholder:t.placeholder},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",a.target.multiple?l:l[0])}}},e._l(t.options,function(t,l){return a("option",{key:l,domProps:{value:t.value}},[e._v(e._s(t.label))])}),0):e._e(),e._v(" "),"select_decrement"===t.type?a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control form-control-custom",attrs:{placeholder:t.placeholder},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",a.target.multiple?l:l[0])}}},e._l(t.options.max,function(l,i){return a("option",{key:i,domProps:{value:t.options.start-l}},[e._v(e._s(t.options.start-l+t.options.label))])}),0):e._e(),e._v(" "),"select_increment"===t.type?a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control form-control-custom",attrs:{placeholder:t.placeholder},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"value",a.target.multiple?l:l[0])}}},e._l(t.options.max,function(l,i){return a("option",{key:i,domProps:{value:t.options.start+l}},[e._v(e._s(t.options.start+l+t.options.label))])}),0):e._e(),e._v(" "),"textarea"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",class:{"invalid-inputs":null!==t.value&&t.validation.size>t.value.length},attrs:{rows:t.textAreaRows,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}):e._e()],1):e._e()})],2),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.hideModal()}}},[e._v(e._s(e.property.button.left))]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.submit()}}},[e._v(e._s(e.property.button.right))])])])])])},staticRenderFns:[]}},490:function(e,t,a){"use strict";t.a={id:"createPlacesModal",size:"modal-md",title:"Add Places",background:null,inputs:[{row:"full",label:"Location",variable:"location",placeholder:"Add Location",value:null,required:!0,id:"location",type:"location",inputType:"text",validation:{size:1,type:"location"}},{row:"full",label:"Date",variable:"date",placeholder:"Enter Date",value:null,id:"date",type:"input",inputType:"date",validation:{size:1,type:"date"}},{row:"full",label:"Time",variable:"time",placeholder:"Enter Time",value:null,id:"time",type:"input",inputType:"time",validation:{size:1,type:"time"}}],route:"visited_places/create",button:{left:"Cancel",right:"Submit"},sort:null,params:[{variable:"account_id",value:null}]}},492:function(e,t,a){"use strict";t.__esModule=!0;var l=a(304),i=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}},700:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(301),i=a.n(l),r=a(492),o=a.n(r),n=a(38),s=a(54),u=a(448),c=a(490);t.default={mounted:function(){this.retrieve()},data:function(){return{common:u.a,user:s.a.user,modalProperty:c.a,data:null,message:"Test message",messageFlag:!0}},components:{"increment-modal":a(488)},methods:{redirect:function(e){n.a.push(e)},hideMessage:function(){this.messageFlag=!1},retrieve:function(){var e=this,t={condition:[{clause:"=",column:"account_id",value:this.user.userID}],sort:{locality:"desc"}};$("#loading").css({display:"block"}),this.APIRequest("visited_places/retrieve",t).then(function(t){$("#loading").css({display:"none"}),e.data=t.data})},removeItem:function(e){var t=this,a={id:e};$("#loading").css({display:"block"}),this.APIRequest("visited_places/delete",a).then(function(e){t.retrieve()})},showModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(e){case"create":this.modalProperty=o()({},c.a);this.modalProperty.inputs.map(function(e){e.value=null}),this.modalProperty.params[0].value=this.user.userID;break;case"update":var a=o()({},this.modalProperty),l={title:"Update Requests",route:"visited_places/update",button:{left:"Cancel",right:"Update"},sort:{column:"created_at",value:"desc"},params:[{variable:"id",value:t.id}]};a=o()({},a,l);i()(t);a.inputs.map(function(e){"longitude"===e.variable&&(e.value=t.longitude),"latitude"===e.variable&&(e.value=t.latitude),"country"===e.variable&&(e.value=t.country),"locality"===e.variable&&(e.value=t.locality),"region"===e.variable&&(e.value=t.region),"date"===e.variable&&(e.value=t.date),"time"===e.variable&&(e.value=t.time)}),this.modalProperty=o()({},a)}$("#createPlacesModal").modal("show")}}}},749:function(e,t,a){t=e.exports=a(415)(),t.push([e.i,".custom-header-color[data-v-c9d81936]{color:#005b96}","",{version:3,sources:["C:/xampp/htdocs/tinabangay/src/modules/tracing/Places.vue"],names:[],mappings:"AACA,sCAAsC,aAAa,CAClD",file:"Places.vue",sourcesContent:["\n.custom-header-color[data-v-c9d81936]{color:#005b96\n}\n"],sourceRoot:""}])},807:function(e,t,a){var l=a(749);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(416)("27d593f2",l,!0)},915:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("table",{staticClass:"table table-responsive table-bordered"},[e._m(0),e._v(" "),a("tbody",e._l(e.data,function(t,l){return a("tr",{key:l},[a("td",{staticClass:"text-warning"},[e._v(e._s(t.country))]),e._v(" "),a("td",{staticClass:"text-danger"},[e._v(e._s(t.region))]),e._v(" "),a("td",{staticClass:"text-primary"},[e._v(e._s("testin"===t.locality?"true":t.locality))]),e._v(" "),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.showModal("update",t)}}},[a("i",{staticClass:"fas fa-edit"})]),e._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(a){return e.removeItem(t.id)}}},[a("i",{staticClass:"fas fa-trash"})])])])}),0)]),e._v(" "),a("increment-modal",{attrs:{property:e.modalProperty}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"custom-header-color"},[a("td",[e._v("Country")]),e._v(" "),a("td",[e._v("Region")]),e._v(" "),a("td",[e._v("Locality")]),e._v(" "),a("td",[e._v("Action")])])}]}}});
//# sourceMappingURL=15.e5adf7d809d2f85c53ff.js.map