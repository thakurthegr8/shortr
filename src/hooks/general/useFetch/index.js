import { generateQueryString } from "@/src/utils/url";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setError(null);
    setLoading(true);
    setData(null);
    try {
      const res = await axios.get(props.url);
      const resData = await res.data;
      setData(resData);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const postData = async (payload) => {
    setError(null);
    setLoading(true);
    setData(null);
    try {
      const res = await axios.post(props.url, payload);
      const resData = await res.data;
      setData(resData);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const putData = async (payload) => {
    setError(null);
    setLoading(true);
    setData(null);
    try {
      const res = await axios.put(props.url, payload);
      const resData = await res.data;
      setData(resData);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const deleteData = async (payload) => {
    setError(null);
    setLoading(true);
    setData(null);
    try {
      const res = await axios.delete(
        `${props.url}/?${generateQueryString(payload)}`
      );
      const resData = await res.data;
      setData(resData);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const dispatch = async (payload = null) => {
    return new Promise((resolve, reject) => {
      if (props.method === "GET") {
        resolve(getData());
      } else if (props.method === "POST") {
        resolve(postData(payload));
      } else if (props.method === "PUT") {
        resolve(putData(payload));
      } else if (props.method === "DELETE") {
        resolve(deleteData(payload));
      }
      reject();
    });
  };

  //   if (props.method === "GET") dispatch();
  useEffect(() => {
    if (props.method === "GET") getData();
  }, []);
  return { data,setData, error, loading, dispatch };
};

export default useFetch;
