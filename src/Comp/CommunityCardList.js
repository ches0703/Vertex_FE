import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Stack,
} from '@mui/material';

import CommunityCard from './CommunityCard';

import getCommunityPostList from '../API/Post/getPostListAPI';
import {
  getMainPostListAPI, 
  getNewestPostListAPI
} from '../API/Post/getMainPostListAPI';

export default function CommunityCardList() {

  const category = useSelector((state) => state.category)

  const [postList, setPostList] = useState([]);

  useEffect(() => {

    // Category : Main
    if (category.main === "Main") {
      if (category.sub === "Home") {
        const fetch = async () => {
          const res = await getMainPostListAPI()
          setPostList(res.data.data)
        }
        fetch()
      } else if (category.sub === "Newest") {
        const fetch = async () => {
          const res = await getNewestPostListAPI()
          setPostList(res.data.data)
        }
        fetch()
      } else if (category.sub === "Subscribe") {

      } else {

      }
    }

    // Category : Sub
    if (category.main === "Subscribe") {
      const fetch = async () => {
        const response = await getCommunityPostList(category.sub);
        setPostList(response);
      }
      fetch();
    }
  }, [category.sub])

  return (
    <Stack margin="15px">
      {postList.map((post) => {
        return <CommunityCard key={post.id} post={post}></CommunityCard>
      })}
    </Stack>
  )
}