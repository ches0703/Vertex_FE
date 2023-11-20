import { Fragment, useState } from 'react';
import { 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function VideoListCat() {

  const [myListOpen, setMyListOpen] = useState(false);

  const handleMyListOpen = () => {
    setMyListOpen(!myListOpen);
  };


  return (
    <Fragment>
      {/* Video List */}
      <List sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom sx={{ padding: "5px 16px" }}>
          List
        </Typography>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Liked" />
          </ListItemButton>
        </ListItem>

        {/* User Video List */}
        <ListItemButton onClick={handleMyListOpen}>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="My List" />
          {myListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={myListOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="My list 1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4, }}>
                <ListItemText primary="My list 2" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Fragment>
  )
}