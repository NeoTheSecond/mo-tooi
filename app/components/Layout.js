import NavBar from "./Navbar"
import { Grid } from "semantic-ui-react"
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

const Layout = props => (
    <Grid columns={3} >
        <Grid.Row style={{ paddingBottom: "0px" }}>
            <Grid.Column width={4} style={{ height: "100vh", backgroundColor: "#f5e8d7" }}>
                <NavBar />
            </Grid.Column>
            <Grid.Column width={12}>{props.children}</Grid.Column>
        </Grid.Row>
    </Grid>
)

// const Layout = props => (
//     <div className="Layout" style={layoutStyle}>
//         <NavBar />
//         <div className="Content" style={contentStyle}>
//             {props.children}
//         </div>
//     </div>
// )

export default Layout;