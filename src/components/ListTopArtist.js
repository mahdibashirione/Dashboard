import { FiChevronLeft, FiChevronRight, FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListTopArtist = () => {
  const options = [
    {
      id: 1,
      name: "Amir Tataloo",
      discreption: "tataloo",
      falowers: "4,105,550",
      img: "https://files.virgool.io/upload/users/47488/posts/zzpeknjyku9x/fqeovzwgnpkq.jpeg",
    },
    {
      id: 2,
      name: "Yas",
      discreption: "Yyas",
      falowers: "3,955,025",
      img: "https://pbs.twimg.com/profile_images/1288497579899183112/HxZZ-iPv_400x400.jpg",
    },
    {
      id: 3,
      name: "Pishro",
      discreption: "pishro",
      falowers: "3,880,505",
      img: "http://photokade.com/wp-content/uploads/rezapishro-photokade-4.jpg",
    },
    {
      id: 4,
      name: "Hichkas",
      discreption: "hichkas",
      falowers: "3,874,289",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hichkas.jpg",
    },
  ];

  return (
    <section className="w-full z-10">
      <article className="flex items-center justify-between px-4">
        <div className="flex items-center gap-x-4">
          <h2 className="font-bold text-lg">Top Artist</h2>
          <Link to="/" className="text-[12px] text-slate-400 flex items-center">
            Top 50
            <FiChevronRight />
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="p-1 bg-white duration-200 hover:bg-purple-500 hover:text-white text-slate-400 rounded-full shadow cursor-pointer">
            <FiChevronLeft className="text-xl lg:text-2xl" />
          </span>
          <span className="p-1 bg-white duration-200 hover:bg-purple-500 hover:text-white text-slate-400 rounded-full shadow cursor-pointer">
            <FiChevronRight className="text-xl lg:text-2xl" />
          </span>
        </div>
      </article>
      <article className="scrollbar-hidden w-full px-4 pt-4 gap-2 flex overflow-x-scroll md:overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-4 pb-4">
        {options.map((item) => {
          return (
            <aside
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border shadow col-span-1 bg-transparent select-none min-w-[230px] md:min-w-full flex flex-col"
            >
              <Link
                to="/"
                className="shadow w-full h-[200px] md:h-[300px] lg:h-[200px] xl:h-[260px] overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-110 duration-500 grayscale"
                  src={item.img}
                  loading="lazy"
                  alt={item.discreption}
                />
              </Link>
              <div className="w-full p-4">
                <h3 className="font-extrabold text-slate-800 text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm flex">
                  falowers {item.falowers}
                </p>
              </div>
            </aside>
          );
        })}
      </article>
    </section>
  );
};

export default ListTopArtist;
