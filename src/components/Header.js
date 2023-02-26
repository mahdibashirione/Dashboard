import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronRight, FiUser } from "react-icons/fi";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { duration } from "@mui/material";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      icon: <CottageRoundedIcon className="ml-0.5" fontSize="small" />,
    },
    {
      id: 2,
      label: "Category",
      url: "/category",
      icon: <CategoryRoundedIcon className="ml-0.5" fontSize="small" />,
    },
    {
      id: 3,
      label: "Album",
      url: "/album",
      icon: <AlbumRoundedIcon className="ml-0.5" fontSize="small" />,
    },
    {
      id: 4,
      label: "Users",
      url: "/users",
      icon: <PersonRoundedIcon className="ml-0.5" fontSize="small" />,
    },
    {
      id: 5,
      label: "Liked",
      url: "/liked",
      icon: <FavoriteRoundedIcon className="ml-0.5" fontSize="small" />,
    },
  ];

  return (
    <header className="md:py-4 md:px-2 min-h-full bg-[#f8f9fb]">
      <div
        className={`${
          isOpen ? "max-w-full" : "max-w-[64px]"
        } duration-300 transition-all w-full min-h-screen md:min-h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] sticky top-4 py-4 px-3 bg-blue-500 rounded-r-lg md:rounded-l-lg flex flex-col justify-between items-center`}
      >
        <div
          className={`border-b pb-4 ${
            isOpen ? "border-gray-200" : "border-transparent"
          } select-none w-full flex gap-2 items-center duration-200 text-white overflow-hidden`}
        >
          <Link
            to="/user"
            className="min-w-[40px] min-h-[40px] rounded-md flex items-center justify-center cursor-pointer hover:bg-blue-400"
          >
            <FiUser className="text-xl" />
          </Link>
          <div
            className={`text-sm flex flex-col gap-1 whitespace-nowrap ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-slate-200">Good Morning!</span>
            <p>Mahdi</p>
          </div>
        </div>
        <ul className="w-full h-full select-none flex flex-col gap-y-2 lg:gap-y-1 text-white dark:text-slate-500">
          {menuItems.map((item) => {
            return (
              <li key={item.id + "-" + item.label} className="w-full">
                <Link
                  to={item.url}
                  className={`flex items-center gap-x-2 p-2 w-full overflow-hidden ${
                    isOpen ? "pr-8" : "pr-2"
                  } rounded-md duration-200 ${
                    location.pathname === item.url
                      ? "bg-white text-slate-800"
                      : "bg-transparent hover:bg-blue-400"
                  }`}
                >
                  {item.icon}
                  <span
                    className={`${
                      isOpen ? "opacity-100" : "opacity-0"
                    } text-sm md:text-base  duration-200`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          to="/setting"
          className={`flex items-center w-full gap-x-2 p-2 overflow-hidden ${
            isOpen ? "pr-8" : "pr-2"
          } rounded-md duration-200 ${
            location.pathname === "/setting"
              ? "bg-white text-slate-800"
              : "text-white bg-transparent hover:bg-blue-400"
          }`}
        >
          <SettingsRoundedIcon className="ml-0.5" fontSize="small" />
          <span
            className={`${
              isOpen ? "opacity-100" : "opacity-0"
            } text-sm md:text-base  duration-200`}
          >
            Setting
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-4 top-[62px] z-10 bg-white p-1.5 rounded-full"
        >
          <FiChevronRight
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } text-blue-500 text-xl duration-300`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
