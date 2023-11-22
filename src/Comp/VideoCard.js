import { Fragment, useState } from 'react';
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

export default function VideoCard() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

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
            image="./Test.jpg"
            sx={{ borderRadius: "5px" }}
          />

          <CardContent sx={{ padding: "10px"}}>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Stack justifyContent="center" marginLeft="10px">
                <Typography variant="subtitle2">
                  Test Title
                </Typography>
                <Typography variant="caption" display="block" sx={{color: "rgba(255,255,255,0.5)"}}>
                  User Name
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="caption" display="block" sx={{display: "block", width: "100%", textAlign:"right", color: "rgba(255,255,255,0.5)"}}>
              Watch : {123} / Like : {456} / {"23/01/01"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Modal */}
      {isModalOpen && <VideoModal handleCloseModal={handleCloseModal}></VideoModal>}

    </Fragment>
  )
}