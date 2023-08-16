import { FiEdit, FiPlus, FiSearch } from "react-icons/fi";
import Button from "../Components/common/Button";
import { useEffect, useState } from "react";
import NewProduct from "../Components/PopUp/NewProduct";

const ProductItem = ({ product }) => {
  return (
    <li className="w-full text-sm flex border-b items-center">
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">{product.name}</span>
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">
        {product.category}
      </span>
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">#{product.id}</span>
      <span className="pl-4 flex-1 py-2.5 line-clamp-1">{product.price}$</span>
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
  const [dataProducts, setDataProducts] = useState([
    { id: "865985", name: "chair", category: "chir", price: "596" },
    { id: "651454", name: "iphone 14 plus", category: "digital", price: "16" },
    { id: "265134", name: "book telc A1 ", category: "books", price: "896" },
    { id: "465994", name: "pen", category: "digital", price: "56" },
    { id: "265964", name: "monitor", category: "digital", price: "756" },
  ]);
  const [popUp, setPopUp] = useState(false);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState(null);

  useEffect(() => {
    search === "" && setFilterProducts(dataProducts);
    if (search.length > 0) {
      const result = dataProducts.filter((product) =>
        product.name.includes(search)
      );
      setFilterProducts(result);
    }
  }, [search]);

  return (
    <section>
      <div className="px-4 pb-4 flex items-center justify-between gap-4">
        {/* search product */}
        <div className="flex-1 relative text-sm">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for product"
            className="bg-gray-100 rounded-2xl py-2.5 pl-10 border  focus:border-blue-500 outline-none peer md:w-full lg:max-w-[400px] md:max-w-[250px] duration-100"
          />
          <FiSearch className="text-slate-400 absolute top-1/2 -translate-y-1/2 text-2xl left-3 peer-focus:text-blue-500 duration-200" />
        </div>
        {/* actions */}
        <div className="flex items-center gap-4">
          {/* add new product */}
          <Button onClick={(e) => setPopUp(true)} variants="contant">
            <FiPlus className="text-lg" />
            New
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
          {filterProducts ? (
            filterProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <span>loading ...</span>
          )}
          {filterProducts && filterProducts.length === 0 && (
            <span className="block mt-8 text-red-500 text-center">
              please no product
            </span>
          )}
        </ul>
      </article>
      <NewProduct isOpen={popUp} handleCluse={(e) => setPopUp(false)} />
    </section>
  );
};

export default ProductListPage;
