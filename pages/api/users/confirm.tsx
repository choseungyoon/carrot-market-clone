import twilio from "twilio";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!exists) return res.status(404).end();
  console.log(exists);
  req.session.user = {
    id: exists.userId,
  };

  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: exists.userId,
    },
  });
  res.json({ ok: true });
  return res.status(200).end();
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
