import {
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Text,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import moment from 'moment'
import { FaPencilAlt, FaTrashAlt, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import {
    deleteTodo,
    updateTodo,
    setUpdateTodo,
    resetUpdateTodo,
} from '../../store/slices/TodosSlice'
import { editTodo, removeTodo } from '../../utils/requests'
import ErrorHandler from '../common/ErrorHandler'

function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const { toEdit, todo: todoToUpdate } = useSelector((state) => state.todos)

    return (
        <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Box
                minHeight='10vh'
                bg='gray.700'
                borderRadius='10px'
                width='100%'
                p='20px'>
                <VStack
                    alignItems='flex-start'
                    color={todo?.isDone ? 'gray.500' : 'gray.300'}>
                    <Heading
                        fontSize='lg'
                        fontWeight='semibold'
                        textTransform='capitalize'>
                        {todo?.name}
                    </Heading>
                    <Text fontSize='sm' color='gray.400'>
                        {moment(todo?.created).format('DD, MMM YYYY')}
                    </Text>
                </VStack>

                <HStack
                    width='100%'
                    mt='1rem'
                    alignItems='center'
                    justifyContent='flex-end'>
                    <Button
                        bg={todo?.isDone ? 'gray.600' : 'brand.primary.light'}
                        _hover={{
                            bg: todo?.isDone
                                ? 'gray.500'
                                : 'brand.primary.base',
                        }}
                        _focus={{ outline: 'none' }}
                        _active={{ outline: 'none' }}
                        fontWeight='normal'
                        isDisabled={toEdit}
                        borderRadius='10px'
                        fontSize='sm'
                        onClick={async () => {
                            const params = {
                                ...todo,
                                isDone: !todo.isDone,
                                updated: new Date().getTime(),
                            }
                            await editTodo(todo?.id, params)
                            dispatch(updateTodo(params))
                        }}
                        color={todo?.isDone ? 'gray.400' : 'gray.700'}>
                        {todo?.isDone
                            ? 'Mark as incomplete'
                            : 'Mark as complete'}
                    </Button>
                    <IconButton
                        variant='outline'
                        borderColor={
                            toEdit ? 'brand.primary.light' : 'gray.400'
                        }
                        color={toEdit ? 'brand.primary.light' : 'gray.400'}
                        onClick={() => {
                            if (toEdit) {
                                dispatch(resetUpdateTodo(null))
                            } else {
                                dispatch(setUpdateTodo(todo))
                            }
                        }}
                        isDisabled={todo?.isDone}
                        _focus={{ outline: 'none' }}
                        _active={{ outline: 'none' }}
                        _hover={{
                            color: 'brand.primary.light',
                            borderColor: 'brand.primary.light',
                        }}
                        borderRadius='10px'
                        icon={
                            toEdit && todoToUpdate?.id === todo?.id ? (
                                <FaTimes />
                            ) : (
                                <FaPencilAlt />
                            )
                        }
                    />
                    <IconButton
                        variant='outline'
                        borderColor='gray.400'
                        color='gray.400'
                        isDisabled={toEdit}
                        onClick={async () => {
                            await removeTodo(todo?.id)
                            dispatch(deleteTodo(todo?.id))
                        }}
                        _hover={{
                            color: 'red.400',
                            borderColor: 'red.400',
                        }}
                        borderRadius='10px'
                        icon={<FaTrashAlt />}
                    />
                </HStack>
            </Box>
        </ErrorBoundary>
    )
}

export default TodoItem
