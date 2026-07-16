const CustomInput = ({ label, type, name, placeholder }) => {
  return (
    <div className="custom-input">
      {!placeholder && <label>{label}</label>}
      <input
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
