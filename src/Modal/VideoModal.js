import { useState, useEffect } from "react";
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
import getVideoAPI from "../API/Video/getViideoAPI";


export default function VideoModal({ handleCloseModal, videoData }) {

  const [commnetExpand, setCommnetExpand] = useState(false);

  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };

  const [video, setVideo] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      const res = await getVideoAPI({
        videoId: videoData.id
      })
      if (res) {
        const url = URL.createObjectURL(res.data);
        setVideo(url)
  
        // Blob URL을 해제해 메모리 누수를 방지합니다.
        return () => URL.revokeObjectURL(url);
      }
    }
    fetch()
  }, [])

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
                {/* <VideoCard></VideoCard>
                <VideoCard></VideoCard>
                <VideoCard></VideoCard> */}
              </Stack>
            </Stack>

            <Stack direction="row" marginTop="15px" flexWrap="wrap">
              {/* Video Info */}
              <Box sx={{maxWidth:"60vw", minWidth: "400px", marginBottom: "15px" }}>
                <Typography variant="h5"  >
                  This is Test Title
                </Typography>
                <Box>
                  <Typography variant="caption" sx={{ marginRight: "15px", color: "rgba(255,255,255,0.5)" }}>
                    Upload Date : {"23/01/01"}
                  </Typography>
                  <Typography variant="caption" sx={{ marginRight: "15px", color: "rgba(255,255,255,0.5)" }}>
                    Watch : {"1234"}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                  quasi quidem quibusdam.
                </Typography>
              </Box>

              <Box sx={{ margin: "auto 0px", flexGrow: "1"}}>
                <Stack direction="row" alignItems="center">
                  <Avatar sx={{ width: "70px", height: "70px" }}>R</Avatar>
                  <Box paddingLeft="25px">
                    <Typography variant="h6" marginTop="10px" >
                      {"User0000"}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                      Subscribers : {"1234"}
                    </Typography>
                  </Box>
                </Stack>
                <Button
                    fullWidth
                  color='white'
                  variant="outlined"
                  sx={{ marginTop: "15px"}}
                  startIcon={<FavoriteIcon />}>
                  Subscribe
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>



        <Stack direction="row" marginTop="15px">
          <Button
            color='white'
            variant="outlined"
            sx={{
              marginRight: "10px"
            }}>
            Like : {1234}
          </Button>

          <Button
            color='white'
            variant="outlined"
            startIcon={<CommentIcon />}
            onClick={handleCommnetExpand}>
            Comment : {1234}
          </Button>
        </Stack>


        {/* Comment Comp */}
        <Collapse in={commnetExpand} timeout="auto" unmountOnExit sx={{ marginTop: "15px" }}>
          <CommentList></CommentList>
        </Collapse>

        <IconButton onClick={handleCloseModal} sx={{position: "absolute", top: "0px", right: "0px"}}>
          <CloseIcon />
        </IconButton>

      </Box>
    </Modal>
  )
}