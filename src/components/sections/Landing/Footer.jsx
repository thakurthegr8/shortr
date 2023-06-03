import React from "react";
import Layout from "../../utils/Layout";
import Logo from "../../elements/Logo";
import Typography from "../../utils/Typography";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Layout>
      <Layout.Col className="py-4 w-full justify-between flex-wrap gap-2">
        <Layout.Row >
          <Logo />
        </Layout.Row>
        <Layout.Card className="flex gap-4 justify-between items-center w-full flex-wrap">
          <Typography.Body className="font-medium ">
          🎉🎊 Your support keeps this website alive and thriving. Buy me a coffee!🍺
          </Typography.Body>
          <Link
            href="https://www.buymeacoffee.com/thakurthegr8"
            target="_blank"
          >
            <Image
              src="/assets/buy-me-coffee.svg"
              width={160}
              height={90}
              alt="https://www.buymeacoffee.com/thakurthegr8"
            />
          </Link>
        </Layout.Card>
      </Layout.Col>
    </Layout>
  );
};

export default Footer;
