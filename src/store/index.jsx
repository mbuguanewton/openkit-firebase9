import { configureStore } from '@reduxjs/toolkit'
import TodosReducer from './slices/TodosSlice'

const store = configureStore({
    reducer: {
        todos: TodosReducer,
    },
})

export default store
