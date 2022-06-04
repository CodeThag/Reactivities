import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useStore } from "../stores/store";

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    const { title } = props;
    const {activityStore} = useStore();

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small">Subscribe</Button>
                <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button onClick={() => activityStore.openForm()} variant="outlined" size="small">
                    Create Activity
                </Button>
            </Toolbar>
        </React.Fragment>
    );
}