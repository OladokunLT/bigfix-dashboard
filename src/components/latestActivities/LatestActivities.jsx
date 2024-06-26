import blueBall from "../images/blueBall.png";
import greenBall from "../images/greenBall.png";
import purpleBall from "../images/purpleBall.png";
import redBall from "../images/redBall.png";
import yellowBall from "../images/yellowBall.png";

const LatestActivities = () => {
  return (
    <section className="w-full mt-[72px] mb-16">
      <h3 className="text-[#1A1A1A] text-[24px] mb-[24px]">
        Latest activities
      </h3>
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex gap-2 sm:gap-6 p-2 sm:p-4 lg:p-6 items-center border border-[#E2E6E9] rounded bg-white">
          <span className="min-w-6 min-h-6 ">
            <img src={blueBall} alt="" />
          </span>
          <p className=" text-[#596773]">
            Aslam Dhikrullahi{" "}
            <span className="text-[#7A8A98]"> created a new invoice</span>{" "}
            INV001.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-6 p-2 sm:p-4 lg:p-6 items-center border border-[#E2E6E9] rounded bg-white">
          <span className="min-w-6 min-h-6">
            <img src={purpleBall} alt="" />
          </span>
          <p className=" text-[#596773]">
            Aslam Dhikrullahi{" "}
            <span className="text-[#7A8A98]"> applied for leave.</span>
          </p>
        </div>
        <div className="flex gap-2 sm:gap-6 p-2 sm:p-4 lg:p-6 items-center border border-[#E2E6E9] rounded bg-white">
          <span className="min-w-6 min-h-6">
            <img src={yellowBall} alt="" />
          </span>
          <p className=" text-[#596773]">
            24 Desktop Computers
            <span className="text-[#7A8A98]"> were shipped to </span>
            Client (Aslam Dhikrullahi)
          </p>
        </div>
        <div className="flex gap-2 sm:gap-6 p-2 sm:p-4 lg:p-6 items-center border border-[#E2E6E9] rounded bg-white">
          <span className="min-w-6 min-h-6">
            <img src={redBall} alt="" />
          </span>
          <p className=" text-[#596773]">
            Aslam Dhikrullahi <span className="text-[#7A8A98]"> added </span> 32
            Laptops
            <span className="text-[#7A8A98]"> to the inventory. </span>
          </p>
        </div>
        <div className="flex gap-2 sm:gap-6 p-2 sm:p-4 lg:p-6 items-center border border-[#E2E6E9] rounded bg-white">
          <span className="min-w-6 min-h-6">
            <img src={blueBall} alt="" />
          </span>
          <p className=" text-[#596773]">
            You{" "}
            <span className="text-[#7A8A98]">
              {" "}
              assigned admin privileges to{" "}
            </span>
            Aslam Dhikrullahi
          </p>
        </div>
        <div className="flex gap-2 sm:gap-6 p-2 sm:p-4 lg:p-6 items-center border border-[#E2E6E9] rounded bg-white">
          <span className="min-w-6 min-h-6">
            <img src={greenBall} alt="" />
          </span>
          <p className=" text-[#596773]">
            Aslam Dhikrullahi{" "}
            <span className="text-[#7A8A98]">
              {" "}
              assigned admin privileges to{" "}
            </span>
            INV001.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestActivities;
