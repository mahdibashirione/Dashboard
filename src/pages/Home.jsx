import AreaCh from "../Components/AreaCh";
import LineCh from "../Components/LineCh";
import MultiBarCh from "../Components/MultiBarCh";
import SingleBarCh from "../Components/SingleBarCh";

const HomePage = () => {
  return (
    <>
      <div className="px-4">
        <AreaCh />
      </div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="col-span-1">
          <MultiBarCh />
        </div>
        <div className="col-span-1">
          <LineCh />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <SingleBarCh />
        </div>
      </div>
    </>
  );
};

export default HomePage;
