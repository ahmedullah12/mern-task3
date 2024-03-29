import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';
import UsersDetails from './UsersDetails';
import { Box, CircularProgress, Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    const url = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setLoading(false);
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
            setError(err.message);
            setLoading(false);
        });
    }, []);


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Box sx={{mt: "10px"}}>
            <Typography sx={{textAlign: "center"}} variant='h4'>
                Welcome!!!
            </Typography>
            <Typography sx={{textAlign: "center"}} variant='h6'>
                Here you can see users list and users details.
            </Typography>
    
            {/* Users List */}
            <Box sx={{marginTop: "25px", display: "flex",justifyContent: "center", gap: "10%"}}>
                <Box sx={{width: "40%"}}>
                    <Typography sx={{mb: "25px" ,textAlign: "center", borderBottom: "2px solid #333"}} variant='h5' >
                        Users List
                    </Typography>
                    {
                        loading && (
                            <Box sx={{height: "50vh",  display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <CircularProgress color="secondary" />
                            </Box>
                        )
                    }
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
                    {(!loading && users.length) > 0 && (
                        <div>
                            {currentUsers.map((user, i) => (
                                <User key={i} user={user} setSelectedUser={setSelectedUser}></User>
                            ))}
                            <Stack spacing={2} sx={{ marginTop: '20px' }}>
                                {/*
                                Conditionally render Pagination only when not loading
                                */}
                                {!loading && (
                                    <Pagination
                                        count={Math.ceil(users.length / usersPerPage)}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        color="secondary"
                                        renderItem={(item) => (
                                            <PaginationItem
                                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                                {...item}
                                            />
                                        )}
                                    />
                                )}
                            </Stack>
                        </div>
                    )}
                </Box>

                {/* User Details */}
                <Box sx={{width: "40%"}}>
                    <Typography sx={{mb: "25px" ,textAlign: "center", borderBottom: "2px solid #333"}} variant='h5'>
                        UserDetails
                    </Typography>
                    {
                        !selectedUser ? 
                        (<p>Please click user details button to see a user details.</p>)
                        :
                        <UsersDetails selectedUser={selectedUser} setSelectedUser={setSelectedUser}></UsersDetails>
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default Users;