import React, { Component } from 'react';
import {
    Drawer,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const DrawerMenu = ({ isDrawerOpen, handleDrawerClose }) => (
    <div>
        <Drawer
            variant="persistent"
            anchor="left"
            open={isDrawerOpen}
            style={{ width: '250px' }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 8px',
                    justifyContent: 'flex-end'
                }}
            >
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
        </Drawer>
    </div>
);

export default DrawerMenu;
