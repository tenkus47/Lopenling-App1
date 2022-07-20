import React, { useEffect, useState, useRef } from "react";
import TextDetailHeading from "./TextDetailHeadingContainer";
import SplitTextComponent from "./SplitText";
import SplitText from "lib/SplitText";
import Loader from "react-loader";
import lengthSplitter from "lib/text_splitters/lengthSplitter";
import styles from "./TextDetail.css";
import imageStyle from "../Editors/MediaComponent/Image.css";
function TextDetail(props) {
    const ref = useRef();
    let text = {
        name: "",
    };
    if (props.text) {
        text = props.text;
    }
    useEffect(() => {
        let element = ref.current;
        element.addEventListener("mouseenter", mouseEnter);
        element.addEventListener("mouseleave", mouseLeft);
        return () => {
            element.removeEventListener("mouseenter", mouseEnter);
            element.removeEventListener("mouseleave", mouseLeft);
        };
    }, []);

    function mouseEnter() {
        // props.changeSelectedWindow(2);
        console.log("secondwindowSelected");
    }
    function mouseLeft() {
        props.changeSelectedWindow(0);
    }

    let inlineControls = false;
    let textComponent = null;
    let splitText = null;
    if (!props.annotatedText || !props.text || props.loading) {
        textComponent = <div key={`key-${Math.random()}`} />;
    } else {
        let limitWidth = false;
        let splitter;
        if (props.paginated) {
            splitter = positionSplitter(props.pageBreaks);
        } else {
            splitter = lengthSplitter(800, /^།[\s]+(?!།[\s]+)/, 2, 5);
        }

        let key = 12;
        splitText = new SplitText(props.annotatedText, splitter);
        inlineControls = true;
        textComponent = (
            <SplitTextComponent
                splitText={splitText}
                // annotations={this.props.annotations}
                // activeAnnotations={this.props.activeAnnotations}
                // activeAnnotation={this.props.activeAnnotation}
                limitWidth={limitWidth}
                // didSelectSegmentIds={props.didSelectSegmentIds}
                selectedSegmentId={props.selectedSegmentId}
                annotationPositions={props.annotationPositions}
                selectedAnnotatedSegments={props?.selectedAnnotatedSegments}
                // textListVisible={this.props.textListVisible}
                // showImages={this.props.pageImagesVisible}
                // imagesBaseUrl={this.props.imagesBaseUrl}
                selectedWitness={props.selectedWitness}
                key={key}
                // selectedSearchResult={this.props.selectedSearchResult}
                // searchValue={this.props.searchValue}
                fontSize={props.textFontSize}
                syncIdOnScroll={props.syncIdOnScroll}
                syncIdOnClick={props.syncIdOnClick}
                textAlignment={props.textAlignment}
                textAlignmentById={props.textAlignmentById}
                isPanelLinked={props.isPanelLinked}
                changeSyncIdOnScroll={props.changeSyncIdOnScroll}
                selectedWindow={props.selectedWindow}
            ></SplitTextComponent>
        );
    }

    let textComponents = [textComponent];
    let thirdWindowHeight = imageStyle.ThirdWindowHeight;
    let bodyHeight = "calc(100% - " + thirdWindowHeight + ")";
    let condition = props.isPanelVisible;
    return (
        <div
            ref={ref}
            className={styles.textDetail2}
            style={{
                height: condition ? bodyHeight : "100%",
            }}
        >
            <TextDetailHeading />
            <Loader loaded={!props.loading} />

            {!props.loading ? textComponents : <div />}
        </div>
    );
}

export default TextDetail;
