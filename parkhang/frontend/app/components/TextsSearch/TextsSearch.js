// @flow
import React from "react";
import styles from "./TextsSearch.css";
import { injectIntl } from "react-intl";

type Props = {
    searchValue: string,
    searchChanged: (e: SyntheticEvent<HTMLInputElement>) => void,
    selectedSearchOption?: (e: SyntheticEvent<HTMLSelectElement>) => void,
    minimiseButtonClicked: () => void,
    intl: { formatMessage: ({ [id: string]: string }) => string }
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
                    placeholder={props.intl.formatMessage({
                        id: "leftbar.search"
                    })}
                />
                <select onChange={props.selectedSearchOption}>
                    <option>
                        {props.intl.formatMessage({
                            id: "leftbar.titles"
                        })}
                    </option>
                </select>
            </div>
        </div>
    );
};

export default injectIntl(TextsSearch);
