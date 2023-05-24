import DashboardEditLandingPage from "@/src/components/sections/Dashboard/EditLandingPage";
import DashboardLandingPageDesign from "@/src/components/sections/Dashboard/LandingPageDesign";
import DashboardNavbar from "@/src/components/sections/Dashboard/Navbar";
import Layout from "@/src/components/utils/Layout";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <Layout.Col className="h-screen">
        <DashboardNavbar />
        <Layout.Grid className="grid-cols-1 md:grid-cols-3 divide-x h-full">
          <Layout.Col className="col-span-2">
            <DashboardEditLandingPage />
          </Layout.Col>
          <Layout.Col>
            <DashboardLandingPageDesign />
          </Layout.Col>
        </Layout.Grid>
      </Layout.Col>
    </Layout>
  );
};

export default Dashboard;
