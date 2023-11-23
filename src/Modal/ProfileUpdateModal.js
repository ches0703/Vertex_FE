import { useReducer } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
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
          label="Nick Name"
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
          }}
        />
      </Box>
      <Box className="Introduction">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Introduction
        </Typography>
        <TextField
          label="Introduction"
          multiline
          rows={5}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
          }}
        />
      </Box>

      <Box className="Profile Image">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Profile Image
        </Typography>
        <MuiFileInput
          id="Profile Image"
          value={profile}
          inputProps={{ accept: "image/*" }}
          onChange={(e) => handleChange(e, PROFILE)}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
          }}
        />
      </Box>
      <Box className="Channel Card Image">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
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
            marginTop: 0.5,
            marginBottom: 2,
          }}
        />
      </Box>

      <Box className="Hash Tag">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Hash Tag
        </Typography>
        <TextField
          label="Hash Tag"
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
          }}
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

      <Box
        className="Profile Button"
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "90%",
          }}
        >
          {title}
        </Button>
        <div style={{ width: "1%" }}></div>
        <Button
          variant="outlined"
          sx={{
            width: "9%",
          }}
          color="error"
          onClick={onClose}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default ProfileUpdateModal;
