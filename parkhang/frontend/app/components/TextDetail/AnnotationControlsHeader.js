// @flow
import React from "react";
import Button from "components/UI/Button";
import styles from "./AnnotationControlsHeader.css";
import PageBreakIcon from "images/page_break_icon.svg";
import NoteIcon from "images/note.svg";
import QuestionIcon from "images/question_answer.svg";
import ApplyTooltip from "../UI/ApplyTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditIcon from "@mui/icons-material/Edit";
type Props = {
    addPageBreak: null | (() => void),
    addLineBreak: null | (() => void),
    addNote: null | (() => void),
    addQuestion: null | (() => void),
    closeAnnotation: null | (() => void),
    editAnnotationHandler: null | (() => void),
    userLoggedIn: Boolean,
};

class AnnotationControlsHeader extends React.Component<Props> {
    constructor() {
        super();
    }

    render() {
        const allowPageBreak = this.props.addPageBreak != null;
        const allowLineBreak = this.props.addLineBreak != null;
        return (
            <>
                <div className={styles.header}>
                    <Button
                        noBezel={true}
                        icon={
                            <NoteIcon
                                width={21}
                                height={21}
                                style={{ fill: "#1A73E8" }}
                            />
                        }
                        backgroundColor="transparent"
                        accessoryType={this.props.addNote ? "ADD" : null}
                        onClick={this.props.addNote}
                        disabled={this.props.addNote ? false : true}
                        align="center"
                    />

                    <Button
                        noBezel={true}
                        icon={
                            <QuestionIcon
                                width={21}
                                height={21}
                                style={{ fill: "#F2A41F" }}
                            />
                        }
                        accessoryType={this.props.addQuestion ? "ADD" : null}
                        onClick={this.props.addQuestion}
                        disabled={this.props.addQuestion ? false : true}
                        align="left"
                        backgroundColor="transparent"
                    />

                    <Button
                        noBezel={true}
                        color="#1E8E3E"
                        fontSize="18px"
                        icon="&#182;"
                        accessoryType={allowLineBreak ? "ADD" : null}
                        onClick={this.props.addLineBreak}
                        disabled={!allowLineBreak}
                        align="left"
                        backgroundColor="transparent"
                    />

                    <Button
                        noBezel={true}
                        icon={
                            <PageBreakIcon
                                width={21}
                                height={21}
                                style={{ fill: "darkgray" }}
                            />
                        }
                        accessoryType={allowPageBreak ? "ADD" : null}
                        onClick={this.props.addPageBreak}
                        disabled={!allowPageBreak}
                        align="left"
                        backgroundColor="transparent"
                    />
                    <ApplyTooltip format="annotation.edit">
                        <div
                            onClick={this.props.editAnnotationHandler}
                            className={styles.edit}
                        >
                            {/* <Btn icon={faPencilAlt} /> */}
                            <EditIcon />
                        </div>
                    </ApplyTooltip>
                </div>
                {/* <div
                    onClick={() => this.props.closeAnnotation()}
                    className={styles.Anotation_closeBtn}
                >
                    x
                </div> */}
            </>
        );
    }
}

export default AnnotationControlsHeader;
