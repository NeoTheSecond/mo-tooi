import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Hidden from '@material-ui/core/Hidden';
import Head from 'next/head'
import './index.less'
import { makeStyles, useTheme } from '@material-ui/core/styles';

// for parent div to stagger the social media links
const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1.1
        }
    }
}

const fadeInLeft = {
    initial: {
        x: 60,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
    },
}));
function Index() {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <Hidden smUp implementation="css">
                <motion.div
                    className="container2"
                    exit={{ y: "50%" }}
                    initial={{ y: "50%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8 }}

                >
                    <div className={classes.toolbar} />
                    <motion.div variants={stagger} className="social-container" initial="initial" animate="animate">
                        <motion.img
                            src="/icons/tw-icon.png"
                            style={{ width: "50px", height: "50px" }}
                            variants={fadeInLeft}
                        />
                        <motion.img
                            src="/icons/ins-icon.png"
                            style={{ width: "50px", height: "50px" }}
                            variants={fadeInLeft}
                        />
                        <motion.img
                            src="/icons/fb-icon.png"
                            style={{ width: "50px", height: "50px" }}
                            variants={fadeInLeft}
                        />
                    </motion.div>
                </motion.div>
            </Hidden>
            <Hidden xsDown implementation="css">
                <motion.div
                    className="container"
                    exit={{ x: "50%" }}
                    initial={{ x: "50%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}

                >
                    <motion.div variants={stagger} className="social-container" initial="initial" animate="animate">
                        <motion.img
                            src="/icons/tw-icon.png"
                            style={{ width: "50px", height: "50px" }}
                            variants={fadeInLeft}
                        />
                        <motion.img
                            src="/icons/ins-icon.png"
                            style={{ width: "50px", height: "50px" }}
                            variants={fadeInLeft}
                        />
                        <motion.img
                            src="/icons/fb-icon.png"
                            style={{ width: "50px", height: "50px" }}
                            variants={fadeInLeft}
                        />
                    </motion.div>
                </motion.div>
            </Hidden>
            {/* <motion.div
                className="container"
                exit={{ x: "50%" }}
                initial={{ x: "50%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}

            >
                <motion.div variants={stagger} className="social-container" initial="initial" animate="animate">
                    <motion.img
                        src="/icons/tw-icon.png"
                        style={{ width: "50px", height: "50px" }}
                        variants={fadeInLeft}
                    />
                    <motion.img
                        src="/icons/ins-icon.png"
                        style={{ width: "50px", height: "50px" }}
                        variants={fadeInLeft}
                    />
                    <motion.img
                        src="/icons/fb-icon.png"
                        style={{ width: "50px", height: "50px" }}
                        variants={fadeInLeft}
                    />
                </motion.div>
            </motion.div> */}
        </>
    )
}
export default Index;
