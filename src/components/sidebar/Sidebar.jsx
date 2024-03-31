import calculatorIcon from "../images/calculator.png";
import dashboardIcon from "../images/dashboard-square-01.png";
import packageSentIcon from "../images/package-sent.png";
import packageIcon from "../images/package.png";
import storeIcon from "../images/store-02.png";
import userGroupIcon from "../images/user-group.png";
import contactIcon from "../images/contact.png";
import settingsIcon from "../images/settings-01.png";
import arrowLeft from "../images/arrow-left-02.png";
import NavItem from "../utilities/NavItem";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  console.log(open);

  return (
    <>
      <nav
        className={`min-h-screen flex relative pt-[152px] duration-300 ${
          open ? "min-w-[240px]" : "w-[72px]"
        }`}
        style={{
          background: "linear-gradient(180deg, #09285D 0%, #020A17 100%)",
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`min-h-6 min-w-6 cursor-pointer fixed z-10 left-[180px] top-10 ${
            !open && "rotate-180 left-[40px] top-[100px]"
          }`}
        >
          <img src={arrowLeft} alt="" />
        </div>

        <ul className="w-full text-[#B3B3B3] font-medium relative">
          <li>
            <NavItem icon={dashboardIcon} name="Dashboard" url="" bool={open} />
          </li>
          <li>
            <NavItem
              icon={calculatorIcon}
              name="Books"
              url="/books"
              bool={open}
            />
          </li>
          <li>
            <NavItem
              icon={packageSentIcon}
              name="Sell"
              url="/sell"
              bool={open}
            />
          </li>
          <li>
            <NavItem
              icon={packageIcon}
              name="Source"
              url="/source"
              bool={open}
            />
          </li>
          <li>
            <NavItem icon={storeIcon} name="Stock" url="/stock" bool={open} />
          </li>
          <li>
            <NavItem
              icon={userGroupIcon}
              name="Talent"
              url="/Talent"
              bool={open}
            />
          </li>
          <li>
            <NavItem
              icon={contactIcon}
              name="Contacts"
              url="/contacts"
              bool={open}
            />
          </li>
          <li className="absolute bottom-10 w-full">
            <NavItem
              icon={settingsIcon}
              name="Settings"
              url="/settings"
              bool={open}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
