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
import getThumbnailAPI from '../API/Video/getThumbnailAPI';


export default function VideoCard({videoData}) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [thumb, setThumb] = useState(null)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const fetch = async () => {
      const res = await getThumbnailAPI({
        videoId: videoData.id,
        thumbnail_file_extension: videoData.thumbnail_file_extension
      })
      const myFile = new File([res.data], 'imageName')
      const reader = new FileReader()
      reader.onload = ev => {
        const previewImage = String(ev.target?.result)
        setThumb(previewImage)
        }
      reader.readAsDataURL(myFile)
    } 
    fetch()
  }, [])

  return (
    <Fragment>
      {/* Video Card */}
      <Card 
        onClick={handleOpenModal}
        sx={{
          margin: "10px",
          minWidth: "250px",
          maxWidth: "300px",
          backgroundColor: "#2c2c2c",
          boxShadow: "none",
          backgroundImage: "none",
          borderRadius: "5px"
        }}
      >
        <CardActionArea>

          <CardMedia
            component="img"
            image={thumb}
            sx={{ borderRadius: "5px" }}
          />

          <CardContent sx={{ padding: "10px"}}>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Stack justifyContent="center" marginLeft="10px">
                <Typography variant="subtitle2">
                  {videoData.title}
                </Typography>
                <Typography variant="caption" display="block" sx={{color: "rgba(255,255,255,0.5)"}}>
                  {videoData.user_email}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="caption" display="block" sx={{display: "block", width: "100%", textAlign:"right", color: "rgba(255,255,255,0.5)"}}>
              Watch : {videoData.view_count} / Like : {videoData.like_count} / {"23/01/01"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Modal */}
      {isModalOpen && <VideoModal handleCloseModal={handleCloseModal} videoId={videoData.id} ></VideoModal>}

    </Fragment>
  )
}