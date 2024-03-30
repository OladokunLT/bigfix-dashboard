import React from "react";

const CardOverview = ({ revenue, amount, month = "March", icon }) => {
  return (
    <>
      <div className="p-8 inline-flex flex-col gap-[24px] rounded">
        <p className="font-medium text-[#E6E6E6]">{revenue}</p>
        <p className="font-bold text-[24px] text-white">{amount}</p>
        <p className=" text-[#E6E6E6]  flex items-center">
          {month}
          <span>
            <img src={icon} alt="icon" />
          </span>
        </p>
      </div>
    </>
  );
};

export default CardOverview;
