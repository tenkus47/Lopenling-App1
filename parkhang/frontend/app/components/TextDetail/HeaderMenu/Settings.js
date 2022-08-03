import React, { useState } from "react";
import WrenchIcon from "images/wrench.svg";
import Slider from "../../UI/Slider";
import CheckIcon from "@mui/icons-material/Check";
// import Slider from "react-smooth-range-input";
import {
    Button,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Grow,
    Divider,
    Typography,
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
                        <Divider />
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
            </Button>
        </ClickAwayListener>
    );
}

export default Settings;
