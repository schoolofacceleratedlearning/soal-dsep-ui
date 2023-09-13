import { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqBody = JSON.parse(req.body);
  var raw = JSON.stringify({
    context: {
      domain: "dsep:courses",
      action: "search",
      version: "1.1.0",
      bap_id: "ps-bap-network.becknprotocol.io",
      bap_uri: "https://ps-bap-network.becknprotocol.io/",
      location: {
        // city: {
        //   name: "Bangalore",
        //   code: "std:080",
        // },
        country: {
          name: "India",
          code: "IND",
        },
      },
      // transaction_id: "a9aaecca-10b7-4d19-b640-b047a7c62196",
      // message_id: "0d30bfbf-87b8-43d2-8f95-36ebb9a24fd6",
      // ttl: "PT10M",
      // timestamp: "2023-02-15T15:14:30.560Z",
    },
    message: {
      intent: {
        item: {
          descriptor: {
            name: reqBody.name,
          },
        },
      },
    },
  });

  const response = await fetch(
    "https://ps-bap-client.becknprotocol.io/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    }
  );

  const data = await response.json();

  return res.status(200).json(data);
}
