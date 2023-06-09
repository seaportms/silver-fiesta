import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { kcContext } from "./keycloak-theme/login/kcContext";

const App = lazy(() => import("./App"));
const KcApp = lazy(() => import("./keycloak-theme/login/KcApp"));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Suspense>
            {kcContext === undefined ?
                <App /> :
                <KcApp kcContext={kcContext} />
            }
        </Suspense>
    </StrictMode>
);
