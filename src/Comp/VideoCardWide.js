import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  CardActionArea,
  Stack,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import VideoModal from '../Modal/VideoModal';

import getThumbnailAPI from '../API/Video/getThumbnailAPI';
import getUserProfileImgAPI from '../API/UserData/getUserProfileImgAPI';
import { deleteHistoryAPI } from '../API/Video/HistroyAPI';


export default function VideoCardWide({ videoData, remove }) {
  const category = useSelector((state) => state.category);
  const userData = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const [profileImg, setProfileImg] = useState(null)
  const [thumb, setThumb] = useState(null)

  useEffect(() => {
    // console.log("vw : ",videoData)
    const fetch = async () => {
      const thumbRes = await getThumbnailAPI({
        videoId: videoData.video_id,
        thumbnailFileExtension: videoData.video.thumbnail_file_extension
      })
      if (thumbRes) {
        setThumb(thumbRes.data)
      }

      const profileRes = await getUserProfileImgAPI({
        email: videoData.video.user_email
      })
      if (profileRes) {
        setProfileImg(profileRes.data)
      }

    }
    fetch()
  }, [videoData]);

  const handleDeleteList = async () => {
    if (category.sub === 'History') {
      await deleteHistoryAPI({
        email: userData.email,
        videoId: videoData.video_id
      }).then((res) => {
        remove(videoData.video_id)
      });
    }
  }
  return (
    <Stack direction="row" alignItems="center">
      {/* Video Card */}
      <Card
        onClick={handleOpenModal}
        sx={{
          width: "100%",
          margin: "10px 0px",
          backgroundColor: "#2c2c2c",
          boxShadow: "none",
          backgroundImage: "none",
          borderRadius: "5px"
        }}
      >
        <CardActionArea>

          <Stack direction="row" alignItems="center">

            <CardMedia
              component="img"
              image={thumb}
              sx={{ width: "300px", aspectRatio: "16/10", borderRadius: "5px" }}
            />

            <CardContent sx={{ flexGrow: "1", padding: "20px" }}>
              <Typography variant="subtitle1">
                {videoData.video.title}
              </Typography>
              <Typography variant="caption" display="block" sx={{ marginBottom: "15px", display: "block", width: "100%", color: "rgba(255,255,255,0.5)" }}>
                Watch : {videoData.video.view_count} / Like : {videoData.video.like_count} / {videoData.createdAt}
              </Typography>
              <Stack direction="row" alignItems="center" >
                <Avatar alt="Remy Sharp" src={profileImg} />
                <Typography variant="caption" sx={{ marginLeft: "15px", color: "rgba(255,255,255,0.5)" }}>
                  {videoData.video.name}
                </Typography>
              </Stack>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Card>
      {category.sub === 'History' && (
        <IconButton sx={{ height: "40px" }} onClick={handleDeleteList} >
          <DeleteIcon />
        </IconButton>
      )}


      {/* Modal */}
      {isModalOpen && <VideoModal handleCloseModal={handleCloseModal} videoData={videoData.video}></VideoModal>}

    </Stack>
  )
}