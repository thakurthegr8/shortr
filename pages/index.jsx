import Features from "@/src/components/sections/Landing/Features";
import Navbar from "@/src/components/sections/Navbar";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";

const heading =
  "🎨🌟 Unleash Your Creativity: Instantly Generate Amazing Images on Demand! 🖼️✨";
const subheading =
  "Canvas-GPT allows you to generate images with a prompt powered by DALL-E";
const getStartedButtonText = "Get Started";

export default function Home() {
  return (
    <Layout>
      <Layout.Container className="max-w-5xl">
      <Navbar />
        <Layout.Col className="gap-4 py-24">
          <Typography.Title className="text-center font-black lg:text-5xl">
            {heading}
          </Typography.Title>
          <Typography.Subtitle className="text-center">
            {subheading}
          </Typography.Subtitle>
          <Layout.Row className="justify-center items-center">
            <Button className="btn-general scale-125 font-bold">
              {getStartedButtonText}
            </Button>
          </Layout.Row>
        </Layout.Col>
        <Features />
      </Layout.Container>
    </Layout>
  );
}
