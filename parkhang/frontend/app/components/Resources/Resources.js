import React from "react";
import styles from "./Resources.css";
import InfoIcon from "@mui/icons-material/Info";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import BookIcon from "@mui/icons-material/Book";
import FeedbackIcon from "@mui/icons-material/Feedback";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import Index from "./ResourceOption";
import { NavLink } from "redux-first-router-link";
import lopenlingLogo from "images/lopenling_logo.png";
import useLocalStorage from "bodyComponent/utility/useLocalStorage";
import { Tabs, Tab, Typography, Box } from "@mui/material";

function Resources() {
    const image_location = lopenlingLogo;
    const [value, setValue] = useLocalStorage("selectedResources", 0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxWidth: "250px",
            }}
        >
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                }}
                className={styles.optionlist}
            >
                <Tabs
                    value={value}
                    style={{ flex: 1 }}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<InfoIcon />}
                        {...a11yProps(0)}
                    ></Tab>

                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<PermMediaIcon />}
                        {...a11yProps(1)}
                    ></Tab>
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<BookIcon />}
                        {...a11yProps(2)}
                    ></Tab>
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<FeedbackIcon />}
                        {...a11yProps(3)}
                    ></Tab>
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<YoutubeSearchedForIcon />}
                        {...a11yProps(4)}
                    ></Tab>
                </Tabs>
            </Box>
            <Box flex={1}>
                <TabPanel value={value} index={0}>
                    <Index.About />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Index.Resources />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Index.Dictionary />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Index.Commentary />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Index.Search />
                </TabPanel>
            </Box>
            <Box alignSelf="center">
                <NavLink to="/">
                    <div className={styles.logo}>
                        <img src={image_location} height="30" />
                    </div>
                </NavLink>
            </Box>
        </Box>
    );
}

export default Resources;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box pt={2}>{children}</Box>}
        </div>
    );
}
