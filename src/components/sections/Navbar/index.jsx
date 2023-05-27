import Logo from "@/src/components/elements/Logo";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import { useAuth } from "@/src/providers/Auth";
import Link from "next/link";
import React from "react";
import AccountAvatar from "../../elements/AccountAvatar";

const UnAuthenticatedView = () => {
  return (
    <>
      <Link href="/register">
        <Button className="btn-general">Register</Button>
      </Link>
      <Link href="/login">
        <Button className="btn-secondary font-semibold">Login</Button>
      </Link>
    </>
  );
};
const AuthenticatedView = () => {
  return (
    <>
      <Link href="/dashboard">
        <Button className="btn-general">Dashboard</Button>
      </Link>
      <AccountAvatar />
    </>
  );
};

const Navbar = (props) => {
  const authContext = useAuth();
  console.log(authContext);
  return (
    <Layout>
      <Layout.Row className="justify-between py-2 items-center">
        <Link href="/">
          <Logo />
        </Link>
        <Layout.Row className="gap-2 items-center">
          {authContext.data ? <AuthenticatedView /> : <UnAuthenticatedView />}
        </Layout.Row>
      </Layout.Row>
    </Layout>
  );
};

export default Navbar;
