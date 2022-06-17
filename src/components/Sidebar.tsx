import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useAppDispatch, useAppSelector} from "../hooks";
import {IJob} from "../types";
import { getJobsAction } from '../store/actions';

const Sidebar: React.FC = () => {
    let jobs = useAppSelector(state => state.jobs.list)
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.jobs.isLoading)
    
    useEffect(() => {
        if(jobs.length == 0) {
            dispatch(getJobsAction())
        }
    }, [dispatch])

    const show = () => {
        if (jobs.length == 0) return (<p>123</p>)
        else return (
            jobs.map(job => (
                <ListItem key={job.id} disablePadding>
                    <ListItemButton component="div">
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
            minHeight: "90vh",
            position: 'relative',
            overflow: 'auto',
            borderRight: "1px solid #ccc",
            padding: "5px"
        }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {show()}
                </List>

            </nav>
        </Box>
    );
}

export default Sidebar;