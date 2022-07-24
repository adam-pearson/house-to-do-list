import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import AddTaskForm from "./AddTaskForm";
import TaskTable from "./TaskTable";

const HomePage = () => {
    const [addTaskFormOpen, setAddTaskFormOpen] = useState(false);

    console.log(addTaskFormOpen);

    return (
        <Grid
            container
            sx={{
                overflow: "hidden",
            }}
        >
            <Grid
                item
                xs={0}
                lg={2}
                sx={{ display: { xs: "none", lg: "block" } }}
            >
                <Box
                    bgcolor="primary.light"
                    sx={{
                        height: "100vh",
                        width: "100%",
                    }}
                >
                    Item 1
                </Box>
            </Grid>
            <Grid item xs={12} lg={10} px={2} sx={{ backgroundColor: "grey.100" }}>
                <Box my={2}>
                    <AddTaskButton
                        addTaskFormOpen={addTaskFormOpen}
                        setAddTaskFormOpen={setAddTaskFormOpen}
                    />
                </Box>
                {addTaskFormOpen ?
                  <Box>
                    <AddTaskForm />
                  </Box>
                  : null
                }
                <TaskTable />
            </Grid>
        </Grid>
    );
};

export default HomePage;
