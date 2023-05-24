import React, { useState } from "react";
import { loginWithEmailAndPasswordPayloadValidator } from "@/src/utils/schemaValidators/loginPayload";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const useLogin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const loginWithEmailAndPassword = async (payload) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/login", payload);
      const responseData = await res.data;
      if (res.status === 200) {
        setData(responseData);
        toast("successfully logged in", { type: "success" });
        router.push("/")
      } else {
        throw responseData;
      }
    } catch (error) {
      setError(error.response?.data);
      toast(error.response?.data, { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    loginWithEmailAndPassword,
  };
};

export default useLogin;
