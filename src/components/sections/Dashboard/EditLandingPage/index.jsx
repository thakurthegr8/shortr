import React from "react";
import DashboardLandingPageProfile from "@/src/components/blocks/Dashboard/Profile";
import Theme from "@/src/components/blocks/Dashboard/Theme";
import Layout from "@/src/components/utils/Layout";

const DashboardEditLandingPage = () => {
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-2 md:py-16 md:px-16">
          <DashboardLandingPageProfile />
          <Theme />
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardEditLandingPage;
