import React from "react";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { customAppearanceLinkOptions } from "@/src/constants/dashboard/profile/custom_appearance";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";


const CustomAppearanceLinkFill = () => {
  const customAppearance = useCustomAppearance();

  const update = (payload) => {
    const update = {
      ...payload,
      "linkTile.outline": false,
      "linkTile.hardShadow": false,
      "linkTile.softShadow": false,
    };

    customAppearance.updateCustomAppearance.dispatch(update);
  };

  const selectedOption = (roundness) => {

    return customAppearance.appearance.linkTile.roundness === roundness &&
      !customAppearance.appearance.linkTile.outline &&
      !customAppearance.appearance.linkTile.softShadow &&
      !customAppearance.appearance.linkTile.hardShadow
      ? "ring-2 ring-primary ring-offset-2"
      : "";
      
  };

  return (
    <Layout.Col className="gap-2">
      <Typography.Body>Fill</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {customAppearanceLinkOptions.map((item,index) => (
          <Layout.Col
            onClick={(_) => update(item.payload)}
            key={`fill_${index}`}
            className={`h-8 bg-black dark:bg-white ${
              item.className
            } ${selectedOption(item.payload["linkTile.roundness"])}`}
          ></Layout.Col>
        ))}
      </Layout.Grid>
    </Layout.Col>
  );
};

export default CustomAppearanceLinkFill;
