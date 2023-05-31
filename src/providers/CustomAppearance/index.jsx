import { createContext, useContext, useState } from "react";

export const CustomAppearanceContext = createContext(null);

const CustomAppearanceProvider = (props) => {
  const [appearance, setAppearance] = useState(props.appearance);
  return (
    <CustomAppearanceContext.Provider value={{ appearance }}>
      {props.children}
    </CustomAppearanceContext.Provider>
  );
};

export default CustomAppearanceProvider;

export const useCustomAppearance = () => useContext(CustomAppearanceContext);
