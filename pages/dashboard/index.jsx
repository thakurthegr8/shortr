// import DashboardEditLandingPage from "@/src/components/sections/Dashboard/EditLandingPage";
import DashboardLandingPageDesign from "@/src/components/sections/Dashboard/LandingPageDesign";
import DashboardNavbar from "@/src/components/sections/Dashboard/Navbar";
import Layout from "@/src/components/utils/Layout";
import withSessionPage from "@/src/middlewares/withSessionPage";
import CustomAppearanceProvider from "@/src/providers/CustomAppearance";
import ProfileProvider from "@/src/providers/Profile";
import { dbPage } from "@/src/services/db";
import CustomAppearance from "@/src/services/db/models/CustomAppearance";
import Profile from "@/src/services/db/models/Profile";
import dynamic from "next/dynamic";
import React from "react";

const DashboardEditLandingPage = dynamic(
  () =>
    import("@/src/components/sections/Dashboard/EditLandingPage").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

const Dashboard = (props) => {
  return (
    <ProfileProvider data={JSON.parse(props.data)}>
      <Layout>
        <Layout.Col className="h-screen">
          <DashboardNavbar />
          <Layout.Grid className="grid-cols-1 md:grid-cols-4 divide-x dark:divide-dark_secondary h-full">
            <Layout.Col className="col-span-2">
              <CustomAppearanceProvider
                appearance={
                  props.customAppearance
                    ? JSON.parse(props.customAppearance)
                    : null
                }
              >
                <DashboardEditLandingPage />
              </CustomAppearanceProvider>
            </Layout.Col>
            <Layout.Col className="hidden md:block">
              <DashboardLandingPageDesign />
            </Layout.Col>
          </Layout.Grid>
        </Layout.Col>
      </Layout>
    </ProfileProvider>
  );
};

export default Dashboard;

export const getServerSideProps = withSessionPage(
  dbPage(async (ctx) => {
    const profile = await Profile.findOne({ profile_for: ctx.req.user });
    const customAppearance = await CustomAppearance.findOne({
      user: ctx.req.user,
    });
    console.log();
    return {
      props: {
        data: JSON.stringify(profile),
        customAppearance: JSON.stringify(customAppearance),
      },
    };
  })
);
