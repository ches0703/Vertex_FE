import { TextField, Box, Button, Stack, AppBar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useState } from "react";
import DefaultModal from "./Modal/DefaultModal";
import VideoUpload from "./Modal/VideoUpload";
import SignUpModal from "./Modal/SignUpModal";
import LoginModal from "./Modal/LoginModal";

export default function Header() {
  const [searchOpt, setSearchOpt] = useState("Title");

  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const [signUpOpen, setSignUpOpen] = useState(false);
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  const handleSearchOptChange = (event) => {
    setSearchOpt(event.target.value);
  };

  /**
   * handling Upload Btn
   */
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const handleVideoUploadModal = () => {
    // 1. 인증 유효 검사
    // 2. 모달창 Open
    setOpenUploadModal(!openUploadModal);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: "0",
        padding: "15px",
        backgroundImage: "None",
        backgroundColor: "#2c2c2c",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ flexWrap: "wrap" }}
      >
        {/* Logo */}
        <Box component="img" src="./Logo.png" sx={{ height: "20px" }}></Box>

        {/* Search */}
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

        {/* Account Btn */}
        <Box>
          {/* Upload Btn */}
          <Button
            variant="outlined"
            color="white"
            sx={{ height: "40px", marginRight: "10px" }}
            onClick={handleVideoUploadModal}
          >
            <FileUploadOutlinedIcon />
          </Button>
          {/* Upload Mdl */}
          <DefaultModal
            open={openUploadModal}
            onClose={handleVideoUploadModal}
            title={"Upload Vedio"}
            children={VideoUpload}
          />

          <Button
            variant="outlined"
            color="white"
            sx={{ height: "40px", marginRight: "10px" }}
            onClick={handleLoginOpen}
          >
            Login
          </Button>
          <Button variant="outlined" color="white" sx={{ height: "40px" }} onClick={handleSignUpOpen}>
            Sign Up
          </Button>
          <DefaultModal
            open={loginOpen}
            onClose={handleLoginClose}
            title="Login"
            children={LoginModal}
          ></DefaultModal>
          <DefaultModal
            open={signUpOpen}
            onClose={handleSignUpClose}
            title="Sign Up"
            children={SignUpModal}
          ></DefaultModal>
        </Box>
      </Stack>
    </AppBar>
  );
}
