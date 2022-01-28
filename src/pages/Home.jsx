import {
    Box,
    Center,
    Heading,
    HStack,
    IconButton,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Home() {
    return (
        <Box p='50px 20px'>
            <Center
                width='50%'
                mx='auto'
                border='2px solid'
                p='50px 20px'
                borderRadius='10px'
                spacing='8'
                flexDirection='column'
                borderColor='gray.300'>
                <Heading mb='2rem'>Template</Heading>
                <HStack spacing='5'>
                    <Text>Copyright &copy; {new Date().getFullYear()}</Text>
                    <IconButton
                        as='a'
                        href='https://github.com/newtfrank/fe-template-with-vitejs'
                        target='_blank'
                        rel='noreferer noopener'
                        colorScheme='blue'
                        icon={<FaGithub />}
                        variant='outline'
                        fontSize='1.2rem'
                    />
                </HStack>
            </Center>
        </Box>
    )
}

export default Home
