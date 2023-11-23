import {
  Box,
  Button,
  TextField,
  Stack,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";

const SignUpModal = () => {
  const today = dayjs();
  const [gender, setGender] = useState('female');

  const [emailMsg, setEmailMsg] = useState("Please Enter Email");
  const [pwdMsg, setPwdMsg] = useState("Please Enter Password");
  const [nameMsg, setNameMsg] = useState("Please Enter Nickname");

  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isName, setIsName] = useState(false);
  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const nameRegex = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g;

  const changeName = (e) => {
    if (e.target.value !== "" && nameRegex.test(e.target.value)) {
      setNameMsg("Nickname only contain numbers and English letters");
      setIsName(false);
      return;
    } else if (e.target.value === "") {
      setNameMsg("Please Enter Nickname");
      setIsName(false);
      return
    } else {
      setIsName(true);
    }
  };
  const changeEmail = (e) => {
    if (e.target.value !== "" && !emailRegex.test(e.target.value)) {
      setEmailMsg("This is not a valid email format.");
      setIsEmail(false);
      return;
    } else if (e.target.value === "") {
      setEmailMsg("Please Enter Email");
      setIsEmail(false);
      return
    } else {
      setIsEmail(true);
    }
  };
  const changePwd = (e) => {
    if (e.target.value !== "" && !passwordRegex.test(e.target.value)) {
      setPwdMsg("Least 8 characters, and Must Contain numbers, English letters, and special characters.");
      setIsPwd(false);
      return;
    } else if (e.target.value === "") {
      setPwdMsg("Please Enter Password");
      setIsPwd(false);
      return
    } else {
      setIsPwd(true);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");

    alert("SignUp Completed");
  };

  return (
    <div>
      <Box
        component="form"
        noValidate
        onSubmit={handleSignUpSubmit}
        sx={{ mt: 3 }}
      >
        <Stack spacing={2}>

          {/* Nickname */}
          <Box>
            <Typography sx={{ color: "#FFFFFF", }}>
              Nickname
            </Typography>
            <TextField
              onChange={changeName}
              fullWidth
              error={!isName}
              helperText={!isName ? nameMsg : ""}
              color="white"
              sx={{ marginTop: "5px", }}
              InputProps={{
                endAdornment: (
                  (isName && <Button variant="outlined" color='white' size='small' sx={{ marginLeft: "10px", width: "150px" }}>
                    DupCheck
                  </Button>)
                ),
              }} />
          </Box>

          {/* Email */}
          <Box>
            <Typography sx={{ color: "#FFFFFF", }}>
              Email
            </Typography>
            <TextField
              onChange={changeEmail}
              fullWidth
              error={!isEmail}
              helperText={!isEmail ? emailMsg : ""}
              color="white"
              sx={{ marginTop: "5px", }}
              InputProps={{
                endAdornment: (
                  (isEmail && <Button variant="outlined" color='white' size='small' sx={{ marginLeft: "10px", width: "150px" }}>
                    DupCheck
                  </Button>)
                ),
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ color: "#FFFFFF", }}>
              Birthday
            </Typography>
            <Box sx={{ marginTop: "5px", }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoItem>
                  <DatePicker
                    defaultValue={today}
                    disablePast
                    views={['year', 'month', 'day']}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: "#FFFFFF", }}>
              Gender
            </Typography>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              sx={{ color: '#FFFFFF', ml: '15px', marginTop: "5px", }}
            >
              <FormControlLabel value="female" control={<Radio color="white" />} label="male" />
              <FormControlLabel value="male" control={<Radio color="white" />} label="female" />
            </RadioGroup>
          </Box>

          <Box>
            <Typography sx={{ color: "#FFFFFF", }}>
              Password
            </Typography>
            <TextField
              onChange={changePwd}
              fullWidth
              error={!isPwd}
              helperText={!isPwd ? pwdMsg : ""}
              color="white"
              type="password"
              sx={{ marginTop: "5px", }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="black"
            sx={{ mt: 3, mb: 2, color: "#FFFFFF" }}
            disabled={!(isEmail && isPwd && isName)}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>

    </div>
  );
};

export default SignUpModal;