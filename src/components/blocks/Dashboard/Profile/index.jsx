import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import Image from "next/image";
import React from "react";

const DashboardLandingPageProfile = () => {
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-4 py-16 md:px-16">
          <Typography.Subtitle className="font-semibold">
            Profile
          </Typography.Subtitle>
          <Layout.Card>
            <Layout.Col className="gap-4">
              <Layout.Row className="gap-4">
                <Image
                  src="/assets/avatar.jfif"
                  height={128}
                  width={128}
                  className="rounded-full"
                />
                <Layout.Col className="flex-1 gap-4">
                  <Button className="btn-general btn-lg tracking-tight w-full py-3 font-semibold rounded-full">
                    Add New Image
                  </Button>
                  <Button className="btn-outlined-secondary  btn-lg tracking-tight w-full py-3 rounded-full">
                    Remove
                  </Button>
                </Layout.Col>
              </Layout.Row>
              <Form className="flex flex-col gap-2">
                <Form.Input name="username" placeholder="Enter your username..."/>
                <Form.Input name="bio" placeholder="Enter your bio..."/>
              </Form>
            </Layout.Col>
          </Layout.Card>
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardLandingPageProfile;
