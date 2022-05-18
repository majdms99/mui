import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { Home, Settings, CoPresent, Groups, HowToReg, DynamicFeed, ModeNight } from '@mui/icons-material'

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box p={2} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <DynamicFeed />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <Groups />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <HowToReg />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <CoPresent />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar