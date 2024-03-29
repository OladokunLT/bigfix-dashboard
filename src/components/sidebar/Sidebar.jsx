import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav
        className={` h-screen hidden md:block w-[240px] absolute md:fixed pt-[152px]`}
        style={{
          background: "linear-gradient(180deg, #09285D 0%, #020A17 100%)",
        }}
      >
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
