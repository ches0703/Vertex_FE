import axios from "axios";

import baseURL from "../URL";
const URL = baseURL + "/community/list" 

export default async function getCommunityPostList(channelId) {
    const response = await axios.get(URL, {
        params: { channelId: channelId },
        headers: {
            'ngrok-skip-browser-warning': '69420',
        }
    })
        .then((res) => {
            return res.data.data
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}
