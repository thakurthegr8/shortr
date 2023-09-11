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
import Modal from "@/src/components/utils/Modal";
import Typography from "@/src/components/utils/Typography";

const RemoveLink = () => {
  const link = useLink();
  const currentLink = useCurrentLink();
  const [modalVisibility, setModalVisibility] = useState(false);
  const deleteLinkHandler = async () => {
    await link.removeLink.dispatch({ _id: currentLink.link._id }).then(payload => toggleModal());
  };
  const toggleModal = () => {
    setModalVisibility(prev => !prev);
  }
  return (
    <Button className="btn-icon" onClick={toggleModal}>
      <TrashIcon className="w-5 h-5" />
      <Modal open={modalVisibility} onClose={toggleModal}>
        <Layout.Col className="w-screen md:w-[36vw]">
          <Layout.Col className="px-2 py-8 justify-center items-center">
            <Typography.Body>Are you sure to delete this link?</Typography.Body>
          </Layout.Col>
          <Layout.Row className="p-2 justify-end gap-2">
            <Button className="btn-primary" onClick={deleteLinkHandler} loading={link.removeLink.loading}>Confirm</Button>
            <Button className="btn-secondary" onClick={toggleModal} disabled={link.removeLink.loading}>Cancel</Button>
          </Layout.Row>
        </Layout.Col>
      </Modal>
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
        <Layout.Row className="justify-end items-center gap-1">
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
