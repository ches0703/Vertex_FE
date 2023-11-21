import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import SideMenu from './SideMenu';
import MainComp from './BodyComp/MainComp';
export default function Body() {
  return(
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={0} flexWrap="nowrap">

        {/* Side Menu */}
        <Grid xs={2} sx={{minWidth: "200px",}}>
          <SideMenu></SideMenu>
        </Grid>


        {/* Body Main Comp */}
        <Grid xs={10} bgcolor="#2c2c2c" padding="15px" overflow="hidden">
          <MainComp></MainComp>
        </Grid>

      </Grid>
    </Box>
  )
}