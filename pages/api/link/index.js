import withSessionApi from "@/src/middlewares/withSessionApi";
import db from "@/src/services/db";
import Link from "@/src/services/db/models/Link";

const GET = withSessionApi(
  db(async (req, res) => {
    console.log(req.user);
    try {
      const data = await Link.find({ link_for: req.user });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(200).json(error);
    }
  })
);

const POST = withSessionApi(
  db(async (req, res) => {
    const payload = {
      ...req.body,
      link_for: req.user,
    };
    try {
      const data = await Link.create(payload);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  })
);

const PUT = withSessionApi(
  db(async (req, res) => {
    const payload = {
      ...req.body,
      profile_for: req.user,
    };
    try {
      const data = await Link.findOneAndUpdate(payload);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
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
