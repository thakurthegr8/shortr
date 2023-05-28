import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
//utils
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
//constants
import {
  FORM_FIELDS,
  HEADING_TEXT,
  LOGIN_BTN_TEXT,
  REGISTER_BTN_TEXT,
} from "@/src/constants/register";
//hooks
import useRegister from "@/src/hooks/auth/useRegister";
import styles from "@/styles/Register.module.css";

const RegisterMain = () => {
  const register = useRegister();

  const onFormSubmit = async (data) => {
    if (data.password !== data.conf_password) {
      toast("please confirm your password", { type: "error" });
      return;
    }
    const { conf_password, ...restPayload } = data;
    await register.registerWithEmailAndPassword(restPayload);
  };
  return (
    <Layout.Container className={styles.main_container}>
      <Layout.Col className={styles.main_col}>
        <Typography.Heading className={styles.main_heading}>
          {HEADING_TEXT}
        </Typography.Heading>
        <Form className="flex flex-col gap-2" onSubmit={onFormSubmit}>
          {FORM_FIELDS.map((item) => (
            <Form.Input
              {...item}
              className={styles.main_form_input}
              key={item.name}
            />
          ))}
          <Button className={`btn-general ${styles.main_register_btn}`} disabled={register.loading}>
            {REGISTER_BTN_TEXT}
          </Button>
        </Form>
        <Link href="/login" className="w-full">
          <Button className={`btn-secondary ${styles.main_login_btn}`}>
            {LOGIN_BTN_TEXT}
          </Button>
        </Link>
      </Layout.Col>
    </Layout.Container>
  );
};

export default RegisterMain;
