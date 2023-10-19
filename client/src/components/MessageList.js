import React, { useState, useEffect } from 'react';
import { List, Typography, Container, Divider } from '@mui/material';
import MessageItem from './MessageItem';
import NewMessage from './NewMessage';

function MessageList() {
    const [messages, setMessages] = useState([
        {
            user: 'Alice',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque bibendum feugiat vel non erat. Fusce varius, velit vel dignissim accumsan, ex purus mattis quam, id tincidunt neque justo a dolor. Nullam quis sagittis eros. Nullam posuere arcu sed magna fermentum, sit amet tristique elit vulputate. Curabitur accumsan, lorem et condimentum euismod, metus arcu congue justo, sit amet eleifend purus turpis in libero. Fusce feugiat dolor et hendrerit feugiat.',
            added: new Date(),
        },
        {
            user: 'Bob',
            text: 'Suspendisse cursus augue nec tortor pellentesque, id scelerisque nulla ultricies. Phasellus sem sapien, dignissim vel risus quis, dapibus tristique nisl. Maecenas suscipit quam nec metus cursus vehicula. Nulla at lacus vitae est tincidunt iaculis non eu nunc. Vestibulum fermentum nisi vel sapien malesuada, eu dapibus ipsum laoreet.',
            added: new Date(),
        },
        {
            user: 'Charlie',
            text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ultricies ipsum ut quam iaculis, a ultricies est bibendum. Nunc ut orci eu libero efficitur venenatis. Nulla facilisi. Etiam euismod, elit quis varius tincidunt, purus elit varius erat, at dignissim erat ante eget ligula. Sed feugiat ligula ut arcu commodo, id egestas risus accumsan.',
            added: new Date(),
        },
        {
            user: 'David',
            text: 'Vivamus dignissim mauris et enim dignissim, vel tristique odio facilisis. Integer suscipit sagittis risus, id viverra arcu viverra non. Aliquam erat volutpat. Nulla pharetra velit nec semper bibendum. Suspendisse potenti. Fusce vel sapien nec arcu convallis dignissim. Fusce vehicula laoreet purus, in eleifend odio aliquam eget.',
            added: new Date(),
        },
        {
            user: 'Eve',
            text: 'Duis id ligula non dui dignissim vehicula vel a erat. Nam non volutpat libero, in posuere odio. Sed feugiat justo vel massa fringilla ultricies. Fusce scelerisque viverra laoreet. Aenean vitae ipsum luctus, hendrerit metus ut, laoreet odio. Vestibulum tempus, elit id vulputate bibendum, nunc sapien varius massa, nec fringilla massa eros ut metus.',
            added: new Date(),
        },
        {
            user: 'Frank',
            text: 'Cras aliquam, quam eget vestibulum vehicula, odio ex suscipit dolor, vel fermentum ex sapien nec enim. Curabitur euismod cursus eros, vel cursus ligula iaculis in. Nam a odio ac tortor auctor ullamcorper. Nam eu vehicula ligula. Proin gravida euismod eros, eu tincidunt nulla. Nunc sed suscipit nulla. Vestibulum id urna a ligula bibendum venenatis.',
            added: new Date(),
        },
    ]);

    useEffect(() => {
        fetch('/api/messages') // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((error) => console.error('Error:', error));
    }, []);

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
                <div style={{ position: "sticky" , top: '0' }}>
                    <Typography variant="h5" sx={{ mt: 2 }}>Message List</Typography>
                    <Divider sx={{ mb: 2, mt: 1, color: '#FF6B6B' }} role="presentation" />
                </div>
                <List sx={{overflowY:'scroll' , }}>
                    {messages.map((message, index) => (
                        <MessageItem
                            key={index}
                            user={message.user}
                            text={message.text}
                            added={message.added}
                        />
                    ))}
                </List>
                <NewMessage/>
            </Container>
        </div>
    );
}

export default MessageList;
