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
import deletePostAPI from '../API/Post/deletePost';

export default function CommunityCardList() {

  const category = useSelector((state) => state.category)

  const [postList, setPostList] = useState([]);

  const deletePost = async (postId) => {
    await deletePostAPI({
      postId: postId,
    }).then((res) => {
      console.log(res)
      setPostList(postList.filter(post => post.id !== postId))
    }).catch((e) => {
      console.log("Post Delete Error")
      console.error(e)
    })
  }

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
  }, [category])

  return (
    <Stack margin="15px">
      {postList.map((post) => {
        return (
          <CommunityCard 
            key={post.id} 
            post={post}
            deletePost={deletePost}
            ></CommunityCard>
        )
      })}
    </Stack>
  )
}