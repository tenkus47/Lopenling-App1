import React from 'react'
import classnames from 'classnames'
import styles from './TabBar.css'

export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tabs = [];
        if (this.props.witnesses) {
            for (let witness of this.props.witnesses) {
                let classes = [styles.tab];
                if (witness === this.props.activeWitness) {
                    classes.push(styles.selected);
                }
                tabs.push(<div className={classnames(...classes)} onClick={() => {
                    this.props.onSelectedWitness(witness);
                }}>
                    {witness.source.name}
                </div>);
            }
        }

        return (
            <div className={styles.tabBar}>
            {tabs}
            </div>
        );
    }
}