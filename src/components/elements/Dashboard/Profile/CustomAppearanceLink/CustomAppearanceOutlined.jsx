import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { customAppearanceLinkOptions } from "@/src/constants/dashboard/profile/custom_appearance";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React from "react";

const CustomAppearanceLinkOutlined = () => {
  const customAppearance = useCustomAppearance();
  const update = (payload) => {
    const update = {
      ...payload,
      "linkTile.outline": true,
      "linkTile.hardShadow": false,
      "linkTile.softShadow": false,
    };
    customAppearance.updateCustomAppearance.dispatch(update);
  };

  const selectedOption = (roundness) => {
    return customAppearance.appearance.linkTile.roundness === roundness &&
      customAppearance.appearance.linkTile.outline
      ? "ring-1 ring-primary ring-offset-2 ring-offset-transparent"
      : "";
  };

  return (
    <Layout.Col className="gap-2">
      <Typography.Body>Outline</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {customAppearanceLinkOptions.map((item,index) => (
          <Layout.Col
            onClick={(_) => update(item.payload)}
            key={`outline_${index}`}
            className={`h-8 bg-transparent border border-black dark:border-white ${
              item.className
            } ${selectedOption(item.payload["linkTile.roundness"])}`}
          ></Layout.Col>
        ))}
      </Layout.Grid>
    </Layout.Col>
  );
};

export default CustomAppearanceLinkOutlined;
