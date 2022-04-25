import React from 'react'
import { Box, Heading, Alert, AlertIcon, Text } from '@chakra-ui/react'

function ErrorHandler({ error }) {
    return (
        <Box p='20px' mx='auto' width='100%'>
            <Heading my='2rem' fontSize='3xl'>
                Something went wrong!
            </Heading>
            <Alert
                status='error'
                borderRadius='10px'
                p='20px'
                alignItems='flex-start'>
                <AlertIcon />
                <Text fontSize='sm' color='red.500'>
                    {error.message}
                </Text>
            </Alert>
        </Box>
    )
}

export default ErrorHandler
