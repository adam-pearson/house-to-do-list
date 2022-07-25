import {
    Box,
    Chip,
    Paper,
    Stack,
    Typography,
    IconButton,
    Avatar,
    AvatarGroup,
    Grid,
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

const TaskItem = (props: any) => {
    const { task } = props;

    const handlePriorityChange = (task: any) => {
        console.log(task);
    };

    return (
        <Box>
            <Paper elevation={1}>
                <Grid container p={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={8} md={6} lg={6}>
                        <Typography variant="body1">{task.name}</Typography>
                    </Grid>
                    <Grid item xs={4} md={3} lg={2} sx={{ textAlign: 'center' }}>
                        <Chip
                            label={task.status.name}
                            size="small"
                            sx={{
                                backgroundColor: task.status.colour,
                                color: "#fff",
                                width: "100px",
                                borderRadius: ".75rem",
                            }}
                        />
                    </Grid>
                    <Grid item xs={0} md={2} lg={1} sx={{ textAlign: 'center', display: {xs: 'none', md: 'block'} }}> 
                        <IconButton
                            sx={{
                                border: "1px solid",
                                borderColor: "grey.100",
                            }}
                            onClick={() => handlePriorityChange(task)}
                        >
                            <FlagIcon
                                sx={{
                                    color: task.priority.colour,
                                }}
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={0} md={0} lg={2} sx={{ textAlign: 'right', display: {xs: 'none', lg: 'block'} }}>
                        <AvatarGroup max={4}>
                            {task.users.map((user: any) => {
                                return (
                                    <Avatar
                                        key={user.id}
                                        sx={{ bgcolor: user.colour }}
                                    >
                                        <Typography variant="subtitle2">
                                            {user.first_name[0]}
                                            {user.last_name[0]}
                                        </Typography>
                                    </Avatar>
                                );
                            })}
                        </AvatarGroup>
                    </Grid>
                    <Grid item xs={0} md={1} lg={1} sx={{ textAlign: 'right', display: {xs: 'none', md: 'block' } }}>
                        <IconButton
                            sx={{
                                border: "1px solid",
                                borderColor: "grey.100",
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TaskItem;
