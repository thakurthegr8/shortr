import React from "react";
import Layout from "../../utils/Layout";
import Typography from "../../utils/Typography";
import Link from "next/link";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
const headlines = [
  {
    title: "Boost Your Online Reach with Powerful Short URLs",
    description:
      "Maximize your online visibility and engagement with Shortr. Create optimized short URLs to drive traffic, track performance, and enhance user experience. Sign up today and unlock the potential of your links! 🚀",
    linkText: "Start for free",
    emoji: "✨",
  },
  {
    title: "Streamline Your Link Sharing with Shortr",
    description:
      "Effortlessly share links across platforms with Shortr. Simplify and customize your URLs for better user experience. Analyze link performance, demographics, and engagement. Join now and take control of your link management. 🔗",
    linkText: "No cost to begin",
    emoji: "🌐",
  },
  {
    title: "Drive More Clicks with Short and Memorable URLs",
    description:
      "Catch your audience's attention and increase click-through rates with Shortr. Transform lengthy URLs into short and memorable links. Track clicks, optimize performance, and amplify your online presence. Sign up now for instant results! 📈",
    linkText: "Free trial",
    emoji: "🎯",
  },
  {
    title: "Optimize Your Link Management Workflow",
    description:
      "Shortr provides a seamless link management workflow. Organize and categorize your links, customize their appearance, and monitor their performance in one centralized platform. Simplify your link sharing process with Shortr!",
    linkText: "Zero cost start",
    emoji: "🚀",
  },
  {
    title: "Enhance User Experience with Short and Branded Links",
    description:
      "Deliver a user-friendly experience by using Shortr to create short and branded links. Make your links memorable, relevant, and consistent with your brand. Boost click-through rates and engage your audience like never before!",
    linkText: "Begin at no charge",
    emoji: "✨",
  },
];

const FeaturesWithSingleDescription = () => {
  return (
    <Layout.Col className="gap-16 py-16">
      {headlines.map((item, index) => (
        <Layout.Grid key={index} className="grid-cols-1 md:grid-cols-2 gap-4">
          <Layout.Col
            className={`items-stretch md:items-start gap-2 ${
              index % 2 == 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Typography.Heading className="font-black lg:text-4xl max-w-3xl ">
              {item.title}
            </Typography.Heading>
            <Typography.Body className="dark:text-white/90">{item.description}</Typography.Body>
            <Link
              href="/register"
              className="dark:bg-white bg-secondary text-center text-black p-2 rounded-lg font-semibold tracking-tighter flex items-center gap-2 hover:gap-4 transition-all justify-center"
            >
              <Typography.Body>{item.linkText}</Typography.Body>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </Layout.Col>
          <Layout.Col
            className={`items-center justify-center ${
              index % 2 == 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Layout.Card className="h-full w-full">
              <Layout.Col className="items-center justify-center h-full">
                <Typography.Title className="text-7xl">
                  {item.emoji}
                </Typography.Title>
              </Layout.Col>
            </Layout.Card>
          </Layout.Col>
        </Layout.Grid>
      ))}
    </Layout.Col>
  );
};

export default FeaturesWithSingleDescription;
