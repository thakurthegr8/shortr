import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React, { useState } from "react";

const textText = "Background";

const TextOptionFlatColor = (props) => {
  const customAppearance = useCustomAppearance();
  const [color, setColor] = useState(
    customAppearance.appearance
      ? customAppearance.appearance.linkTile.backgroundColor
      : "#000"
  );
  const onChange = (e) => {
    setColor(e.target.value);
  };
  const onSelectingColor = (e) => {
    customAppearance.updateCustomAppearance.dispatch({"linkTile.backgroundColor": color },
    );
  };
  return (
    <Form>
      <Typography.Body>Background</Typography.Body>
      <Form.Input
        type="color"
        name="Text"
        className="p-4 aspect-square dark:border-none"
        value={color}
        onChange={onChange}
        onBlur={onSelectingColor}
        style={{ background: color, color }}
      />
    </Form>
  );
};

const CustomAppearanceLinkBackground = () => {
  return (
    <Layout.Col>
      <TextOptionFlatColor />
    </Layout.Col>
  );
};

export default CustomAppearanceLinkBackground;
