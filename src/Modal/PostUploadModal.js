// import { useReducer } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

// const THUMBNAIL = "THUMBNAIL";
// const VIDEO = "VIDEO";
// const initialState = {
//   thumbnail: null,
//   video: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case THUMBNAIL:
//       return {
//         ...state,
//         thumbnail: action.payload,
//       };
//     case VIDEO:
//       return {
//         ...state,
//         video: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const PostUploadModal = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   const { thumbnail, video } = state;

  //   const handleChange = (e, action) => {
  //     dispatch({
  //       type: action,
  //       payload: e,
  //     });
  //   };

  const [thumbnail, setThumbnail] = useState(null);
  const handleChange = (e) => {
    setThumbnail(e);
  };

  return (
    <>
      {/* Video Upload Data */}
      <Box className="Post title">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Post title
        </Typography>
        <TextField
          label="Post title"
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
          }}
        />
      </Box>

      <Box className="Post Detail">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Post Detail
        </Typography>
        <TextField
          label="Post Detail"
          multiline
          rows={5}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
            width: "100%",
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
          onChange={(e) => handleChange(e)}
          sx={{
            marginTop: 0.5,
            marginBottom: 2,
          }}
        />
      </Box>

      <Box
        className="Post Button"
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
          Upload / Update Post
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

export default PostUploadModal;
