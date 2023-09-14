import axios from "axios";

export const requestForwarder: any = async (url: string, reqData: any) => {
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      mode: "cors",
    };
    console.log("calling request forwarder");
    return await axios.post(url, reqData, requestOptions);
  } catch (err) {
    console.log("err: ", err);
    return new Error();
  }
};
