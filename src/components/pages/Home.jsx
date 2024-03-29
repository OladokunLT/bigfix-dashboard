import React from "react";
import CardOverview from "../utilities/CardOverview";
import tradeUp from "../images/trade-up.png";
import tradeDown from "../images/trade-down.png";
const Home = () => {
  return (
    <div className="flex gap-[24px]">
      <div
        className="bg-[url('/revenue.png')] inline-flex"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
      >
        <CardOverview
          amount="20,000,000"
          revenue="revenue"
          icon={tradeUp}
          month="March  10%"
        />
      </div>
      <div
        className="bg-[url('/sales.png')] inline-flex"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
      >
        <CardOverview
          amount="42"
          revenue="Total sales"
          icon={tradeUp}
          month="March  10%"
        />
      </div>
      <div
        className="bg-[url('/employees.png')] inline-flex"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
      >
        <CardOverview
          amount="21"
          revenue="Employees"
          icon={tradeDown}
          month="March  20%"
        />
      </div>
      <div
        className="bg-[url('/clients.png')] inline-flex"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
      >
        <CardOverview
          amount="24"
          revenue="24"
          icon={tradeUp}
          month="March  10%"
        />
      </div>
    </div>
  );
};

export default Home;
