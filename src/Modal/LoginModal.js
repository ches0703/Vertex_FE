import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/UserReducer";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography
} from "@mui/material";
import Cookies from "js-cookie";

import LoginAPI from "../API/Accoount/LoginAPI";

const LoginModal = (onClose, title) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePwdChange = (e) => {
    setPwd(e.target.value)
  }

  const handleLogInSubmit = async () => {

    const data = {
      email: email,
      password: pwd 
    }

    const res = await LoginAPI(data)
    const { session: sessionId } = res.data;
    // Cookies에 sessionID 저장
    Cookies.set('connect.sid', sessionId);
    console.log("Login result : ", res)
    if (res){
      dispatch(login(res.data.user))
      onClose()
    } else {
      alert("Login Fail")
    }
  }

  return (
    <div>
      <Stack spacing={2} sx={{ color: "#FFFFFF" }} >

        {/* Email */}
        <Box>
          <Typography>
            Email
          </Typography>
          <TextField
            onChange={handleEmailChange}
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
            color="white"
            sx={{ marginTop: "5px" }}
          />
        </Box>
        
        {/* Password */}
        <Box>
          <Typography>
            Password
          </Typography>
          <TextField
            onChange={handlePwdChange}
            fullWidth
            type="password"
            autoComplete="current-password"
            color="white"
            sx={{ marginTop: "5px" }}
          />
        </Box>

        {/* Bottom Btn */}
        <Stack direction="row" spacing={2}>
          {/* Apply */}
          <Button
            onClick={handleLogInSubmit}
            variant="outlined"
            color="blue"
            disabled={(email === "") || (pwd === "")}
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
    </div>
  );
};

export default LoginModal;
