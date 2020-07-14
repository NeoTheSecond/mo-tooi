import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: ""
    },
}));

export default function Poems() {
    const [data, setData] = useState([])
    const classes = useStyles()
    // fetch the published poems
    useEffect(() => {
        axios({
            url: "http://localhost:3000/admin/api",
            method: 'post',
            data: {
                query: `
                    query {
                        allPosts(where: {contentType: Poem, published: true}){
                            id,
                            title,
                            contentType,
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
        }).then(res => setData(res.data.data.allPosts))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <Hidden smUp implementation="css">
                {/* mobile size */}
                <motion.div
                    exit={{ y: "100%" }}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundColor: "#1f535b", height: "100vh", flexDirection: "column", padding: "3em", display: 'flex' }}
                >
                    <div className={classes.toolbar} />
                    <Grid container spacing={3}>
                        {data.map(post => (
                            <Grid item xs={6} key={post.id}>
                                <Paper elevation={0} className={classes.paper}><h1>{post.title}</h1></Paper>
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
                    style={{ backgroundColor: "#1f535b", height: "100vh", padding: "3em", display: 'flex' }}
                >
                    <Grid container spacing={3}>
                        {data.map(post => (
                            <Grid item xs={6} key={post.id}>
                                <Paper elevation={0} className={classes.paper}><h1>{post.title}</h1></Paper>
                            </Grid>
                        ))}

                    </Grid>
                </motion.div>
            </Hidden>

        </>

    )
}