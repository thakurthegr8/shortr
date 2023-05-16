import React from "react";

const Row = (props) => {
  return <div {...props} className={`flex ${props.className}`} />;
};

Row.defaultProps = {
  className: "",
};

export default Row;
