import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function NewMessage({handleSubmit}) {
    const [text, setText] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
        }
    }, []);

    useEffect(() => {
        if (user.length) {
            localStorage.setItem('user', user);
        }
    }, [user]);


    return (
        <div style={{ marginBottom: '20px' }}>
            <form>
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
                            />
                        </div>
                    </div>
                    <div style={{ alignSelf: 'flex-end', marginLeft: '10px', marginBottom: '17px' }}>

                        <Button type="submit" variant="contained" onClick={(e) => {
                            handleSubmit(e,user,text).then(() => {
                                setText('');
                                setUser('');
                            })
                        }} color="primary" sx={{ height: '40px' }}>
                            <SendIcon />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewMessage;
