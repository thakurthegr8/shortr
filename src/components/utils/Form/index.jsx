import React from "react";
import Input from "./Input";

const Form = (props) => {
  return <form {...props} />;
};

Form.Input = Input;

export default Form;
