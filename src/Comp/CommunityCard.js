import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Stack,
  Button,
  Collapse
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import CommentList from './CommentList';


import { useState } from 'react';

export default function CommunityCard() {

  const [commnetExpand, setCommnetExpand] = useState(false);

  const handleCommnetExpand = () => {
    setCommnetExpand(!commnetExpand);
  };


  return (
    <Stack alignItems="center" padding="5px 5px">
      
      {/* Card Hearder */}
      <Card sx={{ minWidth:"500px", maxWidth: "35vw", borderRadius: "10px", padding: "15px" }}>
        <Stack direction="row" alignItems="center">
          <Avatar sx={{width: "70px", height: "70px"}}>R</Avatar>
          <Stack marginLeft="16px" >
            <Typography variant="h6">
              {"Title"}
            </Typography>
            <Typography variant="caption" display="block" sx={{fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Author : {"User Name"}
            </Typography>
            <Typography variant="caption" display="block" sx={{fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Watch : {123} / Date : {"23/01/01"}
            </Typography>
          </Stack>
        </Stack>

        {/* Card Text */}
        <CardContent sx={{padding: "15px 0px"}}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

        {/* Card Image */}
        <CardMedia
          component="img"
          image={"/Test.jpg"}
          sx={{borderRadius: "10px"}}
        />

        {/* Card Btn */}
        <CardActions sx={{ padding: "0px", marginTop: "15px" }}>
          <Button 
            color='white' 
            variant="outlined" 
            startIcon={<FavoriteIcon />}>
            Like : {1234}
          </Button>

          <Button 
            color='white' 
            variant="outlined" 
            startIcon={<CommentIcon />} 
            onClick={handleCommnetExpand}>
            Comment : {1234}
          </Button>
        </CardActions>

        {/* Comment Comp */}
        <Collapse in={commnetExpand} timeout="auto" unmountOnExit sx={{marginTop: "15px"}}>
          <CommentList></CommentList>
        </Collapse>

      </Card>
    </Stack>
  )
}