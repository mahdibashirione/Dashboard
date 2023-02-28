import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronRight, FiMenu, FiUser } from "react-icons/fi";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Backdrop } from "@mui/material";

const HeaderMobile = () => {
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

  const handleClouseHeader = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="md:hidden text-white sticky top-0 w-full p-4 bg-purple-500 flex justify-between items-center">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <h1 className="select-none">IrMusic</h1>
        <Backdrop open={isOpen} onClick={handleClouseHeader} />
      </div>
      <header
        className={`
        ${isOpen ? "max-w-full px-4" : "max-w-[0px] px-0"} 
        fixed top-0 left-0 md:hidden duration-300 md:py-4 rounded-r-xl shadow md:px-2 min-h-full bg-purple-500 overflow-hidden py-4 flex flex-col justify-between`}
      >
        <div
          className={`border-b pb-4 border-gray-300 select-none w-full flex gap-2 items-center duration-200 text-white overflow-hidden`}
        >
          <Link
            to="/user"
            className="min-w-[40px] min-h-[40px] rounded-md flex items-center justify-center cursor-pointer hover:bg-purple-400"
          >
            <FiUser className="text-xl" />
          </Link>
          <div className="text-sm flex flex-col gap-1 whitespace-nowrap">
            <span className="text-slate-200">Good Morning!</span>
            <p>Mahdi</p>
          </div>
        </div>
        <ul className="w-full h-full select-none flex flex-col gap-y-2 lg:gap-y-1 text-white dark:text-slate-500">
          {menuItems.map((item) => {
            return (
              <li key={item.id + "-" + item.label} className="w-full">
                <Link
                  onClick={handleClouseHeader}
                  to={item.url}
                  className={`flex items-center gap-x-2 p-2 w-full overflow-hidden rounded-md duration-200 ${
                    location.pathname === item.url
                      ? "bg-white text-slate-800"
                      : "bg-transparent hover:bg-purple-400"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm md:text-base  duration-200">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          onClick={handleClouseHeader}
          to="/setting"
          className={`flex items-center w-full gap-x-2 p-2 overflow-hidden rounded-md duration-200 ${
            location.pathname === "/setting"
              ? "bg-white text-slate-800"
              : "text-white bg-transparent hover:bg-purple-400"
          }`}
        >
          <SettingsRoundedIcon className="ml-0.5" fontSize="small" />
          <span className={` text-sm md:text-base  duration-200`}>Setting</span>
        </Link>
      </header>
    </>
  );
};

export default HeaderMobile;
