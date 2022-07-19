import React, {
    useState,
    useRef,
    useEffect,
    memo,
    Suspense,
    useMemo,
    useCallback,
} from "react";
import styles from "./Image.css";
import { useImage } from "react-image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import classnames from "classnames";
import _ from "lodash";
import { selectImage } from "../../../actions";

function HttpUrl(data = "") {
    if (data.includes("http")) return data;
    return "https://" + data;
}

function Image(props) {
    const selectRef = useRef(null);
    let textIdfromAlignment = props.alignmentData.text;
    let isPortraitImage = props.isImagePortrait;
    let ImageArea = useRef(null);
    let [imageSelected, SetSelected] = useState(0);
    let [hide, SetHide] = useState(false);
    let imageList = props.imageData?.alignment || [];
    let imageIdList = [];
    let scrollingID = props.syncIdOnScroll;
    let syncIdOnScroll = useMemo(() => scrollingID, [scrollingID]);
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
    //             if (index >= 0) {
    //                 SetSelected(index);
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
            if (imageList?.length > 0) {
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
        props.changeSelectedImage(imageList[imageSelected]);
    }, [imageSelected]);

    useEffect(() => {
        change();
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
    };

    return (
        <div
            className={
                isPortraitImage
                    ? styles.ThirdWindowPortrait
                    : hide
                    ? classnames(styles.ThirdWindow, styles.hideWindow)
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
            <div className={styles.imageRender} ref={ImageArea}>
                <Suspense fallback={<div style={{ height: 100 }}>loading</div>}>
                    {imageList.length > 0 && (
                        <TransformWrapper>
                            <TransformComponent>
                                <ImageComponent
                                    imageList={imageList}
                                    imageSelected={imageSelected}
                                    isPortrait={isPortrait}
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    )}
                    <button
                        style={{ position: "absolute", top: 20, left: 10 }}
                        onClick={() => handleChangeImage("prev")}
                    >
                        {"<"}
                    </button>
                    <button
                        style={{ position: "absolute", top: 20, right: 10 }}
                        onClick={() => handleChangeImage("next")}
                    >
                        {">"}
                    </button>
                </Suspense>
            </div>
        </div>
    );
}

function ImageComponent({ imageList, imageSelected, isPortrait }) {
    let { src } = useImage({
        srcList: HttpUrl(imageList[imageSelected]?.target_segment),
    });

    return <img src={src} alt="SyncImage" onLoad={isPortrait} />;
}

export default memo(Image);
