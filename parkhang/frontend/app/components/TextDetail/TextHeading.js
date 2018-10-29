// @flow
import React from "react";
import addTibetanShay from "lib/addTibetanShay";
import styles from "./TextHeading.css";
import TabBar from "./TabBar";
import Witness from "lib/Witness";
import type { TextData } from "api";
import ExportControl from "./ExportControl";

export type Props = {
    witnesses: Witness[],
    selectedText: TextData,
    selectedWitness: Witness,
    onSelectedWitness: () => void,
    onExport?: () => void
};

const TextHeading = (props: Props) => {
    let name = "";
    if (props.selectedText && props.selectedText.name) {
        name = addTibetanShay(props.selectedText.name);
    }
    return (
        <div className={styles.headingContainer}>
            <div className={styles.topRow}>
                <h2 className={styles.textHeading}>{name}</h2>
                {props.selectedWitness && (
                    <ExportControl onClick={props.onExport} />
                )}
            </div>
            <TabBar
                witnesses={props.witnesses}
                activeWitness={props.selectedWitness}
                onSelectedWitness={props.onSelectedWitness}
            />
        </div>
    );
};

export default TextHeading;
