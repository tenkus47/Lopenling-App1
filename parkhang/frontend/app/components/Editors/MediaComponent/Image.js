import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import styles from "./Image.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import lopenlingLogo from "images/lopenling_logo.png";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
function HttpUrl(data = "") {
    if (data.includes("https")) return data;
    return "https://" + data;
}

function Image(props) {
    const selectRef = useRef(null);
    let imageList = props.imageData?.alignment;
    let textIdfromAlignment = props.alignmentData.text;

    let isPortraitImage = props.isImagePortrait;
    let [imageSelected, SetSelected] = useState(0);
    let imageIdList = [];
    let scrollingID = props.syncIdOnScroll;
    let [loading, setLoading] = useState(false);
    const [img, setImg] = useState();

    const fetchImage = async () => {
        if (_.isEmpty(imageList)) return;
        let url = HttpUrl(imageList[imageSelected].target_segment);
        const res = await fetch(url);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setLoading(false);
        setImg(imageObjectURL);
    };
    useEffect(() => {
        setLoading(true);
        fetchImage();
    }, [imageList, imageSelected]);
    // let syncIdOnScroll = useMemo(() => scrollingID, [scrollingID]);
    let syncIdOnClick = props.syncIdOnClick;
    if (!_.isEmpty(imageList)) {
        imageIdList = imageList.map((l) => parseInt(l.source_segment.start));
    }

    useEffect(() => {
        let IDtoSync = parseInt(scrollingID);
        if (textIdfromAlignment === props.selectedText.id) {
            if (imageList?.length > 0) {
                let findSegment = imageList.filter(
                    (l) =>
                        l.source_segment.start <= IDtoSync &&
                        l.source_segment.end > IDtoSync
                );
                let index = imageList.findIndex(
                    (l) => l?.source_segment === findSegment[0]?.source_segment
                );
                if (parseInt(index)) {
                    SetSelected(index);
                }
            }
        }
    }, [scrollingID]);
    useEffect(() => {
        if (selectRef.current) selectRef.current.value = props.witness;
        setLoading(true);
        fetchImage();
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

    let change = useCallback(() => {
        props.changeSelectedImage(imageList[imageSelected + 1]);
    }, [imageList, imageSelected]);

    const isPortrait = ({ target: img }) => {
        //this Check if the provided Image is a portrait or a landScape
        let tempHeight = img.naturalHeight;
        let tempWIdth = img.naturalWidth;
        if (tempHeight === 0 || tempWIdth === 0) return null;
        props.changeIsImagePortrait(tempHeight >= tempWIdth);
    };

    const handleChangeImage = (data) => {
        change();
        if (data === "prev" && imageSelected > 0) {
            SetSelected((prev) => prev - 1);
        }
        if (data === "next" && imageSelected < imageIdList.length) {
            SetSelected((prev) => prev + 1);
        }
    };

    const handleOnload = (e) => {
        isPortrait(e);
        setLoading(false);
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

            {_.isEmpty(imageList) ? (
                <Loading />
            ) : (
                <div className={styles.imageSection}>
                    <center>
                        {!loading ? (
                            <TransformWrapper>
                                <TransformComponent>
                                    <LazyLoadImage
                                        className={styles.ImageStyle}
                                        src={img}
                                        alt="imagepecha"
                                        effect="blur"
                                        onLoad={handleOnload}
                                        onProgress={() =>
                                            console.log("process")
                                        }
                                    />
                                </TransformComponent>
                            </TransformWrapper>
                        ) : (
                            <Loading />
                        )}
                    </center>
                    <IconButton
                        onClick={() => handleChangeImage("prev")}
                        sx={{
                            position: "absolute",
                            left: 20,
                            top: 100,
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => handleChangeImage("next")}
                        sx={{
                            position: "absolute",
                            right: 20,
                            top: 100,
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            )}
        </div>
    );
}

export default memo(Image);

function Loading() {
    return <div style={{ position: "relative", top: 50 }}>Loading ...</div>;
}
