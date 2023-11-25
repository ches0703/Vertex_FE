
import { useState } from "react"
import { Stack } from "@mui/material";
import UserCard from "./UserCard"

export default function UserCardList() {

  const [userList, setUserList] = useState(["user01", "user02"])

  return (
    <Stack spacing={2} sx={{margin: "15px"}}>
      {userList.map((user) => {
        return ( <UserCard user={user}></UserCard>)
      })}
    </Stack>
  )
}