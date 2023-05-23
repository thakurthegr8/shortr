import React, { useState } from "react";

const useLogin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginWithEmailAndPassword = (payload)=>{
    
  }

  return {
    data,
    loading,
    error,
  };
};

export default useLogin;
