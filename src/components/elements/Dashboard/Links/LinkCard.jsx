import Layout from "@/src/components/utils/Layout";
import LinkInput from "./LinkInput";
import Button from "@/src/components/utils/Button";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useCurrentLink, useLink } from "@/src/providers/Links";
import Switch from "@/src/components/utils/General/Switch";
import { useEffect, useState } from "react";
import { DOMAIN } from "@/src/constants";
import { toast } from "react-toastify";

const RemoveLink = () => {
  const link = useLink();
  const currentLink = useCurrentLink();
  const handleClick = () => {
    link.removeLink.dispatch({ _id: currentLink.link._id });
    console.log(currentLink._id);
  };
  return (
    <Button className="btn-icon" onClick={handleClick}>
      <TrashIcon className="w-5 h-5" />
    </Button>
  );
};

const LinkVisibilityToggler = () => {
  const currentLink = useCurrentLink();
  const link = useLink();
  const [enabled, setEnabled] = useState(currentLink.link.enabled);
  useEffect(() => {
    if (enabled != currentLink.enabled) {
      link.updateLink.dispatch({ enabled, _id: currentLink.link._id });
    }
  }, [enabled]);
  return <Switch enabled={enabled} setEnabled={setEnabled} />;
};

const LinkCard = () => {
  const currentLink = useCurrentLink();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentLink.link.value);
    toast("Link copied to clipboard", { type: "info" });
  };
  return (
    <Layout.Card>
      <Layout.Col>
        <Layout.Col>
          <Layout.Col className="items-stretch">
            <LinkInput
              placeholder="Enter title..."
              type="title"
              name="title"
              defaultValue={currentLink?.link?.title}
            />
            <LinkInput
              placeholder="Enter url..."
              type="url"
              name="value"
              defaultValue={currentLink?.link?.value}
            />
          </Layout.Col>
        </Layout.Col>
        <Layout.Row className="justify-end items-center">
          <Button className="btn-icon" onClick={copyToClipboard}>
            <ArrowUpOnSquareIcon className="w-5 h-5" />
          </Button>
          <LinkVisibilityToggler />
          <RemoveLink />
        </Layout.Row>
      </Layout.Col>
    </Layout.Card>
  );
};

export default LinkCard;
