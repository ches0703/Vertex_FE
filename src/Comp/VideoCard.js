import { Fragment, useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  CardActionArea,
  Stack
} from '@mui/material';

import VideoModal from '../Modal/VideoModal';
import { getThumbnailAPI, getYoutubeThumbnailAPI } from '../API/Video/getThumbnailAPI';
import getUserProfileImgAPI from '../API/UserData/getUserProfileImgAPI';


export default function VideoCard({ videoData, deleteVideo }) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [thumb, setThumb] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const fetch = async () => {
      if (videoData.is_youtube != 1) {
        const thumbRes = await getThumbnailAPI({
          videoId: videoData.id,
          thumbnailFileExtension: videoData.thumbnail_file_extension
        })
        if (thumbRes) {
          setThumb(thumbRes.data)
        }
      }
      else {
        const thumbRes = await getYoutubeThumbnailAPI(videoData.id)
        setThumb(thumbRes)
      }

      const profileRes = await getUserProfileImgAPI({
        email: videoData.user_email
      })
      if (profileRes) {
        setProfileImg(profileRes.data)
      }
    }
    fetch()
  }, [videoData]);

  return (
    <Fragment>
      {/* Video Card */}
      <Card
        onClick={handleOpenModal}
        sx={{
          margin: "10px",
          backgroundColor: "#2c2c2c",
          boxShadow: "none",
          backgroundImage: "none",
          borderRadius: "5px",
          minWidth: "250px",
          maxWidth: "325px"
        }}
      >
        <CardActionArea>

          <CardMedia
            component="img"
            image={thumb ? thumb : "./defaultImg.png"}
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/10",
              minWidth: "250px",
              maxWidth: "325px"
              ,
            }}
          />

          <CardContent sx={{ padding: "10px" }}>
            <Stack direction="row">
              <Avatar alt="" src={profileImg} />
              <Stack justifyContent="center" marginLeft="10px">
                <Typography variant="subtitle2">
                  {videoData.title}
                </Typography>
                <Typography variant="caption" display="block" sx={{ color: "rgba(255,255,255,0.5)" }}>
                  {videoData.name}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="caption" display="block" sx={{ display: "block", width: "100%", textAlign: "right", color: "rgba(255,255,255,0.5)" }}>
              Watch : {videoData.view_count} / Like : {videoData.like_count} / {videoData.createdAt.substr(0, 10)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Modal */}
      {isModalOpen && <VideoModal handleCloseModal={handleCloseModal} videoData={videoData} deleteVideo={deleteVideo}></VideoModal>}

    </Fragment>
  )
}