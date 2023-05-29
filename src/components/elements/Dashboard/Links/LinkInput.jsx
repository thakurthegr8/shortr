import React, { useState } from "react";
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import { useCurrentLink, useLink } from "@/src/providers/Links";

const LinkInput = ({ type, placeholder, ...restProps }) => {
  const [disabled, toggle] = useState(true);
  const link = useLink();
  const currentLink = useCurrentLink();
  const toggleInput = () => {
    toggle((prev) => !prev);
  };
  const onSubmit = (data) => {
    if (disabled) {
      link.updateLink.dispatch({ ...data, _id: currentLink.link._id });
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <Layout.Row>
        <Form.Input
          type={type}
          onChange={onSubmit}
          placeholder={placeholder}
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
    </Form>
  );
};

export default LinkInput;
