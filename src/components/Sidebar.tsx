import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useAppDispatch, useAppSelector} from "../hooks";
import {IJob} from "../types";
import {getJobsAction, getEmployeesAction} from '../store/actions';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Sidebar: React.FC = () => {
    let jobs = useAppSelector(state => state.jobs.list)
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.jobs.isLoading)

    useEffect(() => {
        if (jobs.length == 0) {
            dispatch(getJobsAction())
        }
    }, [dispatch])

    const showEmployees = (job: string) => {
        dispatch(getEmployeesAction(job))
    }

    const showItems = () => {
        if (isLoading) return (
            <Box sx={{display: 'flex', justifyContent: "center"}}>
                <CircularProgress/>
            </Box>
        )
        else return (
            jobs.length != 0 && jobs.map(job => (
                <ListItem key={job.id} disablePadding>
                    <ListItemButton component="div" onClick={() => {
                        showEmployees(job.jobId)
                    }}>
                        <ListItemText primary={job.title}/>
                    </ListItemButton>
                </ListItem>
            ))
        )
    }
    return (
        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
            minHeight: "80vh",
            maxHeight: "80vh",
            position: 'relative',
            overflow: 'auto',
            borderRight: "1px solid #ccc",
            padding: "5px"
        }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="div" onClick={() => {
                            showEmployees("")
                        }}>
                            <ListItemText primary="All"/>
                        </ListItemButton>
                    </ListItem>
                    {showItems()}
                </List>
            </nav>
        </Box>
    );
}

export default Sidebar;