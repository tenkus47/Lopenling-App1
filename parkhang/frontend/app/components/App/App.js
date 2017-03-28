import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Header from 'components/Header'
import TextsSearchContainer from 'components/TextsSearch/TextsSearchContainer'
import TextListContainer from 'containers/TextListContainer'
import TextDetailContainer from 'components/TextDetail/TextDetailContainer'
import TextListTabContainer from 'components/TextList/TextListTabContainer'

import styles from './App.css'
import utilStyles from 'css/util.css'

const App = props => {
    let textListClassnames = [styles.listContainer];
    if (props.textListIsVisible) {
        textListClassnames.push(styles.showListContainer);
    } else {
        textListClassnames.push(styles.hideListContainer);
    }
    return (
        <div className={classnames(styles.container, utilStyles.flex, utilStyles.flexColumn)}>
            <Header/>
            <div className={classnames(styles.interface, utilStyles.flex)}>
                <div className={classnames(...textListClassnames)}>
                    <TextListTabContainer />
                    <TextsSearchContainer />
                    <TextListContainer />
                </div>
                <TextDetailContainer />
            </div>
        </div>
    )
};

export default App;
