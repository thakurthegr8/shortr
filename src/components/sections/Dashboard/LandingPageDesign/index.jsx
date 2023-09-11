import Logo from "@/src/components/elements/Logo";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useAuth } from "@/src/providers/Auth";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import { useLink } from "@/src/providers/Links";
import { useProfile } from "@/src/providers/Profile";
import { imageLoader } from "@/src/utils/image";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Image from "next/image";
import React, { useMemo } from "react";

const DashboardLandingPageDesign = () => {
  const auth = useAuth();
  const customAppearance = useCustomAppearance();
  const profile = useProfile();
  const { appearance: data } = customAppearance;

  const isHardShadow = useMemo(() => {
    return data?.linkTile?.hardShadow
      ? "neu-ref-landing border-2 border-black"
      : "";
  }, [customAppearance.appearance]);
  const isSoftShadow = useMemo(() => {
    return data?.linkTile?.softShadow ? "shadow-xl border-black border-2" : "";
  }, [customAppearance.appearance]);
  const isOutlined = useMemo(() => {
    return data?.linkTile?.outline ? "border border-white bg-transparent" : "";
  }, [customAppearance.appearance]);

  const isRounded = useMemo(() => {
    return data?.linkTile?.roundness
      ? data?.linkTile?.roundness
      : "";
  }, [customAppearance.appearance]);

  const hasLinkTileFontColor = useMemo(() => {
    return data?.linkTile?.fontColor
      ? data?.linkTile?.fontColor
      : "#fff";
  }, [customAppearance.appearance]);
  const hasBackground = useMemo(() => {
    if (!data) {
      return "#000";
    }
    return data?.background;
  }, [customAppearance.appearance]);
  const hasTextColor = useMemo(() => {
    if (!data) {
      return "#fff";
    }
    return data?.text_color;
  }, [customAppearance.appearance]);
  const hasLinkTileBackground = useMemo(() => {
    if (!data) {
      return "#000";
    }
    if (data?.linkTile?.outline) {
      return "transparent";
    }
    return data?.linkTile?.backgroundColor;
  }, [customAppearance.appearance]);
  return (
    <Layout.Container
      className="w-full lg:max-w-xs h-full lg:mt-32 lg:mb-12"
      style={{ background: hasBackground, color: hasTextColor }}
    >
      <Layout.Col className="items-center py-8 gap-2 px-2 ">
        {auth?.data?.image ? (
          <Image
            src={auth?.data?.image?.url}
            height={64}
            width={64}
            loader={imageLoader}
            priority
            unoptimized
            className="rounded-full object-cover aspect-square overflow-hidden"
            alt="profile_image"
          />
        ) : (
          <UserIcon className="w-20 h-20 bg-secondary text-gray-600 aspect-1/1 rounded-full p-2" />
        )}
        <Typography.Body className="font-bold">
          @{profile.data?.username}
        </Typography.Body>
        <Typography.Caption className="text-center">{profile.data?.bio}</Typography.Caption>
        <Layout.Col className="px-4 w-full items-center gap-4">
          <Typography.Body
            className={`font-medium hover:scale-95 active:scale-90 transition-all capitalize p-2 w-full text-center ${isHardShadow} ${isSoftShadow} ${isOutlined} ${isRounded}`}
            style={{
              color: hasLinkTileFontColor,
              background: hasLinkTileBackground,
            }}
          >
            Sample Link
          </Typography.Body>
          <Logo/>
        </Layout.Col>
      </Layout.Col>
    </Layout.Container>
  );
};

export default DashboardLandingPageDesign;
