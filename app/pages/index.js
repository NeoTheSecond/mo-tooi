import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head'

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

function Index() {
    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <motion.div
                exit={{ x: "50%" }}
                initial={{ x: "50%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    height: "100vh",
                    width: "100%",
                    margin: "0px",
                    backgroundImage: "url(/images/foreground.png)",
                    backgroundSize: "contain",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    padding: "2em"
                }}
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

                {/* <motion.div variants={stagger} className="social-container">
                <motion.img
                    src="/icons/tw-icon.png"
                    style={{ width: "50px", height: "50px" }}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                />
                <motion.img
                    src="/icons/ins-icon.png"
                    style={{ width: "50px", height: "50px" }}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                />
                <motion.img
                    src="/icons/fb-icon.png"
                    style={{ width: "50px", height: "50px" }}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                />
            </motion.div> */}
            </motion.div>
        </>
    )
    // return (

    //     <>
    //         <motion.img
    //             exit={{ x: "50%" }}
    //             initial={{ x: "50%" }}
    //             animate={{ x: 0 }}
    //             transition={{ duration: 0.8 }}
    //             src="/images/foreground.png"
    //             style={{ height: "100vh", width: "auto", margin: "0px" }}
    //         />
    //         <img src="/icons/fb-icon.png" style={{ width: "50px", height: "50px" }} />
    //     </>
    // )
    // return (
    //     <img src="/images/foreground.png" style={{ height: "100vh", width: "auto", margin: "0px" }} />

    // )
}
export default Index;
