import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeMain, changeSub } from "../redux/CategoryReducer";
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
import { postLikeAPI, postLikeCheckAPI } from '../API/Post/postLikeAPI';

export default function CommunityCard({ post }) {
  
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user)

  const [commnetExpand, setCommnetExpand] = useState(false);

  const [image, setImage] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    // console.log("post dat = ", post)
    const fetch = async () => {

      // content img
      const imgRes = await getPostImage({
        postId: post.id,
      })
      if(imgRes){
        setImage(imgRes.data)
      }
      
      // like check
      // console.log("like")
      
      await postLikeCheckAPI({
        email: userData.email,
        postId: post.id,
      }).then((res) => {
        // console.log("like Check Res",res)
        setIsLiked(res.data)
      }).catch((e) => {
        // console.log("Like Check Error")
        console.error(e)
      })

      // profile img
      const profileImg = await getUserProfileImgAPI({
        email: post.channel_email
      })
      if(profileImg){
        setProfileImg(profileImg.data)
      }
      
    }
    fetch()
  }, [post, userData])


  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };

  // move to my page
  const handleUserPage = () => {
    dispatch(changeMain("Subscribe"));
    dispatch(changeSub(post.user_email));
  }

  const handleLike = async () => {
    // console.log("hendle ",post.id, userData.email)
    await postLikeAPI({
      postId: post.id,
      email: userData.email,
    }).then((res) => {
      // console.log("post Like res", res)
      post.like_count = res.data.data
      setIsLiked(!isLiked)
    }).catch((e) => {
      // console.log("Handle Like Error : ")
      console.error(e)
    })
  }



  return (
    <Stack alignItems="center" padding="5px 5px">

      {/* Card Hearder */}
      <Card sx={{ minWidth: "500px", maxWidth: "35vw", borderRadius: "10px", padding: "15px" }}>
        <Stack direction="row" alignItems="center">
          <Button
            color='white'
            onClick={handleUserPage}
          >
            <Avatar src={profileImg} sx={{ width: "70px", height: "70px" }}/>
          </Button>
          <Stack marginLeft="16px" >
            <Typography variant="h6">
              {post.title}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Author : {post["user.name"]}
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
          {(userData.email) && <Button
            onClick={handleLike}
            color={isLiked?"error":"white"}
            variant="outlined"
            startIcon={<FavoriteIcon />}>
            {isLiked?"Cancel Like":"Like"} : {post.like_count}
          </Button>}

          <Button
            color='white'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Comment
          </Button>

          {(post.user_email === userData.email) &&<Button
            color='error'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Delete
          </Button>}
        </CardActions>

        {/* Comment Comp */}
        <Collapse in={commnetExpand} timeout="auto" unmountOnExit sx={{ marginTop: "15px" }}>
          <CommentList postId={post.id}></CommentList>
        </Collapse>

      </Card>
    </Stack>
  )
}