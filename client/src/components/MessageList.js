import React, { useState, useEffect } from 'react';
import { List, Typography, Container, Divider } from '@mui/material';
import MessageItem from './MessageItem';
import NewMessage from './NewMessage';

function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('https://odin-mini-message-board-api.onrender.com/api/messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((error) => console.error('Error:', error));
    }, []);



    const handleSubmit = async (e, user, text) => {
        e.preventDefault();

        const messageData = {
            user: user, // Match the key names to your backend schema
            text: text,
            added: new Date(),
        };

        const response = await fetch('http://localhost:5000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        })
        const { data } = await response.json();
        setMessages(data);
        return true;
    };

    return (
        <div style={{ backgroundColor: '#BEDCFE', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container
                sx={{
                    width: '50vw',
                    height: '90vh',
                    maxWidth: '600px',
                    backgroundColor: '#85BDA6',
                    borderRadius: '10px',
                    boxShadow: '10',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ position: "sticky", top: '0' }}>
                    <Typography variant="h5" sx={{ mt: 2 }}>Message List</Typography>
                    <Divider sx={{ mb: 2, mt: 1, color: '#FF6B6B' }} role="presentation" />
                </div>
                <List sx={{ overflowY: 'scroll', }}>
                    {messages.map((message, index) => (
                        <MessageItem
                            key={index}
                            user={message.user}
                            text={message.text}
                            added={message.added}
                        />
                    ))}
                </List>
                <div style={{ marginTop: 'auto' }}>
                    <NewMessage handleSubmit={handleSubmit} />
                </div>
            </Container>
        </div>
    );
}

export default MessageList;