import axios from 'axios';

import baseURL from '../URL';
const profileURL = baseURL + '/user/profile';

const updateProfile = async (data) => {
    console.log(data)
    const response = await axios.patch(profileURL, data, {
        headers: { 'ngrok-skip-browser-warning': '69420' },
    })
        .then((res) => {
            console.log(res);
            return res
        })
        .catch((e) => {
            console.log(e)
        })
    return response;
}

export {
    updateProfile
}