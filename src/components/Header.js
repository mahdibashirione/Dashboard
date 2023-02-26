import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
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
      icon: <CottageRoundedIcon fontSize="small" />,
    },
    {
      id: 2,
      label: "Category",
      url: "/category",
      icon: <CategoryRoundedIcon fontSize="small" />,
    },
    {
      id: 3,
      label: "Album",
      url: "/album",
      icon: <AlbumRoundedIcon fontSize="small" />,
    },
    {
      id: 4,
      label: "Users",
      url: "/users",
      icon: <PersonRoundedIcon fontSize="small" />,
    },
    {
      id: 5,
      label: "Liked",
      url: "/liked",
      icon: <FavoriteRoundedIcon fontSize="small" />,
    },
  ];

  return (
    <header className="md:py-4 md:px-2 min-h-full bg-[#f8f9fb]">
      <div
        className={`${
          isOpen ? "max-w-full" : "max-w-[52px]"
        } duration-300 transition-all w-full min-h-screen md:min-h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] sticky top-4 py-4 px-2 bg-blue-500 rounded-r-lg md:rounded-l-lg flex flex-col justify-between`}
      >
        <h1 className="select-none w-full text-center p-2 rounded-md duration-200 text-white">
          D
        </h1>
        <ul className="w-full h-full select-none flex flex-col gap-y-2 lg:gap-y-1 text-white dark:text-slate-500">
          {menuItems.map((item) => {
            return (
              <li key={item.id + "-" + item.label} className="w-full">
                <Link
                  to={item.url}
                  className={`flex items-center gap-x-2 p-2 pl-2 w-full overflow-hidden ${
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
                    } text-sm md:text-base  duration-300`}
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
          className={`flex items-center gap-x-2 pl-2 p-2 text-white ${
            isOpen ? "pr-8" : "pr-2"
          } rounded-md duration-200 ${
            location.pathname === "/setting"
              ? "bg-white text-slate-800"
              : "bg-transparent hover:bg-blue-400"
          }`}
        >
          <SettingsRoundedIcon fontSize="small" />
          {isOpen && <span className="text-sm md:text-base">Setting</span>}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-4 border-gray-300 border top-16 z-10 bg-white p-1.5 rounded-full"
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
