import React from "react";

const Container = (props) => {
  return <div {...props} className={`mx-auto container px-4 md:px-0 ${props.className}`} />;
};

Container.defaultProps = {
  className: "",
};

export default Container;
