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

// Category Values
const PASSWORD = "PASSWORD";
const OTHER = "OTHER";

const AccountSettingModal = (onClose, title) => {
  const [type, setType] = useState(PASSWORD);
  const handleTypeChange = (TYPE) => setType(TYPE);

  const today = dayjs();
  const [gender, setGender] = useState("female");

  return (
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
        >
          Password
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
            <TextField fullWidth size="small"
              sx={{ marginTop: "5px", }}
            />
          </Box>
          <Box>
            <Typography>New Password</Typography>
            <TextField fullWidth size="small"
              color="white"
              sx={{ marginTop: "5px", }}
            />
          </Box>
          <Box>
            <Typography>Password Check</Typography>
            <TextField fullWidth size="small"
              color="white"
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DatePicker
                  defaultValue={today}
                  views={["year", "month", "day"]}
                />
              </DemoItem>
            </LocalizationProvider>
          </Box>

          {/* Gender */}
          <Box>
            <Typography>
              Gender
            </Typography>
            <RadioGroup
              row
              aria-label="Gender"
              name="row-radio-buttons-group"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <FormControlLabel value="female" control={<Radio color="white" />} label="male" />
              <FormControlLabel value="male" control={<Radio color="white" />} label="female" />
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
