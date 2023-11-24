import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Box,
  Stack,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";


// Category Values
const PASSWORD = "PASSWORD";
const OTHER = "OTHER";

// Gender Value
const FEMALE = "female"
const MALE = "male"

// Pwd Regexp
const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

const AccountSettingModal = (onClose, title) => {

  // Account Setting Type
  const [type, setType] = useState(PASSWORD);
  const handleTypeChange = (type) => setType(type);

  // Gender & Birthday Data
  const [gender, setGender] = useState("female");
  const [birthday, setBirthday] = useState("");

  // Pwd Data
  const [currentPwd, setCurrentPwd] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [checkPwd, setCheckPwd] = useState("")


  // Passwoed Valid & Msg
  const [isPwd, setIsPwd] = useState(false);
  const [pwdMsg, setPwdMsg] = useState("Please Enter Pwd");

  // new Pwd Vaild Check func
  const handleChangeNewPwd = (e) => {
    setNewPwd(e.target.value)
    if (e.target.value !== "" && !pwdRegex.test(e.target.value)) {
      setPwdMsg("Least 8 characters, and Must Contain numbers, English letters, and special characters.");
      setIsPwd(false);
      return;
    } else if (e.target.value === "") {
      setPwdMsg("Please Enter Pwd");
      setIsPwd(false);
      return
    } else {
      setIsPwd(true);
    }
  };





  return (
    <Stack sx={{ color: "#FFFFFF" }} spacing={2}>
      {/* User Email */}
      <Box>
        <Typography>Email</Typography>
        <Typography variant="h5">test@mail.com</Typography>
      </Box>

      {/* Select Pwd / Other */}
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          variant="outlined"
          color="white"
          onClick={() => handleTypeChange(PASSWORD)}
        >
          Pwd
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="white"
          onClick={() => handleTypeChange(OTHER)}
        >
          Ohter
        </Button>
      </Stack>

      {type === PASSWORD ? (
        <Stack spacing={2}>
          <Box>
            <Typography>Current Password</Typography>
            <TextField 
              onChange={(e) => {setCurrentPwd(e.target.value)}}
              fullWidth 
              size="small"
              color="white"
              type="password"
              sx={{ marginTop: "5px", }}
            />
          </Box>
          <Box>
            <Typography>New Password</Typography>
            <TextField 
              onChange={handleChangeNewPwd}
              fullWidth 
              size="small"
              error={!isPwd}
              helperText={!isPwd ? pwdMsg : ""}
              color="white"
              type="password"
              sx={{ marginTop: "5px", }}
            />
          </Box>
          <Box>
            <Typography>Password Check</Typography>
            <TextField 
              onChange={(e) => {setCheckPwd(e.target.value)}}
              fullWidth 
              size="small"
              error={!(newPwd === checkPwd)}
              helperText={(!(newPwd === checkPwd)) ? "Does not match" : ""}
              color="white"
              type="password"
              sx={{ marginTop: "5px", }}
            />
          </Box>
        </Stack>
      ) : (
        <Stack spacing={2}>
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
        </Stack>
      )}

      {/* Bottom Btn */}
      <Stack direction="row" spacing={2}>
        {/* Apply */}
        <Button
          variant="outlined"
          color="blue"
          sx={{ flexGrow: "7" }}
        >
          {title} Update
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

export default AccountSettingModal;
