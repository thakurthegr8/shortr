import { createContext, useContext } from "react";

export const ProfileContext = createContext(null);

const ProfileProvider = (props) => {
  return (
    <ProfileContext.Provider value={{ data: props.data }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

export const useProfile = () => useContext(ProfileContext);
