import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from "./contexts/user.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-0gepyqzm0ystd5ie.us.auth0.com"
            clientId="6PL1w7Vtmbk0hd6vFEG4OrtuNJ4PL9KV"
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            <AuthProvider>
                <App />
            </AuthProvider>
        </Auth0Provider>
    </React.StrictMode>
);
