import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import GothamMediumWoff from '../public/fonts/Gotham-Medium.woff'
import GothamUltraWoff from '../public/fonts/Gotham-Ultra.woff'

const gothamMedium = {
    fontFamily: 'Gotham Medium',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${GothamMediumWoff}) format('woff')`,
};

const gothamUltra = {
    fontFamily: 'Gotham Ultra',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `url(${GothamUltraWoff}) format('woff')`,
};

// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Gotham Medium, Gotham Ultra',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [gothamMedium, gothamUltra],
            },
        },
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f5e8d7',
            content: '#1f535b'
        },
    },
});

export default theme;