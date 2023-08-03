import {
  Card,
  Title,
  LineChart,
  Metric,
  Subtitle,
  BadgeDelta,
} from "@tremor/react";
import separate from "../utils/utils";

const chartdata = [
  {
    year: "12 AM ",
    Visitors: 526,
  },
  {
    year: "06 AM",
    Visitors: 1565,
  },
  {
    year: "12 PM",
    Visitors: 3598,
  },
  {
    year: "6 PM",
    Visitors: 7662,
  },
];

const LineCh = () => {
  return (
    <div className="max-w-full rounded-lg p-4 shadow">
      <div className="flex items-start justify-between">
        <div>
          <Metric>
            {separate(
              chartdata.reduce((acc, cur) => {
                return (acc += cur.Visitors);
              }, 0)
            )}
          </Metric>
          <Subtitle>Today visitors</Subtitle>
        </div>
        <BadgeDelta deltaType="increase" className="font-bold mt-1">
          <span className="text-green-700">4.3%</span>
        </BadgeDelta>
      </div>
      <LineChart
        className="mt-6"
        data={chartdata}
        index="year"
        categories={["Visitors"]}
        colors={["blue"]}
        yAxisWidth={40}
      />
    </div>
  );
};

export default LineCh;
