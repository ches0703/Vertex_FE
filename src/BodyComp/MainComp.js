import { Fragment, useEffect, useState, } from 'react';
import { useSelector } from 'react-redux';
import { Button, Stack } from '@mui/material';
import VideoCardList from '../Comp/VideoCardList';
import CommunityCardList from '../Comp/CommunityCardList';

// main opt Value
const VIDEO = "V"
const COMMUNITY = "C"

export default function MainComp() {
  const [mainOptSelect, setMainOptSelect] = useState(VIDEO)

  const category = useSelector((state) => state.category)

  useEffect(() => {
    handleVideoSelect()
  }, [category])

  const handleVideoSelect = () => {
    setMainOptSelect(VIDEO)
  }
  const handleCommunitySelect = () => {
    setMainOptSelect(COMMUNITY)
  }

  return (
    <Stack>
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

      {(mainOptSelect === VIDEO)
        ? <VideoCardList></VideoCardList>
        : <CommunityCardList></CommunityCardList>}
      
    </Stack>
  )
}