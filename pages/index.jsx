import Features from "@/src/components/sections/Landing/Features";
import Navbar from "@/src/components/sections/Navbar";
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Input from "@/src/components/utils/Form/Input";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useMemo } from "react";

const headings = [
  "🚀 Unlock Your Digital Universe: Explore, Discover, Connect! ✨",
  "🌐 Your Online Hub Awaits: Simplify, Share, and Stand Out! 🌟",
  "🔗 All Your Links in One Place: Link Up and Level Up! 🚀",
  "🌈 Navigate Your Digital World: Connect, Share, and Inspire! ✨",
  "⭐ Empower Your Online Presence: Unleash Your Potential! 🚀",
  "🌟 Link Up for Success: Amplify Your Reach and Influence! ✨",
  "💫 Your Gateway to Online Excellence: Connect, Share, and Thrive! 🚀",
  "🔥 Ignite Your Online Impact: Unleash Your Brilliance! ✨",
  "🌺 Blossom Online: Connect, Share, and Flourish! 🌟",
  "🚀 Elevate Your Online Game: Connect, Share, and Soar! ✨",
];
const subheading =
  "🌟 Link Up for Success: Amplify Your Reach and Influence! ✨";
const ctaBtn = "Claim your linkify";
const domain = "linkify.rtdevopsify.com/";

export default function Home() {
  const index = useMemo(() => Math.floor(Math.random() * headings.length), []);
  return (
    <Layout>
      <Layout.Container className="max-w-5xl">
        <Navbar />
        <Layout.Col className="gap-4 py-24">
          <Typography.Title className="text-center font-black lg:text-5xl">
            {headings[index]}
          </Typography.Title>
          <Typography.Subtitle className="text-center">
            {subheading}
          </Typography.Subtitle>
          <Form onSubmit={() => null}>
            <Layout.Col className="justify-center gap-2 md:flex-row">
              <Input placeholder={`${domain}@Username`}/>
              <Button className="btn-general btn-lg font-bold">{ctaBtn}</Button>
            </Layout.Col>
          </Form>
        </Layout.Col>
        <Features />
      </Layout.Container>
    </Layout>
  );
}
