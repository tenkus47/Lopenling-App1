import React from "react";
import TextSearch from "../../TextsSearch";
import styles from "./Search.css";
import TextList from "../../../containers/TextListContainer";
import { Typography, Box } from "@mui/material";

function Search() {
    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom component="div">
                Search
            </Typography>
            <TextSearch />
            <TextList />
        </Box>
    );
}

export default Search;
