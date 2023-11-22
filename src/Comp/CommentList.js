import { 
  Stack, 
  TextField, 
  Box,
  Button,
  Typography
} from '@mui/material';

import Comment from './Commnet';

export default function CommentList() {
  return (
    <Stack sx={{color: "#FFFFFF"}}>
      <Typography variant="h6" gutterBottom>
        Comment
      </Typography>

      {/* Comment Write */}
      <Box component="form" sx={{paddingBottom: "15px"}}>
        <TextField
          fullWidth
          color='white'
          multiline
          maxRows={4}
          InputProps={{
            endAdornment: (
              <Button variant="outlined" color='white' sx={{marginLeft: "10px", width: "200px"}}>
                Commit
              </Button>
            ),
          }}
        ></TextField>
      </Box>

      {/* Commnet */}
      <Comment></Comment>
      <Comment hasReply={true}></Comment>
      <Comment></Comment>

    </Stack>
  )
}