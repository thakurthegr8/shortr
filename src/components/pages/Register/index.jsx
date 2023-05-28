import React from "react";
//utils
import Layout from "@/src/components/utils/Layout";
//sections
import LoginNavbar from "../../sections/Login/Navbar";
import RegisterMain from "../../sections/Register/Main";


const RegisterPage = () => {
  return (
    <Layout>
      <LoginNavbar/>
      <RegisterMain/>
    </Layout>
  );
};

export default RegisterPage;
