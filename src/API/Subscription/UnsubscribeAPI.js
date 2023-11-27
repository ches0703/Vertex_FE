import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/subscription/unsubscribe";

/**
 * @param  data - userId, channelId
 */
export default async function UnsubscribeAPI(data) {
  const res = axios
    .post(URL, data, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("unsubscribe : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
