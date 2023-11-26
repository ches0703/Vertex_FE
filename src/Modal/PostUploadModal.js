import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";

const PostUploadModal = (onClose, title) => {

  const [postTitle, setTitle] = useState('');
  const [postContent, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleChange = (e) => { setThumbnail(e); };
  const handleTitleChange = (e) => {
    // console.log(e);
    setTitle(e);
  }
  const handleContentChange = (e) => setContent(e);

  return (
    <Stack spacing={2} sx={{ color: "#FFFFFF", }}>
      {/* Post Title */}
      <Box className="Post title">
        <Typography >
          Post title
        </Typography>
        <TextField
          fullWidth
          color="white"
          size="small"
          sx={{ marginTop: "5px", }}
          value={postTitle}
          onChange={(e) => { handleTitleChange(e.target.value) }}
        />
      </Box>

      {/* Post Body */}
      <Box className="Post Content">
        <Typography>
          Post Content
        </Typography>
        <TextField
          multiline
          rows={5}
          fullWidth
          color="white"
          sx={{ marginTop: "5px", }}
          value={postContent}
          onChange={(e) => { handleContentChange(e.target.value) }}
        />
      </Box>

      <Box className="Hash Tag">
        <Typography>
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
        <Typography>
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
          sx={{ flexGrow: "7" }}
        >
          {title}
        </Button>
        {/* Cancel */}
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
  );
};

export default PostUploadModal;
