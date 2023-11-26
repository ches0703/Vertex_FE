import axios from "axios";

import baseURL from "../URL";
const communityList = "/community/list";

const getCommunityPostList = async (channelId) => {
    const response = await axios.get(baseURL + communityList, {
        params: { channelId: channelId },
        headers: {
            'ngrok-skip-browser-warning': '69420',
        }
    })
        .then((res) => {
            console.log("in api res", res.data.data)
            return res.data.data
        })
        .catch((e) => {
            console.log(e)
        })
    return response;
}

export {
    getCommunityPostList
};