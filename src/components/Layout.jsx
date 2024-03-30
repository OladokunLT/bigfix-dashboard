import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex  h-[800px] font-sans max-w-[1440px] mx-auto">
        <Sidebar />
        <div className="w-full mx-10">
          <Header />
          <div className="ml-[240px] mt-[152px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
