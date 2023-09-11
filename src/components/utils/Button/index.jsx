import React from "react";
import { PulseLoader } from "react-spinners";

const Button = (props) => {
  const { loading, ...restProps } = props;
  if (props?.loading) {
    return <button {...restProps} disabled><PulseLoader className="py-1" size={8} color="gray" /></button>;
  }
  return <button {...restProps} />;
};

export default Button;

Button.defaultProps = {
  loading: false
}