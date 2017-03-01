import React from 'react';
import {AutoSizer, List} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import TextsSearchContainer from 'components/TextsSearch/TextsSearchContainer'
import styles from './TextList.css'

class TextList extends React.Component {

    render() {
        const texts = this.props.texts;
        const onSelectedText = this.props.onSelectedText;

        function rowRenderer({
            key, index, isScrolling, isVisible, style
        }) {
            return (
                <div
                    key={key}
                    style={style}
                    className={styles.textListRow}
                    onClick={() => {
                        onSelectedText(texts[index]);
                    }}
                >
                    {texts[index].name}
                </div>
            )
        }

        return (
            <div className={styles.textList}>

                { this.props.texts ?

                    <AutoSizer>
                        {({ height, width }) => (
                        <List
                            height={height}
                            rowCount={this.props.texts.length}
                            rowHeight={40}
                            rowRenderer={rowRenderer}
                            width={width}
                        />
                        )}
                    </AutoSizer>

                    :
                    <ul className="textList">
                        <li>(no texts)</li>
                    </ul>
                }
            </div>
        )
    }
}

export default TextList
