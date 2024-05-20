import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./approuter";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

require("./client/assets/css/all.css");
require("./client/assets/css/all.min.css");
require("./client/assets/css/fontawesome.min.css");
// require("./client/assets/css/custom.css")
require("../src/client/components/customstyleclient.css");
require("./client/assets/scss/main.scss");
require("./client/assets/css/custom.css");
require("./index.css");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <ToastContainer />
      <AppRouter />
    </Provider>
  </>
);
