import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Slider from "../../UI/Slider";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import { Button, MenuList, MenuItem, ClickAwayListener ,Grow} from "@mui/material";
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
                <SettingsIcon />
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
                            min={14}
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
