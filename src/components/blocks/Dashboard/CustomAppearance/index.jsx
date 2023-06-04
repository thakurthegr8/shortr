import CustomAppearanceBackground from "@/src/components/elements/Dashboard/Profile/CustomAppearanceBackground";
import CustomAppearanceLink from "@/src/components/elements/Dashboard/Profile/CustomAppearanceLink";
import CustomAppearanceText from "@/src/components/elements/Dashboard/Profile/CustomAppearanceText";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import { useProfile } from "@/src/providers/Profile";
import Link from "next/link";
import React from "react";

const titleText = "Custom Appearance";
const descriptionText =
  "Completely customize your Shortr profile. Change your background with colors, gradients and images. Choose a button style, change the typeface and more.";

const CustomAppearance = () => {
  const customAppearance = useCustomAppearance();
  const configure = () => {
    customAppearance.registerCustomAppearance.dispatch(null);
  };

  if (!customAppearance.appearance) {
    return (
      <Layout.Card className="border-yellow-500 bg-yellow-50">
        <Layout.Col className="md:flex-row md:items-center justify-between gap-4">
          <Typography.Body className="font-medium">
            You have not configured custom appearance
          </Typography.Body>
          <Button className="btn-primary" onClick={configure}>
            Configure Now
          </Button>
        </Layout.Col>
      </Layout.Card>
    );
  }

  return (
    <Layout>
      <Layout.Col className="gap-4">
        <Layout.Col>
          <Typography.Subtitle className="font-bold">{titleText}</Typography.Subtitle>
          <Typography.Body className="text-black dark:text-secondary">{descriptionText}</Typography.Body>
        </Layout.Col>
        <CustomAppearanceBackground />
        <CustomAppearanceText/>
        <CustomAppearanceLink/>
      </Layout.Col>
    </Layout>
  );
};

export default CustomAppearance;
