import { useSelector } from "react-redux"
import { 
  Stack, 
  Button, 
  Container, } from "@mui/material"
import VideoListCard from "../Comp/VideoListCard"
import VideoCardWide from "../Comp/VideoCardWide"


export default function VideoListComp() {

  const category = useSelector((state) => state.category)

  return (
    <Container maxWidth="md" >
      {/* Video List Card */}
      <Stack direction="row" sx={{justifyContent: "center"}}>
        <VideoListCard videoListTitle={category.sub}></VideoListCard>
      </Stack>

      {/* List setting btns */}
      <Stack direction="row" justifyContent="flex-end" spacing={1} marginTop="10px">

        <Button color='white' variant="outlined" >
          Update
        </Button>
        <Button color='white' variant="outlined" >
          Delete
        </Button>

      </Stack>
        <VideoCardWide></VideoCardWide>
        <VideoCardWide></VideoCardWide>
        <VideoCardWide></VideoCardWide>
      <Stack>

      </Stack>
    </Container>
  )
}