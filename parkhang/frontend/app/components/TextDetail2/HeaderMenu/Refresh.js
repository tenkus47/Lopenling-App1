import React, { useCallback, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import updater from 'components/utility/updater';

function Refresh({ isSecondWindowOpen }) {
   

    useEffect(() => {
        let timer = setTimeout(() => {
            updater(2);
        }, 500);
        return () => clearTimeout(timer);
    }, [isSecondWindowOpen]);

    return (
        <IconButton variant="text" size="small" onClick={()=>updater(2)}>
            <RefreshIcon />
        </IconButton>
    );
}

export default Refresh;
