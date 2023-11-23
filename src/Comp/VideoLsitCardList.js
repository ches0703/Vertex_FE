import { useState } from "react";
import { Stack } from "@mui/material";
import VideoListCard from "./VideoListCard";

export default function VideoListCardList() {

  
  const [videoListList, setVideoListList] = useState(["List01", "List02", "List03", "List04"])

  return(
    <Stack spacing={2}>
      {videoListList.map((videoList) => {
        return ( <VideoListCard videoListTitle={videoList}></VideoListCard>)
      })}
    </Stack>
  )
}