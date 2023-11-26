import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
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
import uploadVideoAPI from "../API/Video/uploadVideoAPI";
;

// Category Values
const THUMBNAIL = "THUMBNAIL";
const VIDEO = "VIDEO";

// File State
const initialState = {
  thumbnail: null,
  video: null,
};

// File State Reducer
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

const VideoUploadModal = (onClose, modalTitle) => {

  const userData = useSelector((state) => state.user)

  // Video & file Data & Handler
  const [state, dispatch] = useReducer(reducer, initialState);
  const { thumbnail, video } = state;
  const handleChange = (e, action) => {
    dispatch({
      type: action,
      payload: e,
    });
  };

  // Video Data 
  const [title, setVideoTitle] = useState("")
  const [description, setDescription] = useState("")

  // Video Data handler
  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  // Video Upload handler
  const handleUpload = async () => {
    
    const data = {
      title,
      description,
      video,
      thumbnail,
      // uploader : userData.email
    }
    
    // const formData = new FormData()
    // formData.append("title", title)
    // formData.append("description", description)
    // formData.append("video", video)
    // formData.append("thumbnail", thumbnail)

    const res = await uploadVideoAPI(data)
    console.log(res)

  }

  

  return (
    <Stack spacing={2} component="form">

      {/* Video Title */}
      <Box className="Video Name">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video Name
        </Typography>

        <TextField
          onChange={handleTitleChange}
          fullWidth
          color="white"
          size="small"
          sx={{marginTop: "5px",}}
        />
      </Box>

      {/* Video Description */}
      <Box className="Video Summary">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video Summary
        </Typography>
        <TextField
          onChange={handleDescriptionChange}
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

      {/* Append Video List */}
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
        {/* Apply */}
        <Button
          onClick={handleUpload}
          variant="outlined"
          color="blue"
          sx={{flexGrow: "7"}}
        >
          {modalTitle}
        </Button>
        {/* Cancel */}
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
