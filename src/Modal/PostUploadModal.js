// import { useReducer } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack
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

const PostUploadModal = (onClose, title) => {
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
    <Stack spacing={2}>
      {/* Post Title */}
      <Box className="Post title">
        <Typography sx={{ color: "#FFFFFF", }}>
          Post title
        </Typography>
        <TextField
          fullWidth
          color="white"
          size="small"
          sx={{marginTop: "5px",}}
        />
      </Box>

      {/* Post Body */}
      <Box className="Post Detail">
        <Typography sx={{ color: "#FFFFFF", }}>
          Post Detail
        </Typography>
        <TextField
          multiline
          rows={5}
          fullWidth
          color="white"
          sx={{marginTop: "5px", }}
        />
      </Box>

      <Box className="Hash Tag">
        <Typography sx={{ color: "#FFFFFF", }}>
          Hash Tag
        </Typography>
        <TextField
          sx={{
            width: "100%",
          }}
          InputProps={{
            endAdornment: (
              <Button
                variant="outlined"
                size="small"
                color="white"
                sx={{ marginLeft: "10px", width: "150px" }}
              >
                Append Tag
              </Button>
            ),
          }}
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
          onChange={(e) => handleChange(e)}
          size="small"
          fullWidth
          color="white"
          sx={{ marginTop: "5px", }}
        />
      </Box>

      {/* Bottom Btn */}
      <Stack direction="row" spacing={2}>
        {/* Apply */}
        <Button
          variant="outlined"
          color="blue"
          sx={{flexGrow: "7"}}
        >
          {title}
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

export default PostUploadModal;
