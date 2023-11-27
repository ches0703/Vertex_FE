import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Stack,
} from '@mui/material';

import CommunityCard from './CommunityCard';

import getCommunityPostList from '../API/Post/getPostListAPI';

export default function CommunityCardList() {

  const category = useSelector((state) => state.category)

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    if (category.main === "Subscribe") {
      const fetch = async () => {
        const response = await getCommunityPostList(category.sub);
        setPostList(response);
      }
      fetch();
    }
  }, [])

  return (
    <Stack margin="15px">
      {postList.map((post) => {
        return <CommunityCard key={post.id} post={post}></CommunityCard>
      })}
    </Stack>
  )
}