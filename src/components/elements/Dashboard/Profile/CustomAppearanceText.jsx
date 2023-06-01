import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React, { useState } from "react";

const textText = "Text";

const TextOptionFlatColor = (props) => {
  const customAppearance = useCustomAppearance();
  const [color, setColor] = useState(
    customAppearance.appearance
      ? customAppearance.appearance.text_color
      : "#000"
  );
  const onChange = (e) => {
    setColor(e.target.value);
  };
  const onSelectingColor = (e) => {
    customAppearance.updateCustomAppearance.dispatch({ text_color: color });
  };
  return (
    <Form>
      <Typography.Body>Color</Typography.Body>
      <Form.Input
        type="color"
        name="Text"
        className="p-4 aspect-square dark:border-none w-full"
        value={color}
        onChange={onChange}
        onBlur={onSelectingColor}
        style={{ background: color, color }}
      />
    </Form>
  );
};

const CustomAppearanceText = () => {
  return (
    <Layout.Col>
      <Typography.Heading className="font-bold">{textText}</Typography.Heading>
      <Layout.Card>
        <TextOptionFlatColor />
      </Layout.Card>
    </Layout.Col>
  );
};

export default CustomAppearanceText;
