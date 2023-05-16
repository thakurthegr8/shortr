import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Heading from "./Heading";
import Body from "./Body";
import Caption from "./Caption";

const Typography = (props) => {
  return <p {...props} />;
};

Typography.Title = Title
Typography.Subtitle = Subtitle
Typography.Heading = Heading
Typography.Body = Body
Typography.Caption = Caption

export default Typography;
