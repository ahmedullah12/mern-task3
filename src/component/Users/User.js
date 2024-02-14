import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';

export default function User({user, setSelectedUser}) {
  const {avatar, profile } = user;



  return (
    <div>
        <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={profile.firstName} src={avatar} />
                </ListItemAvatar>
                <ListItemText
                primary={`${profile.firstName} ${profile.lastName}`}
                />

                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    size='small'
                    startIcon={<BadgeIcon />}
                    onClick={() => setSelectedUser(user)}
                    >
                    Details
                </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    </div>
  );
}