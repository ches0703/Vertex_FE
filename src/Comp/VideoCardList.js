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

// Offset
const OFFSET = 12;

export default function VideoCardList() {

  const category = useSelector((state) => state.category)
  const userData = useSelector((state) => state.user)
  const [page, setPage] = useState(0)
  const [videoList, setVideoList] = useState([])
  const [isMore, setIsMore] = useState(true)

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
    //setPage(1)
    setVideoList([])
  }, [category])

  
  useEffect(() => {
    // Categeory : Main
    if (category.main === "Main") {
      if (category.sub === "Home") {
        const fetch = async () => {
          await getHomeVideoListAPI({
            page : page
          }).then((res) => {
            setVideoList((prevList) => {return prevList.concat(res.data.data)})
            if(res.data.data.length < OFFSET){
              setIsMore(false)
            }
          }).catch((e) => {
            console.log("get Home Video List Error")
            console.error(e)
          })
        }
        fetch()
      } else if (category.sub === "Newest") {
        const fetch = async () => {
          await getNewestVideoListAPI({
              page : page
            }).then((res) => {
            setVideoList((prevList) => {return prevList.concat(res.data.data)})
            if(res.data.data.length < OFFSET){
              setIsMore(false)
            }
          }).catch((e) => {
            console.log("get Home Video List Error")
            console.error(e)
          })
        }
        fetch()
      } else if (category.sub === "Subscribe") {
        const fetch = async () => {
          await getSubscribeVideoListAPI({
            userId: userData.email,
            page : page
          }).then((res) => {
            setVideoList((prevList) => {return prevList.concat(res.data.data)})
            if(res.data.data.length < OFFSET){
              setIsMore(false)
            }
          }).catch((e) => {
            console.log("get Home Video List Error")
            console.error(e)
          })
        }
        fetch()
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
  }, [category, page])

  const handleMore = () => {
    setPage(page + 1)
  }


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
      {isMore && (
        <Button 
          onClick={handleMore}
          color="white" 
          size="large" 
          fullWidth 
          variant="outlined" 
          startIcon={<KeyboardDoubleArrowDownIcon />}>
        More
      </Button>)}
    </Stack>
  )
}