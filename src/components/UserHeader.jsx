import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";
import CustomIconImage from "../assets/images/call_FILL0_wght300_GRAD0_opsz24 1.png";
import VideoIconImage from "../assets/images/videocam_FILL0_wght300_GRAD0_opsz24 1.png";
import MoreVertIcon from "../assets/images/More vertical.png";

function UserHeader({ user , toggleChatMedia }) {

  return (
    <div>
      <Box className="UserHead">
        <Box>
          <List>
            <ListItem button key={user.id}>
              <ListItemIcon>
                <Avatar alt={user.name} src={user.avatar} />
              </ListItemIcon>
              <ListItemText
                primary={user.name}
                secondary={user.chatStatus}
                sx={{
                  ".MuiTypography-body1": {
                    fontSize: "14px",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#2A3547",
                    fontWeight:"700"
                  },
                  "& .MuiTypography-body2": {
                    fontSize: "14px",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#7C8FAC",
                    fontWeight:"600"
                  },
                }}
              />
            </ListItem>
          </List>
        </Box>
        <Box className="icons">
          <IconButton size="small" color="white">
            <img
              src={CustomIconImage}
              alt="CallIcon"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>
          <IconButton size="small" color="white">
            <img
              src={VideoIconImage}
              alt="VideoIcon"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>
          <IconButton size="small" color="white" onClick={toggleChatMedia}>
            <img
              src={MoreVertIcon}
              alt="MoreVertIcon"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default UserHeader;
