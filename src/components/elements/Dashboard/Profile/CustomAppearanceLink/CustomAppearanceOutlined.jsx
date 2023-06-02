import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React from "react";

const options = [
  {
    id: "outline_1",
    className: "rounded-none",
    payload: {
      roundness: "rounded-none",
      outline: "outline",
    },
  },
  {
    id: "outline_2",
    className: "rounded-md",
    payload: {
      roundness: "rounded-md",
      outline: "outline",
    },
  },
  {
    id: "outline_3",
    className: "rounded-full",
    payload: {
      roundness: "rounded-full",
      outline: "outline",
    },
  },
];

const CustomAppearanceLinkOutlined = () => {
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
      <Typography.Body>Outline</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((item) => (
          <Layout.Col
            onClick={(e) => update(item.payload)}
            key={item.id}
            className={`h-8 bg-transparent border ${item.className} ${
              customAppearance.appearance.linkTile.roundness ===
                item.payload.roundness &&
              customAppearance.appearance.linkTile.outline ===
                item.payload.outline
                ? "ring-1 ring-primary ring-offset-2 ring-offset-transparent"
                : ""
            }`}
          ></Layout.Col>
        ))}
      </Layout.Grid>
    </Layout.Col>
  );
};

export default CustomAppearanceLinkOutlined;
