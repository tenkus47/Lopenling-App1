import React, { useCallback, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import updater from 'components/utility/updater';
function Refresh({ isSecondWindowOpen }) {
   

    useEffect(() => {
        let timer = setTimeout(() => {
            updater(1);
        }, 500);
        return () => clearTimeout(timer);
    }, [isSecondWindowOpen]);

    return (
        <IconButton
            variant="text"
            size="small"
            disableRipple
            onClick={()=>updater(1)}
        >
            <RefreshIcon />
        </IconButton>
    );
}

export default Refresh;
