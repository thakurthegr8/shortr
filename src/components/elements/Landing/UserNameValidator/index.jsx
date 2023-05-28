import { useMemo, useState } from "react";
import Link from "next/link";
//components/utils
import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Input from "@/src/components/utils/Form/Input";
import Layout from "@/src/components/utils/Layout";
//constants
import { DOMAIN } from "@/src/constants";
import { CTABTNTEXT, REGISTER } from "@/src/constants/landing";
//hooks
import useFetch from "@/src/hooks/general/useFetch";
//icons
import ChevronIcon from "@heroicons/react/24/solid/ArrowRightIcon";

const UserNameValidator = () => {
  const [enquired, setEnquired] = useState(false);
  const validateUsername = useFetch({
    method: "POST",
    url: "/api/validate_username",
  });

  const onFormSubmit = (data) => {
    setEnquired(true);
    validateUsername.dispatch(data);
  };

  return (
    <Layout>
      <Form onSubmit={onFormSubmit}>
        <Layout.Col className="justify-center gap-2 md:flex-row">
          <Input placeholder={`${DOMAIN}username`} name="username" required />
          <Button
            className="btn-general btn-lg font-bold"
            disabled={validateUsername.loading}
          >
            {CTABTNTEXT}
          </Button>
          {enquired && !validateUsername.error && !validateUsername.loading && (
            <Link
              href="/register"
              className="text-green-500 text-center flex justify-center items-center p-3 rounded-lg"
            >
              {REGISTER}
              <ChevronIcon className="w-6 h-6" />
            </Link>
          )}
        </Layout.Col>
      </Form>
    </Layout>
  );
};

export default UserNameValidator;
