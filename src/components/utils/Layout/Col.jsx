import React from "react";

const Col = (props) => {
  return <div {...props} className={`flex flex-col ${props.className}`} />;
};

Col.defaultProps = {
  className: "",
};

export default Col;
