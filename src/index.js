import React from "react";
import ReactDOM from "react-dom/client";
import FormBuilder from "./FormBuilder";
import FormGenerator from "./FormGenerator";

const formBuilder = ReactDOM.createRoot(
  document.getElementById("form-builder")
);
const formGenerator = ReactDOM.createRoot(
  document.getElementById("form-generator")
);
formBuilder.render(<FormBuilder />);
formGenerator.render(<FormGenerator />);
