import { useReducer } from "react";
import { useSelector } from 'react-redux';
import { Button, TextField, Typography, Box, Stack } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

import { updateProfile } from '../API/UserData/updateProfileAPI';

const NICKNAME = "NICKNAME";
const INTRODUCTION = "INTRODUCTION";
const PROFILE = "PROFILE";
const CHANNELCARD = "CHANNELCARD";
const initialState = {
  nickName: '',
  introduction: '',
  profile: null,
  channelCard: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case NICKNAME:
      return {
        ...state,
        nickName: action.payload,
      };
    case INTRODUCTION:
      return {
        ...state,
        introduction: action.payload,
      };
    case PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CHANNELCARD:
      return {
        ...state,
        channelCard: action.payload,
      };
    default:
      return {
        nickName: '',
        introduction: '',
        profile: null,
        channelCard: null
      };
  }
};

const ProfileUpdateModal = (onClose, title) => {
  const userData = useSelector(state => state.user);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { nickName, introduction, profile, channelCard } = state;

  const handleChange = (e, action) => {
    const payload = (action === "INIT" || action === PROFILE || action === CHANNELCARD) ? e : e.target.value;
    dispatch({
      type: action,
      payload: payload,
    });
  };

  const handleUpdate = async () => {

    const data = new FormData()
    data.append("email", userData.email);
    data.append("name", (nickName.trim() === '') ? null : nickName);
    data.append("description", (introduction.trim() === '') ? " " : introduction);
    data.append("profileImage", profile);
    data.append("channelImage", channelCard);

    const result = await updateProfile(data);

    console.log(result);
    if (result) {
      alert("Profile Update Success")
      handleChange(null, "INIT");
      window.location.reload();
      onClose()
    } else {
      alert("Profile Update Fail")
      onClose()
    }
  }

  return (
    <>
      <Stack spacing={2}>
        {/* Video Upload Data */}
        <Box className="Nick Name">
          <Typography
            sx={{
              color: "#FFFFFF",
              marginTop: 2,
            }}
          >
            Nick Name
          </Typography>
          <TextField
            fullWidth
            color='white'
            size='small'
            onChange={(e) => handleChange(e, NICKNAME)}
            sx={{ marginTop: "5px", }}
            defaultValue={userData.name}
          />
        </Box>
        <Box className="Introduction">
          <Typography sx={{ color: "#FFFFFF", }}
          >
            Introduction
          </Typography>
          <TextField
            fullWidth
            color='white'
            size='small'
            value={introduction}
            onChange={(e) => handleChange(e, INTRODUCTION)}
            sx={{ marginTop: "5px", }}
          />
        </Box>

        <Box className="Profile Image">
          <Typography
            sx={{ color: "#FFFFFF", }}
          >
            Profile Image
          </Typography>
          <MuiFileInput
            id="Profile Image"
            value={profile}
            inputProps={{ accept: "image/*" }}
            onChange={(e) => handleChange(e, PROFILE)}
            sx={{
              marginTop: "5px",
            }}
            size='small'
            fullWidth
            color='white'
          />
        </Box>
        <Box className="Channel Card Image">
          <Typography
            sx={{
              color: "#FFFFFF",
            }}
          >
            Channel Card Image
          </Typography>
          <MuiFileInput
            id="Channel Card Image"
            value={channelCard}
            inputProps={{ accept: "image/*" }}
            onChange={(e) => handleChange(e, CHANNELCARD)}
            sx={{
              marginTop: "5px",
            }}
            size='small'
            fullWidth
            color='white'
          />
        </Box>

        {/* <Box className="Hash Tag">
          <Typography
            sx={{
              color: "#FFFFFF",
            }}
          >
            Hash Tag
          </Typography>
          <TextField
            fullWidth
            color="white"
            size="small"
            sx={{ marginTop: "5px", }}
            InputProps={{
              endAdornment: (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ marginLeft: "10px", width: "150px" }}
                >
                  Append Tag
                </Button>
              ),
            }}
          />
        </Box> */}

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="blue"
            disabled={(nickName === "")}
            sx={{ flexGrow: "7" }}
            onClick={handleUpdate}
          >
            {title}
          </Button>
          <Button
            variant="outlined"
            color="red"
            sx={{ flexGrow: "3" }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ProfileUpdateModal;
