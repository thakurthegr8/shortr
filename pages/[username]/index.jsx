import ReferenceLandingMain from "@/src/components/sections/ReferenceLanding/Main";
import ReferenceLandingNavbar from "@/src/components/sections/ReferenceLanding/Navbar";
import Layout from "@/src/components/utils/Layout";
import ReferenceLandingProvider from "@/src/providers/ReferenceLanding";
import { dbPage } from "@/src/services/db";
import LinkModel from "@/src/services/db/models/Link";
import Profile from "@/src/services/db/models/Profile";
import React from "react";

const ReferenceLandingPage = (props) => {
  const payload = {
    links: JSON.parse(props.data.links),
    profile: JSON.parse(props.data.profile),
  };
  return (
    <ReferenceLandingProvider value={payload}>
      <Layout.Col className="bg-black text-white">
        <Layout.Container className="max-w-2xl min-h-screen">
          <Layout.Col>
            <ReferenceLandingNavbar />
            <ReferenceLandingMain />
          </Layout.Col>
        </Layout.Container>
      </Layout.Col>
    </ReferenceLandingProvider>
  );
};

export default ReferenceLandingPage;

export const getServerSideProps = dbPage(async (ctx) => {
  try {
    const profile = await Profile.findOne({
      username: ctx.query.username,
    }).populate("profile_for");
    if (!profile) return { notFound: true };
    const links = await LinkModel.find({ link_for: profile.profile_for });
    return {
      props: {
        data: {
          profile: JSON.stringify(profile),
          links: JSON.stringify(links),
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
});
