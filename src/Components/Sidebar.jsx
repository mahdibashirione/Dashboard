import { FiFileText, FiPieChart, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navList = [
    { url: "/", title: "Overview", icon: <FiPieChart className="text-xl" /> },
    {
      url: "/products",
      title: "Product List",
      icon: <FiUsers className="text-xl" />,
    },
    {
      url: "/blogs",
      title: "Blog List",
      icon: <FiFileText className="text-xl" />,
    },
    { url: "/users", title: "Users", icon: <FiUsers className="text-xl" /> },
  ];

  return (
    <div className="max-h-screen min-h-screen min-w-[220px] w-[220px] lg:min-w-[250px] lg:w-[250px] sticky top-0 hidden md:block overflow-y-scroll scrollbar-none border-r p-4">
      <nav className="w-full h-full">
        <ul className="flex flex-col gap-2">
          {navList.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  to={item.url}
                  className={`${
                    pathname == item.url
                      ? "bg-blue-50 text-blue-500 font-semibold xl:text-lg"
                      : "text-slate-500 text-sm xl:text-base"
                  } flex gap-2 p-2 rounded-lg leading-7 items-center duration-200`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
