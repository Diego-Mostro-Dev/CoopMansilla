import ReactDOM from "react-dom/client";
import App from "./Containers/App";
import { AuthProvider } from "./Contextos/AuthContext";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </Auth0Provider>
);
