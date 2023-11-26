import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/playlist/contents";

/**
 * @description 사용자의 재생 목록 내 컨텐츠 삭제
 * @param  data - videoId, playlistId
 */
export default async function deletePlaylistContentsAPI(data) {
  const res = axios
    .delete(URL, {
      body: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("delete playlist list contents : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
