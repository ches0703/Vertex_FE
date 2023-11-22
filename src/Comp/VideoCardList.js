import {
  Stack
} from '@mui/material';
import VideoCard from './VideoCard';

export default function VideoCardList() {
  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap" padding="15px">
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
       <VideoCard></VideoCard>
       <VideoCard></VideoCard>
    </Stack>
  )
}