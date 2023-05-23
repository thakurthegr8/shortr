import Navbar from "@/src/components/sections/Navbar";
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import React, { useState } from "react";

const fields = [
  { name: "email",type: "email", placeholder: "Enter full email..." },
  { name: "password",type: "password", placeholder: "Enter password..." },
];

const Login = () => {
  const heading = "Login to continue";
  const loginBtnText = "Login";
  const registerBtnText = "New User? Register"
  const [state, setState] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Layout.Container className="max-w-5xl">
        <Navbar />
      </Layout.Container>
      <Layout.Container className="max-w-sm h-full">
        <Layout.Col className="gap-2 pt-16">
          <Typography.Heading className="font-bold">
            {heading}
          </Typography.Heading>
          <Form className="flex flex-col gap-2" onSubmit={onFormSubmit}>
            {
              fields.map((item,index)=><Form.Input {...item} className="placeholder:font-normal" key={index}/>)
            }
            <Button className="btn-general">{loginBtnText}</Button>
          </Form>
          <Button className="btn-secondary font-bold">{registerBtnText}</Button>
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default Login;
