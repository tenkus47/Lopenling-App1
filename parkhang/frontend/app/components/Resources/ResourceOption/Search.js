import React from "react";
import TextSearch from "../../TextsSearch";
import styles from "./Search.css";
import TextList from "../../../containers/TextListContainer";
import { Typography } from "@mui/material";

function Search() {
    return (
        <>
            <Typography variant="h6" gutterBottom component="div">
                Search
            </Typography>
            <div className={styles.SearchResource}>
                <TextSearch />
                <TextList />
            </div>
        </>
    );
}

export default Search;
