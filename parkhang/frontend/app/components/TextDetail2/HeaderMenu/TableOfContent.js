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
function TableOfContent(props) {
    const handleClick = () => {
        props.changeShowTableContent(!props.showTableContent);
    };
    return (
        <React.Fragment key="right">
            <Button onClick={handleClick}>
                <MenuIcon />
            </Button>
        </React.Fragment>
    );
}

export default TableOfContent;
