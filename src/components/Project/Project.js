import React from "react";
import "../../assets/style/style.css";
import "./Project.css";

const Project = (props) => {
  return (
    <>
      <div class="row image-row">
        <div class="col text-center">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Project;