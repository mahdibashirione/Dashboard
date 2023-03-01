import { Button } from "@mui/material";
import { FiCheck, FiChevronDown, FiMoreVertical, FiPlay } from "react-icons/fi";

const ListMostPlayed = () => {
  const options = [
    {
      id: 1,
      ranke: "01",
      img: "https://mustext.net/wp-content/uploads/2021/02/Amir-Tataloo-Man-Bahat-Ghahram-1.jpg",
      artist: "َAmir Tataloo",
      track: "Man bahat gharam",
      time: "4:25",
      url: "",
    },
    {
      id: 2,
      ranke: "02",
      img: "https://roadmusic.ir/wp-content/uploads/2022/05/%DB%8C%D8%A7%D8%B3-1.jpg",
      artist: "Yas",
      track: "Beem",
      time: "10:23",
      url: "",
    },
    {
      id: 3,
      ranke: "03",
      img: "https://mifa-music.ir/wp-content/uploads/2020/10/522565353.jpg",
      artist: "Hichkas",
      track: "Ye roz khob",
      time: "3:50",
      url: "",
    },
    {
      id: 4,
      ranke: "04",
      img: "https://musichi.ir/wp-content/uploads/2021/10/Reza-Pishro-Qabil.jpg",
      artist: "Reza Pishro",
      track: "Qabil",
      time: "4:15",
      url: "",
    },
    {
      id: 5,
      ranke: "05",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8Xg5vgTHznnI-GkCnUxK6rohDjbNHCvYmQ&usqp=CAU",
      artist: "Reza Pishro",
      track: "Batel shod",
      time: "5:25",
      url: "",
    },
  ];

  return (
    <section className="w-full flex px-4 ">
      <article className="hidden lg:block lg:w-[40%] rounded-xl border shadow bg-white"></article>
      <article className="w-full lg:w-[60%] px-4 pt-2">
        <aside className="flex items-center justify-between">
          <h2 className="font-bold text-lg select-none">Most Played</h2>
          <div className="flex items-center gap-x-2 text-slate-400">
            <span className="text-[12px] md:text-sm select-none">
              55 songs on the list
            </span>
            <span className="border border-slate-300 rounded-md">
              <FiChevronDown className="text-xl lg:text-2xl" />
            </span>
          </div>
        </aside>
        <div className="w-full mt-4 flex flex-col gap-y-2">
          {options.map((song) => {
            return (
              <div
                key={song.id}
                className="w-full rounded-lg shadow bg-white border"
              >
                <ul className="w-full py-3 select-none flex gap-x-1">
                  <li className="flex w-[10%] justify-center items-center ">
                    {song.ranke}
                  </li>
                  <li className="flex w-[11%] items-center">
                    <span className="w-10 h-10 block bg-red-500 rounded-md shadow overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={song.img}
                        loading="lazy"
                        alt={song.artist + "-" + song.track}
                      />
                    </span>
                  </li>
                  <li className="flex w-[30%] items-center">
                    <span className="min-w-[14px] mr-1">
                      <FiPlay className="text-slate-400 text-sm" />
                    </span>
                    <span className="text-sm whitespace-nowrap line-clamp-1">
                      {song.track}
                    </span>
                  </li>
                  <li className="flex w-[29%] items-center ">
                    <span className="text-sm whitespace-nowrap text-slate-400 line-clamp-1">
                      {song.artist}
                    </span>
                  </li>
                  <li className="flex w-[10%] items-center">
                    <p className="text-sm whitespace-nowrap text-slate-400">
                      {song.time}
                    </p>
                  </li>
                  <li className="flex w-[10%] justify-center items-center">
                    <FiMoreVertical className="text-lg cursor-pointer text-slate-400" />
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default ListMostPlayed;
