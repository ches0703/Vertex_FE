import {
  Box,
  Button,
  TextField,
} from "@mui/material";

const LoginModal = () => {
  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, pd: 0 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          color="white"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          color="white"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="black"
          sx={{ mt: 3, mb: 2, color: "#FFFFFF" }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default LoginModal;
