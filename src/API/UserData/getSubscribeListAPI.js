import axios from "axios";

export default async function getSubscribeListAPI() {
  const res = [
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
  return res
}