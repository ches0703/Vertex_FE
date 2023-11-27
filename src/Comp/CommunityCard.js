import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Stack,
  Button,
  Collapse
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import CommentList from './CommentList';


import { useState } from 'react';

export default function CommunityCard(postData) {

  const [commnetExpand, setCommnetExpand] = useState(false);

  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };

  // const { channel_email, contents, createdAt, updatedAt, id, image_file_path, like_count, title, user_email, view_count, } = postData;
  const userName = postData["user.name"];
  const title = postData[0]
  const contents = postData["contents"];
  const createdAt = postData["createdAt"];
  const image_file_path = postData["image_file_path"];
  const like_count = postData["like_count"];
  const view_count = postData["view_count"];
  console.log(typeof postData);
  /*
  channel_email:"lhj@mail.com"
  contents:"sjcvv asdfj avs"
  createdAt:"2023-11-26 16:06:40"
  id:2
  image_file_path:null
  like_count:0
  title:"sfxcljv"
  updatedAt:"2023-11-26 16:06:40"
  user_email: "lhj@mail.com"
  view_count:0
  */

  return (
    <Stack alignItems="center" padding="5px 5px">

      {/* Card Hearder */}
      <Card sx={{ minWidth: "500px", maxWidth: "35vw", borderRadius: "10px", padding: "15px" }}>
        <Stack direction="row" alignItems="center">
          <Avatar src='' sx={{ width: "70px", height: "70px" }}>R</Avatar>
          <Stack marginLeft="16px" >
            <Typography variant="h6">
              {title}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Author : {userName}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Watch : {view_count} / Date : {createdAt}
            </Typography>
          </Stack>
        </Stack>

        {/* Card Text */}
        <CardContent sx={{ padding: "15px 0px" }}>
          <Typography variant="body2" color="text.secondary">
            {contents}
          </Typography>
        </CardContent>

        {/* Card Image */}
        <CardMedia
          component="img"
          image={"/Test.jpg"}
          sx={{ borderRadius: "10px" }}
        />

        {/* Card Btn */}
        <CardActions sx={{ padding: "0px", marginTop: "15px" }}>
          <Button
            color='white'
            variant="outlined"
            startIcon={<FavoriteIcon />}>
            Like : {like_count}
          </Button>

          <Button
            color='white'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Comment : {1234}
          </Button>
        </CardActions>

        {/* Comment Comp */}
        <Collapse in={commnetExpand} timeout="auto" unmountOnExit sx={{ marginTop: "15px" }}>
          <CommentList></CommentList>
        </Collapse>

      </Card>
    </Stack>
  )
}