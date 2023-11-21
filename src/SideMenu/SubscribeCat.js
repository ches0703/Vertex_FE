import { Fragment, useEffect, useState } from 'react';
import { 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Avatar,
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AddIcon from '@mui/icons-material/Add';

const testApi = () => {
  return ["qwer", "asdf"]
}



export default function SubscribeCat() {

  const [subscribeList, setSubscribeList] = useState(["User0001", "User0002"])
  
  const handleMoreBtn = () => {
    setSubscribeList(subscribeList.concat(testApi()))
  }

  useEffect(() => {
    console.log(subscribeList)
  }, [subscribeList])

  return (
    <Fragment>
      {/* Subscribe List */}
      <List sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom sx={{ padding: "5px 16px" }}>
          List
        </Typography>

        {subscribeList.map(user => {
          return <ListItem disablePadding key={user}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt={user} src="/static/images/avatar/1.jpg"
                  sx={{width: "35px", height: "35px" }}
                />
              </ListItemIcon>
              <ListItemText primary={user} />
            </ListItemButton>
        </ListItem>
        })}

        <ListItem disablePadding>
          <ListItemButton onClick={handleMoreBtn}>
            <ListItemIcon >
              <AddIcon sx={{width: "35px"}}/>
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>

      </List>
    </Fragment>
  )
}