import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { customAppearanceLinkOptions } from "@/src/constants/dashboard/profile/custom_appearance";
import { useCustomAppearance } from "@/src/providers/CustomAppearance";
import React from "react";

const CustomAppearanceLinkHardShadow = () => {
  const customAppearance = useCustomAppearance();
  const update = (payload) => {
    const update = {
      ...payload,
      "linkTile.softShadow": false,
      "linkTile.hardShadow": true,
      "linkTile.outline": false,
    };
    customAppearance.updateCustomAppearance.dispatch(update);
  };

  const selectedOption = (roundness) => {
    return customAppearance.appearance.linkTile.roundness === roundness &&
      customAppearance.appearance.linkTile.hardShadow
      ? "neu-bg-primary"
      : "neu-bg-general";
  };

  return (
    <Layout.Col className="gap-2">
      <Typography.Body>Hard Shadow</Typography.Body>
      <Layout.Grid className="grid-cols-2 lg:grid-cols-3 gap-4">
        {customAppearanceLinkOptions.map((item) => (
          <Layout.Col
            onClick={(e) => update(item.payload)}
            key={`hard_shadow_${item.id}`}
            className={`h-8 neu-bg ${item.className} ${selectedOption(
              item.payload["linkTile.roundness"]
            )}`}
          ></Layout.Col>
        ))}
      </Layout.Grid>
    </Layout.Col>
  );
};

export default CustomAppearanceLinkHardShadow;
