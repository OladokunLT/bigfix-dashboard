import avatar from "../images/avatar.png";
import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";
import avatar3 from "../images/avatar-3.png";
import UserCard from "../utilities/UserCard";

const Employees = () => {
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
        <UserCard avatar={avatar} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar3} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar1} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar2} name="Aslam Dhikrullahi" role="Admin" />
      </div>
    </div>
  );
};

export default Employees;
