import { Fragment, useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeMain, changeSub } from "../redux/CategoryReducer"
import { getSubscribeListAPI } from '../API/Subscription/SubscribeAPI';
import getUserProfileImgAPI from '../API/UserData/getUserProfileImgAPI';

export default function SubscribeCat() {

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const handleCategoryChainge = (sub) => {
    dispatch(changeMain("Subscribe"));
    dispatch(changeSub(sub));
  }

  const [subscribeList, setSubscribeList] = useState([])

  useEffect(() => {
    const fetch = async () => {
      if (userData.email) {
        const res = await getSubscribeListAPI({
          email: userData.email
        });
        setSubscribeList(res);
      }
    }
    fetch()
  }, [userData]);

  return (
    <Fragment>
      {/* Subscribe List */}
      <List sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom sx={{ padding: "5px 16px" }}>
          Subscribe
        </Typography>

        {subscribeList.map(user =>
          <ListItem
            disablePadding
            key={user.channel_email}>
            <ListItemButton onClick={() => { handleCategoryChainge(user.channel_email) }}>
              <ListItemIcon>
                <Avatar alt={user.name} src={
                  getUserProfileImgAPI({
                    email: user.channel_email
                  }).data
                }
                  sx={{ width: "35px", height: "35px" }}
                />
              </ListItemIcon>
              <ListItemText primary={user["channel.name"]} />
            </ListItemButton>
          </ListItem>
        )}

        {/* <ListItem disablePadding>
          <ListItemButton onClick={() => {}}>
            <ListItemIcon >
              <AddIcon sx={{ width: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem> */}

      </List>
    </Fragment>
  )
}