import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./textDetailHeading.css";
import Check from "images/checkmark.png";
import Refresh from "images/Refresh.svg";
import ApplyTooltip from "../UI/ApplyTooltip";
import SelectVersion from "./SelectVersion";
import Witness from "lib/Witness";
import Slider from "../UI/Slider";
import TextList from "./TextListContainer";
import useClickOutSide from "../UI/useClickOutSideClose";
import OptionsIcon from "images/options.svg";
import Share from "images/share.svg";
import Magnifier from "images/magnifier.svg";
import Pen from "images/pen.png";
import classnames from "classnames";
type HeaderProps = {
    witnesses: Witness[],
    selectedWitness: Witness,
    onSelectedWitness: () => void,
    user: User,
    activeLocale: string,
    accountOverlayVisible: boolean,
    navigationButtonClicked: () => void,
    menuButtonClicked: () => void,
    textFontSize: Number,
    onChangedFontSize: () => void,
    onChangeWindowOpen: () => void,
    isSecondWindowOpen: boolean,
    changeIsAnnotating: () => void,
    isAnnotating: Boolean,
    searchChanged: () => void,
    searchValue: String,
};

function TextDetailHeading(props: HeaderProps) {
    const selectedText = props?.selectedText;
    let [showOption, setShowOption] = useState(false);
    let [showShare, setShowShare] = useState(false);
    let [showFind, setShowFind] = useState(false);
    let domNode = useClickOutSide(() => setShowOption(false));
    let domNode2 = useClickOutSide(() => setShowFind(false));
    let domNode3 = useClickOutSide(() => setShowShare(false));
    const handleClick = () => {
        setShowOption((prev) => !prev);
    };
    const handleWindowSearch = useCallback(() => {
        setShowFind((prev) => !prev);
    }, []);
    const handleSearch = (e) => {
        let value = e.target.value;
        props.searchChanged(value);
    };
    const handleRefresh = useCallback(() => {
        let updatelistBtn = document.getElementById("updateList");
        let updatelistBtn2 = document.getElementById("updateList2");

        if (updatelistBtn) updatelistBtn.click();
        if (updatelistBtn2) updatelistBtn2.click();
    }, []);
    useEffect(() => {
        let timer = setInterval(() => {
            handleRefresh();
        }, 500);
        let timer2 = setTimeout(() => {
            clearInterval(timer);
        }, 2000);

        return () => clearTimeout(timer2);
    }, [props.isSecondWindowOpen]);

    return (
        <div className={styles.textDetailHeading}>
            <div className={styles.selectVersion}>
                <div className={styles.textHeadingTitle} style={{ flex: 1 }}>
                    <TextList />
                </div>
                <SelectVersion
                    witnesses={props.witnesses}
                    activeWitness={props.selectedWitness}
                    onSelectedWitness={props.onSelectedWitness}
                    user={props.user}
                />
            </div>
            <div className={styles.WindowOption}>
                <div ref={domNode3}>
                    <button
                        className={classnames(styles.heading_buttons)}
                        onClick={() => setShowShare((prev) => !prev)}
                    >
                        <Share />
                    </button>
                    {showShare && <ShareOption props={props} />}
                </div>
                <div className={styles.annotateButton}>
                    <ApplyTooltip tooltipName={"Annotate"} effect={"solid"}>
                        <button
                            className={classnames(styles.heading_buttons)}
                            style={{
                                background: props.isAnnotating
                                    ? "darkgray"
                                    : "#eee",
                            }}
                            onClick={() =>
                                props.changeIsAnnotating(!props.isAnnotating)
                            }
                        >
                            <img
                                src={Pen}
                                alt="pencil"
                                style={{ width: 20, height: 20 }}
                            />
                        </button>
                    </ApplyTooltip>
                </div>
                <div className={styles.refreshButton}>
                    <ApplyTooltip tooltipName={"refresh"} effect={"solid"}>
                        <button
                            className={classnames(styles.heading_buttons)}
                            onClick={handleRefresh}
                        >
                            <Refresh />
                        </button>
                    </ApplyTooltip>
                </div>
                <div ref={domNode2} className={styles.searchWindow}>
                    <button
                        className={classnames(styles.heading_buttons)}
                        onClick={handleWindowSearch}
                    >
                        <Magnifier />
                    </button>
                    {showFind && (
                        <div className={styles.findTerm}>
                            <input
                                value={props.searchValue}
                                type="text"
                                placeholder="Search"
                                onChange={handleSearch}
                            />
                        </div>
                    )}
                </div>
                <div ref={domNode} className={styles.OptionToggle}>
                    <button
                        onClick={handleClick}
                        className={classnames(styles.heading_buttons)}
                    >
                        <OptionsIcon />
                    </button>
                    {showOption && (
                        <div className={styles.option}>
                            <Slider
                                max={24}
                                min={14}
                                initialvalue={props.textFontSize}
                                changeSize={props.onChangedFontSize}
                            />
                            <Options props={props} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TextDetailHeading;

function Options({ props }) {
    return (
        <ul className={styles.optionsList}>
            <li onClick={() => props.onExport()}>
                Export Document
                {props.exportingWitness && <img src={Check}></img>}
            </li>
            <li>Table of Contents</li>
            <hr />
            <li
                onClick={() => {
                    props.onChangeWindowOpen(true);
                }}
            >
                {props.isSecondWindowOpen && <img src={Check}></img>}Single
                Column
            </li>
            <li
                onClick={() => {
                    props.onChangeWindowOpen(false);
                }}
            >
                {!props.isSecondWindowOpen && <img src={Check}></img>}Stretch
                across both column
            </li>
            <hr />
            <li onClick={() => props.onChangePanelLink(!props.isPanelLinked)}>
                {props.isPanelLinked && <img src={Check}></img>}
                link panels
            </li>
        </ul>
    );
}

function ShareOption({ props }) {
    let textid = props.selectedText.id;
    let textid2 = props.selectedText2.id;
    let witnessid = props.selectedWitness.id;
    let witnessid2 = props.selectedWitness2.id;
    let url =
        window.location.origin +
        `/texts/${textid}/witnesses/${witnessid}/texts2/${textid2}/witnesses2/${witnessid2}`;

    const handleCopy = () => {
        let copyButton = document.getElementById("copyButton");
        let inputForUrl = document.getElementById("inputForUrl");
        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log("text been copied");
                inputForUrl.style.display = "none";
                copyButton.innerText = "copied";
                copyButton.disabled = true;
            })
            .catch((e) => console.log(e.message))
            .finally(() => console.log("you are copying the url " + url));
    };

    return (
        <div
            style={{
                position: "absolute",
                top: 30,
                background: "white",
                width: 240,
                right: 10,
                boxShadow: "1px 1px 2px black",
                zIndex: 9999,
                padding: 10,
                borderRadius: 10,
            }}
        >
            <div style={{ textAlign: "center", marginBottom: 10 }}>
                {props.selectedText.name}
            </div>
            <div style={{ textAlign: "center" }}>
                <input type="text" defaultValue={url} id="inputForUrl"></input>
                <button onClick={handleCopy} id="copyButton">
                    copy
                </button>
            </div>
        </div>
    );
}
