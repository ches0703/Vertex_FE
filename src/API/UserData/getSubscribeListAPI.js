import axios from "axios";
import baseURL from "../URL";

const URL = baseURL + "/subscription/list"

export default async function getSubscribeListAPI(email) {
  console.log(email)
    const res = await axios.get(URL, {
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
  // const res = [
  //   {
  //     name: "1111",
  //     email: "1111@aaa.aaa",
  //     thumbnail: "./Test.jpg"
  //   },
  //   {
  //     name: "2222",
  //     email: "2222@aaa.aaa",
  //     thumbnail: "./Test.jpg"
  //   },
  //   {
  //     name: "3333",
  //     email: "3333@aaa.aaa",
  //     thumbnail: "./Test.jpg"
  //   }
  //]
  //return res
}