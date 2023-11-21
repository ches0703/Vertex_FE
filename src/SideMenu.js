import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import MainCat from './SideMenu/MainCat';
import VideoListCat from './SideMenu/VideoListCat';


export default function SideMenu() {

  return(
    <Box position='sticky' sx={{top:"70px", 
                                width: '100%', 
                                maxWidth: 360, 
                                bgcolor: '#2c2c2c', 
                                height:"calc(100vh - 70px)", 
                                overflowY: 'scroll'}}>

        {/* Main */}
        <MainCat></MainCat>
        <Divider />

        {/* Video List */}
        <VideoListCat></VideoListCat>
        <Divider />


        <></>


    </Box>
  )
}