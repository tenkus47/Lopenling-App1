// @flow
import * as React from "react";
import classnames from "classnames";
import AnnotationDetail from "./AnnotationDetail";
import AnnotationDetailEdit from "./AnnotationDetailEdit";
import styles from "./AnnotationControls.css";
import colours from "css/colour.css";
import User from "lib/User";
import Witness from "lib/Witness";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import AnnotationControlsHeading from "./AnnotationControlsHeading";
import NoteEditor from "./NoteEditor";
import { FormattedMessage } from "react-intl";
import Note from "./Note";
import Button from "components/UI/Button";
import PageBreakIcon from "images/page_break_icon.svg";
import { List } from "react-virtualized/dist/es/List";
import AnnotationControlsHeader from "./AnnotationControlsHeader";

export const CONTROLS_MARGIN_LEFT = 10;

export type Props = {
    inline: boolean,
    user: User,
    annotationsData: null,
    activeAnnotation: null,
    baseAnnotation: null,
    availableAnnotations: Annotation[] | null,
    temporaryAnnotation: null,
    inline: null,
    firstSelectedSegment: null,
    splitTextRect: ClientRect | null,
    selectedWitness: Witness,
    selectedElementId: string | null,
    selectedElementIds: string[] | null,
    pechaImageClass: string,
    notes: Annotation[],
    temporaryNotes: Annotation[],
    addNote: () => void,
    editNote: (annotation: Annotation) => void,
    saveAnnotation: (annotation: Annotation, content: string) => void,
    cancelEditAnnotation: (annotation: Annotation) => void,
    deleteAnnotation: (annotation: Annotation) => void,
    addPageBreak: () => void,
    list: List | null
};

type AnchorPoint = "top" | "left" | "bottom" | "right";

const anchorPoints = {
    top: 1,
    left: 2,
    bottom: 3,
    right: 4
};

export default class AnnotationControls extends React.Component<Props> {
    controls: HTMLDivElement | null;
    arrow: HTMLDivElement | null;
    arrowDs: HTMLDivElement | null;

    constructor(props: Props) {
        super(props);

        this.controls = null;
        this.arrow = null;
        this.arrowDs = null;
    }

    componentDidMount() {
        this.updatePosition();
    }

    componentDidUpdate() {
        this.updatePosition();
    }

    updatePosition() {
        const measurements = this.getMeasurements();
        if (
            !this.props.inline ||
            !this.controls ||
            !this.arrow ||
            !measurements ||
            measurements.viewPortTop === null ||
            measurements.viewPortBottom === null
        ) {
            return;
        }
        const controls = this.controls;
        const height = controls.offsetHeight;
        const width = controls.offsetWidth;
        const arrow = this.arrow;
        const bottomGap = measurements.bottomGap;

        let top = measurements.top;
        const viewPortWidth = measurements.viewPortWidth || 0;

        let selectedLeft = measurements.left;
        let selectedRight = selectedLeft + measurements.width;
        if (this.props.selectedElementIds) {
            for (let i = 0; i < this.props.selectedElementIds.length; i++) {
                const segmentId = this.props.selectedElementIds[i];
                const segment = document.getElementById(segmentId);
                if (segment) {
                    const segmentLeft = segment.offsetLeft;
                    const segmentRight = segmentLeft + segment.offsetWidth;
                    if (segmentLeft < selectedLeft) selectedLeft = segmentLeft;
                    if (segmentRight > selectedRight)
                        selectedRight = segmentRight;
                }
            }
        }
        let selectedWidth = selectedRight - selectedLeft;

        let anchorPoint = anchorPoints.bottom;
        let moveToSide = false;
        let moveRight = 0;
        if (bottomGap < height) {
            moveToSide = true;
        }

        if (moveToSide) {
            arrow.className = styles.arrowLeft;
            if (measurements.left - width - arrow.offsetWidth < 0) {
                anchorPoint = anchorPoints.right;
            } else {
                anchorPoint = anchorPoints.left;
            }
        } else {
            let controlOverhang = width / 2 - selectedWidth / 2;
            if (selectedLeft - controlOverhang < 0) {
                moveRight = Math.abs(selectedLeft - controlOverhang);
            }
            if (selectedRight + controlOverhang > viewPortWidth) {
                moveRight = viewPortWidth - (selectedRight + controlOverhang);
            }
        }

        if (anchorPoint === anchorPoints.bottom) {
            let arrowHeight = 0;
            let arrowLeft = 0;
            if (this.arrow) {
                this.arrow.className = styles.arrowTop;
                arrowLeft = width / 2 - this.arrow.offsetWidth / 2 - moveRight;
                if (arrowLeft < 0) arrowLeft = 0;
                this.arrow.style.left = arrowLeft + "px";
                arrowHeight = this.arrow.offsetHeight;
                this.arrow.style.top = 0 - arrowHeight + "px";
            }
            controls.style.top = top + measurements.height + arrowHeight + "px";
            controls.style.left =
                measurements.left +
                selectedWidth / 2 -
                width / 2 +
                moveRight +
                "px";
        } else if (moveToSide) {
            arrow.className = styles.arrowRight;
            let arrowHeight = arrow.offsetHeight;
            let controlsTop =
                measurements.top + measurements.height / 2 - arrowHeight / 2;
            if (
                measurements.top +
                    measurements.height +
                    bottomGap -
                    controlsTop <
                height
            ) {
                controlsTop =
                    measurements.top + measurements.height + bottomGap - height;
            }
            if (anchorPoint === anchorPoints.left) {
                // left side of selection
                arrow.style.left = width - 2 + "px";
                controls.style.left =
                    measurements.left - width - arrow.offsetWidth + "px";
            } else {
                // right-side of selection
                arrow.className = styles.arrowLeft;
                arrow.style.left = -arrow.offsetWidth + "px";
                controls.style.left =
                    measurements.left +
                    selectedWidth +
                    arrow.offsetWidth +
                    "px";
            }

            arrow.style.top =
                measurements.top -
                controlsTop +
                measurements.height / 2 -
                arrowHeight / 2 +
                "px";

            controls.style.top = controlsTop + "px";
        } else {
            controls.style.top = top + "px";
        }
    }

    getMeasurements(): {
        top: number,
        textTop: number,
        rowTop: number,
        left: number,
        width: number,
        height: number,
        bottomGap: number,
        viewPortTop: number | null,
        viewPortBottom: number | null,
        viewPortWidth: number | null
    } | null {
        if (!this.props.selectedElementId) {
            return null;
        }

        const selectedElementId = this.props.selectedElementId;
        const splitTextRect = this.props.splitTextRect;
        const firstElement = document.getElementById(selectedElementId);
        let extraTop = 0;
        let scrollTop = 0;

        if (this.props.list) {
            scrollTop = this.props.list.Grid.state.scrollTop;
        }
        if (this.props.pechaImageClass) {
            const pechaImage = document.getElementsByClassName(
                this.props.pechaImageClass
            )[0];
            extraTop = pechaImage.offsetHeight;
        }
        if (!firstElement) {
            console.warn(
                "no valid element found in getMeasurements, elementId: %s",
                this.props.selectedElementId
            );
            return {
                top: 0,
                textTop: 0,
                rowTop: 0,
                left: 0,
                width: 1,
                height: 1,
                bottomGap: 0,
                viewPortTop: 0,
                viewPortBottom: 0,
                viewPortWidth: 1
            };
        }
        const top = firstElement.offsetTop + extraTop;
        const textTop = firstElement.offsetTop;
        const left = firstElement.offsetLeft;
        const width = firstElement.offsetWidth;
        const height = firstElement.offsetHeight;
        let rowTop = top;

        let viewPortTop = null;
        let viewPortBottom = null;
        let viewPortWidth = null;
        let elViewPortTop = null;
        let bottomGap = 0;
        if (firstElement && splitTextRect) {
            const elRect = firstElement.getBoundingClientRect();

            elViewPortTop = elRect.top - splitTextRect.top;
            bottomGap =
                splitTextRect.height + splitTextRect.top - elRect.bottom;
            viewPortTop = firstElement.offsetTop - elViewPortTop;
            viewPortBottom = splitTextRect.top + splitTextRect.height;
            viewPortWidth = splitTextRect.width;
        }

        return {
            top: top,
            textTop: textTop,
            rowTop: rowTop,
            left: left,
            width: width,
            height: height,
            bottomGap: bottomGap,
            viewPortTop: viewPortTop,
            viewPortBottom: viewPortBottom,
            viewPortWidth: viewPortWidth
        };
    }

    render() {
        const props = this.props;
        let annotations = [];
        let temporaryAnnotations = [];
        let anonymousUserMessage = null;
        let nothingSelected = null;
        const isLoggedIn = props.user.isLoggedIn;

        if (props.annotationsData) {
            props.annotationsData.map(annotationData => {
                let isEditing = false;
                let isActive = false;
                if (annotationData.isTemporary) {
                    isEditing = true;
                    isActive = true;
                } else if (
                    !props.temporaryAnnotation &&
                    annotationData.annotation.uniqueId ==
                        props.activeAnnotation.uniqueId
                ) {
                    isActive = true;
                }

                if (isEditing) {
                    let annotationDetail = (
                        <AnnotationDetailEdit
                            annotationData={annotationData}
                            key={annotationData.annotation.uniqueId}
                            isActive={isActive}
                            saveAnnotationHandler={content => {
                                props.saveAnnotation(
                                    annotationData.annotation,
                                    content
                                );
                            }}
                            cancelAnnotationHandler={() => {
                                props.cancelEditAnnotation(
                                    annotationData.annotation
                                );
                            }}
                            isLoggedIn={isLoggedIn}
                            selectAnnotationHandler={() => {}}
                            editAnnotationHandler={() => {}}
                        />
                    );
                    temporaryAnnotations.push(annotationDetail);
                } else {
                    let annotationDetail = (
                        <AnnotationDetail
                            annotationData={annotationData}
                            key={annotationData.annotation.uniqueId}
                            isActive={isActive}
                            selectAnnotationHandler={() => {
                                if (isLoggedIn && !isEditing) {
                                    props.didSelectAnnotation(
                                        annotationData.annotation
                                    );
                                }
                            }}
                            editAnnotationHandler={() => {
                                if (isLoggedIn && !isEditing) {
                                    props.editAnnotation(
                                        annotationData.annotation
                                    );
                                }
                            }}
                            isLoggedIn={isLoggedIn}
                        />
                    );
                    annotations.push(annotationDetail);
                }
            }, this);

            if (!props.user.isLoggedIn) {
                // NOTE: FormattedMessage cannot take a child when using
                // the values option, so need to wrap it in a div
                anonymousUserMessage = (
                    <div className={styles.anonymousMessage}>
                        <FormattedMessage
                            id="annotations.loginMessage"
                            values={{
                                loginLink: (
                                    <a href="/accounts/login/">
                                        <FormattedMessage id="annotations.loginLink" />
                                    </a>
                                )
                            }}
                        />
                    </div>
                );
            }
        } else {
            nothingSelected = (
                <div className={styles.nothingSelected}>Nothing Selected</div>
            );
        }

        let pageBreaksButton = null;
        let allowPageBreak = true;
        if (isLoggedIn && !this.props.selectedWitness.isWorking) {
            let pageBreaks = [];
            if (this.props.availableAnnotations) {
                pageBreaks = this.props.availableAnnotations.filter(
                    (annotation: Annotation) =>
                        annotation.type === ANNOTATION_TYPES.pageBreak
                );
            }

            if (pageBreaks.length > 0) {
                pageBreaksButton = (
                    <div className={styles.breakButtons}>
                        <Button
                            title="Page Break"
                            accessoryType="DELETE"
                            icon={<PageBreakIcon width={20} height={20} />}
                            onClick={() => {
                                this.props.deleteAnnotation(pageBreaks[0]);
                            }}
                            isActive={true}
                            colour={colours.activeButton}
                        />
                    </div>
                );
                allowPageBreak = false;
            }
        }

        let tempNotes = null;
        let tempNoteIds = {};
        if (props.temporaryNotes && props.temporaryNotes.length > 0) {
            tempNotes = props.temporaryNotes.map((note: Annotation) => {
                let key = "NOTE_" + note.uniqueId;
                if (note.basedOn) {
                    tempNoteIds[note.basedOn.uniqueId] = note.uniqueId;
                }
                return (
                    <NoteEditor
                        note={note}
                        key={key}
                        saveNote={props.saveAnnotation}
                        cancel={() => props.cancelEditAnnotation(note)}
                    />
                );
            });
        }

        let notes = null;
        if (props.notes && props.notes.length > 0) {
            const validNotes = props.notes.filter(
                (note: Annotation) => !tempNoteIds.hasOwnProperty(note.uniqueId)
            );
            notes = validNotes.map((note: Annotation) => {
                let key = "NOTE_" + note.uniqueId;
                return (
                    <Note
                        note={note}
                        key={key}
                        delete={this.props.deleteAnnotation}
                        edit={this.props.editNote}
                    />
                );
            });
        }

        let classes = [styles.annotationControls];
        if (props.inline) {
            classes.push(styles.inline);
        }

        return (
            <div
                className={classnames(...classes)}
                ref={(controls: HTMLDivElement | null) =>
                    (this.controls = controls)
                }
            >
                {!anonymousUserMessage && (
                    <AnnotationControlsHeader
                        allowPageBreak={allowPageBreak}
                        addNote={
                            isLoggedIn && !tempNotes
                                ? () => props.addNote()
                                : null
                        }
                    />
                )}
                <div className={styles.annotationContent}>
                    {anonymousUserMessage}
                    {nothingSelected}
                    {temporaryAnnotations}
                    {annotations}
                    {pageBreaksButton}
                    {tempNotes}
                    {notes}
                </div>
                <div className={styles.arrow} ref={div => (this.arrow = div)} />
            </div>
        );
    }
}
