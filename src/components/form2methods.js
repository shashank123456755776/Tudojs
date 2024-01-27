import React, { useState } from 'react';

const Form2methods = () => {
  const onsubmitmethod = () => {
    setsubmit(value);
    setvalue({
      firstname: "",
      email: "",
      lastname: "",
    });
  };

  const onchanger = (e) => {
    const { name, value } = e.target;

    setvalue((prevValues) => ({
      ...prevValues,
      // Here updating the  values of name  
      [name]: value,
    }));
  };

  const [value, setvalue] = useState({
    firstname: "",
    email: "",
    lastname: "",
  });
  const [submit, setsubmit] = useState();

  return (
    <>
      <form onSubmit={onsubmitmethod}>
        <input
          type='text'
          name="firstname"
          //here using value because of controlled componenets
          //in such a way that input has controlled on values put by users
          value={value.firstname}
          onChange={onchanger}
        />

        <input
          type='text'
          name="email"
          value={value.email}
          onChange={onchanger}
        />

        <input
          type='text'
          name="lastname"
          value={value.lastname}
          onChange={onchanger}
        />

        <button type='submit'>click me</button>
      </form>

      {/* Display submitted values */}
      {submit && (
        <div>
          <p>Submitted Values:</p>
          <ul>
            {Object.entries(submit).map(([key, value], index) => (
              <li key={index}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Form2methods;
