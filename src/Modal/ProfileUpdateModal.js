import { useReducer } from "react";
import { Button, TextField, Typography, Box, Stack } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

const PROFILE = "PROFILE";
const CHANNELCARD = "CHANNELCARD";
const initialState = {
  profile: null,
  channelCard: null,
};
const reducer = (state, action) => {
  switch (action.type) {
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
      return state;
  }
};

const ProfileUpdateModal = (onClose, title) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { profile, channelCard } = state;

  const handleChange = (e, action) => {
    dispatch({
      type: action,
      payload: e,
    });
  };

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
            sx={{ marginTop: "5px", }}
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

        <Box className="Hash Tag">
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
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="blue"
            sx={{ flexGrow: "7" }}
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
