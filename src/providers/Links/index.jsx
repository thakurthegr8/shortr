import useFetch from "@/src/hooks/general/useFetch";
import { createContext, useContext, useMemo } from "react";

export const LinkContext = createContext(null);

const LinkProvider = (props) => {
  const addLinkHandler = useFetch({
    method: "POST",
    url: "/api/link",
  });

  const updateLinkHandler = useFetch({
    method: "PUT",
    url: "/api/link",
  });

  const removeLinkHandler = useFetch({
    method: "DELETE",
    url: "/api/link",
  });

  const addLink = useMemo(() => {
    return {
      ...addLinkHandler,
    };
  }, [addLinkHandler.data, addLinkHandler.error, addLinkHandler.loading]);
  const updateLink = useMemo(() => {
    return {
      ...updateLinkHandler,
    };
  }, [
    updateLinkHandler.data,
    updateLinkHandler.error,
    updateLinkHandler.loading,
  ]);
  const removeLink = useMemo(() => {
    return {
      ...removeLinkHandler,
    };
  }, [
    removeLinkHandler.data,
    removeLinkHandler.error,
    removeLinkHandler.loading,
  ]);

  return (
    <LinkContext.Provider
      value={{ data: props.data, addLink, updateLink, removeLink }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;

export const useLink = () => useContext(LinkContext);
