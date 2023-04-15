"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[2228],{"./node_modules/keycloakify/login/lib/useGetClassName.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return useGetClassName}});var clsx=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),useConstCallback=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js");const{useGetClassName:useGetClassName}=function createUseClassName(params){const{defaultClasses:defaultClasses}=params;return{useGetClassName:function useGetClassName(params){const{classes:classes}=params;return{getClassName:(0,useConstCallback.O)((classKey=>(0,clsx.W)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])))}}}}({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},"./node_modules/keycloakify/login/pages/LoginUsername.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LoginUsername}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/keycloakify/tools/useConstCallback.js"),_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/keycloakify/login/lib/useGetClassName.js");function LoginUsername(props){const{kcContext:kcContext,i18n:i18n,doUseDefaultCss:doUseDefaultCss,Template:Template,classes:classes}=props,{getClassName:getClassName}=(0,_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_4__.v)({doUseDefaultCss:doUseDefaultCss,classes:classes}),{social:social,realm:realm,url:url,usernameHidden:usernameHidden,login:login,registrationDisabled:registrationDisabled}=kcContext,{msg:msg,msgStr:msgStr}=i18n,[isLoginButtonDisabled,setIsLoginButtonDisabled]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),onSubmit=(0,_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_3__.O)((e=>{var _a;e.preventDefault(),setIsLoginButtonDisabled(!0);const formElement=e.target;null===(_a=formElement.querySelector("input[name='email']"))||void 0===_a||_a.setAttribute("name","username"),formElement.submit()}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({},{kcContext:kcContext,i18n:i18n,doUseDefaultCss:doUseDefaultCss,classes:classes},{displayInfo:social.displayInfo,displayWide:realm.password&&void 0!==social.providers,headerNode:msg("doLogIn"),infoNode:realm.password&&realm.registrationAllowed&&!registrationDisabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-registration"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[msg("noAccount"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",Object.assign({tabIndex:6,href:url.registrationUrl},{children:msg("doRegister")}))]})}))},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({id:"kc-form",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(realm.password&&void 0!==social.providers&&getClassName("kcContentWrapperClass"))},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-wrapper",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(realm.password&&social.providers&&[getClassName("kcFormSocialAccountContentClass"),getClassName("kcFormSocialAccountClass")])},{children:realm.password&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:onSubmit,action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:!usernameHidden&&(()=>{var _a;const label=realm.loginWithEmailAllowed?realm.registrationEmailAsUsername?"email":"usernameOrEmail":"username",autoCompleteHelper="usernameOrEmail"===label?"username":label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",Object.assign({htmlFor:autoCompleteHelper,className:getClassName("kcLabelClass")},{children:msg(label)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:1,id:autoCompleteHelper,className:getClassName("kcInputClass"),name:autoCompleteHelper,defaultValue:null!==(_a=login.username)&&void 0!==_a?_a:"",type:"text",autoFocus:!0,autoComplete:"off"})]})})()})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(getClassName("kcFormGroupClass"),getClassName("kcFormSettingClass"))},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options"},{children:realm.rememberMe&&!usernameHidden&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:"checkbox"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},"on"===login.rememberMe?{checked:!0}:{})),msg("rememberMe")]})}))}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons",className:getClassName("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:4,className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(getClassName("kcButtonClass"),getClassName("kcButtonPrimaryClass"),getClassName("kcButtonBlockClass"),getClassName("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn"),disabled:isLoginButtonDisabled})}))]}))})),realm.password&&void 0!==social.providers&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-social-providers",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(getClassName("kcFormSocialAccountContentClass"),getClassName("kcFormSocialAccountClass"))},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(getClassName("kcFormSocialAccountListClass"),social.providers.length>4&&getClassName("kcFormSocialAccountDoubleListClass"))},{children:social.providers.map((p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",Object.assign({className:getClassName("kcFormSocialAccountListLinkClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",Object.assign({href:p.loginUrl,id:`zocial-${p.alias}`,className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)("zocial",p.providerId)},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:p.displayName})}))}),p.providerId)))}))}))]}))}))}},"./node_modules/keycloakify/tools/clsx.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return clsx}});var assert=__webpack_require__("./node_modules/keycloakify/node_modules/tsafe/esm/assert.mjs");const clsx=(...args)=>{const len=args.length;let i=0,cls="";for(;i<len;i++){const arg=args[i];if(null==arg)continue;let toAdd;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx(...arg);else{(0,assert.h)(!!1),toAdd="";for(const k in arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k)}break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}return cls}}}]);