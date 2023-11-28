import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { useSelector } from 'react-redux';

import MainCat from './SideMenu/MainCat';
import VideoListCat from './SideMenu/VideoListCat';
import SubscribeCat from './SideMenu/SubscribeCat';


export default function SideMenu() {

  const userData = useSelector(state => state.user);

  return(
    <Box position='sticky' sx={{top:"70px", 
                                width: '100%',  
                                bgcolor: '#2c2c2c', 
                                height:"calc(100vh - 70px)", 
                                overflowY: 'scroll'}}>

        {/* Main */}
        <MainCat></MainCat>
        <Divider />

        {/* Video List */}
        {(userData.email) && <VideoListCat></VideoListCat>}
        <Divider />

        {/* Subscribe */}
        {(userData.email) && <SubscribeCat></SubscribeCat>}


    </Box>
  )
}