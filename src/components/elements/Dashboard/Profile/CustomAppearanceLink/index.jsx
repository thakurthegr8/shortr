import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import React from "react";
import CustomAppearanceLinkFill from "./CustomAppearanceLinkFill";
import CustomAppearanceLinkOutlined from "./CustomAppearanceOutlined";
import CustomAppearanceLinkSoftShadow from "./CustomAppearanceLinkSoftShadow";

const CustomAppearanceLink = () => {
  return <Layout>
    <Typography.Subtitle>Links</Typography.Subtitle>
    <Layout.Card>
        <Layout.Col className="gap-4">
            <CustomAppearanceLinkFill/>
            <CustomAppearanceLinkOutlined/>
            <CustomAppearanceLinkSoftShadow/>
        </Layout.Col>
    </Layout.Card>
  </Layout>;
};

export default CustomAppearanceLink;
