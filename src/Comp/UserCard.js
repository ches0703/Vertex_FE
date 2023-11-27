import {
  Typography,
  Card,
  CardMedia,
  Avatar,
  Stack,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getUserDataAPI from '../API/UserData/getUserDataAPI';
import getUserProfileImgAPI from '../API/UserData/getUserProfileImgAPI';

export default function UserCard({ userEmail }) {

  const category = useSelector((state) => state.category)
  const myData = useSelector((state) => state.user)

  const [userData, setUserData] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const [cardImg, setCardImg] = useState(null)

  useEffect(() => {
    const fetch = async() => {
      // userData
      const userDataRes = await getUserDataAPI({
        email: category.sub
      })
      setUserData(userDataRes.data)

      // profile img
      const profileImgRes = await getUserProfileImgAPI({
        email: category.sub
      })
      if (profileImgRes) {
        const url = URL.createObjectURL(profileImgRes.data);
        setProfileImg(url)
        return () => URL.revokeObjectURL(url);
      }

      // card img
      const cardImgRes = await getUserProfileImgAPI({
        email: category.sub
      })
      if (cardImgRes) {
        const url = URL.createObjectURL(cardImgRes.data);
        setCardImg(url)
        return () => URL.revokeObjectURL(url);
      }
    }
    fetch()
  }, [category.sub])

  return (
    <>
    {userData && <Card sx={{ borderRadius: "10px", padding: "15px" }}>

      {/* Card Image */}
      {cardImg && <CardMedia
        component="img"
        image={cardImg}
        sx={{ borderRadius: "10px", height: "300px" }}
        />}

      <Stack direction="row" sx={{ marginTop: "15px", justifyContent: "space-between", flexWrap: "wrap"}}>

        <Stack direction="row" sx={{alignItems: "center", width: "60vw", paddingRight:"15px",}}>
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

        <Stack sx={{ justifyContent: "center", flexGrow: "1"}}>
          <Typography textAlign="right" variant="caption" sx={{display: "block",  fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
            Subscriber : {1234}
          </Typography>
          <Typography textAlign="right" variant="caption" sx={{display: "block",  fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
            Videos : {1234}
          </Typography>
          {(userData.email !== myData.email) && <Button
            fullWidth
            sx={{marginTop: "5px"}}
            color='white'
            variant="outlined"
            onClick={() => {}}>
            Subscribe
          </Button>}

        </Stack>

      </Stack>
    </Card>}
    </>
  )
}