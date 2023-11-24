import {
  Box,
  Button,
  TextField,
  Stack,
  Typography
} from "@mui/material";

const LoginModal = (onClose, title) => {
  return (
    <div>
      <Stack spacing={2} sx={{ color: "#FFFFFF" }}>

        {/* Email */}
        <Box>
          <Typography>
            Email
          </Typography>
          <TextField
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
    </div>
  );
};

export default LoginModal;
