import React from "react";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import CustomAppearanceLinkFill from "./CustomAppearanceLinkFill";
import CustomAppearanceLinkOutlined from "./CustomAppearanceOutlined";
import CustomAppearanceLinkSoftShadow from "./CustomAppearanceLinkSoftShadow";
import CustomAppearanceLinkHardShadow from "./CustomAppearanceLinkHardShadow";
import CustomAppearanceLinkBackground from "./CustomAppearanceLinkBackground";
import CustomAppearanceLinkText from "./CustomAppearanceLinkText";

const CustomAppearanceLink = () => {
  return (
    <Layout>
      <Typography.Heading className="font-bold">Links</Typography.Heading>
      <Layout.Card>
        <Layout.Col className="gap-4">
          <CustomAppearanceLinkFill />
          <CustomAppearanceLinkOutlined />
          <CustomAppearanceLinkSoftShadow />
          <CustomAppearanceLinkHardShadow />
          <CustomAppearanceLinkBackground />
          <CustomAppearanceLinkText />
        </Layout.Col>
      </Layout.Card>
    </Layout>
  );
};

export default CustomAppearanceLink;
