import Logo from "@/src/components/elements/Logo";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Link from "next/link";
import React from "react";

const Navbar = (props) => {
  return (
    <Layout>
      <Layout.Container className="max-w-5xl">
        <Layout.Row className="justify-between py-2 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <Layout.Row className="gap-2">
            <Link href="/register">
              <Button className="btn-general">Register</Button>
            </Link>
            <Link href="/login">
              <Button className="btn-secondary font-semibold">Login</Button>
            </Link>
          </Layout.Row>
        </Layout.Row>
      </Layout.Container>
    </Layout>
  );
};

export default Navbar;
