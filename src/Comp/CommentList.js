import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Stack,
  TextField,
  Box,
  Button,
  Typography
} from '@mui/material';

import Comment from './Comment.js';

import { uploadVideoCommentAPI, getVideoCommentListAPI, deleteVideoCommentAPI, updateVideoCommentAPI } from '../API/Comment/videoCommentAPI';
import { getPostCommentAPI, uploadPostCommentAPI, deletePostCommentAPI, updatePostCommnetAPI } from '../API/Comment/postCommnetAPI.js';
const DELETE = "DELETE";
const UPDATE = "UPDATE";
const REPLY = "REPLY";

export default function CommentList({ videoId, postId }) {
  const userData = useSelector(state => state.user);

  const [commentList, setCommentList] = useState([]);

  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e)
  }

  const fetch = useCallback(async () => {
    if (videoId) {
      // Video Comment
      console.log("Video Comment")
      const res = await getVideoCommentListAPI(videoId);
      if (res) {
        console.log(res.data.data);
        setCommentList(res.data.data);
      }
    } else if (postId) {
      // Post Commnet
      console.log("Post Commnet")
      await getPostCommentAPI({
        postId: postId
      })
        .then((res) => {
          console.log(res.data.data);
          setCommentList(res.data.data);
        })
        .catch((e) => {
          console.log("Post Commnet Error")
          console.error(e)
        })
    }
  }, [postId, videoId])

  useEffect(() => {
    fetch();
  }, [fetch])


  // Commit
  const handleCommit = async () => {
    if(videoId){
      // VIDEO
      const data = {
        email: userData.email,
        content: comment,
        parentId: null,
        videoId: videoId
      }
      console.log(data)
      const res = await uploadVideoCommentAPI(data);
      if (res) {
        setComment('');
        fetch();
      }
    } else if (postId) {
      // POST
      const data = {
        email: userData.email,
        content: comment,
        parentId: null,
        postId: postId
      }
      await uploadPostCommentAPI(data)
        .then(() => {
          setComment('')
          fetch();
        })
    }
  }

  const handleButtonAtComment = async (cmt, type) => {
    let data;
    switch (type) {
      case DELETE:
        if(videoId){
          // Video
          data = {
            email: cmt.user_email,
            id: cmt.id,
            videoId: cmt.videoId
          }
          const res_del = await deleteVideoCommentAPI(data);
          console.log(res_del)
          if (res_del) {
            fetch()
          }
        } else if(postId) {
          // Post
          data = {
            email: cmt.user_email,
            id: cmt.id,
            postId: cmt.postId
          }
          await deletePostCommentAPI(data)
            .then(() => {
              fetch()
            })
        }
        break;
      case UPDATE:
        if(videoId){
          data = {
            email: cmt.user_email,
            id: cmt.id,
            content: cmt.content,
            parentId: cmt.parent_id,
            videoId: cmt.videoId
          }
          const res_udt = await updateVideoCommentAPI(data);
          if (res_udt) {
            fetch()
          }
        } else if(postId) {
          // Post
          data = {
            email: cmt.user_email,
            id: cmt.id,
            content: cmt.content,
            postId: cmt.postId
          }
          await updatePostCommnetAPI(data)
            .then(() => {
              fetch()
            })
        }
        break;
      case REPLY:
        break;
      default:
        break;
    }
  }

  return (
    <Stack sx={{ color: "#FFFFFF" }}>
      <Typography variant="h6" gutterBottom>
        Comment
      </Typography>

      {/* Comment Write */}
      {(userData.email) && <Box component="form" sx={{ paddingBottom: "15px" }}>
        <TextField
          fullWidth
          color='white'
          multiline
          maxRows={4}
          value={comment}
          onChange={(e) => handleCommentChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <Button variant="outlined" color='white' sx={{ marginLeft: "10px", width: "200px" }}
                onClick={() => handleCommit()}>
                Commit
              </Button>
            ),
          }}
        ></TextField>
      </Box>}

      {/* Commnet */}
      {/* <Comment></Comment>
      <Comment hasReply={true}></Comment>
      <Comment></Comment> */}
      {commentList.map(cmt => {
        cmt.videoId = videoId
        cmt.postId = postId
        cmt.func = handleButtonAtComment
        // console.log(cmt);
        return <Comment key={cmt.id} comment={cmt}></Comment>
      })}

    </Stack>
  )
}