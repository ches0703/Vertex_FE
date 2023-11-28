import axios from 'axios';

import baseURL from '../URL';
const commentURL = baseURL + '/video/comment'

const uploadVideoCommentAPI= async (data) => {
    const response = await axios({
        headers: { "ngrok-skip-browser-warning": "69420", },
        method: 'post',
        url: commentURL,
        data: data
    })
        .then((res) => {
            console.log("upload comment : ", res);
            return res;
        })
        .catch((e) => {
            console.error(e);
            return null;
        })
    return response;
}

const updateVideoCommentAPI = async (data) => {
    console.log(data)
    const response = await axios({
        headers: { "ngrok-skip-browser-warning": "69420", },
        method: 'patch',
        url: commentURL,
        data: data
    })
        .then((res) => {
            console.log("update comment : ", res);
            return res;
        })
        .catch((e) => {
            console.error(e);
            return null;
        })
    return response;

}

const deleteVideoCommentAPI = async (data) => {
    const response = await axios({
        headers: { "ngrok-skip-browser-warning": "69420", },
        method: 'delete',
        url: commentURL,
        data: data
    })
        .then((res) => {
            console.log("delete comment : ", res);
            return res;
        })
        .catch((e) => {
            console.error(e);
            return null;
        })
    return response;

}

const getVideoCommentListAPI = async (videoId) => {
    const response = await axios({
        headers: { "ngrok-skip-browser-warning": "69420", },
        method: 'get',
        url: commentURL,
        params: { videoId: videoId }
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
    uploadVideoCommentAPI,
    updateVideoCommentAPI,
    deleteVideoCommentAPI,
    getVideoCommentListAPI
}