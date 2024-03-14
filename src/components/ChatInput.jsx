import React, { useState } from "react";
import { TextField, Grid, IconButton, Divider } from "@mui/material";
import InsertEmoticonIcon from "../assets/images/add_reaction_FILL0_wght300_GRAD0_opsz24 1.png";
import ImageIcon from "../assets/images/ImageIcon.png";
import AttachFileIcon from "../assets/images/attach_file_FILL0_wght300_GRAD0_opsz24 1.png";
import MicNoneIcon from "../assets/images/mic_FILL0_wght300_GRAD0_opsz24 1.png";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="inputText-main">
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={10} sx={{ display: "flex" }}>
            <IconButton size="small" color="white">
              <img
                src={InsertEmoticonIcon}
                alt="InsertEmoticonIcon"
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Type a Message"
              variant="standard"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                marginLeft:"5px",
                pr: 2,
                "& .MuiInput-root:before": {
                  borderBottom: "none !important", 
                },
                "& .MuiInput-root:after": {
                  borderBottom: "none !important", 
                },
                "& .MuiInput-root:hover": {
                  borderBottom: "none !important",
                },
                
              }}
            />
          </Grid>
          <Grid item xs={2} align="right">
            <IconButton size="small" color="white">
              <img
                src={ImageIcon}
                alt="ImageIcon"
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
            <IconButton size="small" color="white">
              <img
                src={AttachFileIcon}
                alt="AttachFileIcon"
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
            <IconButton size="small" color="white">
              <img
                src={MicNoneIcon}
                alt="MicNoneIcon"
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default ChatInput;
