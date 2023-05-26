import React, { useState } from "react";
import useFetch from "../useFetch";
import axios from "axios";

const useImage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (payload) => {
    console.log(payload)
    if (!payload) throw new Error("please select image");
    const formData = new FormData();
    formData.append("file", payload);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_STORAGE_PRESET);
    try {
      setError(null);
      setLoading(true);
      const uploadReq = await axios.post(
        `${process.env.NEXT_PUBLIC_STORAGE_URL}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const uploadRes = await uploadReq.data;
      setData(uploadRes);
      return uploadRes;
    } catch (error) {
      setError(error);
      console.log(error);
      throw new Error("unable to upload image");
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, data, loading, error };
};

export default useImage;
