import { motion } from 'framer-motion';
import Head from 'next/head'

export default function Poems() {
    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <motion.div exit={{ opacity: 0 }}>
                <h1>writing</h1>
            </motion.div>
        </>
    )
}