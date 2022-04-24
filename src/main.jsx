import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import theme from './utils/chakra.config'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/800.css'
import AppRouter from './routes/Router'
import store from './store'

const App = (
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>
)

ReactDOM.render(App, document.getElementById('root'))
