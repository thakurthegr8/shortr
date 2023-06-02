import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React from "react";

const options = [
  {
    id: "fill_1",
    className: "rounded-none bg-gray-200",
    payload: {
      roundness: "rounded-none",
      outline: "outline-none",
    },
  },
  {
    id: "fill_2",
    className: "rounded-md bg-gray-200",
    payload: {
      roundness: "rounded-md",
      outline: "outline-none",
    },
  },
  {
    id: "fill_3",
    className: "rounded-full bg-gray-200",
    payload: {
      roundness: "rounded-full",
      outline: "outline-none",
    },
  },
];

const CustomAppearanceLinkFill = () => {
  const customAppearance = useCustomAppearance();
  const update = (payload) => {
    const linkTilePayload = {
      linkTile: {
        ...payload,
      },
    };
    customAppearance.updateCustomAppearance.dispatch(linkTilePayload);
  };
  return (
    <Layout.Col className="gap-2">
      <Typography.Body>Fill</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((item) => (
          <Layout.Col
            onClick={(e) => update(item.payload)}
            key={item.id}
            className={`h-8 ${item.className} ${
              customAppearance.appearance.linkTile.roundness ===
                item.payload.roundness &&
              customAppearance.appearance.linkTile.outline === "outline-none" &&
              !customAppearance.appearance.linkTile.softShadow
                ? "ring-2 ring-primary ring-offset-2"
                : ""
            }`}
          ></Layout.Col>
        ))}
      </Layout.Grid>
    </Layout.Col>
  );
};

export default CustomAppearanceLinkFill;
