import EditLandingPageLinks from "@/src/components/sections/Dashboard/EditLandingPageLinks";
import DashboardLandingPageDesign from "@/src/components/sections/Dashboard/LandingPageDesign";
import DashboardNavbar from "@/src/components/sections/Dashboard/Navbar";
import Layout from "@/src/components/utils/Layout";
import withSessionPage from "@/src/middlewares/withSessionPage";
import LinkProvider from "@/src/providers/Links";
import { dbPage } from "@/src/services/db";
import Link from "@/src/services/db/models/Link";
import React from "react";

const DashboardLinks = (props) => {
  return (
    <LinkProvider value={JSON.parse(props.data)}>
      <Layout>
        <Layout.Col className="h-screen">
          <DashboardNavbar />
          <Layout.Grid className="grid-cols-1 md:grid-cols-4 divide-x h-full">
            <Layout.Col className="col-span-2">
              <EditLandingPageLinks />
            </Layout.Col>
            <Layout.Col>
              <DashboardLandingPageDesign />
            </Layout.Col>
          </Layout.Grid>
        </Layout.Col>
      </Layout>
    </LinkProvider>
  );
};

export default DashboardLinks;

export const getServerSideProps = withSessionPage(
  dbPage(async (ctx) => {
    const links = await Link.find({ link_for: ctx.req.user });
    return { props: { data: JSON.stringify(links) } };
  })
);
