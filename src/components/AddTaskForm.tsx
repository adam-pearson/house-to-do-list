import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const AddTaskForm = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [statuses, setStatuses] = useState<any[]>([]);
    const [rooms, setRooms] = useState<any[]>([]);

    const defaultValues = {
        name: '',
        status_id: '',
        rooms: [],
        users: [],
    };

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // TO DO:
    // ADD FORM
    // IF NOT LOGGED IN, GO TO LOGIN PAGE
    // SAVE FORM TO DATABASE
    // EDIT TASK
    // BASIC FILTER TO HIDE COMPLETED TASKS
    // RESPONSIVENESS
    // TASK DETAILS WHEN CLICKED ON

    // AFTER GETTING CURRENT USER LOGGING IN, READ WEB PAGE AND SAVE TO SESSION? OR LOCALSTORAGE?

    useEffect(() => {
        apiClient.get("/api/users").then((res: any) => {
            setUsers(res.data);
        });
        apiClient.get("/api/task-statuses").then((res: any) => {
            setStatuses(res.data);
        });
        apiClient.get("/api/rooms").then((res: any) => {
            setRooms(res.data);
        });
    }, []);

    useEffect(() => {
        console.log("form values: ", formValues);
    }, [formValues]);

    useEffect(() => {
        if (!formValues.status_id) {
            // eslint-disable-next-line no-restricted-globals
            setFormValues({...formValues, 'status_id': statuses[0]?.id})
        }
    }, [statuses]);

    const handleSubmit = async() => {
        // apiClient.get('/sanctum/csrf-cookie')
        // .then((response: any) => {
        //     apiClient.post('/login', {
        //         email: data.get('email'),
        //         password: data.get('password')
        //     }).then((response: any) => {
        //         console.log(response)
        //         if (response.status === 204) {
        //             console.log("LOGGED IN SUCCESSFULLY!");
        //             apiClient.get('/api/user/current')
        //             .then((response: any) => {
        //                 console.log("CURRENT USER: ", response);
        //                 user.setCurrentUser(response.data);
        //                 authStatus.setLoggedIn(true);
        //                 navigate('/');
        //             })
        //         }
        //     })
        // });

        const newTaskFormData = new FormData();

        newTaskFormData.append('name', formValues.name);
        newTaskFormData.append('status_id', formValues.status_id);
        newTaskFormData.append('rooms', formValues.rooms.join(","));
        newTaskFormData.append('users', formValues.users.join(","));
        try {
            const response = await apiClient({
                method: "post",
                url: "/api/task/save",
                data: newTaskFormData,
                headers: { "Content-Type": "multipart/form-data" },
              });
        } catch (error) {
            console.log(error);
        }

        console.log("form submitted! ", newTaskFormData);
    }

    return (
        <>

        <FormControl>
            <TextField
                size="small"
                id="name-input"
                name="name"
                label="Task Name"
                type="text"
                autoComplete="off"
                value={formValues.name}
                onChange={handleInputChange}
            />
        </FormControl>

            <FormControl size="small">
                <InputLabel id="status-select">Status</InputLabel>
                <Select
                    labelId='status-select'
                    label="Status"
                    name="status_id"
                    value={formValues.status_id || ""}
                    defaultValue=""
                    onChange={handleInputChange}
                    sx={{ width: '250px' }}
                >
                    {statuses.length > 0 ? statuses.map((status: any) => {
                        return <MenuItem key={status.id} value={status.id}>{status.name}</MenuItem>
                    }) : null }

                </Select>
            </FormControl>

            <FormControl size="small">
                <InputLabel id="user-select">Assignees</InputLabel>
                <Select
                    labelId='user-select'
                    label="Assignees"
                    name="users"
                    value={formValues.users || []}
                    defaultValue={[]}
                    multiple
                    onChange={handleInputChange}
                    sx={{ width: '250px' }}
                >
                    {users.length > 0 ? users.map((user: any) => {
                        return <MenuItem key={user.id} value={user.id}>{user.first_name + " " + user.last_name}</MenuItem>
                    }) : null }

                </Select>
            </FormControl>

            <FormControl size="small">
                <InputLabel id="room-select">Rooms</InputLabel>
                <Select
                    labelId='room-select'
                    label="Rooms"
                    name="rooms"
                    value={formValues.rooms || []}
                    defaultValue={[]}
                    multiple
                    onChange={handleInputChange}
                    sx={{ width: '250px' }}
                >
                    {rooms.length > 0 ? rooms.map((room: any) => {
                        return <MenuItem key={room.id} value={room.id}>{room.name}</MenuItem>
                    }) : null }

                </Select>
            </FormControl>

            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </>
    );
};

export default AddTaskForm;
