import Header from "../components/Header";

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <section className="w-full flex">
        <Header/>
        <WrappedComponent {...props} />
      </section>
    );
  };
};

export default withLayout;
