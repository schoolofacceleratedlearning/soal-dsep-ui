import { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transaction = Date.now() + " - soal-bap";
  var raw = JSON.stringify({
    context: {
      domain: "dsep:courses",
      action: "search",
      version: "1.1.0",
      bap_id: "soal-bap.vercel.app",
      bap_uri: "https://soal-bap.vercel.app/",
      location: {
        city: {
          name: "Bangalore",
          code: "std:080",
        },
        country: {
          name: "India",
          code: "IND",
        },
      },
      transaction_id: transaction,
      message_id: transaction,
      ttl: "PT10M",
      timestamp: new Date(Date.now()),
    },
    message: {
      intent: {
        item: {
          descriptor: {
            name: "",
          },
        },
      },
    },
  });

  const response = await fetch("https://gateway.becknprotocol.io/bg/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  });

  const data = await response.json();

  return res.status(200).json(data);
}
