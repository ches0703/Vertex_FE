import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import {
  Stack,
  Container,
} from "@mui/material"
import VideoListCard from "../Comp/VideoListCard"
import VideoCardWide from "../Comp/VideoCardWide"

import { getHistoryAPI } from '../API/Video/HistroyAPI';
import { getLikeVideoListAPI } from '../API/Video/LikeVideoListAPI'

export default function VideoListComp() {
  const category = useSelector((state) => state.category)
  const userData = useSelector((state) => state.user)

  const [videoList, setVideoList] = useState([]);

  const remove = (videoId) => {
    setVideoList(
      videoList.filter(videoData => videoData.video_id !== videoId)
    )
  }


  useEffect(() => {
    setVideoList([]);
    const fetch = async () => {
      if (category.sub === 'History') {
        const result = await getHistoryAPI({
          email: userData.email
        });
        if (result.data.data) {
          console.log(result.data.data)
          setVideoList(result.data.data)
        }
      }
      else {
        const result = await getLikeVideoListAPI({
          email: userData.email
        });
        console.log(result.data)
        if (result.data) {
          const videoData = result.data;
          setVideoList(videoData);
        }
      }
    }
    fetch();
  }, [category.sub, userData])

  return (
    <Container maxWidth="md" >
      {/* Video List Card */}
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <VideoListCard videoListTitle={category.sub}></VideoListCard>
      </Stack>

      {/* List setting btns */}
      <Stack direction="row" justifyContent="flex-end" spacing={1} marginTop="10px">

      </Stack>
      {videoList.map((videoData) => {
        return <VideoCardWide key={videoData.video_id} videoData={videoData} remove={remove} ></VideoCardWide>
      })}
      <Stack>

      </Stack>
    </Container>
  )
}