import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import ChatMedia from "./ChatMedia";

function ChatList({ messages, user, isChatMediaVisible }) {
  const StyledList = styled(List)({
    overflowY: "auto",
    width: "100%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
    borderRight: isChatMediaVisible ? "1px solid #e0e0e0" : "none",
  });
  return (
    <div>
      <Divider />
      <Box className="head">
        <StyledList className="messageArea borderRight500">
          <Grid item xs={12}>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: !message?.messageSentByYou
                        ? "flex-end"
                        : "flex-start",
                    }}
                    item
                    xs={12}
                  >
                    <span
                      className={`chat-mins ${
                        !message?.messageSentByYou && "user-sent-message"
                      }`}
                    >
                      <ListItemIcon>
                        {message?.messageSentByYou && (
                          <Avatar alt="John Wick" src={user.avatar} />
                        )}
                        <ListItemText
                          primary={
                            message.messageSentByYou &&
                            `${user.name.split(" ")[0]},`
                          }
                          secondary={message.time}
                          sx={{
                            paddingLeft: "10px",
                            display: "flex",
                            alignItems:"center",
                            gap: "5px",
                            ".MuiTypography-body1": {
                              fontSize: "12px",
                              fontFamily: "Plus Jakarta Sans",
                              color: "#7C8FAC",
                            },
                            "& .MuiTypography-body2": {
                              fontSize: "12px",
                              fontFamily: "Plus Jakarta Sans",
                              color: "#7C8FAC",
                            },
                          }}
                        ></ListItemText>
                      </ListItemIcon>
                      <ListItemText
                        primary={message.text}
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "14px",
                            color: "#5A6A85",
                            backgroundColor: "#F2F6FA",
                            padding: "10px",
                            borderRadius: "10px",
                            marginLeft: "50px",
                          },
                        }}
                      />
                    </span>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </Grid>
        </StyledList>
        {isChatMediaVisible && (
          <Grid item xs={6}>
            <ChatMedia />
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default ChatList;
