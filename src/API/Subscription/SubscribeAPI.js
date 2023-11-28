import axios from "axios";

import baseURL from '../URL';
const listURL = baseURL + '/subscription/list';
const checkURL = baseURL + '/subscription/check';
const contentsURL = baseURL + '/subscription/contents';
const subscribeURL = baseURL + '/subscription/subscribe';
const unsubscribeURL = baseURL + '/subscription/unsubscribe';

export default async function getSubscribeListAPI(email) {
  console.log(email)
  const res = await axios.get(listURL, {
    params: email,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((e) => {
      console.error(e)
      return false;
    })
  return res;
}

const getCheckSubscribeAPI = async (data) => {
  const res = await axios.get(checkURL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      // console.log("sub check api", res)
      return res
    })
    .catch((e) => {
      console.error(e);
      return;
    })
  return res;
}

const getSubscribeAPI = async () => {

}

const getUnsubscribeAPI = async () => {

}

export {
  getSubscribeListAPI,
  getCheckSubscribeAPI,
  getUnsubscribeAPI,
  getSubscribeAPI

}