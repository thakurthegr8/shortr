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
      "linkTile.softShadow": true,
      "linkTile.hardShadow": false,
      "linkTile.outline": "outline-none",
    },
  },
  {
    id: "outline_2",
    className: "rounded-md",
    payload: {
      "linkTile.roundness": "rounded-md",
      "linkTile.softShadow": true,
      "linkTile.hardShadow": false,
      "linkTile.outline": "outline-none",
    },
  },
  {
    id: "outline_3",
    className: "rounded-full",
    payload: {
      "linkTile.roundness": "rounded-full",
      "linkTile.softShadow": true,
      "linkTile.hardShadow": false,
      "linkTile.outline": "outline-none",
    },
  },
];

const CustomAppearanceLinkSoftShadow = () => {
  const customAppearance = useCustomAppearance();
  const update = (payload) => {
   
    customAppearance.updateCustomAppearance.dispatch(payload);
  };
  return (
    <Layout.Col className="gap-2">
      <Typography.Body>Soft Shadow</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((item) => (
          <Layout.Col
            onClick={(e) => update(item.payload)}
            key={item.id}
            className={`h-8 bg-transparent shadow-lg border border-black dark:border-white  dark:shadow-white ${item.className} ${
              customAppearance.appearance.linkTile.roundness ===
              item.payload["linkTile.roundness"] &&
              customAppearance.appearance.linkTile.softShadow
                ? "ring-1 ring-primary ring-offset-2 ring-offset-transparent"
                : ""
            }`}
          ></Layout.Col>
        ))}
      </Layout.Grid>
    </Layout.Col>
  );
};

export default CustomAppearanceLinkSoftShadow;
