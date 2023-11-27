import axios from 'axios';

import baseURL from '../URL';
const recordURL = baseURL + '/video/record'
const likrURL = baseURL + '/video/'

const getHistory = async (userEmail) => {
    const response = await axios.get(recordURL, {
        params: { email: userEmail },
        headers: { 'ngrok-skip-browser-warning': '69420', }
    })
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
        })

    return response;
}
const getLiked = async (userEmail) => {
    return userEmail;
}

export {
    getHistory,
    getLiked
}