import React from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

function FormBuilder() {
  return (
    <div className="App">
      <ReactFormBuilder
        // onPost={(data) => console.log(data, '@@@')}
      />
    </div>
  );
}

export default FormBuilder;
