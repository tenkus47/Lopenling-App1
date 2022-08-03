import React, { useState } from "react";
import WrenchIcon from "images/wrench.svg";
import Slider from "../../UI/Slider";

import CheckIcon from "@mui/icons-material/Check";
import {
    Button,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Grow,
} from "@mui/material";
function Settings(props) {
    let [showOption, setShowOption] = useState(false);

    const handleClick = () => {
        setShowOption((prev) => !prev);
    };
    return (
        <ClickAwayListener onClickAway={() => setShowOption(false)}>
            <Button
                onClick={handleClick}
                size="small"
                variant="text"
                style={{ padding: 0, color: "black" }}
            >
                <WrenchIcon height={20} width={20} />
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
            </Button>
        </ClickAwayListener>
    );
}

export default Settings;
