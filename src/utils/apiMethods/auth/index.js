import axios from "axios";
import crypto from "crypto";

const generateSHA1 = (data) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${process.env.NEXT_PUBLIC_STORAGE_API_SECRET}`;
};
export const deleteProfileImage = async ({ public_id }) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_STORAGE_URL}/image/destroy`,
      {
        public_id,
        signature:generateSHA1(generateSignature(public_id)),
        resource_type: "image",
        api_key: process.env.NEXT_PUBLIC_STORAGE_API_KEY,
        timestamp: new Date().getTime(),
      }
    );
    const data = await res.data;
    console.log(data);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("error occurred");
  }
};
