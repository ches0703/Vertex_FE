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
import getSubscribeListAPI from '../API/UserData/getSubscribeListAPI';

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


  // const handleMoreBtn = () => {
  //   setSubscribeList(subscribeList.concat(testApi()))
  // }

  return (
    <Fragment>
      {/* Subscribe List */}
      <List sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom sx={{ padding: "5px 16px" }}>
          Subscribe
        </Typography>

        {subscribeList.map(user =>
          <ListItem disablePadding key={user.email}>
            <ListItemButton onClick={() => { handleCategoryChainge(user.email) }}>
              <ListItemIcon>
                <Avatar alt={user.name} src={user.thumbnail}
                  sx={{ width: "35px", height: "35px" }}
                />
              </ListItemIcon>
              <ListItemText primary={user.name} />
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