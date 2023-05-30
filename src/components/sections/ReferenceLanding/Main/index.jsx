import Logo from "@/src/components/elements/Logo";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useReferenceLanding } from "@/src/providers/ReferenceLanding";
import { imageLoader } from "@/src/utils/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReferenceLandingMain = () => {
  const referenceLanding = useReferenceLanding();
  const { data } = referenceLanding;
  console.log(data);
  return (
    <Layout.Col className="items-center justify-center py-16 gap-4">
      <Layout>
        {data.profile.profile_for.image && (
          <Image
            loader={imageLoader}
            src={data.profile.profile_for.image.url}
            width={128}
            height={128}
            className="rounded-full aspect-1/1 w-[128px] h-[128px] object-cover"
          />
        )}
        <Typography.Subtitle>@{data.profile.username}</Typography.Subtitle>
        <Typography.Body>{data.profile.bio}</Typography.Body>
      </Layout>
      <Layout.Col className="items-center w-full gap-2">
        {data.links.map((item, index) => (
          <Link key={index} href={item.value} target="blank" className="text-general hover:bg-gray-200 bg-white capitalize p-4 w-full text-center rounded-full shadow-sm border">
            {item.title}
          </Link>
        ))}
      </Layout.Col>
      <Link href="/"><Logo /></Link>
    </Layout.Col>
  );
};

export default ReferenceLandingMain;
