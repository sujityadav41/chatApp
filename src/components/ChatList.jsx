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

function ChatList({ messages, user }) {
  console.log("messages", messages);
  console.log("user",user);

  return (
    <div>
      <Divider />
      <List className="messageArea">
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
                      secondary={message.time}
                      sx={{ paddingLeft: "10px" }}
                    ></ListItemText>
                  </ListItemIcon>
                  <ListItemText primary={message.text} />
                </span>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ChatList;
