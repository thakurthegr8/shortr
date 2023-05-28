import React from "react";
import Layout from "../utils/Layout";
import Head from "next/head";
import { DEFAULT_METADATA, LOGOTEXT } from "@/src/constants";

const Page = (props) => {
  return (
    <Layout>
      <Head>
        <title>
          {props.page.toString()}
        </title>
        {props.meta.map((item) => (
          <meta {...item} key={item.property} />
        ))}
      </Head>
      {props.children}
    </Layout>
  );
};

Page.defaultProps = {
  title: LOGOTEXT,
  page: LOGOTEXT,
  meta: DEFAULT_METADATA,
};

export default Page;
