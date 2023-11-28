import {
  Typography,
  Card,
  CardMedia,
  Avatar,
  Stack,
  Button,
  Box
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { render } from '../redux/UserReducer';
import { useDispatch } from 'react-redux';
import getUserDataAPI from '../API/UserData/getUserDataAPI';
import getUserProfileImgAPI from '../API/UserData/getUserProfileImgAPI';
import getUserCardImgAPI from '../API/UserData/getUserCardImg';
import { getUnsubscribeAPI, getSubscribeAPI, getCheckSubscribeAPI } from '../API/Subscription/SubscribeAPI';

export default function UserCard({ userEmail }) {

  const dispatch = useDispatch()
  const category = useSelector((state) => state.category)
  const myData = useSelector((state) => state.user)

  const [isSub, setIsSub] = useState(false)

  const [userData, setUserData] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const [cardImg, setCardImg] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      // userData
      const userDataRes = await getUserDataAPI({
        email: category.sub
      })
      const getUserData = userDataRes.data
      // console.log("getUserData",getUserData)
      setUserData(userDataRes.data)

      // Subscirbe check
      if(myData.email !== null){
        // console.log("sub check start")
        await getCheckSubscribeAPI({
          channelId: getUserData.email,
          userId: myData.email
        }).then((res) => {
          setIsSub(res.data)
        }).catch((e) => {
          console.log("Subscirbe check Error")
          console.error(e)
        })
      }

      // profile img
      const profileImgRes = await getUserProfileImgAPI({
        email: category.sub
      })
      if (profileImgRes) {
        setProfileImg(profileImgRes.data)
      }

      // card img
      const cardImgRes = await getUserCardImgAPI({
        email: category.sub
      })
      if (cardImgRes) {
        setCardImg(cardImgRes.data)
      }

    }
    fetch()
  }, [category, myData])

  const handlesubscribe = async () => {
    
    if(isSub){
      await getUnsubscribeAPI({
        channelId: userData.email,
        userId: myData.email
      }).then((res) => {
        console.log("un sub res : ",res)
        console.log(res)
        setIsSub(false)
      }).catch((e) => {
        console.log("Handle Sub Error : ")
        console.error(e)
      })
    } else {
      console.log("sub Start")
      await getSubscribeAPI({
        channelId: userData.email,
        userId: myData.email
      }).then((res) => {
        console.log("sub res : ",res)
        setIsSub(true)
      }).catch((e) => {
        console.log("Handle Sub Error : ")
        console.error(e)
      })
    }
    dispatch(render())
  }


  return (
    <Box sx={{ display: "flex" }}>
      {userData && <Card
        sx={{
          borderRadius: "10px",
          padding: "15px",
          flexGrow: "1"
        }}>

        {/* Card Image */}
        {cardImg && <CardMedia
          component="img"
          image={cardImg}
          sx={{ borderRadius: "10px", marginBottom: "15px", height: "300px" }}
        />}

        <Stack direction="row" sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>

          <Stack direction="row" sx={{ alignItems: "center", width: "60vw", paddingRight: "15px", }}>
            {/* User Profile Img */}
            <Avatar src={profileImg} sx={{ width: "100px", height: "100px" }}></Avatar>

            <Stack sx={{ justifyContent: "center", marginLeft: "15px" }}>

              {/* User nickName */}
              <Typography variant="h5">
                {userData.name}
              </Typography>

              {/* User Discription */}
              <Typography padding="0px" variant="body2" color="text.secondary">
                {userData.description}
              </Typography>
            </Stack>

          </Stack>

          <Stack sx={{ justifyContent: "center", flexGrow: "1" }}>
            {/* <Typography textAlign="right" variant="caption" sx={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Subscriber : {1234}
            </Typography>
            <Typography textAlign="right" variant="caption" sx={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Videos : {1234}
            </Typography> */}
            {(myData.email) && (userData.email !== myData.email) && <Button
              onClick={handlesubscribe}
              fullWidth
              sx={{ marginTop: "5px" }}
              color={isSub?"error":"white"}
              variant="outlined">
              {isSub?"Cancel Subscribe":"Subscribe"}
            </Button>}

          </Stack>

        </Stack>
      </Card>}
    </Box>
  )
}