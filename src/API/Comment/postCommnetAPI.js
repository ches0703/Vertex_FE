import axios from 'axios';

import baseURL from '../URL';
const commentURL = baseURL + '/community/comment'

const getPostCommentAPI = async(data) => {
  const response = await axios({
    headers: { "ngrok-skip-browser-warning": "69420", },
    method: 'get',
    url: commentURL,
    params: { postId: data }
})
    .then((res) => {
        console.log("get comment : ", res);
        return res;
    })
    .catch((e) => {
        console.error(e);
        return null;
    })
return response;
}


export {
  getPostCommentAPI
}