import { Box, Center, Grid, Heading, Spinner } from '@chakra-ui/react'
import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'

const TodoItem = lazy(() => import('./TodoItem'))

function TodosList() {
    const { todos, loading } = useSelector((state) => state.todos)

    const undoneTodos = todos ? todos.filter((todo) => !todo.isDone) : []

    const completeTodos = todos ? todos.filter((todo) => todo.isDone) : []
    return (
        <Box p='10px' my='1rem' width='100%'>
            <Box>
                <Heading my='1rem' fontSize='xl'>
                    Todos
                </Heading>
                {loading && (
                    <Center my='1rem'>
                        <Spinner size='lg' />
                    </Center>
                )}
                <Grid gap='0.5rem' templateColumns='repeat(1, 1fr)'>
                    {undoneTodos.map((todo) => (
                        <Suspense
                            key={todo?.name}
                            fallback={<p>Loading ...</p>}>
                            <TodoItem todo={todo} />
                        </Suspense>
                    ))}
                </Grid>
            </Box>
            {completeTodos.length > 0 && (
                <Box mt='2rem'>
                    <Heading my='1rem' fontSize='xl'>
                        Completed Todos
                    </Heading>
                    <Grid gap='0.5rem' templateColumns='repeat(1, 1fr)'>
                        {completeTodos.map((todo) => (
                            <Suspense
                                key={todo?.name}
                                fallback={<p>Loading ...</p>}>
                                <TodoItem todo={todo} />
                            </Suspense>
                        ))}
                    </Grid>
                </Box>
            )}

            {!loading && !todos.length && <Box>No todos found</Box>}
        </Box>
    )
}

export default TodosList
