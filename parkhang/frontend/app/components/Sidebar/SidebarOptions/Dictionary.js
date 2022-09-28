import React from "react";
import styles from "./ResourceOption.css";
import { Typography, Box } from "@mui/material";
import DiscourseForum from "components/utility/discourseForum";
function Dictionary() {
    return (
        <>
            <Typography variant="h6" gutterBottom component="div">
                Dictionary
            </Typography>
            <Box p={2}>
                <input type="text" placeholder="search Terms"></input>
            </Box>
            <DiscourseForum  topicId={1433}/>
        </>
    );
}

export default Dictionary;
