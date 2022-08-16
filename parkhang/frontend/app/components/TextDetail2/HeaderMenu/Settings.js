import React, { useEffect, useState } from "react";
import WrenchIcon from "images/wrench.svg";
import Slider from "../../UI/Slider";
import useLocalStorage from "components/utility/useLocalStorage";

import CheckIcon from "@mui/icons-material/Check";
import {
    Button,
    MenuList,
    MenuItem,
    Divider,
    Grow,
    Box,
    ClickAwayListener,
} from "@mui/material";
import { FONT_LIST } from "app_constants";

function Settings(props) {
    let [showOption, setShowOption] = useState(false);
    let [fontSelect, setFontSelect] = useLocalStorage(
        "WindowTwoFont",
        "Tibetan"
    );
    useEffect(() => {
        document.body.style.setProperty("--tibetan-fonts2", fontSelect);
    }, []);
    const handleClick = () => {
        setShowOption((prev) => !prev);
    };
    const handlefont = (value) => {
        setFontSelect(value);
        document.body.style.setProperty("--tibetan-fonts2", `${value}`);
        let update = document.getElementById("updateList2");
        let times = 1;
        let timer = setInterval(() => {
            update.click();
            times++;
            console.log("ran");
            if (times > 4) {
                clearInterval(timer);
            }
        }, 800);
        setShowOption(false);
    };
    return (
        <ClickAwayListener onClickAway={() => setShowOption(false)}>
            <Box>
                <Button
                    onClick={handleClick}
                    size="small"
                    variant="text"
                    style={{ padding: 0, color: "black" }}
                >
                    <WrenchIcon height={20} width={20} />
                </Button>
                <Grow in={showOption}>
                    <MenuList
                        dense
                        style={{
                            position: "absolute",
                            right: 0,
                            zIndex: 2,
                            top: 30,
                            backgroundColor: "#eee",
                        }}
                    >
                        <Slider
                            max={20}
                            min={7}
                            initialvalue={props.textFontSize}
                            changeSize={props.onChangedFontSize}
                        />
                        <Divider />
                        <FontSelection
                            selectFont={handlefont}
                            selectedfont={fontSelect}
                        />
                        <MenuItem onClick={() => props.onExport()}>
                            Export Document
                            {props.exportingWitness && <CheckIcon />}
                        </MenuItem>
                        <MenuItem
                            onClick={() =>
                                props.onChangePanelLink(!props.isPanelLinked)
                            }
                        >
                            {props.isPanelLinked && <CheckIcon />}
                            link panels
                        </MenuItem>
                    </MenuList>
                </Grow>
            </Box>
        </ClickAwayListener>
    );
}

export default Settings;

const FontSelection = ({ selectFont, selectedfont }) => {
    let fontAvailable = FONT_LIST || [];

    return (
        <Box textAlign={"center"}>
            <span>Font:</span>{" "}
            <select
                onChange={(e) => selectFont(e.target.value)}
                value={selectedfont}
            >
                {fontAvailable.map((font, index) => {
                    return (
                        <option key={index + "-fontselect"} value={font}>
                            {font}
                        </option>
                    );
                })}
            </select>
        </Box>
    );
};
