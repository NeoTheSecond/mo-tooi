import NavBar from "./Navbar"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import Link from 'next/link'
// const layoutStyle = {
//     display: "flex",
//     flexDirection: "row",
//     height: "100%",
//     width: "100%"
// };

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};
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

// const Layout = props => (
//     <div className="outer-container" >
//         <Grid columns={3} style={{ margin: "0px" }} >
//             <Grid.Row style={{ paddingBottom: "0px", paddingTop: "0px" }}>
//                 <Grid.Column width={5} style={{ height: "100vh", backgroundColor: "#f5e8d7" }}>
//                     <NavBar />
//                 </Grid.Column>
//                 <Grid.Column width={11} style={{ padding: "0px", backgroundColor: "#f5e8d7" }}>
//                     <div className="container" style={{ display: 'flex' }}>
//                         {props.children}
//                     </div>
//                 </Grid.Column>
//             </Grid.Row>
//         </Grid>
//     </div>
// )

// const Layout = props => (
//     <div className="Layout" style={layoutStyle}>
//         <NavBar />
//         <div className="Content" style={contentStyle}>
//             {props.children}
//         </div>
//     </div>
// )

export default Layout;