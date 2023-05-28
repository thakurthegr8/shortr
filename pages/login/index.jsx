import React from "react";
import Page from "@/src/components/pages";
import LoginPage from "@/src/components/pages/Login";
import { METADATA } from "@/src/constants/login";
import { LOGOTEXT } from "@/src/constants";

const Login = () => {
  return (
    <Page meta={METADATA} page={`${LOGOTEXT} | Login`}>
      <LoginPage />
    </Page>
  );
};

export default Login;
