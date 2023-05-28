import React from "react";
//utils
import Page from "@/src/components/pages";
//constants
import { METADATA } from "@/src/constants/register";
import { LOGOTEXT } from "@/src/constants";
import RegisterPage from "@/src/components/pages/Register";

const Register = () => {
  return (
    <Page meta={METADATA} page={`${LOGOTEXT} | Register`}>
      <RegisterPage/>
    </Page>
  );
};

export default Register;
