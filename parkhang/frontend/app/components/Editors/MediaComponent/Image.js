import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import styles from "./Image.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import lopenlingLogo from "images/lopenling_logo.png";
import {
    IconButton,
    NativeSelect,
    MenuItem,
    FormControl,
    Box,
    InputLabel,
} from "@mui/material";
import { Resizable } from "re-resizable";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CircularProgress from "@mui/material/CircularProgress";
import CancelIcon from "@mui/icons-material/Cancel";
function HttpUrl(data = "") {
    if (data.includes("https")) return data;
    return "https://" + data;
}

function Image(props) {
    const selectRef = useRef(null);
    let imageList = props.imageData?.alignment;
    let message = props.imageData?.message;

    let textIdfromAlignment = props.alignmentData.text;

    let isPortraitImage = props.isImagePortrait;
    let [imageSelected, SetSelected] = useState(0);
    let [imageHeight, setImageHeight] = useState(240);
    let imageIdList = [];
    let scrollingID = props.scrollToId;
    let syncIdOnClick = props.syncIdOnClick;

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

    if (!_.isEmpty(imageList)) {
        imageIdList = imageList.map((l) => parseInt(l.source_segment.start));
    }

    useEffect(() => {
        let IDtoSync = parseInt(scrollingID.id);
        if (
            textIdfromAlignment === props.selectedText.id &&
            scrollingID.from === 1
        ) {
            if (!_.isEmpty(imageList)) {
                let findSegment = imageList.find(
                    (l) =>
                        l.source_segment.start <= IDtoSync &&
                        l.source_segment.end > IDtoSync
                );
                let index = imageList.findIndex(
                    (l) => l?.source_segment === findSegment.source_segment
                );
                if (parseInt(index) >= 0) {
                    SetSelected(index);
                }
            }
        }
    }, [scrollingID]);

    useEffect(() => {
        selectRef.current.value = props.witness;

        setLoading(true);
        fetchImage();
    }, [props.witness]);
    useEffect(() => {
        if (textIdfromAlignment === props.selectedText.id) {
            let ClickId = syncIdOnClick.toString().replace("s_", "");
            if (imageList?.length > 0 && ClickId > 0) {
                let findSegment = imageList.find(
                    (l) =>
                        l.source_segment.start < ClickId &&
                        l.source_segment.end > ClickId
                );
                let index = imageList.findIndex(
                    (l) => l?.source_segment === findSegment?.source_segment
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
        setImageHeight(img.naturalHeight);
        let tempWIdth = img.naturalWidth;
        if (tempHeight === 0 || tempWIdth === 0) return null;
        props.changeIsImagePortrait(tempHeight >= tempWIdth);
        setLoading(false);
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
    const handleResize = (e, direction, ref) => {
        setImageHeight(ref.style.height);
    };
    return (
        <Resizable
            className={
                isPortraitImage
                    ? styles.ThirdWindowPortrait
                    : styles.ThirdWindow
            }
            defaultSize={{
                width: "100%",
                height: imageHeight + 45,
            }}
            onResize={handleResize}
            maxWidth="100%"
        >
            <div className={styles.header}>
                <Box position="relative" zIndex={2}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <NativeSelect
                            labelId="demo-select-small"
                            inputRef={selectRef}
                            onChange={(e) =>
                                props.changeImageVersion(e.target.value)
                            }
                            inputProps={{
                                name: "age",
                                id: "uncontrolled-native",
                            }}
                        >
                            {props.witnesses.map((witness) => {
                                return (
                                    <option
                                        key={witness.id}
                                        value={witness.id}
                                        style={{ textAlign: "center" }}
                                    >
                                        {witness.source.name}
                                    </option>
                                );
                            })}
                        </NativeSelect>
                    </FormControl>
                </Box>
                <IconButton
                    aria-label="close"
                    style={{ position: "absolute", right: 10 }}
                    onClick={() => props.changeMediaSelection(null)}
                >
                    <CancelIcon />
                </IconButton>

                {/* {!isPortraitImage && (
                    <div
                        className={styles.hideButton}
                        onClick={() => SetHide((prev) => !prev)}
                    >
                        {hide ? "Show" : "Hide"}
                    </div>
                )} */}
            </div>
            <Box className={styles.imageSection}>
                {_.isEmpty(imageList) ? (
                    <>
                        {message ? (
                            <h1>{message}</h1>
                        ) : (
                            <CircularProgress color="secondary" />
                        )}
                    </>
                ) : (
                    <>
                        <center height="100%">
                            {}
                            {!loading ? (
                                <TransformWrapper>
                                    <TransformComponent>
                                        <LazyLoadImage
                                            className={styles.ImageStyle}
                                            height={imageHeight}
                                            src={img}
                                            alt="imagepecha"
                                            onLoad={isPortrait}
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            ) : (
                                <CircularProgress color="secondary" />
                            )}
                        </center>
                        <IconButton
                            onClick={() => handleChangeImage("prev")}
                            sx={{
                                position: "absolute",
                                left: 20,
                                top: 100,
                                color: "secondary",
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
                                color: "secondary",
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </>
                )}
            </Box>
        </Resizable>
    );
}

export default memo(Image);
