// @flow
import * as React from "react";
import GraphemeSplitter from "grapheme-splitter";
import reactStringReplace from "react-string-replace";
import styles from "./TextList.css";

type Props = {
    name: string,
    searchTerm?: string
};

export default class TextName extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const name = this.props.name;
        let nameHtml = name;
        if (this.props.searchTerm) {
            const searchTerm = this.props.searchTerm;
            const splitter = new GraphemeSplitter();
            const graphemes = splitter.splitGraphemes(name);
            const start = name.indexOf(searchTerm);
            const end = start + searchTerm.length;
            let position = 0;
            let foundGraphemes = "";
            if (start > -1) {
                for (let i = 0; i < graphemes.length; i++) {
                    let grapheme = graphemes[i];
                    if (position >= start && position < end) {
                        foundGraphemes += grapheme;
                    }
                    position += grapheme.length;
                }
            }
            if (foundGraphemes.length > 0) {
                nameHtml = reactStringReplace(
                    name,
                    foundGraphemes,
                    (match, i) => (
                        <span className={styles.highlight}>{match}</span>
                    )
                );
            }
        }
        return <span className={styles.textName}>{nameHtml}</span>;
    }
}
