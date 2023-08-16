const Input = ({ formik, label, name, placeholder, disabled = false }) => {
  console.log(disabled);

  return (
    <div className="relative pb-4">
      <label htmlFor="ProductName">{label}</label>
      <input
        id="ProductName"
        name={name}
        {...formik.getFieldProps(name)}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        className={`${
          formik.errors[name] && formik.touched[name] && "border-red-500"
        } border rounded-xl text-sm px-4 py-2 outline-none focus:border-blue-500 w-full mt-2`}
      />
      {formik.errors[name] && formik.touched[name] ? (
        <p className="text-sm text-right w-full absolute -bottom-1 left-0 text-red-500 pl-2">
          {formik.errors[name]}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
