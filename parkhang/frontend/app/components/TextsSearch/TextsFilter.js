// @flow
import React from "react";
import styles from "./TextsFilter.css";
import { injectIntl } from "react-intl";
import Button from "components/UI/Button";

type Props = {
    searchValue: string,
    searchChanged: (searchTerm: string) => void,
    selectedSearchOption?: (e: SyntheticEvent<HTMLSelectElement>) => void,
    minimiseButtonClicked: () => void,
    intl: { formatMessage: ({ [id: string]: string }) => string }
};

const TextsFilter = (props: Props) => {
    let textInput: { current: null | HTMLInputElement } = React.createRef();
   
    const initiateFilter = (e: SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
        if (textInput.current instanceof HTMLInputElement) {
            const searchTerm = textInput.current.value;
            const newLocation=window.location.origin+'/text?author'+"="+searchTerm;
            console.log(newLocation)
            //     props.searchChanged(searchTerm);
        }
    
    };
    return (
        <div className={styles.textsFilterContainer}>
            <div className={styles.textsSearch}>
                <form onSubmit={initiateFilter}>
                    <input
                        type="text"
                        id="textFilterInput"
                        placeholder={props.intl.formatMessage({
                            id: "leftbar.authorFilter"
                        })}
                        ref={textInput}
                    />
                    <Button
                        onClick={initiateFilter}
                        title={props.intl.formatMessage({
                            id: "leftbar.authorFilter"
                        })}
                        noBezel={true}
                    />
                </form>
            </div>
        </div>
    );
};

export default injectIntl(TextsFilter);
