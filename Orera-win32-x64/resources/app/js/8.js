(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"2c89":function(t,e,a){},3412:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"full-width q-pa-lg bg-white"},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back",value:"/",expression:"'/'"}],attrs:{flat:"",round:"",dense:"",unelevated:""}},[a("q-icon",{staticClass:"q-mb-md",attrs:{name:"reply",size:"32px","q-nohoverable":""}})],1),t.shouldVerify?a("q-form",{on:{submit:t.simulateProgress}},[a("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"email",label:"E-mail address to contact you *"},model:{value:t.requestForm.email,callback:function(e){t.$set(t.requestForm,"email",e)},expression:"requestForm.email"}}),a("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"password",label:"Full name *"},model:{value:t.requestForm.name,callback:function(e){t.$set(t.requestForm,"name",e)},expression:"requestForm.name"}}),a("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",clearable:"",type:"textarea",label:"Please describe in details *",hint:"Please enter the details and Orera team will answer you as soon as possible."},model:{value:t.requestForm.textareaModel,callback:function(e){t.$set(t.requestForm,"textareaModel",e)},expression:"requestForm.textareaModel"}}),a("div",{staticClass:"button"},[a("q-btn",{staticClass:"float-left",attrs:{loading:t.loading1,color:"primary",type:"submit",label:"Submit"}})],1),t.error?a("p",{staticClass:"text text-center text-negative"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e()],1):t._e(),t.shouldVerify?t._e():a("q-item-section",{staticClass:"verification-form row justify-center q-mt-xl"},[a("p",{staticClass:"text-center q-pb-xl"},[t._v("\n      Your request has been successfully submitted and is being processed by\n      the Orerateam, we'll get back to you as soon as possible.\n    ")])]),a("q-footer",{staticClass:" column justify-center text-center q-pt-md"},[a("q-separator",{staticClass:"q-mb-md",attrs:{inset:""}}),a("div",{staticClass:"social q-ma-xs"},[a("q-btn",{attrs:{type:"a",href:"https://www.facebook.com/",target:"_blank",flat:"",round:"",dense:""}},[a("q-icon",{attrs:{name:"fab fa-facebook q-pa-xs"}})],1),a("q-btn",{attrs:{type:"a",href:"https://twitter.com/",target:"_blank",flat:"",round:"",dense:""}},[a("q-icon",{attrs:{name:"fab fa-twitter q-pa-xs"}})],1),a("q-btn",{attrs:{type:"a",href:"https://www.instagram.com/",target:"_blank",flat:"",round:"",dense:""}},[a("q-icon",{attrs:{name:"fab fa-instagram q-pa-xs"}})],1),a("q-btn",{attrs:{type:"a",href:"https://www.snapchat.com/",target:"_blank",flat:"",round:"",dense:""}},[a("q-icon",{attrs:{name:"fab fa-snapchat q-pa-xs"}})],1),a("p",{staticClass:"copyright"},[t._v("© "+t._s((new Date).getFullYear())+" Orera")])],1)],1)],1)},r=[],n=(a("0ffc"),a("c8ef")),i=a.n(n),o=a("94ea"),l={data:function(){return{requestForm:{name:"",email:"",textareaModel:""},error:"",loading1:!1,shouldVerify:!0}},computed:{isValid:function(){return this.requestForm.textareaModel.length>=10},emailValidation:function(){return""===this.requestForm.email},nameValidation:function(){return""===this.requestForm.name}},methods:i()(i()({},Object(o["b"])("user",["sendRequset"])),{},{submitForm:function(){var t=this;!this.isValid||this.emailValidation||this.nameValidation?(this.error="Please fill all required fields!",setTimeout((function(){t.error=""}),1800)):(this.sendRequset(this.requestForm),this.shouldVerify=!1)},simulateProgress:function(){var t=this;this.loading1=!0,this.submitForm(),setTimeout((function(){t.loading1=!1}),2200)}})},c=l,u=(a("ccc6"),a("a6c2")),m=a("505d"),d=a("ef9c"),f=a("19dc"),b=a("3548"),q=a("a3be"),p=a("6c44"),h=a("d09b"),w=a("3f5f"),g=a("406f"),x=a("63c1"),y=a.n(x),v=Object(u["a"])(c,s,r,!1,null,"6a01caf0",null);e["default"]=v.exports;y()(v,"components",{QPage:m["a"],QBtn:d["a"],QIcon:f["a"],QForm:b["a"],QInput:q["a"],QItemSection:p["a"],QFooter:h["a"],QSeparator:w["a"]}),y()(v,"directives",{GoBack:g["a"]})},ccc6:function(t,e,a){"use strict";a("2c89")}}]);