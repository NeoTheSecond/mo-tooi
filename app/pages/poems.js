import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head';
import axios from 'axios';
import './poems.less';
import Card from '../components/Card'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.background.default,
        backgroundColor: "blue"
    },
    grid: {
        // padding: "5rem"
    },
    container: {
        backgroundColor: "#1f535b",
        display: 'flex',
        flexDirection: "column",
        [theme.breakpoints.up('lg')]: {
            minHeight: "100vh",
            padding: "5rem",
        },
        [theme.breakpoints.down('md')]: {
            padding: "1rem"
        }
    }
}));

const fetchData = async () => await axios({
    url: "http://localhost:3000/admin/api",
    method: 'post',
    data: {
        query: `
                    query {
                        allPosts(where: {contentType: Poem, published: true}){
                            id,
                            title,
                            contentType,
                            preview,
                            description,
                            thumbnail{
                                publicUrl
                            },
                            mainImage{
                                publicUrl
                            },
                            published,
                            views
                        }
                    }
                `
    }
}).then(res => res.data)
    .catch(err => console.log(err))

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching librarVN

    const data = await fetchData()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts: data.data.allPosts
        },
    }
}

function Poems({ posts }) {
    const classes = useStyles()

    const CardContent = ({ post }) => {
        return <Card post={post} />
        // return (
        //     <Paper elevation={0} className={classes.paper}>
        //         <h1>{post.title}</h1>
        //         <div className="preview-content" dangerouslySetInnerHTML={{ __html: post.preview }} />

        //     </Paper>
        // )
    }

    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <Hidden mdUp implementation="css">
                {/* mobile size */}
                <motion.div
                    exit={{ y: "100%" }}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={classes.container}
                >
                    <div className={classes.toolbar} />
                    <Grid container spacing={3}>
                        {posts.map(post => (
                            <Grid item xs={12} key={post.id}>
                                <CardContent post={post} />
                            </Grid>
                        ))}

                    </Grid>
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
                    <Grid container spacing={3} className={classes.grid}>
                        {posts.map(post => (
                            <Grid item xs={6} key={post.id}>
                                <CardContent post={post} />
                            </Grid>
                        ))}

                    </Grid>
                </motion.div>
            </Hidden>

        </>

    )
}

export default Poems;