import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/playlist";

/**
 * @description 사용자의 플레이 리스트 삭제
 * @param  data - userId, listName
 */
export default async function deletePlaylistAPI(data) {
  const res = axios
    .delete(URL, {
      body: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("delete playlist : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
