import avatar from "../images/avatar.png";
import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";
import avatar3 from "../images/avatar-3.png";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";
import c7 from "../images/c7.png";
import UserCard from "../utilities/UserCard";

const Contacts = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div className="inline-flex gap-4 items-center self-start ">
          <h2 className="font-medium text-[#1A1A1A] leading-[19.41px] ">
            Employees
          </h2>

          <small className="rounded font-medium bg-[#3B7CED] text-white text-[8px] p-0.5 leading-[9.7px]">
            21
          </small>
        </div>
        {/* Users */}
        <UserCard avatar={c1} name="Aslam Dhikrullahi" role="Vendor" />
        <UserCard avatar={c2} name="Aslam Dhikrullahi" role="Clent" />
        <UserCard avatar={c3} name="Aslam Dhikrullahi" role="Employee" />
        <UserCard avatar={c4} name="Aslam Dhikrullahi" role="Vendor" />
        <UserCard avatar={c5} name="Aslam Dhikrullahi" role="client" />
        <UserCard avatar={c6} name="Aslam Dhikrullahi" role="Employee" />
        <UserCard avatar={c7} name="Aslam Dhikrullahi" role="Vendor" />
      </div>
    </div>
  );
};

export default Contacts;
