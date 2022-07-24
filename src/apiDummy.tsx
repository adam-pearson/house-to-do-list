export const tasks = [
    {
        "id": 1,
        "name": "Strip wallpaper",
        "status_id": 2,
        "priority_id": 3,
        "created_at": "2022-07-24T17:35:19.000000Z",
        "updated_at": "2022-07-24T17:35:19.000000Z",
        "deleted_at": null,
        "status": {
            "id": 2,
            "name": "On Hold",
            "colour": "#EFB700",
            "created_at": "2022-07-24T17:35:16.000000Z",
            "updated_at": "2022-07-24T17:35:16.000000Z",
            "deleted_at": null
        },
        "notes": [],
        "users": [
            {
                "id": 1,
                "first_name": "Adam",
                "last_name": "Pearson",
                "display_name": "Adam Pearson",
                "email": "adam.pearson94@gmail.com",
                "colour": "#32a852",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 1,
                    "user_id": 1
                }
            },
            {
                "id": 3,
                "first_name": "Stephen",
                "last_name": "Pearson",
                "display_name": "Adam's Dad",
                "email": "stevewendy158@sky.co.uk",
                "colour": "#3c477d",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 1,
                    "user_id": 3
                }
            },
            {
                "id": 4,
                "first_name": "Wendy",
                "last_name": "Pearson",
                "display_name": "Adam's Mum",
                "email": "test1@test.com",
                "colour": "#5cf773",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 1,
                    "user_id": 4
                }
            }
        ],
        "rooms": [
            {
                "id": 1,
                "name": "Living Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 1,
                    "room_id": 1
                }
            },
            {
                "id": 3,
                "name": "Hallway",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 1,
                    "room_id": 3
                }
            },
            {
                "id": 4,
                "name": "Kitchen",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 1,
                    "room_id": 4
                }
            }
        ],
        "priority": {
            "id": 3,
            "colour": "#B81D13",
            "created_at": "2022-07-24T17:35:19.000000Z",
            "updated_at": "2022-07-24T17:35:19.000000Z",
            "deleted_at": null
        }
    },
    {
        "id": 2,
        "name": "Rip up Carpets",
        "status_id": 1,
        "priority_id": 2,
        "created_at": "2022-07-24T17:35:19.000000Z",
        "updated_at": "2022-07-24T17:35:19.000000Z",
        "deleted_at": null,
        "status": {
            "id": 1,
            "name": "Not Started",
            "colour": "#8E9291",
            "created_at": "2022-07-24T17:35:16.000000Z",
            "updated_at": "2022-07-24T17:35:16.000000Z",
            "deleted_at": null
        },
        "notes": [],
        "users": [
            {
                "id": 1,
                "first_name": "Adam",
                "last_name": "Pearson",
                "display_name": "Adam Pearson",
                "email": "adam.pearson94@gmail.com",
                "colour": "#32a852",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 2,
                    "user_id": 1
                }
            },
            {
                "id": 2,
                "first_name": "Heather",
                "last_name": "Wilson",
                "display_name": "Heather Wilson",
                "email": "heatherwilson1193@hotmail.co.uk",
                "colour": "#edd711",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 2,
                    "user_id": 2
                }
            },
            {
                "id": 3,
                "first_name": "Stephen",
                "last_name": "Pearson",
                "display_name": "Adam's Dad",
                "email": "stevewendy158@sky.co.uk",
                "colour": "#3c477d",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 2,
                    "user_id": 3
                }
            },
            {
                "id": 4,
                "first_name": "Wendy",
                "last_name": "Pearson",
                "display_name": "Adam's Mum",
                "email": "test1@test.com",
                "colour": "#5cf773",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 2,
                    "user_id": 4
                }
            },
            {
                "id": 5,
                "first_name": "Susan",
                "last_name": "Wilson",
                "display_name": "Heather's Mum",
                "email": "test2@test.com",
                "colour": "#ad3798",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 2,
                    "user_id": 5
                }
            }
        ],
        "rooms": [
            {
                "id": 1,
                "name": "Living Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 2,
                    "room_id": 1
                }
            },
            {
                "id": 2,
                "name": "Dining Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 2,
                    "room_id": 2
                }
            },
            {
                "id": 3,
                "name": "Hallway",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 2,
                    "room_id": 3
                }
            },
            {
                "id": 4,
                "name": "Kitchen",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 2,
                    "room_id": 4
                }
            },
            {
                "id": 5,
                "name": "Utility Room",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 2,
                    "room_id": 5
                }
            }
        ],
        "priority": {
            "id": 2,
            "colour": "#EFB700",
            "created_at": "2022-07-24T17:35:19.000000Z",
            "updated_at": "2022-07-24T17:35:19.000000Z",
            "deleted_at": null
        }
    },
    {
        "id": 3,
        "name": "Paint Walls",
        "status_id": 3,
        "priority_id": 3,
        "created_at": "2022-07-24T17:35:20.000000Z",
        "updated_at": "2022-07-24T17:35:20.000000Z",
        "deleted_at": null,
        "status": {
            "id": 3,
            "name": "In Progress",
            "colour": "#005A8C",
            "created_at": "2022-07-24T17:35:16.000000Z",
            "updated_at": "2022-07-24T17:35:16.000000Z",
            "deleted_at": null
        },
        "notes": [],
        "users": [
            {
                "id": 2,
                "first_name": "Heather",
                "last_name": "Wilson",
                "display_name": "Heather Wilson",
                "email": "heatherwilson1193@hotmail.co.uk",
                "colour": "#edd711",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 3,
                    "user_id": 2
                }
            },
            {
                "id": 4,
                "first_name": "Wendy",
                "last_name": "Pearson",
                "display_name": "Adam's Mum",
                "email": "test1@test.com",
                "colour": "#5cf773",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 3,
                    "user_id": 4
                }
            },
            {
                "id": 6,
                "first_name": "David",
                "last_name": "Wilson",
                "display_name": "Heather's Dad",
                "email": "test3@test.com",
                "colour": "#bf7417",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 3,
                    "user_id": 6
                }
            }
        ],
        "rooms": [
            {
                "id": 2,
                "name": "Dining Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 3,
                    "room_id": 2
                }
            },
            {
                "id": 3,
                "name": "Hallway",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 3,
                    "room_id": 3
                }
            },
            {
                "id": 4,
                "name": "Kitchen",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 3,
                    "room_id": 4
                }
            },
            {
                "id": 5,
                "name": "Utility Room",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 3,
                    "room_id": 5
                }
            },
            {
                "id": 6,
                "name": "Bathroom (downstairs)",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 3,
                    "room_id": 6
                }
            }
        ],
        "priority": {
            "id": 3,
            "colour": "#B81D13",
            "created_at": "2022-07-24T17:35:19.000000Z",
            "updated_at": "2022-07-24T17:35:19.000000Z",
            "deleted_at": null
        }
    },
    {
        "id": 4,
        "name": "Install New Doorknobs",
        "status_id": 2,
        "priority_id": 1,
        "created_at": "2022-07-24T17:35:21.000000Z",
        "updated_at": "2022-07-24T17:35:21.000000Z",
        "deleted_at": null,
        "status": {
            "id": 2,
            "name": "On Hold",
            "colour": "#EFB700",
            "created_at": "2022-07-24T17:35:16.000000Z",
            "updated_at": "2022-07-24T17:35:16.000000Z",
            "deleted_at": null
        },
        "notes": [],
        "users": [
            {
                "id": 1,
                "first_name": "Adam",
                "last_name": "Pearson",
                "display_name": "Adam Pearson",
                "email": "adam.pearson94@gmail.com",
                "colour": "#32a852",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 4,
                    "user_id": 1
                }
            },
            {
                "id": 3,
                "first_name": "Stephen",
                "last_name": "Pearson",
                "display_name": "Adam's Dad",
                "email": "stevewendy158@sky.co.uk",
                "colour": "#3c477d",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 4,
                    "user_id": 3
                }
            },
            {
                "id": 6,
                "first_name": "David",
                "last_name": "Wilson",
                "display_name": "Heather's Dad",
                "email": "test3@test.com",
                "colour": "#bf7417",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 4,
                    "user_id": 6
                }
            }
        ],
        "rooms": [
            {
                "id": 2,
                "name": "Dining Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 4,
                    "room_id": 2
                }
            },
            {
                "id": 4,
                "name": "Kitchen",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 4,
                    "room_id": 4
                }
            },
            {
                "id": 7,
                "name": "Garage",
                "created_at": "2022-07-24T17:35:18.000000Z",
                "updated_at": "2022-07-24T17:35:18.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 4,
                    "room_id": 7
                }
            }
        ],
        "priority": {
            "id": 1,
            "colour": "#008450",
            "created_at": "2022-07-24T17:35:18.000000Z",
            "updated_at": "2022-07-24T17:35:18.000000Z",
            "deleted_at": null
        }
    },
    {
        "id": 5,
        "name": "Install New Flooring",
        "status_id": 3,
        "priority_id": 1,
        "created_at": "2022-07-24T17:35:21.000000Z",
        "updated_at": "2022-07-24T17:35:21.000000Z",
        "deleted_at": null,
        "status": {
            "id": 3,
            "name": "In Progress",
            "colour": "#005A8C",
            "created_at": "2022-07-24T17:35:16.000000Z",
            "updated_at": "2022-07-24T17:35:16.000000Z",
            "deleted_at": null
        },
        "notes": [],
        "users": [
            {
                "id": 1,
                "first_name": "Adam",
                "last_name": "Pearson",
                "display_name": "Adam Pearson",
                "email": "adam.pearson94@gmail.com",
                "colour": "#32a852",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 5,
                    "user_id": 1
                }
            },
            {
                "id": 5,
                "first_name": "Susan",
                "last_name": "Wilson",
                "display_name": "Heather's Mum",
                "email": "test2@test.com",
                "colour": "#ad3798",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 5,
                    "user_id": 5
                }
            },
            {
                "id": 6,
                "first_name": "David",
                "last_name": "Wilson",
                "display_name": "Heather's Dad",
                "email": "test3@test.com",
                "colour": "#bf7417",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "pivot": {
                    "task_id": 5,
                    "user_id": 6
                }
            }
        ],
        "rooms": [
            {
                "id": 1,
                "name": "Living Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 5,
                    "room_id": 1
                }
            },
            {
                "id": 2,
                "name": "Dining Room",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 5,
                    "room_id": 2
                }
            },
            {
                "id": 3,
                "name": "Hallway",
                "created_at": "2022-07-24T17:35:17.000000Z",
                "updated_at": "2022-07-24T17:35:17.000000Z",
                "deleted_at": null,
                "pivot": {
                    "task_id": 5,
                    "room_id": 3
                }
            }
        ],
        "priority": {
            "id": 1,
            "colour": "#008450",
            "created_at": "2022-07-24T17:35:18.000000Z",
            "updated_at": "2022-07-24T17:35:18.000000Z",
            "deleted_at": null
        }
    }
]