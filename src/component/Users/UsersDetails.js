import React from 'react';
import { Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UsersDetails = ({selectedUser, setSelectedUser}) => {
  const {avatar, jobTitle, Bio, profile} = selectedUser;
  return (
    <Paper sx={{
      py: "20px",
      px: "40px",
      position: "relative"
    }} elevation={3}>

      {/* close details */}
      <p onClick={() => setSelectedUser(null)} style={{position: "absolute", top: "2%", right: "2%", cursor: "pointer"}}><CloseIcon/></p>

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