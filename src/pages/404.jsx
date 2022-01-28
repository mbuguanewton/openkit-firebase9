import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    Button,
    Image,
    HStack,
    VStack,
} from "@chakra-ui/react";

function NotFound() {
    return (
        <Box height="100vh" overflow="hidden" width="100%">
            <Box
                as={HStack}
                alignItems="center"
                justifyContent="center"
                my="5rem"
            >
                <VStack spacing="8">
                    <Image
                        src="/svg/notfound.svg"
                        alt="not found"
                        objectFit="contain"
                        height="50%"
                        width="50%"
                    />

                    <VStack spacing="5">
                        <Heading size="4xl">404 Not Found</Heading>
                        <Text mb="1rem" fontSize="1.2rem">
                            Could not find the page you were looking for!!
                        </Text>

                        <Link to="/">
                            <Button
                                height="3rem"
                                bg="brand.primary"
                                _hover={{ bg: "brand.hover" }}
                                _focus={{ bg: "brand.hover", outline: "none" }}
                                _active={{ bg: "brand.hover", outline: "none" }}
                                color="#fff"
                                borderRadius="10px"
                            >
                                Go back home &rarr;
                            </Button>
                        </Link>
                    </VStack>
                </VStack>
            </Box>
        </Box>
    );
}

export default NotFound;
