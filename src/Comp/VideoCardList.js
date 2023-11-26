import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  Stack,
  Button
} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import VideoCard from './VideoCard';

// Home API
import { 
  getHomeVideoListAPI,
  getNewestVideoListAPI,
  getSubscribeVideoListAPI
} from '../API/Video/getMainVideoListAPI';


export default function VideoCardList() {

  const category = useSelector((state) => state.category)
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    // Categeory : Main
    if (category.main === "Main") {
      if (category.sub === "Home") {
        const fetch = async() => {
          const res = await getHomeVideoListAPI()
          console.log(res)
          //setVideoList(res)
        }
        //fetch()
      } else if (category.sub === "Newest") {
        console.log("New")
        const fetch = async() => {
          const res = await getNewestVideoListAPI()
          setVideoList(res.data.data)
        }
        fetch()
      } else if (category.sub === "Subscribe") {
        
      } else {
        
      }
    }
  },[category])


  return (
    <Stack spacing={2} margin="15px">
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {videoList.map((videoData) => {
          return <VideoCard key={videoData.id} videoData={videoData}></VideoCard>
        })}
        
        {/* <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard> */}
      </Stack>
      <Button color="white" size="large" fullWidth variant="outlined" startIcon={<KeyboardDoubleArrowDownIcon />}>
        More
      </Button>
    </Stack>
  )
}