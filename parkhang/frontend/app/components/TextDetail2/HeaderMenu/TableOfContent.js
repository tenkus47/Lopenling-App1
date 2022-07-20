import React, { useState } from "react";
import {
    Button,
    Drawer,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function TableOfContent() {
    const [toggleDrawer, setToggleDrawer] = useState();

    return (
        <React.Fragment key="right">
            <Button onClick={() => setToggleDrawer(true)}>
                <MenuIcon />
            </Button>
            <Drawer
                anchor="right"
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
            >
                <Content />
            </Drawer>
        </React.Fragment>
    );
}

export default TableOfContent;

const Content = () => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom component="div" p={2}>
                Table of Content 2
            </Typography>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="chapter1" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="chapter2" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};
