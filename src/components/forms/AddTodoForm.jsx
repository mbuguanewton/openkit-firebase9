import {
    Box,
    Button,
    FormControl,
    FormErrorIcon,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react'
import React from 'react'
import { Field } from 'formik'

function AddTodoForm({ submit, errors, touched, loading, edit }) {
    return (
        <Box as='form' onSubmit={submit}>
            <FormControl isRequired>
                <Field
                    as={Input}
                    name='todo'
                    _placeholder={{
                        color: 'gray.600',
                        fontSize: 'sm',
                        fontStyle: 'italic',
                    }}
                    placeholder='Add a todo'
                    borderColor='gray.500'
                    fontSize='sm'
                    _focus={{ outline: 'none' }}
                    autoComplete='off'
                    borderRadius='10px'
                    height='3rem'
                />
                <FormErrorMessage>
                    <FormErrorIcon />
                    {errors.todo && touched.todo && errors.todo}
                </FormErrorMessage>
            </FormControl>

            <FormControl my='1rem'>
                <Button
                    type='submit'
                    width='100%'
                    borderRadius='10px'
                    bg='brand.primary.base'
                    color='gray.700'
                    height='3rem'
                    _hover={{ bg: 'brand.primary.light', color: 'gray.700' }}
                    _focus={{ outline: 'none' }}
                    _active={{ outline: 'none' }}
                    isLoading={loading}
                    isDisabled={loading}>
                    {edit ? 'Update' : 'Add'} Todo
                </Button>
            </FormControl>
        </Box>
    )
}

export default AddTodoForm
