import { useState } from "react";
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

// API
import SignUpAPI from "../API/Accoount/SignUpAPI";
import CheckDupEmail from "../API/Accoount/CheckDupEmail";

// Regexp
const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
const nameRegex = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g;

// Gender Value
const FEMALE = "female"
const MALE = "male"

const SignUpModal = (onClose, title) => {
  // UserData
  const [gender, setGender] = useState(FEMALE);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [birthday, setBirthday] = useState("");
  
  // Vaild Check
  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPwd, setIsPwd] = useState(false);

  // Vaild Msg
  const [emailMsg, setEmailMsg] = useState("Please Enter Email");
  const [pwdMsg, setPwdMsg] = useState("Please Enter Pwd");
  const [nameMsg, setNameMsg] = useState("Please Enter Nickname");

  // Name Vaild Check func
  const handleChangeName = (e) => {
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
      setName(e.target.value)
    }
  };

  // Email Vaild Check func
  const handleChangeEmail = (e) => {
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
      setEmail(e.target.value)
    }
  };

  // Pwd Vaild Check func
  const handleChangePwd = (e) => {
    if (e.target.value !== "" && !pwdRegex.test(e.target.value)) {
      setPwdMsg("Least 8 characters, and Must Contain numbers, English letters, and special characters.");
      setIsPwd(false);
      return;
    } else if (e.target.value === "") {
      setPwdMsg("Please Enter Password");
      setIsPwd(false);
      return
    } else {
      setIsPwd(true);
      setPwd(e.target.value)
    }
  };

  // Dup Check
  const [isEmailDup, setIsEmailDup] = useState(false)
  const hadleEmailDupCheck = async () => {
    console.log(">>", email)
    const result =  await CheckDupEmail(name)
    console.log("Result", result)
  }


  // Sign Up Apply
  const handleSignUpSubmit = async () => {
    const data = {
      email: email,
      name: name,
      password: pwd,
      birthday: birthday,
      gender: gender
    }
    const res = await SignUpAPI(data)
    if (res) {
      alert("Sign up Success")
    } else {
      alert("Sign up Fail")
    }
    onClose()
  };

  return (

    <Stack sx={{ color: "#FFFFFF" }} spacing={2}>

      {/* Nickname */}
      <Box>
        <Typography>
          Nickname
        </Typography>
        <TextField
          onChange={handleChangeName}
          fullWidth
          error={!isName}
          helperText={!isName ? nameMsg : ""}
          color="white"
          sx={{ marginTop: "5px", }}
          />
      </Box>

      {/* Email */}
      <Box>
        <Typography>
          Email
        </Typography>
        <TextField
          onChange={handleChangeEmail}
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

      {/* Birthday */}
      <Box>
        <Typography>
          Birthday
        </Typography>
        <Box sx={{ marginTop: "5px", }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoItem >
              <DatePicker
                defaultValue={dayjs()}
                format="YYYY-MM-DD"
                disableFuture
                views={['year', 'month', 'day']}
                onChange={(date) => {
                  setBirthday(dayjs(date).format("YYYY-MM-DD"))
                }}
              />
            </DemoItem>
          </LocalizationProvider>
        </Box>
      </Box>

      {/* Gender */}
      <Box>
        <Typography>
          Gender
        </Typography>
        <RadioGroup
          row
          aria-label="gender"
          name="row-radio-buttons-group"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <FormControlLabel value={FEMALE} control={<Radio color="white" />} label="Female" />
          <FormControlLabel value={MALE} control={<Radio color="white" />} label="Male" />
        </RadioGroup>
      </Box>

      {/* Pwd */}
      <Box>
        <Typography>
          Password
        </Typography>
        <TextField
          onChange={handleChangePwd}
          fullWidth
          error={!isPwd}
          helperText={!isPwd ? pwdMsg : ""}
          color="white"
          type="password"
          sx={{ marginTop: "5px", }}
        />
      </Box>

      {/* Bottom Btn */}
      <Stack direction="row" spacing={2}>
        {/* Apply */}
        <Button
          onClick={handleSignUpSubmit}
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

export default SignUpModal;