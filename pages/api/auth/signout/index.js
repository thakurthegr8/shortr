// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  res.setHeader(
    "Set-Cookie",
    `access_token=null;Path=/;HttpOnly;Expires=expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );
  res.status(200).json(true);
};

export default handler;