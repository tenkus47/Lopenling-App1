import React from "react";
import { connect } from "react-redux";
import {
    getActiveTextAnnotation,
    getSelectedTextWitnessId,
    getSelectedText,
    getTextWitnesses,
    showPageImages,
    getWitness,
    getWorkingWitness,
} from "reducers";

let initialLoad = true;
function AnnotationProtal({ activeAnnotation, pageImagesVisible }) {
    const portal = React.useRef(null);

    const measure = React.useCallback(
        (e) => {
            let control = document.getElementById(
                `s_${activeAnnotation?.start}`
            );
            if (control) {
                const position = control.getBoundingClientRect();
                let top = Math.floor(position.top - 40);
                portal.current.style.top = top + "px";
            }
        },
        [activeAnnotation?.start]
    );

    React.useEffect(() => {
        const scrollElement = document.getElementById("scroller");
        if (!initialLoad) {
            let scrolling = false;
            if (scrollElement)
                scrollElement.addEventListener("scroll", measure);
            if (!scrolling) {
                let start = activeAnnotation?.start;
                if (start) {
                    let control = null;
                    do {
                        control = document.getElementById(`s_${start}`);
                        start += 1;
                    } while (!control);

                    if (control) {
                        const position = control.getBoundingClientRect();
                        let top = Math.floor(position.top - 40);
                        portal.current.style.top = top + "px";
                    }
                }
            }
        }
        initialLoad = false;

        return () => {
            if (!scrollElement) return null;

            scrollElement.removeEventListener("scroll", measure);
        };
    }, [activeAnnotation?.start]);

    return (
        <div
            id="annotation-portal"
            ref={portal}
            style={{
                position: "absolute",
                right: !pageImagesVisible ? "-20%" : "0",
                zIndex: 10,
                maxWidth: 300,
                width: "max-content",
                transition: "all 0.1s linear 0s",
            }}
        ></div>
    );
}

const getStateUsingProp = (state) => {
    const selectedText = getSelectedText(state);
    let witnesses = {};
    let pageImagesVisible = false;
    let workingWitness;
    let selectedWitness;
    if (selectedText) {
        workingWitness = getWorkingWitness(state, selectedText.id);

        witnesses = getTextWitnesses(state, selectedText.id);
        let selectedWitnessId = getSelectedTextWitnessId(
            state,
            selectedText.id
        );
        if (selectedWitnessId) {
            selectedWitness = getWitness(state, selectedWitnessId);
        }
        if (!selectedWitness && workingWitness) {
            selectedWitness = workingWitness;
            selectedWitnessId = workingWitness.id;
        }

        if (selectedWitness?.id !== workingWitness?.id) {
            pageImagesVisible = showPageImages(state);
        }
    }
    return {
        pageImagesVisible,
        activeAnnotation: getActiveTextAnnotation(state),
    };
};
export default connect(getStateUsingProp)(AnnotationProtal);
