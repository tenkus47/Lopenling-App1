import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./textDetailHeading.css";
import SelectVersion from "./SelectVersion";
import _ from "lodash";
import TextList from "./TextListContainer";
import {
    Stack,
    Box,
    TextField,
    Button,
    Collapse,
    Divider,
    ButtonGroup,
    ListItem,
    List,
} from "@mui/material";
import Share from "./HeaderMenu/Share";
import Annotate from "./HeaderMenu/Annotate";
import Refresh from "./HeaderMenu/Refresh";
import Search from "./HeaderMenu/Search";
import WindowSplitter from "./HeaderMenu/WindowSplitter";
import Settings from "./HeaderMenu/Settings";
import TableOfContent from "./HeaderMenu/TableOfContent";
import Autocomplete from "@mui/material/Autocomplete";

type HeaderProps = {
    selectedText: {},
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
    changeShowTableContent: () => void,
    searchResults: [],
};

function TextDetailHeading(props: HeaderProps) {
    const [findvalue, setfindvalue] = useState("");
    let [showFind, setShowFind] = useState(false);
    let [visible, setVisible] = useState(false);

    const headingRef = useRef();
    const inputRef = useRef();
    const handleListItemClick = (id) => {
        props.changeSelectSyncId(id);
        setVisible(false);
    };
    const debouncedSearch = React.useRef(
        _.debounce((s) => {
            props.searchChanged(s);
        }, 1000)
    ).current;
    const handleSearch = useCallback(
        (e) => {
            e.preventDefault();
            setfindvalue("");
            debouncedSearch(findvalue);
            setVisible(true);
        },
        [findvalue]
    );
    const handleWindowSearch = useCallback(() => {
        if (showFind === false) debouncedSearch(null);
        setShowFind(!showFind);
    }, [showFind]);

    useEffect(() => {
        if (showFind === true) {
            inputRef.current.focus();
        }
        if (showFind === false) debouncedSearch(null);
    }, [showFind]);

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
                    {/* <Annotate {...props} /> */}
                    {/* <WindowSplitter
                        isSecondWindowOpen={props.isSecondWindowOpen}
                        onChangeWindowOpen={props.onChangeWindowOpen}
                    /> */}
                    {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                    <Search handleWindowSearch={handleWindowSearch} />
                    {/* <Share {...props} /> */}
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
                        />

                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleSearch}
                            style={{ height: 25 }}
                        >
                            Search
                        </Button>

                        {props.searchResults && visible && (
                            <List
                                sx={{
                                    position: "absolute",
                                    top: 84,
                                    zIndex: 1,
                                    background: "#eee",
                                    boxShadow: 3,
                                }}
                            >
                                {_.isObject(props.searchResults) &&
                                    props.searchResults.hasOwnProperty(
                                        props.selectedText.id
                                    ) &&
                                    props.searchResults[
                                        props.selectedText.id
                                    ].results.map((l, i) => {
                                        return (
                                            <ListItem
                                                onClick={() =>
                                                    handleListItemClick(l[0])
                                                }
                                                sx={{
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        background: "#fff",
                                                    },
                                                }}
                                                key={l[0] + "listsearch"}
                                            >
                                                {l[1]}
                                            </ListItem>
                                        );
                                    })}
                            </List>
                        )}
                    </Stack>
                </form>
            </Collapse>
        </Stack>
    );
}

export default TextDetailHeading;
