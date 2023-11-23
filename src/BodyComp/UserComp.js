import { useState } from 'react';
import {
  TextField,
  Box,
  Button,
  Stack,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import { useSelector } from 'react-redux';

import UserCard from '../Comp/UserCard';
import VideoCardList from '../Comp/VideoCardList';
import CommunityCardList from '../Comp/CommunityCardList';
import VideoListCardList from '../Comp/VideoLsitCardList';

export default function UserComp() {

  const category = useSelector((state) => state.category)
  const [searchOpt, setSearchOpt] = useState("Title");
  const [select, setSelect] = useState("Video")

  const handleSelect = (select) => {
    setSelect(select)
  }

  const handleSearchOptChange = (event) => {
    setSearchOpt(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <UserCard user={category.sub}></UserCard>

      {/* Btns : Video, Video List, Community */}
      <Stack direction="row" spacing={2}>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect("Video") }}
          sx={{ height: "40px", }}>
          Video
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect("VideoList") }}
          sx={{ height: "40px" }}>
          Video List
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect("Community") }}
          sx={{ height: "40px" }}>
          Community
        </Button>
      </Stack>

      {/* Account Setting Btns : Uploaded Post, Update Profile, Account Setting */}
      <Stack direction="row" spacing={2}>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect("UploadedPost") }}
          sx={{ height: "40px", }}>
          Uploaded Post
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect("UpdateProfile") }}
          sx={{ height: "40px" }}>
          Update Profile
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect("AccountSetting") }}
          sx={{ height: "40px" }}>
          Account Setting
        </Button>
      </Stack>

      {/* Search */}
      <Stack direction="row-reverse" sx={{justifyContent: "space-between"}}>

        
        <Box
          component="form"
          sx={{ display: "flex", width: "40vw", minWidth: "400px" }}
        >
          {/* Search Option */}
          <FormControl
            color="white"
            size="small"
            sx={{ width: "200px", marginRight: "10px" }}
          >
            <Select
              value={searchOpt}
              onChange={handleSearchOptChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Title"}>Title</MenuItem>
              <MenuItem value={"Body"}>Body</MenuItem>
              <MenuItem value={"Title + Body"}>Title + Body</MenuItem>
              <MenuItem value={"Hash Tag"}>Hash Tag</MenuItem>
            </Select>
          </FormControl>

          {/* Search String */}
          <TextField
            fullWidth
            id="standard-search"
            label="Search"
            color="white"
            size="small"
          ></TextField>
        </Box>

        {(select === "Community") && <Button
          fullWidth
          sx={{ width:"150px" }}
          color='white'
          variant="outlined"
          onClick={() => { }}>
          Upload Post
        </Button>}


      </Stack>

      {(select === "Video") && <VideoCardList></VideoCardList>}
      {(select === "VideoList") && <VideoListCardList></VideoListCardList>}
      {(select === "Community") && <CommunityCardList></CommunityCardList>}
      {(select === "UploadedPost") && <CommunityCardList></CommunityCardList>}



    </Stack>
  )
}