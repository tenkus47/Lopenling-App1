import React, { useState } from "react";
import styles from "./LeftSection.css";
import Link from "redux-first-router-link";
import {
    CircularProgress,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    Container,
    Drawer,
} from "@mui/material";
function LeftSection(props) {
    var { Textdata } = props;
    var { activeText, isloaded } = Textdata;
    const [toggleDrawer, settoggleDrawer] = useState({
        open: false,
        info: null,
    });

    const LinkRef = React.forwardRef((props, ref) => (
        <div ref={ref}>
            <Link {...props} />
        </div>
    ));

    const truncate = (string = "", limit) => {
        if (string.length <= limit) {
            return string;
        }
        return string.slice(0, limit) + "...";
    };
    if (activeText === null && Textdata.detail.length > 0) {
        return (
            <>
                {" "}
                <Container>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        mt={4}
                        mb={2}
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
                                        md={3}
                                        sm={6}
                                    >
                                        <Card
                                            sx={{
                                                maxWidth: 345,
                                                borderLeft: "2px solid black",
                                            }}
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
                                            <CardActions>
                                                <Button
                                                    component={LinkRef}
                                                    to={`/texts/${pechalist.text}`}
                                                    size="small"
                                                >
                                                    Open
                                                </Button>
                                                <Button
                                                    size="small"
                                                    onClick={() =>
                                                        settoggleDrawer({
                                                            open: true,
                                                            info: pechalist,
                                                        })
                                                    }
                                                >
                                                    About
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Container>
                <React.Fragment key="right">
                    <Drawer
                        anchor="right"
                        open={toggleDrawer.open}
                        onClose={() =>
                            settoggleDrawer({ open: false, info: null })
                        }
                    >
                        {toggleDrawer.info && (
                            <Container maxWidth="xs">
                                <h1>{toggleDrawer.info.title}</h1>
                                <p>{toggleDrawer.info.description}</p>
                            </Container>
                        )}
                    </Drawer>
                </React.Fragment>
            </>
        );
    } else {
        return null;
    }
}

export default LeftSection;
