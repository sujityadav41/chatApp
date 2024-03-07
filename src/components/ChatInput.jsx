import React, { useState } from 'react';
import { TextField, Grid, IconButton, Divider } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';

function ChatInput({ onSendMessage }) {
 const [message, setMessage] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
 };

 return (
    <div>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid container style={{ padding: '20px' }}>
          <Grid item xs={10} sx={{ display: 'flex' }}>
            <IconButton size="small" color="white">
              <InsertEmoticonIcon />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Type a Message"
              variant="standard"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                pr: 2,
                height: '40px', 
                width: '100%', 
                position: 'sticky', 
                bottom: 0,
                '& .MuiInput-root:before': {
                  borderBottom: 'none',
                },
             }}
            />
          </Grid>
          <Grid item xs={2} align="right">
            <IconButton size="small" color="white">
              <ImageIcon />
            </IconButton>
            <IconButton size="small" color="white">
              <AttachFileIcon />
            </IconButton>
            <IconButton size="small" color="white">
              <MicNoneIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </div>
 );
}

export default ChatInput;
