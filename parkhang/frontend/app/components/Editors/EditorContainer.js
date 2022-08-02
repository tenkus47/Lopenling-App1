import React, { useState } from "react";
import TextsSearchContainer from "components/TextsSearch/TextsSearchContainer";
import TextListContainer from "containers/TextListContainer";
import TextListTabContainer from "components/TextList/TextListTabContainer";
import * as constants from "app_constants";
import lopenlingLogo from "images/lopenling_logo.png";
import headerStyles from "components/Header/Header.css";
import Resources from "components/Resources";
import SplitPane, { Pane } from "react-split-pane";
import styles from "./EditorContainer.css";
import classnames from "classnames";
import utilStyles from "css/util.css";
import TextSheet from "./TextSheet";
import { Button, Drawer } from "@mui/material";
const Editor = ({ props }) => {
    let textListClassnames = [styles.listContainer];
    let bodyHeight;
    let minSize = constants.MIN_TEXT_LIST_WIDTH;
    let maxSize = constants.MAX_TEXT_LIST_WIDTH;

    const [open, setOpen] = useState(false);

    let defaultSize = constants.DEFAULT_TEXT_LIST_WIDTH;
    let size = props.textListWidth;
    if (props.textListIsVisible) {
        textListClassnames.push(styles.showListContainer);
    } else {
        size = 0;
        textListClassnames.push(styles.hideListContainer);
    }

    bodyHeight = "calc(100vh - " + headerStyles.headerHeight + ")";

    const image_location = lopenlingLogo;

    // return (
    //     <div className={classnames(styles.interface, utilStyles.flex)}>
    //         <SplitPane
    //             split="vertical"
    //             minSize={minSize}
    //             maxSize={maxSize}
    //             defaultSize={defaultSize}
    //             size={size}
    //             paneStyle={{
    //                 display: "flex",
    //             }}
    //             style={{
    //                 height: bodyHeight,
    //             }}
    //             onDragFinished={(width: number) => {
    //                 if (width > 0) {
    //                     props.onChangedTextWidth(width);
    //                     if (!props.textListIsVisible) {
    //                         props.onChangedTextListVisible(true);
    //                     }
    //                 }
    //                 window.dispatchEvent(new Event("resize"));
    //             }}
    //         >
    //             <div className={classnames(...textListClassnames)}>
    //                 <Resources />
    //             </div>

    //             <TextSheet bodyHeight={bodyHeight} />
    //         </SplitPane>
    //     </div>
    // );

    return (
        <div className={classnames(styles.interface, utilStyles.flex)}>
            <TextSheet bodyHeight={bodyHeight} />
        </div>
    );
};

export default Editor;
