import Logo from "@/src/components/elements/Logo";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import { useReferenceLanding } from "@/src/providers/ReferenceLanding";
import { imageLoader } from "@/src/utils/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReferenceLandingMain = () => {
  const referenceLanding = useReferenceLanding();
  const { data } = referenceLanding;
  console.log(referenceLanding);
  return (
    <Layout.Col className="items-center justify-center py-16 gap-4 mt-16">
      <Layout>
        {data.profile.profile_for.image && (
          <Image
            loader={imageLoader}
            src={data.profile.profile_for.image.url}
            width={128}
            height={128}
            className="rounded-full aspect-1/1 w-[128px] h-[128px] object-cover"
            priority
            unoptimized
            alt={data.profile.username}
          />
        )}
        <Typography.Subtitle>@{data.profile.username}</Typography.Subtitle>
        <Typography.Body>{data.profile.bio}</Typography.Body>
      </Layout>
      <Layout.Col className="items-center w-full gap-4">
        {data.links.map((item, index) => (
          <Link
            key={index}
            href={item.value}
            target="blank"
            className={`capitalize p-4 w-full text-center ${
              data?.customAppearance?.linkTile?.hardShadow
                ? "neu-bg shadow-black border-2 border-black"
                : ""
            } ${
              data?.customAppearance?.linkTile?.softShadow
                ? "shadow-xl border-black border-2"
                : ""
            } ${
              data?.customAppearance?.linkTile?.outline === "outline"
                ? "border bg-transparent"
                : ""
            } ${
              data?.customAppearance?.linkTile?.roundness
                ? data?.customAppearance?.linkTile?.roundness
                : ""
            }`}
            style={{
              color: data?.customAppearance?.linkTile?.fontColor
                ? data?.customAppearance?.linkTile?.fontColor
                : "#000",
              background:
                data?.customAppearance?.linkTile?.backgroundColor &&
                data?.customAppearance?.linkTile?.outline !== "outline"
                  ? data?.customAppearance?.linkTile?.backgroundColor
                  : "transparent",
            }}
          >
            {item.title}
          </Link>
        ))}
      </Layout.Col>
      <Link href="/">
        <Logo />
      </Link>
    </Layout.Col>
  );
};

export default ReferenceLandingMain;
