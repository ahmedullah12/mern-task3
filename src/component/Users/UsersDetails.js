import React from 'react';
import { Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UsersDetails = ({ selectedUser, setSelectedUser }) => {
  const { avatar, jobTitle, Bio, profile } = selectedUser;

  const handleClose = () => {
    setSelectedUser(null);
  };

  return (
    <Paper sx={{
      py: "20px",
      px: "40px",
      position: "relative",
      backgroundColor: "#f8f8f8",
      borderRadius: "10px",
    }} elevation={3}>

      {/* close details */}
      <p onClick={handleClose} style={{ position: "absolute", top: "2%", right: "2%", cursor: "pointer", color: "#555" }}>
        <CloseIcon />
      </p>

      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
        <img width="150px" src={avatar} alt={profile.firstName} />
      </div>
      <Typography sx={{ fontWeight: "bold", color: "#333" }} variant="h6">Name: {`${profile.firstName} ${profile.lastName}`}</Typography>
      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="subtitle1"><span style={{ fontWeight: "bold" }}>Username:</span> {`${profile.username}`}</Typography>
        <Typography variant="subtitle1"><span style={{ fontWeight: "bold" }}>Email:</span> {`${profile.email}`}</Typography>
      </div>
      <Typography variant="subtitle1"><span style={{ fontWeight: "bold" }}>Job Title:</span> {jobTitle}</Typography>
      <Typography variant="body1"><span style={{ fontWeight: "bold" }}>Bio:</span> {Bio}</Typography>

    </Paper>
  );
};

export default UsersDetails;
