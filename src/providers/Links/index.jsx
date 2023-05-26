import { createContext, useContext } from "react";

export const LinkContext = createContext(null);

const LinkProvider = (props) => {
  return (
    <LinkContext.Provider value={{ data:props.data }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;

export const useLink = () => useContext(LinkContext);
