import React, { useState } from "react";
import { registerWithEmailAndPasswordValidator } from "@/src/utils/schemaValidators/registerPayload";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const useRegister = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const registerWithEmailAndPassword = async (payload) => {
    try {
      await registerWithEmailAndPasswordValidator(payload);
      const updatedPayload = {
        ...payload,
        name: payload.name.toLowerCase(),
      };
      setLoading(true);
      const res = await axios.post("/api/auth/register", updatedPayload);
      const responseData = await res.data;
      if (res.status === 201) {
        setData(responseData);
        toast("successfully registered", { type: "success" });
        router.push("/");
      } else {
        throw responseData;
      }
    } catch (error) {
      console.log(error);
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
    registerWithEmailAndPassword,
  };
};

export default useRegister;
