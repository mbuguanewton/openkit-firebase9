import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
});

const colors = {
    brand: {
        // primary: "#6f0dcc",
        // muted: "#9b5fd3",
    },
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("gray.100", "gray.800")(props),
        },
    }),
};

const theme = extendTheme({
    ...config,
    breakpoints,
    colors,
    styles,
    fonts: {
        heading: "PT Sans",
        body: "PT Sans",
        mono: "Overpass Mono",
    },
});

export default theme;
