import React from "react";
import TextSearch from "../../TextsSearch";
import styles from "./Search.css";
import TextList from "../../../containers/TextListContainer";
function Search() {
    return (
        <div className={styles.SearchResource}>
            <TextSearch />
            <TextList />
        </div>
    );
}

export default Search;
