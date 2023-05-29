import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import React from "react";

const featureElements = [
  {
    name: "Customizable Profile",
    emoji:"🎨",
    description: "Create personalized profiles with your own picture, background image, and bio."
  },
  {
    name: "Multiple Links",
    emoji:"🔗",
    description: "Organize and display multiple links to your social media profiles, websites, and more."
  },
  {
    name: "Link Grouping",
    emoji:"📂",
    description: "Group your links into categories or sections for easier navigation and organization."
  },
  {
    name: "Analytics and Insights",
    emoji:"📊",
    description: "Track link clicks, visitor demographics, and other metrics to measure link performance."
  },
  {
    name: " Custom URLs",
    emoji:"🌐",
    description: "Customize your link tree URL to match your brand or personal identity."
  },
  {
    name: " Social Media Integration",
    emoji:"📱",
    description: "Import and display your social media profiles and content within your link tree."
  },
];


const Features = () => {
  return (
    <Layout>
        <Layout.Grid className="grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {featureElements.map((item, index) => (
            <Layout.Card key={index}>
              <Typography.Subtitle className="lg:text-7xl">{item.emoji}</Typography.Subtitle>
              <Typography.Subtitle className="font-bold">
                {item.name}
              </Typography.Subtitle>
              <Typography.Body>
                {item.description}
              </Typography.Body>
            </Layout.Card>
          ))}
        </Layout.Grid>
    </Layout>
  );
};

export default Features;
