import { useReducer } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  Stack
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

const VideoUploadModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { thumbnail, video } = state;

  const handleChange = (e, action) => {
    dispatch({
      type: action,
      payload: e,
    });
  };

  return (
    <Stack spacing={2}>
      {/* Video Upload Data */}
      <Box className="Video Name">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video Name
        </Typography>

        <TextField
          label="Video Name"
          fullWidth
          sx={{marginTop: "5px",}}
        />
      </Box>
      <Box className="Video Summary">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video Summary
        </Typography>
        <TextField
          label="Video Summary"
          multiline
          rows={5}
          fullWidth
          sx={{marginTop: "5px", }}
        />
      </Box>

      {/* Thumbnail uplaod Btn */}
      <Box className="Thumbnail Image">
        <Typography sx={{ color: "#FFFFFF", }}>
          Thumbnail Image
        </Typography>
        <MuiFileInput
          id="Thumbnail Image"
          size="small"
          value={thumbnail}
          inputProps={{ accept: "image/*" }}
          onChange={(e) => handleChange(e, THUMBNAIL)}
          sx={{ marginTop: "5px", }}
        />
      </Box>

      {/* Video Upload Btn */}
      <Box className="Video">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video
        </Typography>
        <MuiFileInput
          id="Video"
          size="small"
          value={video}
          inputProps={{ accept: "video/*" }}
          onChange={(e) => handleChange(e, VIDEO)}
          sx={{ marginTop: "5px", }}
        />
      </Box>


      <Box className="Specifiy Video List">
        <Typography sx={{ color: "#FFFFFF", }}>
          Specifiy Video List
        </Typography>
        <Select
          id="Specifiy Video List"
          size="small"
          color="white"
          sx={{
            width: "30%",
            marginTop: "5px",
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
      </Box>

      {/* Bottom Btn */}
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
          fullWidth
        >
          Upload / Update Video
        </Button>
        <div style={{ width: "1%" }}></div>
        <Button
          variant="outlined"
          color="error"
          fullWidth
        >
          Cancel
        </Button>
      </Box>
    </Stack>
  );
};

export default VideoUploadModal;
