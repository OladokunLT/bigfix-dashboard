import { Link } from "react-router-dom";
import avatar from "../../components/images/avatar.png";
import logo from "../../components/images/logo.png";
const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center pt-10 mb-20 fixed right-4 left-4 sm:right-10 sm:left-10 2xl:px-10 max-w-[1440px] mx-auto">
        <Link to="/">
          <img className="[w-97.42px] h-[32px]" src={logo} alt="" />
        </Link>

        <div
          className="h-10 flex items-center gap-4 cursor-pointer"
          title="Change user"
        >
          <img className="w-10 h-10" src={avatar} alt="current user avatar" />
          <span className="text-[#31A1A1A] text-xl font-medium hidden sm:flex">
            Administrator
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
