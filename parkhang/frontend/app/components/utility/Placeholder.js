import React from "react";
import styles from "./Placeholder.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function Placeholder() {
    return (
        <div className={styles.placeholder}>
            <ArrowUpwardIcon color="inherit" />
        </div>
    );
}

export default React.memo(Placeholder);
