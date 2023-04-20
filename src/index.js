import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from '@react-oauth/google';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <GoogleOAuthProvider clientId="776399895709-3ddui6f51u8capadvdlsh0nejmk2ph8f.apps.googleusercontent.com">
        <StrictMode>
            <App />
        </StrictMode>
    </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
