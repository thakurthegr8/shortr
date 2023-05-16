import React from "react";

const Card = (props) => {
  return <div {...props} className={`border p-4 shadow-sm bg-white rounded-xl ${props.className}`} />;
};

Card.defaultProps = {
  className: "",
};

export default Card;
