import React, { useCallback, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button } from "@mui/material";
function Refresh({ isSecondWindowOpen }) {
    const handleRefresh = useCallback(() => {
        let updatelistBtn = document.getElementById("updateList");
        let updatelistBtn2 = document.getElementById("updateList2");

        if (updatelistBtn) updatelistBtn.click();
        if (updatelistBtn2) updatelistBtn2.click();
    }, [isSecondWindowOpen]);

    useEffect(() => {
        let timer = setTimeout(() => {
            handleRefresh();
        }, 500);
        return () => clearTimeout(timer);
    }, [isSecondWindowOpen]);

    return (
        <Button
            variant="text"
            size="small"
            style={{ padding: 0, color: "black" }}
            onClick={handleRefresh}
        >
            <RefreshIcon />
        </Button>
    );
}

export default Refresh;
