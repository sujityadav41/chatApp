import { Box, Card, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import UserList from "../components/UserList";
import UserHeader from "../components/UserHeader";
import ChatList from "../components/ChatList";
import ChatInput from "../components/ChatInput";
import chatData from "../data/chatData.json";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setMessages(user.recentMessage ? user.recentMessage : []);
  };

  const handleSendMessage = (message) => {
    const newMessage = { text: message, time: new Date().toLocaleTimeString() };
    setMessages([...messages, newMessage]);
  };

  const [isChatMediaVisible, setIsChatMediaVisible] = useState(false);

  const toggleChatMedia = () => {
     setIsChatMediaVisible(!isChatMediaVisible);
  };

  return (
    <Container>
      <Box sx={{ padding: "20px 0px" }}>
        <Card sx={{ boxShadow: 10 }}>
          <Grid container className="chatSection">
            <Grid item xs={4} className="borderRight500">
              <UserList
                users={chatData.users}
                onUserSelect={handleUserSelect}
              />
            </Grid>
            <Grid item xs={8} sx={{ position: "relative" }}>
              {selectedUser && (
                <>
                  <UserHeader user={selectedUser} toggleChatMedia={toggleChatMedia} />
                  <ChatList messages={messages} user={selectedUser} isChatMediaVisible={isChatMediaVisible} />
                  <ChatInput onSendMessage={handleSendMessage} />
                </>
              )}
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default Chat;
