import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

interface HeaderProps {
    title: string;
    openForm : () => void;
}

export default function Header(props: HeaderProps) {
    const { title, openForm } = props;
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
                <Button onClick={() => openForm()} variant="outlined" size="small">
                    Create Activity
                </Button>
            </Toolbar>
        </React.Fragment>
    );
}