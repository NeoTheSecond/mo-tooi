import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './navbar.less';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        // width: drawerWidth,
        // flexShrink: 0,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f5e8d7",
        border: 0,
        display: "flex",
        height: "100%",
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

function Navbar(props) {
    const { window } = props;
    const router = useRouter()
    const [activeMenu, setMenu] = useState(router.pathname)
    const classes = useStyles();

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <Hidden smUp implementation="css">
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Responsive drawer
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    {/* mobile size */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <div>
                            <Link href="/">
                                <a onClick={handleDrawerToggle}><img className="logo" src='/images/mo-tooi-logo.png' /></a>
                            </Link>

                            <p className="subtitleText" >Là <b>một</b> trang web<br /> của <b>những</b> kẻ mộng mơ</p>
                            <List>
                                <Link href="/poems">
                                    <ListItem
                                        selected={"/poems" === router.pathname ? true : false}
                                        classes={{ root: classes.link, selected: classes.selected }}
                                        button
                                        onClick={handleDrawerToggle}
                                    >
                                        <ListItemText primary="Poems" />
                                    </ListItem>
                                </Link>
                                <Link href="/writings">
                                    <ListItem
                                        selected={"/writings" === router.pathname ? true : false}
                                        classes={{ root: classes.link, selected: classes.selected }}
                                        button
                                        onClick={handleDrawerToggle}
                                    >
                                        <ListItemText primary="Writings" />
                                    </ListItem>
                                </Link>

                                <Link href="/about">
                                    <ListItem
                                        selected={"/about" === router.pathname ? true : false}
                                        classes={{ root: classes.link, selected: classes.selected }}
                                        button
                                        onClick={handleDrawerToggle}
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
                </Hidden>
                <Hidden xsDown implementation="css">
                    {/* desktop size */}
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        anchor="top"
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
                </Hidden>
            </nav>
        </>
    )

}
export default Navbar;