import { Card, BarChart, BadgeDelta, Metric, Subtitle } from "@tremor/react";

const chartdata2 = [
  {
    name: "06:00 AM",
    Sales: 890,
    Profit: 338,
  },
  {
    name: "12:00 AM",
    Sales: 890,
    Profit: 338,
  },
  {
    name: "06:00 PM",
    Sales: 890,
    Profit: 338,
  },
  {
    name: "12:00 PM",
    Sales: 890,
    Profit: 338,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const MultiBarCh = () => {
  return (
    <div className="max-w-full rounded-lg p-4 shadow">
      <div className="flex items-start justify-between">
        <div>
          <Metric>$ 23,456</Metric>
          <Subtitle>Today sales</Subtitle>
        </div>
        <BadgeDelta deltaType="increase" className="font-bold mt-1">
          <span className="text-green-700">4.3%</span>
        </BadgeDelta>
      </div>
      <BarChart
        className="mt-6"
        data={chartdata2}
        index="name"
        categories={["Sales", "Profit"]}
        colors={["blue", "orange"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>
  );
};

export default MultiBarCh;
