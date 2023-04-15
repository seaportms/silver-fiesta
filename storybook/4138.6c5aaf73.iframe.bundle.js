"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[4138],{"./node_modules/keycloakify/login/lib/useGetClassName.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return useGetClassName}});var clsx=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),useConstCallback=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js");const{useGetClassName:useGetClassName}=function createUseClassName(params){const{defaultClasses:defaultClasses}=params;return{useGetClassName:function useGetClassName(params){const{classes:classes}=params;return{getClassName:(0,useConstCallback.O)((classKey=>(0,clsx.W)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])))}}}}({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},"./node_modules/keycloakify/login/pages/LoginOtp.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LoginOtp}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_tools_headInsert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/tools/headInsert.js"),_bin_tools_pathJoin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/keycloakify/bin/tools/pathJoin.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/keycloakify/login/lib/useGetClassName.js");function LoginOtp(props){const{kcContext:kcContext,i18n:i18n,doUseDefaultCss:doUseDefaultCss,Template:Template,classes:classes}=props,{getClassName:getClassName}=(0,_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_5__.v)({doUseDefaultCss:doUseDefaultCss,classes:classes}),{otpLogin:otpLogin,url:url}=kcContext,{msg:msg,msgStr:msgStr}=i18n;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{let isCleanedUp=!1;return(0,_tools_headInsert__WEBPACK_IMPORTED_MODULE_2__.t)({type:"javascript",src:(0,_bin_tools_pathJoin__WEBPACK_IMPORTED_MODULE_3__.pathJoin)(kcContext.url.resourcesCommonPath,"node_modules/jquery/dist/jquery.min.js")}).then((()=>{isCleanedUp||function evaluateInlineScript(){$(document).ready((function(){$(".card-pf-view-single-select").click((function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).children().removeAttr("name")):($(".card-pf-view-single-select").removeClass("active"),$(".card-pf-view-single-select").children().removeAttr("name"),$(this).addClass("active"),$(this).children().attr("name","selectedCredentialId"))}));var defaultCred=$(".card-pf-view-single-select")[0];defaultCred&&defaultCred.click()}))}()})),()=>{isCleanedUp=!0}}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({},{kcContext:kcContext,i18n:i18n,doUseDefaultCss:doUseDefaultCss,classes:classes},{headerNode:msg("doLogIn")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({id:"kc-otp-login-form",className:getClassName("kcFormClass"),action:url.loginAction,method:"post"},{children:[otpLogin.userOtpCredentials.length>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:getClassName("kcInputWrapperClass")},{children:otpLogin.userOtpCredentials.map((otpCredential=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:getClassName("kcSelectOTPListClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",value:"${otpCredential.id}"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:getClassName("kcSelectOTPListItemClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:getClassName("kcAuthenticatorOtpCircleClass")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",Object.assign({className:getClassName("kcSelectOTPItemHeadingClass")},{children:otpCredential.userLabel}))]}))]}),otpCredential.id)))}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:getClassName("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",Object.assign({htmlFor:"otp",className:getClassName("kcLabelClass")},{children:msg("loginOtpOneTime")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:getClassName("kcInputWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"otp",name:"otp",autoComplete:"off",type:"text",className:getClassName("kcInputClass"),autoFocus:!0})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options",className:getClassName("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:getClassName("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons",className:getClassName("kcFormButtonsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)(getClassName("kcButtonClass"),getClassName("kcButtonPrimaryClass"),getClassName("kcButtonBlockClass"),getClassName("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn")})}))]}))]}))}))}},"./node_modules/keycloakify/tools/HTMLElement.prototype.prepend.js":function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(childNode){if("string"==typeof childNode)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(childNode,this.firstChild)})},"./node_modules/keycloakify/tools/clsx.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return clsx}});var assert=__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/esm/assert.mjs");const clsx=(...args)=>{const len=args.length;let i=0,cls="";for(;i<len;i++){const arg=args[i];if(null==arg)continue;let toAdd;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx(...arg);else{(0,assert.h)(!!1),toAdd="";for(const k in arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k)}break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}return cls}},"./node_modules/keycloakify/tools/headInsert.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return headInsert}});__webpack_require__("./node_modules/keycloakify/tools/HTMLElement.prototype.prepend.js");var evt_tools_Deferred__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/node_modules/evt/tools/Deferred.js");function headInsert(params){const htmlElement=document.createElement((()=>{switch(params.type){case"css":return"link";case"javascript":return"script"}})()),dLoaded=new evt_tools_Deferred__WEBPACK_IMPORTED_MODULE_1__.Deferred;return htmlElement.addEventListener("load",(()=>dLoaded.resolve())),Object.assign(htmlElement,(()=>{switch(params.type){case"css":return{href:params.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:params.src,type:"text/javascript"}}})()),document.getElementsByTagName("head")[0][(()=>{switch(params.type){case"javascript":return"appendChild";case"css":return(()=>{switch(params.position){case"append":return"appendChild";case"prepend":return"prepend"}})()}})()](htmlElement),dLoaded.pr}}}]);