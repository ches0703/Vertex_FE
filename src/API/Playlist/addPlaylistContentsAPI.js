import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/playlist/contents";

/**
 * @description 사용자의 재생 목록 내 컨텐츠 가져오기
 * @param  data - videoId, playlistId
 */
export default async function addPlaylistContentsAPI(data) {
  const res = axios
    .post(URL, {
      body: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("add playlist list contents : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
