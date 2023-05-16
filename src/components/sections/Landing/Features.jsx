import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import React from "react";

const featureElements = [
  {
    heading: "🖌️ Endless Possibilities",
    description:
      "Whether you need captivating visuals for your website, eye-catching social media posts, or stunning graphics for your presentations, our platform has got you covered.",
  },
  {
    heading: "⚡ Instant Results",
    description:
      "Gone are the days of waiting for designers or sifting through stock photo libraries. Our powerful algorithms generate high-quality, custom images in seconds, tailored to your unique needs and preferences.",
  },
  {
    heading: "🔍 Simple and Intuitive",
    description:
      "No design experience? No problem! Our user-friendly interface makes it effortless to create professional-looking visuals. Simply enter your prompt, choose from various styles and options, and watch as your vision comes to life.",
  },
  {
    heading: "💡 Inspiration at Your Fingertips",
    description:
      "Stuck on ideas? Browse through our vast collection of pre-generated images to spark your creativity. Discover new concepts, experiment with different styles, and find the perfect image to match your vision.",
  },
  {
    heading: "📈 Boost Engagement",
    description:
      "Stand out from the crowd with visually stunning content that grabs attention and leaves a lasting impression. Whether you're a marketer, blogger, or business owner, our image generation platform will help you create engaging visuals that drive results.",
  },
  {
    heading: "✅ Seamless Integration",
    description:
      "Easily incorporate the images you generate into your existing workflow. Our platform provides flexible export options, allowing you to download your creations in various formats, including PNG, JPEG, and SVG.",
  },
];

const Features = () => {
  return (
    <Layout>
        <Layout.Grid className="grid-cols-1 md:grid-cols-2 gap-2 pt-8">
          {featureElements.map((item, index) => (
            <Layout.Card key={index}>
              <Typography.Subtitle className="font-bold">
                {item.heading}
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
