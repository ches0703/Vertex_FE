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

const VideoUploadModal = (onClose, title) => {
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
          fullWidth
          color="white"
          size="small"
          sx={{marginTop: "5px",}}
        />
      </Box>
      <Box className="Video Summary">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video Summary
        </Typography>
        <TextField
          multiline
          rows={5}
          fullWidth
          color="white"
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
          value={thumbnail}
          inputProps={{ accept: "image/*" }}
          onChange={(e) => handleChange(e, THUMBNAIL)}
          size="small"
          fullWidth
          color="white"
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
          value={video}
          inputProps={{ accept: "video/*" }}
          onChange={(e) => handleChange(e, VIDEO)}
          size="small"
          fullWidth
          color="white"
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
          fullWidth
          sx={{ marginTop: "5px", }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
      </Box>

      {/* Bottom Btn */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="blue"
          sx={{flexGrow: "7"}}
        >
          {title}
        </Button>
        <Button
          variant="outlined"
          color="red"
          sx={{flexGrow: "3"}}
          onClick={onClose}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
};

export default VideoUploadModal;
