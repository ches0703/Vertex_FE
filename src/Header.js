import { TextField, Box, Button, Stack, AppBar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Header() {

  const [searchOpt, setSearchOpt] = useState('Title');

  const handleSearchOptChange = (event) => {
    setSearchOpt(event.target.value);
  };



  return (
    <AppBar position="sticky" sx={{top:"0", padding: "15px", backgroundImage: "None", backgroundColor: "#2c2c2c"}}>
      <Stack 
        direction="row" 
        alignItems="center" 
        justifyContent="space-between" 
        sx={{flexWrap: "wrap"}}
      >
        {/* Logo */}
        <Box 
          component="img" 
          src="./Logo.png"
          sx={{height:"20px"}}
        ></Box>

        {/* Search */}
        <Box component="form" sx={{ display: "flex", 
                                    width:"40vw", 
                                    minWidth: "400px"}}>
    
          {/* Search Option */}
          <FormControl color='white' size="small" sx={{ width:"200px", 
                                                        marginRight: "10px"}}>
            <Select
              value={searchOpt}
              onChange={handleSearchOptChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={"Title"}>Title</MenuItem>
              <MenuItem value={"Body"}>Body</MenuItem>
              <MenuItem value={"Title + Body"}>Title + Body</MenuItem>
              <MenuItem value={"Hash Tag"}>Hash Tag</MenuItem>
            </Select>
          </FormControl>

          {/* Search String */}
          <TextField 
            fullWidth
            id="standard-search"
            label="Search" 
            color="white" 
            size="small">
          </TextField>

        </Box>


        {/* Account Btn */}
        <Box>
          <Button variant="outlined" color='white' sx={{height: "40px", 
                                                        marginRight: "10px"}}>
            Login
          </Button>
          <Button variant="outlined" color='white' sx={{height: "40px"}}>
            Sign in
          </Button>
        </Box>
      </Stack>
    </AppBar>
  );
}