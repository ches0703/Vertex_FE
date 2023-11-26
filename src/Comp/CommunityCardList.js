import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Stack,
} from '@mui/material';

import CommunityCard from './CommunityCard';

import { getCommunityPostList } from '../API/Post/getPostListAPI';

export default function CommunityCardList() {

  const category = useSelector((state) => state.category)
  console.log("channelId : ", category.sub);

  // const postList = getCommunityPostList(channelId);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    if (category.main === "Subscribe") {
      const fetch = async () => {
        const response = await getCommunityPostList(category.sub);
        setPostList(response.data.data);
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