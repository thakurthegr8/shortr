import React, { useState } from "react";
//utils
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
//hooks
import { CurrentLinkProvider, useLink } from "@/src/providers/Links";
//elements
import LinkCard from "@/src/components/elements/Dashboard/Links/LinkCard";
import AddLinkCard from "@/src/components/elements/Dashboard/Links/AddLinkCard";

const DashboardLandingPageLinks = () => {
  const link = useLink();
  const [addLinkCard, enableAddLinkCard] = useState(false);
  const toggleCard = () => {
    enableAddLinkCard((prev) => !prev);
  };
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-4 md:py-16 md:px-16 gap-4">
          <Typography.Subtitle className="font-semibold">
            Links
          </Typography.Subtitle>
          <Button
            onClick={toggleCard}
            className="btn-general btn-lg tracking-tight w-full py-3 font-semibold rounded-full"
          >
            Add Link +
          </Button>
          {addLinkCard && <AddLinkCard close={toggleCard} />}
          <Layout.Col className="gap-4">
            {link?.data &&
              link.data.map((item, index) => (
                <CurrentLinkProvider link={item} key={index} >
                  <LinkCard/>
                </CurrentLinkProvider>
              ))}
          </Layout.Col>
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardLandingPageLinks;
