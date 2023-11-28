import axios from "axios";

import baseURL from '../URL';
const listURL = baseURL + '/subscription/list';
const contentsURL = baseURL + '/subscription/contents';
const subscribeURL = baseURL + '/subscription/subscribe';
const unsubscribeURL = baseURL + '/subscription/unsubscribe';

const getSubscribeListAPI = async () => {
  return [
    {
      name: "1111",
      email: "1111@aaa.aaa",
      thumbnail: "./Test.jpg"
    },
    {
      name: "2222",
      email: "2222@aaa.aaa",
      thumbnail: "./Test.jpg"
    },
    {
      name: "3333",
      email: "3333@aaa.aaa",
      thumbnail: "./Test.jpg"
    }
  ]
  // const response = axios({
  //   method: 'get',
  //   url: listURL,
  //   params: {
  //     email: email
  //   }
  // })

  // if (response) {
  //   console.log(response)
  //   return response
  // }
  // else {

  //   return null
  // }

  // return response
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