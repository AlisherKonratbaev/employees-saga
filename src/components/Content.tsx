import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import Paper from '@mui/material/Paper';
import {useAppDispatch, useAppSelector} from "../hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import {getEmployeesAction} from "../store/actions";

const Content: React.FC = () => {
    const employees = useAppSelector(state => state.employees.list)
    const isLoading = useAppSelector(state => state.employees.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getEmployeesAction(""))
    }, [dispatch])

    return (
        <>
            <Grid container spacing={4} sx={{padding: "10px"}}>
                {isLoading ?
                    <Grid item xs={12}>
                        <Box sx={{display: 'flex', justifyContent: "center"}}>
                            <CircularProgress/>
                        </Box>
                    </Grid>
                    :
                    employees.length != 0 && employees.map(employee => (
                        <Grid key={employee.id} item xs={4}>
                            <Paper elevation={3} sx={{padding: "10px 15px"}}>
                                <Typography variant="h5" component="p">{employee.name}</Typography>
                                <Typography variant="body1" component="p">{employee.job}</Typography>
                                <Typography variant="body1" component="p">{employee.email}</Typography>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Content;