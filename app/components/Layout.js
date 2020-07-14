import NavBar from "./Navbar"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing(3),
    },
}));

const Layout = props => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <NavBar />
            <main className={classes.content} >
                {props.children}
            </main>
        </div>
    )
}

export default Layout;