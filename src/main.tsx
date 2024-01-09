import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from "./contexts/user.tsx";
import { BrowserRouter } from "react-router-dom";
import { ForecastProvider } from "./contexts/weatherForecast.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain={import.meta.env.VITE_DOMAIN}
                clientId={import.meta.env.VITE_CLIENT_ID}
                authorizationParams={{
                    redirect_uri: "http://localhost:5173/home",
                }}
            >
                <AuthProvider>
                    <ForecastProvider>
                        <App />
                    </ForecastProvider>
                </AuthProvider>
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>
);
