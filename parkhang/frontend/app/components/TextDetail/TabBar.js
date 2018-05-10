// @flow
import React from "react";
import classnames from "classnames";
import styles from "./TabBar.css";
import Witness from "lib/Witness";

export type Props = {
    witnesses: Witness[],
    activeWitness: Witness | null,
    onSelectedWitness: (witness: Witness) => void
};

export default class TabBar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let tabs = [];
        if (this.props.witnesses) {
            const witnesses = this.props.witnesses.map(witness => witness);
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
            for (let witness of witnesses) {
                let classes = [styles.tab];
                if (witness === this.props.activeWitness) {
                    classes.push(styles.selected);
                }
                tabs.push(
                    <div
                        className={classnames(...classes)}
                        onClick={() => {
                            this.props.onSelectedWitness(witness);
                        }}
                        key={witness.id}
                    >
                        {witness.source.name}
                    </div>
                );
            }
        }

        return <div className={styles.tabBar}>{tabs}</div>;
    }
}
