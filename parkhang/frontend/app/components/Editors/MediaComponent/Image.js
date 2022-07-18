import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import styles from "./Image.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import classnames from "classnames";
import _ from "lodash";
import Carousel from "react-material-ui-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import lopenlingLogo from "images/lopenling_logo.png";
import "react-lazy-load-image-component/src/effects/blur.css";

function HttpUrl(data = "") {
    if (data.includes("https")) return data;
    return "https://" + data;
}

function Image(props) {
    const selectRef = useRef(null);
    let imagedata = props.imageData?.alignment || [];
    let textIdfromAlignment = props.alignmentData.text;
    const [imageList, setImageList] = useState([]);
    let isPortraitImage = props.isImagePortrait;
    let [imageSelected, SetSelected] = useState(0);
    let imageIdList = [];
    let scrollingID = props.syncIdOnScroll;

    useEffect(() => {
        setImageList(imagedata);
    }, [imagedata]);

    // let syncIdOnScroll = useMemo(() => scrollingID, [scrollingID]);
    let syncIdOnClick = props.syncIdOnClick;
    if (!_.isEmpty(imageList)) {
        imageIdList = imageList.map((l) => parseInt(l.source_segment.start));
    }
    // useEffect(() => {
    //     let IDtoSync = parseInt(syncIdOnScroll);
    //     if (textIdfromAlignment === props.selectedText.id) {
    //         if (imageList?.length > 0) {
    //             let findSegment = imageList.filter(
    //                 (l) =>
    //                     l.source_segment.start <= IDtoSync &&
    //                     l.source_segment.end > IDtoSync
    //             );
    //             let index = imageList.findIndex(
    //                 (l) => l?.source_segment === findSegment[0]?.source_segment
    //             );
    //             if (parseInt(index)) {
    //                 SetSelected(index + 1);
    //             }
    //         }
    //     }
    // }, [syncIdOnScroll]);
    useEffect(() => {
        selectRef.current.value = props.witness;
    }, [props.witness]);
    useEffect(() => {
        if (textIdfromAlignment === props.selectedText.id) {
            let ClickId = syncIdOnClick.toString().replace("s_", "");
            if (imageList?.length > 0 && ClickId > 0) {
                let findSegment = imageList.filter(
                    (l) =>
                        l.source_segment.start < ClickId &&
                        l.source_segment.end > ClickId
                );
                let index = imageList.findIndex(
                    (l) => l?.source_segment === findSegment[0]?.source_segment
                );
                if (index >= 0) {
                    SetSelected(index);
                }
            }
        }
    }, [syncIdOnClick]);

    useEffect(() => {
        if (props.imageData.length > 0) {
        }
    }, [props.imageData]);

    let change = useCallback(() => {
        props.changeSelectedImage(imageList[imageSelected + 1]);
    }, [imageSelected]);

    const isPortrait = ({ target: img }) => {
        //this Check if the provided Image is a portrait or a landScape
        let tempHeight = img.naturalHeight;
        let tempWIdth = img.naturalWidth;
        if (tempHeight === 0 || tempWIdth === 0) return null;
        props.changeIsImagePortrait(tempHeight >= tempWIdth);
    };

    const handleChangeImage = (data) => {
        if (data === "prev" && imageSelected > 0) {
            SetSelected((prev) => prev - 1);
        }
        if (data === "next" && imageSelected < imageIdList.length) {
            SetSelected((prev) => prev + 1);
        }
        change();
    };
    return (
        <div
            className={
                isPortraitImage
                    ? styles.ThirdWindowPortrait
                    : styles.ThirdWindow
            }
        >
            <div className={styles.header}>
                <div className={styles.ImageTitle}>
                    {imageSelected} Images :
                    <select
                        ref={selectRef}
                        defaultValue={props.witness}
                        onChange={(e) =>
                            props.changeImageVersion(e.target.value)
                        }
                    >
                        {props.witnesses.map((witness) => {
                            return (
                                <option key={witness.id} value={witness.id}>
                                    {witness.source.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div
                    className={styles.closeBtn}
                    onClick={() => props.changeMediaSelection(null)}
                >
                    x
                </div>

                {/* {!isPortraitImage && (
                    <div
                        className={styles.hideButton}
                        onClick={() => SetHide((prev) => !prev)}
                    >
                        {hide ? "Show" : "Hide"}
                    </div>
                )} */}
            </div>
            <div className={styles.imageSection}>
                <Carousel
                    next={() => handleChangeImage("next")}
                    prev={() => handleChangeImage("prev")}
                    autoPlay={false}
                    animation="slide"
                    indicators={false}
                    fullHeightHover={true}
                    index={imageSelected}
                    cycleNavigation={false}
                    navButtonsAlwaysVisible={true}
                    swipe={false}
                    height={260}
                >
                    {imageList.map((image, i) => {
                        return (
                            <center key={`image_${i}`}>
                                <TransformWrapper>
                                    <TransformComponent>
                                        <LazyLoadImage
                                            className={styles.ImageStyle}
                                            src={HttpUrl(image?.target_segment)}
                                            alt="imagepecha"
                                            effect="blur"
                                            placeholderSrc={lopenlingLogo}
                                            onLoad={isPortrait}
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            </center>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default memo(Image);
