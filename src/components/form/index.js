import React, { useState } from "react";
import axios from "axios";
import style from "./style.module.css";

const Form = () => {
  const [stdData, setStdData] = useState({
    name: "",
    email: "",
    age: "",
    field: "",
  });

  const changeHandeler = (e) => {
    setStdData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(stdData);
    axios
      .post("http://localhost:8000/api/students/", {
        name: stdData.name,
        email: stdData.email,
        age: +stdData.age,
        field: stdData.field,
      })
      .then((response) => {
        console.log("posted");
      });
  };
  return (
    <div className={style.container}>
      <form onSubmit={submitHandler} className={style.stdForm}>
        <div>
          <label htmlFor='studName'>Student Name</label>x`` <br />
          <input
            id='studName'
            type='text'
            name='name'
            onChange={changeHandeler}
            placeholder='Jhon'
          />
        </div>

        <div>
          <label htmlFor='studEmail'>Student Email</label> <br />
          <input
            id='studEmail'
            type='email'
            name='email'
            onChange={changeHandeler}
            placeholder='jhon@kit.com'
          />
        </div>

        <div>
          <label htmlFor='studAge'>Student Age</label> <br />
          <input
            id='studAge'
            type='number'
            name='age'
            onChange={changeHandeler}
            placeholder='22'
          />
        </div>

        <div>
          <label htmlFor='studField'>Student Field</label> <br />
          <input
            id='studField'
            type='text'
            name='field'
            onChange={changeHandeler}
            placeholder='BSCS'
          />
        </div>

        <div>
          <input type='submit' value='Submit' className={style.btn} />
        </div>
      </form>
    </div>
  );
};

export default Form;
