import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import Books from "./components/pages/Books.jsx";
import Sell from "./components/pages/Sell.jsx";
import Source from "./components/pages/Source.jsx";
import Stock from "./components/pages/Stock.jsx";
import Talent from "./components/pages/Talent.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import Settings from "./components/pages/Settings.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="book" element={<Books />} />
      <Route path="sell" element={<Sell />} />
      <Route path="source" element={<Source />} />
      <Route path="stock" element={<Stock />} />
      <Route path="talent" element={<Talent />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="settings" element={<Settings />} />
      <Route
        path="*"
        element={<div className="text-center bold">Page not found</div>}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
