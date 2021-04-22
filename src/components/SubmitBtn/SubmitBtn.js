import React from "react";
import SubmitBtnStyle from "./SubmitBtn.css"

function SubmitBtn() {
  return (
    <button style={SubmitBtnStyle} type="submit" className="btn btn-light" id="submit-button">Submit</button>
  );
}

export default SubmitBtn;