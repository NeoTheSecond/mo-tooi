import { motion } from 'framer-motion';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;
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
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
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
                            icon button
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
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    {/* desktop size */}
                    <Navbar />
                </Hidden>
            </nav>
            <main className={classes.content}>
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

            </main>
        </div>
    );
}

export default ResponsiveDrawer;
