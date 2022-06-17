import React, {} from 'react';
import { Grid} from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";


const App:React.FC = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={2}>
                <Sidebar/>
            </Grid>
            <Grid item xs={10}>
                <Content/>
            </Grid>
        </Grid>
    );
}

export default App;
