import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import { tasks } from "../apiDummy";
import apiClient from "../services/apiClient";

const TaskTable = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        apiClient.get('/api/tasks')
        .then((response: any) => {
            setTasks(response.data);
            console.log("PULLED TASKS: ", response);
        });
    }, []);

    return (
        <Box>
            <Grid container p={2}>
                <Grid item xs={8} md={6} lg={6}>
                    <Typography variant="subtitle1">
                        Task
                    </Typography>
                </Grid>
                <Grid item xs={4} md={3} lg={2}>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: 'center' }}
                    >
                        Status
                    </Typography>
                </Grid>
                <Grid item xs={0} md={2} lg={1} sx={{ display: {xs: 'none', md: 'block' } }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: 'center' }}
                    >
                        Priority
                    </Typography>
                </Grid>
                <Grid item xs={0} md={0} lg={2} sx={{ display: {xs: 'none', lg: 'block' } }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: 'right' }}
                        >
                        Assignees
                    </Typography>
                </Grid>
                <Grid item xs={0} md={1} lg={1} sx={{ display: {xs: 'none', md: 'block' } }}></Grid>
            </Grid>

            { tasks.length > 0 ? <TaskList tasks={tasks} /> : null }
        </Box>
    );
};

export default TaskTable;
