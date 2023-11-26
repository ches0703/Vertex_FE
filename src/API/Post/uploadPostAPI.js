import axios from "axios";

import baseURL from "../URL";
const communityList = "/community";

const uploadCommunityPost = async (createPostDto) => {
    const response = await axios.post(baseURL + communityList, createPostDto)
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
    uploadCommunityPost
};