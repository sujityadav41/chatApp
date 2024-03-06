import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import { SearchOutlined } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function UserList({ users, onUserSelect }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const StyledBadge = styled(Badge)(({ theme, color }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: color,
      color: color,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <div>
      <List>
        <ListItem button key="RemySharp">
          <ListItemIcon>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              color="#44b700"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </StyledBadge>
          </ListItemIcon>
          <ListItemText
            primary="Mathew Anderson"
            secondary="Marketing Director"
          ></ListItemText>
          <IconButton size="small" color="white">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      </List>
      <Grid item xs={12} style={{ padding: "10px" }}>
        <TextField
          fullWidth
          placeholder="Search contacts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <List>
        {filteredUsers.map((user) => (
          <ListItem button key={user.id} onClick={() => onUserSelect(user)}>
            <ListItemIcon>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                color={user.chatStatus === "Online" ? "#44b700" : "#FFA500"}
              >
                <Avatar
                  alt={user.name}
                  src={user.avatar}
                />
              </StyledBadge>
            </ListItemIcon>
            <ListItemText primary={user.name} secondary={user.status} />
            <ListItemText
              secondary={user.recentMessage[0].time}
              align="right"
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UserList;
