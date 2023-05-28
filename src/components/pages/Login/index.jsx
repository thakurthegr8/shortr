import React from "react";
//utils
import Layout from "@/src/components/utils/Layout";
//sections
import LoginNavbar from "../../sections/Login/Navbar";
import LoginMain from "../../sections/Login/Main";


const LoginPage = () => {
  return (
    <Layout>
      <LoginNavbar/>
      <LoginMain/>
    </Layout>
  );
};

export default LoginPage;
