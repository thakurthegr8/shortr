import CustomAppearanceBackground from "@/src/components/elements/Dashboard/Profile/CustomAppearanceBackground";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import React from "react";

const titleText = "Custom Appearance";
const descriptionText =
  "Completely customize your Shortr profile. Change your background with colors, gradients and images. Choose a button style, change the typeface and more.";

const CustomAppearance = () => {
  return (
    <Layout>
      <Layout.Col className="gap-4">
        <Layout.Col>
          <Typography.Subtitle>{titleText}</Typography.Subtitle>
          <Typography.Body>{descriptionText}</Typography.Body>
        </Layout.Col>
        <CustomAppearanceBackground/>
      </Layout.Col>
    </Layout>
  );
};

export default CustomAppearance;
