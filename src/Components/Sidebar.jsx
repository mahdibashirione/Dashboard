import { Card } from "@tremor/react";
import { FiFileText, FiPieChart, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navList = [
    { url: "/", title: "Overview", icon: <FiPieChart className="text-2xl" /> },
    {
      url: "/products",
      title: "Product List",
      icon: <FiUsers className="text-2xl" />,
    },
    {
      url: "/blogs",
      title: "Blog List",
      icon: <FiFileText className="text-2xl" />,
    },
    { url: "/users", title: "Users", icon: <FiUsers className="text-2xl" /> },
  ];

  return (
    <div className="max-h-screen min-h-screen min-w-[220px] w-[220px] lg:min-w-[250px] lg:w-[250px] p-4 pr-0 sticky top-0 hidden md:block overflow-y-scroll scrollbar-none">
      <Card className="h-full border border-gray-30 p-4">
        <nav className="w-full h-full">
          <ul className="flex flex-col gap-2">
            {navList.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    to={item.url}
                    className={`${
                      pathname == item.url && "bg-blue-50 text-blue-500"
                    } flex gap-2 p-2 rounded-lg leading-7 items-center`}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Card>
    </div>
  );
};

export default Sidebar;
