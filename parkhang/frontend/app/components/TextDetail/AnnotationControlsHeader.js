// @flow
import React from "react";
import Button from "components/UI/Button";
import styles from "./AnnotationControlsHeader.css";
import PageBreakIcon from "images/page_break_icon.svg";
import NoteIcon from "images/note.svg";

type Props = {
    addPageBreak: null | (() => void),
    addNote: null | (() => void)
};

class AnnotationControlsHeader extends React.Component<Props> {
    constructor() {
        super();
    }

    render() {
        const allowPageBreak = this.props.addPageBreak != null;
        return (
            <div className={styles.header}>
                <Button
                    title="Note"
                    noBezel={true}
                    icon={
                        <NoteIcon
                            width={15}
                            height={15}
                            style={{ fill: "#fff" }}
                        />
                    }
                    accessoryType={this.props.addNote ? "ADD" : null}
                    onClick={this.props.addNote}
                    disabled={this.props.addNote ? false : true}
                    align="left"
                />
                <Button
                    title="Page Break"
                    noBezel={true}
                    icon={<PageBreakIcon width={15} height={15} />}
                    accessoryType={allowPageBreak ? "ADD" : null}
                    onClick={this.props.addPageBreak}
                    disabled={!allowPageBreak}
                    align="left"
                />
            </div>
        );
    }
}

export default AnnotationControlsHeader;
