import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function NewMessage() {
    const [text, setText] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your actual API endpoint
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, user }),
        })
            .then((response) => response.json())
            .then(() => {
                // Optionally, you can update the message list here to reflect the new message.
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            {/* <Typography variant="h4">Add New Message</Typography> */}
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                        <div style={{ display: 'flex' }}>
                            <TextField
                                label="User"
                                variant="standard"
                                value={user}
                                required
                                onChange={(e) => setUser(e.target.value)}
                                fullWidth // Expand to full width
                                size="small" // Decrease the height
                            />
                        </div>
                        <div>
                            <TextField
                                label="Message"
                                variant="standard"
                                value={text}
                                required
                                onChange={(e) => setText(e.target.value)}
                                fullWidth // Expand to full width
                                size="small" // Decrease the height
                                sx={{ mb: 2 }}
                            />
                        </div>
                    </div>
                    <div style={{ alignSelf: 'center', marginLeft: "10px" }}>
                        <Button type="submit" variant="contained" color="primary">
                            <SendIcon />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewMessage;
