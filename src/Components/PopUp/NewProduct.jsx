import { FiX } from "react-icons/fi";
import Button from "../common/Button";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import { delay, motion } from "framer-motion";

const NewProduct = ({
  initialValuse = {
    id: Math.floor(Math.random() * 1000000),
    name: "",
    category: "",
    price: "",
  },
  isOpen = false,
  handleCluse,
}) => {
  const contain = {
    open: { opacity: 1, zIndex: 50 },
    clused: {
      opacity: 0,
      zIndex: -10,
      transition: { delay: 0.3, duration: 0.2 },
    },
  };
  const items = {
    open: { opacity: 1 },
    clused: { opacity: 0 },
  };
  return (
    <motion.aside
      initial={{ opacity: 0, zIndex: -10 }}
      animate={isOpen ? "open" : "clused"}
      variants={contain}
      className="fixed top-0 left-0 w-screen h-screen p-4 flex items-center justify-center bg-zinc-900/50 z-50"
    >
      <motion.div
        transition={{ delay: 0.2 }}
        animate={isOpen ? "open" : "clused"}
        variants={items}
        className="w-full h-full bg-white rounded-2xl p-4 max-w-[400px] overflow-y-scroll scrollbar-none"
      >
        <header className="flex justify-between items-center border-b pb-4 px-4">
          <h3 className="font-semibold">Add New Product</h3>
          <button onClick={handleCluse}>
            <FiX className="text-2xl" />
          </button>
        </header>
        <Formik
          initialValues={initialValuse}
          validationSchema={Yup.object().shape({
            name: Yup.string("").required("Please,conform"),
            category: Yup.string("").required("Please,conform"),
            price: Yup.string("").required("Please,conform"),
          })}
          validateOnMount={true}
          onSubmit={(values) => console.log(values)}
        >
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit} className="w-full p-4">
                <Input
                  disabled={true}
                  formik={props}
                  label="ID"
                  name="id"
                  placeholder="265894"
                />
                <Input
                  formik={props}
                  label="Name"
                  name="name"
                  placeholder="chair apple 2-d5"
                />
                <Input
                  formik={props}
                  label="Category"
                  name="category"
                  placeholder="digital"
                />
                <Input
                  formik={props}
                  label="Price"
                  name="price"
                  placeholder="256"
                />
                <Button
                  disabled={!props.isValid && true}
                  className="w-full flex justify-center mt-8"
                >
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      </motion.div>
    </motion.aside>
  );
};

export default NewProduct;
