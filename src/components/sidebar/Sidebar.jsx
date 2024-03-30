import { NavLink } from "react-router-dom";
import calculatorIcon from "../images/calculator.png";
import dashboardIcon from "../images/dashboard-square-01.png";
import packageSentIcon from "../images/package-sent.png";
import packageIcon from "../images/package.png";
import storeIcon from "../images/store-02.png";
import userGroupIcon from "../images/user-group.png";
import contactIcon from "../images/contact.png";
import settingsIcon from "../images/settings-01.png";
import NavItem from "../utilities/NavItem";

const Sidebar = () => {
  return (
    <>
      <nav
        className={` min-h-screen md:flex w-[70px] md:w-[240px] absolute md:fixed pt-[152px]`}
        style={{
          background: "linear-gradient(180deg, #09285D 0%, #020A17 100%)",
        }}
      >
        <ul className="w-full text-[#B3B3B3] font-medium relative">
          <li>
            <NavItem icon={dashboardIcon} name="Dashboard" url="" />
          </li>
          <li>
            <NavItem icon={calculatorIcon} name="Books" url="/books" />
          </li>
          <li>
            <NavItem icon={packageSentIcon} name="Sell" url="/sell" />
          </li>
          <li>
            <NavItem icon={packageIcon} name="Source" url="/source" />
          </li>
          <li>
            <NavItem icon={storeIcon} name="Stock" url="/stock" />
          </li>
          <li>
            <NavItem icon={userGroupIcon} name="Talent" url="/Talent" />
          </li>
          <li>
            <NavItem icon={contactIcon} name="Contacts" url="/contacts" />
          </li>
          <li className="absolute bottom-10 w-full">
            <NavItem icon={settingsIcon} name="Settings" url="/settings" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
