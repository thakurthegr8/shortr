import Features from "@/src/components/sections/Landing/Features";
import Navbar from "@/src/components/sections/Navbar";
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Input from "@/src/components/utils/Form/Input";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import useFetch from "@/src/hooks/general/useFetch";
import ChevronIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

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
const ctaBtn = "Claim your shortr";
const domain = "shortr.in/";

const UserNameValidator = () => {
  const [enquired, setEnquired] = useState(false);
  const validateUsername = useFetch({
    method: "POST",
    url: "/api/validate_username",
  });

  const onFormSubmit = (data) => {
    setEnquired(true);
    validateUsername.dispatch(data);
  };
  return (
    <Layout>
      <Form onSubmit={onFormSubmit}>
        <Layout.Col className="justify-center gap-2 md:flex-row">
          <Input placeholder={`${domain}username`} name="username" required />
          <Button
            className="btn-general btn-lg font-bold"
            disabled={validateUsername.loading}
          >
            {!enquired
              ? ctaBtn
              : !validateUsername.data && !validateUsername.loading
              ? "Available"
              : "Not available (Try another)"}
          </Button>
          {enquired && !validateUsername.data && !validateUsername.loading && (
            <Link
              href="/register"
              className="text-green-500 text-center flex justify-center items-center p-3 rounded-lg"
            >
              Register Now
              <ChevronIcon className="w-6 h-6" />
            </Link>
          )}
        </Layout.Col>
      </Form>
    </Layout>
  );
};

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>🔥Shortr</title>
        <meta
          property="og:image"
          content="/public/shortr-ogimage.png"
        />
        <meta
          name="description"
          content="Join 25M+ people and link to everything you create, share and sell online. All from the one bio link."
        />
        <meta
          property="og:title"
          content="Shortr: Link everything you are"
        />
      </Head>
      <Layout.Container className="max-w-5xl">
        <Navbar />
        <Layout.Col className="gap-4 py-24">
          <Typography.Title className="text-center font-black lg:text-5xl">
            {headings[props.index]}
          </Typography.Title>
          <Typography.Subtitle className="text-center">
            {subheading}
          </Typography.Subtitle>
          <UserNameValidator />
        </Layout.Col>
        <Features />
      </Layout.Container>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      index: Math.floor(Math.random() * headings.length),
    },
  };
};
