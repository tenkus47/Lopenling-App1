import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Header from 'components/Header'
import TextsSearchContainer from 'components/TextsSearch/TextsSearchContainer'
import TextListContainer from 'containers/TextListContainer'
import TextDetailContainer from 'components/TextDetail/TextDetailContainer'

import styles from './App.css'
import utilStyles from 'css/util.css'

const App = props => {
    // const interfaceClasses = styles.interface + ' ' + 'flex';
    return (
        <div className={classnames(styles.container, utilStyles.flex, utilStyles.flexColumn)}>
            <Header/>
            <div className={classnames(styles.interface, utilStyles.flex)}>
                <div className={styles.listContainer}>
                    <TextsSearchContainer />
                    <TextListContainer />
                </div>
                <TextDetailContainer />
            </div>
        </div>
    )
};

export default App;
