import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    todo: null,
    toEdit: false,
    loading: false,
}

const todoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        changeLoadingState: (state, action) => {
            const { payload } = action
            return {
                ...state,
                loading: payload,
            }
        },
        addTodo: (state, action) => {
            const { payload } = action
            return {
                ...state,
                todos: [payload, ...state.todos],
            }
        },
        getTodos: (state, action) => {
            const { payload } = action
            return {
                ...state,
                todos: payload,
            }
        },
        updateTodo: (state, action) => {
            const { payload } = action
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === payload.id) {
                        return payload
                    }
                    return todo
                }),
            }
        },

        deleteTodo: (state, action) => {
            const { payload } = action
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== payload),
            }
        },

        setUpdateTodo: (state, action) => {
            const { payload } = action
            return {
                ...state,
                toEdit: true,
                todo: payload,
            }
        },

        resetUpdateTodo: (state, action) => {
            const { payload } = action
            return {
                ...state,
                toEdit: false,
                todo: payload,
            }
        },
    },
})

export const {
    changeLoadingState,
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    setUpdateTodo,
    resetUpdateTodo,
} = todoSlice.actions

export default todoSlice.reducer
