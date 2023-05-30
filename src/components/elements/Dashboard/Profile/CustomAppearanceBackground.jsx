import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import React, { createContext, useContext, useState } from "react";

const backgroundText = "Backgrounds";

const BackgroundOptionFlatColor = (props) => {
  const [color, setColor] = useState("#fff");
  const onChange = (e) => {
    setColor(e.target.value);
  };
  const onSelectingColor = (e) => {
    console.log(e.target.value);
  };
  return (
    <Form>
      <Typography.Body>Color</Typography.Body>
      <Form.Input
        type="color"
        name="background"
        className="p-4 aspect-square dark:border-none"
        value={color}
        onChange={onChange}
        onBlur={onSelectingColor}
        style={{ backgroundColor: color, color }}
      />
    </Form>
  );
};
const BackgroundOptionImage = (props) => {
  return (
    <Form>
      <Typography.Body>Image</Typography.Body>
      <Form.Input type="file" name="background" />
    </Form>
  );
};
const options = [
  {
    type: "flat",
    className: "bg-secondary dark:bg-white/10 h-36 rounded-lg",
    placeholder: "flat color",
    Option: BackgroundOptionFlatColor,
  },
  {
    type: "image",
    className:
      "bg-[url('/assets/background-option-placeholder.png')] h-36 rounded-lg bg-cover bg-center",
    placeholder: "image",
    Option: BackgroundOptionImage,
  },
];
const CurrentBackgroundOptionContext = createContext(null);

const useCurrentBackgroundOption = () =>
  useContext(CurrentBackgroundOptionContext);

const CurrentBackgroundOptionProvider = (props) => {
  const [CurrentOption, setCurrentOption] = useState(options[0]);
  return (
    <CurrentBackgroundOptionContext.Provider
      value={{ CurrentOption, setCurrentOption }}
    >
      {props.children}
    </CurrentBackgroundOptionContext.Provider>
  );
};

const BackgroundOption = (props) => {
  const backgroundCtx = useCurrentBackgroundOption();
  const setBackground = () => {
    backgroundCtx.setCurrentOption(props);
  };
  return (
    <Layout.Col className="gap-2" onClick={setBackground}>
      <Layout.Col
        className={`${props.className} ${
          props.type === backgroundCtx.CurrentOption.type
            ? "ring-2 ring-primary ring-offset-4 dark:ring-offset-dark_secondary"
            : ""
        }`}
      ></Layout.Col>
      <Typography.Caption className="text-center capitalize">
        {props.placeholder}
      </Typography.Caption>
    </Layout.Col>
  );
};

const CurrentActiveOption = () => {
  const BackgroundCtx = useCurrentBackgroundOption();
  return <BackgroundCtx.CurrentOption.Option />;
};

const CustomAppearanceBackground = () => {
  return (
    <CurrentBackgroundOptionProvider>
      <Layout.Col>
        <Typography.Heading>{backgroundText}</Typography.Heading>
        <Layout.Card>
          <Layout.Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {options.map((item) => (
              <BackgroundOption {...item} key={item.type} />
            ))}
          </Layout.Grid>
          <CurrentActiveOption />
        </Layout.Card>
      </Layout.Col>
    </CurrentBackgroundOptionProvider>
  );
};

export default CustomAppearanceBackground;
