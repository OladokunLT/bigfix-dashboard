import avatar from "../images/avatar.png";
import avatar1 from "../images/avatar-1.png";
import UserCard from "../utilities/UserCard";

const Employees = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-[#1A1A1A] leading-[19px] ">
          Employees{" "}
          <small className="rounded bg-blue-800 text-white p-0.5">21</small>
        </h2>

        <UserCard avatar={avatar} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar1} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar1} name="Aslam Dhikrullahi" role="Admin" />
        <UserCard avatar={avatar} name="Aslam Dhikrullahi" role="Admin" />

        {}
      </div>
    </div>
  );
};

export default Employees;
