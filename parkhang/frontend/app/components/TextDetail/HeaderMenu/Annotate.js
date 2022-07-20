import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const ToggleButton = styled(MuiToggleButton)(({ selectedcolor }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: selectedcolor,
    },
}));
const theme = createTheme({
    palette: {
        text: {
            primary: "#00398e",
        },
    },
});

function Annotate(props) {
    return (
        <ThemeProvider theme={theme}>
            <ToggleButton
                value="Annotate"
                selected={props.isAnnotating}
                style={{
                    padding: 0,
                    marginRight: 10,
                }}
                selectedcolor="#053982"
                onClick={() => props.changeIsAnnotating(!props.isAnnotating)}
            >
                <Tooltip title="Annotate">
                    <EditIcon />
                </Tooltip>
            </ToggleButton>
        </ThemeProvider>
    );
}

export default Annotate;
