import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-8xl mx-auto flex mt-[57px]">
        <Sidebar />
        <main className="flex-1 p-4 h-[calc(100vh*4)]">{children}</main>
      </div>
    </>
  );
};

export default Layout;
