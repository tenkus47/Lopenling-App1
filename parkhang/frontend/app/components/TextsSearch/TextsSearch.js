import React from 'react'
import styles from './TextsSearch.css'

const TextsSearch = props => {
    return (
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
    )
};

export default TextsSearch;