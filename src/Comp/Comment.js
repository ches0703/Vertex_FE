import { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Stack,
  Typography,
  Button,
  Collapse,
  TextField
} from "@mui/material";
import { useSelector } from 'react-redux';
import getUserProfileImgAPI from "../API/UserData/getUserProfileImgAPI";

const DELETE = "DELETE";
const UPDATE = "UPDATE";
const REPLY = "REPLY";

export default function Comment({ comment, isReply, hasReply }) {
  const userData = useSelector(state => state.user);

  const [replyCommnetExpand, setReplyCommnetExpand] = useState(false);
  const [replyWriteExpand, setReplyWriteExpand] = useState(false);
  const [profileImg, setProfileImg] = useState(null)

  const [updateWriteExpand, setUpdateWriteExpand] = useState(false);
  const [updateComment, setUpdateComment] = useState('');

  const handleReplyCommnetExpand = () => {
    setUpdateWriteExpand(false);
    setReplyWriteExpand(false);
    setReplyCommnetExpand(!replyCommnetExpand);
  };

  const handleReplyWriteExpand = () => {
    setUpdateWriteExpand(false);
    setReplyCommnetExpand(false);
    setReplyWriteExpand(!replyWriteExpand);
  };

  const handleUpdateWriteExpand = () => {
    setReplyWriteExpand(false);
    setReplyCommnetExpand(false);
    setUpdateWriteExpand(!updateWriteExpand);
  }

  const handleButton = (type) => {
    comment.func(comment, type);
  }

  const handleUpdate = (e) => {
    setUpdateComment(e);
  }
  const handleUpdateClick = () => {
    comment.content = updateComment;
    handleButton(UPDATE);
    setUpdateComment('');
    setUpdateWriteExpand(!updateWriteExpand);
  }

  useEffect(() => {
    const fetch = async () => {
      const res = await getUserProfileImgAPI({
        email: comment.user_email
      })
      if(res){
        console.log("profil res",res);
        setProfileImg(res.data)
      }
    }
    fetch()
  }, [])

  return (
    <Box sx={isReply && { paddingLeft: "65px" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ padding: "10px 0px", width: "100%", margin: "0px 0px" }}
      >

        <Avatar src={profileImg}
          sx={{ marginRight: "15px", width: "50px", height: "50px" }}
        />

        <Stack>
          <Stack direction="row" alignItems="baseline">
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginRight: "15px" }}>
              {comment.user.name}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5) ", marginRight: "15px" }}>
              {comment.createdAt.substr(0, 10)}
            </Typography>


            {/* {!isReply && <Button
              variant="text"
              color="white"
              onClick={handleReplyWriteExpand}
              sx={{ padding: "0px", minWidth: 0, marginRight: "5px" }}
            >
              <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                {"Reply"}
              </Typography>
            </Button>} */}
            {(userData.email === comment.user_email) &&
              <Button variant="text" color="white" sx={{ padding: "0px", minWidth: 0, marginRight: "5px" }}
                onClick={handleUpdateWriteExpand}>
                <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                  {"/ Update"}
                </Typography>
              </Button>}
            {(userData.email === comment.user_email) &&
              <Button variant="text" color="white" sx={{ padding: "0px", minWidth: 0 }}
                onClick={() => { handleButton(DELETE) }}>
                <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                  {"/ Delete"}
                </Typography>
              </Button>}

          </Stack>
          <Typography variant="body2" color="white">
            {comment.content}
          </Typography>


          {hasReply && <Button variant="text" color="white" onClick={handleReplyCommnetExpand} sx={{ padding: "0px", }}>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
              {"Show Reply"}
            </Typography>
          </Button>}

        </Stack>
      </Stack>

      {/* Reply */}
      {hasReply && <Collapse in={replyCommnetExpand} timeout="auto" unmountOnExit>
        <Comment isReply={true}></Comment>
        <Comment isReply={true}></Comment>
      </Collapse>}

      {/* Reply Write */}
      <Collapse in={replyWriteExpand} timeout="auto" unmountOnExit>
        <Box component="form" sx={{ paddingLeft: "65px", paddingBottom: "15px" }}>
          <TextField
            label={"Reply"}
            fullWidth
            color='white'
            multiline
            maxRows={4}
            InputProps={{
              endAdornment: (
                <Button variant="outlined" color='white' sx={{ marginLeft: "10px", width: "200px" }}>
                  Commit
                </Button>
              ),
            }}
          ></TextField>
        </Box>
      </Collapse>

      {/* Update Write */}
      <Collapse in={updateWriteExpand} timeout="auto" unmountOnExit>
        <Box component="form" sx={{ paddingLeft: "65px", paddingBottom: "15px" }}>
          <TextField
            label={"update"}
            fullWidth
            color='white'
            multiline
            maxRows={4}
            value={updateComment}
            onChange={(e) => handleUpdate(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button variant="outlined" color='white' sx={{ marginLeft: "10px", width: "200px" }}
                  onClick={handleUpdateClick}
                >
                  Update
                </Button>
              ),
            }}
          ></TextField>
        </Box>
      </Collapse>


    </Box>
  )
}