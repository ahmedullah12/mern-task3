import { Paper, Typography } from '@mui/material';
import React from 'react';

const UsersDetails = ({selectedUser}) => {
  console.log(selectedUser);
  const {avatar, jobTitle, Bio, profile} = selectedUser;
  return (
    <Paper sx={{
      py: "20px",
      px: "40px",

    }} elevation={3}>
      <div style={{marginBottom: "20px", display: "flex", justifyContent: "center"}}>
        <img width="150px" src={avatar} alt={profile.firstName} />
      </div>
      <Typography sx={{fontWeight: "bold"}} variant="h6">Name: {`${profile.firstName} ${profile.lastName}`}</Typography>
      <div style={{display: "flex", gap: "20px"}}>
      <Typography variant="subtitle1"><span style={{fontWeight: "bold"}}>userName:</span> {`${profile.username}`}</Typography> 
      <Typography variant="subtitle1"><span style={{fontWeight: "bold"}}>email:</span> {`${profile.email}`}</Typography> 
      </div>
      <Typography variant="subtitle1"><span style={{fontWeight: "bold"}}>Job Title:</span> {jobTitle}</Typography>
      <Typography variant="body1"><span style={{fontWeight: "bold"}}>Bio:</span> {Bio}</Typography>

    </Paper>
  );
};

export default UsersDetails;