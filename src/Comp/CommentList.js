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

import { uploadComment, getCommentList } from '../API/Comment/Video/uploadComment';

export default function CommentList({ videoId }) {
  const userData = useSelector(state => state.user);

  const [commentList, setCommentList] = useState([]);

  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e)
  }

  const handleCommit = async () => {
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
    const res = await getCommentList(videoId);
    if (res) {
      console.log(res.data.data);
      setCommentList(res.data.data);
    }
  }
  useEffect(() => {
    fetch();
  }, [])

  return (
    <Stack sx={{ color: "#FFFFFF" }}>
      <Typography variant="h6" gutterBottom>
        Comment
      </Typography>

      {/* Comment Write */}
      <Box component="form" sx={{ paddingBottom: "15px" }}>
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
      </Box>

      {/* Commnet */}
      {/* <Comment></Comment>
      <Comment hasReply={true}></Comment>
      <Comment></Comment> */}
      {commentList.map(cmt => {
        console.log(cmt);
        return <Comment key={cmt.id} comment={cmt}></Comment>
      })}

    </Stack>
  )
}