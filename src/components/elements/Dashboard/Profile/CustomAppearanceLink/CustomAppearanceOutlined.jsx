import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React from "react";

const options = [
  {
    id: "outline_1",
    className: "rounded-none",
    payload: {
      "linkTile.roundness": "rounded-none",
      "linkTile.outline": "outline",
      "linkTile.hardShadow":false,
      "linkTile.softShadow":false
    },
  },
  {
    id: "outline_2",
    className: "rounded-md",
    payload: {
      "linkTile.roundness": "rounded-md",
      "linkTile.outline": "outline",
      "linkTile.hardShadow":false,
      "linkTile.softShadow":false
    },
  },
  {
    id: "outline_3",
    className: "rounded-full",
    payload: {
      "linkTile.roundness": "rounded-full",
      "linkTile.outline": "outline",
      "linkTile.hardShadow":false,
      "linkTile.softShadow":false
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
    customAppearance.updateCustomAppearance.dispatch(payload);
  };
  return (
    <Layout.Col className="gap-2">
      <Typography.Body>Outline</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((item) => (
          <Layout.Col
            onClick={(e) => update(item.payload)}
            key={item.id}
            className={`h-8 bg-transparent border border-black dark:border-white ${
              item.className
            } ${
              customAppearance.appearance.linkTile.roundness ===
                item.payload["linkTile.roundness"] &&
              customAppearance.appearance.linkTile.outline ==="outline"
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
