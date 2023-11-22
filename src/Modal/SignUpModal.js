import {
    Box,
    Button,
    TextField,
    Grid,
    FormControlLabel,
    Radio,
    RadioGroup
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

    const [emailMsg, setEmailMsg] = useState("Email Address");
    const [pwdMsg, setPwdMsg] = useState("Password");
    const [nameMsg, setNameMsg] = useState("Your Nickname");
    
    const [isEmail, setIsEmail] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isName, setIsName] = useState(false);
    const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const nameRegex = /^[\s!@#$%^&*(),.?":;`/'+=-_{}|<>]+$/;

    const changeName = (e) => {
        if (e.target.value.length > 0 && nameRegex.test(e.target.value)) {
            setNameMsg("올바른 닉네임을 작성하세요");
            setIsName(false);
            return;
        } else {
            setNameMsg("Your Nickname");
            if (e.target.value.length > 0) setIsName(true);
        }
    };
    const changeEmail = (e) => {
        if (e.target.value.length > 0 && !emailRegex.test(e.target.value)) {
            setEmailMsg("This is not a valid email format.");
            setIsEmail(false);
            return;
        } else {
            setEmailMsg("Email Address");
            if (e.target.value.length > 0) setIsEmail(true);
        }
    };
    const changePwd = (e) => {
        if (e.target.value.length > 0 && !passwordRegex.test(e.target.value)) {
            setPwdMsg("Least 8 characters, and Must Contain numbers, English letters, and special characters.");
            setIsPwd(false);
            return;
        } else {
            setPwdMsg("Password");
            if (e.target.value.length > 0) setIsPwd(true);
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
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            onChange={changeName}
                            required
                            autoFocus
                            fullWidth
                            id="name"
                            label={nameMsg}
                            name="name"
                            autoComplete="name"
                            color="white"
                            InputProps={{
                                endAdornment: (
                                    <Button variant="outlined" color='white' size='small' sx={{ marginLeft: "10px", width: "150px" }}>
                                        DupCheck
                                    </Button>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label={emailMsg}
                            onChange={changeEmail}
                            name="email"
                            autoComplete="email"
                            color="white"
                            InputProps={{
                                endAdornment: (
                                    <Button variant="outlined" color='white' size='small' sx={{ marginLeft: "10px", width: "150px" }}>
                                        DupCheck
                                    </Button>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ color: '#FFFFFF', mt: "10px" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="BirthDate">
                            <DatePicker
                                defaultValue={today}
                                disablePast
                                views={['year', 'month', 'day']}
                            />
                        </DemoItem>
                    </LocalizationProvider>
                </Grid>
                <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    sx={{ color: '#FFFFFF', ml: '15px' }}
                >
                    <FormControlLabel value="female" control={<Radio color="white" />} label="male" />
                    <FormControlLabel value="male" control={<Radio color="white" />} label="female" />
                </RadioGroup>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label={pwdMsg}
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={changePwd}
                        color="white"
                    />
                </Grid>
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
            </Box>

        </div>
    );
};

export default SignUpModal;