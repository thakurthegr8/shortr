import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import CloseIcon from "@heroicons/react/24/outline/XMarkIcon";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import React, { useMemo, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { imageLoader } from "@/src/utils/image";
import { useProfile } from "@/src/providers/Profile";
import { useLink } from "@/src/providers/Links";

const LinkInput = ({ type, placeholder, ...restProps }) => {
  const [disabled, toggle] = useState(true);
  const toggleInput = () => {
    toggle((prev) => !prev);
  };
  return (
    <Layout.Row>
      <Form.Input
        type={type}
        placeholder={placeholder}
        name="title"
        className="text-sm border-none p-2 bg-transparent flex-1 text-ellipsis"
        disabled={disabled}
        {...restProps}
      />
      <Button className="btn-icon" onClick={toggleInput}>
        {disabled ? (
          <PencilIcon className="w-5 h-5" />
        ) : (
          <CheckIcon className="w-5 h-5" />
        )}
      </Button>
    </Layout.Row>
  );
};

const AddLinkCard = (props) => {
  const link = useLink();
  const [formState, setFormState] = useState({ title: "", value: "" });
  const [metaData, setMetaData] = useState(null);
  const enableSubmitBtn = useMemo(() => {
    if (formState.title.length !== 0 && formState.value.length !== 0) {
      return true;
    } else {
      return false;
    }
  }, [formState]);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (data) => {
    await link.addLink.dispatch(data);
  };
  const readyToSubmit = useMemo(async () => {
    try {
      const res = await axios.post("/api/scraper", { url: formState.value });
      const result = await res.data;
      setMetaData({ success: true, payload: result });
      return true;
    } catch (error) {
      setMetaData({ success: false, payload: error });
      return false;
    }
  }, [formState.value]);
  return (
    <Layout.Card className="border-yellow-400">
      <Layout.Col className="gap-4">
        <Layout.Row className="items-center justify-between">
          <Typography.Subtitle className="font-semibold">Add Link</Typography.Subtitle>
          <Button className="btn-icon" onClick={props.close}>
            <CloseIcon className="w-6 h-6" />
          </Button>
        </Layout.Row>
        {metaData?.success && (
          <Image
            width={32}
            height={32}
            loader={imageLoader}
            src={metaData.payload.favicons?.[0]}
          />
        )}
        <Form onSubmit={onFormSubmit}>
          <Layout.Col className="gap-2">
            <Form.Input
              type="text"
              name="title"
              onChange={onChange}
              placeholder="Title"
            />
            <Form.Input
              type="url"
              name="value"
              onChange={onChange}
              placeholder="URL"
            />
            <Layout.Row>
              <Button
                className="btn-general btn-lg font-semibold"
                disabled={!enableSubmitBtn || link.addLink.loading}
              >
                Submit
              </Button>
            </Layout.Row>
          </Layout.Col>
        </Form>
      </Layout.Col>
    </Layout.Card>
  );
};

const LinkCard = (props) => {
  return (
    <Layout.Card>
      <Layout.Col>
        <Layout.Col>
          <Form>
            <Layout.Col className="items-stretch">
              <LinkInput
                placeholder="Enter title..."
                type="title"
                defaultValue={props?.title}
              />
              <LinkInput
                placeholder="Enter url..."
                type="url"
                defaultValue={props?.value}
              />
            </Layout.Col>
          </Form>
        </Layout.Col>
        <Layout.Row className="justify-end">
          <Button className="btn-icon">
            <ArrowUpOnSquareIcon className="w-5 h-5" />
          </Button>
          <Button>Enable</Button>
          <Button className="btn-icon">
            <TrashIcon className="w-5 h-5" />
          </Button>
        </Layout.Row>
      </Layout.Col>
    </Layout.Card>
  );
};

const DashboardLandingPageLinks = () => {
  const link = useLink();
  const [addLinkCard, enableAddLinkCard] = useState(false);
  const toggleCard = () => {
    enableAddLinkCard((prev) => !prev);
  };
  console.log(link);
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-4 md:py-16 md:px-16 gap-4">
          <Typography.Subtitle className="font-semibold">
            Links
          </Typography.Subtitle>
          <Button
            onClick={toggleCard}
            className="btn-general btn-lg tracking-tight w-full py-3 font-semibold rounded-full"
          >
            Add Link +
          </Button>
          {addLinkCard && <AddLinkCard close={toggleCard} />}
          <Layout.Col className="gap-4">
            {link?.data &&
              link.data.map((item, index) => (
                <LinkCard key={index} {...item} />
              ))}
          </Layout.Col>
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardLandingPageLinks;
