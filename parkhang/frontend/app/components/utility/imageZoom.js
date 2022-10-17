import React, { useEffect } from "react";
// import { MapInteractionCSS } from "react-map-interaction";
import mediumZoom from "medium-zoom";
function imageZoom({ children, cl }) {
    useEffect(() => {
        const images = document.querySelector("." + cl);
        mediumZoom(images, {
            margin: 50,
            background: "#000",
            scrollOffset: 200,
        });
    }, []);
    return <>{children}</>;
}

export default imageZoom;
