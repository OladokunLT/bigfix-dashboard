import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
