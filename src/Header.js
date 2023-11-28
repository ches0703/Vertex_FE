import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/UserReducer"
import { changeMain, changeSub } from "./redux/CategoryReducer";
import {
  TextField,
  Box,
  Button,
  Stack,
  AppBar,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Avatar
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SearchIcon from '@mui/icons-material/Search';

import DefaultModal from "./Modal/DefaultModal";
import VideoUploadModal from "./Modal/VideoUploadModal";
import SignUpModal from "./Modal/SignUpModal";
import LoginModal from "./Modal/LoginModal";

import getUserProfileImgAPI from "./API/UserData/getUserProfileImgAPI";


export default function Header() {

  // dispatch
  const dispatch = useDispatch();

  // user name
  const userData = useSelector((state) => state.user)

  // Login Modal handler
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  // Sign up Modal handler
  const [signUpOpen, setSignUpOpen] = useState(false);
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  // handling Upload Btn_Vd
  const [openUploaVideoModal, setOpenUploadVideoModal] = useState(false);
  const handleVideoUploadModal = () => {
    // 1. 인증 유효 검사
    // 2. 모달창 Open
    setOpenUploadVideoModal(!openUploaVideoModal);
  };

  const [profileImg, setProfileImg] = useState(null)

  // For Logo Click event
  const handleLogoClick = () => {
    dispatch(changeMain("Main"));
    dispatch(changeSub("Home"));
  };

  // Search String
  const [searchString, setSearchString] = useState("")
  const handleSearchStringChange = (e) => {
    setSearchString(e.target.value)
  }
  // search option state & handler
  const [searchOpt, setSearchOpt] = useState("Title");
  const handleSearchOptChange = (e) => {
    setSearchOpt(e.target.value);
  };

  // search Btn handler
  const handleSearch = () => {
    dispatch(changeSub(searchString));
    dispatch(changeMain("Search"));
  }

  // move to my page
  const handleCategoryChainge = () => {
    dispatch(changeMain("Subscribe"));
    dispatch(changeSub(userData.email));
  }

  // handle logout
  const handleLogout = () => {
    dispatch(login({
      email: null,
      name: null,
      profileImg: null
    }))
    sessionStorage.clear()
    window.location.reload('/');
  }


  useEffect(() => {
    if (sessionStorage.userData) {
      dispatch(login(JSON.parse(sessionStorage.userData)))
    }
  }, [dispatch])

  useEffect(() => {
    const fetch = async () => {
      const profileRes = await getUserProfileImgAPI({
        email: userData.email
      })
      if (profileRes) {
        setProfileImg(profileRes.data)
      }
    }
    fetch()
  }, [userData])

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
        <Box
          onClick={handleLogoClick}
          component="img"
          src="./Logo.png"
          sx={{ height: "20px", cursor: "pointer" }}
        ></Box>

        {/* Search */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", width: "40vw", minWidth: "400px" }}
        >
          {/* Search Option */}
          <FormControl
            color="white"
            size="small"
            sx={{ width: "200px", }}
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
            onChange={handleSearchStringChange}
            fullWidth
            id="standard-search"
            label="Search"
            color="white"
            size="small"
          ></TextField>

          {/* Search Btn */}
          <Button
            variant="outlined"
            color="white"
            sx={{ height: "40px", marginRight: "10px" }}
            onClick={handleSearch}
          >
            <SearchIcon />
          </Button>


        </Stack>

        {/* Account & Video Upload Btn */}
        <>

          {/* Logint sign in Btn */}
          {(userData.name == null) ?
            // Before Login
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="outlined"
                color="white"
                sx={{ height: "40px" }}
                onClick={handleLoginOpen}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="white"
                sx={{ height: "40px" }}
                onClick={handleSignUpOpen}
              >
                Sign Up
              </Button>
            </Stack>
            :
            // Login Success
            // Video Upload Btn
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="outlined"
                color="white"
                sx={{ height: "40px", marginRight: "10px" }}
                onClick={handleVideoUploadModal}
              >
                <FileUploadOutlinedIcon />
              </Button>
              <Button
                color="white"
                onClick={() => handleCategoryChainge()}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar src={profileImg} sx={{ height: "35px", width: "35px" }} />
                  <Typography>
                    {userData.name}
                  </Typography>
                </Stack>
              </Button>

              <Button
                onClick={handleLogout}
                color="white">
                logout
              </Button>

            </Stack>
          }

          {/* Video Upload Modal */}
          <DefaultModal
            open={openUploaVideoModal}
            onClose={handleVideoUploadModal}
            title={"Upload Video"}
            children={VideoUploadModal}
          />

          {/* Logint Sign in Modals */}
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

        </>
      </Stack>
    </AppBar >
  );
}
