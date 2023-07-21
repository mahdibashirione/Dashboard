import { FiBell, FiFileText, FiPieChart, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
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
    <header className="md:hidden w-full fixed top-0 left-0 z-20 bg-white">
      <div className="max-w-8xl mx-auto p-4 border-b flex justify-between items-center">
        <button
          onClick={(e) => setIsShow(!isShow)}
          className="flex flex-col gap-y-2 overflow-hidden"
        >
          <span
            className={`h-[3px] w-8 block bg-zinc-900 rounded-full duration-500 ${
              isShow && "rotate-45 translate-y-3"
            }`}
          ></span>
          <span
            className={`h-[3px] w-8 block bg-zinc-900 rounded-full duration-500 ${
              isShow && "translate-x-8"
            }`}
          ></span>
          <span
            className={`h-[3px] w-8 block bg-zinc-900 rounded-full duration-500 ${
              isShow && "-rotate-45 -translate-y-2.5"
            }`}
          ></span>
        </button>
        <h1 className="font-bold">
          {navList.map((item) => item.url == pathname && item.title)}
        </h1>
        <div className="text-2xl relative">
          <FiBell />
          <span className="block w-1.5 h-1.5 rounded-full bg-red-500 absolute top-0 left-0"></span>
        </div>
      </div>
      <nav
        className={`w-full absolute top-full left-0 z-20 px-4 bg-white ${
          isShow ? "max-h-screen" : "max-h-0"
        } overflow-hidden duration-500 shadow border-b`}
      >
        <ul>
          {navList.map((item, i) => {
            return (
              <li onClick={(e) => setIsShow(false)} key={i}>
                <Link
                  to={item.url}
                  className={`${
                    pathname == item.url && "bg-blue-50 text-blue-500"
                  } flex gap-2 p-2 rounded-lg leading-7 items-center my-2`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
