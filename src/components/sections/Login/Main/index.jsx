import React from "react";
//utils
import Layout from "../../../utils/Layout";
import Typography from "../../../utils/Typography";
import Form from "../../../utils/Form";
import Button from "../../../utils/Button";
//constants
import { FORM_FIELDS, HEADING_TEXT, LOGIN_BTN_TEXT, REGISTER_BTN_TEXT } from "@/src/constants/login";
//hooks
import { useAuth } from "@/src/providers/Auth";
//styles
import styles from "@/styles/Login.module.css";
import Link from "next/link";

const LoginMain = () => {
  const authContext = useAuth();

  const onFormSubmit = async (data) => {
    await authContext.loginWithEmailAndPassword(data);
  };
  
  return (
    <Layout.Container className={styles.main_container}>
      <Layout.Col className={styles.main_col}>
        <Typography.Heading className={styles.main_heading}>
          {HEADING_TEXT}
        </Typography.Heading>
        <Form className={styles.main_form} onSubmit={onFormSubmit}>
          {FORM_FIELDS.map((item, index) => (
            <Form.Input
              {...item}
              className={styles.main_form_input}
              key={index}
            />
          ))}
          <Button className="btn-general">{LOGIN_BTN_TEXT}</Button>
        </Form>
        <Link href="/login" className="w-full">
        <Button className={`btn-secondary ${styles.main_register_btn}`}>{REGISTER_BTN_TEXT}</Button>
        </Link>
      </Layout.Col>
    </Layout.Container>
  );
};

export default LoginMain;
