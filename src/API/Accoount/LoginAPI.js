import axios from "axios";

const URL = "https://rooster-master-mayfly.ngrok-free.app/auth/login/local"

export default async function LoginAPI(data) {
  const res = await axios.post(URL, data)
    .then((data) => {
      return data
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res

  // const res = await axios.post(URL, data, {
  //   headers: {
  //     "Content-Type": `application/json`,
  //   },
  // }).then((res) => {
  //   console.log("EEE", res);
  // });


}