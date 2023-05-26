import useFetch from "@/src/hooks/general/useFetch";
import { createContext, useContext, useMemo } from "react";

export const LinkContext = createContext(null);

const LinkProvider = (props) => {

  const addLinkHandler = useFetch({
    method: "POST",
    url: "/api/link",
  });

  const addLink = useMemo(()=>{
    return {
      ...addLinkHandler
    }
  },[addLinkHandler.data, addLinkHandler.error, addLinkHandler.loading]);

  return (
    <LinkContext.Provider value={{ data:props.data, addLink }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;

export const useLink = () => useContext(LinkContext);
