import { FiMoreVertical } from "react-icons/fi";

const ViewQantityProduct = () => {
  const options = [
    {
      id: 1,
      label: "",
      discreption: "Your bank balance",
      quantity: "143",
      icon: (
        <svg
          width="70"
          height="50"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5H12.5C10.8431 5 9.5 6.34315 9.5 8C9.5 9.65685 10.8431 11 12.5 11H20M12.5 8V8.00999M3.11111 1H17.8889C19.0548 1 20 2.04467 20 3.33333V12.6667C20 13.9553 19.0548 15 17.8889 15H3.11111C1.94518 15 1 13.9553 1 12.6667V3.33333C1 2.04467 1.94518 1 3.11111 1Z"
            stroke="#001A72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "",
      discreption: "Your bank balance",
      quantity: "143",
      icon: (
        <svg
          width="49"
          height="49"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 4L5 10V14H9L15 8M11 4L14 1L18 5L15 8M11 4L15 8M7 2L1 2L1 18L17 18V12"
            stroke="#001A72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "",
      discreption: "Your bank balance",
      quantity: "143",
      icon: (
        <svg
          width="50"
          height="48"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9H6.5L8 12H12L14 9H19M1 9V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V9M1 9L3.75667 1.64888C3.90304 1.25857 4.27616 1 4.693 1H15.307C15.7238 1 16.097 1.25857 16.2433 1.64888L19 9"
            stroke="#001A72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "",
      discreption: "Your bank balance",
      quantity: "143",
      icon: (
        <svg
          width="49"
          height="51"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13.2V14.8875L13.9 15.9M6 9H1M17 7V5C17 3.89543 16.1046 3 15 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H6M12 1V5M6 1V5M17.5 15C17.5 17.4853 15.4853 19.5 13 19.5C10.5147 19.5 8.5 17.4853 8.5 15C8.5 12.5147 10.5147 10.5 13 10.5C15.4853 10.5 17.5 12.5147 17.5 15Z"
            stroke="#001A72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full px-4 flex overflow-x-scroll md:overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 pb-4">
      {options.map((item) => {
        return (
          <div className="col-span-1 border bg-white rounded-3xl shadow select-none p-6 min-w-[250px] md:min-w-full">
            <div key={item.id} className="w-full flex justify-between">
              <span className="block w-14 h-14">{item.icon}</span>
              <FiMoreVertical className="text-2xl" />
            </div>
            <h3 className="font-extrabold mt-2 text-slate-800 text-2xl">
              ${item.quantity}
            </h3>
            <p className="w-1/2 text-gray-500">{item.discreption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewQantityProduct;
