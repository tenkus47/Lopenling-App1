// @flow
import React from "react";
import styles from "./TextsSearch.css";

type Props = {
    searchValue: string,
    searchChanged: (e: SyntheticEvent<HTMLInputElement>) => void,
    selectedSearchOption?: (e: SyntheticEvent<HTMLSelectElement>) => void,
    minimiseButtonClicked: () => void
};

const TextsSearch = (props: Props) => {
    return (
        <div className={styles.textsSearchContainer}>
            <div className={styles.textsSearch}>
                <input
                    type="search"
                    id="textSearchInput"
                    value={props.searchValue}
                    onChange={props.searchChanged}
                    placeholder="Search"
                />
                <select onChange={props.selectedSearchOption}>
                    <option>Titles</option>
                </select>
            </div>
            <div
                className={styles.minify}
                onClick={props.minimiseButtonClicked}
            >
                &lt;&lt;
            </div>
        </div>
    );
};

export default TextsSearch;
