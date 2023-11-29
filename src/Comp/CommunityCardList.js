import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Stack,
  Button
} from '@mui/material';

import CommunityCard from './CommunityCard';

import getCommunityPostList from '../API/Post/getPostListAPI';
import {
  getMainPostListAPI, 
  getNewestPostListAPI
} from '../API/Post/getMainPostListAPI';
import deletePostAPI from '../API/Post/deletePost';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


// Offset
const OFFSET = 3;

export default function CommunityCardList() {

  const category = useSelector((state) => state.category)
  const [page, setPage] = useState(0)
  const [isMore, setIsMore] = useState(true)
  const [postList, setPostList] = useState([]);

  const handleMore = () => {
    setPage(page + 1)
  }

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
    setPage(0)
    setPostList([])
  }, [category])

  useEffect(() => {
    // Category : Main
    if (category.main === "Main") {
      if (category.sub === "Home") {
        const fetch = async () => {
          await getMainPostListAPI({
            page : page
          }).then((res) => {
            setPostList((prevList) => {return prevList.concat(res.data.data)})
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
          await getMainPostListAPI({
            page : page
          }).then((res) => {
            setPostList((prevList) => {return prevList.concat(res.data.data)})
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

      } else {

      }
    }

    // Category : Sub
    if (category.main === "Subscribe") {
      const fetch = async () => {
        await getCommunityPostList({
          channelId: category.sub,
          page: page
        }).then((res) => {
          console.log("res : ", res)
          setPostList((prevList) => {return prevList.concat(res.data.data)})
          if(res.data.data.length < OFFSET){
            setIsMore(false)
          }
        }).catch((e) => {
          console.log("get post List Error")
          console.error(e)
        })
      }
      fetch();
    }
  }, [category, page])

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