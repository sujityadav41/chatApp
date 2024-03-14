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
  ListItemButton,
  Collapse,
} from "@mui/material";
import styled from "@emotion/styled";
import { ExpandLess, ExpandMore, SearchOutlined } from "@mui/icons-material";
import img1 from "../assets/images/Frame_1000003310.png";
import MoreVertIcon from "../assets/images/More vertical.png";
import { Box } from "@mui/system";

const StyledList = styled(List)({
  maxHeight: "500px",
  overflowY: "auto",
  width: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  "scrollbar-width": "none",
});

function UserList({ users, onUserSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = React.useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = () => {
    setOpen(!open);
  };

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
        <ListItem className="listItem" button key="RemySharp">
          <ListItemIcon>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              color="#12DEB9"
            >
              <Avatar alt="Remy Sharp" src={img1} />
            </StyledBadge>
          </ListItemIcon>
          <ListItemText
            primary="Mathew Anderson"
            secondary="Marketing Director"
            sx={{
              ".MuiTypography-body1": {
                fontSize: "14px",
                fontFamily: "Plus Jakarta Sans",
                color: "#2A3547",
                fontWeight: "700",
              },
              "& .MuiTypography-body2": {
                fontSize: "14px",
                fontFamily: "Plus Jakarta Sans",
                color: "#7C8FAC",
                fontWeight: "600",
              },
            }}
          ></ListItemText>
          <IconButton size="small" color="white">
            <img
              src={MoreVertIcon}
              alt="MoreVertIcon"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>
        </ListItem>
      </List>
      <Grid item xs={12} style={{ padding: "10px 30px" }}>
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
          inputProps={{
            style: {
              padding: "10px",
              border: "#EAEFF4",
              color: "#7C8FAC",
              fontSize: "14px",
              fontFamily: "Plus Jakarta Sans",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#EAEFF4",
              },
            },
          }}
        />
        <List>
          <ListItemButton onClick={handleClick}>
            <Box display="flex" alignItems="center">
              <ListItemText
                sx={{
                  ".MuiTypography-body1": {
                    fontSize: "14px",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#7C8FAC",
                    fontWeight: "500",
                  },
                }}
                primary="Recent Chats"
              />
              {open ? (
                <ExpandLess sx={{ color: "#7C8FAC" }} />
              ) : (
                <ExpandMore sx={{ color: "#7C8FAC" }} />
              )}
            </Box>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding></List>
          </Collapse>
        </List>
      </Grid>
      <StyledList className="userlist-main">
        {filteredUsers.map((user) => (
          <ListItem
            className="listItem"
            button
            key={user.id}
            onClick={() => onUserSelect(user)}
          >
            {console.log(user.avatar, "user.avatar")}
            <ListItemIcon>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                color={user.chatStatus === "Online" ? "#12DEB9" : "#FFA500"}
              >
                <Avatar alt={user.name} src={user.avatar} />
              </StyledBadge>
            </ListItemIcon>
            <ListItemText
              primary={user.name}
              secondary={user.status}
              sx={{
                ".MuiTypography-body1": {
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#2A3547",
                  fontWeight: "700",
                },
                "& .MuiTypography-body2": {
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#7C8FAC",
                  fontWeight: "600",
                },
              }}
            />
            <ListItemText
              secondary={user.recentMessage[0].time}
              align="right"
              sx={{
                ".MuiTypography-root": {
                  fontSize: "12px",
                  color: "#7C8FAC",
                },
              }}
            ></ListItemText>
          </ListItem>
        ))}
      </StyledList>
    </div>
  );
}

export default UserList;
