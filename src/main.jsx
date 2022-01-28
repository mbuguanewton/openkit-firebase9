import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'
import theme from './utils/chakra.config'
import '@fontsource/pt-sans/400.css'
import '@fontsource/pt-sans/700.css'
import '@fontsource/overpass-mono/400.css'
import '@fontsource/overpass-mono/600.css'
import '@fontsource/overpass-mono/700.css'
import AppRouter from './routes/Router'
import ContextProvider from './context'

const App = (
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <CSSReset />
            <ContextProvider>
                <AppRouter />
            </ContextProvider>
        </ChakraProvider>
    </React.StrictMode>
)

ReactDOM.render(App, document.getElementById('root'))
