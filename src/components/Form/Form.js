import React from "react";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import FormStyle from "./Form.css"

function Form() {
  return (
    <form style={FormStyle}>
      <div className="form-group">
        <p>Name</p>
        <input type="text" className="form-control"></input>
      </div>
      <div className="form-group">
        <p>Email Address</p>
        <input type="text" className="form-control"></input>
      </div>
      <div className="form-group">
        <p>Message</p>
        <input type="text" className="form-control"></input>
      </div>
      <SubmitBtn />
    </form>
  )
}

export default Form;