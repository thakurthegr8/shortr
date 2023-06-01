import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { DOMAIN } from "@/src/constants";
import { useReferenceLanding } from "@/src/providers/ReferenceLanding";
import { imageLoader } from "@/src/utils/image";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const ReferenceLandingNavbar = () => {
  const referenceLanding = useReferenceLanding();
  const { data } = referenceLanding;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${DOMAIN}${data.profile.username}`);
    toast("Link copied to clipboard", { type: "info" });
  };
  return (
    <Layout.Row className=" fixed left-0 top-0 right-0 py-2 px-4 md:px-0">
      <Layout.Container className="max-w-2xl backdrop-blur bg-white bg-opacity-20 rounded-full border overflow-hidden border-white px-0">
        <Layout.Row className="p-2 md:p-4 items-center justify-between">
          {data.profile.profile_for.image ? (
            <Image
              loader={imageLoader}
              src={data.profile.profile_for.image.url}
              width={64}
              height={64}
              className="rounded-full aspect-1/1 w-[44px] h-[44px] object-cover"
              priority
              unoptimized
              alt={data.profile.username}
            />
          ) : (
            <Layout.Col></Layout.Col>
          )}
          <Typography.Body className="font-bold">
            @{data.profile.username}
          </Typography.Body>
          <Button
            onClick={copyToClipboard}
            className="bg-white rounded-full text-black aspect-square hover:bg-black hover:text-white active:bg-dark_secondary active:text-white"
          >
            <ShareIcon className="w-6 h-6" />
          </Button>
        </Layout.Row>
      </Layout.Container>
    </Layout.Row>
  );
};

export default ReferenceLandingNavbar;
