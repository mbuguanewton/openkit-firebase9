import { Box, Heading, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import Layout from '../components/common/Layout'
import AddTodos from '../components/todos/AddTodos'
import TodosList from '../components/todos/TodosList'
import { changeLoadingState, getTodos } from '../store/slices/TodosSlice'
import db from '../utils/firebase.config'

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLoadingState(true))
        const colRef = collection(db, 'todos')
        const q = query(colRef, orderBy('created', 'desc'))
        const unsub = onSnapshot(q, (snapshot) => {
            const todos = snapshot.docs.map((doc) => {
                const todo = { id: doc.id, ...doc.data() }
                return todo
            })
            dispatch(getTodos(todos))
            dispatch(changeLoadingState(false))
        })

        return () => unsub()
    }, [])
    return (
        <Layout>
            <Box width='100%' height='100vh' overflowY='auto'>
                <VStack
                    my='2rem'
                    mx='auto'
                    width={['90%', '90%', '60%', '50%', '40%']}
                    alignItems='flex-start'
                    position='relative'>
                    <Box
                        minHeight='10vh'
                        width='100%'
                        p='10px'
                        bg='gray.800'
                        top='0'
                        left='0'
                        zIndex='10'
                        position='sticky'>
                        <Heading fontSize='3xl' my='1rem'>
                            Openkit todos
                        </Heading>
                        <AddTodos />
                    </Box>

                    <TodosList />
                </VStack>
            </Box>
        </Layout>
    )
}

export default Home
