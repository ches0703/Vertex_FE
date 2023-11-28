import { useEffect, useReducer, useState } from "react";
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
import CircularProgress from '@mui/material/CircularProgress';
import { margin } from "@mui/system";


// Category Values
const THUMBNAIL = "THUMBNAIL";
const VIDEO = "VIDEO";
const INIT = "INIT"

// File State
const initialState = {
  thumbnail: null,
  video: null,
};

// File State Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case INIT: 
      return {
        ...state,
        thumbnail: null,
        video: null,
      }
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

  const [isUpLoading, setIsUpLoading] = useState(false)

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
  const handleUpload = async (e) => {
    e.preventDefault()
    
    setIsUpLoading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("video", video)
    formData.append("thumbnail", thumbnail)
    formData.append("email", userData.email)

    const res = await uploadVideoAPI(formData)
    setIsUpLoading(false)
    handleChange(null, INIT)
    if (res) {
      alert("Video Upload Success")
      onClose()
    } else {
      alert("Video Upload Fail")
      onClose()
    }
    window.location.reload();
  }



  

  return (
    <Stack spacing={2} component="form">

      {/* Cover & loading progress */}
      {isUpLoading && <Box sx={{
        display: "flex",
        zIndex: "9999", 
        position: "fixed", 
        top:"0", left:"0", 
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Box>
          <Box sx={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
            <CircularProgress color="white" size={150} sx={{margin: "0 auto"}}/>
          </Box>
          <Typography sx={{color: "#FFFFFF"}} variant="h4" gutterBottom>
            Uploading...
          </Typography>
        </Box>
      </Box>}

      {/* Video Title */}
      <Box className="Video Name">
        <Typography sx={{ color: "#FFFFFF", }}>
          Video Name
        </Typography>

        <TextField
          disabled={isUpLoading}
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
          disabled={isUpLoading}
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
          disabled={isUpLoading}
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
          disabled={isUpLoading}
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
      {/* <Box className="Specifiy Video List">
        <Typography sx={{ color: "#FFFFFF", }}>
          Specifiy Video List
        </Typography>
        <Select
          disabled={isUpLoading}
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
      </Box> */}

      {/* Bottom Btn */}
      <Stack direction="row" spacing={2}>
        {/* Apply */}
        <Button
          disabled={
            isUpLoading
            || ((video === null) || (thumbnail === null) || (title === ""))
          }
          onClick={handleUpload}
          variant="outlined"
          color="blue"
          sx={{flexGrow: "7"}}
        >
          {modalTitle}
        </Button>
        {/* Cancel */}
        <Button
          disabled={isUpLoading}
          variant="outlined"
          color="red"
          sx={{flexGrow: "3"}}
          onClick={() => {
            handleChange(null, INIT)
            onClose()
          }}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
};

export default VideoUploadModal;
