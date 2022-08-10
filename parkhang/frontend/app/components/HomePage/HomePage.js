import React, { useEffect, useState } from "react";
import _ from "lodash";
import Link from "redux-first-router-link";
import addTibetanShay from "lib/addTibetanShay";
import styles from "./HomePage.css";
import {
    CircularProgress,
    Card,
    CardContent,
    Typography,
    Grid,
    Container,
    Stack,
    Chip,
    Box,
    IconButton,
    Collapse,
    FormControlLabel,
    Checkbox,
    Divider,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Filter from "./Filter";
import { motion } from "framer-motion";
function HomePage(props) {
    let { Textdata } = props;
    let { activeText, isloaded, detail } = Textdata;
    const [filteredData, setFilteredData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [filteredTitle, setFilteredTitle] = useState(null);
    const [categorySelected, setCategorySelected] = useState([]);
    const [author, setAuthor] = useState([]);
    const [lengthRange, setLengthRange] = useState([]);

    const handleToggleFilter = () => {
        setShowFilter((prev) => !prev);
    };

    useEffect(() => {
        let tempData = [];
        if (filteredTitle !== null) {
            tempData = detail?.filter((val) => {
                if (filteredTitle === "") return val;
                else return val.title.includes(filteredTitle);
            });
        }
        if (categorySelected.length) {
            tempData = tempData.filter((val) => {
                return categorySelected.includes(val.category);
            });
        }
        if (lengthRange.length) {
            tempData = tempData.filter((val) => {
                return (
                    val.length >= lengthRange[0] && val.length < lengthRange[1]
                );
            });
        }
        if (author.length) {
            tempData = tempData.filter((val) => {
                return author.includes(val.author);
            });
        }
        setFilteredData(tempData.sort((a, b) => a?.order - b?.order));
    }, [filteredTitle, categorySelected, lengthRange, author]);

    if (activeText === null && isloaded) {
        return (
            <Stack>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    mx={2}
                    mt={3}
                >
                    <Typography variant="h5" color="#888" mx={3}>
                        Browse the Library
                    </Typography>

                    <IconButton onClick={handleToggleFilter}>
                        <FilterAltIcon />
                    </IconButton>
                </Box>
                <Collapse in={showFilter}>
                    <Filter
                        setFiltered={setFilteredTitle}
                        setCategoryList={setCategorySelected}
                        setLengthRange={setLengthRange}
                        setAuthor={setAuthor}
                    />
                </Collapse>
                <Divider />
                <Container>
                    <Box
                        className={styles.list}
                        mt={2}
                        sx={{ overflowY: "scroll" }}
                        py={1}
                        height={{ xs: "60vh", md: "auto" }}
                    >
                        {!isloaded ? (
                            <CircularProgress />
                        ) : (
                            <motion.div layout>
                                <Grid
                                    container
                                    rowSpacing={2}
                                    columnSpacing={2}
                                >
                                    {filteredData.map((pecha, i) => {
                                        return (
                                            <Grid
                                                key={`child-${i}`}
                                                item
                                                xs={12}
                                                sm={6}
                                                md={4}
                                                px={1}
                                            >
                                                <motion.div
                                                    animate={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    layout
                                                >
                                                    <Link
                                                        to={`/texts/${pecha.text}`}
                                                    >
                                                        <Card
                                                            sx={{
                                                                borderLeft:
                                                                    "2px solid black",
                                                                cursor: "pointer",
                                                            }}
                                                            elevation={3}
                                                            key={pecha.id}
                                                        >
                                                            <CardContent>
                                                                <Typography
                                                                    gutterBottom
                                                                    variant="h6"
                                                                    textAlign="center"
                                                                    textTransform="capitalize"
                                                                    fontWeight="bold"
                                                                >
                                                                    {addTibetanShay(
                                                                        pecha.title
                                                                    )}
                                                                </Typography>
                                                                <Typography
                                                                    variant="body2"
                                                                    color="text.secondary"
                                                                >
                                                                    {
                                                                        pecha.description
                                                                    }
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Link>
                                                </motion.div>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </motion.div>
                        )}
                    </Box>
                </Container>
            </Stack>
        );
    } else {
        return <div>Loading ...</div>;
    }
}

export default HomePage;
