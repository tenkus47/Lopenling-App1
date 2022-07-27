// @flow
import React, { useState, useEffect, memo } from "react";
import classnames from "classnames";
import { FormattedMessage, injectIntl } from "react-intl";
import styles from "./SelectVersion.css";
import Witness from "lib/Witness";
import useLocaleStorage from "components/utility/useLocalStorage";
import { NativeSelect } from "@mui/material";
import { withStyles } from "@mui/styles";

export type Props = {
    witnesses: Witness[],
    activeWitness: Witness | null,
    onSelectedWitness: (witness: Witness) => void,
    user: {},
};

const style = (theme) => ({
    root: {
        minWidth: 60,
        padding: 0,
        textAlign: "center",
        fontWeight: "bold",
    },
    selectEmpty: {
        paddingLeft: "6px",
        backgroundColor: "transparent",
    },
    select: {
        color: "black",
        "&:not([multiple]) option": {
            backgroundColor: "#eee",
        },
    },
});

const SelectVersion = (props: Props) => {
    let witnesses;
    let tabName = "";
    let { classes: classtype } = props;
    let r = props.witnesses.findIndex((l) => l.id === props.activeWitness?.id);
    const [temp, setTemp] = useState(null);
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
        <NativeSelect
            onChange={(e) => setTemp(e.target.value)}
            className={styles.selectVersion}
            defaultValue={temp}
            label="Version2"
            classes={{
                root: classtype.selectEmpty,
                select: classtype.select,
            }}
        >
            {witnesses.map((witness, key) => {
                if (witness.id === props.activeWitness?.id)
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
                        key={`versionSelect2-${key}`}
                        value={key}
                        className={classes}
                    >
                        {tabName}
                    </option>
                );
            })}
        </NativeSelect>
    );
};

export default memo(injectIntl(withStyles(style)(SelectVersion)));
