import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Box } from '@chakra-ui/react'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch, useSelector } from 'react-redux'
import AddTodoForm from '../forms/AddTodoForm'
import { resetUpdateTodo, updateTodo } from '../../store/slices/TodosSlice'
import { createTodo, editTodo } from '../../utils/requests'
import ErrorHandler from '../common/ErrorHandler'

function AddTodos() {
    const dispatch = useDispatch()
    const { toEdit, todo } = useSelector((state) => state.todos)

    const validationSchema = yup.object().shape({
        todo: yup.string().required('Todo is required'),
    })

    return (
        <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Box width='100%' p='10px'>
                <Formik
                    initialValues={{
                        todo: toEdit ? todo?.name : '',
                    }}
                    validationSchema={validationSchema}
                    enableReinitialize
                    onSubmit={async (values, _) => {
                        _.setSubmitting(true)

                        if (toEdit && todo) {
                            const updatedTodo = {
                                ...todo,
                                name: values.todo,
                                updated: new Date().getTime(),
                            }

                            await editTodo(todo?.id, updatedTodo)
                            dispatch(updateTodo(updatedTodo))
                            dispatch(resetUpdateTodo(null))
                        } else {
                            const params = {
                                name: values.todo,
                                isDone: false,
                                updated: null,
                                created: new Date().getTime(),
                            }

                            await createTodo(params)
                            // dispatch(addTodo(params))
                        }

                        _.setSubmitting(false)
                        _.resetForm()
                    }}>
                    {({
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        isSubmitting,
                    }) => (
                        <AddTodoForm
                            submit={handleSubmit}
                            values={values}
                            errors={errors}
                            touched={touched}
                            loading={isSubmitting}
                            edit={toEdit}
                        />
                    )}
                </Formik>
            </Box>
        </ErrorBoundary>
    )
}

export default AddTodos
