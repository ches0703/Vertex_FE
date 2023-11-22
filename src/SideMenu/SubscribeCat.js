import { Fragment, useState } from 'react';
import { 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeMain, changeSub } from "../redux/CategoryReducer"
 
import AddIcon from '@mui/icons-material/Add';

const testApi = () => {
  return ["qwer", "asdf"]
}

export default function SubscribeCat() {

  const dispatch = useDispatch();

  const handleCategoryChainge = (sub) => {
    dispatch(changeMain("Subscribe"));
    dispatch(changeSub(sub));
  } 

  const [subscribeList, setSubscribeList] = useState(["User0001", "User0002"])

  const handleMoreBtn = () => {
    setSubscribeList(subscribeList.concat(testApi()))
  }

  return (
    <Fragment>
      {/* Subscribe List */}
      <List sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom sx={{ padding: "5px 16px" }}>
          List
        </Typography>

        {subscribeList.map(user => {
          return <ListItem disablePadding key={user}>
            <ListItemButton onClick={() => {handleCategoryChainge(user)}}>
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