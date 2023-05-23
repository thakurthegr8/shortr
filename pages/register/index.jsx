import Logo from "@/src/components/elements/Logo";
import Navbar from "@/src/components/sections/Navbar";
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import Link from "next/link";
import React, { useState } from "react";

const fields = [
  { name: "name", type: "text", placeholder: "Enter full name..." },
  { name: "email", type: "email", placeholder: "Enter full email..." },
  { name: "password", type: "password", placeholder: "Enter password..." },
  {
    name: "conf_password",
    type: "password",
    placeholder: "Confirm password...",
  },
];

const heading = "Register";
const registerBtnText = "Register";
const loginBtnText = "Already a User? Login";
const Register = () => {
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
            {fields.map((item, index) => (
              <Form.Input
                {...item}
                className="placeholder:font-normal"
                key={index}
              />
            ))}
            <Button className="btn-general">{registerBtnText}</Button>
          </Form>
          <Link href="/login" className="w-full">
            <Button className="btn-secondary font-bold tracking-tight w-full">
              {loginBtnText}
            </Button>
          </Link>
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default Register;
