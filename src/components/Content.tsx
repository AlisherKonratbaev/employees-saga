import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Paper from '@mui/material/Paper';



const Content:React.FC = () => {
    return (
            <Grid container spacing={4} sx={{padding:"10px"}} >
                <Grid item xs={4}>
                    <Paper elevation={3} sx={{padding:"10px 15px"}}>
                        <Typography variant="h5" component="p" >Jon Smit</Typography>
                        <Typography  variant="body1" component="p" >Worker</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={3} sx={{padding:"10px 15px"}}>
                        <Typography variant="h5" component="p" >Jon Smit</Typography>
                        <Typography variant="body1" component="p" >Worker</Typography>
                    </Paper>
                </Grid>

            </Grid>
    );
}

export default Content;