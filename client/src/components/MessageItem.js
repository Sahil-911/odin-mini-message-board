import React from 'react';
import { ListItem, ListItemText, Typography, Avatar } from '@mui/material';

const MessageItem = ({ user, text, added }) => {
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(date).toLocaleString(undefined, options);
    };

    return (
        <ListItem sx={{ mb: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                        <Avatar
                            alt={user}
                            src={`URL_TO_USER_AVATAR_IMAGE`}
                            sx={{ backgroundColor: '#FF6B6B' }}
                        />
                        <ListItemText
                            primary={user}
                            secondaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                        />
                    </div>
                    <Typography variant="caption" color="textSecondary">
                        {formatDate(added)}
                    </Typography>
                </div>
                <Typography variant="body2" color="textPrimary">
                    {text}
                </Typography>
            </div>
        </ListItem>
    );
};

export default MessageItem;
