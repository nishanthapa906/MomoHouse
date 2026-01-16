import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
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
    <App />
    </CartProvider>
  </BrowserRouter>
);



