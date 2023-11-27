import { useEffect, useState } from 'react';
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

import getPostImage from '../API/Post/getPostImage';
import getUserProfileImgAPI from '../API/UserData/getUserProfileImgAPI';

export default function CommunityCard({ post }) {

  const [commnetExpand, setCommnetExpand] = useState(false);

  const [image, setImage] = useState(null)
  const [profileImg, setProfileImg] = useState(null)

  useEffect(() => {
    console.log(post)
    const fetch = async () => {
      // content img
      const imgRes = await getPostImage({
        postId: post.id,
      })
      if(imgRes){
        setImage(imgRes.data)
      }
      // profile img
      const profileImg = await getUserProfileImgAPI({
        email: post.channel_email
      })
      if(profileImg){
        setProfileImg(profileImg.data)
      }
    }
    fetch()
  }, [])


  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };

  return (
    <Stack alignItems="center" padding="5px 5px">

      {/* Card Hearder */}
      <Card sx={{ minWidth: "500px", maxWidth: "35vw", borderRadius: "10px", padding: "15px" }}>
        <Stack direction="row" alignItems="center">
          <Avatar src={profileImg} sx={{ width: "70px", height: "70px" }}>R</Avatar>
          <Stack marginLeft="16px" >
            <Typography variant="h6">
              {post.title}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Author : {post.channel_email}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Watch : {post.view_count} / Date : {post.createdAt}
            </Typography>
          </Stack>
        </Stack>

        {/* Card Text */}
        <CardContent sx={{ padding: "15px 0px" }}>
          <Typography variant="body2" color="text.secondary">
            {post.contents}
          </Typography>
        </CardContent>

        {/* Card Image */}
        <CardMedia
          component="img"
          image={image}
          sx={{ borderRadius: "10px" }}
        />

        {/* Card Btn */}
        <CardActions sx={{ padding: "0px", marginTop: "15px" }}>
          <Button
            color='white'
            variant="outlined"
            startIcon={<FavoriteIcon />}>
            Like : {post.like_count}
          </Button>

          <Button
            color='white'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Comment : {"????"}
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