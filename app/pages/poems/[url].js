import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Hidden from "@material-ui/core/Hidden";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.background.default,
        backgroundColor: "blue",
    },
    grid: {
        // padding: "5rem"
    },
    container: {
        backgroundColor: "#1f535b",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        [theme.breakpoints.up("lg")]: {
            padding: "5rem",
        },
        [theme.breakpoints.down("md")]: {
            padding: "1rem",
        },
    },
}));

function Post({ post }) {
    const classes = useStyles();
    // return (
    //     <div>
    //         <h1>{post.title}</h1>
    //     </div>
    // )
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <Hidden smUp implementation="css">
                {/* mobile size */}
                <motion.div
                    exit={{ y: "100%" }}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={classes.container}
                >
                    <div className={classes.toolbar} />
                    <h1>{post.title}</h1>
                </motion.div>
            </Hidden>
            <Hidden xsDown implementation="css">
                {/* desktop size */}
                <motion.div
                    exit={{ x: "100%" }}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={classes.container}
                >
                    <Hidden mdUp implementation="css">
                        <div className={classes.toolbar} />
                    </Hidden>
                    <h1>{post.title}</h1>
                </motion.div>
            </Hidden>
        </>
    )
}

const fetchData = async (url) =>
    await axios({
        url: "http://localhost:3000/admin/api",
        method: "post",
        data: {
            query: `
                    query Post{
                        allPosts(where: {url: "${url}"}){
                            title
                        }
                    }
                `,
        },
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));

export async function getServerSideProps({ params }) {
    const data = await fetchData(params.url);

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            post: data.data.allPosts[0],
        },
    };
}

export default Post;