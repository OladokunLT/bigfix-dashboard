import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex font-sans max-w-[1440px] mx-auto">
        <Sidebar />
        <div className="w-full mx-10">
          <Header />
          <div className=" mt-[152px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
