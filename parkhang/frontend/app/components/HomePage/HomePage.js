import React, { useState } from "react";
import Link from "redux-first-router-link";
import { history } from "redux-first-router";
import {
    CircularProgress,
    Card,
    CardContent,
    Typography,
    Grid,
    Container,
} from "@mui/material";
function HomePage(props) {
    let { Textdata } = props;
    let { activeText, isloaded } = Textdata;
    let historyObj = history();

    const LinkRef = React.forwardRef((props, ref) => (
        <div ref={ref}>
            <Link {...props} />
        </div>
    ));

    const truncate = (string = "", limit) => {
        if (string?.length <= limit) {
            return string;
        }
        return string.slice(0, limit) + "...";
    };
    if (activeText === null && Textdata?.detail?.length > 0) {
        return (
            <>
                <Container>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        mt={4}
                        mb={6}
                    >
                        Browse the Library
                    </Typography>

                    {!isloaded ? (
                        <CircularProgress />
                    ) : (
                        <Grid
                            container
                            rowSpacing={3}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            {Textdata.detail.map((pechalist, i) => {
                                return (
                                    <Grid
                                        key={`child-${i}`}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                        <Card
                                            onClick={() =>
                                                historyObj.push(
                                                    `/texts/${pechalist.text}`
                                                )
                                            }
                                            sx={{
                                                maxWidth: 345,
                                                borderLeft: "2px solid black",
                                                cursor: "pointer",
                                            }}
                                            elevation={3}
                                            key={pechalist.id}
                                        >
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    textAlign="center"
                                                    textTransform="capitalize"
                                                    fontWeight="bold"
                                                >
                                                    {pechalist.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {truncate(
                                                        pechalist?.description,
                                                        100
                                                    )}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Container>
            </>
        );
    } else {
        return null;
    }
}

export default HomePage;
