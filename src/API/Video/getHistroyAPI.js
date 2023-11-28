import axios from 'axios';

import baseURL from '../URL';
const recordURL = baseURL + '/video/record'

export default async function getHistoryAPI(userEmail) {
    const res = await axios.get(recordURL, {
        params: userEmail,
        headers: { 'ngrok-skip-browser-warning': '69420', }
    })
        .then((res) => {
            console.log("get hitory api",res)
            return res
        })
        .catch((e) => {
            console.log(e)
        })

    return res;
}