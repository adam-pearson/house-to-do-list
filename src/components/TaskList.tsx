import React from 'react';
import TaskItem from './TaskItem';
import { Box } from '@mui/material';

const TaskList = (props: any) => {

    const { tasks } = props;

    const list = tasks.map((task: any) => 
        <Box key={task.id} mb={1}>
            <TaskItem  task={task}/>
        </Box>
    );

  return (
    <Box>
        {list}
    </Box>
  )
}

export default TaskList