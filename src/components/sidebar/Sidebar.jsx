import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const className = {
    position: "absolute",
    width: "240px",
    height: "1024px",
    left: "0px",
    top: "0px",

    background: "linear-gradient(180deg, #09285D 0%, #020A17 100%)",
  };
  return (
    <>
      <nav className={` bg-blue-900 h-screen w-[240px] fixed pt-[152px]`}>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/source"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Source
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stock"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Stock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/talent"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Talent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3B7CED] text-white border-l-2 border-white pl-4"
                  : "text-[#B3B3B3]"
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
