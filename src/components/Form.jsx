import { useState } from "react";

const Form = () => {
  const [pageTitle, setPageTitle] = useState("");
  const handlePageTitle = (event) => {
    setPageTitle(event.target.value);
  };

  //{username:"abhishek", email:abhi@gmail.com, password:"admin"}
  const [formData, setFormData] = useState(null);
  const handleFormFields = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <div>
        <label>Page Title</label>
        <input type="text" onChange={handlePageTitle} />
        <p>{pageTitle}</p>
      </div>

      <div>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={handleFormFields} />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={handleFormFields} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleFormFields} />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
