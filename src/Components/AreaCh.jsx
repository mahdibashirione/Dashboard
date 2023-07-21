import { Card, Title, AreaChart, Metric } from "@tremor/react";

const AreaCh = () => {
  const chartdata = [
    {
      date: "Apr 01",
      Templates: 40000,
      Hosting: 90000,
    },
    {
      date: "Apr 02",
      Templates: 79150,
      Hosting: 45000,
    },
    {
      date: "Apr 03",
      Templates: 46500,
      Hosting: 130000,
    },
    {
      date: "Apr 04",
      Templates: 135000,
      Hosting: 65000,
    },
    {
      date: "Apr 05",
      Templates: 165000,
      Hosting: 95000,
    },
    {
      date: "Apr 06",
      Templates: 100250,
      Hosting: 135000,
    },
    {
      date: "Apr 07",
      Templates: 130025,
      Hosting: 90000,
    },
  ];

  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <Card className="max-w-full">
      <Metric>Sales</Metric>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["Templates", "Hosting"]}
        colors={["orange", "blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaCh;
