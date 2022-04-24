import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
})

const colors = {
    brand: {
        primary: { base: '#45cea0', light: '#50eeb9' },
    },
}

const theme = extendTheme({
    breakpoints,
    colors,
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
})

export default theme
