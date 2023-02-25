import { Link, useLocation } from "react-router-dom";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Header = () => {
  const location = useLocation();

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
    {
      id: 6,
      label: "Setting",
      url: "/setting",
      icon: <SettingsRoundedIcon fontSize="small" />,
    },
  ];

  return (
    <header className="py-4 px-2 min-h-full bg-[#eee]">
      <div className="w-full min-h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] sticky top-4 py-4 px-2 bg-blue-500 rounded-lg flex flex-col justify-between">
        <ul className="w-full h-full select-none flex flex-col gap-y-2 lg:gap-y-1 text-white dark:text-slate-500">
          {menuItems.map((item) => {
            return (
              <li>
                <Link
                  key={item.id}
                  to={item.url}
                  className={`flex items-center gap-x-2 p-2 pr-8 rounded-md duration-200 ${
                    location.pathname === item.url
                      ? "bg-zinc-800"
                      : "bg-transparent hover:bg-blue-400"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm md:text-base lg:text-lg">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
