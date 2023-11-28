import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Stack,
  TextField,
  Box,
  Button,
  Typography
} from '@mui/material';

import Comment from './Commnet';

import { uploadComment, getCommentList, deleteComment, updateComment } from '../API/Comment/Video/uploadComment';

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

  const handleCommit = async () => {
    const fetch = async () => {
      if(videoId){
        // Video Comment
        console.log("Video Comment")
        const res = await getCommentList(videoId);
        if (res) {
          console.log(res.data.data);
          setCommentList(res.data.data);
        }
      } else if (postId) {
        // Post Commnet
        console.log("Post Commnet")
        await getCommentList(postId)
          .then((res) => {
            console.log(res.data.data);
            setCommentList(res.data.data);
          })
          .catch((e) => {
            console.log("Post Commnet Error")
            console.error(e)
          })
      }
    }
    const data = {
      email: userData.email,
      content: comment,
      parentId: null,
      videoId: videoId
    }
    console.log(data)

    const res = await uploadComment(data);
    if (res) {
      console.log(res)
      setComment('');
      fetch();
    }
  }

  const fetch = async () => {
      if(videoId){
        // Video Comment
        console.log("Video Comment")
        const res = await getCommentList(videoId);
        if (res) {
          console.log(res.data.data);
          setCommentList(res.data.data);
        }
      } else if (postId) {
        // Post Commnet
        console.log("Post Commnet")
        await getCommentList(postId)
          .then((res) => {
            console.log(res.data.data);
            setCommentList(res.data.data);
          })
          .catch((e) => {
            console.log("Post Commnet Error")
            console.error(e)
          })
      }
    }

  
  useEffect(() => {
    const fetch = async () => {
      if(videoId){
        // Video Comment
        console.log("Video Comment")
        const res = await getCommentList(videoId);
        if (res) {
          console.log(res.data.data);
          setCommentList(res.data.data);
        }
      } else if (postId) {
        // Post Commnet
        console.log("Post Commnet")
        await getCommentList(postId)
          .then((res) => {
            console.log(res.data.data);
            setCommentList(res.data.data);
          })
          .catch((e) => {
            console.log("Post Commnet Error")
            console.error(e)
          })
      }
    }
    fetch();
  }, [postId, videoId])

  const handleButtonAtComment = async (cmt, type) => {
    const fetch = async () => {
      if(videoId){
        // Video Comment
        console.log("Video Comment")
        const res = await getCommentList(videoId);
        if (res) {
          console.log(res.data.data);
          setCommentList(res.data.data);
        }
      } else if (postId) {
        // Post Commnet
        console.log("Post Commnet")
        await getCommentList(postId)
          .then((res) => {
            console.log(res.data.data);
            setCommentList(res.data.data);
          })
          .catch((e) => {
            console.log("Post Commnet Error")
            console.error(e)
          })
      }
    }
    let data;
    switch (type) {
      case DELETE:
        data = {
          email: cmt.user_email,
          id: cmt.id,
          videoId: cmt.videoId
        }
        const res_del = await deleteComment(data);
        console.log(res_del)
        if (res_del) {
          fetch()
        }
        break;
      case UPDATE:
        data = {
          email: cmt.user_email,
          id: cmt.id,
          content: cmt.content,
          parentId: cmt.parent_id,
          videoId: cmt.videoId
        }
        const res_udt = await updateComment(data);
        if (res_udt) {
          fetch()
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
        cmt.func = handleButtonAtComment
        console.log(cmt);
        return <Comment key={cmt.id} comment={cmt}></Comment>
      })}

    </Stack>
  )
}