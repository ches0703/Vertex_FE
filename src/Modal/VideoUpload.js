import { useReducer } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";

const THUMBNAIL = "THUMBNAIL";
const VIDEO = "VIDEO";
const initialState = {
  thumbnail: null,
  video: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case THUMBNAIL:
      return {
        ...state,
        thumbnail: action.payload,
      };
    case VIDEO:
      return {
        ...state,
        video: action.payload,
      };
    default:
      return state;
  }
};

const VideoUpload = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { thumbnail, video } = state;

  const handleChange = (e, action) => {
    dispatch({
      type: action,
      payload: e,
    });
  };

  return (
    <>
      {/* Video Upload Data */}
      <Box className="Video Name">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Video Name
        </Typography>
        <TextField
          label="Video Name"
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
          }}
        />
      </Box>
      <Box className="Video Summary">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Video Summary
        </Typography>
        <TextField
          label="Video Summary"
          multiline
          rows={5}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
          }}
        />
      </Box>

      <Box className="Thumbnail Image">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Thumbnail Image
        </Typography>
        <MuiFileInput
          id="Thumbnail Image"
          value={thumbnail}
          inputProps={{ accept: "image/*" }}
          onChange={(e) => handleChange(e, THUMBNAIL)}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
          }}
        />
      </Box>
      <Box className="Video">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Video
        </Typography>
        <MuiFileInput
          id="Video"
          value={video}
          inputProps={{ accept: "video/*" }}
          onChange={(e) => handleChange(e, VIDEO)}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
          }}
        />
      </Box>
      <Box className="Specifiy Video List">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Specifiy Video List
        </Typography>
        <Select
          id="Specifiy Video List"
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "364px",
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
      </Box>

      <Box
        className="Video Button"
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
          Upload / Update Video
        </Button>
        <div style={{ width: "1%" }}></div>
        <Button
          variant="outlined"
          sx={{
            width: "9%",
          }}
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default VideoUpload;
