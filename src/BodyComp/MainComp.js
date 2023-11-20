import { Fragment, useState } from 'react';
import { Button, Stack } from '@mui/material';
import VideoCardList from '../Comp/VideoCardList';
import CommuComp from '../Comp/CommuComp';

export default function MainComp() {

  const [mainOptSelect, setMainOptSelect] = useState("Video")

  const handleVideoSelect = () => {
    setMainOptSelect("Video")
  }
  const handleCommunitySelect = () => {
    setMainOptSelect("Community")
  }


  return (
    <Fragment>

      {/* Main Option Select Btn */}
      <Stack direction="row" spacing={2}>
        <Button fullWidth variant="outlined" color='white'
          onClick={handleVideoSelect}
          sx={{
            height: "40px",
            marginRight: "10px"
        }}>
          Video
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={handleCommunitySelect}
          sx={{ height: "40px" }}>
          Community
        </Button>
      </Stack>
      
      {(mainOptSelect === "Video")
        ? <VideoCardList></VideoCardList>
        : <CommuComp></CommuComp>}
      
    </Fragment>
  )
}