import React, { useState, useEffect } from "react";
import WrenchIcon from "images/wrench.svg";
import Slider from "../../UI/Slider";
import CheckIcon from "@mui/icons-material/Check";
import useLocalStorage from "components/utility/useLocalStorage";
import {
    Button,
    MenuList,
    MenuItem,
    Grow,
    Divider,
    Typography,
    Box,
    ClickAwayListener,
} from "@mui/material";
import { FONT_LIST } from "app_constants";
function Settings(props) {
    let [showOption, setShowOption] = useState(false);
    let [fontSelect, setFontSelect] = useLocalStorage(
        "WindowOneFont",
        "Tibetan"
    );
    useEffect(() => {
        document.body.style.setProperty("--tibetan-fonts", fontSelect);
    }, []);
    const handleClick = () => {
        setShowOption((prev) => !prev);
    };
    const handlefont = (value) => {
        setFontSelect(value);
        document.body.style.setProperty("--tibetan-fonts", `${value}`);
        let update = document.getElementById("updateList");
        let times = 1;
        let timer = setInterval(() => {
            update.click();
            times++;
            if (times > 3) {
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
                            <Typography variant="subtitle2">
                                Export Document
                            </Typography>
                        </MenuItem>
                        <Divider />

                        <MenuItem
                            onClick={() =>
                                props.onChangePanelLink(!props.isPanelLinked)
                            }
                        >
                            {props.isPanelLinked && <CheckIcon />}
                            <Typography variant="subtitle2">
                                link panels
                            </Typography>
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
