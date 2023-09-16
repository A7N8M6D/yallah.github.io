import React from "react";
import './Form.css' 
import './../../App.css'
const Form = () => {
  return (
    <>
      <form className="container form">
        <label for='fname'> Name</label>
        <input type="text" id="fname"></input>
        <label for='fname'> Father Name</label>
        <input type="text" id="fname"></input>
        <label for='fname'> E-mail</label>
        <input type="text" id="fname"></input>
      </form>
    </>
  );
};

export default Form;
