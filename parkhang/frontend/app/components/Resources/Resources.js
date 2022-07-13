import React, { useState } from "react";
import styles from "./Resources.css";
import InfoIcon from "@mui/icons-material/Info";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import BookIcon from "@mui/icons-material/Book";
import FeedbackIcon from "@mui/icons-material/Feedback";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import classnames from "classnames";
import Index from "./ResourceOption";
import { NavLink } from "redux-first-router-link";
import lopenlingLogo from "images/lopenling_logo.png";
import useLocalStorage from "bodyComponent/utility/useLocalStorage";
import { Button, ButtonGroup } from "@mui/material";
function Resources() {
    const image_location = lopenlingLogo;
    const [selectedOption, setSelectedOption] = useLocalStorage(
        "selectedResources",
        0
    );
    const handleClick = (num) => {
        setSelectedOption(num);
    };
    const resources = [
        {
            id: 0,
            title: "About",
        },
        {
            id: 1,
            title: "Resources",
        },
        {
            id: 2,
            title: "Dictionary",
        },
        {
            id: 3,
            title: "Commentary",
        },
        {
            id: 4,
            title: "Search",
        },
    ];

    return (
        <div className={styles.Resources}>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
            >
                {resources.map((resource, key) => (
                    <Button
                        disabled={selectedOption === key}
                        onClick={() => handleClick(resource.id)}
                        key={`resources-${key}`}
                    >
                        {resource.id === 0 && <InfoIcon />}
                        {resource.id === 1 && <PermMediaIcon />}
                        {resource.id === 2 && <BookIcon />}
                        {resource.id === 3 && <FeedbackIcon />}
                        {resource.id === 4 && <YoutubeSearchedForIcon />}
                    </Button>
                ))}
            </ButtonGroup>
            <div className={styles.ResourceDetail}>
                {selectedOption === 0 && <Index.About />}
                {selectedOption === 1 && <Index.Resources />}
                {selectedOption === 2 && <Index.Dictionary />}
                {selectedOption === 3 && <Index.Commentary />}
                {selectedOption === 4 && <Index.Search />}
            </div>
            <div className={styles.ResourceFooter}>
                <NavLink to="/">
                    <div className={styles.logo}>
                        <img src={image_location} height="30" />
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Resources;
