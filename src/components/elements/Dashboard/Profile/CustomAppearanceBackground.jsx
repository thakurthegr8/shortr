import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React, { createContext, useContext, useState } from "react";

const backgroundText = "Backgrounds";

const BackgroundOptionFlatColor = (props) => {
  const customAppearance = useCustomAppearance();
  const [color, setColor] = useState(
    customAppearance.appearance
      ? customAppearance.appearance.background
      : "#000"
  );
  const onChange = (e) => {
    setColor(e.target.value);
  };
  const onSelectingColor = (e) => {
    customAppearance.updateCustomAppearance.dispatch({ background: color });
  };
  return (
    <Form>
      <Typography.Body>Color</Typography.Body>
      <Form.Input
        type="color"
        name="background"
        className="p-4 aspect-square dark:border-none w-full"
        value={color}
        onChange={onChange}
        onBlur={onSelectingColor}
        style={{ backgroundColor: color, color }}
      />
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
        <Typography.Heading className="font-bold">{backgroundText}</Typography.Heading>
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
