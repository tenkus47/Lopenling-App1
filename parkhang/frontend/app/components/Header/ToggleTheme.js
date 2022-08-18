import { Box, IconButton } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
function ToggleTheme({ changeTheme }) {
    const theme = useTheme();
    const handleThemeChange = () => {
        if (theme.palette.mode === "dark") {
            changeTheme("light");
        } else {
            changeTheme("dark");
        }
    };
    return (
        <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
            {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            )}
        </IconButton>
    );
}

export default ToggleTheme;
