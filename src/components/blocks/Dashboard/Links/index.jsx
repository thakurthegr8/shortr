import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import React, { useState } from "react";

const LinkInput = ({ type, placeholder }) => {
  const [disabled, toggle] = useState(true);
  const toggleInput = () => {
    toggle((prev) => !prev);
  };
  return (
    <Layout>
      <Form.Input
        type={type}
        placeholder={placeholder}
        name="title"
        className="text-sm border-none p-2 bg-transparent"
        disabled={disabled}
      />
      <Button className="btn-icon" onClick={toggleInput}>
        {disabled ? (
          <PencilIcon className="w-5 h-5" />
        ) : (
          <CheckIcon className="w-5 h-5" />
        )}
      </Button>
    </Layout>
  );
};

const LinkCard = (props) => {
  return (
    <Layout.Card>
      <Layout.Col>
        <Layout.Row>
          <Form className="flex-1">
            <Layout.Col className="items-stretch">
              <Layout.Row>
                <LinkInput placeholder="Enter title..." type="title" />
              </Layout.Row>
              <Layout.Row>
                <LinkInput placeholder="Enter url..." type="url" />
              </Layout.Row>
            </Layout.Col>
          </Form>
          <Layout.Row className="items-center">
            <Button className="btn-icon">
              <ArrowUpOnSquareIcon className="w-5 h-5" />
            </Button>
            <Button>Enable</Button>
          </Layout.Row>
        </Layout.Row>
        <Layout.Row className="justify-end">
          <Button className="btn-icon">
            <TrashIcon className="w-5 h-5" />
          </Button>
        </Layout.Row>
      </Layout.Col>
    </Layout.Card>
  );
};

const DashboardLandingPageLinks = () => {  
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-4 md:py-16 md:px-16 gap-4">
          <Typography.Subtitle className="font-semibold">
            Links
          </Typography.Subtitle>
          <Button className="btn-general btn-lg tracking-tight w-full py-3 font-semibold rounded-full">
            Add Link +
          </Button>
          
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardLandingPageLinks;
