import React, { useCallback, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
function Refresh({ isSecondWindowOpen }) {
   

    useEffect(() => {
        let timer = setTimeout(() => {
               window.dispatchEvent(new Event("resize"));
        }, 500);
        return () => clearTimeout(timer);
    }, [isSecondWindowOpen]);

    return (
        <IconButton
            variant="text"
            size="small"
            disableRipple
            onClick={()=>window.dispatchEvent(new Event("resize"))}
        >
            <RefreshIcon />
        </IconButton>
    );
}

export default Refresh;
