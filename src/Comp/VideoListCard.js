import {
  Typography,
  Card,
  Stack,
} from '@mui/material';

export default function VideoListCard({ videoListTitle }) {
  return (
    <Card sx={{ width: "100%", borderRadius: "10px", padding: "15px" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>


        {/* User nickName */}
        <Typography variant="h5">
          {videoListTitle}
        </Typography>


        <Stack sx={{ justifyContent: "center", flexGrow: "1" }}>
          {/* <Typography textAlign="right" variant="caption" sx={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
            Scope of disclosure : {"Public"}
          </Typography>
          <Typography textAlign="right" variant="caption" sx={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
            Videos : {1234}
          </Typography> */}
        </Stack>

      </Stack>
    </Card>
  )
}