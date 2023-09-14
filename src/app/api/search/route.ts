import { contextGenerator, intentGenerator } from "@/utils/generators";
import { requestForwarder } from "@/utils/request";
import { NextResponse } from "next/server";

export async function POST(_req: Request) {
  //   const reqBody = req.body;
  const transactionId = Date.now() + "soal-bap.vercel.app";
  const searchPayload = {
    query: "",
  };
  const msg = intentGenerator(searchPayload);
  const payload = {
    context: contextGenerator(
      transactionId,
      "search",
      "https://soal-bap.vercel.app",
      "soal-bap.vercel.app"
    ),
    message: msg,
  };

  const data = await requestForwarder(
    "https://gateway.becknprotocol.io/bg/search",
    payload
  );

  console.log("RESPONSE $$$$$$$$", data);
  return NextResponse.json({ data: data.data });
}
