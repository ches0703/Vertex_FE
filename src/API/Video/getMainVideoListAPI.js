import axios from "axios";



async function getHomeVideoListAPI() {
  const res = await axios.get()
}

async function getNewestVideoListAPI() {
  //const res = await axios.get()
  const res = await [
    {
      title : "aaaa",
      like : 100,
      watch : 100
    },
    {
      title : "bbbb",
      like : 200,
      watch : 200
    },
    {
      title : "cccc",
      like : 300,
      watch : 300
    },
    {
      title : "dddd",
      like : 400,
      watch : 400
    },
    {
      title : "eeee",
      like : 500,
      watch : 500
    },
  ]
  return res
}

async function getSubscribeVideoListAPI() {
  const res = await axios.get()
}

export {
  getHomeVideoListAPI,
  getNewestVideoListAPI,
  getSubscribeVideoListAPI
}