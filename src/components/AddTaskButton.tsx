import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import React from 'react'

const AddTaskButton = (props: any) => {

    const {addTaskFormOpen, setAddTaskFormOpen} = props;

  return (
    <Box>
        <Button variant='outlined'
        startIcon={addTaskFormOpen ? <RemoveIcon /> : <AddIcon />}
        sx={{
            color: addTaskFormOpen ? 'primary.light' : 'grey.400',
            borderColor: addTaskFormOpen ? 'primary.light' : 'grey.400',
            border: addTaskFormOpen ? '1px solid' : '1px dashed',
            width: '100%',
            justifyContent: 'start',
            padding: '8px',
            paddingLeft: '16px',
            '&:hover': {
                color: 'primary.light'
            }
        }}
        onClick={() => setAddTaskFormOpen(!addTaskFormOpen)}
        >{addTaskFormOpen ? 'Close Form' : 'Add Task'}</Button>
    </Box>
  )
}

export default AddTaskButton