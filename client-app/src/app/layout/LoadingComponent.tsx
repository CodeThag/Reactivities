import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
    inverted?: boolean;
    content?: string;
}

const LoadingComponent: FunctionComponent<Props> = ({ inverted = true, content = "Loading..." }) => {
    return (
        <Backdrop
            sx={{ color: '#333', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}>
            <CircularProgress color="inherit" />            
            <Typography variant="h5" component="div">{content}</Typography>
        </Backdrop>);
}

export default LoadingComponent;