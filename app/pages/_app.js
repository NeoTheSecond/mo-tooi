import Layout from "../components/Layout"
import CssBaseline from '@material-ui/core/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/theme';
import './styles.less'


function MyApp({ Component, pageProps, router }) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </ThemeProvider>
        </React.Fragment>

    )
}

export default MyApp