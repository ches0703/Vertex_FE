import axios from 'axios';

import baseURL from '../../URL';
const commentURL = baseURL + '/video/comment'

const uploadComment = async (data) => {
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

const updateComment = async () => {
    const response = await axios({
        headers: { "ngrok-skip-browser-warning": "69420", },
        method: 'patch',
        url: commentURL,
    })
        .then((res) => {
            console.log(" comment : ", res);
            return res;
        })
        .catch((e) => {
            console.error(e);
            return null;
        })
    return response;

}

const deleteComment = async () => {
    const response = await axios({
        headers: { "ngrok-skip-browser-warning": "69420", },
        method: 'delete',
        url: commentURL,
    })
        .then((res) => {
            console.log(" comment : ", res);
            return res;
        })
        .catch((e) => {
            console.error(e);
            return null;
        })
    return response;

}

const getCommentList = async (videoId) => {
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
    uploadComment,
    updateComment,
    deleteComment,
    getCommentList
}