import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import ScrollTop from '../components/common/ScrollTop'
import Home from '../pages/Home'
import NotFound from '../pages/404'

function AppRouter() {
    return (
        <Box>
            <Router>
                <ScrollTop />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='*' component={<NotFound />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default AppRouter
