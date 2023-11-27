import {
  Typography,
  Card,
  CardMedia,
  Avatar,
  Stack,
  Button,
} from '@mui/material';
import { useEffect } from 'react';

export default function UserCard({ user }) {

  useEffect(() => {
    console.log(user)
  })

  return (
    <Card sx={{ borderRadius: "10px", padding: "15px" }}>

      {/* Card Image */}
      <CardMedia
        component="img"
        image={"/Test.jpg"}
        sx={{ borderRadius: "10px", height: "300px" }}
      />

      <Stack direction="row" sx={{ marginTop: "15px", justifyContent: "space-between", flexWrap: "wrap"}}>

        <Stack direction="row" sx={{alignItems: "center", width: "60vw", paddingRight:"15px",}}>
          {/* User Profile Img */}
          <Avatar src='' sx={{ width: "100px", height: "100px" }}>R</Avatar>

          <Stack sx={{ justifyContent: "center", marginLeft: "15px" }}>

            {/* User nickName */}
            <Typography variant="h5">
              {user}
            </Typography>

            {/* User Discription */}
            <Typography padding="0px" variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
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
          <Button
            fullWidth
            sx={{marginTop: "5px"}}
            color='white'
            variant="outlined"
            onClick={() => {}}>
            Subscribe
          </Button>

        </Stack>

      </Stack>
    </Card>
  )
}