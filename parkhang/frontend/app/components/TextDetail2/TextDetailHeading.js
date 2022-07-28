import React, { useState, useCallback } from "react";
import styles from "./textDetailHeading.css";
import SelectVersion from "./SelectVersion";
import Slider from "../UI/Slider";
import TextListContainer from "./TextListContainer";
import OptionsIcon from "images/options.svg";
import Settings from "./HeaderMenu/Settings";
import Search from "./HeaderMenu/Search";
import TableOfContent from "./HeaderMenu/TableOfContent";

import classnames from "classnames";
import {
    Stack,
    Box,
    TextField,
    Button,
    Collapse,
    Divider,
    ButtonGroup,
} from "@mui/material";

type HeaderProps = {
    user: {},
    textFontSize: Number,
    onChangedFontSize: () => void,
};

function TextDetailHeading(props: HeaderProps) {
    const [findvalue, setfindvalue] = useState("");
    let [showFind, setShowFind] = useState(false);

    const handleSearch = useCallback(
        (e) => {
            e.preventDefault();
            // props.searchChanged(findvalue);
        },
        [findvalue]
    );
    const handleWindowSearch = useCallback(() => {
        setShowFind((prev) => !prev);
    }, []);
    return (
        <Stack
            direction="column"
            spacing={1}
            px={2}
            py={1}
            style={{ background: "#f7f7f7" }}
        >
            {" "}
            <Stack direction="row" spacing={1} justifyContent="space-between">
                <Box sx={{ display: "flex", gap: 2 }}>
                    <TextListContainer />
                    <SelectVersion
                        witnesses={props.witnesses}
                        activeWitness={props.selectedWitness}
                        onSelectedWitness={props.onSelectedWitness}
                        user={props.user}
                    />
                </Box>

                <ButtonGroup
                    size="small"
                    aria-label="small button group"
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "fit-content",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: "background.paper",
                        color: "text.secondary",
                        "& svg": {
                            m: 1.5,
                        },
                        "& hr": {
                            mx: 0.5,
                        },
                    }}
                    className={styles.button_group_menu}
                >
                    <Search handleWindowSearch={handleWindowSearch} />
                    <Settings {...props} />
                    <TableOfContent {...props} />
                </ButtonGroup>
            </Stack>
            <Collapse in={showFind}>
                <form onSubmit={handleSearch}>
                    <Stack direction="row">
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            inputProps={{
                                style: {
                                    height: 25,
                                    padding: "0 14px",
                                },
                            }}
                            style={{ height: 25, flex: 1 }}
                            fullWidth
                            value={findvalue}
                            onChange={(e) => setfindvalue(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleSearch}
                            style={{ height: 25 }}
                        >
                            Search
                        </Button>
                    </Stack>
                </form>
            </Collapse>
        </Stack>
    );
}

export default TextDetailHeading;
