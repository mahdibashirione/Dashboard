import { Card, Title, AreaChart, Metric } from "@tremor/react";
import { memo, useEffect, useState } from "react";

const AreaCh = () => {
  const allchartdata = [
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
    {
      date: "Apr 08",
      Templates: 110025,
      Hosting: 95000,
    },
    {
      date: "Apr 09",
      Templates: 70025,
      Hosting: 140000,
    },
    {
      date: "Apr 10",
      Templates: 110025,
      Hosting: 95000,
    },
    {
      date: "Apr 11",
      Templates: 40000,
      Hosting: 90000,
    },
    {
      date: "Apr 12",
      Templates: 79150,
      Hosting: 45000,
    },
    {
      date: "Apr 13",
      Templates: 46500,
      Hosting: 130000,
    },
    {
      date: "Apr 14",
      Templates: 135000,
      Hosting: 65000,
    },
    {
      date: "Apr 15",
      Templates: 165000,
      Hosting: 95000,
    },
    {
      date: "Apr 16",
      Templates: 100250,
      Hosting: 135000,
    },
    {
      date: "Apr 17",
      Templates: 130025,
      Hosting: 90000,
    },
    {
      date: "Apr 18",
      Templates: 110025,
      Hosting: 95000,
    },
    {
      date: "Apr 19",
      Templates: 70025,
      Hosting: 140000,
    },
    {
      date: "Apr 20",
      Templates: 110025,
      Hosting: 95000,
    },
    {
      date: "Apr 10",
      Templates: 110025,
      Hosting: 95000,
    },
    {
      date: "Apr 21",
      Templates: 40000,
      Hosting: 90000,
    },
    {
      date: "Apr 22",
      Templates: 79150,
      Hosting: 45000,
    },
    {
      date: "Apr 23",
      Templates: 46500,
      Hosting: 130000,
    },
    {
      date: "Apr 24",
      Templates: 135000,
      Hosting: 65000,
    },
    {
      date: "Apr 25",
      Templates: 165000,
      Hosting: 95000,
    },
    {
      date: "Apr 26",
      Templates: 100250,
      Hosting: 135000,
    },
    {
      date: "Apr 27",
      Templates: 130025,
      Hosting: 90000,
    },
    {
      date: "Apr 28",
      Templates: 110025,
      Hosting: 95000,
    },
    {
      date: "Apr 29",
      Templates: 70025,
      Hosting: 140000,
    },
    {
      date: "Apr 30",
      Templates: 110025,
      Hosting: 95000,
    },
  ];

  const [selectOption, setSelectOption] = useState("Month");
  const [chartData, setChartData] = useState([...allchartdata]);

  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };
  const handleChangeOption = (option) => {
    switch (option) {
      case "Month": {
        setChartData(allchartdata);
        break;
      }
      case "Week": {
        const lengthAllData = allchartdata.length;
        const filteredData = allchartdata.filter((data, i) => {
          if (i + 1 > lengthAllData - 7) return data;
        });
        setChartData(filteredData);
        break;
      }
      case "Day": {
        const lengthAllData = allchartdata.length;
        const filteredData = allchartdata.filter((data, i) => {
          if (i + 1 >= lengthAllData - 1) return data;
        });
        setChartData(filteredData);
        break;
      }
    }
  };

  useEffect(() => {
    handleChangeOption(selectOption);
  }, [selectOption]);

  return (
    <div className="max-w-full rounded-lg p-4 shadow">
      <div className="flex items-stretch justify-between">
        <Metric>Sales</Metric>
        <div className="flex border rounded-lg w-48 max-w-[12rem] overflow-hidden">
          <button
            onClick={(e) => setSelectOption("Month")}
            className={`duration-200 flex-1 text-center ${
              selectOption === "Month" && "bg-blue-500 text-white"
            }`}
          >
            Month
          </button>
          <button
            onClick={(e) => setSelectOption("Week")}
            className={`duration-200 flex-1 text-center ${
              selectOption === "Week" && "bg-blue-500 text-white"
            }`}
          >
            Week
          </button>
          <button
            onClick={(e) => setSelectOption("Day")}
            className={`duration-200 flex-1 text-center ${
              selectOption === "Day" && "bg-blue-500 text-white"
            }`}
          >
            Day
          </button>
        </div>
      </div>
      <AreaChart
        className="h-72 mt-4"
        data={chartData}
        index="date"
        categories={["Templates", "Hosting"]}
        colors={["orange", "blue"]}
        valueFormatter={dataFormatter}
      />
    </div>
  );
};

export default memo(AreaCh);
