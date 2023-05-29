import React from "react";
//blocks
import Features from "@/src/components/sections/Landing/Features";
import Navbar from "@/src/components/sections/Navbar";
//utils
import Page from "@/src/components/pages";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
//elements
import UserNameValidator from "@/src/components/elements/Landing/UserNameValidator";
//constants
import { HEADINGS, METADATA, SUBEHEADING } from "@/src/constants/landing";
//styles
import styles from "@/styles/Home.module.css";

const Home = (props) => {
  return (
    <Page meta={METADATA}>
      <Layout.Container className={styles.container}>
        <Navbar />
        <Layout.Col className={styles.main_col}>
          <Typography.Title className={styles.main_heading}>
            {HEADINGS[0]}
          </Typography.Title>
          <Typography.Subtitle className={styles.main_subheading}>
            {SUBEHEADING}
          </Typography.Subtitle>
          <UserNameValidator />
        </Layout.Col>
        <Features />
      </Layout.Container>
    </Page>
  );
}

export default Home;
