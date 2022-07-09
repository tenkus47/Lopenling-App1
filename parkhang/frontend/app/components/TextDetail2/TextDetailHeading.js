import React, { useState } from "react";
import styles from "./textDetailHeading.css";
import SelectVersion from "./SelectVersion";
import Slider from "../UI/Slider";
import TextListContainer from "./TextListContainer";
import useClickOutSide from "../UI/useClickOutSideClose";
import OptionsIcon from "images/options.svg";
import classnames from "classnames";

type HeaderProps = {
    user: {},
    textFontSize: Number,
    onChangedFontSize: () => void,
};

function TextDetailHeading(props: HeaderProps) {
    const selectedText = props?.selectedText;
    let domNode = useClickOutSide(() => setShowOption(false));
    let [showOption, setShowOption] = useState(false);

    const handleClick = () => {
        setShowOption((prev) => !prev);
    };

    return (
        <div className={styles.textDetailHeading}>
            <div className={styles.selectVersion}>
                <div className={styles.textHeadingTitle} style={{ flex: 1 }}>
                    <TextListContainer />
                </div>
                <SelectVersion
                    witnesses={props.witnesses}
                    activeWitness={props.selectedWitness}
                    onSelectedWitness={props.onSelectedWitness}
                    user={props.user}
                />
            </div>
            <div className={styles.WindowOption}>
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
    return <ul className={styles.optionsList}></ul>;
}
