// import { useState } from 'react';
import { 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  // Collapse
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { changeMain, changeSub } from "../redux/CategoryReducer"
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';

// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function VideoListCat() {

  const dispatch = useDispatch();
  // const [myVideoList, setMyVideoList] = useState(["List01", "List02"])
  // const [myListOpen, setMyListOpen] = useState(false);

  // const handleMyListOpen = () => {
  //   setMyListOpen(!myListOpen);
  // };


  const handleCategoryChainge = (sub) => {
    dispatch(changeMain("VideoList"));
    dispatch(changeSub(sub));
  } 

  return (
    <>
      {/* Video List */}
      <List sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom sx={{ padding: "5px 16px" }}>
          List
        </Typography>

        {/* User's history */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => {handleCategoryChainge("History")}}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItemButton>
        </ListItem>

        {/* User's liked */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => {handleCategoryChainge("Liked")}}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Liked" />
          </ListItemButton>
        </ListItem>

        {/* User Video List */}
        {/* <ListItemButton onClick={handleMyListOpen}>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="My List" />
          {myListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton> */}

        {/* User's Video Lsit(When user click More btn) */}
        {/* <Collapse in={myListOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {myVideoList.map((videoList) => {
              return <ListItem disablePadding key={videoList}>
                <ListItemButton sx={{ pl: 4 }} onClick={() => {handleCategoryChainge(videoList)}}>
                  <ListItemText primary={videoList} />
                </ListItemButton>
              </ListItem>
            })}
          </List>
        </Collapse> */}
      </List>
    </>
  )
}