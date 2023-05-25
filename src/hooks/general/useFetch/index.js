import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setError(null);
    setLoading(true);
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
    try {
      const res = await axios.delete(props.url, payload);
      const resData = await res.data;
      setData(resData);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const dispatch = (payload = null) => {
    if (props.method === "GET") {
      getData();
    } else if (props.method === "POST") {
      postData(payload);
    } else if (props.method === "PUT") {
      putData(payload);
    } else if (props.method === "DELETE") {
      deleteData(payload);
    }
  };

  //   if (props.method === "GET") dispatch();
  useEffect(() => {
    if (props.method === "GET") getData();
  }, []);
  return { data, error, loading, dispatch };
};

export default useFetch;