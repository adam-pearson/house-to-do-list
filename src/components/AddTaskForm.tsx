import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';

const AddTaskForm = () => {

    const [users, setUsers] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [rooms, setRooms] = useState([]);

    // TO DO:
    // ADD FORM
    // IF NOT LOGGED IN, GO TO LOGIN PAGE
    // SAVE FORM TO DATABASE
    // EDIT TASK
    // BASIC FILTER TO HIDE COMPLETED TASKS
    // RESPONSIVENESS
    // TASK DETAILS WHEN CLICKED ON

    useEffect(() => {
        apiClient.get('/api/users').then((res: any) => {
            setUsers(res.data);
        })
        apiClient.get('/api/task-statuses').then((res: any) => {
            setStatuses(res.data);
        })
        apiClient.get('/api/rooms').then((res: any) => {
            setRooms(res.data);
        })
    }, []);

  return (
    <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  )
}

export default AddTaskForm