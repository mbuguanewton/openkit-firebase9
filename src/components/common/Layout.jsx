import { Box } from '@chakra-ui/react'
import React from 'react'

function Layout({ children }) {
    return (
        <Box
            width='100%'
            height='100vh'
            overflow='hidden'
            bg='gray.800'
            color='gray.200'>
            {children}
        </Box>
    )
}

export default Layout
