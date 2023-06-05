// import DashboardEditLandingPage from "@/src/components/sections/Dashboard/EditLandingPage";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import DashboardLandingPageDesign from "@/src/components/sections/Dashboard/LandingPageDesign";
import DashboardNavbar from "@/src/components/sections/Dashboard/Navbar";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import withSessionPage from "@/src/middlewares/withSessionPage";
import CustomAppearanceProvider from "@/src/providers/CustomAppearance";
import ProfileProvider from "@/src/providers/Profile";
import { dbPage } from "@/src/services/db";
import CustomAppearance from "@/src/services/db/models/CustomAppearance";
import Profile from "@/src/services/db/models/Profile";
import { Suspense } from "react";

const DashboardEditLandingPage = dynamic(
  () =>
    import("@/src/components/sections/Dashboard/EditLandingPage").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

const TogglePreview = (props) => {
  const toggle = (e) => {
    props.setPreviewOpen((prev) => !prev);
  };
  return (
    <Layout.Container className="fixed inset-x-0 bottom-4 block z-20 lg:hidden">
      <Button
        className="btn-primary rounded-full btn-lg mx-auto"
        onClick={toggle}
      >
        Preview <EyeIcon width={24} className="ml-2" />
      </Button>
    </Layout.Container>
  );
};

const Dashboard = (props) => {
  const [isPreviewOpened, setPreviewOpen] = useState(false);
  return (
    <ProfileProvider data={JSON.parse(props.data)}>
      <Layout>
        <Layout.Col className="h-screen">
          <DashboardNavbar />
          <CustomAppearanceProvider
            appearance={
              props.customAppearance ? JSON.parse(props.customAppearance) : null
            }
          >
            <Layout.Grid className="grid-cols-1 lg:grid-cols-4 divide-x dark:divide-dark_secondary h-full">
              <Layout.Col className="col-span-2 py-36 lg:py-24">
                <Suspense fallback={<>loading</>}>
                  <DashboardEditLandingPage />
                </Suspense>
              </Layout.Col>
              <Layout.Col
                className={`${
                  isPreviewOpened ? "block" : "hidden"
                } left-0 z-10 lg:flex col-span-2 fixed overflow top-0  bottom-0 lg:left-[50%]  right-0`}
              >
                <DashboardLandingPageDesign />
              </Layout.Col>
            </Layout.Grid>
          </CustomAppearanceProvider>
        </Layout.Col>
      </Layout>
      <TogglePreview
        isPreviewOpened={isPreviewOpened}
        setPreviewOpen={setPreviewOpen}
      />
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
