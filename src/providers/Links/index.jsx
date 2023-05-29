import useFetch from "@/src/hooks/general/useFetch";
import { createContext, useContext, useMemo, useState } from "react";

export const LinkContext = createContext(null);
export const CurrentLinkContext = createContext(null);
export const useLink = () => useContext(LinkContext);
export const useCurrentLink = () => useContext(CurrentLinkContext);

export const CurrentLinkProvider = (props) => {
  return (
    <CurrentLinkContext.Provider value={{ link: props.link }}>
      {props.children}
    </CurrentLinkContext.Provider>
  );
};

const LinkProvider = (props) => {
  const [data, setData] = useState(props.data);
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
    if (!addLinkHandler.error && !addLinkHandler.loading) {
      if (addLinkHandler.data)
        if (Object.keys(addLinkHandler.data).includes("_id")) {
          setData((prev) => [...prev, addLinkHandler.data]);
        }
    }
    return {
      ...addLinkHandler,
    };
  }, [addLinkHandler.data, addLinkHandler.error, addLinkHandler.loading]);
  const updateLink = useMemo(() => {
    if (!updateLinkHandler.error && !removeLinkHandler.loading) {
      if (updateLinkHandler.data) console.log(updateLinkHandler.data);
    }
    return {
      ...updateLinkHandler,
    };
  }, [
    updateLinkHandler.data,
    updateLinkHandler.error,
    updateLinkHandler.loading,
  ]);
  const removeLink = useMemo(() => {
    if (!removeLinkHandler.error && !removeLinkHandler.loading) {
      if (removeLinkHandler.data)
        if (Object.keys(removeLinkHandler.data).includes("_id")) {
          setData((prev) =>
            prev.filter((item) => item._id != removeLinkHandler.data._id)
          );
        }
    }
    return {
      ...removeLinkHandler,
    };
  }, [
    removeLinkHandler.data,
    removeLinkHandler.error,
    removeLinkHandler.loading,
  ]);

  return (
    <LinkContext.Provider value={{ data, addLink, updateLink, removeLink }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
