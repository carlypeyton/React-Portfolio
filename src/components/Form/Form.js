import React from "react";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import FormStyle from "./Form.css"

function Form() {
  return (
    <form style={FormStyle}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control"></input>
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" className="form-control"></input>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea type="text" rows="3" className="form-control"></textarea>
      </div>
      <SubmitBtn />
    </form>
  )
}

export default Form;
