import Button from "@/src/components/utils/Button";
import Form from "@/src/components/utils/Form";
import Layout from "@/src/components/utils/Layout";
import Typography from "@/src/components/utils/Typography";
import useFetch from "@/src/hooks/general/useFetch";
import useImage from "@/src/hooks/general/useImage";
import { useAuth } from "@/src/providers/Auth";
import { useProfile } from "@/src/providers/Profile";
import { imageLoader } from "@/src/utils/image";
import { FILE_UPLOAD_LIMIT } from "@/src/utils/limiters";
import { compareObj } from "@/src/utils/objects";
import { profilePayloadValidator } from "@/src/utils/schemaValidators/profilePayload";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Image from "next/image";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const DashboardLandingPageProfile = () => {
  const profile = useProfile();
  const auth = useAuth();
  const image = useImage();
  const postProfile = useFetch({
    method: profile.data?.username ? "PUT" : "POST",
    url: "/api/profile",
  });
  const fileRef = useRef(null);

  const onSubmit = async (formData) => {
    try {
      await profilePayloadValidator(formData);
      const currentProfileInfo = {
        username: profile.data?.username,
        bio: profile.data?.bio,
      };
      const payload = compareObj(formData, currentProfileInfo);
      if (payload) postProfile.dispatch(payload);
    } catch (error) {
      toast("error", { type: "error" });
      console.log(error);
    }
  };
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);
    const sizeInMb = file.size / (1024 * 1024);
    if (sizeInMb > FILE_UPLOAD_LIMIT) {
      toast(`please upload file with size lesser than ${FILE_UPLOAD_LIMIT}MB`, {
        type: "error",
      });
      return;
    }
    try {
      const imageRes = await image.uploadImage(file);
      await auth.updateProfileImage.dispatch({
        image: {
          url: imageRes.secure_url,
          public_id: imageRes.public_id,
          signature: imageRes.signature,
        },
      });
      toast("successfully uploaded image", { type: "success" });
    } catch (error) {
      toast("Error", { type: "error" });
    }
  };
  const handleFile = () => {
    fileRef.current.click();
  };
  return (
    <Layout>
      <Layout.Container>
        <Layout.Col className="py-4 px-2 md:py-16 md:px-16">
          <Typography.Subtitle className="font-semibold">
            Profile
          </Typography.Subtitle>
          <Layout.Card>
            <Layout.Col className="gap-4">
              <Layout.Row className="gap-4 items-center ">
                {auth?.data?.image ? (
                  <Image
                    src={auth?.data?.image?.url}
                    height={128}
                    width={128}
                    loader={imageLoader}
                    className="rounded-full object-cover aspect-square overflow-hidden"
                  />
                ) : (
                  <UserIcon className="w-20 h-20 bg-secondary text-gray-600 aspect-1/1 rounded-full p-2" />
                )}
                <Layout.Col className="flex-1 gap-4">
                  <Button
                    className="btn-general btn-lg tracking-tight w-full py-3 font-semibold rounded-full"
                    onClick={handleFile}
                    disabled={image.loading}
                  >
                    Add New Image
                  </Button>
                  <Form.File
                    ref={fileRef}
                    onChange={onFileChange}
                    accept="image/png, image/jpeg"
                  />
                  <Button
                    className="btn-outlined-secondary dark:text-white btn-lg tracking-tight w-full py-3 rounded-full"
                    onClick={() => auth.removeProfileImage.dispatch(null)}
                    disabled={
                      !auth?.data?.image || auth.removeProfileImage.loading
                    }
                  >
                    Remove
                  </Button>
                </Layout.Col>
              </Layout.Row>
              <Form className="flex flex-col gap-2" onSubmit={onSubmit}>
                <Form.Input
                  name="username"
                  placeholder="Enter your username..."
                  defaultValue={profile?.data?.username}
                />
                <Form.Input
                  name="bio"
                  placeholder="Enter your bio..."
                  defaultValue={profile?.data?.bio}
                />
                <Layout.Row className="justify-end">
                  <Button
                    className="btn-primary btn-lg"
                    disabled={postProfile.loading}
                  >
                    Submit
                  </Button>
                </Layout.Row>
              </Form>
            </Layout.Col>
          </Layout.Card>
        </Layout.Col>
      </Layout.Container>
    </Layout>
  );
};

export default DashboardLandingPageProfile;
