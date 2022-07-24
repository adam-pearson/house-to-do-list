import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TaskList from "./TaskList";
import { tasks } from '../apiDummy';

const TaskTable = () => {
    return (
        <>
            <Stack direction="column">
                <Stack direction="row" px={2}>
                    <Typography variant="subtitle1" sx={{ width: "60%" }}>
                        Task
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ width: "10%" }}
                    >
                        Status
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ width: "10%" }}
                    >
                        Priority
                    </Typography>
                    <Typography variant="subtitle1" sx={{ width: "15%" }}>
                        Assignees
                    </Typography>
                    <Box sx={{ width: "5%" }}></Box>
                </Stack>
                <TaskList tasks={tasks}/>
            </Stack>
        </>
    );
};

export default TaskTable;
