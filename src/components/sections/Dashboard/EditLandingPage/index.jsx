import React from "react";
import DashboardLandingPageProfile from "@/src/components/blocks/Dashboard/Profile";
import CustomAppearance from "@/src/components/blocks/Dashboard/CustomAppearance";
import Layout from "@/src/components/utils/Layout";

const DashboardEditLandingPage = () => {
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-2 md:py-16 md:px-16 gap-8">
          <DashboardLandingPageProfile />
          <CustomAppearance />
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardEditLandingPage;
