import axios from "axios";

import baseURL from '../URL';
const listURL = baseURL + '/subscription/list';
const contentsURL = baseURL + '/subscription/contents';
const subscribeURL = baseURL + '/subscription/subscribe';
const unsubscribeURL = baseURL + '/subscription/unsubscribe';

export default async function getSubscribeListAPI(email) {
  // console.log(email)
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

const getSubScribeContentList = async () => {

}

const getSubScribe = async () => {

}

const getUnsubScribe = async () => {

}

export {
  getSubscribeListAPI
}