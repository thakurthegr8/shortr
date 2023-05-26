import { createContext, useContext } from "react";

export const ReferenceLandingContext = createContext(null);

const ReferenceLandingProvider = (props) => {
  return (
    <ReferenceLandingContext.Provider value={{ data:props.value }}>
      {props.children}
    </ReferenceLandingContext.Provider>
  );
};

export default ReferenceLandingProvider;

export const useReferenceLanding = () => useContext(ReferenceLandingContext);
