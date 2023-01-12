import { createTheme, ThemeOptions } from "@mui/material";

interface AppThemeOptions extends ThemeOptions {
}

const themeOptions: AppThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: '#7d64fc',
        },
        secondary: {
            main: '#2b90ef',
        },
        tertiary: {
            main: "#59bdb5"
        },
        quaternary: {
            main: "#f0a444"
        },
        text: {
            primary: '#2d283d',
            onPrimary: "#ffffff"
        },
    } as any,
    typography: {
        fontFamily: 'Visby Regular'
    }
};

const appTheme = createTheme(themeOptions);

export default appTheme;