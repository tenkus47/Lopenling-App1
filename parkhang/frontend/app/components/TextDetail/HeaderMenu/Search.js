import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Search({ handleWindowSearch }) {
    return (
        <Button
            size="small"
            variant="text"
            onClick={handleWindowSearch}
            style={{ padding: 0, color: "black" }}
        >
            <SearchIcon />
        </Button>
    );
}

export default Search;
