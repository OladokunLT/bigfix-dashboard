import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex font-sans max-w-[1440px] mx-auto">
        <Sidebar />
        <div className="w-full mx-4 md:mx-10">
          <Header />
          <main className=" mt-[152px]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
