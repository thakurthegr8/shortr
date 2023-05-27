import React from "react";
import Link from "next/link";
import AccountAvatar from "@/src/components/elements/AccountAvatar";
import Logo from "@/src/components/elements/Logo";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import AppearanceIcon from "@heroicons/react/24/outline/Bars2Icon";
import LinkIcon from "@heroicons/react/24/outline/LinkIcon";

const navItems = [
  { name: "appearance", path: "/dashboard", Icon: AppearanceIcon },
  { name: "links", path: "/dashboard/links", Icon: LinkIcon },
];

const Navigation = () => {
  return (
    <Layout>
      {navItems.map((Item) => (
        <Link
          href={Item.path}
          key={Item.name}
          className="p-2 hover:bg-gray-200 dark:hover:bg-dark_secondary transition-all rounded-2xl text-gray-600 dark:text-white font-semibold"
        >
          <Layout.Col className="md:flex-row gap-2 items-center">
            <Item.Icon className="w-5 h-5 font-bold" />
            <Typography className="capitalize text-sm">{Item.name}</Typography>
          </Layout.Col>
        </Link>
      ))}
    </Layout>
  );
};

const DashboardNavbar = () => {
  return (
    <Layout>
      <Layout.Col className="py-3 px-4 border-b dark:border-white/20 divide-y gap-2 bg-white dark:bg-general">
        <Layout.Row className="justify-between items-center">
          <Layout.Row className="gap-2 items-center">
            <Link href="/">
              <Logo />
            </Link>
            <Layout.Row className="items-center gap-2 hidden md:flex">
              <Navigation />
            </Layout.Row>
          </Layout.Row>
          <Layout.Row className="items-center ">
            <Button className="btn-secondary">
              Share
              <ShareIcon className="ml-2 w-4 h-4" />
            </Button>
            <AccountAvatar />
          </Layout.Row>
        </Layout.Row>
        <Layout.Row className="items-center gap-2 md:hidden">
          <Navigation />
        </Layout.Row>
      </Layout.Col>
    </Layout>
  );
};

export default DashboardNavbar;
