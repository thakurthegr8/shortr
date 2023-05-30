import withSessionApi from "@/src/middlewares/withSessionApi";
import db from "@/src/services/db";
import Profile from "@/src/services/db/models/Profile";

const GET = withSessionApi(
  db(async (req, res) => {
    console.log(req.user);
    return res.status(200).json("GET");
  })
);

const POST = withSessionApi(
  db(async (req, res) => {
    return res.status(200).json("POST");
  })
);

const PUT = withSessionApi(
  db(async (req, res) => {
    return res.status(200).json("PUT");
  })
);

const handler = async (req, res) => {
  if (req.method === "GET") {
    return GET(req, res);
  }
  if (req.method === "POST") {
    return POST(req, res);
  }
  if (req.method === "PUT") {
    return PUT(req, res);
  }
  return res.status(405).json("method not allowed");
};

export default handler;
