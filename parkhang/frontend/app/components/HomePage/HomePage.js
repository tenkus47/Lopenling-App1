import React from "react";
import _ from "lodash";
import Link from "redux-first-router-link";
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
    if (activeText === null && isloaded) {
        return (
            <Container>
                <Typography variant="h5" color="#888" mt={4} mb={6}>
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
                        {Textdata?.detail?.map((pechalist, i) => {
                            return (
                                <Grid
                                    key={`child-${i}`}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                >
                                    <Link to={`/texts/${pechalist.text}`}>
                                        <Card
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
                                                    {pechalist.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </Container>
        );
    } else {
        return <div>Loading ...</div>;
    }
}

export default HomePage;
