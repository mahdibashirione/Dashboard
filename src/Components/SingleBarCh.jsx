import { Card, BarChart, Subtitle, Metric, BadgeDelta } from "@tremor/react";
import separate from "../utils/utils";

const chartdata = [
  {
    name: "Apr 01",
    user: 10530,
  },
  {
    name: "Apr 02",
    user: 16532,
  },
  {
    name: "Apr 03",
    user: 22235,
  },
  {
    name: "Apr 04",
    user: 12056,
  },
  {
    name: "Apr 05",
    user: 18743,
  },
  {
    name: "Apr 06",
    user: 14743,
  },
  {
    name: "Apr 07",
    user: 7060,
  },
];

const dataFormatter = (number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

const SingleBarCh = () => {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <Metric>
            {separate(
              chartdata.reduce((acc, cur) => {
                return (acc += cur.user);
              }, 0)
            )}
          </Metric>
          <Subtitle>Tish week visitors</Subtitle>
        </div>
        <BadgeDelta deltaType="increase" className="font-bold mt-1">
          <span className="text-green-700">10%</span>
        </BadgeDelta>
      </div>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["user"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default SingleBarCh;
