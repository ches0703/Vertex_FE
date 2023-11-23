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

import { useState } from "react";

const PASSWORD = "PASSWORD";
const OTHER = "OTHER";

const AccountSettingModal = (onClose) => {
  const [type, setType] = useState(PASSWORD);
  const handleTypeChange = (TYPE) => setType(TYPE);

  const today = dayjs();
  const [gender, setGender] = useState("female");

  return (
    <>
      <Stack sx={{ color: "#FFFFFF" }} spacing={2}>
        {/* User Email */}
        <Box>
          <Typography>Email</Typography>
          <Typography variant="h5">test@mail.com</Typography>
        </Box>

        {/* Select Password / Other */}
        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            variant="outlined"
            color="white"
            onClick={() => handleTypeChange(PASSWORD)}
            sx={{
              height: "25px",
              marginRight: "10px",
            }}
          >
            Password
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="white"
            onClick={() => handleTypeChange(OTHER)}
            sx={{ height: "25px" }}
          >
            Ohter
          </Button>
        </Stack>

        {type === PASSWORD ? (
          <>
            <Box>
              <Typography>Current Password</Typography>
              <TextField fullWidth size="small" />
            </Box>
            <Box>
              <Typography>New Password</Typography>
              <TextField fullWidth size="small" />
            </Box>
            <Box>
              <Typography>Password Check</Typography>
              <TextField fullWidth size="small" />
            </Box>
          </>
        ) : (
          <>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="BirthDate">
                  <DatePicker
                    defaultValue={today}
                    views={["year", "month", "day"]}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Box>
            <Box>
              <RadioGroup
                row
                aria-label="Gender"
                name="row-radio-buttons-group"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                sx={{ color: "#FFFFFF", ml: "15px" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="white" />}
                  label="male"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="white" />}
                  label="female"
                />
              </RadioGroup>
            </Box>
          </>
        )}

        {/* Bottom Btn */}
        <Stack direction="row" spacing={2}>
          {/* Apply */}
          <Button variant="outlined" color="blue" sx={{ flexGrow: "7" }}>
            Update Account
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
    </>
  );
};

export default AccountSettingModal;
