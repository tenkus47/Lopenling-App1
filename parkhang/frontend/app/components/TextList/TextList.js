// @flow
import React from "react";
import classnames from "classnames";
import { AutoSizer } from "react-virtualized/dist/es/AutoSizer";
import { List } from "react-virtualized/dist/es/List";
import * as api from "api";
import GraphemeSplitter from "grapheme-splitter";
import "react-virtualized/styles.css"; // only needs to be imported once
import addTibetanShay from "lib/addTibetanShay";
import styles from "./TextList.css";

type Props = {
    selectedText: api.TextData,
    texts: api.TextData[],
    onSelectedText: (text: api.TextData) => void,
    searchTerm: string
};

class TextList extends React.Component<Props> {
    render() {
        const selectedText = this.props.selectedText;
        const selectedTextId = selectedText ? selectedText.id : -1;
        const texts = this.props.texts;
        const onSelectedText = this.props.onSelectedText;
        const searchTerm = this.props.searchTerm;
        const splitter = new GraphemeSplitter();

        function rowRenderer({ key, index, style }) {
            let className = styles.textListRow;
            const text = texts[index];
            if (text.id == selectedTextId) {
                className = classnames(className, styles.selectedRow);
            }
            let name = addTibetanShay(text.name);

            if (searchTerm.length > 0) {
                const graphemes = splitter.splitGraphemes(name);
                const start = name.indexOf(searchTerm);
                const end = start + searchTerm.length;
                let position = 0;
                let foundGraphemes = "";
                for (let i = 0; i < graphemes.length; i++) {
                    let grapheme = graphemes[i];
                    if (position >= start && position < end) {
                        foundGraphemes += grapheme;
                    }
                    position += grapheme.length;
                }
                if (foundGraphemes.length > 0) {
                    const graphemeSpan =
                        "<span class=" +
                        styles.highlight +
                        ">" +
                        foundGraphemes +
                        "</span>";
                    name = name.replace(foundGraphemes, graphemeSpan);
                }
            }

            const html = {
                __html: name
            };

            return (
                <div
                    key={key}
                    style={style}
                    className={className}
                    onClick={() => {
                        onSelectedText(texts[index]);
                    }}
                >
                    <span
                        className={styles.textName}
                        dangerouslySetInnerHTML={html}
                    />
                </div>
            );
        }

        return (
            <div className={styles.textList}>
                {this.props.texts ? (
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                height={height}
                                rowCount={this.props.texts.length}
                                rowHeight={50}
                                rowRenderer={rowRenderer}
                                width={width}
                            />
                        )}
                    </AutoSizer>
                ) : (
                    <ul className="textList">
                        <li>(no texts)</li>
                    </ul>
                )}
            </div>
        );
    }
}

export default TextList;
