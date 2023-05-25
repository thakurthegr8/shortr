import DashboardEditLandingPage from "@/src/components/sections/Dashboard/EditLandingPage";
import DashboardLandingPageDesign from "@/src/components/sections/Dashboard/LandingPageDesign";
import DashboardNavbar from "@/src/components/sections/Dashboard/Navbar";
import Layout from "@/src/components/utils/Layout";
import withSessionPage from "@/src/middlewares/withSessionPage";
import ProfileProvider from "@/src/providers/Profile";
import { dbPage } from "@/src/services/db";
import Profile from "@/src/services/db/models/Profile";
import React from "react";

const Dashboard = (props) => {
  return (
    <ProfileProvider data={JSON.parse(props.data)}>
      <Layout>
        <Layout.Col className="h-screen">
          <DashboardNavbar />
          <Layout.Grid className="grid-cols-1 md:grid-cols-4 divide-x h-full">
            <Layout.Col className="col-span-2">
              <DashboardEditLandingPage />
            </Layout.Col>
            <Layout.Col>
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
    console.log();
    return { props: { data: JSON.stringify(profile) } };
  })
);
