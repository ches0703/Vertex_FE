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
import getUserVideoListAPI from '../API/Video/getUserVideoListAPI';
import deleteVideoAPI from '../API/Video/deleteVideoAPI';


export default function VideoCardList() {

  const category = useSelector((state) => state.category)
  const [videoList, setVideoList] = useState([])

  const deleteVideo = async (videoId) => {
    await deleteVideoAPI({
      videoId: videoId
    }).then((res) => {
      console.log(res)
      setVideoList(videoList.filter(video => video.id !== videoId))
      alert("Video Delete Success")
    }).catch((e) => {
      console.log("Video Delete Error")
      console.error(e)
      alert("Video Delete Fail")
    })
  }


  useEffect(() => {
    // Categeory : Main
    if (category.main === "Main") {
      if (category.sub === "Home") {
        const fetch = async () => {
          const res = await getHomeVideoListAPI()
          setVideoList(res.data.data)
        }
        fetch()
      } else if (category.sub === "Newest") {
        const fetch = async () => {
          const res = await getNewestVideoListAPI()
          setVideoList(res.data.data)
        }
        fetch()
      } else if (category.sub === "Subscribe") {
        
      }
    } else if(category.main === "Subscribe"){
      const fetch = async () => {
        const res = await getUserVideoListAPI({
          channelId: category.sub
        })
        setVideoList(res.data.data)
      }
      fetch()
    }
  }, [category])


  return (
    <Stack spacing={2} margin="15px">
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {videoList.map((videoData) => {
          return (
            <VideoCard 
              key={videoData.id} 
              videoData={videoData}
              deleteVideo={deleteVideo}
              ></VideoCard>
          )
        })}
      </Stack>
      <Button color="white" size="large" fullWidth variant="outlined" startIcon={<KeyboardDoubleArrowDownIcon />}>
        More
      </Button>
    </Stack>
  )
}