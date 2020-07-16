import { motion } from 'framer-motion';
import Head from 'next/head'
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
    const classes = useStyles()
    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <div className={classes.toolbar} />
            <motion.div exit={{ opacity: 0 }}>
                <h1>writing</h1>
            </motion.div>
        </>
    )
}