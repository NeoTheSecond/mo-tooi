import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import './navbar.less';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f5e8d7",
        border: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: "2em",
        paddingTop: "8em",
        paddingBottom: "8em"
    },
    link: {
        color: "#ebae8d",
        '&:hover': {
            backgroundColor: "transparent",
            color: "#ca5e42"
        },
        "&:selected": {
            backgroundColor: "transparent"
        }

    },
    selected: {
        color: '#ca5e42',
        backgroundColor: "transparent",
        color: "#ca5e42",
        '&:hover': {
            backgroundColor: "transparent",
            color: "#ca5e42"
        },
    }
}));

const fadeInLeft = {
    initial: {
        x: 60,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            // ease: [0.6, -0.05, 0.01, 0.99],
            delay: 4
        }
    }
}

function Navbar() {
    const router = useRouter()
    const [activeMenu, setMenu] = useState(router.pathname)
    const classes = useStyles();

    return (

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div>
                <Link href="/">
                    <a><img className="logo" src='/images/mo-tooi-logo.png' /></a>
                </Link>

                <p className="subtitleText" >Là <b>một</b> trang web<br /> của <b>những</b> kẻ mộng mơ</p>
                <List>
                    <Link href="/poems">
                        <ListItem
                            selected={"/poems" === router.pathname ? true : false}
                            classes={{ root: classes.link, selected: classes.selected }}
                            button
                        >
                            <ListItemText primary="Poems" />
                        </ListItem>
                    </Link>
                    <Link href="/writings">
                        <ListItem
                            selected={"/writings" === router.pathname ? true : false}
                            classes={{ root: classes.link, selected: classes.selected }}
                            button
                        >
                            <ListItemText primary="Writings" />
                        </ListItem>
                    </Link>

                    <Link href="/about">
                        <ListItem
                            selected={"/about" === router.pathname ? true : false}
                            classes={{ root: classes.link, selected: classes.selected }}
                            button
                        >
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                </List>
            </div>
            <motion.div
                className="warning"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
            >
                <img src="/icons/warning-icon.png" style={{ height: "50px", width: "auto" }} />
                <div className="breaker"></div>
                <p>
                    Đọc quá 180 phút<br /> một ngày ảnh hưởng <br /> xấu đến sức khỏe
                    </p>
            </motion.div>
        </Drawer>
    )

}
export default Navbar;