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
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import CommentList from "../Comp/CommentList";
import VideoCard from "../Comp/VideoCard";
import getVideoAPI from "../API/Video/getVideoAPI";

import {
  videoLikeAPI,
  videoLikeCheck
} from "../API/Video/videoLikeAPI";

export default function VideoModal({ handleCloseModal, videoData }) {

  const userData = useSelector((state) => state.user)

  const [commnetExpand, setCommnetExpand] = useState(false);
  const [isLiked, setIsLiked] = useState(false)

  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };

  const [video, setVideo] = useState(null)
  useEffect(() => {
    const fetchVideo = async () => {

      // video like get
      const likeRes = await videoLikeCheck({
        email: userData.email,
        videoId: videoData.id
      })
      if (likeRes) {
        setIsLiked(likeRes.data)
      }

      // video get
      const videoRes = await getVideoAPI({
        email: userData.email,
        videoId: videoData.id
      })
      if (videoRes) {
        const url = URL.createObjectURL(videoRes.data);
        setVideo(url)
        // Blob URL을 해제해 메모리 누수를 방지합니다.
        return () => URL.revokeObjectURL(url);
      }

    }
    fetchVideo();
    console.log("modal render",videoData)
    console.log("isLiked", isLiked)
  }, [isLiked])

  const handleLike = async() => {
    const res = await videoLikeAPI({
      email: userData.email,
      videoId: videoData.id 
    })
    setIsLiked(!isLiked)
    console.log(res)
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
          padding: "15px",
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
                //url={"https://youtu.be/KxCpYYwtQD4"}
                url={video}
                volume={0.5}
                width="100%"
                height="calc(90vh - 30px)"
                controls={true}
              />
              {/* Related Video */}
              <Stack marginLeft="15px" sx={{ height: "calc(90vh - 30px)", padding: "auto" }}>
                <Typography variant="h6" sx={{ padding: "5px 16px" }}>
                  Related Video
                </Typography>
                <VideoCard videoData={videoData}></VideoCard>
                <VideoCard videoData={videoData}></VideoCard>
                <VideoCard videoData={videoData}></VideoCard>
              </Stack>
            </Stack>

            <Stack direction="row" marginTop="15px" flexWrap="wrap">
              {/* Video Info */}
              <Box sx={{ maxWidth: "60vw", minWidth: "400px", marginBottom: "15px", flexGrow: "7"  }}>
                <Typography variant="h5"  >
                  {videoData.title}
                </Typography>
                <Box>
                  <Typography variant="caption" sx={{ marginRight: "15px", color: "rgba(255,255,255,0.5)" }}>
                    Upload Date : {videoData.createdAt.substr(0,10)}
                  </Typography>
                  <Typography variant="caption" sx={{ marginRight: "15px", color: "rgba(255,255,255,0.5)" }}>
                    Watch : {videoData.view_count}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  {videoData.description}
                </Typography>
              </Box>

              <Box sx={{ margin: "auto 0px", flexGrow: "3" }}>
                <Stack direction="row" alignItems="center">
                  <Avatar sx={{ width: "70px", height: "70px" }}>R</Avatar>
                  <Box paddingLeft="25px">
                    <Typography variant="h6" marginTop="10px" >
                      {videoData.name}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                      Subscribers : {"????"}
                    </Typography>
                  </Box>
                </Stack>
                <Button
                  fullWidth
                  color='white'
                  variant="outlined"
                  sx={{ marginTop: "15px" }}
                >
                  Subscribe
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>



        <Stack direction="row" marginTop="15px">
          <Button
            onClick={handleLike}
            color='white'
            variant="outlined"
            startIcon={<FavoriteIcon />}
            sx={{
              marginRight: "10px"
            }}>
            Like : {videoData.like_count}
          </Button>

          <Button
            color='white'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Comment : {"????"}
          </Button>
        </Stack>


        {/* Comment Comp */}
        <Collapse in={commnetExpand} timeout="auto" unmountOnExit sx={{ marginTop: "15px" }}>
          <CommentList></CommentList>
        </Collapse>

        <IconButton onClick={handleCloseModal} sx={{ position: "absolute", top: "0px", right: "0px" }}>
          <CloseIcon />
        </IconButton>

      </Box>
    </Modal>
  )
}