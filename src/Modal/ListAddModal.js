import { useState } from "react";
import {
    Button,
    TextField,
    Typography,
    RadioGroup,
    Radio,
    FormControlLabel,
    Box,
    Stack,
} from "@mui/material";

const PUBLIC = "PUBLIC"
const PRIVATE = "PRIVATE"

const ListAddModal = (onClose, title) => {
    const [listName, setListName] = useState("");
    const [scope, setScope] = useState(PUBLIC);

    return (
        <>
            <Stack sx={{ color: "#FFFFFF" }} spacing={2}>
                <Box>
                    <Typography
                        sx={{
                            color: "#FFFFFF",
                        }}
                    >
                        List Name
                    </Typography>
                    <TextField
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        fullWidth
                        size='small'
                        color='white'
                        sx={{ marginTop: "5px", }}
                    />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: "#FFFFFF"
                        }}
                    >
                        Scope of Disclosure
                    </Typography>
                    <RadioGroup
                        row
                        aria-label="scope"
                        name="row-radio-buttons-group"
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                    >
                        <FormControlLabel value={PUBLIC} control={<Radio color='white' />} label="Public" />
                        <FormControlLabel value={PRIVATE} control={<Radio color='white' />} label="Private" />
                    </RadioGroup>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="outlined"
                        color="blue"
                        sx={{ flexGrow: "7" }}
                    >
                        {title}
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{ flexGrow: "3" }}
                        color="error"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack >
        </>
    );
}

export default ListAddModal;