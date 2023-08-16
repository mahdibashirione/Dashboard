const Button = ({
  className = "",
  children,
  variants = "contant",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} text-center ${
        variants === "contant"
          ? "bg-blue-500 hover:bg-blue-600 text-white"
          : variants === "outline" &&
            "bg-white border border-gray-300 text-slate-800 hover:bg-blue-500 hover:text-white hover:border-blue-500"
      } flex items-center gap-2 text-sm p-2.5 rounded-xl duration-200 active:scale-95`}
    >
      {children}
    </button>
  );
};

export default Button;
