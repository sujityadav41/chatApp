import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function UserHeader({ user }) {
 return (
    <div>
      <Box className="head">
        <Box>
          <List>
            <ListItem button key={user.id}>
              <ListItemIcon>
                <Avatar alt={user.name} src={user.avatar} />
              </ListItemIcon>
              <ListItemText primary={user.name} secondary={user.chatStatus} />
            </ListItem>
          </List>
        </Box>
        <Box className="icons">
          <IconButton size="small" color="white">
            <CallIcon />
          </IconButton>
          <IconButton size="small" color="white">
            <VideocamIcon />
          </IconButton>
          <IconButton size="small" color="white">
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
 );
}

export default UserHeader;
