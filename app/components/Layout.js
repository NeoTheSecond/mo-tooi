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
    <div className="outer-container" >
        <Grid columns={3} style={{ margin: "0px" }} >
            <Grid.Row style={{ paddingBottom: "0px", paddingTop: "0px" }}>
                <Grid.Column width={5} style={{ height: "100vh", backgroundColor: "#f5e8d7" }}>
                    <NavBar />
                </Grid.Column>
                <Grid.Column width={11} style={{ padding: "0px", backgroundColor: "#f5e8d7" }}>
                    <div className="container" style={{ display: 'flex' }}>
                        {props.children}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
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