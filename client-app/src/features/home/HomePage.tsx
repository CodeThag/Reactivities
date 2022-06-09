import { Grid } from "@mui/material";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <h2>Home page</h2>
        </Grid>
    );
}

export default HomePage;