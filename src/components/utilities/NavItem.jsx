import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavItem = ({ name, url, icon, bool }) => {
  return (
    <>
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive
            ? "bg-[#3B7CED] text-white border-l-2  border-white pl-10 py-4 flex gap-4"
            : "pl-10 py-4 flex gap-4"
        }
      >
        <span className="min-w-6 min-h-6">
          <img src={icon} alt="" />
        </span>
        <span className={`duration-200 ${!bool && "scale-0"}`}>{name}</span>
      </NavLink>
    </>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  bool: PropTypes.boolean,
};

export default NavItem;
