import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/subscription/subscribe";

/**
 * @param  data - userId, channelId
 */
export default async function SubscribeAPI(data) {
  const res = axios
    .post(URL, {
      body: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("subscribe : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
