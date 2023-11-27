import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import {
  Stack,
  Button,
  Container,
} from "@mui/material"
import VideoListCard from "../Comp/VideoListCard"
import VideoCardWide from "../Comp/VideoCardWide"

import { getHistory, getLiked } from '../API/Video/getHistroyAPI'

export default function VideoListComp() {
  const category = useSelector((state) => state.category)
  const userData = useSelector((state) => state.user)

  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setVideoList([]);
    const fetch = async () => {
      if (category.sub === 'History') {
        const result = await getHistory(userData.email);
        console.log(result.data.data)
        setVideoList(result.data.data)
      }
      // else{
      //   const result = await getLiked(userData.email);
      // }
    }
    fetch();
  }, [category.sub])

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
        return <VideoCardWide key={videoData.id} videoData={videoData}></VideoCardWide>
      })}
      <Stack>

      </Stack>
    </Container>
  )
}