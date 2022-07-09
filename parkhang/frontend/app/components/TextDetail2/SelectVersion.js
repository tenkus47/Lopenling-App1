// @flow
import React, { useState, useEffect, memo } from "react";
import classnames from "classnames";
import { FormattedMessage, injectIntl } from "react-intl";
import styles from "./SelectVersion.css";
import Witness from "lib/Witness";
import useLocaleStorage from "../../bodyComponent/utility/useLocalStorage";

export type Props = {
    witnesses: Witness[],
    activeWitness: Witness | null,
    onSelectedWitness: (witness: Witness) => void,
    user: {},
};

const SelectVersion = (props: Props) => {
    let witnesses;
    let tabName = "";
    let r = props.witnesses.findIndex((l) => l.id === props.activeWitness.id);
    const [temp, setTemp] = useLocaleStorage("selectedWitness2", 0);
;
    let classes = [styles.selectOptions];
    if (props.witnesses) {
        witnesses = props.witnesses.map((witness) => witness);
        classes = [styles.tab];
        witnesses.sort((a, b) => {
            if (a.isWorking) {
                return -1;
            }
            if (b.isWorking) {
                return 1;
            }
            if (a.isBase) {
                return -1;
            }
            if (b.isBase) {
                return 1;
            }
            return 0;
        });
        witnesses = witnesses.sort((a, b) => a.id - b.id);
    }

    useEffect(() => {
        if (props.witnesses.length > 0) {
            props.onSelectedWitness(witnesses[temp]);
        }
    }, [temp]);
    return (
        <select
            onChange={(e) => setTemp(e.target.value)}
            className={styles.selectVersion}
            value={r}
        >
            {witnesses.map((witness, key) => {
                if (witness.id === props.activeWitness.id)
                    classes.push(styles.selected);
                tabName = witness.source.name;

                if (witness.isWorking) {
                    tabName =
                        props.intl.locale === "en"
                            ? props.user.name === "User"
                                ? "Working"
                                : "My Edition"
                            : "མཉམ་འབྲེལ་པར་མ།";
                }

                return (
                    <option
                        key={`versionSelect-${key}`}
                        value={key}
                        className={classes}
                    >
                        {tabName}
                    </option>
                );
            })}
        </select>
    );
};

export default memo(injectIntl(SelectVersion));
