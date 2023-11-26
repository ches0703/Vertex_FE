import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import SideMenu from './SideMenu';
import MainComp from './BodyComp/MainComp';
import UserComp from './BodyComp/UserComp';
import VideoListComp from './BodyComp/VideoListComp';
import SearchComp from './BodyComp/SearchComp';
import { useEffect } from 'react';
export default function Body() {

  const category = useSelector((state) => state.category)

  useEffect(() => {
    console.log(category)
  }, [category])

  return(
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={0} flexWrap="nowrap">

        {/* Side Menu */}
        <Grid xs={2} sx={{minWidth: "200px",}}>
          <SideMenu></SideMenu>
        </Grid>


        {/* Body Main Comp */}
        <Grid xs={10} bgcolor="#2c2c2c" padding="15px" overflow="hidden">
          {(category.main === "Main") && <MainComp></MainComp>}
          {(category.main === "Subscribe") && <UserComp></UserComp>}
          {(category.main === "VideoList") && <VideoListComp></VideoListComp>}
          {(category.main === "Search") && <SearchComp searchString={category.sub}></SearchComp>}
        </Grid>

      </Grid>
    </Box>
  )
}