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

const DELETE = "DELETE";
const UPDATE = "UPDATE";
const REPLY = "REPLY";

export default function Comment({ comment, isReply, hasReply }) {
  const userData = useSelector(state => state.user);

  const [replyCommnetExpand, setReplyCommnetExpand] = useState(false);
  const [replyWriteExpand, setReplyWriteExpand] = useState(false);
  const [profileImg, setProfileImg] = useState(null)

  const handleReplyCommnetExpand = () => {
    setReplyWriteExpand(false)
    setReplyCommnetExpand(!replyCommnetExpand);
  };

  const handleReplyWriteExpand = () => {
    setReplyCommnetExpand(true)
    setReplyWriteExpand(!replyWriteExpand);
  };

  const handleButton = (type) => {
    comment.func(comment, type);
  }

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
              {comment.createdAt}
            </Typography>


            {!isReply && <Button
              variant="text"
              color="white"
              onClick={handleReplyWriteExpand}
              sx={{ padding: "0px", minWidth: 0, marginRight: "5px" }}
            >
              <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                {"Reply"}
              </Typography>
            </Button>}
            {(userData.email === comment.user_email) &&
              <Button variant="text" color="white" sx={{ padding: "0px", minWidth: 0, marginRight: "5px" }}
                onClick={() => { handleButton(UPDATE) }}>
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


    </Box>
  )
}