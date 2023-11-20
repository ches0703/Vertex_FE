import { 
  Box, 
  Avatar,
  Stack
} from "@mui/material";

export default function Comment({child}) {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{ width: "100%", margin: "10px 0px"}}
      >
        
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div>Test Comment</div>


      </Stack>
        <Box marginLeft="40px">
          {(child != null)&&<Comment></Comment>}
        </Box>
    </Box>
  )
}