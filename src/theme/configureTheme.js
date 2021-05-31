import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY = {
    lighter: '#C8FACD',
    light: '#5BE584',
    main: '#00AB55',
    dark: '#007B55',
    darker: '#005249'
};

const SECONDARY = {
    light: '#546e7a',
    main: '#37474f',
    dark: '#263238'
};

const theme = createMuiTheme({
    palette: {
        common: {
            mainColor: '#f2f2f2',
            subColor: '#919EAB'
        },
        primary: {
            light: PRIMARY.light,
            main: PRIMARY.main,
            dark: PRIMARY.dark
        },
        secondary: {
            light: SECONDARY.light,
            main: SECONDARY.main,
            dark: SECONDARY.dark
        }
    }
});

export default theme;