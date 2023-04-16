import "./KcApp.css";
import "@fontsource/inter";
import { lazy, Suspense } from "react";
import Fallback, { type PageProps } from "keycloakify/login";
import type { KcContext } from "./kcContext";
import { useI18n } from "./i18n";

const Template = lazy(() => import("./Template"));
const DefaultTemplate = lazy(() => import("keycloakify/login/Template"));

// You can uncomment this to see the values passed by the main app before redirecting.  
//import { foo, bar } from "./valuesTransferredOverUrl";
//console.log(`Values passed by the main app in the URL parameter:`, { foo, bar });

const Login = lazy(() => import("./pages/Login"));
// If you can, favor register-user-profile.ftl over register.ftl, see: https://docs.keycloakify.dev/realtime-input-validation
const Register = lazy(() => import("./pages/Register"));
const RegisterUserProfile = lazy(() => import("./pages/RegisterUserProfile"));
const Terms = lazy(() => import("./pages/Terms"));
const Empty = lazy(() => import("./pages/Empty"));
const Info = lazy(() => import("keycloakify/login/pages/Info"));

// This is like adding classes to theme.properties 
// https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
const classes: PageProps<any, any>["classes"] = {
    // NOTE: The classes are defined in ./KcApp.css
    "kcHtmlClass": "my-root-class",
    "kcHeaderWrapperClass": "my-color my-font"
};

export default function App(props: { kcContext: KcContext; }) {

    const { kcContext } = props;

    const i18n = useI18n({ kcContext });

    if (i18n === null) {
        //NOTE: Locales not yet downloaded, we could as well display a loading progress but it's usually a matter of milliseconds.
        return null;
    }

    /* 
    * Examples assuming i18n.currentLanguageTag === "en":
    * i18n.msg("access-denied") === <span>Access denied</span>
    * i18n.msg("foo") === <span>foo in English</span>
    */

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl": return <Login {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "register.ftl": return <Register {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "register-user-profile.ftl": return <RegisterUserProfile {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />
                    case "terms.ftl": return <Terms {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    case "empty.ftl": return <Empty {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={false} />;
                    // We choose to use the default Template for the Info page and to download the theme resources.
                    case "info.ftl": return <Info {...{ kcContext, i18n, classes }} Template={DefaultTemplate} doUseDefaultCss={false} />;
                    default: return <Fallback {...{ kcContext, i18n, classes }} Template={DefaultTemplate} doUseDefaultCss={false} />;
                }
            })()}
        </Suspense>
    );

}
