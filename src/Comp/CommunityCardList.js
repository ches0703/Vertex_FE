import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Stack,
} from '@mui/material';

import CommunityCard from './CommunityCard';

export default function CommunityCardList() {

  const category = useSelector((state) => state.category)

  useEffect(() => {
    console.log(category)
  }, [category])

  return (
    <Stack margin="15px">
      <CommunityCard></CommunityCard>
      <CommunityCard></CommunityCard>
      <CommunityCard></CommunityCard>
    </Stack>
  )
}