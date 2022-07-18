import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./textDetailHeading.css";
import SelectVersion from "./SelectVersion";
import TextList from "./TextListContainer";
import {
    Stack,
    Box,
    TextField,
    Button,
    Collapse,
    Divider,
    ButtonGroup,
} from "@mui/material";
import Share from "./HeaderMenu/Share";
import Annotate from "./HeaderMenu/Annotate";
import Refresh from "./HeaderMenu/Refresh";
import Search from "./HeaderMenu/Search";
import WindowSplitter from "./HeaderMenu/WindowSplitter";
import Settings from "./HeaderMenu/Settings";
import TableOfContent from "./HeaderMenu/TableOfContent";
import useDebounce from "components/UI/useDebounceHook";

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
    const [findvalue, setfindvalue] = useState("");
    let [showFind, setShowFind] = useState(false);
    const headingRef = useRef();
    const inputRef = useRef();
    const debouncedSearchTerm = useDebounce(findvalue, 800);
    const handleSearch = useCallback(
        (e) => {
            e.preventDefault();
            props.searchChanged(findvalue);
        },
        [findvalue]
    );
    const handleWindowSearch = () => {
        setShowFind((prev) => !prev);
    };
    useEffect(() => {
        if (showFind === true) {
            inputRef.current.focus();
        }
    }, [showFind]);

    useEffect(() => {
        props.searchChanged(debouncedSearchTerm);
    }, [debouncedSearchTerm]);
    return (
        <Stack
            ref={headingRef}
            direction="column"
            spacing={1}
            px={2}
            py={1}
            style={{ background: "#f7f7f7" }}
        >
            <Stack direction="row" spacing={1} justifyContent="space-between">
                <Box sx={{ display: "flex", gap: 2 }}>
                    <TextList />
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
                    <Refresh isSecondWindowOpen={props.isSecondWindowOpen} />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Annotate {...props} />
                    <WindowSplitter
                        isSecondWindowOpen={props.isSecondWindowOpen}
                        onChangeWindowOpen={props.onChangeWindowOpen}
                    />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Search handleWindowSearch={handleWindowSearch} />
                    <Share {...props} />
                    <Settings {...props} />
                    <TableOfContent {...props} />
                </ButtonGroup>
            </Stack>

            <Collapse in={showFind}>
                <form onSubmit={handleSearch}>
                    <Stack direction="row" spacing={2}>
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
                            inputRef={inputRef}
                            value={findvalue}
                            onChange={(e) => setfindvalue(e.target.value)}
                            onBlur={() => setShowFind(false)}
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
