import React from "react";
import Form from "../components/Form/Form"
import Footer from "../components/Footer/Footer";
import "../assets/style/style.css";

const Contact = () => (
  <div className="col">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="page-header">Contact</h1>
          <hr />
          <Form />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
