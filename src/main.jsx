import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Auth0Provider
        domain="dev-d8zjtcmazgkjeu6c.us.auth0.com"
        cacheLocation="localstorage"
        clientId="0pHxcv0wrBr1VZJ6Q5lM7fblwY248kuW"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
);



