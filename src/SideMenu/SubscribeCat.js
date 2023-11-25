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
import { useDispatch } from 'react-redux';
import { changeMain, changeSub } from "../redux/CategoryReducer"
import getSubscribeList from '../API/UserData/getSubscribeList';

import AddIcon from '@mui/icons-material/Add';


export default function SubscribeCat() {

  const dispatch = useDispatch();

  const handleCategoryChainge = (sub) => {
    dispatch(changeMain("Subscribe"));
    dispatch(changeSub(sub));
  }

  const [subscribeList, setSubscribeList] = useState(false)

  useEffect(() => {
    async function fetch() {
      const res = await getSubscribeList()
      setSubscribeList(res)
    }
    fetch()
  }, [])


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

        {(subscribeList) && subscribeList.map(user => {
          return <ListItem disablePadding key={user.email}>
            <ListItemButton onClick={() => { handleCategoryChainge(user.email) }}>
              <ListItemIcon>
                <Avatar alt={user.name} src={user.thumbnail}
                  sx={{ width: "35px", height: "35px" }}
                />
              </ListItemIcon>
              <ListItemText primary={user.name} />
            </ListItemButton>
          </ListItem>
        })} 

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