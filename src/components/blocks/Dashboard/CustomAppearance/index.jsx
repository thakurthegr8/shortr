import CustomAppearanceBackground from "@/src/components/elements/Dashboard/Profile/CustomAppearanceBackground";
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
  console.log(customAppearance);

  if (!customAppearance.appearance) {
    return (
      <Layout.Card>
        <Layout.Col>
          <Typography.Body>
            You have not configured custom appearance
          </Typography.Body>
          <Button className="btn-primary">Configure Now</Button>
        </Layout.Col>
      </Layout.Card>
    );
  }

  return (
    <Layout>
      <Layout.Col className="gap-4">
        <Layout.Col>
          <Typography.Subtitle>{titleText}</Typography.Subtitle>
          <Typography.Body>{descriptionText}</Typography.Body>
        </Layout.Col>
        <CustomAppearanceBackground />
      </Layout.Col>
    </Layout>
  );
};

export default CustomAppearance;
