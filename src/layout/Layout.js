import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <section className="w-full flex max-w-[1500px] mx-auto flex-col md:flex-row">
        <HeaderMobile />
        <Header />
        <main className="w-full overflow-hidden">
          <WrappedComponent {...props} />
        </main>
      </section>
    );
  };
};

export default withLayout;
