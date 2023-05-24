import useLogin from "@/src/hooks/auth/useLogin";
import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const authHandlers = useLogin();
  return (
    <AuthContext.Provider value={{ ...authHandlers }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
