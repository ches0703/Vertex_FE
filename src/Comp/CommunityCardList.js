import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Stack,
} from '@mui/material';

import CommunityCard from './CommunityCard';

import { getCommunityPostList } from '../API/Post/getPostList';

export default function CommunityCardList(channelId) {

  const category = useSelector((state) => state.category)
  console.log("channelId : ", channelId);

  // const postList = getCommunityPostList(channelId);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    if (category.main === "Subscribe") {
      const fetch = async () => {
        const response = await getCommunityPostList(channelId);
        setPostList(response);
      }
      fetch();
      console.log("postList : ", postList)
    }
  }, [])

  return (
    <Stack margin="15px">
      <CommunityCard></CommunityCard>
      <CommunityCard></CommunityCard>
      <CommunityCard></CommunityCard>
    </Stack>
  )
}