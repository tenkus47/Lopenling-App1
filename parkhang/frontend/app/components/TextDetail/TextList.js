import React, { useState, useRef } from "react";
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import classname from "classnames";
import styles from "./TextList.css";
import { TextField, ClickAwayListener, Box, Typography } from "@mui/material";

function TextList(props) {
    const temptext = useRef(props.texts);
    const [textslist, setTextList] = useState(temptext.current);
    const onSelectedText = props.onSelectedText;
    const selectedText = props.selectedText;
    const [isOpen, setIsOpen] = useState(false);
    let selected = selectedText ? selectedText.name : textslist[0].name;
    const cache = useRef(
        new CellMeasurerCache({
            fixedHeight: true,
            defaultHeight: 30,
            defaultWidth: 400,
        })
    );

    let classes = [styles.textlist];

    const truncate = (string = "", limit) => {
        if (string.length <= limit) {
            return string;
        }
        return string.slice(0, limit) + "...";
    };

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        if (isOpen === false) classes.push(styles.open);
    };
    const handleChange = (e) => {
        let value = e.target.value;
        setTextList(temptext.current);
        if (value === "" || value === null) {
            return;
        }

        let newtextslist = textslist.filter((l) => l.name.includes(value));
        setTextList(newtextslist);
    };

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <div style={{ position: "relative" }}>
                <Box
                    onClick={handleClick}
                    className={styles.listToggelBtn}
                    component="div"
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "10rem",
                    }}
                >
                    <Typography noWrap={true}>{selected}</Typography>
                </Box>
                {isOpen && (
                    <div
                        className={classname(classes)}
                        style={{ position: "absolute" }}
                    >
                        <TextField
                            onChange={handleChange}
                            id="standard-basic"
                            label="filter"
                            variant="standard"
                            style={{ width: "100%" }}
                        />
                        <AutoSizer>
                            {({ width, height }) => (
                                <List
                                    width={width}
                                    height={height}
                                    rowHeight={cache.current.rowHeight}
                                    deferredMeasurementCache={cache.current}
                                    rowCount={textslist.length}
                                    rowRenderer={({
                                        key,
                                        index,
                                        style,
                                        parent,
                                    }) => {
                                        let data = textslist[index];
                                        return (
                                            <CellMeasurer
                                                key={`optionvalues-${key}`}
                                                cache={cache.current}
                                                parent={parent}
                                                columnIndex={0}
                                                rowIndex={index}
                                            >
                                                <div
                                                    style={style}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        onSelectedText(data);
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            paddingLeft: "10px",
                                                        }}
                                                    >
                                                        {data.name}
                                                    </span>
                                                </div>
                                            </CellMeasurer>
                                        );
                                    }}
                                />
                            )}
                        </AutoSizer>
                    </div>
                )}
            </div>
        </ClickAwayListener>
    );
}

export default TextList;
