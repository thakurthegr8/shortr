import React, { useMemo, useState } from "react";
import CloseIcon from "@heroicons/react/24/outline/XMarkIcon";
import Button from "@/src/components/utils/Button";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import { useLink } from "@/src/providers/Links";
import axios from "axios";
import Image from "next/image";
import { imageLoader } from "@/src/utils/image";
import Form from "@/src/components/utils/Form";

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
            <Typography.Subtitle className="font-semibold">
              Add Link
            </Typography.Subtitle>
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

  export default AddLinkCard;