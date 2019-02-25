import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DrawerMenu from '../DrawerMenu/DrawerMenu';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        auth: true,
        anchorEl: null,
        isDrawerOpen: false
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleDrawerOpen = () => {
        console.log('DrawerOpen');
        this.setState({ isDrawerOpen: true });
    };

    handleDrawerClose = () => {
        console.log('DrawerClose');
        this.setState({ isDrawerOpen: false });
    };

    render() {
        const { anchorEl, isDrawerOpen } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <div style={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                onClick={this.handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                color="inherit"
                                style={{ flexGrow: 1 }}
                            >
                                TCC Project
                            </Typography>

                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        My Account
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>

                <DrawerMenu
                    isDrawerOpen={isDrawerOpen}
                    handleDrawerClose={this.handleDrawerClose}
                />
            </div>
        );
    }
}

export default Navbar;
