import Header from "../components/Header";

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <section className="w-full flex max-w-[1500px] mx-auto">
        <Header />
        <section className="w-full overflow-hidden">
          <WrappedComponent {...props} />
        </section>
      </section>
    );
  };
};

export default withLayout;
