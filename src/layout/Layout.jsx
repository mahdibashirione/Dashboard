import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-8xl mx-auto flex mt-[57px] md:mt-0">
        <Sidebar />
        <main className="flex-1 p-4 min-h-screen">{children}</main>
      </div>
    </>
  );
};

export default Layout;
