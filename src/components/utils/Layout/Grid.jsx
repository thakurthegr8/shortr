import React from "react";

const Grid = (props) => {
  return <div {...props} className={`grid ${props.className}`} />;
};

Grid.defaultProps = {
  className: "",
};

export default Grid;
