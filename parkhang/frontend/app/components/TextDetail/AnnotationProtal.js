import React from "react";
import { connect } from "react-redux";
import { getActiveTextAnnotation } from "reducers";

let initialLoad = true;
function AnnotationProtal({ activeAnnotation }) {
    const [top, setTop] = React.useState(0);

    React.useEffect(() => {
        const scrollElement = document.getElementById("scroller");
        function measure() {
            let control = document.getElementById(
                `s_${activeAnnotation?.start}`
            );
            if (control) {
                const position = control.getBoundingClientRect();
                let top = Math.floor(position.top - 40);
                setTop(top);
            }
        }
        if (!initialLoad) {
            let scrolling = false;
            if (scrollElement)
                scrollElement.addEventListener("scroll", measure);
            if (!scrolling) {
                let control = document.getElementById(
                    `s_${activeAnnotation?.start}`
                );
                if (control) {
                    const position = control.getBoundingClientRect();
                    let top = Math.floor(position.top - 40);
                    setTop(top);
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
            style={{
                top: top,
                position: "absolute",
                left: "97%",
                zIndex: 10,
                maxWidth: 300,
                width: "max-content",
            }}
        ></div>
    );
}

const getStateUsingProp = (state) => {
    return { activeAnnotation: getActiveTextAnnotation(state) };
};
export default connect(getStateUsingProp)(AnnotationProtal);
