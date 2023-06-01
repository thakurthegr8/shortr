import useFetch from "@/src/hooks/general/useFetch";
import { createContext, useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

export const CustomAppearanceContext = createContext(null);

const CustomAppearanceProvider = (props) => {
  const [appearance, setAppearance] = useState(props.appearance);
  const registerCustomAppearanceHandler = useFetch({
    method: "POST",
    url: "/api/custom_appearance",
  });
  const updateCustomAppearanceHandler = useFetch({
    method: "PUT",
    url: "/api/custom_appearance",
  });

  const registerCustomAppearance = useMemo(() => {
    if (registerCustomAppearanceHandler.error) {
      toast("Error configuring custom appearance", { type: "error" });
    }
    if (
      !registerCustomAppearanceHandler.error &&
      !registerCustomAppearanceHandler.loading &&
      registerCustomAppearanceHandler.data
    ) {
      console.log(registerCustomAppearanceHandler.data);
      setAppearance(registerCustomAppearanceHandler.data);
    }
    return {
      ...registerCustomAppearanceHandler,
    };
  }, [
    registerCustomAppearanceHandler.data,
    registerCustomAppearanceHandler.error,
    registerCustomAppearanceHandler.loading,
  ]);
  const updateCustomAppearance = useMemo(() => {
    if (updateCustomAppearanceHandler.error) {
      toast("Error updating custom appearance", { type: "error" });
    }
    if (
      !updateCustomAppearanceHandler.error &&
      !updateCustomAppearanceHandler.loading &&
      updateCustomAppearanceHandler.data
    ) {
      setAppearance(updateCustomAppearanceHandler.data);
    }
    return {
      ...updateCustomAppearanceHandler,
    };
  }, [
    updateCustomAppearanceHandler.data,
    updateCustomAppearanceHandler.error,
    updateCustomAppearanceHandler.loading,
  ]);

  return (
    <CustomAppearanceContext.Provider
      value={{ appearance, registerCustomAppearance, updateCustomAppearance }}
    >
      {props.children}
    </CustomAppearanceContext.Provider>
  );
};

export default CustomAppearanceProvider;

export const useCustomAppearance = () => useContext(CustomAppearanceContext);
