import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';
import UsersDetails from './UsersDetails';
import { Box, CircularProgress, Typography } from '@mui/material';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedUser, setSelectedUser] = useState(null)

    const url = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return (
        <Box>
            <Typography sx={{textAlign: "center"}} variant='h3'>
                Welcome!!!
            </Typography>
            {
                loading && (
                    <Box sx={{width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress color="secondary" />
                    </Box>
                )
            }
            {/* {error && <p>{error}</p>} */}
            {/* <div>
                {!loading && users.length === 0 && (
                    <Typography variant="subtitle1" gutterBottom>
                        No Data to Show
                    </Typography>
                )}
                {users.length > 0 && users.map((user, i) => <User key={i} user={user} setSelectedUser={setSelectedUser}></User>)}
            </div>
            <div>
                <UsersDetails selectedUser={selectedUser}/>
            </div> */}
            <Box sx={{marginTop: "30px", display: "flex",justifyContent: "center", gap: "10%"}}>
                <Box sx={{width: "40%"}}>
                    {
                        error && <p>{error}</p>
                    }
                    {
                        !loading && users.length === 0 && (
                            <Typography variant="subtitle1" gutterBottom>
                                No Data to Show
                            </Typography>
                        )
                    }
                    <div>
                        <Typography sx={{mb: "30px" ,textAlign: "center"}} variant='h4'>
                            Users List
                        </Typography>
                        {
                            users.length > 0 && users.map((user, i) => 
                            <User key={i} user={user} setSelectedUser={setSelectedUser}></User>
                            )
                        }
                    </div>
                </Box>
                <Box sx={{width: "40%"}}>
                    <Typography variant='h4'>
                        UserDetails
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
};

export default Users;