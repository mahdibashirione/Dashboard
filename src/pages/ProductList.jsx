import { FiEdit, FiPlus, FiSearch } from "react-icons/fi";
import Button from "../Components/common/Button";

const ProductItem = ({ product }) => {
  return (
    <li className="w-full text-sm flex border-b items-center">
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">
        Chir apple cas-cd edwf ewfew fewf ewfdwas
      </span>
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">Chair</span>
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">#265365</span>
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">256$</span>
      <div className="px-4 py-2.5">
        <Button variants="outline">
          <FiEdit className="text" />
          Edite
        </Button>
      </div>
    </li>
  );
};

const ProductListPage = () => {
  return (
    <section>
      <div className="px-4 pb-4 flex items-center justify-between">
        {/* search product */}
        <div className="flex-1 relative text-sm">
          <input
            type="text"
            placeholder="Search for product"
            className="bg-gray-100 rounded-2xl py-2.5 pl-10 border  focus:border-blue-500 outline-none peer md:w-full lg:max-w-[400px] md:max-w-[250px] duration-100"
          />
          <FiSearch className="text-slate-400 absolute top-1/2 -translate-y-1/2 text-2xl left-3 peer-focus:text-blue-500 duration-200" />
        </div>
        {/* actions */}
        <div className="flex items-center gap-4">
          {/* add new product */}
          <Button variants="contant">
            <FiPlus className="text-lg" />
            New Product
          </Button>
        </div>
      </div>
      <article className="w-full">
        {/* title products */}
        <div className="w-full text-sm flex items-stretch bg-gray-100 border-y">
          <p className="pl-4 flex-1 py-2.5">NAME</p>
          <p className="pl-4 flex-1 py-2.5">CATEGORY</p>
          <p className="pl-4 flex-1 py-2.5">ID</p>
          <p className="pl-4 flex-1 py-2.5">PRICE</p>
          <div className="w-[104px]"></div>
        </div>
        {/* products list*/}
        <ul className="inset-y-1 w-full">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
      </article>
    </section>
  );
};

export default ProductListPage;
