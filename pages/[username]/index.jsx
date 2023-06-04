import Page from "@/src/components/pages";
import ReferenceLandingMain from "@/src/components/sections/ReferenceLanding/Main";
import ReferenceLandingNavbar from "@/src/components/sections/ReferenceLanding/Navbar";
import Layout from "@/src/components/utils/Layout";
import { LOGOTEXT } from "@/src/constants";
import withUrl from "@/src/middlewares/withUrl";
import ReferenceLandingProvider from "@/src/providers/ReferenceLanding";
import { dbPage } from "@/src/services/db";
import CustomAppearance from "@/src/services/db/models/CustomAppearance";
import LinkModel from "@/src/services/db/models/Link";
import Profile from "@/src/services/db/models/Profile";
import React, { useMemo } from "react";

const defaultBackgroundStyle = {
  background: "#000",
  color: "#fff",
};

const ReferenceLandingPage = (props) => {
  const payload = {
    links: JSON.parse(props.data.links),
    profile: JSON.parse(props.data.profile),
    customAppearance: props.data.customAppearance
      ? JSON.parse(props.data.customAppearance)
      : null,
  };
  const metaData = useMemo(
    () => [
      { property: "og:title", content: payload.profile.username },
      { property: "description", content: payload.profile.bio },
      { property: "og:image", content: payload.profile.profile_for.image?.url },
    ],
    []
  );

  const backgroundStyle = ()=>{
    return  payload.customAppearance
    ? {
        background: payload.customAppearance.background,
        color: payload.customAppearance.text_color,
      }
    : defaultBackgroundStyle
}
  
  return (
    <Page meta={metaData} page={`${LOGOTEXT} | ${payload.profile.username}`}>
      <ReferenceLandingProvider value={payload}>
        <Layout.Col
          style={backgroundStyle()}>
          <Layout.Container className="max-w-xl min-h-screen">
            <Layout.Col>
              <ReferenceLandingNavbar />
              <ReferenceLandingMain />
            </Layout.Col>
          </Layout.Container>
        </Layout.Col>
      </ReferenceLandingProvider>
    </Page>
  );
};

export default ReferenceLandingPage;

export const getServerSideProps = withUrl(
  dbPage(async (ctx) => {
    try {
      const profile = await Profile.findOne({
        username: ctx.query.username,
      }).populate("profile_for");
      if (!profile) return { notFound: true };
      const links = await LinkModel.find({
        link_for: profile.profile_for,
        enabled: true,
      });
      const customAppearance = await CustomAppearance.findOne({
        user: profile.profile_for,
      });
      return {
        props: {
          data: {
            profile: JSON.stringify(profile),
            links: JSON.stringify(links),
            customAppearance: JSON.stringify(customAppearance),
          },
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  })
);
