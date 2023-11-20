import { Fragment } from 'react';
import { 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

export default function MainCat() {
  return (
    <Fragment>
      {/* Main */}
      <List sx={{color: "#FFFFFF"}}>
        <Typography variant="h6" gutterBottom sx={{padding: "5px 16px"}}>
          Main
        </Typography>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary="Newest" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
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