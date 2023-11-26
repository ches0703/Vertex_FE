import axios from "axios";

import baseURL from "../URL";
const communityList = "/community/list";

const getCommunityPostList = async (channelId) => {
    const response = await axios.get(baseURL + communityList, {
        channelId: channelId
    })
        .then((res) => {
            console.log("in api res", res)
            return res
        })
        .catch((e) => {
            console.log(e)
        })
    return response;
}

export {
    getCommunityPostList
};