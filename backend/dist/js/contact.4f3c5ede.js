(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"22df":function(e,a,t){},"4fe8":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("div",[e.modalMessage?s("modal",{attrs:{text:e.modalMessage},on:{"close-modal":e.closeModal}}):e._e()],1),s("Header",{attrs:{title:"Contact",image:t("4a06")}}),s("card-contact"),s("section-formulaire-contact",{on:{listenresponse:e.displayModal}}),s("nous-trouver")],1)},r=[],o=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("article",{staticClass:"card"},[t("p",[e._v(" Pour toute questions veuillez remplir le formulaire. "),t("br"),e._v(" Nous vous répondrons dans les plus bref délais. ")])])}],i={name:"card-contact"},c=i,l=(t("73ca"),t("2877")),u=Object(l["a"])(c,o,n,!1,null,"799072e9",null),d=u.exports,m=t("770d"),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.displayLoader?t("loader"):e._e(),t("div",{staticClass:"section sectionFormulaire"},[e._m(0),t("form",{staticClass:"formulaire"},[t("div",{staticClass:"boxLabelAndInput"},[t("div",{staticClass:"boxInput "},[t("label",{staticClass:"requis",attrs:{for:"name"}},[e._v(" Nom :")]),t("input",{attrs:{type:"text",id:"name",name:"name",placeholder:"Du-pont","data-selection":"true"}}),e.error.name?t("p",{staticClass:"error"},[e._v(e._s(e.error.name))]):e._e()]),t("div",{staticClass:"boxInput"},[t("label",{staticClass:"requis",attrs:{for:"surname "}},[e._v(" Prénom :")]),t("input",{attrs:{type:"text",id:"surname",name:"surname",placeholder:"Alexandre","data-selection":"true"}}),e.error.prenom?t("p",{staticClass:"error"},[e._v(e._s(e.error.prenom))]):e._e()]),t("div",{staticClass:"boxInput"},[t("label",{staticClass:"requis",attrs:{for:"email "}},[e._v(" E-mail :")]),t("input",{attrs:{type:"email",id:"email",name:"email",placeholder:"monMail@host.com","data-selection":"true"}}),e.error.mail?t("p",{staticClass:"error"},[e._v(e._s(e.error.mail))]):e._e()]),t("div",{staticClass:"boxInput"},[t("label",{attrs:{for:"phone"}},[e._v(" Téléphonne :")]),t("input",{attrs:{type:"text",id:"phone",name:"phone",placeholder:" 0041 78 123 45 67","data-selection":"true"}}),e.error.phone?t("p",{staticClass:"error"},[e._v(e._s(e.error.phone))]):e._e()])]),t("div",{staticClass:"boxMessage "},[t("label",{staticClass:"requis",attrs:{for:"message"}},[e._v(" Message :")]),t("textarea",{attrs:{type:"text",id:"message",name:"message",rows:"10",placeholder:"Votre message...","data-selection":"true"}}),e.error.message?t("p",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()]),t("div",{staticClass:"boxCaptcha"},[t("p",[e._v("Résolver l'addition :")]),t("div",{staticClass:"captcha"},[t("span",{staticClass:" itemCaptcha captcha2"},[e._v(" "+e._s(e.captcha.nbr1)+" ")]),t("span",{staticClass:"plusEgal"},[e._v(" + ")]),t("span",{staticClass:" itemCaptcha captcha1"},[e._v(" "+e._s(e.captcha.nbr2)+" ")]),t("span",{staticClass:"plusEgal"},[e._v(" = ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha.resultat,expression:"captcha.resultat"}],staticClass:"itemCaptcha captchaReponse",attrs:{type:"text"},domProps:{value:e.captcha.resultat},on:{input:function(a){a.target.composing||e.$set(e.captcha,"resultat",a.target.value)}}})])]),e.error.captcha?t("p",{staticClass:"error errorCaptcha"},[e._v(e._s(e.error.captcha))]):e._e(),t("button",{staticClass:"buttonFull",attrs:{id:"sendInfo"},on:{click:function(a){return e.send(a)}}},[e._v("Envoyer")])])])],1)},h=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titleForm"},[t("i",{staticClass:"fas fa-pencil-alt"}),t("h2",[e._v("Formulaire")])])}],v=t("b85c"),f=(t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("b0c0"),t("89e1")),C={components:{loader:f["a"]},name:"section-formulaire-contact",data:function(){return{validForm:!0,error:{name:"",prenom:"",mail:"",message:"",captcha:""},captcha:{nbr1:null,nbr2:null,resultat:null},displayLoader:!1,response:{}}},methods:{afterResponse:function(){var e=!0;if(200!=this.response.status)e=!1;else if(200===this.response.status){e=!0;var a,t=document.querySelectorAll("[data-selection]"),s=Object(v["a"])(t);try{for(s.s();!(a=s.n()).done;){var r=a.value;r.value=""}}catch(o){s.e(o)}finally{s.f()}this.captchaCreate()}this.$emit("listenresponse",e)},send:function(e){var a=this;for(var t in e.stopImmediatePropagation(),e.preventDefault(),this.error)this.error[t]="";var s=document.getElementById("name").value,r=document.getElementById("surname").value,o=document.getElementById("email").value,n=document.getElementById("phone").value,i=document.getElementById("message").value;if(this.validForm=!0,m(s,this),d(r,this),u(o,this),p(i,this),l(null,this),h(n,this),!0===this.validForm){this.displayLoader=!0;var c={nom:s,prenom:r,mail:o,message:i,phone:n};fetch("".concat(this.$store.state.HOST,"/postMessage"),{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){a.response=e,a.displayLoader=!1,a.afterResponse()})).catch((function(e){a.displayLoader=!1,a.response=e,a.afterResponse()}))}function l(e,a){parseInt(a.captcha.resultat)!==a.captcha.nbr1+a.captcha.nbr2&&(a.error.captcha="résolver le captcha",a.validForm=!1)}function u(e,a){var t=new RegExp("^[^s@]+@[^s@]+.[^s@]+$");e?t.test(e)||(a.error.mail="Votre mail ne semble pas être correct.",a.validForm=!1):(a.error.mail="Veuillez saisir le champ !",a.validForm=!1)}function d(e,a){e.length<2&&(a.error.prenom="Min. 2 caractères.",a.validForm=!1),e.length>15&&(a.error.prenom="Max. 15 caractères.",a.validForm=!1)}function m(e,a){e.length<2&&(a.error.name="Min. 2 caractères.",a.validForm=!1),e.length>15&&(a.error.name="Max. 15 caractères.",a.validForm=!1)}function p(e,a){e.length<4&&(a.error.message="Min. 4 caractères.",a.validForm=!1),e.length>1e3&&(a.error.message="Max. 1000 caractères.",a.validForm=!1)}function h(e,a){var t=new RegExp("^[0-9 ]{10,20}$");e?t.test(e)||(a.error.phone="ex.: 0041 79 123 12 12 ",a.validForm=!1):(a.error.phone="Veuillez saisir le champ !",a.validForm=!1)}},captchaCreate:function(){this.captcha.nbr1=Math.floor(10*Math.random())+1,this.captcha.nbr2=Math.floor(10*Math.random())+1,this.captcha.resultat=null}},mounted:function(){this.captchaCreate()}},_=C,b=(t("757f"),Object(l["a"])(_,p,h,!1,null,"42104e06",null)),g=b.exports,M=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"section"},[t("div",{staticClass:"boxTitleTrouver"},[t("div",{staticClass:"titleTrouver"},[t("i",{staticClass:"fas fa-info iconeInfo"}),t("h2",[e._v("Où nous trouver")])])]),t("div",{staticClass:"boxIcone"},[t("i",{staticClass:"icone fas fa-car"}),t("i",{staticClass:"icone fas fa-biking"}),t("i",{staticClass:"icone fas fa-walking"})]),t("div",{staticClass:"sectionFrame"},[t("div",{staticClass:"colFrame"},[t("h3",[e._v("Plan de situation :")]),t("iframe",{staticClass:"frame",attrs:{frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Route%20de%20la%20Moubra%2073,%203963%20Crans-Montana+(Monkey-School)&t=&z=14&ie=UTF8&iwloc=B&output=embed"}})]),t("div",{staticClass:"colAdresse"},[t("address",[e._v("Monkey-School "),t("br"),e._v(" Route de la Moubra 73 "),t("br"),e._v(" 3963 Crans-Montana ( VS ) "),t("br"),e._v(" Suisse ")]),t("div",{staticClass:"contact"},[t("div",{staticClass:"mail"},[t("i",{staticClass:"fas fa-envelope"}),t("span",[e._v("info@monkey-school.ch")])]),t("div",{staticClass:"phone"},[t("i",{staticClass:"fas fa-phone-alt"}),t("span",[e._v("+41 79 519 04 84")])])])])])])}],x={name:"nous-trouver"},F=x,E=(t("7cc0"),Object(l["a"])(F,M,y,!1,null,"73940e6e",null)),I=E.exports,w=t("ef8a"),$={name:"contact",components:{Header:m["a"],CardContact:d,SectionFormulaireContact:g,NousTrouver:I,Modal:w["a"]},data:function(){return{bdd:{},modalMessage:""}},methods:{displayModal:function(e){!1===e?this.modalMessage="Nous éprouvons des difficultés... veuillez réeassayer.. ":!0===e&&(this.modalMessage="Votre Message à été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.")},closeModal:function(){this.modalMessage=""}},mounted:function(){document.title="Contact"}},O=$,R=Object(l["a"])(O,s,r,!1,null,"a3f4e45c",null);a["default"]=R.exports},"73ca":function(e,a,t){"use strict";t("ff1b")},"757f":function(e,a,t){"use strict";t("f368")},"7cc0":function(e,a,t){"use strict";t("22df")},f368:function(e,a,t){},ff1b:function(e,a,t){}}]);
//# sourceMappingURL=contact.4f3c5ede.js.map