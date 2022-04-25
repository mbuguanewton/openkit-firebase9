import { Box } from '@chakra-ui/react'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from './ErrorHandler'

function Layout({ children }) {
    return (
        <Box
            width='100%'
            height='100vh'
            overflow='hidden'
            bg='gray.800'
            color='gray.200'>
            <ErrorBoundary FallbackComponent={ErrorHandler}>
                {children}
            </ErrorBoundary>
        </Box>
    )
}

export default Layout
