import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function TableOfContent(props) {
    function handleClick() {
        props.changeShowTableContent(!props.showTableContent);
    }
    return (
        <React.Fragment key="right">
            <Button onClick={handleClick}>
                <MenuIcon />
            </Button>
        </React.Fragment>
    );
}

export default TableOfContent;
