import { loginWithEmailAndPasswordPayloadValidator } from "@/src/utils/schemaValidators/loginPayload";
import axios from "axios";
import React, { useState } from "react";

const useLogin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginWithEmailAndPassword = loginWithEmailAndPasswordPayloadValidator(
    async (payload) => {
        try {
            setLoading(true);
            const res = await axios.post("/api/auth/register", payload);
            const responseData = await res.data;
            if(!res.status != 201) throw new Error(responseData);
            setData(responseData);
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false);
        }
    }
  );
  return {
    data,
    loading,
    error,
    loginWithEmailAndPassword
  };
};

export default useLogin;
