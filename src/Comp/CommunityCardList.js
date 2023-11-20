import {
  Stack,
} from '@mui/material';

import CommunityCard from './CommunityCard';

export default function CommunityCardList() {
  return (
    <Stack margin="15px">
      <CommunityCard></CommunityCard>
      <CommunityCard></CommunityCard>
      <CommunityCard></CommunityCard>
    </Stack>
  )
}