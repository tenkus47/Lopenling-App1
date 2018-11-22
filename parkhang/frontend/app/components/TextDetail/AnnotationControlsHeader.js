// @flow
import React from "react";
import Button from "components/UI/Button";
import styles from "./AnnotationControlsHeader.css";
import PageBreakIcon from "images/page_break_icon.svg";
import NoteIcon from "images/note.svg";

type Props = {
    allowPageBreak: boolean,
    addNote: null | (() => void)
};

class AnnotationControlsHeader extends React.Component<Props> {
    constructor() {
        super();
    }

    render() {
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
                />
                <Button
                    title="Page Break"
                    noBezel={true}
                    icon={<PageBreakIcon width={15} height={15} />}
                    accessoryType={this.props.allowPageBreak ? "ADD" : null}
                    disabled={!this.props.allowPageBreak}
                />
            </div>
        );
    }
}

export default AnnotationControlsHeader;
