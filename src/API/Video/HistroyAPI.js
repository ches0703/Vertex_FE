import axios from 'axios';

import baseURL from '../URL';
const recordURL = baseURL + '/video/record'

async function getHistoryAPI(userEmail) {
    const res = await axios.get(recordURL, {
        params: userEmail,
        headers: { 'ngrok-skip-browser-warning': '69420', }
    })
        .then((res) => {
            return res
        })
        .catch((e) => {
            console.log(e)
        })

    return res;
}

async function deleteHistoryAPI(data){
    const res = await axios.delete(recordURL, {
        params: data,
        headers: { 'ngrok-skip-browser-warning': '69420', }
    })
        .then((res) => {
            return res
        })
        .catch((e) => {
            console.log(e)
        })

    return res;
}

export {
    getHistoryAPI,
    deleteHistoryAPI
}