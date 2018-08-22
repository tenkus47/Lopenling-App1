// @flow
import * as React from "react";
import classnames from "classnames";
import AnnotationDetail from "./AnnotationDetail";
import AnnotationDetailEdit from "./AnnotationDetailEdit";
import styles from "./AnnotationControls.css";
import textStyles from "./Text.css";
import User from "lib/User";
import Witness from "lib/Witness";
import Annotation from "lib/Annotation";
import AnnotationControlsHeading from "./AnnotationControlsHeading";
import AddButton from "./AddButton";
import NoteEditor from "./NoteEditor";
import { FormattedMessage } from "react-intl";
import Note from "./Note";

export const CONTROLS_MARGIN_LEFT = 10;

export type Props = {
    inline: boolean,
    user: User,
    annotationsData: null,
    activeAnnotation: null,
    baseAnnotation: null,
    availableAnnotations: null,
    temporaryAnnotation: null,
    inline: null,
    firstSelectedSegment: null,
    splitTextRect: ClientRect | null,
    selectedWitness: Witness,
    selectedElementId: string | null,
    pechaImageClass: string,
    notes: Annotation[],
    temporaryNotes: Annotation[],
    addNote: () => void,
    editNote: (annotation: Annotation) => void,
    saveAnnotation: (annotation: Annotation, content: string) => void,
    cancelEditAnnotation: (annotation: Annotation) => void,
    deleteAnnotation: (annotation: Annotation) => void
};

export default class AnnotationControls extends React.PureComponent<Props> {
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
            !measurements ||
            measurements.viewPortTop === null ||
            measurements.viewPortBottom === null
        ) {
            return;
        }

        const height = this.controls.offsetHeight;
        let top =
            measurements.top - height / 2 + measurements.firstElementHeight / 2;
        const isWithinViewport =
            measurements.top >= measurements.viewPortTop &&
            measurements.top <= measurements.viewPortBottom;
        if (isWithinViewport && top < measurements.viewPortTop) {
            top = measurements.viewPortTop;
        }
        if (isWithinViewport && top + height > measurements.viewPortBottom) {
            top = measurements.viewPortBottom - height;
        }

        this.controls.style.top = top + "px";
        if (this.arrow && this.arrowDs) {
            let arrowTop = measurements.top - top;
            this.arrow.style.top = arrowTop + "px";
            this.arrowDs.style.top = arrowTop + 2 + "px";
        }
    }

    getMeasurements(): {
        top: number,
        firstElementHeight: number,
        viewPortTop: number | null,
        viewPortBottom: number | null
    } | null {
        if (!this.props.selectedElementId) {
            return null;
        }

        const selectedElementId = this.props.selectedElementId;
        const splitTextRect = this.props.splitTextRect;
        const firstElement = document.getElementById(selectedElementId);
        let extraTop = 0;
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
                firstElementHeight: 1,
                viewPortTop: 0,
                viewPortBottom: 0
            };
        }
        const top = firstElement.offsetTop + extraTop;
        let viewPortTop = null;
        let viewPortBottom = null;
        let elViewPortTop = null;
        let elViewPortBottom = null;
        if (firstElement && splitTextRect) {
            const elRect = firstElement.getBoundingClientRect();

            elViewPortTop = elRect.top - splitTextRect.top;
            elViewPortBottom = splitTextRect.height - elViewPortTop;
            viewPortTop = firstElement.offsetTop - elViewPortTop;
            viewPortBottom = firstElement.offsetTop + elViewPortBottom;
        }

        return {
            top: top,
            firstElementHeight:
                firstElement && firstElement.offsetHeight
                    ? firstElement.offsetHeight
                    : 1,
            viewPortTop: viewPortTop,
            viewPortBottom: viewPortBottom
        };
    }

    render() {
        const props = this.props;
        let annotations = [];
        let temporaryAnnotations = [];
        let anonymousUserMessage = null;
        let variantsHeading = null;
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

            variantsHeading = (
                <AnnotationControlsHeading titleId="annotations.variantsHeading" />
            );

            if (!props.user.isLoggedIn) {
                // NOTE: FormattedMessage cannot take a child when using
                // the values option, so need to wrap it in a div
                anonymousUserMessage = (
                    <div className={styles.anonymousMessage}>
                        <FormattedMessage
                            id="annotations.loginMessage"
                            values={{
                                login: (
                                    <a href="/accounts/login/">
                                        <FormattedMessage id="annotations.login" />
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

        const noNotes = (
            <div className={styles.noNotes}>
                <FormattedMessage id="annotation.noNotes" />
            </div>
        );

        const notesHeading = (
            <AnnotationControlsHeading
                titleId="annotation.notesHeading"
                buttonOnClick={
                    isLoggedIn && !tempNotes ? () => props.addNote() : null
                }
                buttonTitleId="annotation.addNoteHelp"
            />
        );

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
                {anonymousUserMessage}
                {nothingSelected}
                {variantsHeading}
                {temporaryAnnotations}
                {annotations}
                {notesHeading}
                {tempNotes}
                {notes}
                {!tempNotes && !notes && noNotes}
                <div className={styles.arrow} ref={div => (this.arrow = div)} />
                <div
                    className={styles.arrowDs}
                    ref={div => (this.arrowDs = div)}
                />
            </div>
        );
    }
}
