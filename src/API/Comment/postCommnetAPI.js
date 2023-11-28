import axios from 'axios';

import baseURL from '../URL';
const URL = baseURL + '/community/comment'

const getPostCommentAPI = async (data) => {
  const response = await axios.get(URL, {
    params: data,
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
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

const uploadPostCommentAPI = async (data) => {
  console.log("data : ", data )
  const response = await axios.post(URL, data, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    })
  return response;
}

const deletePostCommentAPI = async (data) => {
  console.log("data in Del API: ", data )
  const response = await axios.delete(URL, {
    data:data,
    headers: { 
      "ngrok-skip-browser-warning": "69420", 
    },
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    })
  return response;
}


const updatePostCommnetAPI = async (data) => {
  console.log("up api data : ", data)
  const res = await axios.patch(URL, data, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  }).then((res) => {
    // console.log("update comment : ", res);
    return res;
  })
    .catch((e) => {
      console.error(e);
      return null;
    })
  return res;
}


// const updateVideoCommentAPI = async (data) => {
//   console.log(data)
//   const response = await axios({
//       headers: { "ngrok-skip-browser-warning": "69420", },
//       method: 'patch',
//       url: commentURL,
//       data: data
//   })
//       .then((res) => {
//           // console.log("update comment : ", res);
//           return res;
//       })
//       .catch((e) => {
//           console.error(e);
//           return null;
//       })
//   return response;

// }


export {
  getPostCommentAPI,
  uploadPostCommentAPI,
  deletePostCommentAPI,
  updatePostCommnetAPI
}