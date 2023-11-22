import { useState } from 'react';
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

export default function VideoCardWide() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
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
              image="./Test.jpg"
              sx={{ width: "300px", borderRadius: "5px" }}
            />

            <CardContent sx={{ flexGrow: "1", padding: "20px" }}>
              <Typography variant="subtitle1">
                Test Title
              </Typography>
              <Typography variant="caption" display="block" sx={{ marginBottom: "15px", display: "block", width: "100%", color: "rgba(255,255,255,0.5)" }}>
                Watch : {123} / Like : {456} / {"23/01/01"}
              </Typography>
              <Stack direction="row" alignItems="center" >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography variant="caption" sx={{ marginLeft: "15px", color: "rgba(255,255,255,0.5)" }}>
                  User Name
                </Typography>
              </Stack>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Card>
      <IconButton sx={{height: "40px"}} onClick={() => {}} >
        <DeleteIcon />
      </IconButton>

      {/* Modal */}
      {isModalOpen && <VideoModal handleCloseModal={handleCloseModal}></VideoModal>}

    </Stack>
  )
}