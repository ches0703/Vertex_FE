import { useState } from "react";
import { Stack, Button } from "@mui/material";

import VideoCardList from '../Comp/VideoCardList';
import CommunityCardList from '../Comp/CommunityCardList';
import UserCardList from "../Comp/UserCardList";

// search Category Value
const VIDEO = "V"
const USER = "U"
const COMMUNITY = "C"


export default function SearchComp({searchString}) {

  const [searchCatSelect, setSearchCatSelect] = useState(VIDEO)

  const handleVideoSelect = () => {
    setSearchCatSelect(VIDEO)
  }

  const handleUserSelect = () => {
    setSearchCatSelect(USER)
  }

  const handleCommunitySelect = () => {
    setSearchCatSelect(COMMUNITY)
  }


  return (
    <Stack>
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
          onClick={handleUserSelect}
          sx={{
            height: "40px",
            marginRight: "10px"
        }}>
          User
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={handleCommunitySelect}
          sx={{ height: "40px" }}>
          Community
        </Button>
      </Stack>

      {(searchCatSelect === VIDEO) && <VideoCardList></VideoCardList>}
      {(searchCatSelect === USER) && <UserCardList></UserCardList>}
      {(searchCatSelect === COMMUNITY) && <CommunityCardList></CommunityCardList>}
      
      

    </Stack>
  )
}