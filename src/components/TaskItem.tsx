import { Box, Chip, Paper, Stack, Typography, IconButton, Avatar, AvatarGroup } from '@mui/material'
import FlagIcon from '@mui/icons-material/Flag';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

const TaskItem = (props: any) => {

    const { task } = props;

    const handlePriorityChange = (task: any) => {
        console.log(task);
    }

  return (
    <Box>
        <Paper elevation={1}>
        <Stack direction="row" p={1} px={2} sx={{ alignItems: 'center' }}>
            <Box sx={{ width: '60%' }}>
                <Typography variant="body1">{ task.name }</Typography>
            </Box>
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                <Chip label={ task.status.name } sx={{
                    backgroundColor: task.status.colour, 
                    color: '#fff',
                    width: '100px',
                    borderRadius: '.75rem'
                    }}/>
            </Box>
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center'}}>
                <IconButton sx={{
                    border: '1px solid',
                    borderColor: 'grey.100'
                }}
                onClick={() => handlePriorityChange(task)}>
                    <FlagIcon sx={{
                        color: task.priority.colour,
                    }}/>
                </IconButton>
            </Box>
            <Stack direction="row" sx={{ width: '15%' }}>
                <AvatarGroup max={4}>
                {task.users.map((user: any) => {
                    return (
                        <Avatar key={user.id} sx={{ bgcolor: user.colour }}>
                            <Typography variant='subtitle2'>
                                {user.first_name[0]}{user.last_name[0]}
                            </Typography>
                        </Avatar>
                    )
                })}
                </AvatarGroup>
            </Stack>
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center'}}>
                <IconButton sx={{
                    border: '1px solid',
                    borderColor: 'grey.100'
                }}>
                    <MoreVertIcon/>
                </IconButton>
            </Box>
        </Stack>
        </Paper>
    </Box>
  )
}

export default TaskItem