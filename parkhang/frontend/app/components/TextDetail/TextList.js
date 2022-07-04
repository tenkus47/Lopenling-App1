import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import classname from "classnames";
import styles from "./TextList.css";
import useClickOutSide from "../UI/useClickOutSideClose";

function TextList(props) {
    const [textslist, setTextlist] = useState([]);
    const fetchTextList = useCallback(async () => {
        let response = await axios("/api/texts/");
        setTextlist(response.data);
    }, []);

    const onSelectedText = props.onSelectedText;
    const selectedText = props.selectedText;
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(textslist[0]?.name);
    useEffect(() => {
        fetchTextList();
    }, []);
    const cache = useRef(
        new CellMeasurerCache({
            fixedHeight: true,
            defaultHeight: 30,
        })
    );

    let classes = [styles.textlist];

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        if (isOpen === false) classes.push(styles.open);
    };
    const domNode2 = useClickOutSide(() => setIsOpen(false));

    return (
        <div style={{ position: "relative" }} ref={domNode2}>
            <button onClick={handleClick} className={styles.listToggelBtn}>
                {selectedText ? selectedText.name : selected}
            </button>
            {isOpen && (
                <div
                    className={classname(classes)}
                    style={{ position: "absolute" }}
                >
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
                                                    setSelected(data.name);
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
    );
}

export default TextList;
