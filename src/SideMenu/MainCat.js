import { Fragment, useEffect } from 'react';
import { 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeMain, changeSub } from "../redux/CategoryReducer"

import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

export default function MainCat() {

  const dispatch = useDispatch();

  const handleCategoryChainge = (sub) => {
    dispatch(changeMain("Main"));
    dispatch(changeSub(sub));
  } 

  return (
    <Fragment>
      {/* Main */}
      <List sx={{color: "#FFFFFF"}}>
        <Typography variant="h6" gutterBottom sx={{padding: "5px 16px"}}>
          Main
        </Typography>

        <ListItem disablePadding>
          <ListItemButton onClick={() => {handleCategoryChainge("Home")}}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => {handleCategoryChainge("Newest")}}>
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary="Newest" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => {handleCategoryChainge("Subscribe")}}>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary="Subscribe" />
          </ListItemButton>
        </ListItem>
      </List>
    </Fragment>
  )
}