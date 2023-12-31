import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import {
  IconButton,
  Box,
  Modal,
  Avatar,
  Typography,
  Button,
  Collapse,
  Stack
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import CommentList from "../Comp/CommentList";
import VideoCard from "../Comp/VideoCard";
import getVideoAPI from "../API/Video/getVideoAPI";
import getUserProfileImgAPI from "../API/UserData/getUserProfileImgAPI";
import { getUnsubscribeAPI, getSubscribeAPI, getCheckSubscribeAPI } from "../API/Subscription/SubscribeAPI";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  videoLikeAPI,
  videoLikeCheck
} from "../API/Video/videoLikeAPI";
import { recommendVideoAPI } from "../API/Video/recommendVideoAPI";
import { useDispatch } from 'react-redux';
import { changeMain, changeSub } from "../redux/CategoryReducer"
import { render } from "../redux/UserReducer";

export default function VideoModal({ handleCloseModal, videoData, deleteVideo }) {

  const userData = useSelector((state) => state.user)

  const [commnetExpand, setCommnetExpand] = useState(false);
  const [isLiked, setIsLiked] = useState(false)
  const [isSub, setIsSub] = useState(false)
  const [recVideo, setRecVideo] = useState([])

  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };
  const [video, setVideo] = useState(null)
  const [profileImg, setProfileImg] = useState(null)

  useEffect(() => {
    console.log("video Data : ", videoData)
    const fetch = async () => {

      // video like user Subscirbe check
      if(userData.email !== null){
        // like Check
        
        const likeRes = await videoLikeCheck({
          email: userData.email,
          videoId: videoData.id,
        })
        if (likeRes) {
          // console.log("like check : ", likeRes)
          setIsLiked(likeRes.data)
        }

        // Subscirbe check
        // console.log("sub check start")
        await getCheckSubscribeAPI({
          channelId: videoData.user_email,
          userId: userData.email
        }).then((res) => {
          setIsSub(res.data)
        }).catch((e) => {
          console.log("Subscirbe check Error")
          console.error(e)
        })

      }

      // video get
      const videoRes = await getVideoAPI({
        email: userData.email,
        videoId: videoData.id,
        isYoutube: videoData.is_youtube,
        videoFileExtension: videoData.video_file_extension
      })
      if (videoRes) {
        setVideo(videoRes.data)
      }
      if (videoData.is_youtube === 1) {
        setVideo(videoData.id)
      } 
      

      // uploader profile
      const profileRes = await getUserProfileImgAPI({
        email: videoData.user_email
      })
      if (profileRes) {
        setProfileImg(profileRes.data)
      }

      // Rec Video
      await recommendVideoAPI({
        title: videoData.title
      }).then((res) => {
        // console.log(res.data)
        setRecVideo(res.data)
      })

    }
    fetch();
  }, [videoData, userData])

  const handleLike = async () => {
    await videoLikeAPI({
      videoId: videoData.id,
      email: userData.email
    }).then((res) => {
      videoData.like_count = res.data
      setIsLiked(!isLiked)
    }).catch((e) => {
      console.log("Handle Like Error : ")
      console.error(e)
    })
  }

  const handlesubscribe = async () => {
    if(isSub){
      await getUnsubscribeAPI({
        userId: userData.email,
        channelId: videoData.user_email,
      }).then((res) => {
        setIsSub(false);
      })
    } else {
      console.log("sub Start")
      await getSubscribeAPI({
        channelId: videoData.user_email,
        userId: userData.email
      }).then((res) => {
        setIsSub(true)
      }).catch((e) => {
        console.log("Handle Sub Error : ")
        console.error(e)
      })
    }
    dispatch(render())
  }

  // Delete Video
  const handelDelete = () => {
    deleteVideo(videoData.id)  
    handleCloseModal()
  }

  const dispatch = useDispatch();
  /**
   * move to uploader's channel
   */
  const handleCategoryChange = (sub) => {
    dispatch(changeMain("Subscribe"));
    dispatch(changeSub(sub));
  }



  return (
    <Modal
      open={true}
      onClose={handleCloseModal}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF"
      }}
    >

      {/* Modal Window */}
      <Box
        sx={{
          padding: "10px",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "90vw",
          maxHeight: "90vh",
          backgroundColor: "#2c2c2c",
          overflowY: "auto",
          overflowX: "hidden",
          borderRadius: "10px",
        }}
      >

        <Stack direction="row">

          <Box sx={{ width: "100%" }}>
            <Stack direction="row">
              {/* Video Player */}
              <ReactPlayer
                url={video}
                volume={0.5}
                width="100%"
                height="calc(90vh - 20px)"
                controls={true}
              />
              {/* Related Video */}
              <Stack marginLeft="10px" sx={{ height: "calc(90vh - 20px)", padding: "auto" }}>
                <Typography variant="h6" sx={{ padding: "0px 16px" }}>
                  Related Video
                </Typography>
                {/* <VideoCard videoData={videoData}></VideoCard>
                <VideoCard videoData={videoData}></VideoCard>
                <VideoCard videoData={videoData}></VideoCard> */}
                {recVideo.map((videoData) => {
                  return (
                    <VideoCard
                      key={videoData.id}
                      videoData={videoData}
                      deleteVideo={deleteVideo}
                    ></VideoCard>
                  )
                }) }
              </Stack>
            </Stack>

            <Stack direction="row" marginTop="10px" flexWrap="wrap">
              {/* Video Info */}
              <Box sx={{ maxWidth: "60vw", minWidth: "400px", marginBottom: "15px", flexGrow: "6" }}>
                <Typography variant="h5"  >
                  {videoData.title}
                </Typography>
                <Box>
                  <Typography variant="caption" sx={{ marginRight: "15px", color: "rgba(255,255,255,0.5)" }}>
                    Upload Date : {videoData.createdAt.substr(0, 10)}
                  </Typography>
                  <Typography variant="caption" sx={{ marginRight: "15px", color: "rgba(255,255,255,0.5)" }}>
                    Watch : {videoData.view_count}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  {videoData.description}
                </Typography>
              </Box>

              <Box sx={{ margin: "auto 0px", flexGrow: "4" }}>
                <Stack direction="row">
                  <Button fullWidth sx={{
                    justifyContent: "flex-start"
                  }}
                    color="white"
                    onClick={() => handleCategoryChange(videoData.user_email)}
                  >
                    <Avatar
                      src={profileImg}
                      sx={{ width: "70px", height: "70px" }}>
                    </Avatar>
                    <Box paddingLeft="25px" textAlign="left">
                      <Typography variant="h6" marginTop="10px" >
                        {videoData.name}
                      </Typography>
                      {/* <Typography variant="caption" display="block" gutterBottom sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                        Subscribers
                      </Typography> */}
                    </Box>
                  </Button>
                </Stack>
                {(userData.email) && (videoData.user_email !== userData.email) && <Button
                  onClick={handlesubscribe}
                  fullWidth
                  //color='white'
                  color={isSub?"error":"white"}
                  variant="outlined"
                  sx={{ marginTop: "15px" }}
                >
                  {isSub?"Cancel Subscribe":"Subscribe"}
                </Button>}
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack direction="row" marginTop="15px" spacing={2}>
          {(userData.email) && <Button
            onClick={handleLike}
            color={isLiked ? "error" : "white"}
            variant="outlined"
            startIcon={isLiked ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
            >
            {isLiked ? "Like Cancel" : "Like"} : {videoData.like_count}
          </Button>}

          <Button
            color='white'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Comment
          </Button>

          {(videoData.user_email === userData.email) &&<Button
            color='error'
            variant="outlined"
            startIcon={<DeleteForeverIcon />}
            onClick={handelDelete}>
            Delete
          </Button>}

        </Stack>


        {/* Comment Comp */}
        <Collapse in={commnetExpand} timeout="auto" unmountOnExit sx={{ marginTop: "15px" }}>
          <CommentList videoId={videoData.id}></CommentList>
        </Collapse>

        <IconButton onClick={handleCloseModal} sx={{ position: "absolute", top: "0px", right: "0px" }}>
          <CloseIcon />
        </IconButton>

      </Box>
    </Modal>
  )
}