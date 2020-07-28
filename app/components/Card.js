import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import theme from "./theme";
import Link from "next/link";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    root: {
        // minWidth: 275,
        backgroundColor: "transparent",
        color: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        [theme.breakpoints.up("lg")]: {
            maxWidth: 400,
            maxHeight: 250,
        },
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    time: {
        fontSize: 19,
        fontStyle: "italic",
        textAlign: "right",
        color: theme.palette.background.default,
        opacity: "50%",
        padding: 2,
    },
    // pos: {
    //     marginBottom: 12,
    // },
}));

export default function SimpleCard({ post }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Link href="/poems/[url]" as={`/poems/${post.url}`}>
            <Card className={classes.root} elevation={0}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        {/* <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography> */}
                        <Typography variant="body2" component="p">
                            <div
                                className="preview-content"
                                dangerouslySetInnerHTML={{
                                    __html: post.preview,
                                }}
                            />
                        </Typography>
                    </CardContent>
                    <Typography
                        className={classes.time}
                        align="right"
                        color="textSecondary"
                        gutterBottom
                    >
                        19 7 31
                    </Typography>
                </CardActionArea>
            </Card>
        </Link>
    );
}
