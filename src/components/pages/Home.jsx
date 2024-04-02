import CardOverview from "../utilities/CardOverview";
import tradeUp from "../images/trade-up.png";
import tradeDown from "../images/trade-down.png";
import LatestActivities from "../latestActivities/LatestActivities";
import Employees from "../employees/Employees";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-x-10 pb-10">
        <div className="col-1 ">
          {/* Overview secttion*/}
          <section className="flex flex-wrap gap-[24px] relative">
            <h2 className="text-[24px] sm:text-[32px] absolute -mt-[125px]">
              Overview
            </h2>
            <div
              className="bg-[url('/revenue.png')] inline-flex"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <CardOverview
                amount="20,000,000"
                revenue="Revenue"
                icon={tradeUp}
                month="March  10%"
              />
            </div>
            <div
              className="bg-[url('/sales.png')] inline-flex"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
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
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
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
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <CardOverview
                amount="24"
                revenue="Clients"
                icon={tradeUp}
                month="March  10%"
              />
            </div>
          </section>

          {/* Latest activities */}
          <LatestActivities />
        </div>

        {/* col-2 */}
        <div className="col-2 flex-1 flex flex-col gap-16">
          <Employees />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Home;
